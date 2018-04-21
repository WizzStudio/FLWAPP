export default {
	/* data,headers 里面填, key用于在ajax.js里面验证是否有该字段 */
	/* 如果你要用 resetful的风格的api ，请将method改为'get_restful'(大小写不敏感),然后data里面填{value：***} (key一定要是value） */
	/* 权限：3代表学生和导师皆可请求 2 代表导师可请求 1代表学生可请求 0代表都可以请求 */
	Test: {url: '/test', method: 'get', data: {}, headers: {}, right: 0},
	Shit: {url: '/shit', method: 'get', data: {}, headers: {}, right: 3}, // 测试接口
	UserInviteCodeCheck: {url: '/verify/invite', method: 'post', data: {code: ''}, headers: {}, right: 0}, // 用户获取邀请码
	StudentCenter: {url: '/stu/center', method: 'get', data: {}, headers: {}, right: 1}, // 学生个人中心
	TutorCenter: {url: '/tutor/center', method: 'get', data: {}, headers: {}, right: 2}, // 导师个人中心
	StudentProfile: {url: '/stu/profile', method: 'get', data: {}, headers: {}, right: 1}, //	学生信息修改页
	TutorProfile: {url: '/tutor/profile', method: 'get', data: {}, headers: {}, right: 2},	//	导师信息修改页
	UserLogin: {url: '/user/login', method: 'post', data: {code: ''}, headers: {}, right: 0}, // 用户登录
	UserVerifyCode: {url: '/verify/captcha', method: 'get', data: {phone: 0}, headers: {}, right: 0}, // 用户获取验证码
	UserVerifyCodeCheck: {url: '/verify/captcha', method: 'post', data: {phone: 0, captcha: 0}, headers: {}, right: 0}, // 用户校验验证码
	UserRegister: {url: '/user/register', method: 'post', data: {phone: 0, code: 0}, headers: {}, right: 0}, // 用户注册
	SendStudentProfile: {url: '/stu/profile', method: 'put', data: {}, headers: {}, right: 1},
	SendTutorProfile: {url: '/tutor/profile', method: 'put', data: {}, headers: {}, right: 2},
	UpLoad: {url: '/oss/up', method: 'get_restful', data: {}, headers: {}, right: 3},
	DownLoad: {url: '/oss/down', method: 'get_restful', data: {}, headers: {}, right: 0},
	GetStuHomePage: {url: '/stu/home', method: 'get', data: {}, headers: {}, right: 3}, // 学生个人主页
	GetMentorHomePage: {url: '/tutor/home', method: 'get', data: {}, headers: {}, right: 3}, // 导师个人主页
	GetStudentRecord: {url: '/stu/trace', method: 'get', data: {}, headers: {}, right: 1},
	GetTutorRecord: {url: '/tutor/trace', method: 'get', data: {}, headers: {}, right: 2},
	GetTutorStudents: {url: '/tutor/students', method: 'get', data: {}, headers: {}, right: 2},
	GetStudentTutors: {url: '/stu/tutors', method: 'get', data: {}, headers: {}, right: 1},
	PostUserImagesName: {url: '/oss/down', method: 'post', data: {}, headers: {}, right: 3},
	GetTutorRedFlower: {url: '/tutor/summary', method: 'get', data: {}, headers: {}, right: 2},
	GetStuRedFlower: {url: '/stu/summary', method: 'get', data: {}, headers: {}, right: 1},
	GetTutorTime: {url: '/tutor/voluntary', method: 'get', data: {}, headers: {}, right: 2},
	GetStudentTime: {url: '/stu/voluntary', method: 'get', data: {}, headers: {}, right: 1},
	GetSchoolList: {url: '/conf/school', method: 'get', data: {}, headers: {}, right: 0},
	GetDirection: {url: '/conf/direction', method: 'get', data: {}, headers: {}, right: 0},
	GetTrade: {url: '/conf/trade', method: 'get', data: {}, headers: {}, right: 0},
	GetNewsList: {url: '/article/list', method: 'get', data: {}, headers: {}, right: 0},
	GetFlowerRank: {url: '/rank', method: 'get', data: {}, headers: {}, right: 0},
	GetArticle: {url: '/article', method: 'get_restful', data: {}, headers: {}, right: 0},
	GetBanner: {url: '/banner', method: 'get', data: {}, headers: {}, right: 0},
	PostArticle: {url: '/article', method: 'post', data: {title: '', content: ''}, headers: {}, right: 3},
	GetSearchStudentList: {url: '/search/student', method: 'get', data: {}, headers: {}, right: 0},
	GetSearchTutorList: {url: '/search/tutor', method: 'get', data: {}, headers: {}, right: 0},
	PostWithdrawAmount: {url: '/stu/withdraw', method: 'post', data: {}, headers: {}, right: 1},
	GetWithdrawInfo: {url: '/stu/withdraw', method: 'get', data: {}, headers: {}, right: 1},
	PostStuActivity: {url: '/stu/campaign', method: 'post', data: {}, headers: {}, right: 1},
	PostTutorActivity: {url: '/tutor/campaign', method: 'post', data: {}, headers: {}, right: 2},
	GetTutorFlower: {url: '/tutor/balance', method: 'get', data: {}, headers: {}, right: 2}, // 导师小红花余额
	GetStudentFlower: {url: '/stu/balance', method: 'get', data: {}, headers: {}, right: 1},  // 学生小红花余额
	GetAcceptableFlw: {url: '/stu/home/acceptable', method: 'get_restful', data: {}, headers: {}, right: 2}, // 学生还能接收小红花数量
	DonateFlw: {url: '/tutor/gift', method: 'post', data: {stuId: 0, amount: 0}, headers: {}, right: 2}, // 捐赠给学生小红花
	GetQuestionList: {url: '/conf/question', method: 'get', data: {}, headers: {}, right: 0},
	GetAnswer: {url: '/stu/home/answer', method: 'get', data: {userId: 0}, headers: {}, right: 0},
	EditAnswer: {url: '/stu/answer', method: 'post', data: {}, headers: {}, right: 1},
	GetFlwRate: {url: '/conf/exchangeRate', method: 'get', data: {}, headers: {}, right: 2}
}
