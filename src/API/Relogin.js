import { baseURL } from './config'

export default () => {
	wx.login({
		success: (data) => {
			wx.request({
				url: `${baseURL}/user/login?code=${data.code}`,
				method: 'GET',
				success: (res) => {
					if (res.header['Authorization']) {
						/* 如果header里有token，则更新 */
						wx.setStorageSync('token', res.header['Authorization'])
					}
				}
			})
		}
	})
}
