'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mockServer = require('./mock/mockServer.js');

var _mockServer2 = _interopRequireDefault(_mockServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mock数据服务

var HOST_URL = 'http://test.com'; // 根域名
var DEBUG = false; // debug模式
var SUPPORT_METHODS = ['GET', 'POST', 'PUT', 'DELETE']; // 支持的http方法

function argumentsErr() {
	throw new Error('[arguments missing]: check RURL & METHOD');
}

function methodErr() {
	throw new Error('[http method error]: check METHOD params in ajax');
}

/**
 * 将map对象转换为URL参数
 * @param dataObject
 * @example {a:1,b:2}
 * @return '?a=1&b=2'
 */
function createURLParamsByObject(dataObject) {
	var dataStr = '';
	Object.keys(dataObject).forEach(function (key) {
		dataStr += key + '=' + dataObject[key] + '&';
	});
	if (dataStr !== '') {
		dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
		return '?' + dataStr;
	}
	return dataStr;
}

exports.default = function () {
	var rurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : argumentsErr();
	var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : argumentsErr();
	var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { 'Content-Type': 'application/json' };

	if (!DEBUG) {
		var _method = method.toUpperCase();
		var _url = HOST_URL + rurl;
		if (SUPPORT_METHODS.indexOf(_method) === -1) {
			methodErr();
		}
		if (_method === 'GET') {
			if (data) {
				_url += createURLParamsByObject(data);
			}
			return new Promise(function (resolve, reject) {
				wx.request({
					url: _url,
					method: _method,
					header: headers,
					success: function success(res) {
						resolve(res);
					},
					fail: function fail(err) {
						reject(err);
					}
				});
			});
		} else {
			return new Promise(function (resolve, reject) {
				wx.request({
					url: _url,
					method: _method,
					header: headers,
					data: data,
					success: function success(res) {
						resolve(res);
					},
					fail: function fail(err) {
						reject(err);
					}
				});
			});
		}
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer');
		return (0, _mockServer2.default)(rurl);
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiXSwibmFtZXMiOlsiSE9TVF9VUkwiLCJERUJVRyIsIlNVUFBPUlRfTUVUSE9EUyIsImFyZ3VtZW50c0VyciIsIkVycm9yIiwibWV0aG9kRXJyIiwiY3JlYXRlVVJMUGFyYW1zQnlPYmplY3QiLCJkYXRhT2JqZWN0IiwiZGF0YVN0ciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJydXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJfbWV0aG9kIiwidG9VcHBlckNhc2UiLCJfdXJsIiwiaW5kZXhPZiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQThDOztBQUU5QyxJQUFNQSxXQUFXLGlCQUFqQixDLENBQW1DO0FBQ25DLElBQU1DLFFBQVEsS0FBZCxDLENBQW9CO0FBQ3BCLElBQU1DLGtCQUFrQixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLFFBQXZCLENBQXhCLEMsQ0FBeUQ7O0FBRXpELFNBQVNDLFlBQVQsR0FBeUI7QUFDeEIsT0FBTSxJQUFJQyxLQUFKLENBQVUsMENBQVYsQ0FBTjtBQUNBOztBQUVELFNBQVNDLFNBQVQsR0FBc0I7QUFDckIsT0FBTSxJQUFJRCxLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNBOztBQUVEOzs7Ozs7QUFNQSxTQUFTRSx1QkFBVCxDQUFrQ0MsVUFBbEMsRUFBOEM7QUFDN0MsS0FBSUMsVUFBVSxFQUFkO0FBQ0FDLFFBQU9DLElBQVAsQ0FBWUgsVUFBWixFQUF3QkksT0FBeEIsQ0FBZ0MsZUFBTztBQUN0Q0gsYUFBV0ksTUFBTSxHQUFOLEdBQVlMLFdBQVdLLEdBQVgsQ0FBWixHQUE4QixHQUF6QztBQUNBLEVBRkQ7QUFHQSxLQUFJSixZQUFZLEVBQWhCLEVBQW9CO0FBQ25CQSxZQUFVQSxRQUFRSyxNQUFSLENBQWUsQ0FBZixFQUFrQkwsUUFBUU0sV0FBUixDQUFvQixHQUFwQixDQUFsQixDQUFWO0FBQ0EsU0FBTyxNQUFNTixPQUFiO0FBQ0E7QUFDRCxRQUFPQSxPQUFQO0FBQ0E7O2tCQUVjLFlBQWlIO0FBQUEsS0FBaEhPLElBQWdILHVFQUF6R1osY0FBeUc7QUFBQSxLQUF6RmEsTUFBeUYsdUVBQWhGYixjQUFnRjtBQUFBLEtBQWhFYyxJQUFnRSx1RUFBekQsSUFBeUQ7QUFBQSxLQUFuREMsT0FBbUQsdUVBQXpDLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUF5Qzs7QUFDL0gsS0FBSSxDQUFDakIsS0FBTCxFQUFZO0FBQ1gsTUFBSWtCLFVBQVVILE9BQU9JLFdBQVAsRUFBZDtBQUNBLE1BQUlDLE9BQU9yQixXQUFXZSxJQUF0QjtBQUNBLE1BQUliLGdCQUFnQm9CLE9BQWhCLENBQXdCSCxPQUF4QixNQUFxQyxDQUFDLENBQTFDLEVBQTZDO0FBQzVDZDtBQUNBO0FBQ0QsTUFBSWMsWUFBWSxLQUFoQixFQUF1QjtBQUN0QixPQUFJRixJQUFKLEVBQVU7QUFDVEksWUFBUWYsd0JBQXdCVyxJQUF4QixDQUFSO0FBQ0E7QUFDRCxVQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLE9BQUdDLE9BQUgsQ0FBVztBQUNWQyxVQUFLUCxJQURLO0FBRVZMLGFBQVFHLE9BRkU7QUFHVlUsYUFBUVgsT0FIRTtBQUlWWSxjQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdkJQLGNBQVFPLEdBQVI7QUFDQSxNQU5TO0FBT1ZDLFdBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ3BCUixhQUFPUSxHQUFQO0FBQ0E7QUFUUyxLQUFYO0FBV0EsSUFaTSxDQUFQO0FBYUEsR0FqQkQsTUFpQk87QUFDTixVQUFPLElBQUlWLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLE9BQUdDLE9BQUgsQ0FBVztBQUNWQyxVQUFLUCxJQURLO0FBRVZMLGFBQVFHLE9BRkU7QUFHVlUsYUFBUVgsT0FIRTtBQUlWRCxXQUFNQSxJQUpJO0FBS1ZhLGNBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN2QlAsY0FBUU8sR0FBUjtBQUNBLE1BUFM7QUFRVkMsV0FBTSxjQUFVQyxHQUFWLEVBQWU7QUFDcEJSLGFBQU9RLEdBQVA7QUFDQTtBQVZTLEtBQVg7QUFZQSxJQWJNLENBQVA7QUFjQTtBQUNELEVBdkNELE1BdUNPO0FBQ05DLFVBQVFDLEdBQVIsQ0FBWSxtREFBWjtBQUNBLFNBQU8sMEJBQVdwQixJQUFYLENBQVA7QUFDQTtBQUNELEMiLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2NrU2VydmVyIGZyb20gJy4vbW9jay9tb2NrU2VydmVyLmpzJyAvLyBtb2Nr5pWw5o2u5pyN5YqhXG5cbmNvbnN0IEhPU1RfVVJMID0gJ2h0dHA6Ly90ZXN0LmNvbScgLy8g5qC55Z+f5ZCNXG5jb25zdCBERUJVRyA9IGZhbHNlIC8vIGRlYnVn5qih5byPXG5jb25zdCBTVVBQT1JUX01FVEhPRFMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnXSAvLyDmlK/mjIHnmoRodHRw5pa55rOVXG5cbmZ1bmN0aW9uIGFyZ3VtZW50c0VyciAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignW2FyZ3VtZW50cyBtaXNzaW5nXTogY2hlY2sgUlVSTCAmIE1FVEhPRCcpXG59XG5cbmZ1bmN0aW9uIG1ldGhvZEVyciAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignW2h0dHAgbWV0aG9kIGVycm9yXTogY2hlY2sgTUVUSE9EIHBhcmFtcyBpbiBhamF4Jylcbn1cblxuLyoqXG4gKiDlsIZtYXDlr7nosaHovazmjaLkuLpVUkzlj4LmlbBcbiAqIEBwYXJhbSBkYXRhT2JqZWN0XG4gKiBAZXhhbXBsZSB7YToxLGI6Mn1cbiAqIEByZXR1cm4gJz9hPTEmYj0yJ1xuICovXG5mdW5jdGlvbiBjcmVhdGVVUkxQYXJhbXNCeU9iamVjdCAoZGF0YU9iamVjdCkge1xuXHRsZXQgZGF0YVN0ciA9ICcnXG5cdE9iamVjdC5rZXlzKGRhdGFPYmplY3QpLmZvckVhY2goa2V5ID0+IHtcblx0XHRkYXRhU3RyICs9IGtleSArICc9JyArIGRhdGFPYmplY3Rba2V5XSArICcmJ1xuXHR9KVxuXHRpZiAoZGF0YVN0ciAhPT0gJycpIHtcblx0XHRkYXRhU3RyID0gZGF0YVN0ci5zdWJzdHIoMCwgZGF0YVN0ci5sYXN0SW5kZXhPZignJicpKVxuXHRcdHJldHVybiAnPycgKyBkYXRhU3RyXG5cdH1cblx0cmV0dXJuIGRhdGFTdHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJ1cmwgPSBhcmd1bWVudHNFcnIoKSwgbWV0aG9kID0gYXJndW1lbnRzRXJyKCksIGRhdGEgPSBudWxsLCBoZWFkZXJzID0geydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSA9PiB7XG5cdGlmICghREVCVUcpIHtcblx0XHRsZXQgX21ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG5cdFx0bGV0IF91cmwgPSBIT1NUX1VSTCArIHJ1cmxcblx0XHRpZiAoU1VQUE9SVF9NRVRIT0RTLmluZGV4T2YoX21ldGhvZCkgPT09IC0xKSB7XG5cdFx0XHRtZXRob2RFcnIoKVxuXHRcdH1cblx0XHRpZiAoX21ldGhvZCA9PT0gJ0dFVCcpIHtcblx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdF91cmwgKz0gY3JlYXRlVVJMUGFyYW1zQnlPYmplY3QoZGF0YSlcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogX3VybCxcblx0XHRcdFx0XHRtZXRob2Q6IF9tZXRob2QsXG5cdFx0XHRcdFx0aGVhZGVyOiBoZWFkZXJzLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6IF91cmwsXG5cdFx0XHRcdFx0bWV0aG9kOiBfbWV0aG9kLFxuXHRcdFx0XHRcdGhlYWRlcjogaGVhZGVycyxcblx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZygnW0hUVFAgUmVxdWVzdF06IHJlcXVlc3QgaW50ZXJydXB0ZWQgYnkgbW9ja1NlcnZlcicpXG5cdFx0cmV0dXJuIE1vY2tTZXJ2ZXIocnVybClcblx0fVxufVxuIl19