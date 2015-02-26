angular
    .module('app')
    .controller('ProjectController', ['$scope', '$state', 'Project', function($scope, $state, Project) {
        $scope.projects = [];
        $scope.project = {};

        function getProjects() {
            Project
                .find()
                .$promise
                .then(function(results) {
                    $scope.projects = results;
                });
        }
        getProjects();

        $scope.getProjectById = function(item) {
            Project
                .findById(item)
                .$promise
                .then(function(result) {
                    $scope.project = result;
                });
        };

        $scope.addProject = function() {
            Project
                .create($scope.newProject)
                .$promise
                .then(function(project) {
                    $scope.newProject = '';
                    $scope.projectForm.Name.$setPristine();
                    $('.focus').focus();
                    getProjects();
                });
        };

        $scope.updateProject = function() {
            Project
                .updateById($scope.project)
                .$promise
                .then(function(project) {
                    $scope.project = project;
                });
        };

        $scope.removeProject = function(item) {
            Project
                .deleteById(item)
                .$promise
                .then(function() {
                    getProjects();
                });
        };
    }]);
