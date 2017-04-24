'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lunbotu = require('../components/Lunbotu');

var _Lunbotu2 = _interopRequireDefault(_Lunbotu);

var _Lunbodown = require('./Lunbodown');

var _Lunbodown2 = _interopRequireDefault(_Lunbodown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lunbomain = function (_React$Component) {
	_inherits(Lunbomain, _React$Component);

	function Lunbomain() {
		_classCallCheck(this, Lunbomain);

		return _possibleConstructorReturn(this, (Lunbomain.__proto__ || Object.getPrototypeOf(Lunbomain)).apply(this, arguments));
	}

	_createClass(Lunbomain, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'lunbo_main' },
				_react2.default.createElement(_Lunbotu2.default, null),
				_react2.default.createElement(_Lunbodown2.default, null)
			);
		}
	}]);

	return Lunbomain;
}(_react2.default.Component);

exports.default = Lunbomain;