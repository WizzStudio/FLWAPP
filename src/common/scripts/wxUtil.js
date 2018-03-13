/* 微信接口
 * 拆分出来的原因：在组件内部保留抽象，方便日后替换掉wx接口模块，换上其他模块就可以构建为普通的Web应用 */
const configFn = (wxAPI, config = {}) => {
	return new Promise((resolve, reject) => {
		config.success = res => (resolve(res))
		config.fail = err => (reject(err))
		wxAPI(config)
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
const tabBarUrl = ['account/login', 'account/home', './home', './login']
const jumpTo = (url) => {
	//	console.log(url)
	if (url === tabBarUrl[0] || url === tabBarUrl[1] || url === tabBarUrl[2] || url === tabBarUrl[3]) {
		return configFn(wx.switchTab, {url})
	} else {
		return configFn(wx.navigateTo, {url})
	}
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

const modal = (content, fn) => {
	return configFn(wx.showModal, {
		title: '提示',
		content: content, //	模态框内容
		success: fn
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

const wxLogin = () => {
	return configFn(wx.login)
}

const wxGetUserInfo = () => {
	return configFn(wx.getUserInfo)
}

const setStorage = (key, value) => {
	// return configFn(wx.setStorage, {
	// 	key,
	// 	data: value
	// })
	return wx.setStorageSync(key, value)
}

const getStorage = (key) => {
	// return configFn(wx.getStorage, {
	// 	key
	// })
	return wx.getStorageSync(key)
}

const removeStorage = (key) => {
	// return configFn(wx.removeStorage, {
	// 	key
	// })
	return wx.removeStorage(key)
}

const clearStorage = () => {
	return wx.clearStorage()
}

// 从本地上传头像
//	avatarUrl：当前页面存储在data里的头像属性名
const chooseAvatar = (that, avatarUrl) => {
	wx.chooseImage({
		count: 1,
		sizeType: ['compressed'],
		success: function (res) {
			that[avatarUrl] = res.tempFilePaths[0]
			let avatar = res.tempFilePaths[0]
			that.$apply()
			wx.request({
				url: 'http://api.xiaoyaoeden.top/oss/up',
				header: {Authorization: wx.getStorageSync('token')},
				success (res) {
					console.log(res.data)
					let token = res.data.data
					let key = that.$WX.getStorage('userId') + '-avatar.jpg'
					wx.uploadFile({
						url: 'http://upload.qiniu.com',
						filePath: avatar,
						name: 'file',
						formData: {
							'key': key,
							token: token
						},
						success: function() {
							console.log(key)
						}
					})
				}
			})
		},
		fail: function (res) {
			toast('请重新选择图片', 'none')
		}
	})
}

const downLoadImg = (callback) => {
	let userId = getStorage('userId')
	wx.request({
		url: 'http://api.xiaoyaoeden.top/oss/down/' + userId + '-avatar.jpg',
		header: { Authorization: wx.getStorageSync('token') },
		success (res) {
			if (callback) {
				callback(res.data.data)
			}
		}
	})
}
const upLoad = (url, filePath, name, header, formData, fn) => {
	wx.uploadFile({
		url: url,
		filePath: filePath,
		name: name,
		formData: formData,
		success: fn
	})
}

const changeNavBarColor = (frontColor0x = '#ffffff', backgroundColor0x = '#db4d3d', animation = {
	duration: 400, timingFunc: 'easeIn'
}) => {
	wx.setNavigationBarColor({
		frontColor: frontColor0x,
		backgroundColor: backgroundColor0x,
		animation
	})
}

export {
	ajax, // 发送ajax请求
	jumpTo, // page跳转
	redirectTo, // page重定向
	reLaunch, // page重加载
	toast, // 显示弹窗
	modal, //	显示模态弹窗
	showLoading, // 显示加载中弹窗
	hideLoading, // 关闭加载中弹窗
	setNavbarTitle, // 设置导航栏标题
	showNavbarLoading, // 在当前页面显示导航条加载动画
	hideNavbarLoading, // 隐藏导航条加载动画。
	wxLogin, // 获取微信用户登录code
	wxGetUserInfo, // 获取微信用户信息
	setStorage, // 设置缓存
	getStorage, // 获取缓存
	removeStorage, // 删除某条缓存数据
	clearStorage, // 清空缓存数据
	chooseAvatar, //	上传头像
	upLoad, //	上传文件
	downLoadImg,	//	下载图片
	changeNavBarColor // 改变顶部栏的颜色
}
