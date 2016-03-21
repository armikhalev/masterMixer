'use strict';

/**
 * @ngdoc function
 * @name masterMixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masterMixApp
 */
angular.module('masterMixApp')
  .controller('MainCtrl', function ($scope) {
    // given components
    $scope.components = [
      'Buffer',
      'Forward Primer',
      'Reverse Primer',
      'dNTP mix',
      'Enzyme',
      'Water'
    ];
    // function creates a new component
    $scope.addComp = function () {
      $scope.components.push($scope.comp);
      $scope.comp = '';
    };
    // function removes a component
    $scope.removeComp = function (index) {
        $scope.components.splice(index, 1);
    };

  })

  .controller('TextBtnCtrl', function($scope) {
  $scope.headerTxt = {
    txt: 'My PCR MasterMIX'
  };
});
