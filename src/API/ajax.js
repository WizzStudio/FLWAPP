import MockServer from './mock/mockServer.js' // mock数据服务

const HOST_URL = 'http://test.com'
const DEBUG = true

function argumentsErr () {
	throw new Error('arguments missing: check RURL & METHOD')
}

export default (rurl = argumentsErr(), method = argumentsErr(), data = {}, headers = {}) => {
	if (!DEBUG) {
		wx.request({
			url: config.API_HOST + data,
			method: method ? method : 'get',
			data: {},
			header: header ? header : {'Content-Type': 'application/json'},
			success: function (res) {
				fn(res)
			}
		})
	} else {
		console.log('[HTTP Request]: request interrupted by mockServer')
		return MockServer(rurl)
	}
}
