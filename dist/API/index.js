'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.test = undefined;

var _ajax = require('./ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = function test() {
	return (0, _ajax2.default)('/test', 'get', { a: 1, b: 2 });
};

exports.test = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNsQixRQUFPLG9CQUFLLE9BQUwsRUFBYyxLQUFkLEVBQXFCLEVBQUNDLEdBQUcsQ0FBSixFQUFPQyxHQUFHLENBQVYsRUFBckIsQ0FBUDtBQUNBLENBRkQ7O1FBS0NGLEksR0FBQUEsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhamF4IGZyb20gJy4vYWpheCdcblxuY29uc3QgdGVzdCA9ICgpID0+IHtcblx0cmV0dXJuIGFqYXgoJy90ZXN0JywgJ2dldCcsIHthOiAxLCBiOiAyfSlcbn1cblxuZXhwb3J0IHtcblx0dGVzdFxufVxuIl19