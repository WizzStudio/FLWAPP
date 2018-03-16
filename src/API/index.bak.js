import ajax from './ajax'

const Test = () => {
	return ajax('/test', 'get', {a: 1, b: 2})
}

/**
 * 用户登录
 * @param code {string} wx.login返回的code
 * @return {Promise}
 */
const UserLogin = (code) => {
	return ajax('/user/login', 'post', {code})
}

/**
 * 验证用户邀请码是否可用
 * @param inviteCode {string} 邀请码
 * @return {Promise}
 */
const UserInviteCodeCheck = (inviteCode) => {
	return ajax('/verify/invite', 'post', {code: inviteCode})
}

/**
 * 获取验证码
 * @param phoneNumber {number}
 * @constructor
 */
const UserVerifyCode = (phoneNumber) => {
	return ajax('/verify/captcha', 'get', {phone: phoneNumber})
}

/**
 * 验证手机验证码
 * @param phone {number} 手机号
 * @param verifyCode {number} 验证码
 * @constructor
 */
const UserVerifyCodeCheck = (phone, captcha) => {
	return ajax('/verify/captcha', 'post', {phone, captcha})
}

/**
 * 注册
 * @param phone {number} 手机号
 * @param inviteCode {String} 邀请码
 * @constructor
 */
const UserRegister = (phone, code) => {
	return ajax('/user/register', 'post', {phone, code})
}

const StudentCenter = () => {
	return ajax('/stu/center', 'get')
}

const TutorCenter = () => {
	return ajax('/tutor/center', 'get')
}

const StudentProfile = () => {
	return ajax('/stu/profile', 'get')
}
const TutorProfile = () => {
	return ajax('/tutor/profile', 'get')
}
const SendTutorProfile = (data) => {
	return ajax('/tutor/profile', 'put', {data})
}
const SendStudentProfile = (data) => {
	return ajax('/stu/profile', 'put', {data})
}
const UpLoad = () => {
	return ajax('/oss/up', 'get')
}

const GetStudentRecord = (data) => {
	return ajax('/stu/trace?page=', { data }, 'get')
}
const GetTutorRecord = (data) => {
	return ajax('/tutor/trace?page=', { data }, 'get')
}
const GetSudentTutors = () => {
	return ajax('/stu/tutors', 'get')
}
const GetTutorStudents = () => {
	return ajax('/tutor/students', 'get')
}
const PostUserImagesName = (data) => {
	return ajax('/oss/down', 'post', data)
}
const GetStudentTime = () => {
	return ajax('/stu/', 'get')
}
const GetTutorTime = () => {
	return ajax('/tutor/', 'get')
}
const GetStuRedFlower = () => {
	return ajax('/stu/', 'get')
}
const GetTutorRedFlower = () => {
	return ajax('/tutor/', 'get')
}
// const = ()=>{
// 	return ajax('','get',{})
// }

// const = ()=>{
// 	return ajax('','get',{})
// }

// const = ()=>{
// 	return ajax('','get',{})
// }
//	const UpLoadUrl = '/storage/credit/up'
//	const DownLoadUrl = '/storage/credit/down/qqq'

//	const FileUpLoad = (url) => {
//		return ajax(UpLoadUrl, 'get')
//	}
//	const FileDownLoad = (url) => {
//		return ajax(DownLoadUrl, 'get')
//	}
export {
	Test,
	UserLogin,
	UserVerifyCode,
	UserVerifyCodeCheck,
	UserRegister,
	UserInviteCodeCheck,
	StudentCenter,
	TutorCenter,
	StudentProfile,
	TutorProfile,
	SendStudentProfile,
	SendTutorProfile,
	UpLoad,
	GetStudentRecord,
	GetTutorRecord,
	GetSudentTutors,
	GetTutorStudents,
	PostUserImagesName,
	GetStudentTime,
	GetStuRedFlower,
	GetTutorRedFlower,
	GetTutorTime
	//	FileDownLoad
}
