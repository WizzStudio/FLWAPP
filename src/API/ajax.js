import MockServer from './mock/mockServer.js' // mock数据服务

const HOST_URL = 'http://test.com' // 根域名
const DEBUG = false // debug模式
const SUPPORT_METHODS = ['GET', 'POST', 'PUT', 'DELETE'] // 支持的http方法

function argumentsErr () {
	throw new Error('[arguments missing]: check RURL & METHOD')
}

function methodErr () {
	throw new Error('[http method error]: check METHOD params in ajax')
}
/**
 * 将map对象转换为URL参数
 * @param dataObject
 * @example {a:1,b:2}
 * @return '?a=1&b=2'
 */
function createURLParamsByObject (dataObject) {
	let dataStr = ''
	Object.keys(dataObject).forEach(key => {
		dataStr += key + '=' + dataObject[key] + '&'
	})
	if (dataStr !== '') {
		dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
		return '?' + dataStr
	}
	return dataStr
}

export default (rurl = argumentsErr(), method = argumentsErr(), data = null, headers = {'Content-Type': 'application/json'}) => {
	if (!DEBUG) {
		let _method = method.toUpperCase()
		let _url = HOST_URL + rurl
		if (SUPPORT_METHODS.indexOf(_method) === -1) {
			methodErr()
		}
		if (_method === 'GET') {
			if (data) {
				console.log('get')
				_url += createURLParamsByObject(data)
			}
			wx.request({
				url: _url,
				method: _method,
				header: headers,
				success: function (res) {
					return Promise.resolve(res)
				},
				fail: function (err) {
					return Promise.reject(err)
				}
			})
		} else {
			wx.request({
				url: _url,
				method: _method,
				header: headers,
				data: data,
				success: function (res) {
					return Promise.resolve(res)
				},
				fail: function (err) {
					return Promise.reject(err)
				}
			})
		}
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer')
		return MockServer(rurl)
	}
}
