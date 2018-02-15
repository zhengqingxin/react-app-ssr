'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  user: 'zhengqingxin'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'GET_LIST':
      return (0, _extends3.default)({}, state, { list: action.list });
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3JlZHVjZXJzL2hvbWUuanMiXSwibmFtZXMiOlsiR0VUX0xJU1QiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBZ0I7Ozs7QUFFekIsSUFBTTtRQUFOLEFBQXFCLEFBQ2IsQUFHUjtBQUpxQixBQUNuQjs7a0JBR2EsWUFBa0M7TUFBakMsQUFBaUMsNEVBQXpCLEFBQXlCO01BQVgsQUFBVyxtQkFDL0M7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE1BQU0sT0FBekIsQUFBZ0MsQUFDbEM7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOztBQVBEIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvZGVyenNtYWMvRGVza3RvcC9naXRodWIvcmVhY3QtYXBwLXNzciJ9