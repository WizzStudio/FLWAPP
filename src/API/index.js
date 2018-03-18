import ajax from './ajax'
import API from './APIList'
import { verifyParams } from '../common/scripts/utils' // 检测data里的key是否完整

export default (apiKey, data, headers) => {
	let api = API[apiKey]
	if (!api) {
		return ajax('/notFound', 'get')
	}
	if (verifyParams(api.data, data) || verifyParams(api.headers, headers)) {
		return ajax('/missingArguments', 'get')
	}
	return ajax(api.url, api.method, data, headers)
}
