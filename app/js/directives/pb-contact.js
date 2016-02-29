function pbContact(storageSvc) {
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
        $scope.editedPerson = storageSvc.edit(person);
      };

      $scope.save = function (id, editedPerson) {
        storageSvc.save(id, editedPerson);
        $scope.editing = false;
      };

      $scope.remove = function (id) {
        storageSvc.remove(id);
      };
    },
    templateUrl: 'partials/contact.html'
  };
}

export default ['storageSvc', pbContact];