'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.SearchController
 * @description SearchController
 * @requires ng.$scope
 */
angular
    .module('core')
    .filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    })
      .controller('SearchController', [
        '$scope',
        function($scope) {
          var init = function() {
            $scope.stations = stationRegister;
            if (window.localStorage['favorites'] != undefined) {
              var favs = JSON.parse(window.localStorage['favorites']);
              $scope.favorites = [];

              for (var i = 0; i < favs.length; i++) {
                $scope.favorites.push(findById($scope.stations, favs[i]));
              }
            }
            else {
              window.localStorage['favorites'] = JSON.stringify([]);
            }
          }
          function findById(source, id) {
            return source.filter(function( obj ) {
              // coerce both obj.id and id to numbers
              // for val & type comparison
              return +obj.id === +id;
            })[ 0 ];
          }
          init();

        }
]);
