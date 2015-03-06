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
          .state('project.new', {
            url: '/new',
            views: {
              '': {
                templateUrl: 'views/project-fields.html'
              },
              'regionalData': {
                templateUrl: 'views/regional-data.html'
              }
            }
          })
          .state('project.details', {
            url: '/:projectId',
            views: {
              '': {
                templateUrl: 'views/project-fields.html'
              },
              'regionalData': {
                templateUrl: 'views/regional-data.html'
              }
            }
          })
          .state('project.regionalData', {
            url: '/regions/:projectId',
            templateUrl: 'views/regional-data.html'
          });

      $urlRouterProvider.otherwise('projects');
    }]);
