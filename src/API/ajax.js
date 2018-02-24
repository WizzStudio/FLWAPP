import MockServer from './mock/mockServer.js' // mock数据服务

const HOST_URL = 'http://test.com' // 根域名
const DEBUG = false // debug模式
const SUPPORT_METHODS = ['GET', 'POST', 'PUT', 'DELETE'] // 支持的http方法
const DEFAULT_HEADERS = {'Authorization': null}

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

/**
 * 配置请求头
 * @param headers
 * @return {Object}
 * @private 私有方法（依赖了上层作用域的变量）
 */
function _configHeader (headers) {
	let _headers = {}
	for (let key of Object.keys(DEFAULT_HEADERS)) {
		_headers[key] = DEFAULT_HEADERS[key]
	}
	for (let key of Object.keys(headers)) {
		_headers[key] = headers[key]
	}
	return _headers
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
				_url += createURLParamsByObject(data)
			}
			return new Promise((resolve, reject) => {
				wx.request({
					url: _url,
					method: _method,
					header: _configHeader(headers),
					success: function (res) {
						/* TODO：对code做filter code为1返回msg */
						resolve(res)
					},
					fail: function (err) {
						reject(err)
					}
				})
			})
		} else {
			return new Promise((resolve, reject) => {
				wx.request({
					url: _url,
					method: _method,
					header: _configHeader(headers),
					data: data,
					success: function (res) {
						/* TODO：对code做filter */
						resolve(res)
					},
					fail: function (err) {
						reject(err)
					}
				})
			})
		}
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer')
		return MockServer(rurl)
	}
}
