'use strict';

describe('Service: multiply', function () {

  // load the service's module
  beforeEach(module('masterMixApp'));

  // instantiate service
  var multiply;
  beforeEach(inject(function (_multiply_) {
    multiply = _multiply_;
  }));

  it('should do something', function () {
    expect(!!multiply).toBe(true);
  });

});
