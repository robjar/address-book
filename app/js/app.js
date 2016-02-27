import angular from 'angular';
import MainCtrl from './controllers/mainCtrl.js';
import SecondCtrl from './controllers/secondCtrl.js';

const main = angular.module('main', [])
  .controller('MainCtrl', MainCtrl)
  .controller('SecondCtrl', SecondCtrl);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [main.name]);
});
