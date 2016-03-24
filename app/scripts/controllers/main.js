'use strict';

/**
 * @ngdoc function
 * @name masterMixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masterMixApp
 */
angular.module('masterMixApp')
  .controller('MainCtrl', function ($scope, multiply) {
    // given components
    $scope.components = [
      {'comp':'Buffer', 'ml':0, 'result':0},
      {'comp':'Forward Primer', 'ml':0, 'result':0},
      {'comp':'Reverse Primer', 'ml':0, 'result':0},
      {'comp':'dNTP mix', 'ml':0, 'result':0},
      {'comp':'Enzyme', 'ml':0, 'result':0},
      {'comp':'Water', 'ml':0, 'result':0}
    ];
    // creates a new component
    $scope.addComp = function () {
      $scope.components.push({'comp':'', 'ml':0, 'result': 0});
    };
    // removes a component
    $scope.removeComp = function (index) {
      $scope.components.splice(index, 1);
    };

    $scope.quantity = 0;
    // returns result of multiplication of volume and quantity
    $scope.total = function(component) {

      multiply.setNums(component.ml, $scope.quantity);
      component.result = multiply.multiplyMethod();

      return component.result;
    };

  })
  // controls header text
  .controller('TextBtnCtrl', function($scope) {
    $scope.headerTxt = {
      txt: 'My PCR MasterMIX'
  };
});
