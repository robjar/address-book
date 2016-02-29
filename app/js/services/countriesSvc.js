import countries from 'country-list';

export default function countriesSvc() {
  var _countries = countries(),
    _list = _countries.getNames();

  var _getList = function () {
    return _list;
  };

  return {
    getList: _getList
  };
}