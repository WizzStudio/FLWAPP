import { setStorage } from './wxUtil';
import { b64utoutf8 } from 'jsrsasign';

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

const throttle = (func, limit) => {
	let lastRan = Date.now()
	return function () {
		if (Date.now() - lastRan >= limit) {
			func.apply(this, arguments)
			lastRan = Date.now()
		}
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

const isStudentNumber = (StudentNumber) => {
	if (StudentNumber.length > 20 || StudentNumber.length <= 3) {
		return false
	}
	let reg = /\d{4,20}/
	return reg.test(StudentNumber.toString())
}

const isIdentityCard = (IdentityCard) => {
	if (IdentityCard.length !== 18) {
		return false
	}
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
	return reg.test(IdentityCard.toString())
}

const isCardNumber = (CardNumber) => {
	if (CardNumber.length < 16 || CardNumber.length > 19) {
		return false
	}
	let reg = /\d{16,19}/
	return reg.test(CardNumber.toString())
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

const transformTime = (data, option) => {
	if (typeof data === 'undefined') {
		return ''
	}
	const date = new Date(parseInt(data) * 1000)
	if (option && option === 'year_month_day') {
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate())
	}
	return date.getFullYear() + '-' + (date.getMonth() + 1)
}
// 将正常时间转换为UNIX时间戳
const transformTimeToUnix = (data) => {
	if (data === '') {
		return ''
	}
	const dates = data.split('-')
	return (Date.parse(new Date(dates[0], dates[1] - 1, 2)) / 1000)
}
/* TODO 需要写测试用例 */
/**
 * 检验exampleObj的key是否都在ruleObj
 * @param ruleObj
 * @param exampleObj
 * @return {boolean}
 */
const verifyParams = (ruleObj, exampleObj) => {
	let params = []
	for (let key of Object.keys(ruleObj)) {
		if (!exampleObj[key]) {
			params.push(key)
		}
	}
	if (params.length) {
		console.log('Lack arguments：', params)
		return true // 缺少参数
	}
	return false
}

// 解析token,获取userID， role， openID, exp
const parseToken = (token) => {
	// 小程序不支持atob，所有引入了jsrsasign库的 b64utoutf8
	// let info = JSON.parse(atob(token.split('.')[1]))
	let info = JSON.parse(b64utoutf8(token.split('.')[1]))
	setStorage('exp', info.exp * 1000)
	setStorage('role', info.role)
	setStorage('userId', info.userid)
	setStorage('openId', info.openid)
	//	setStorage('token', info.exp)
}

// 	source: 需要筛选的原资源
//	itemName: 要筛选的属性名
//	itemValue: 指定的属性值
const filtrateItem = (source, itemName, itemValue) => {
	return source.filter((item) => {
		return item[itemName] === itemValue
	})
}

// 	source: 需要筛选的原资源
//	关键字: {name: value}
const filtrate = (source, keyWord) => {
	const keyWordName = Object.keys(keyWord)
	const keyWordValue = Object.values(keyWord)
	keyWordName.map((item, index) => {
		source = filtrateItem(source, item, keyWordValue[index])
	})
	return source
}

export {
	debounce,
	throttle,
	isPhoneNumber,
	isInviteCode,
	isVerifyCode,
	isIdentityCard,
	isCardNumber,
	isStudentNumber,
	countFn,
	verifyParams,
	transformTime,
	transformTimeToUnix,
	parseToken,
	filtrate
}
