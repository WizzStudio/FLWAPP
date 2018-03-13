const isLocalDev = true // 是否为局域网开发环境
const baseURL = isLocalDev ? 'http://api.xiaoyaoeden.top' : 'https://api.xiaoyaoeden.top' // 根域名
const debug = false // debug模式
const surpportMethods = ['GET', 'POST', 'PUT', 'DELETE'] // 支持的http方法
const defaultHeaders = {'Authorization': ''}
export { baseURL, debug, surpportMethods, defaultHeaders }
