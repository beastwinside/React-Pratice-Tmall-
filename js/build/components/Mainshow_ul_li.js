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

var Mainshow_ul_li = function (_React$Component) {
	_inherits(Mainshow_ul_li, _React$Component);

	function Mainshow_ul_li(props) {
		_classCallCheck(this, Mainshow_ul_li);

		var _this = _possibleConstructorReturn(this, (Mainshow_ul_li.__proto__ || Object.getPrototypeOf(Mainshow_ul_li)).call(this, props));

		_this.state = {
			a1: _this.props.a1p,
			a2: _this.props.a2p,
			a3: _this.props.a3p,
			a4: _this.props.a4p,
			at: _this.props.atp

		};

		return _this;
	}

	_createClass(Mainshow_ul_li, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				null,
				_react2.default.createElement('div', { className: 'xxxx' }),
				_react2.default.createElement('img', { src: this.props.li_img_url }),
				_react2.default.createElement(
					'span',
					null,
					this.state.at
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'a',
						null,
						this.state.a1,
						' '
					),
					_react2.default.createElement(
						'a',
						null,
						this.state.a2,
						' '
					),
					_react2.default.createElement(
						'a',
						null,
						this.state.a3,
						' '
					),
					_react2.default.createElement(
						'a',
						null,
						this.state.a4,
						' '
					)
				)
			);
		}
	}]);

	return Mainshow_ul_li;
}(_react2.default.Component);

exports.default = Mainshow_ul_li;