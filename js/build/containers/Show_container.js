'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Show_box_left = require('./Show_box_left');

var _Show_box_left2 = _interopRequireDefault(_Show_box_left);

var _Show_box_right = require('./Show_box_right');

var _Show_box_right2 = _interopRequireDefault(_Show_box_right);

var _Show_box_main = require('./Show_box_main');

var _Show_box_main2 = _interopRequireDefault(_Show_box_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Show_container = function (_React$Component) {
	_inherits(Show_container, _React$Component);

	function Show_container() {
		_classCallCheck(this, Show_container);

		return _possibleConstructorReturn(this, (Show_container.__proto__ || Object.getPrototypeOf(Show_container)).apply(this, arguments));
	}

	_createClass(Show_container, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'show_container' },
				_react2.default.createElement(_Show_box_left2.default, null),
				_react2.default.createElement(_Show_box_main2.default, null),
				_react2.default.createElement(_Show_box_right2.default, null)
			);
		}
	}]);

	return Show_container;
}(_react2.default.Component);

exports.default = Show_container;