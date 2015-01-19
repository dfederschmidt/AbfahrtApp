'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
    // Init module configuration options
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ui.utils'];

    // Add a new vertical module
    var registerModule = function(moduleName) {
        // Create angular module
        angular
            .module(moduleName, []);

        // Add the module to the AngularJS configuration file
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      if(window.localStorage.getItem('favorites') == undefined){
        var emptyArray = [];
        window.localStorage['favorites'] = JSON.stringify(emptyArray);
      }
    }

  return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();
