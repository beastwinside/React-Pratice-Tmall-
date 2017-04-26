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

var Sideright_img = function (_React$Component) {
	_inherits(Sideright_img, _React$Component);

	function Sideright_img(props) {
		_classCallCheck(this, Sideright_img);

		var _this = _possibleConstructorReturn(this, (Sideright_img.__proto__ || Object.getPrototypeOf(Sideright_img)).call(this, props));

		_this.state = {
			numx: _this.props.num
		};
		_this.handlechange = _this.handlechange.bind(_this);

		return _this;
	}

	_createClass(Sideright_img, [{
		key: 'handlechange',
		value: function handlechange() {
			alert(this.state.numx);
		}
	}, {
		key: 'render',
		value: function render() {
			var topheight = this.props.topvalue + '%';
			return _react2.default.createElement('img', {
				src: './source/image/siderightnav_logo/srlogo' + this.state.numx + '.png',
				onClick: this.handlechange,

				style: { top: topheight }
			});
		}
	}]);

	return Sideright_img;
}(_react2.default.Component);

exports.default = Sideright_img;