angular
    .module('app')
    .controller('ProjectController', ['$rootScope', '$scope', '$state', 'Organization', 'Project', 'RegionalData', 'Contact', 'Location',
        function($rootScope, $scope, $state, Organization, Project, RegionalData, Contact, Location) {

            $scope.data = $scope.data || {};

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                if((toState.name != fromState.name) || (toParams.projectId != $scope.data.project.id)) {
                    delete $scope.data.project;
                    delete $scope.data.regionalData;
                    delete $scope.data.organization;
                    //console.log($state);
                    $scope.initProject();
                }
            });

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
                            .then(function () {
                                console.log("Organization Location saved.");
                            });
                        Project
                            .upsert($scope.data.project)
                            .$promise
                            .then(function (project) {
                                $scope.data.project = project;
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
                                                        console.log("Contact " + contact.Name + "created successfully.");
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
                                                                console.log("Location " + location.Name + "created successfully.");
                                                            });
                                                    })(j);
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
                        //console.log($scope.data.regionalData);
                    });
            };

            $scope.getOrganizationById = function(item) {
                Organization
                    .findById(item)
                    .$promise
                    .then(function(result) {
                        $scope.data.organization = result;
                        Organization.location(result)
                            .$promise
                            .then(function(location) {
                                $scope.data.organization.location = location || [{}];
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
                RegionalData.contact
                    .destroy({id: $scope.data.regionalData[index].id})
                    .$promise
                    .then(function() {
                        console.log("Contact for region " + $scope.data.regionalData[index].Name + " is destroyed.");
                        Project.regionalData
                            .destroyById({id: $scope.data.regionalData[index].projectId, fk: $scope.data.regionalData[index].id})
                            .$promise
                            .then(function() {
                                console.log("Region " + $scope.data.regionalData[index].Name + " is destroyed.");
                                $scope.data.regionalData.splice(index, 1);
                            });
                    });
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
                RegionalData.locations
                    .destroyById({id: $scope.data.regionalData[regionIndex].id, fk: $scope.data.regionalData[regionIndex].locations[locationIndex].id})
                    .$promise
                    .then(function() {
                        console.log("Location " + $scope.data.regionalData[regionIndex].locations[locationIndex].Name + " for region " + $scope.data.regionalData[regionIndex].Name + " is destroyed.");
                        $scope.data.regionalData[regionIndex].locations.splice(locationIndex, 1);
                    });
            };


            //console.log($state.params);

            $scope.initProject = function() {
                if ($state.params.projectId !== undefined) {
                    $scope.data.project = $scope.data.project || $scope.getProjectById({id: $state.params.projectId}, function(project) {
                        $scope.data.organization = $scope.data.organization || $scope.getOrganizationById({id: project.organizationId});
                    });
                    $scope.data.regionalData = $scope.data.regionalData || $scope.getProjectRegionalData({id: $state.params.projectId});
                }
                else {
                    $scope.data.project = $scope.data.project || {};
                    $scope.data.regionalData = $scope.data.regionalData || [{}];
                    $scope.data.organization = $scope.data.organization || {};
                    //$scope.data.regionalData[0].contact = $scope.data.regionalData[0].contact || {};
                    //$scope.data.regionalData[0].locations = $scope.data.regionalData[0].locations || [];
                }
            };

            $scope.initProjects = function() {
                $scope.data.projects = $scope.data.projects || $scope.getProjects();
            };

        }]);
