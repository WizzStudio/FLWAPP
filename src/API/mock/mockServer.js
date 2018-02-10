import Mock from 'mockjs'
import mockRouter from './mockRoute'

/**
 * rurl到mock不同数据的映射
 * @param rurl
 * @example '/test'
 */
export default function (rurl) {
	return Mock.mock(mockRouter(rurl))
}
