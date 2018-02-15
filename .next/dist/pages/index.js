'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../redux/store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

var _Menu = require('../components/index/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _List = require('../components/index/List');

var _List2 = _interopRequireDefault(_List);

var _Search = require('../components/index/Search');

var _Search2 = _interopRequireDefault(_Search);

var _index = require('../styles/index/index.less');

var _index2 = _interopRequireDefault(_index);

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/coderzsmac/Desktop/github/react-app-ssr/pages/index.js?entry';

var Index = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var home = _ref.home;
  return home;
}), (0, _store2.default)(_class = _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleSearch',
    value: function handleSearch(val) {
      this.props.dispatch({ type: 'GET_LIST_ASYNC', payload: { user: val.trim() } });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', {
        className: 'jsx-3603155595',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_Menu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('section', {
        className: 'jsx-3603155595' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_Search2.default, { onSearch: this.handleSearch.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_List2.default, { data: this.props.list || [], __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: _index2.default.__hash,
        css: _index2.default
      }), _react2.default.createElement(_style2.default, {
        styleId: '3603155595',
        css: '.container.jsx-3603155595{width:1150px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Db0IsQUFHeUIsYUFDQyxjQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2RlcnpzbWFjL0Rlc2t0b3AvZ2l0aHViL3JlYWN0LWFwcC1zc3IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYmluZFJlZHV4IGZyb20gJ2JpbmRSZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBNZW51IGZyb20gJ2NvbXBvbmVudHMvaW5kZXgvTWVudSdcbmltcG9ydCBMaXN0IGZyb20gJ2NvbXBvbmVudHMvaW5kZXgvTGlzdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnY29tcG9uZW50cy9pbmRleC9TZWFyY2gnXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvaW5kZXgvaW5kZXgubGVzcydcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3V0aWxzL3JlcXVlc3QnXG5pbXBvcnQgY29uZmlnIGZyb20gJ3V0aWxzL2NvbmZpZydcblxuQGJpbmRSZWR1eFxuQGNvbm5lY3QoKHsgaG9tZSB9KSA9PiBob21lKVxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSB9KSB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgdXJsOiBjb25maWcuYXBpLmdldEZhdm9yaXRlQnlVc2VyLFxuICAgICAgZGF0YToge3VzZXI6c3RvcmUuZ2V0U3RhdGUoKS5ob21lLnVzZXJ9XG4gICAgfSlcbiAgICByZXR1cm4ge2xpc3R9XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsKXtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOidHRVRfTElTVF9BU1lOQycscGF5bG9hZDp7dXNlcjp2YWwudHJpbSgpfX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8U2VhcmNoIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPExpc3QgZGF0YT17dGhpcy5wcm9wcy5saXN0IHx8IFtdfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e3N0eWxlc2hlZXR9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDoxMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var store = _ref2.store;
        var list;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _request2.default)({
                  url: _config2.default.api.getFavoriteByUser,
                  data: { user: store.getState().home.user }
                });

              case 2:
                list = _context.sent;
                return _context.abrupt('return', { list: list });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react2.default.Component)) || _class) || _class);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYmluZFJlZHV4IiwiY29ubmVjdCIsIk1lbnUiLCJMaXN0IiwiU2VhcmNoIiwic3R5bGVzaGVldCIsInJlcXVlc3QiLCJjb25maWciLCJJbmRleCIsImhvbWUiLCJ2YWwiLCJwcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIiwidHJpbSIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJsaXN0Iiwic3RvcmUiLCJ1cmwiLCJhcGkiLCJnZXRGYXZvcml0ZUJ5VXNlciIsImRhdGEiLCJnZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztJLEFBSUQseUNBREcsZ0JBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRztTQUFILEFBQWM7QUFBdEIsQSxDQUFBLEdBREEsQTs7Ozs7Ozs7Ozs7aUNBWWMsQSxLQUFJLEFBQ2Y7V0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLEVBQUMsTUFBRCxBQUFNLGtCQUFpQixTQUFRLEVBQUMsTUFBSyxJQUF6RCxBQUFvQixBQUErQixBQUFNLEFBQUksQUFDOUQ7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsa0NBQU8sVUFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUFwQyxBQUFrQixBQUF1QjtvQkFBekM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxnQ0FBSyxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBdkIsQUFBK0I7b0JBQS9CO3NCQUpKLEFBRUUsQUFFRTtBQUFBOztpQ0FKSjtBQUFBO0FBQUE7aUJBQUE7YUFERixBQUNFLEFBa0JIO0FBbEJHOzs7Ozs7WUFkMkIsQSxjQUFBLEE7Ozs7Ozs7O3VCQUV0QixpQkFBQSxBQUFPLElBRGEsQUFDVCxBQUNoQjt3QkFBTSxFQUFDLE1BQUssTUFBQSxBQUFNLFdBQU4sQUFBaUIsS0FBSyxBLEFBRmpCLEFBQVEsQUFFbkI7QUFGbUIsQUFDekIsaUJBRGlCOzttQkFBYjtBO2lEQUlDLEVBQUMsTUFBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUFMsZ0JBQU0sQSwwQkFxQzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2RlcnpzbWFjL0Rlc2t0b3AvZ2l0aHViL3JlYWN0LWFwcC1zc3IifQ==