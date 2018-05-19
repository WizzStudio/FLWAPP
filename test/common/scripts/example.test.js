import 'babel-polyfill'
import { add } from '../../../src/common/scripts/example'
import chai from 'chai'

describe('加法函数的测试', function () {
	it('1 加 1 应该等于 2', function () {
		chai.expect(add(1, 1)).to.be.equal(2)
	})
})
