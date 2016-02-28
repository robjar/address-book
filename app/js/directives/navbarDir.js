function navbarDir(storageSrv) {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    link: function ($scope) {
      $scope.add = function () {
        storageSrv.add();
      };

      $scope.search = function () {
        console.log('search');
      };
    },
    templateUrl: 'js/partials/navbar.tpl.html'
  };
}

export default ['storageSrv', navbarDir];