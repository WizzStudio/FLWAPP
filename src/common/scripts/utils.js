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
		timer = setTimeout(() => {
			fn.apply(this, arguments)
		}, boomTime)
	}
}

/**
 * 验证是否为电话号码
 * @param {String|Number} phoneNumber - 电话号码
 * @return {boolean}
 */
const isPhoneNumber = (phoneNumber) => {
	if (phoneNumber.toString().length > 11) {
		return false
	}
	let reg = /1\d{10}/
	return reg.test(phoneNumber.toString())
}

const isInviteCode = (inviteCode) => {
	if (inviteCode.length !== 4) {
		return false
	}
	let reg = /(\d|[a-z]|[A-Z]){4}/
	return reg.test(inviteCode.toString())
}

const isVerifyCode = (VerifyCode) => {
	if (VerifyCode.length !== 6) {
		return false
	}
	let reg = /\d{6}/
	return reg.test(VerifyCode.toString())
}

/**
 * 循环计数器
 * @param countTime 计数次数
 * @param basicMs   单位计数间隔
 * @param progressFn  单位计数触发函数
 * @param callBackFn  计数完成回调函数
 */
const countFn = (countTime, basicMs, progressFn, callBackFn) => {
	for (let i = 0; i < countTime; ++i) {
		((j = i) => {
			setTimeout(() => {
				if (i === 0) {
					console.log('count start!')
				}
				if (i === countTime - 1) {
					console.log('count done!')
					callBackFn()
				} else {
					progressFn()
				}
			}, basicMs * j)
		})(i)
	}
}

export {
	debounce,
	isPhoneNumber,
	isInviteCode,
	isVerifyCode,
	countFn
}
