function MainCtrl($scope, storageSrv) {
  $scope.title = 'Let\'s go!';
  $scope.add = function () {
    storageSrv.add();
  };
}

export default ['$scope', 'storageSrv', MainCtrl];