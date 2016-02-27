import 'angular-mocks';
import 'app/js/app.js';
import 'app/js/controllers/mainCtrl.js';

describe('address book app |', function () {
  var $rootScope, $scope, ctrl, $httpBackend, dataProvider, $timeout;
  
  beforeEach(module('main'));
  
  describe('Controllers |', function () {
    
    describe('MainCtrl |', function() {
      beforeEach(inject(function(_$rootScope_, $controller) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {
          $scope: $scope
        });
      }));

      it('should have title "Let\'s go!"', function() {
        expect($scope.title).toEqual('Let\'s go!');
      });
    });
  });
});
