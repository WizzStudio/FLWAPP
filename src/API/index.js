import ajax from './ajax'
import request from './request'
import API from './APIList'
import { verifyParams } from '../common/scripts/utils' // 检测data里的key是否完整
import { getStorage, toast, reLaunch, modal, goBack } from '../common/scripts/wxUtil'

export default (apiKey, data, headers) => {
	let api = API[apiKey]
	// console.log('获取api的权限', api.right)
	// console.log('获取role', getStorage('role'))
	// console.log('权限判断', parseInt(api.right) & parseInt(getStorage('role')))
	
	// 当前role无相应接口权限
	if (api.right && ((typeof parseInt(getStorage('role')) === 'number') && !(parseInt(api.right) & parseInt(getStorage('role'))))) {
		console.error(`此接口没有权限：${apiKey}`)
		if (parseInt(getStorage('role')) === 0) {
			goBack()
			modal('您尚未注册，是否前往注册？', '提示')
				.then(res => {
					if (res.confirm) {
						toast('正前往注册页面')
						setTimeout(() => { reLaunch('/pages/account/login') }, 1500)
					} else if (res.cancel) {
						// toast('访问错误，回到首页')
						// setTimeout(() => { goBack() }, 1500)
					}
				})
		}
		return ajax('/noRights', 'get')
	}
	if (!api) {
		return ajax('/notFound', 'get')
	}
	if (verifyParams(api.data, data) || verifyParams(api.headers, headers)) {
		return ajax('/missingArguments', 'get')
	}
	return ajax(api.url, api.method, data, headers)
}
