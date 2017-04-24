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

var Footer_down = function (_React$Component) {
	_inherits(Footer_down, _React$Component);

	function Footer_down() {
		_classCallCheck(this, Footer_down);

		return _possibleConstructorReturn(this, (Footer_down.__proto__ || Object.getPrototypeOf(Footer_down)).apply(this, arguments));
	}

	_createClass(Footer_down, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'Footer_down' },
				_react2.default.createElement(
					'div',
					{ id: 'Footer_down_main' },
					_react2.default.createElement(
						'p',
						{ id: 'Footer_down_p1' },
						'\u5173\u4E8E\u5929\u732B \u5E2E\u52A9\u4E2D\u5FC3 \u5F00\u653E\u5E73\u53F0 \u8BDA\u8058\u82F1\u624D \u8054\u7CFB\u6211\u4EEC \u7F51\u7AD9\u5408\u4F5C \u6CD5\u5F8B\u58F0\u660E\u53CA\u9690\u79C1\u6743\u653F\u7B56'
					),
					_react2.default.createElement(
						'p',
						{ id: 'Footer_down_p2' },
						'\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2| \u6DD8\u5B9D\u7F51 | \u5929\u732B | \u805A\u5212\u7B97 | \u5168\u7403\u901F\u5356\u901A | \u963F\u91CC\u5DF4\u5DF4\u56FD\u9645\u4EA4\u6613\u5E02\u573A| 1688 | \u963F\u91CC\u5988\u5988 | \u98DE\u732A | \u963F\u91CC\u4E91\u8BA1\u7B97 | YunOS | \u963F\u91CC\u901A\u4FE1 | \u4E07\u7F51 | \u9AD8\u5FB7 | UC | \u53CB\u76DF | \u867E\u7C73 | \u963F\u91CC\u661F\u7403 | \u6765\u5F80 | \u9489\u9489 | \u652F\u4ED8\u5B9D'
					)
				)
			);
		}
	}]);

	return Footer_down;
}(_react2.default.Component);

exports.default = Footer_down;