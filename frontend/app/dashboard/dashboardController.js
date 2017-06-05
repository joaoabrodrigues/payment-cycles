angular.module('paymentCycle').controller('DashboardController', [
  '$scope',
  '$http',
  DashboardController
])

function DashboardController($scope, $http) {

  $scope.getSummary = function() {
    const url = 'http://localhost:3003/v1/api/paymentSummary'
    $http.get(url).then(function({credit = 0, debt = 0}){
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }

  $scope.getSummary()
}