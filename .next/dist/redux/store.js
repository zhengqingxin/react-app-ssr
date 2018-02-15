'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = _redux.compose; // eslint-disable-line
var defaultState = {};
var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStorePro() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));
  sagaMiddleware.run(_saga2.default);
  return store;
}

function configureStoreDev() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));
  sagaMiddleware.run(_saga2.default);
  return store;
}

var initStore = process.env.NODE_ENV === 'production' ? configureStorePro : configureStoreDev;

exports.default = function (com) {
  return (0, _nextReduxWrapper2.default)(initStore)(com);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXJzIiwicm9vdFNhZ2EiLCJjb21wb3NlRW5oYW5jZXJzIiwiZGVmYXVsdFN0YXRlIiwic2FnYU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZVBybyIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwicnVuIiwiY29uZmlndXJlU3RvcmVEZXYiLCJpbml0U3RvcmUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb20iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFzQixBQUF0QixBQUF1QyxBQUF2Qzs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sQUFBbUIsQUFBekIsQSxtQ0FBaUM7QUFDakMsSUFBTSxlQUFlLEFBQXJCO0FBQ0EsSUFBTSxpQkFBaUIsQUFBdkI7O0FBRUEsU0FBUyxBQUFULG9CQUF3RDtNQUE3QixBQUE2QixtRkFBZCxBQUFjLEFBQ3REOztNQUFNLFFBQVEsQUFDWixBQURZLDRDQUVaLEFBRlksY0FHWiw0QkFBZ0IsQUFBaEIsQUFIWSxBQUFkLEFBS0E7aUJBQWUsQUFBZixBQUFtQixBQUFuQixBQUNBO1NBQU8sQUFBUCxBQUNEOzs7QUFFRCxTQUFTLEFBQVQsb0JBQXdEO01BQTdCLEFBQTZCLG1GQUFkLEFBQWMsQUFDdEQ7O01BQU0sUUFBUSxBQUNaLEFBRFksNENBRVosQUFGWSxjQUdaLDRCQUFnQixBQUFoQixBQUhZLEFBQWQsQUFLQTtpQkFBZSxBQUFmLEFBQW1CLEFBQW5CLEFBQ0E7U0FBTyxBQUFQLEFBQ0Q7OztBQUVELElBQU0sWUFBWSxRQUFRLEFBQVIsSUFBWSxBQUFaLGFBQXlCLEFBQXpCLGVBQXdDLEFBQXhDLG9CQUE0RCxBQUE5RSxBQUVBOztrQkFBZSxlQUFBO1NBQU8sZ0NBQVUsQUFBVixXQUFxQixBQUFyQixBQUFQO0FBQWYiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvZGVyenNtYWMvRGVza3RvcC9naXRodWIvcmVhY3QtYXBwLXNzciJ9