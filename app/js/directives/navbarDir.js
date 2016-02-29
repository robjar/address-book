function navbarDir(storageSrv, countriesSrv) {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    link: function ($scope) {
      $scope.adding = false;
      $scope.countries = countriesSrv.getList();
      
      $scope.new = function () {
        $scope.adding = !$scope.adding;
        console.log('new');
      };
      
      $scope.add = function (newUser) {
        $scope.adding = false;
        storageSrv.add(newUser);
        console.log('add', newUser);
      };

      $scope.search = function () {
        console.log('search');
      };
    },
    templateUrl: 'js/partials/navbar.tpl.html'
  };
}

export default ['storageSrv', 'countriesSrv', navbarDir];