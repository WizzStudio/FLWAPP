/* 检查小程序版本更新的模块 */
const _init = () => {
	const updateManager = wx.getUpdateManager()
	
	updateManager.onCheckForUpdate(function (res) {
		// 请求完新版本信息的回调
		console.log('是否有版本更新：', res.hasUpdate)
	})
	
	updateManager.onUpdateReady(function () {
		wx.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启小红花？',
			success: function (res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate()
				}
			}
		})
	})
	
	updateManager.onUpdateFailed(function () {
		// 新的版本下载失败
		wx.showToast({
			title: '新版本下载失败！',
			icon: 'none',
			duration: 1500,
			hasMask: false
		})
	})
}

export default () => {
	_init()
}
