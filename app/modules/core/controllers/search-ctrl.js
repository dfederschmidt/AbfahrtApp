'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.SearchController
 * @description SearchController
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('SearchController', [
        '$scope','$http',
        function($scope,$http) {
          var init = function() {
            $http.get('http://syntiux.de/abfahrt/stations').
              success(function (data, status, headers, config) {
                $scope.stations = data;
              }).
              error(function (data, status, headers, config) {
                // log error
              });
          }
          init();

        }
]);
