import 'bootstrap';
import angular from 'angular';
import 'ngstorage';
//import countriesList from 'country-list';
import MainCtrl from './controllers/mainCtrl.js';
import storageSrv from './services/storageSrv.js';
import countriesSrv from './services/countriesSrv.js';


const main = angular.module('main', ['ngStorage'])
  .factory('storageSrv', storageSrv)
  .factory('countriesSrv', countriesSrv)
  .controller('MainCtrl', MainCtrl);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [main.name]);
});