'use strict';

describe('Service: getUsersInfo', function () {

  // load the service's module
  beforeEach(module('appOrbitProjectApp'));

  // instantiate service
  var getUsersInfo;
  beforeEach(inject(function (_getUsersInfo_) {
    getUsersInfo = _getUsersInfo_;
  }));

  it('should do something', function () {
    expect(!!getUsersInfo).toBe(true);
  });

});
