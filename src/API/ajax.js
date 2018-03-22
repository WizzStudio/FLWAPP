// import MockServer from './mock/mockServer.js' // mock数据服务：弃用
import Route from './mock/route' // mock数据服务
import { toast, getStorage, setStorage, showLoading, hideLoading } from '../common/scripts/wxUtil'
import { parseToken } from '../common/scripts/utils'
import statusCodeFilter from './statusCodeFilter'
import * as config from './config'

import 'jsrsasign'

const HOST_URL = config.baseURL || '' // 根域名
const DEBUG = config.debug // debug模式
const SUPPORT_METHODS = config.surpportMethods || ['GET'] // 支持的http方法
const DEFAULT_HEADERS = config.defaultHeaders || {}
const CRITICAL_COUNT = 2 // 重复请求的临界阈值 防止无限递归
let INIT_COUNT = 0
let INIT_RESOVLE = null

function argumentsErr () {
	throw new Error('[arguments missing]: check RURL & METHOD')
}

function methodErr () {
	throw new Error('[http method error]: check METHOD params in ajax')
}

function _configRequest (config = {}) {
	return new Promise((resolve, reject) => {
		if (INIT_COUNT === 0) {
			// 第一次进入函数
			INIT_RESOVLE = resolve
		}
		config.fail = err => {
			hideLoading()
			toast(`请求失败 ${err.errMsg}`, 'none', 1500)
			reject(err)
		}
		config.success = res => {
			if (res.statusCode !== 200) {
				// console.log(res)
				statusCodeFilter(res.statusCode, (header) => {
					config.header = _configHeader(header)
					if (INIT_COUNT >= CRITICAL_COUNT) return toast(`未注册用户！`, 'none', 3000)
					INIT_COUNT++
					_configRequest(config)
				})
				return false
			}
			if (res.header['Authorization']) {
				/* 如果header里有token，则更新 */
				setStorage('token', res.header['Authorization'])
				parseToken(res.header['Authorization'])
			}
			if (res.data.code) {
				toast(res.data.msg)
			}
			/* TODO: TEST放出header里面的token为了做测试 */
			res.data.token = res.header['Authorization']
			/* 在这里进行的返回的，那么在此之前完成重请求就可以 */
			hideLoading() // 请求成功后释放
			INIT_RESOVLE(res.data)
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
 *
 * @param dataObject {Object}
 * @example {value:2}
 * @return '/2'
 * @example SomeAPI: {url: '/test' , data: {value:2}} ===> '/test/2'
 */
function concatURLinRESTful (dataObject) {
	if (Object.keys(dataObject).length > 1) return new Error('arguments length must <= 1!')
	return `/${Object.values(dataObject)[0]}`
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
		/* loading */
		hideLoading()
		showLoading('加载中...')
		let _method = method.toUpperCase()
		let _url = HOST_URL + rurl
		if (SUPPORT_METHODS.indexOf(_method) === -1) {
			methodErr()
		}
		/* 针对restfulAPI做的补丁 */
		if (_method === 'GET_RESTFUL') {
			if (data) {
				_url += concatURLinRESTful(data)
			}
			return _configRequest({
				url: _url,
				method: 'GET',
				header: _configHeader(headers)
			})
		}
		/**/
		if (_method === 'GET') {
			if (data) {
				_url += createURLParamsByObject(data)
			}
			return _configRequest({
				url: _url,
				method: _method,
				header: _configHeader(headers)
			})
		} else {
			return _configRequest({
				url: _url,
				method: _method,
				header: _configHeader(headers),
				data: data
			})
		}
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer')
		return Route(rurl)
	}
}
