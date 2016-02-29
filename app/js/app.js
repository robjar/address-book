import 'bootstrap';
import angular from 'angular';
import 'angular-messages';

//controllers
import MainCtrl from './controllers/mainCtrl.js';

//services
import storageSvc from './services/storageSvc.js';
import countriesSvc from './services/countriesSvc.js';
import searchSvc from './services/searchSvc.js';

//directives
import pbNavbar from './directives/pb-navbar.js';
import pbContact from './directives/pb-contact.js';

const main = angular.module('main', ['ngStorage', 'ngMessages'])
  .factory('storageSvc', storageSvc)
  .factory('countriesSvc', countriesSvc)
  .factory('searchSvc', searchSvc)
  .controller('MainCtrl', MainCtrl)
  .directive('pbNavbar', pbNavbar)
  .directive('pbContact', pbContact);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [main.name]);
});