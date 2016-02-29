import angular from 'angular';
import 'ngstorage';

function storageSvc($localStorage) {
  $localStorage.$default({
    contacts: []
  });

  var _addContact = function (newPerson) {
    newPerson.id = Date.now();
    $localStorage.contacts.push(newPerson);
  };

  var _editContact = function (person) {
    var editedUser = angular.extend(person, {});
    return editedUser;
  };

  var _saveContact = function (person, editedPerson) {
    var idx = $localStorage.contacts.indexOf(person);
    $localStorage.contacts.splice(idx, 1, editedPerson);
  };

  var _removeContact = function (person) {
    var idx = $localStorage.contacts.indexOf(person);
    $localStorage.contacts.splice(idx, 1);
  };

  var _getAll = function () {
    return $localStorage.contacts;
  };

  return {
    add: _addContact,
    edit: _editContact,
    save: _saveContact,
    remove: _removeContact,
    getAll: _getAll
  };
}

export default ['$localStorage', storageSvc];