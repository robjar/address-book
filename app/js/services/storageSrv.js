export default function storageSrv() {
  var _addContact = function () {
    console.log('added');
  };

  var _editContact = function () {
    console.log('edited');
  };

  var _removeContact = function () {
    console.log('removed');
  };

  return {
    add: _addContact,
    edit: _editContact,
    remove: _removeContact
  };
}