/* 手动添加返回数据示例 */
const UserLogin = {
	'code': 0,
	'msg': '登录成功',
	'data': {
		'role': 1
	}
}

const UserInviteCodeCheck = {
	'code': 0,
	'msg': '邀请码可用'
}

const UserVerifyCode = {
	'code': 0,
	'msg': '验证码发送成功'
}

const UserVerifyCodeCheck = {
	'code': 0,
	'msg': '验证码正确'
}

const UserRegister = {
	'code': 0,
	'msg': '注册成功',
	'data': {
		'role': 1
	}
}

const Test = {
	'list|1-10': [
		{'id|10': 1}
	]
}

export {
	UserLogin,
	UserInviteCodeCheck,
	UserVerifyCode,
	UserVerifyCodeCheck,
	UserRegister,
	Test
}
