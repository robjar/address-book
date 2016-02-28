function contactDir(storageSrv) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      id: '=',
      person: '=',
      countries: '='
    },
    link: function ($scope) {
      $scope.editing = false;

      $scope.edit = function (person) {
        $scope.editing = true;
        $scope.editedUser = storageSrv.edit(person);
      };

      $scope.save = function (id, editedUser) {
        storageSrv.save(id, editedUser);
        $scope.editing = false;
      };

      $scope.remove = function (id) {
        storageSrv.remove(id);
      };
    },
    templateUrl: 'js/partials/contact.tpl.html'
  };
}

export default ['storageSrv', contactDir];