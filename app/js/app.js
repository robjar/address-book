import 'bootstrap';
import angular from 'angular';
import 'ngstorage';
//import countriesList from 'country-list';
import MainCtrl from './controllers/mainCtrl.js';
import SecondCtrl from './controllers/secondCtrl.js';
import storageSrv from './services/storageSrv.js';


const main = angular.module('main', ['ngStorage'])
  .factory('storageSrv', storageSrv)
  .controller('MainCtrl', MainCtrl)
  .controller('SecondCtrl', SecondCtrl);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [main.name]);
});