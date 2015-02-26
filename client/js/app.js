angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('project', {
        url: '/project/:projectId',
        templateUrl: 'views/projects.html',
        controller: 'ProjectController'
      })
      .state('project.regionalData', {
        //url: '/regions/:projectId',
        templateUrl: 'views/regionalData.html',
        controller: 'regionalDataController'
      });

    $urlRouterProvider.otherwise('project');
  }]);
