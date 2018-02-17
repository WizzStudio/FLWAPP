import 'babel-polyfill'
import chai from 'chai'
import { isPhoneNumber } from '../../../src/common/scripts/utils'

let expect = chai.expect

describe('验证是否为电话号码', function () {
	it('正确电话号码', function () {
		expect(isPhoneNumber(18292039753)).to.be.ok
	})
	it('错误电话号码', function () {
		expect(isPhoneNumber(10086)).to.not.be.ok
	})
})
