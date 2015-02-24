angular
    .module('app')
    .controller('ProjectController', ['$scope', '$state', 'Project', function($scope, $state, Project) {
      $scope.projects = [];
      $scope.regionalData = [];
      $scope.project = null;

      function getProjects() {
        Project
            .find()
            .$promise
            .then(function(results) {
              $scope.projects = results;
            });
      }
      getProjects();

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

      $scope.removeProject = function(item) {
        Project
            .deleteById(item)
            .$promise
            .then(function() {
              getProjects();
            });
      };

      $scope.getProjectById = function(id) {
        Project
            .findById(id)
            .$promise
            .then(function(result) {
              $scope.project = result;
            });
      }

      $scope.getRegionalDataByProjectId = function(id) {
        Project
            .getRegionalDataByProjectId(id)
            .$promise
            .then(function(results) {
              $scope.regionalData = results;
            });
      }
    }]);
