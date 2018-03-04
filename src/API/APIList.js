export default {
	/* data,headers 里面填key用于在ajax.js里面验证是否有该字段 */
	Test: {url: '/test', method: 'get', data: {}, headers: {}},
	UserInviteCodeCheck: {url: '/user/inviteCode/check', method: 'get', data: {inviteCode: ''}, headers: {}},
	StudentCenter: {url: '/stu/center', method: 'get', data: {}, headers: {}},
	TutorCenter: {url: '/tutor/center', method: 'get', data: {}, headers: {}}
}
