'use strict';

/**
 * @ngdoc function
 * @name masterMixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masterMixApp
 */
angular.module('masterMixApp')
  .controller('MainCtrl', ['$scope', '$http', 'multiply', function ($scope, $http, multiply) {
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
    $scope.placeholderNg = 0;

    // returns result of multiplication of volume and quantity
    $scope.total = function(component) {
      multiply.setNums(component.ml, $scope.quantity);
      component.result = multiply.multiplyMethod();

      return component.result;
    };

    $scope.headerTxt = {
      txt: 'My PCR MasterMIX'
  };

  // CRUD operations
  // Sends request to components.php files
  $http.get('databaseFiles/components.php').success(function(data){
    // Stores the returned data to scope
    $scope.compData = data;
  });

}])

// thanks to http://plnkr.co/edit/V7mHgpn0JpsM2DahFBco?p=preview
.directive('placeholderDir', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      var initalHide = true;
      //format text going to user (model to view)
      ngModel.$formatters.push(function(value) {
        console.log(attr.min > value)
        if (initalHide){
          initalHide = false;
          return undefined;
        }
        return value;
      });
    }
  };
});
