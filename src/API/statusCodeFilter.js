/* statusCode hooks */
import Relogin from './Relogin'
import { toast } from '../common/scripts/wxUtil'

const notFound = () => {
	toast('接口丢失了 >_< ', 'none', 3000)
}

const forbidden = () => {
	Relogin()
}

const serverError = () => {
	toast('服务端发生了严重的错误，已经反馈给开发者，请退出后耐心等待！', 'none', 3000)
}

const globalError = (code) => {
	toast(`请求服务端错误，错误码：${code}`, 'none', 3000)
}

const codes = {
	'404': notFound,
	'403': forbidden,
	'500': serverError,
	'*': globalError
}

export default (code) => {
	if (codes[code.toString()]) {
		codes[code.toString()]()
	} else {
		codes['*']()
	}
}
