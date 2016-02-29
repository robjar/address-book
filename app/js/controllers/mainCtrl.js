function MainCtrl($scope, storageSvc, countriesSvc, searchSvc) {
  $scope.searchText = '';
  $scope.countries = countriesSvc.getList();
  $scope.contacts = storageSvc.getAll();
  
  $scope.$watch(function() {
    return searchSvc.get();
  }, function(newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.searchText = searchSvc.get();
    }
  }, true);
}

export default ['$scope', 'storageSvc', 'countriesSvc', 'searchSvc', MainCtrl];