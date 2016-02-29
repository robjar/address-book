import 'angular-mocks';
import 'app/js/app.js';

describe('address book app |', function () {
  var $rootScope, $scope, ctrl, storageSvc, countriesSvc, searchSvc, element;
  
  beforeEach(module('main'));
  
  describe('Controllers |', function () {
    
    describe('MainCtrl |', function() {
      beforeEach(inject(function(_$rootScope_, $controller, _storageSvc_, _countriesSvc_, _searchSvc_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        storageSvc = _storageSvc_;
        countriesSvc = _countriesSvc_;
        searchSvc = _searchSvc_;
        
        spyOn(storageSvc, 'getAll');
        spyOn(countriesSvc, 'getList');
        
        ctrl = $controller('MainCtrl', {
          $scope: $scope
        });
      }));

      it('should be initialized with empty searchText', function() {
        expect($scope.searchText).toBeDefined();
        expect($scope.searchText).toEqual('');
      });
      
      it('should call searchSvc.getAll()', function() {
        expect(storageSvc.getAll).toHaveBeenCalled();
      });
      
      it('should call countriesSvc.getList()', function() {
        expect(countriesSvc.getList).toHaveBeenCalled();
      });
      
      it('should monitor searchText', function() {
        expect($scope.searchText).toEqual('');
        $scope.$digest();
        searchSvc.set('test');
        $scope.$digest();
        expect($scope.searchText).toEqual('test');
      });
    });
  });
  
  describe('Services |', function () {
    
    describe('countriesSvc |', function() {
      beforeEach(inject(function(_countriesSvc_) {
        countriesSvc = _countriesSvc_;
      }));

      it('should have getList() method', function() {
        expect(countriesSvc.getList).toEqual(jasmine.any(Function));
      });
      
      it('getList() should return an array', function() {
        expect(countriesSvc.getList()).toEqual(jasmine.any(Array));
      });
      
      it('array returned by getList() should contain names of countries', function() {
        var list = countriesSvc.getList();
        expect(list).toContain('Spain');
        expect(list).toContain('Poland');
        expect(list).toContain('Germany');
        expect(list).toContain('Peru');
        expect(list).toContain('Croatia');
        expect(list).toContain('Gabon');
      });
    });
    
    describe('searchSvc |', function() {
      beforeEach(inject(function(_countriesSvc_) {
        countriesSvc = _countriesSvc_;
      }));

      it('should have set() and get() methods', function() {
        expect(searchSvc.set).toEqual(jasmine.any(Function));
        expect(searchSvc.get).toEqual(jasmine.any(Function));
      });
      
      it('set() and get() methods should save and return search text', function() {
        searchSvc.set('Gallus');
        expect(searchSvc.get()).toEqual('Gallus');
        searchSvc.set('Anonymous');
        expect(searchSvc.get()).toEqual('Anonymous');
      });
    });
    
    describe('storageSvc |', function() {
      var person = {
        firstName:'Gallus',
        lastName: 'Anonymous',
        email: 'gallus@anonymous.com',
        country: 'France'
      };
      
      beforeEach(inject(function(_storageSvc_) {
        storageSvc = _storageSvc_;
        window.localStorage.clear();
      }));

      it('should have add(), edit(), save(), remove() and getAll() methods', function() {
        expect(storageSvc.add).toEqual(jasmine.any(Function));
        expect(storageSvc.edit).toEqual(jasmine.any(Function));
        expect(storageSvc.save).toEqual(jasmine.any(Function));
        expect(storageSvc.remove).toEqual(jasmine.any(Function));
        expect(storageSvc.getAll).toEqual(jasmine.any(Function));
      });
      
      it('should be able to return all contacts', function() {    
        expect(storageSvc.getAll().length).toEqual(0);
        
        storageSvc.add(person);
        storageSvc.add(person);
        storageSvc.add(person);
        
        expect(storageSvc.getAll().length).toEqual(3);
      });
      
      it('should be able to add a person', function() {      
        storageSvc.add(person);
        expect(storageSvc.getAll().length).toEqual(1);
        expect(storageSvc.getAll().pop()).toEqual(person);
      });
      
      it('should be able to remove a person', function() {        
        storageSvc.add(person);
        storageSvc.remove(person);
        expect(storageSvc.getAll().length).toEqual(0);
      });
      
      it('should be able to edit a person', function() {
        var editedPerson = storageSvc.edit(person);
        
        storageSvc.add(person);
        expect(storageSvc.getAll()[0].country).toEqual('France');
        
        editedPerson.country = 'Italy';
        storageSvc.save(person, editedPerson);
        
        expect(storageSvc.getAll()[0].country).toEqual('Italy');
      });
      
    });
  });
  
});
