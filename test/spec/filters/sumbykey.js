'use strict';

describe('Filter: sumByKey', function () {

  var sumByKeyFilter;

  // load the filter's module
  beforeEach(module('masterMixApp'));

  // initialize a new instance of the filter before each test

  beforeEach(inject(function (_sumByKeyFilter_) {
    sumByKeyFilter = _sumByKeyFilter_;
  }));

  it('should return the input prefixed with "sumByKey filter:"', function () {

    var components = [
      {'comp':'Buffer', 'ml':2, 'result':1},
      {'comp':'Forward Primer', 'ml':2, 'result':1},
      {'comp':'Reverse Primer', 'ml':2, 'result':1}
    ], result1, result2;

    result1 = sumByKeyFilter(components, 'ml');
    result2 = sumByKeyFilter(components, 'result');
    expect(result1).toBe(6);
    expect(result2).toBe(3);
  });

});
