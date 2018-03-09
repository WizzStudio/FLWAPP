export default {
	/* data,headers 里面填key用于在ajax.js里面验证是否有该字段 */
	Test: {url: '/test', method: 'get', data: {}, headers: {}},
	UserInviteCodeCheck: {url: '/verify/invite', method: 'post', data: {code: ''}, headers: {}},
	StudentCenter: {url: '/stu/center', method: 'get', data: {}, headers: {}},
	TutorCenter: {url: '/tutor/center', method: 'get', data: {}, headers: {}},
	StudentProfile: {url: '/stu/profile', method: 'get', data: {}, headers: {}},
	TutorProfile: {url: '/tutor/profile', method: 'get', data: {}, headers: {}},
	UserLogin: {url: '/user/login', method: 'post', data: {code: ''}, headers: {}},
	UserVerifyCode: {url: '/verify/captcha', method: 'get', data: {phone: 0}, headers: {}},
	UserVerifyCodeCheck: {url: '/verify/captcha', method: 'post', data: {phone: 0, captcha: 0}, headers: {}},
	UserRegister: {url: '/user/register', method: 'post', data: {phone: 0, code: 0}, headers: {}},
	SendStudentProfile: { url: '/stu/profile', method: 'put', data: {data: null}, headers: {} },
	SendTutorProfile: { url: '/tutor/profile', method: 'put', data: {data: null}, headers: {} }
}
