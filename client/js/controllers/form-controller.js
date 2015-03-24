angular
    .module('app')
    .controller('FormController', ['$rootScope', '$scope', '$state', 'Organization', 'Project', 'RegionalData',
        'Contact', 'Location', 'Sector', 'SubSector', 'Funder', 'Contribution',
        function($rootScope, $scope, $state, Organization, Project, RegionalData, Contact, Location, Sector, SubSector, Funder, Contribution) {

            $scope.data = $scope.data || {};

            //$scope.data.projectSubSectors = ["550c58900809b92099e01774", "550c58900809b92099e01777", "550c58900809b92099e01778"];

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                if((toState.name != fromState.name) || (toParams.projectId != $scope.data.project.id)) {
                    delete $scope.data.project;
                    delete $scope.data.regionalData;
                    delete $scope.data.organization;
                    delete $scope.data.projectContacts;
                    delete $scope.data.contributions;
                    //delete $scope.data.projectSectors;
                    //delete $scope.data.projectSubSectors;
                    //console.log($state);
                    $scope.initProject();
                }
            });

            $scope.getAllSectors = function() {
                Sector
                    .find()
                    .$promise
                    .then(function(sectors) {
                        $scope.data.sectors = sectors;
                    });
            };

            $scope.getAllSubSectors = function() {
                SubSector
                    .find()
                    .$promise
                    .then(function(subSectors) {
                        $scope.data.subSectors = subSectors;
                    });
            };

            $scope.getSubSectorBySector = function(sector) {
                Sector
                    .subSectors(sector)
                    .$promise
                    .then(function(sectors) {
                        $scope.data.subSectors = sectors;
                    });
            };

            $scope.getProjects = function() {
                Project
                    .find()
                    .$promise
                    .then(function(results) {
                        $scope.data.projects = results;
                    });
            };

            $scope.getProjectById = function(item, callback) {
                Project
                    .findById(item)
                    .$promise
                    .then(function(result) {
                        $scope.data.project = result;
                        if($scope.data.project.StartDate !== undefined) {
                            $scope.data.project.StartDate = new Date($scope.data.project.StartDate);
                        }

                        if($scope.data.project.EndDate !== undefined) {
                            $scope.data.project.EndDate = new Date($scope.data.project.EndDate);
                        }
                        callback(result);
                    });
            };

            $scope.saveProject = function() {
                Organization
                    .upsert($scope.data.organization)
                    .$promise
                    .then(function(org) {
                        $scope.data.project.organizationId = org.id;
                        $scope.data.organization.location.organizationId = org.id;
                        Location
                            .upsert($scope.data.organization.location)
                            .$promise
                            .then(function (location) {
                                console.log("Organization Location " + location.Name + " saved.");
                            });
                        Project
                            .upsert($scope.data.project)
                            .$promise
                            .then(function (project) {
                                console.log("Project " + project.Name + " saved.");
                                $scope.data.project = project;

                                //Saving Funders and Contributions

                                for (var i = 0; i < $scope.data.contributions.length; i++) {
                                    (function (i) {
                                        var contrib = {projectId: project.id, Amount: $scope.data.contributions[i].Amount};
                                        if($scope.data.contributions[i].id !== undefined) {
                                            contrib.id = $scope.data.contributions[i].id;
                                        }
                                        if($scope.data.contributions[i].Funder.id !== undefined) {
                                            Funder
                                                .exists({id: $scope.data.contributions[i].Funder.id})
                                                .$promise
                                                .then(function(response) {
                                                    if(response.exists) {
                                                        contrib.funderId = $scope.data.contributions[i].Funder.id;
                                                        Contribution
                                                            .upsert(contrib)
                                                            .$promise
                                                            .then(function (contribution) {
                                                                console.log("Contribution " + contribution.id + " created.");
                                                            });
                                                    }
                                                    else {
                                                        Funder
                                                            .create($scope.data.contributions[i].Funder)
                                                            .$promise
                                                            .then(function(newFunder) {
                                                                console.log("Funder " + newFunder.id + " has been created.");
                                                                contrib.funderId = newFunder.id;
                                                                Contribution
                                                                    .create(contrib)
                                                                    .$promise
                                                                    .then(function (contribution) {
                                                                        console.log("Contribution " + contribution.id + " created.");
                                                                    });

                                                            });
                                                    }
                                                });
                                        }
                                        else {
                                            Funder
                                                .findOne({filter: {where: {Name: $scope.data.contributions[i].Funder.Name}}})
                                                .$promise
                                                .then(function(response) {
                                                    contrib.funderId = response.id;
                                                    Contribution
                                                        .create(contrib)
                                                        .$promise
                                                        .then(function (contribution) {
                                                            console.log("Contribution " + contribution.id + " created.");
                                                        });
                                                },
                                                function(err) {
                                                    if(err.data.error.code === "MODEL_NOT_FOUND") {
                                                        Funder
                                                            .create($scope.data.contributions[i].Funder)
                                                            .$promise
                                                            .then(function (newFunder) {
                                                                console.log("Funder " + newFunder.id + " has been created.");
                                                                contrib.funderId = newFunder.id;
                                                                Contribution
                                                                    .create(contrib)
                                                                    .$promise
                                                                    .then(function (contribution) {
                                                                        console.log("Contribution " + contribution.id + " created.");
                                                                    });

                                                            });
                                                    }
                                                });
                                        }
                                    })(i);
                                }

                                //Saving Regions
                                for (var i = 0; i < $scope.data.regionalData.length; i++) {
                                    (function (i) {
                                        $scope.data.regionalData[i]['projectId'] = project.id;
                                        RegionalData
                                            .upsert($scope.data.regionalData[i])
                                            .$promise
                                            .then(function (regionalData) {
                                                $scope.data.regionalData[i].contact['regionalDataId'] = regionalData.id;
                                                Contact
                                                    .upsert($scope.data.regionalData[i].contact)
                                                    .$promise
                                                    .then(function (contact) {
                                                        console.log("Contact " + contact.Name + " created successfully.");
                                                        if (i == $scope.data.regionalData.length - 1) {
                                                            $state.transitionTo('project.details', {projectId: project.id}, {
                                                                location: true,
                                                                notify: true,
                                                                reload: true
                                                            });
                                                        }
                                                    });
                                                for (var j = 0; j < $scope.data.regionalData[i].locations.length; j++) {
                                                    (function (j) {
                                                        $scope.data.regionalData[i].locations[j]['Region'] = regionalData.Region;
                                                        $scope.data.regionalData[i].locations[j]['regionalDataId'] = regionalData.id;
                                                        Location
                                                            .upsert($scope.data.regionalData[i].locations[j])
                                                            .$promise
                                                            .then(function (location) {
                                                                console.log("Location " + location.Name + " created successfully.");
                                                            });
                                                    })(j);
                                                }

                                                for(var k = 0; k < $scope.data.regionalData[i].sectors.length; k++) {
                                                    RegionalData.sectors
                                                        .link({id: $scope.data.regionalData[i].id, fk: $scope.data.regionalData[i].sectors[k]}, null)
                                                        .$promise
                                                        .then(function (result) {
                                                            console.log(result);
                                                        },
                                                        function(err) {
                                                            if (err) {
                                                                console.log(err.data.error.message);
                                                            }
                                                    });
                                                }
                                            });
                                    })(i);
                                }
                            });
                    });
            };

            $scope.removeProject = function($event, item) {
                Project
                    .deleteById(item)
                    .$promise
                    .then(function() {
                        $state.go('project.new');
                    });
                $event.preventDefault();
            };

            $scope.getProjectRegionalData = function(item) {
                Project
                    .regionalData(item)
                    .$promise
                    .then(function(results) {
                        $scope.data.regionalData = results;
                        for(var i=0; i < $scope.data.regionalData.length; i++) {
                            (function(i) {
                                RegionalData.contact($scope.data.regionalData[i])
                                    .$promise
                                    .then(function(contact) {
                                        $scope.data.regionalData[i].contact = contact;
                                    });
                            })(i);
                        }
                        for(var i=0; i < $scope.data.regionalData.length; i++) {
                            (function(i) {
                                RegionalData.locations($scope.data.regionalData[i])
                                    .$promise
                                    .then(function(locations) {
                                        $scope.data.regionalData[i].locations = locations || [{}];
                                    });
                            })(i);
                        }
                        for(var i=0; i < $scope.data.regionalData.length; i++) {
                            (function(i) {
                                RegionalData.sectors($scope.data.regionalData[i])
                                    .$promise
                                    .then(function(sectors) {
                                        $scope.data.regionalData[i].sectors = [];
                                        for(var j = 0; j < sectors.length; j++) {
                                            $scope.data.regionalData[i].sectors.push(sectors[j].id);
                                        }
                                    });
                            })(i);
                        }
                        for(var i=0; i < $scope.data.regionalData.length; i++) {
                            (function(i) {
                                RegionalData.subSectors($scope.data.regionalData[i])
                                    .$promise
                                    .then(function(subSectors) {
                                        $scope.data.regionalData[i].subSectors = [];
                                        for(var j = 0; j < subSectors.length; j++) {
                                            $scope.data.regionalData[i].subSectors.push(subSectors[j].id);
                                        }
                                    });
                            })(i);
                        }
                        //console.log($scope.data.regionalData);
                    });
            };

            $scope.getProjectContributions = function(item) {
                Contribution
                    .find({projectId: item.id})
                    .$promise
                    .then(function(results) {
                        if(results.length === 0) {
                            $scope.data.contributions = [{}];
                        }
                        else {
                            $scope.data.contributions = [];
                            for (var i = 0; i < results.length; i++) {
                                (function (i) {
                                    Contribution
                                        .funder(results[i])
                                        .$promise
                                        .then(function (funder) {
                                            results[i].Funder = funder;
                                            $scope.data.contributions.push(results[i]);
                                        });
                                })(i);
                            }
                        }
                        //console.log($scope.data.regionalData);
                    });
            };

            $scope.getOrganizationById = function(item) {
                Organization
                    .findById(item)
                    .$promise
                    .then(function(result) {
                        if(result === []) {
                            $scope.data.organization = {};
                        }
                        else {
                            $scope.data.organization = result;
                        }
                        Organization.location({id: result.id})
                            .$promise
                            .then(function(location) {
                                $scope.data.organization.location = location || {};
                            },
                            function(error) {
                                console.log(error.data.error.message);
                                $scope.data.organization.location = {};
                            });
                    });
            };

            $scope.addProjectRegionalData = function($event) {
                if($scope.data.regionalData === undefined) {
                    $scope.data.regionalData = [{}];
                }
                else {
                    $scope.data.regionalData.push({});
                }
                //$event.preventDefault();
            };

            $scope.removeProjectRegionalData = function(index) {
                if($scope.data.regionalData[index].id === undefined) {
                    $scope.data.regionalData.splice(index, 1);
                }
                else {
                    RegionalData.contact
                        .destroy({id: $scope.data.regionalData[index].id})
                        .$promise
                        .then(function () {
                            console.log("Contact for region " + $scope.data.regionalData[index].Name + " is destroyed.");
                            RegionalData.locations
                                .destroyAll({id: $scope.data.regionalData[index].id})
                                .$promise
                                .then(function () {
                                    Project.regionalData
                                        .destroyById({
                                            id: $scope.data.regionalData[index].projectId,
                                            fk: $scope.data.regionalData[index].id
                                        })
                                        .$promise
                                        .then(function () {
                                            console.log("Region " + $scope.data.regionalData[index].Name + " is destroyed.");
                                            $scope.data.regionalData.splice(index, 1);
                                        });
                                });
                        });
                }
            };

            $scope.addProjectContribution = function($event) {
                if($scope.data.contributions === undefined) {
                    $scope.data.contributions = [{}];
                }
                else {
                    $scope.data.contributions.push({});
                }
                //$event.preventDefault();
            };

            $scope.removeProjectContribution = function(index) {
                if($scope.data.contributions[index].id === undefined) {
                    $scope.data.contributions.splice(index, 1);
                }
                else {
                    Contribution
                        .destroyById({id: $scope.data.contributions[index].id})
                        .$promise
                        .then(function () {
                            console.log("Contribution " + $scope.data.contributions[index].id + " is destroyed.");
                            $scope.data.contributions.splice(index, 1);
                        });
                }
            };

            $scope.addProjectImplementingPartner = function($event) {
                if($scope.data.project.implementingPartners === undefined) {
                    $scope.data.project.implementingPartners = [{}];
                }
                else {
                    $scope.data.project.implementingPartners.push({});
                }
                //$event.preventDefault();
            };

            $scope.removeProjectImplementingPartner = function(index) {
                $scope.data.project.implementingPartners.splice(index, 1);
            };

            $scope.getProjectRegion = function(regionIndex) {
                return $scope.data.regionalData[regionIndex].Region;
            };

            $scope.addRegionalDataLocation = function(regionIndex, $event) {
                if($scope.data.regionalData[regionIndex].locations === undefined) {
                    $scope.data.regionalData[regionIndex].locations = [{}];
                }
                else {
                    $scope.data.regionalData[regionIndex].locations.push({});
                }
                //$event.preventDefault();
            };

            $scope.removeRegionalDataLocation = function(regionIndex, locationIndex) {
                if($scope.data.regionalData[regionIndex].id === undefined || $scope.data.regionalData[regionIndex].locations[locationIndex].id === undefined) {
                    $scope.data.regionalData[regionIndex].locations.splice(locationIndex, 1);
                }
                else {
                    RegionalData.locations
                        .destroyById({
                            id: $scope.data.regionalData[regionIndex].id,
                            fk: $scope.data.regionalData[regionIndex].locations[locationIndex].id
                        })
                        .$promise
                        .then(function () {
                            console.log("Location " + $scope.data.regionalData[regionIndex].locations[locationIndex].Name + " for region " + $scope.data.regionalData[regionIndex].Region + " is destroyed.");
                            $scope.data.regionalData[regionIndex].locations.splice(locationIndex, 1);
                        });
                }
            };


            //console.log($state.params);

            $scope.initProject = function() {

                $scope.data.sectors = $scope.data.sectors || $scope.getAllSectors();
                $scope.data.subSectors = $scope.data.subSectors || $scope.getAllSubSectors();

                if ($state.params.projectId !== undefined) {
                    $scope.data.project = $scope.data.project || $scope.getProjectById({id: $state.params.projectId}, function(project) {
                        if(project.organizationId === undefined)
                        {
                            $scope.data.organization = {};
                        }
                        else {
                            $scope.data.organization = $scope.data.organization || $scope.getOrganizationById({id: project.organizationId});
                        }
                    });
                    $scope.data.regionalData = $scope.data.regionalData || $scope.getProjectRegionalData({id: $state.params.projectId});
                    $scope.data.contributions = $scope.data.contributions || $scope.getProjectContributions({id: $state.params.projectId});
                    $scope.data.projectContacts = $scope.data.projectContacts || [{}, {}];
                }
                else {
                    console.log("New Project...");
                    $scope.data.project = $scope.data.project || {};
                    $scope.data.project.implementingPartners = $scope.data.project.implementingPartners || [];
                    $scope.data.regionalData = $scope.data.regionalData || [];
                    $scope.data.projectSectors = $scope.data.projectSectors || [];
                    $scope.data.projectSubSectors = $scope.data.projectSubSectors || [];
                    $scope.data.organization = $scope.data.organization || {};
                    $scope.data.projectContacts = $scope.data.projectContacts || [{}, {}];
                    $scope.data.contributions = $scope.data.contributions || [{}];
                    //$scope.data.regionalData[0].contact = $scope.data.regionalData[0].contact || {};
                    //$scope.data.regionalData[0].locations = $scope.data.regionalData[0].locations || [];
                }
            };

            $scope.initProjects = function() {
                $scope.data.projects = $scope.data.projects || $scope.getProjects();
            };

        }]);
