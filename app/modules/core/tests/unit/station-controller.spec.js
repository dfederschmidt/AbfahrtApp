'use strict';

describe('Controller: StationsController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var StationsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        StationsController = $controller('StationsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
