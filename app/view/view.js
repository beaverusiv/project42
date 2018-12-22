'use strict';

angular.module('myApp.view', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view', {
      templateUrl: 'view/view.html',
      controller: 'ViewCtrl'
    });
  }])

  .controller('ViewCtrl', ['$scope', 'HeyhooService', function($scope, HeyhooService) {
    $scope.execute = function() {
      const iterate5 = HeyhooService.getOutput(5);
      const iterate15 = HeyhooService.getOutput(15);
      const iterate30 = HeyhooService.getOutput(30);
      $scope.output = 'Task 1: ' + iterate5.output + '\n';
      $scope.output += 'Task 2: ' + iterate15.output + '\n';
      $scope.output += 'Task 3: ' + iterate30.output + '\n';
      $scope.output += 'Total count: ' + (iterate5.total + iterate15.total + iterate30.total);
    };
  }]);
