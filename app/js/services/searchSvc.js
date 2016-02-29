export default function searchSvc() {
  var _searchText = '';

  var _searchFor = function(text) {
    _searchText = text;
  };
  
  var _getSearchText = function() {
    return _searchText;
  };
  
  return {
    set: _searchFor,
    get: _getSearchText
  };
}