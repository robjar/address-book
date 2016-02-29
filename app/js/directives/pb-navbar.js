function pbNavbar(storageSvc, countriesSvc, searchSvc) {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    link: function ($scope) {
      $scope.adding = false;
      $scope.countries = countriesSvc.getList();
      
      $scope.new = function () {
        $scope.adding = !$scope.adding;
      };
      
      $scope.add = function (newUser) {
        $scope.adding = false;
        storageSvc.add(newUser);
      };

      $scope.search = function () {
        searchSvc.set($scope.searchText);
      };
    },
    templateUrl: 'partials/navbar.html'
  };
}

export default ['storageSvc', 'countriesSvc', 'searchSvc', pbNavbar];