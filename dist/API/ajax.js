'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mockServer = require('./mock/mockServer.js');

var _mockServer2 = _interopRequireDefault(_mockServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mock数据服务

var HOST_URL = 'http://test.com';
var DEBUG = true;

function argumentsErr() {
	throw new Error('arguments missing: check RURL & METHOD');
}

exports.default = function () {
	var rurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : argumentsErr();
	var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : argumentsErr();
	var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	if (!DEBUG) {
		wx.request({
			url: config.API_HOST + data,
			method: method ? method : 'get',
			data: {},
			header: header ? header : { 'Content-Type': 'application/json' },
			success: function success(res) {
				fn(res);
			}
		});
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer');
		return (0, _mockServer2.default)(rurl);
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiXSwibmFtZXMiOlsiSE9TVF9VUkwiLCJERUJVRyIsImFyZ3VtZW50c0VyciIsIkVycm9yIiwicnVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwiY29uZmlnIiwiQVBJX0hPU1QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZm4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQThDOztBQUU5QyxJQUFNQSxXQUFXLGlCQUFqQjtBQUNBLElBQU1DLFFBQVEsSUFBZDs7QUFFQSxTQUFTQyxZQUFULEdBQXlCO0FBQ3hCLE9BQU0sSUFBSUMsS0FBSixDQUFVLHdDQUFWLENBQU47QUFDQTs7a0JBRWMsWUFBNkU7QUFBQSxLQUE1RUMsSUFBNEUsdUVBQXJFRixjQUFxRTtBQUFBLEtBQXJERyxNQUFxRCx1RUFBNUNILGNBQTRDO0FBQUEsS0FBNUJJLElBQTRCLHVFQUFyQixFQUFxQjtBQUFBLEtBQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUMzRixLQUFJLENBQUNOLEtBQUwsRUFBWTtBQUNYTyxLQUFHQyxPQUFILENBQVc7QUFDVkMsUUFBS0MsT0FBT0MsUUFBUCxHQUFrQk4sSUFEYjtBQUVWRCxXQUFRQSxTQUFTQSxNQUFULEdBQWtCLEtBRmhCO0FBR1ZDLFNBQU0sRUFISTtBQUlWTyxXQUFRQSxTQUFTQSxNQUFULEdBQWtCLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUpoQjtBQUtWQyxZQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdkJDLE9BQUdELEdBQUg7QUFDQTtBQVBTLEdBQVg7QUFTQSxFQVZELE1BVU87QUFDTkUsVUFBUUMsR0FBUixDQUFZLG1EQUFaO0FBQ0EsU0FBTywwQkFBV2QsSUFBWCxDQUFQO0FBQ0E7QUFDRCxDIiwiZmlsZSI6ImFqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9ja1NlcnZlciBmcm9tICcuL21vY2svbW9ja1NlcnZlci5qcycgLy8gbW9ja+aVsOaNruacjeWKoVxuXG5jb25zdCBIT1NUX1VSTCA9ICdodHRwOi8vdGVzdC5jb20nXG5jb25zdCBERUJVRyA9IHRydWVcblxuZnVuY3Rpb24gYXJndW1lbnRzRXJyICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgbWlzc2luZzogY2hlY2sgUlVSTCAmIE1FVEhPRCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IChydXJsID0gYXJndW1lbnRzRXJyKCksIG1ldGhvZCA9IGFyZ3VtZW50c0VycigpLCBkYXRhID0ge30sIGhlYWRlcnMgPSB7fSkgPT4ge1xuXHRpZiAoIURFQlVHKSB7XG5cdFx0d3gucmVxdWVzdCh7XG5cdFx0XHR1cmw6IGNvbmZpZy5BUElfSE9TVCArIGRhdGEsXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCA/IG1ldGhvZCA6ICdnZXQnLFxuXHRcdFx0ZGF0YToge30sXG5cdFx0XHRoZWFkZXI6IGhlYWRlciA/IGhlYWRlciA6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0Zm4ocmVzKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ1tIVFRQIFJlcXVlc3RdOiByZXF1ZXN0IGludGVycnVwdGVkIGJ5IG1vY2tTZXJ2ZXInKVxuXHRcdHJldHVybiBNb2NrU2VydmVyKHJ1cmwpXG5cdH1cbn1cbiJdfQ==