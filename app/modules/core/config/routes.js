'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             * */
            /**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'search'`, route to search
 *
*/
/**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'search'`, route to search
 *
*/
/**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'stations'`, route to stations
 *
*/
$stateProvider
    .state('stations', {
        url: '/stations/:id',
        templateUrl: 'modules/core/views/station.html',
        controller: 'StationController'
    }).
state('search', {
        url: '/',
        templateUrl: 'modules/core/views/search.html',
        controller: 'SearchController'
    })
        }
    ]);
