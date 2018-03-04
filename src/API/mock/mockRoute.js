import Test from './templates/Test'
import { UserLogin, UserInviteCodeCheck, UserRegister, UserVerifyCodeCheck, UserVerifyCode, StudentCenter, TutorCenter } from './templates/User'

export default (rurl) => {
	switch (rurl) {
		case '/test':
			return Test
		case '/user/login':
			return UserLogin
		case '/user/inviteCode/check':
			return UserInviteCodeCheck
		case '/user/register':
			return UserRegister
		case '/user/verifyCode/Check':
			return UserVerifyCodeCheck
		case '/user/verifyCode':
			return UserVerifyCode
		case '/stu/center':
			return StudentCenter
		case '/tutor/center':
			return TutorCenter
		default:
			return Test
	}
}
