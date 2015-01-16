'use strict';

describe('Controller: SearchController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var SearchController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        SearchController = $controller('SearchController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
