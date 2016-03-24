'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('masterMixApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // tests
  it('should have 7 components to start', function () {
    expect(scope.components.length).toBe(6);
  });

  it('should add components to the list', function(){
    scope.component = 'Tets 1';
    scope.addComp();
    expect(scope.components.length).toBe(7);
  });

  it('should add and then remove a component from the list', function () {
      scope.component = 'Test 2';
      scope.addComp();
      scope.removeComp(0);
      expect(scope.components.length).toBe(6);
  });

  it ('should show the result of the multiplication of component and quantity', function () {
    var component = {'comp':'Buffer', 'ml':2, 'result':0};
    scope.quantity = 2;
    scope.total(component);
    expect(component.result).toBe(4);

  });

});
