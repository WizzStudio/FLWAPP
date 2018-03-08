export default {
	/* data,headers 里面填key用于在ajax.js里面验证是否有该字段 */
	Test: {url: '/test', method: 'get', data: {}, headers: {}},
	UserInviteCodeCheck: {url: '/user/inviteCode/check', method: 'get', data: {inviteCode: ''}, headers: {}},
	StudentCenter: {url: '/stu/center', method: 'get', data: {}, headers: {}},
	TutorCenter: {url: '/tutor/center', method: 'get', data: {}, headers: {}},
	StudentProfile: {url: '/stu/profile', method: 'get', data: {}, headers: {}},
	TutorProfile: {url: '/tutor/profile', method: 'get', data: {}, headers: {}},
	UserLogin: {url: '/user/login', method: 'get', data: {code: ''}, headers: {}},
	UserVerifyCode: {url: '/user/verifyCode', method: 'get', data: {phoneNumber: 0}, headers: {}},
	UserVerifyCodeCheck: {url: '/user/verifyCode/check', method: 'get', data: {phone: 0, verifyCode: 0}, headers: {}},
	UserRegister: {url: '/user/register', method: 'get', data: {phone: 0, inviteCode: 0}, headers: {}},
	SendTutorProfile: {url: '/tutor/profile', method: 'put', data: {data: null}, headers: {}},
	SendStudentProfile: {url: '/stu/profile', method: 'put', data: {data: null}, headers: {}}
}
