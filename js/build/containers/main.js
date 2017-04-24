'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mainshow = require('./Mainshow');

var _Mainshow2 = _interopRequireDefault(_Mainshow);

var _Show_box = require('./Show_box');

var _Show_box2 = _interopRequireDefault(_Show_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	_createClass(Main, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'main' },
				_react2.default.createElement(_Mainshow2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null),
				_react2.default.createElement(_Show_box2.default, null)
			);
		}
	}]);

	return Main;
}(_react2.default.Component);

exports.default = Main;