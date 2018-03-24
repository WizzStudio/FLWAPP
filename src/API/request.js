import { toast, getStorage, setStorage, showLoading, hideLoading } from '../common/scripts/wxUtil'
import { parseToken } from '../common/scripts/utils'
import { baseURL } from './config'

/**
 * 将map对象转换为URL参数
 * @param dataObject
 * @example {a:1,b:2}
 * @return '?a=1&b=2'
 */
function createURLParamsByObject (dataObject) {
	let dataStr = ''
	Object.keys(dataObject).forEach(key => {
		dataStr += key + '=' + dataObject[key] + '&'
	})
	if (dataStr !== '') {
		dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
		return '?' + dataStr
	}
	return dataStr
}

/**
 *
 * @param dataObject {Object}
 * @example {value:2}
 * @return '/2'
 * @example SomeAPI: {url: '/test' , data: {value:2}} ===> '/test/2'
 */
function concatURLinRESTful (dataObject) {
	if (Object.keys(dataObject).length > 1) return new Error('arguments length must <= 1!')
	return `/${Object.values(dataObject)[0]}`
}

function _configRequest(url, method, data, header, resolve, reject) {
	// 设置token
	header['Authorization'] = getStorage('token')
	/* 针对restfulAPI做的补丁 */
	if (method === 'GET_RESTFUL') {
		if (data) {
			url += concatURLinRESTful(data)
		}
	}
	if (method === 'GET') {
		if (data) {
			url += createURLParamsByObject(data)
		}
		wx.request({
			url: baseURL + url,
			method: method,
			header: header,
			success: (res) => resolve(res.data),
			fail: (err) => reject(err)
		})
	} else {
		wx.request({
			url: baseURL + url,
			data: data,
			method: method,
			header: header,
			success: (res) => resolve(res.data),
			fail: (err) => reject(err)
		})
	}
}

const request = (url, method, data, header = { 'Content-Type': 'application/json' }) => {
  if (getStorage('exp') < Date.now()) {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      })
    }).then((res) => {
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
      }).then(() => {
        return new Promise((resolve, reject) => {
          _configRequest(url, method, data, header, resolve, reject)
        })
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      _configRequest(url, method, data, header, resolve, reject)
    })
  }
}
export default request
