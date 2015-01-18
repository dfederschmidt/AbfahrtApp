'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.StationsController
 * @description StationsController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('StationController', [
        '$scope','$stateParams','$http',
        function($scope,$stateParams,$http) {
          var init = function() {
            $http.get('http://syntiux.de/abfahrt/stations/' + $stateParams.id + "/departures").
              success(function (data, status, headers, config) {
                if(data.length == 0){
                  $scope.noService = "In nächster Zeit halten an dieser Station keine Busse.";
                }
                else {
                  $scope.departures = data;
                }
                  $http.get('http://syntiux.de/abfahrt/stations/' + $stateParams.id).
                  success(function (data, status, headers, config) {
                    $scope.stationInformation = data;
                  }).
                  error(function (data, status, headers, config) {
                    // log error
                  });
              }).
              error(function (data, status, headers, config) {
                // log error
              });
          }
          init();
        }
]);
