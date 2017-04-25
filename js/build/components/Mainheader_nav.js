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

var Mainheader_nav = function (_React$Component) {
	_inherits(Mainheader_nav, _React$Component);

	function Mainheader_nav() {
		_classCallCheck(this, Mainheader_nav);

		return _possibleConstructorReturn(this, (Mainheader_nav.__proto__ || Object.getPrototypeOf(Mainheader_nav)).apply(this, arguments));
	}

	_createClass(Mainheader_nav, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ id: "Mainheader_nav" },
				_react2.default.createElement("div", { id: "Mainheader_nav_left" }),
				_react2.default.createElement(
					"div",
					{ id: "Mainheader_nav__nav" },
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							"\u9996\u9875"
						),
						_react2.default.createElement(
							"li",
							null,
							"\u91CF\u8D29\u88C5"
						),
						_react2.default.createElement(
							"li",
							null,
							"\u751F\u9C9C\u533A"
						),
						_react2.default.createElement(
							"li",
							null,
							"\u4F01\u4E1A\u91C7\u8D2D"
						),
						_react2.default.createElement(
							"li",
							null,
							"\u5927\u5F69\u7535"
						)
					)
				),
				_react2.default.createElement("div", { id: "shopcart" })
			);
		}
	}]);

	return Mainheader_nav;
}(_react2.default.Component);

exports.default = Mainheader_nav;