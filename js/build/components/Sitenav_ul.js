'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sitenav_ul = function (_React$Component) {
	_inherits(Sitenav_ul, _React$Component);

	function Sitenav_ul() {
		_classCallCheck(this, Sitenav_ul);

		return _possibleConstructorReturn(this, (Sitenav_ul.__proto__ || Object.getPrototypeOf(Sitenav_ul)).apply(this, arguments));
	}

	_createClass(Sitenav_ul, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ id: 'Sitenav_ul' },
				_react2.default.createElement(
					'li',
					null,
					'\u6211\u7684\u6DD8\u5B9D '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u6211\u5173\u6CE8\u7684\u54C1\u724C '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u8D2D\u7269\u8F66 '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u6536\u85CF\u5939 |'
				),
				_react2.default.createElement(
					'li',
					null,
					'\u624B\u673A\u7248 '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u6DD8\u5B9D\u7F51 '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u4F01\u4E1A\u8D2D'
				),
				_react2.default.createElement(
					'li',
					null,
					'\u5546\u5BB6\u652F\u6301 '
				),
				_react2.default.createElement(
					'li',
					null,
					'\u7F51\u7AD9\u5BFC\u822A '
				)
			);
		}
	}]);

	return Sitenav_ul;
}(_react2.default.Component);

exports.default = Sitenav_ul;