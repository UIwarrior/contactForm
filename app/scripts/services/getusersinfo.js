'use strict';

/**
 * @ngdoc service
 * @name appOrbitProjectApp.getUsersInfo
 * @description
 * # getUsersInfo
 * Service in the appOrbitProjectApp.
 */
angular.module('appOrbitProjectApp')
  .service('getUsersInfo', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.fetchUsers = function () {
      return $http.get('mock-user.json')
    }

  });
