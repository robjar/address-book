import angular from 'angular';
import 'ngstorage';

function storageSrv($localStorage) {
  $localStorage.$default({
    contacts: {}
  });

  var _addContact = function (newPerson) {
    $localStorage.contacts[Date.now()] = newPerson;
    console.log('added', newPerson);
  };

  var _editContact = function (contact) {
    var editedUser = angular.extend(contact, {});
    console.log('edited', editedUser);
    return editedUser;
  };

  var _saveContact = function (id, editedUser) {
    $localStorage.contacts[id] = editedUser;
  };

  var _removeContact = function (id) {
    delete $localStorage.contacts[id];
    console.log('removed', id);
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

export default ['$localStorage', storageSrv];