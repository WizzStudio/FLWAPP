import { baseURL } from './config'
import { setStorage } from '../common/scripts/wxUtil'
import { parseToken } from '../common/scripts/utils'

export default () => {
	return new Promise((resolve, reject) => {
		wx.login({
			success: (res) => resolve(res),
			fail: (err) => reject(err)
		})
	})
		.then((res) => {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `${baseURL}/user/login`,
				data: { code: res.code },
				method: 'POST',
				success: (res) => {
					if (res.header['Authorization']) {
						/* 如果header里有token，则更新 */
						parseToken(res.header['Authorization'])
						setStorage('token', res.header['Authorization'])
					}
					resolve(res)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	})
}
