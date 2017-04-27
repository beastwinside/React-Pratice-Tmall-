'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sitenav_ul = require('../components/Sitenav_ul');

var _Sitenav_ul2 = _interopRequireDefault(_Sitenav_ul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sitenav = function (_React$Component) {
	_inherits(Sitenav, _React$Component);

	function Sitenav() {
		_classCallCheck(this, Sitenav);

		return _possibleConstructorReturn(this, (Sitenav.__proto__ || Object.getPrototypeOf(Sitenav)).apply(this, arguments));
	}

	_createClass(Sitenav, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ id: 'sitenav' },
				_react2.default.createElement(
					'p',
					null,
					' ',
					_react2.default.createElement('img', { src: './source/image/sitenav_logo/\u4E3B\u9875.png' }),
					_react2.default.createElement(
						'a',
						null,
						'\u5929\u732B\u9996\u9875 '
					),
					'\u55B5\uFF0C\u6B22\u8FCE\u6765\u5929\u732B ',
					_react2.default.createElement(
						'a',
						null,
						'\u8BF7\u767B\u5F55'
					),
					_react2.default.createElement(
						'a',
						null,
						' \u514D\u8D39\u6CE8\u518C'
					)
				),
				_react2.default.createElement(_Sitenav_ul2.default, null)
			);
		}
	}]);

	return Sitenav;
}(_react2.default.Component);

exports.default = Sitenav;