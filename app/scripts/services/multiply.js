'use strict';

/**
 * @ngdoc service
 * @name masterMixApp.multiply
 * @description
 * # multiply
 * Factory in the masterMixApp.
 */
angular.module('masterMixApp')
  .factory('multiply', function () {
    // Service logic
    var multiplyService = {};

    var _first = 0;
    var _second = 0;

    // Public API here
    multiplyService.setNums = function(first, second) {

        _first = first;
        _second = second;

    };

    multiplyService.getFirst = function() {
      return _first;
    };

    multiplyService.getSecond = function() {
      return _second;
    };

     multiplyService.multiplyMethod = function() {
        return parseInt(_first) * parseInt(_second);
    };

    return multiplyService;

  });
