angular
    .module('app')
    .controller('ProjectController', ['$scope', '$state', 'Project', function($scope, $state, Project) {

        $scope.data = $scope.data || {};
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

        $scope.addProject = function() {
            Project
                .create($scope.newProject)
                .$promise
                .then(function(project) {
                    $scope.data.newProject = '';
                    $scope.data.projectForm.Name.$setPristine();
                    $('.focus').focus();
                    getProjects();
                });
        };

        $scope.updateProject = function() {
            Project
                .upsert($scope.data.project)
                .$promise
                .then(function(project) {
                    $scope.data.project = project;
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

        $scope.getProjectRegionalData = function(item) {
            Project
                .regionalData(item)
                .$promise
                .then(function(results) {
                    $scope.data.regionalData = results;
                });
        };

        if ($state.params.projectId !== undefined) {
            console.log("projectId: " + $state.params.projectId);
            $scope.data.project = $scope.data.project || $scope.getProjectById({id: $state.params.projectId});
            $scope.data.regionalData = $scope.data.regionalData || $scope.getProjectRegionalData({id: $state.params.projectId});
        }
        else {
            $scope.data.projects = $scope.data.projects || $scope.getProjects();
        }

        console.log("Project: " + $scope.data.project);

        if ($scope.data.project !== undefined) {
            console.log("Project Name: " + $scope.data.project.Name);
        }

    }]);
