import { baseURL } from './config'
import { setStorage } from '../common/scripts/wxUtil'
import { parseToken } from '../common/scripts/utils'

export default (lastAPI) => {
	wx.login({
		success: (data) => {
			wx.request({
				url: `${baseURL}/user/login`,
				data: {code: data.code},
				method: 'POST',
				success: (res) => {
					if (res.header['Authorization']) {
						/* 如果header里有token，则更新 */
						parseToken(res.header['Authorization'])
						setStorage('token', res.header['Authorization'])
					}
					lastAPI({'Authorization': res.header['Authorization']})
				}
			})
		}
	})
}
