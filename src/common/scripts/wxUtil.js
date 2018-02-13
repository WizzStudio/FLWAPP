/* 微信接口
 * 拆分出来的原因：在组件内部保留抽象，方便日后替换掉wx接口模块，换上其他模块就可以构建为普通的Web应用 */

const configFn = (wxAPI, config = {}) => {
	let option = {}
	if (Object.keys(config).length) {
		for (let key of Object.keys(config)) {
			option[key] = config[key]
		}
	}
	// console.log(option)
	return new Promise((resolve, reject) => {
		option.success = res => (resolve(res))
		option.fail = err => (reject(err))
		wxAPI(option)
	})
}

const ajax = ({url, method, data, headers}) => {
	// return new Promise((resolve, reject) => {
	// 	wx.request({
	// 		url: url,
	// 		method: method,
	// 		data: data,
	// 		header: headers,
	// 		success: function (res) {
	// 			resolve(res)
	// 		},
	// 		fail: function (err) {
	// 			reject(err)
	// 		}
	// 	})
	// })
	return configFn(wx.request, {
		url: url,
		method: method,
		data: data,
		header: headers
	})
}

/**
 * 跳转
 * @param url {String} 跳转相对路径
 * @return {Promise}
 */
const jumpTo = (url) => {
	// return new Promise((resolve, reject) => {
	// 	wx.navigateTo({
	// 		url,
	// 		success: function (res) {
	// 			resolve(res)
	// 		},
	// 		fail: function (err) {
	// 			reject(err)
	// 		}
	// 	})
	// })
	return configFn(wx.navigateTo, {url})
}

export {
	ajax, // 发送ajax请求
	jumpTo // page跳转
}
