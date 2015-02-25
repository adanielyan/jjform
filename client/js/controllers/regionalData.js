angular
    .module('app')
    .controller('regionalDataController', ['$scope', '$state', 'Project', function($scope, $state, Project) {
      $scope.regionalData = [];
      $scope.project = null;

      $scope.getProjectById = function(id) {
        Project
            .findById(id)
            .$promise
            .then(function(result) {
              $scope.project = result;
            });
      };

      $scope.getRegionalDataByProjectId = function(id) {
        Project
            .getRegionalDataByProjectId(id)
            .$promise
            .then(function(results) {
              $scope.regionalData = results;
            });
      };

      getRegionalDataByProjectId($state.projectId);

    }]);
