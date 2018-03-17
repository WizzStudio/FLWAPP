/* 1.获取openid */
import { baseURL } from '../config'
import { getStorage, showLoading, hideLoading } from '../../common/scripts/wxUtil'

if (getStorage('openId')) {
	// 已经获取过openId

} else {
	// 未获取过openId（可能是登录失效）

}

wx.request({
	url: `${baseURL}/user/login`,
	data: {code: data.code},
	method: 'POST',
	success: (res) => {
		if (res.header['Authorization']) {
			/* 如果header里有token，则更新 */
			parseToken(res.header['Authorization'])
			/* 这个地方已经可以获取到最新的openid了 */
		}
	}
})
