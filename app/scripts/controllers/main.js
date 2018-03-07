'use strict';

/**
 * @ngdoc function
 * @name appOrbitProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appOrbitProjectApp
 */
angular.module('appOrbitProjectApp')
  .controller('MainCtrl', function (getUsersInfo) {
    var vm = this;
    vm.startPage = 1;
    vm.pageSize = 3;
    vm.pageArray = [];
    getUsersInfo.fetchUsers().then(function success(response){
      vm.userArr = response.data;
      vm.totalItem = vm.userArr.length;
      vm.noOfPages = vm.totalItem / vm.pageSize;
      while(vm.startPage <= vm.noOfPages)
      {
        vm.pageArray.push(vm.startPage);
        vm.startPage++;
      }

    },
    function error(error){

    })

  });
