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
        '$scope',
        function($scope) {
          var init = function() {
            $scope.stations = stationRegister;
          }
          init();

        }
]);
