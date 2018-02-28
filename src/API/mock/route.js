import Mock from 'mockjs'
import * as Tempaltes from './mockTemplates'
import API from '../APIList'

/**
 * rurl到mock不同数据的映射
 * @param rurl
 * @example '/test'
 */
export default function (rurl) {
	/* 根据rurl在APIList获取API-key */
	let key
	for (let api of Object.keys(API)) {
		if (API[api].url === rurl) {
			key = api.toString()
		}
	}
	return new Promise(resolve => {
		resolve(Mock.mock(Tempaltes[key]))
	})
}

// this.$api('TEST')
//
// mock(route(API['key'].))
//
// route['TEST'] -> template
