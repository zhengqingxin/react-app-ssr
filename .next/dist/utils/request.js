'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _config = require('./config');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.baseURL = _config.baseURL;

var fetch = function fetch(options) {
  var _options$method = options.method,
      method = _options$method === undefined ? 'get' : _options$method,
      data = options.data,
      url = options.url;

  var cloneData = _lodash2.default.cloneDeep(data) || {};
  var toPath = _pathToRegexp2.default.compile(url);
  url = toPath(cloneData);

  switch (method.toLowerCase()) {
    case 'get':
      return _axios2.default.get(url, {
        params: cloneData
      });
    case 'delete':
      return _axios2.default.delete(url, {
        data: cloneData
      });
    case 'post':
      return _axios2.default.post(url, _qs2.default.stringify(cloneData));
    case 'put':
      return _axios2.default.put(url, cloneData);
    case 'patch':
      return _axios2.default.patch(url, cloneData);
    default:
      return (0, _axios2.default)(options);
  }
};

function request(options) {
  return fetch(options).then(function (response) {
    if (response.status !== 200) {
      throw new Error();
    }
    var data = response.data;
    return data;
  }).catch(function (error) {
    console.error(error);
    _message3.default.error('系统开小差了,一会儿再试吧~');
    return null;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJxcyIsImJhc2VVUkwiLCJsb2Rhc2giLCJwYXRoVG9SZWdleHAiLCJkZWZhdWx0cyIsImZldGNoIiwib3B0aW9ucyIsIm1ldGhvZCIsImRhdGEiLCJ1cmwiLCJjbG9uZURhdGEiLCJjbG9uZURlZXAiLCJ0b1BhdGgiLCJjb21waWxlIiwidG9Mb3dlckNhc2UiLCJnZXQiLCJwYXJhbXMiLCJkZWxldGUiLCJwb3N0Iiwic3RyaW5naWZ5IiwicHV0IiwicGF0Y2giLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBZTs7QUFDeEIsQUFBTzs7OztBQUVQLEFBQU87Ozs7OztBQUVQLGdCQUFBLEFBQU0sU0FBTixBQUFlLEFBQVU7O0FBRXpCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLFNBQVk7d0JBQUEsQUFLckIsUUFMcUIsQUFFdkI7TUFGdUIsQUFFdkIseUNBRnVCLEFBRWQsUUFGYztNQUFBLEFBR3ZCLE9BSHVCLEFBS3JCLFFBTHFCLEFBR3ZCO01BSHVCLEFBSXZCLE1BSnVCLEFBS3JCLFFBTHFCLEFBSXZCLEFBR0Y7O01BQU0sWUFBWSxpQkFBQSxBQUFPLFVBQVAsQUFBaUIsU0FBbkMsQUFBNEMsQUFDNUM7TUFBTSxTQUFTLHVCQUFBLEFBQWEsUUFBNUIsQUFBZSxBQUFxQixBQUNwQztRQUFNLE9BQU4sQUFBTSxBQUFPLEFBRWI7O1VBQVEsT0FBUixBQUFRLEFBQU8sQUFDYjtTQUFBLEFBQUssQUFDSDs2QkFBTyxBQUFNLElBQU4sQUFBVTtnQkFBakIsQUFBTyxBQUFlLEFBQ1osQUFFWjtBQUh3QixBQUNwQixPQURLO1NBR1QsQUFBSyxBQUNIOzZCQUFPLEFBQU0sT0FBTixBQUFhO2NBQXBCLEFBQU8sQUFBa0IsQUFDakIsQUFFVjtBQUgyQixBQUN2QixPQURLO1NBR1QsQUFBSyxBQUNIO2FBQU8sZ0JBQUEsQUFBTSxLQUFOLEFBQVcsS0FBSyxhQUFBLEFBQUcsVUFBMUIsQUFBTyxBQUFnQixBQUFhLEFBQ3RDO1NBQUEsQUFBSyxBQUNIO2FBQU8sZ0JBQUEsQUFBTSxJQUFOLEFBQVUsS0FBakIsQUFBTyxBQUFlLEFBQ3hCO1NBQUEsQUFBSyxBQUNIO2FBQU8sZ0JBQUEsQUFBTSxNQUFOLEFBQVksS0FBbkIsQUFBTyxBQUFpQixBQUMxQjtBQUNFO2FBQU8scUJBaEJYLEFBZ0JJLEFBQU8sQUFBTSxBQUVsQjs7QUE3QkQsQUErQkE7O0FBQWUsU0FBQSxBQUFTLFFBQVQsQUFBa0IsU0FBUyxBQUN4QztlQUFPLEFBQU0sU0FBTixBQUFlLEtBQUssVUFBQSxBQUFDLFVBQWEsQUFDdkM7UUFBRyxTQUFBLEFBQVMsV0FBWixBQUF1QixLQUFJLEFBQ3pCO1lBQU0sSUFBTixBQUFNLEFBQUksQUFDWDtBQUNEO1FBQUksT0FBTyxTQUFYLEFBQW9CLEFBQ3BCO1dBQUEsQUFBTyxBQUNSO0FBTk0sR0FBQSxFQUFBLEFBTUosTUFBTSxVQUFBLEFBQUMsT0FBVSxBQUNsQjtZQUFBLEFBQVEsTUFBUixBQUFjLEFBQ2Q7c0JBQUEsQUFBUSxNQUFSLEFBQWMsQUFDZDtXQUFBLEFBQU8sQUFDUjtBQVZELEFBQU8sQUFXUiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2RlcnpzbWFjL0Rlc2t0b3AvZ2l0aHViL3JlYWN0LWFwcC1zc3IifQ==