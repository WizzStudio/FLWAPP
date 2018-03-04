import MockServer from './mock/mockServer.js' // mock数据服务
import Route from './mock/route' // mock数据服务
import { toast, getStorage, setStorage } from '../common/scripts/wxUtil'
import statusCodeFilter from './statusCodeFilter'
import * as config from './config'

const HOST_URL = config.baseURL || '' // 根域名
const DEBUG = config.debug // debug模式
const SUPPORT_METHODS = config.surpportMethods || ['GET'] // 支持的http方法
const DEFAULT_HEADERS = config.defaultHeaders || {}

function argumentsErr () {
	throw new Error('[arguments missing]: check RURL & METHOD')
}

function methodErr () {
	throw new Error('[http method error]: check METHOD params in ajax')
}

function _configRequest (config = {}) {
	return new Promise((resolve, reject) => {
		config.fail = err => {
			toast(`请求失败 ${err.errMsg}`, 'none', 3000)
			reject(err)
		}
		config.success = res => {
			if (res.statusCode !== 200) {
				statusCodeFilter(res.statusCode, (header) => {
					config.header = _configHeader(header)
					_configRequest(config)
				})
				return false
			}
			if (res.header['Authorization']) {
				/* 如果header里有token，则更新 */
				setStorage('token', res.header['Authorization'])
			}
			if (res.data.code) {
				toast(res.data.msg)
			}
			/* 在这里进行的返回的，那么在此之前完成重请求就可以 */
			resolve(res.data)
		}
		wx.request(config)
	})
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
	if (!getStorage('token')) {
		return headers
	}
	/* 如果缓存里有token则写上 */
	DEFAULT_HEADERS['Authorization'] = getStorage('token')
	for (let key of Object.keys(DEFAULT_HEADERS)) {
		headers[key] = DEFAULT_HEADERS[key]
	}
	return headers
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
			// return new Promise((resolve, reject) => {
			// 	wx.request({
			// 		url: _url,
			// 		method: _method,
			// 		header: _configHeader(headers),
			// 		success: function (res) {
			// 			if (res.data.code) {
			// 				toast(res.data.msg)
			// 			}
			// 			resolve(res)
			// 		},
			// 		fail: function (err) {
			// 			reject(err)
			// 		}
			// 	})
			// })
			return _configRequest({
				url: _url,
				method: _method,
				header: _configHeader(headers)
			})
		} else {
			// return new Promise((resolve, reject) => {
			// wx.request({
			// 	url: _url,
			// 	method: _method,
			// 	header: _configHeader(headers),
			// 	data: data,
			// 	success: function (res) {
			// 		if (res.data.code) {
			// 			toast(res.data.msg)
			// 		}
			// 		resolve(res.data)
			// 	},
			// 	fail: function (err) {
			// 		reject(err)
			// 	}
			// })
			// })
			return _configRequest({
				url: _url,
				method: _method,
				header: _configHeader(headers),
				data: data
			})
		}
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer')
		/* TODO 重构后的测试接口 */
		return Route(rurl)
		//	return MockServer(rurl)
	}
}
