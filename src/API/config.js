/* local本地局域网-->dev线下开发环境-->test线下测试环境-->prod线上环境 */
const env = 'test'

// URL's hash table
const URLS = {
	'local': 'http://api.xiaoyaoeden.top',
	'dev': 'http://api.xiaoyaoeden.top',
	'test': 'https://api.xiaoyaoeden.top',
	'prod': 'http://api.xiaoyaoeden.top'
}
const baseURL = URLS[env] // 根域名
const debug = false // debug模式
const surpportMethods = ['GET', 'POST', 'PUT', 'DELETE', 'GET_RESTFUL'] // 支持的方法
const defaultHeaders = {'Authorization': ''}
export { baseURL, debug, surpportMethods, defaultHeaders }
