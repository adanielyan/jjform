angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('project', {
        url: '',
        templateUrl: 'views/project.html',
        controller: 'ProjectController'
      });

    $urlRouterProvider.otherwise('project');
  }]);
