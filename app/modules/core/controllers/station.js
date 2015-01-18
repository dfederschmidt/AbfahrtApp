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
                  if (data.length == 0) {
                    var networkState = navigator.connection.type;
                    if(networkState == Connection.NONE){
                      $scope.noService = "Bitte stellen Sie eine Internetverbindung her";
                    }else{
                      $scope.noService = "In nächster Zeit halten an dieser Station keine Busse.";
                    }
                  }
                  else {
                    $scope.departures = data;
                  }
                  $http.get('http://syntiux.de/abfahrt/stations/' + $stateParams.id).
                    success(function (data, status, headers, config) {
                      $scope.stationInformation = data;
                    }).
                    error(function (data, status, headers, config) {
                      $scope.noService = "Haltestelleninformationen konnten nicht geladen werden.";
                    });
                }).
                error(function (data, status, headers, config) {
                  $scope.noService = "Abfahrtszeiten konnten nicht geladen werden.";
                });
            }
          init();
        }
]);
