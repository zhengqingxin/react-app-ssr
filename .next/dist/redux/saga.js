'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getList),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function getList(action) {
  var list;
  return _regenerator2.default.wrap(function getList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(_request2.default, {
            url: _config2.default.api.getFavoriteByUser,
            data: action.payload
          });

        case 2:
          list = _context.sent;
          _context.next = 5;
          return (0, _effects.put)({ type: 'GET_LIST', list: list });

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _reduxSaga.takeEvery)('GET_LIST_ASYNC', getList);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3NhZ2EuanMiXSwibmFtZXMiOlsiZ2V0TGlzdCIsInJvb3RTYWdhIiwidGFrZUV2ZXJ5IiwicHV0IiwiY2FsbCIsInJlcXVlc3QiLCJjb25maWciLCJhY3Rpb24iLCJ1cmwiLCJhcGkiLCJnZXRGYXZvcml0ZUJ5VXNlciIsImRhdGEiLCJwYXlsb2FkIiwibGlzdCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQUs7O0FBQ2QsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztzREFFRyxBO3VELEFBUWU7O0FBUnpCLFNBQUEsQUFBVSxRQUFWLEFBQWtCLFFBQWxCO01BQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBOztpQkFFUyxpQkFBQSxBQUFPLElBRGlCLEFBQ2IsQUFDaEI7a0JBQU0sT0FIVixBQUNtQixBQUFjLEFBRWhCO0FBRmdCLEFBQzdCLFdBRGUsQUFBSzs7YUFBbEI7QUFETiwwQkFBQTswQkFBQTtpQkFLUSxrQkFBSSxFQUFFLE1BQUYsQUFBUSxZQUFZLE1BTGhDLEFBS1EsQUFBSTs7YUFMWjthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFRQTs7QUFBZSxTQUFBLEFBQVUsV0FBVjtrRUFBQTtjQUFBO3lDQUFBO2FBQUE7MkJBQUE7aUJBQ1AsMEJBQUEsQUFBVSxrQkFESCxBQUNQLEFBQTRCOzthQURyQjthQUFBOzJCQUFBOztBQUFBO2VBQUEiLCJmaWxlIjoic2FnYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29kZXJ6c21hYy9EZXNrdG9wL2dpdGh1Yi9yZWFjdC1hcHAtc3NyIn0=