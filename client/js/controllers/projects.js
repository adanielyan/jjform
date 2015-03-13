angular
    .module('app')
    .controller('ProjectController', ['$rootScope', '$scope', '$state', 'Project', 'RegionalData', 'Contact',
        function($rootScope, $scope, $state, Project, RegionalData, Contact) {

        $scope.data = $scope.data || {};

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            if((toState.name != fromState.name) || (toParams.projectId != $scope.data.project.id)) {
                delete $scope.data.project;
                delete $scope.data.regionalData;
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

        $scope.getProjectById = function(item) {
            Project
                .findById(item)
                .$promise
                .then(function(result) {
                    $scope.data.project = result;
                });
        };

        $scope.saveProject = function() {
            Project
                .upsert($scope.data.project)
                .$promise
                .then(function(project) {
                    $scope.data.project = project;
                    //REDO all this as the iterations are gettings messed up. Need a way to fix the closures.
                    var iteration = 0;
                    for(var i=0; i < $scope.data.regionalData.length; i++) {
                        $scope.data.regionalData[i]['projectId'] = project.id;
                        RegionalData
                            .upsert($scope.data.regionalData[i])
                            .$promise
                            .then(function(regionalData) {
                                $scope.data.regionalData[iteration].contact['regionalDataId'] = regionalData.id;
                                Contact
                                .upsert($scope.data.regionalData[iteration].contact)
                                .$promise
                                .then(function(contact) {
                                    console.log("Contact " + contact.Name + "created successfully.");
                                    iteration++;
                                    if(iteration == $scope.data.regionalData.length) {
                                        $state.transitionTo('project.details', {projectId: project.id}, {location: true, notify: true, reload: true});
                                    }
                                });
                            });
                    }
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
                    //REDO all this as the iterations are gettings messed up. Need a way to fix the closures.
                    var iteration = 0;
                    for(var i=0; i < $scope.data.regionalData.length; i++) {
                        RegionalData.contact($scope.data.regionalData[i])
                            .$promise
                            .then(function(contact) {
                                $scope.data.regionalData[iteration].contact = contact;
                                iteration++;
                            });
                    }
                    console.log($scope.data.regionalData);
                });
        };

        $scope.addProjectRegionalData = function($event) {
            $scope.data.regionalData.push({});
            //$event.preventDefault();
        };

        $scope.removeProjectRegionalData = function(index) {
            $scope.data.regionalData.splice(index, 1);
        };

        //console.log($state.params);

        $scope.initProject = function() {
            if ($state.params.projectId !== undefined) {
                $scope.data.project = $scope.data.project || $scope.getProjectById({id: $state.params.projectId});
                $scope.data.regionalData = $scope.data.regionalData || $scope.getProjectRegionalData({id: $state.params.projectId});
            }
            else {
                $scope.data.project = $scope.data.project || {};
                $scope.data.regionalData = $scope.data.regionalData || [{}];
                $scope.data.regionalData.contact = $scope.data.regionalData.contact || {};
            }
        };

        $scope.initProjects = function() {
            $scope.data.projects = $scope.data.projects || $scope.getProjects();
        };

    }]);
