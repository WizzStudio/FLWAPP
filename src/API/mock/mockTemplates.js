/* 手动添加返回数据示例 */
const StudentCenter = {
	'code': 0,
	'msg': '成功',
	'data': {
		'name': 'Van',
		'status': 1
	}
}
const StudentProfile = {
	'code': 0,
	'msg': '成功',
	'data': {
		'name': 'Van'
	}
}
const TutorProfile = {
	'code': 0,
	'msg': '成功',
	'data': {}
}
const TutorCenter = {
	'code': 0,
	'msg': '成功',
	'data': {}
}

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

const GetTutorFlower = {
	'code': 0,
	'data': 14
}

const GetAcceptableFlw = {
	'code': 0,
	'data': 18
}

/* 下面的arguments要和APIList里的api-key一一映射 */
export {
	UserLogin,
	UserInviteCodeCheck,
	UserVerifyCode,
	UserVerifyCodeCheck,
	UserRegister,
	StudentCenter,
	TutorCenter,
	StudentProfile,
	TutorProfile,
	Test,
	GetAcceptableFlw,
	GetTutorFlower
}
