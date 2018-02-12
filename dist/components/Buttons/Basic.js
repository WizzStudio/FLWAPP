'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = function (_wepy$page) {
  _inherits(ClassName, _wepy$page);

  function ClassName() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClassName);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClassName.__proto__ || Object.getPrototypeOf(ClassName)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClassName, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'customFunction',
    value: function customFunction() {}
  }]);

  return ClassName;
}(_wepy2.default.page);

exports.default = ClassName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2ljLmpzIl0sIm5hbWVzIjpbIkNsYXNzTmFtZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBUVhDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFOzs7Ozs2QkFQQyxDQUFFOzs7NkJBRUYsQ0FBRTs7O3FDQUVNLENBQUU7Ozs7RUFWaUIsZUFBS0MsSTs7a0JBQXZCUCxTIiwiZmlsZSI6IkJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NOYW1lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7fVxuICAgIGNvbXBvbmVudHMgPSB7fVxuICAgIGRhdGEgPSB7fVxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgb25TaG93ICgpIHt9XG5cbiAgICBjdXN0b21GdW5jdGlvbiAoKSB7fVxuXG4gICAgbWV0aG9kcyA9IHt9XG4gICAgZXZlbnRzID0ge31cbiAgfVxuIl19