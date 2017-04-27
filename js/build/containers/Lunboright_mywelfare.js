"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lunboright_mywelfare = function (_React$Component) {
	_inherits(Lunboright_mywelfare, _React$Component);

	function Lunboright_mywelfare() {
		_classCallCheck(this, Lunboright_mywelfare);

		return _possibleConstructorReturn(this, (Lunboright_mywelfare.__proto__ || Object.getPrototypeOf(Lunboright_mywelfare)).apply(this, arguments));
	}

	_createClass(Lunboright_mywelfare, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ id: "mywelfare" },
				_react2.default.createElement(
					"div",
					{ id: "mywelfare_header" },
					"\u220F\u6211\u7684\u798F\u5229"
				),
				_react2.default.createElement("img", { id: "fuli_logo", src: "./source/image/mainshow_image/lunbo_welfare_logo/\u798F\u5229.png" }),
				_react2.default.createElement(
					"div",
					{ id: "welfarelogo" },
					_react2.default.createElement(
						"nav",
						{ id: "welfare_nav" },
						_react2.default.createElement(
							"a",
							null,
							"\u4F18\u60E0\u5238"
						),
						_react2.default.createElement(
							"a",
							null,
							"\u6DD8\u4EAB\u5361"
						),
						_react2.default.createElement(
							"a",
							null,
							"\u6211\u5E38\u4E70"
						)
					),
					_react2.default.createElement(
						"div",
						{ id: "welfare_navlogo" },
						_react2.default.createElement("img", { src: "./source/image/mainshow_image/lunbo_welfare_logo/\u4F18\u60E0\u5238.png" }),
						_react2.default.createElement("img", { src: "./source/image/mainshow_image/lunbo_welfare_logo/\u4EAB\u6DD8\u5361.png" }),
						_react2.default.createElement("img", { src: "./source/image/mainshow_image/lunbo_welfare_logo/\u4EAB\u6DD8\u5361.png" })
					)
				)
			);
		}
	}]);

	return Lunboright_mywelfare;
}(_react2.default.Component);

exports.default = Lunboright_mywelfare;