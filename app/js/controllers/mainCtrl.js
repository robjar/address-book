function MainCtrl($scope, storageSrv, countriesSrv) {
  $scope.countries = countriesSrv.getList();
  $scope.add = function () {
    storageSrv.add();
  };
}

export default ['$scope', 'storageSrv', 'countriesSrv', MainCtrl];