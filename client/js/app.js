angular
    .module('app', [
        'lbServices',
        'ui.router',
        'bootstrap-multiselect',
        'angular-country-picker'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('project', {
                abstract: true,
                url: '/project',
                templateUrl: 'views/project.html',
                controller: 'FormController'
            })
            .state('project.new', {
                url: '/new',
                views: {
                    'organization': {
                        templateUrl: 'views/organization-fields.html'
                    },
                    'project': {
                        templateUrl: 'views/project-fields.html'
                    },
                    'regionalData': {
                        templateUrl: 'views/regional-data.html'
                    },
                    'funding': {
                        templateUrl: 'views/funding.html'
                    },
                    'regionalDataDetails': {
                        templateUrl: 'views/regional-data-details.html'
                    }
                }
            })
            .state('project.details', {
                url: '/:projectId',
                views: {
                    'organization': {
                        templateUrl: 'views/organization-fields.html'
                    },
                    'project': {
                        templateUrl: 'views/project-fields.html'
                    },
                    'regionalData': {
                        templateUrl: 'views/regional-data.html'
                    },
                    'funding': {
                        templateUrl: 'views/funding.html'
                    },
                    'regionalDataDetails': {
                        templateUrl: 'views/regional-data-details.html'
                    }
                }
            })
            .state('project.regionalData', {
                url: '/regions/:projectId',
                templateUrl: 'views/regional-data.html'
            });

        $urlRouterProvider.otherwise('projects');
    }]);
