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
	SendStudentProfile: {url: '/stu/profile', method: 'put', data: {}, headers: {}},
	SendTutorProfile: {url: '/tutor/profile', method: 'put', data: {}, headers: {}},
	UpLoad: {url: '/oss/up', method: 'get', data: {}, headers: {}},
	GetStudentRecord: {url: '/stu/trace?page', method: 'get', data: {}, headers: {}},
	GetTutorRecord: {url: '/tutor/trace?page', method: 'get', data: {}, headers: {}},
	GetTutorStudents: {url: '/tutor/students', method: 'get', data: {}, headers: {}},
	GetStudentTutors: {url: '/stu/tutors', method: 'get', data: {}, headers: {}},
	PostUserImagesName: {url: '/oss/down', method: 'post', data: {}, headers: {}},
	GetStuHomePage: {url: '/stu/home', method: 'get', data: {}, headers: {}},
	GetMentorHomePage: {url: '/tutor/home', method: 'get', headers: {}}
}
