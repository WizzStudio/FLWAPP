/* 1.获取openid */
import { baseURL } from '../config'
import { getStorage, showLoading, hideLoading, toast } from '../../common/scripts/wxUtil'

export default (amount) => {
	showLoading('正在生成订单...')
	return new Promise((resolve, reject) => {
		if (getStorage('openId')) {
			// 已经获取过openId
			wx.request({
				url: `${baseURL}/pay/preOrder`,
				method: 'POST',
				data: {
					amount: amount, /* 订单号 */
					openId: getStorage('openId')
				},
				header: {
					'content-type': 'application/json'
				},
				success: function (res) {
					showLoading('正在调起支付...')
					wx.requestPayment({
						'timeStamp': res.data.timeStamp,
						'nonceStr': res.data.nonceStr,
						'package': 'prepay_id=' + res.data.prepay_id,
						'signType': 'MD5',
						'paySign': res.data._paySignjs,
						'success': function (res) {
							hideLoading()
							resolve(res.data)
						},
						'fail': function (err) {
							hideLoading()
							reject(err)
						}
					})
				},
				fail: function (err) {
					hideLoading()
					reject(err)
				}
			})
		} else {
			// 未获取过openId（可能是登录失效）
			toast('调取捐赠模块失败', 'none', 1500)
			hideLoading()
			reject(new Error('payment fail'))
		}
	})
}
// wx.request({
// 	url: `${baseURL}/user/login`,
// 	data: {code: data.code},
// 	method: 'POST',
// 	success: (res) => {
// 		if (res.header['Authorization']) {
// 			/* 如果header里有token，则更新 */
// 			parseToken(res.header['Authorization'])
// 			/* 这个地方已经可以获取到最新的openid了 */
// 		}
// 	}
// })
