/* statusCode hooks */
import Relogin from './Relogin'
import { toast } from '../common/scripts/wxUtil'

const notFound = () => {
	toast('接口丢失了 >_< ', 'none', 3000)
}

const forbidden = () => {
	/* 登录失效后重登录 */
	toast('登录失效，正在重新登录...', 'none', 1500)
}

const serverError = () => {
	toast('服务端发生了严重的错误，已经反馈给开发者，请退出后耐心等待！', 'none', 3000)
}

const globalError = (code) => {
	toast(`请求服务端错误，错误码：${code}`, 'none', 3000)
}

const badGateWay = () => {
	toast(`插错了口`, 'none', 3000)
}

const codes = {
	'404': notFound,
	'401': forbidden,
	'500': serverError,
	'502': badGateWay,
	'*': globalError
}

export default (code, cb) => {
	if (codes[code.toString()]) {
		codes[code.toString()](cb)
	} else {
		codes['*']()
	}
}
