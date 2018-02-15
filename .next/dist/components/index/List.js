'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = require('antd/lib/list');

var _list2 = _interopRequireDefault(_list);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coderzsmac/Desktop/github/react-app-ssr/components/index/List.js';


var Search = _input2.default.Search;

var Searcher = function Searcher(props) {
  var handleClick = function handleClick() {
    console.log(_button2.default);
  };
  return _react2.default.createElement('section', {
    className: 'jsx-662956748',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-662956748' + ' ' + 'label',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, '\u8FD9\u662F\u4E00\u4E2A\u5217\u8868'), _react2.default.createElement(_list2.default, {
    itemLayout: 'horizontal',
    dataSource: props.data,
    renderItem: function renderItem(item) {
      return _react2.default.createElement(_list2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_list2.default.Item.Meta, {
        avatar: _react2.default.createElement(_avatar2.default, { src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        title: _react2.default.createElement('a', { target: '_blank', href: item.html_url, className: 'jsx-662956748',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, item.name),
        description: item.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '662956748',
    css: '.label.jsx-662956748{color:red;margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5kZXgvTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmdCLEFBR2tCLFVBQ00sZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvaW5kZXgvTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29kZXJ6c21hYy9EZXNrdG9wL2dpdGh1Yi9yZWFjdC1hcHAtc3NyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtJbnB1dCxCdXR0b24sUm93LENvbCxMaXN0LEF2YXRhcn0gZnJvbSAnYW50ZCdcbmNvbnN0IFNlYXJjaCA9IElucHV0LlNlYXJjaFxuXG5jb25zdCBTZWFyY2hlciA9IChwcm9wcyk9PntcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKEJ1dHRvbik7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj7ov5nmmK/kuIDkuKrliJfooag8L2Rpdj5cbiAgICAgIDxMaXN0XG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgZGF0YVNvdXJjZT17cHJvcHMuZGF0YX1cbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxuICAgICAgICAgICAgICB0aXRsZT17PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aXRlbS5odG1sX3VybH0+e2l0ZW0ubmFtZX08L2E+fVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sYWJlbHtcbiAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREJyB9KVxuICAgIH1cbiAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VhcmNoZXIpIl19 */\n/*@ sourceURL=components/index/List.js */'
  }));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: function addCount() {
      dispatch({ type: 'ADD' });
    }
  };
};
var mapStateToProps = function mapStateToProps(state) {
  return state;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Searcher);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5kZXgvTGlzdC5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiU2VhcmNoIiwiU2VhcmNoZXIiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpdGVtIiwiaHRtbF91cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFkZENvdW50IiwidHlwZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxTQUFTLGdCQUFmLEFBQXFCOztBQUVyQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFRLEFBQ3hCO01BQU0sY0FBYyxTQUFkLEFBQWMsY0FBSSxBQUN0QjtZQUFBLEFBQVEsQUFDVDtBQUZELEFBR0E7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7dUNBQUEsQUFBZTs7Z0JBQWY7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBO2dCQUFBLEFBQ2EsQUFDWDtnQkFBWSxNQUZkLEFBRW9CLEFBQ2xCO2dCQUFZLDBCQUFBOzZCQUNWLDZCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsK0NBQ0UsQUFBTSxLQUFOLEFBQVc7a0VBQ08sS0FBUixBQUFZO3NCQUFaO3dCQURWLEFBQ1UsQUFDUjtBQURRO1NBQUE7K0JBQ0QsY0FBQSxPQUFHLFFBQUgsQUFBVSxVQUFTLE1BQU0sS0FBekIsQUFBOEIscUJBQTlCOztzQkFBQTt3QkFBQSxBQUF5QztBQUF6QztTQUFBLE9BRlQsQUFFUyxBQUE4QyxBQUNyRDtxQkFBYSxLQUhmLEFBR29COztvQkFIcEI7c0JBRlEsQUFDVixBQUNFO0FBQUE7QUFDRTtBQU5SOztnQkFBQTtrQkFGRixBQUVFO0FBQUE7QUFDRTthQUhKO1NBREYsQUFDRSxBQXVCSDtBQXZCRztBQUxKOztBQThCQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksb0JBQU0sQUFDZDtlQUFTLEVBQUUsTUFBWCxBQUFTLEFBQVEsQUFDbEI7QUFISCxBQUFPLEFBS1I7QUFMUSxBQUNMO0FBRko7QUFPQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7U0FBQSxBQUFPLEFBQ1I7QUFGRCxBQUlBOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvZGVyenNtYWMvRGVza3RvcC9naXRodWIvcmVhY3QtYXBwLXNzciJ9