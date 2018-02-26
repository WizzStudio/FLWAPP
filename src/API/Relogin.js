import { baseURL } from './config'
import { setStorage } from '../common/scripts/wxUtil'

export default (lastAPI) => {
	wx.login({
		success: (data) => {
			wx.request({
				url: `${baseURL}/user/login?code=${data.code}`,
				method: 'GET',
				success: (res) => {
					if (res.header['Authorization']) {
						/* 如果header里有token，则更新 */
						setStorage('token', res.header['Authorization'])
					}
					lastAPI({'Authorization': res.header['Authorization']})
				}
			})
		}
	})
}
