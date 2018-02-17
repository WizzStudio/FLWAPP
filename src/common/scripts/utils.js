/* 工具函数 */
/**
 * 函数防抖
 * @param {Function} fn - 欲防抖函数
 * @param {number} boomTime - 防抖时间
 * @return {Function}
 */
const debounce = (fn, boomTime) => {
	let timer = null
	return function () {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(fn, boomTime)
	}
}

/**
 * 验证是否为电话号码
 * @param {String|Number} phoneNumber - 电话号码
 * @return {boolean}
 */
const isPhoneNumber = (phoneNumber) => {
	let reg = /1\d{10}/
	return reg.test(phoneNumber.toString())
}

export {
	debounce,
	isPhoneNumber
}
