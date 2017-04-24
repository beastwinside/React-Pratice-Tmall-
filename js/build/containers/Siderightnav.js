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

var Siderightnav = function (_React$Component) {
	_inherits(Siderightnav, _React$Component);

	function Siderightnav() {
		_classCallCheck(this, Siderightnav);

		return _possibleConstructorReturn(this, (Siderightnav.__proto__ || Object.getPrototypeOf(Siderightnav)).apply(this, arguments));
	}

	_createClass(Siderightnav, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"nav",
				{ id: "sideright" },
				"\u6211\u7684\u7279\u6743",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u6211\u7684\u8D44\u4EA7",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u6211\u7684\u5173\u6CE8",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u6211\u7684\u6536\u85CF",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u6211\u770B\u8FC7\u7684",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		}
	}]);

	return Siderightnav;
}(_react2.default.Component);

exports.default = Siderightnav;