function MainCtrl($scope, storageSrv, countriesSrv) {
  $scope.countries = countriesSrv.getList();
  $scope.contacts = storageSrv.getAll();
}

export default ['$scope', 'storageSrv', 'countriesSrv', MainCtrl];