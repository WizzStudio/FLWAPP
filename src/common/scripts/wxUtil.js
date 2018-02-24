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
	return configFn(wx.navigateTo, {url})
}

/**
 * 关闭所有页面，打开到应用内的某个页面。
 * @param url
 */
const reLaunch = (url) => {
	return configFn(wx.reLaunch, {url})
}

const redirectTo = (url) => {
	return configFn(wx.redirectTo, {url})
}

const toast = (title, icon = 'none', duration = 1500, hasMask = false) => {
	return configFn(wx.showToast, {
		title: title, // 提示的内容
		icon: icon, // 图标，有效值 "success", "loading", "none"
		duration: duration, // 提示的延迟时间，单位毫秒，默认：1500
		mask: hasMask // 是否显示透明蒙层，防止触摸穿透，默认：false
	})
}

const showLoading = (title = 'wait', content = 'loading') => {
	return configFn(wx.showLoading, {title, content})
}

const hideLoading = () => {
	wx.hideLoading()
}

const setNavbarTitle = (title) => {
	return configFn(wx.setNavigationBarTitle, {title})
}

const showNavbarLoading = () => {
	wx.showNavigationBarLoading()
}

const hideNavbarLoading = () => {
	wx.hideNavigationBarLoading()
}

export {
	ajax, // 发送ajax请求
	jumpTo, // page跳转
	redirectTo, // page重定向
	reLaunch, // page重加载
	toast, // 显示弹窗
	showLoading, // 显示加载中弹窗
	hideLoading, // 关闭加载中弹窗
	setNavbarTitle, // 设置导航栏标题
	showNavbarLoading, // 在当前页面显示导航条加载动画
	hideNavbarLoading // 隐藏导航条加载动画。
}
