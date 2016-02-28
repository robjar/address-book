function MainCtrl($scope, storageSrv) {
  $scope.add = function () {
    storageSrv.add();
  };

  $scope.search = function () {
    console.log('search');
  };
}

export default ['$scope', 'storageSrv', MainCtrl];