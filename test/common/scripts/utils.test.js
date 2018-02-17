import 'babel-polyfill'
import chai from 'chai'
import { isPhoneNumber, isInviteCode, isVerifyCode } from '../../../src/common/scripts/utils'

let expect = chai.expect

/* 电话号码测试 */
describe('验证是否为电话号码', function () {
	it('正确电话号码', function () {
		expect(isPhoneNumber(18292039753)).to.be.ok
	})
	it('错误电话号码', function () {
		expect(isPhoneNumber(10086)).to.not.be.ok
	})
})

/* 邀请码测试 */
describe('是否为正确的邀请码', function () {
	it('4位数字', function () {
		expect(isInviteCode('1234')).to.be.ok
	})
	it('4位字母', function () {
		expect(isInviteCode('abcd')).to.be.ok
	})
	it('4位数字和字母的混合', function () {
		expect(isInviteCode('ab12')).to.be.ok
	})
	it('3位数字和字母的混合',function () {
		expect(isInviteCode('12a')).to.not.be.ok
	})
	it('5位数字和字母的混合',function () {
		expect(isInviteCode('12ab2')).to.not.be.ok
	})
})

/* 验证码测试 */
describe('是否为正确的验证码', function () {
	it('5位数字', function () {
		expect(isVerifyCode('12345')).to.not.be.ok
	})
	it('6位数字', function () {
		expect(isVerifyCode('123456')).to.be.ok
	})
	it('7位数字', function () {
		expect(isVerifyCode('1234567')).to.not.be.ok
	})
})
