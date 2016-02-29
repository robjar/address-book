function pbContact(storageSvc) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      person: '=',
      countries: '='
    },
    link: function ($scope) {
      $scope.editing = false;

      $scope.edit = function (person) {
        $scope.editing = true;
        $scope.editedPerson = storageSvc.edit(person);
      };

      $scope.save = function (person, editedPerson) {
        storageSvc.save(person, editedPerson);
        $scope.editing = false;
      };

      $scope.remove = function (person) {
        storageSvc.remove(person);
      };
    },
    templateUrl: 'partials/contact.html'
  };
}

export default ['storageSvc', pbContact];