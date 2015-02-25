angular
    .module('app')
    .controller('regionalDataController', ['$scope', '$state', 'Project', function($scope, $state, Project) {
        $scope.regionalData = [];
        $scope.project = null;

        $scope.getProjectById = function(id) {
            Project
                .findById({id: id})
                .$promise
                .then(function(result) {
                    $scope.project = result;
                });
        };

        $scope.getRegionalDataOfProject = function(id) {
            Project
                .regionalData({id: id})
                .$promise
                .then(function (results) {
                    $scope.regionalData = results;
                });
        };

        $scope.getRegionalDataOfProject($state.params.projectId);


    }]);
