import 'bootstrap';
import angular from 'angular';

//controllers
import MainCtrl from './controllers/mainCtrl.js';
import NavbarCtrl from './controllers/navbarCtrl.js';

//services
import storageSrv from './services/storageSrv.js';
import countriesSrv from './services/countriesSrv.js';

//directives
import navbarDir from './directives/navbarDir.js';
import contactDir from './directives/contactDir.js';

const main = angular.module('main', ['ngStorage'])
  .factory('storageSrv', storageSrv)
  .factory('countriesSrv', countriesSrv)
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .directive('navbar', navbarDir)
  .directive('contactDir', contactDir);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [main.name]);
});