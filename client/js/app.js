angular
    .module('app', [
      'lbServices',
      'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('project', {
            abstract: true,
            url: '/project',
            templateUrl: 'views/project.html',
            controller: 'ProjectController'
          })
          .state('project.details', {
            url: '/:projectId',
            views: {
              '': {
                templateUrl: 'views/project-fields.html',
                controller: 'ProjectController'
              },
              'regionalData': {
                templateUrl: 'views/regional-data.html',
                controller: 'ProjectController'
              }
            }

          })
          .state('project.regionalData', {
            url: '/regions/:projectId',
            templateUrl: 'views/regional-data.html',
            controller: 'regionalDataController'
          });

      $urlRouterProvider.otherwise('projects');
    }]);
