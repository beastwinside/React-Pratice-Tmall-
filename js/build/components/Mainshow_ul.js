'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mainshow_ul_li = require('./Mainshow_ul_li');

var _Mainshow_ul_li2 = _interopRequireDefault(_Mainshow_ul_li);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mainshow_ul = function (_React$Component) {
	_inherits(Mainshow_ul, _React$Component);

	function Mainshow_ul() {
		_classCallCheck(this, Mainshow_ul);

		return _possibleConstructorReturn(this, (Mainshow_ul.__proto__ || Object.getPrototypeOf(Mainshow_ul)).apply(this, arguments));
	}

	_createClass(Mainshow_ul, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ id: 'mainshow_ul' },
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u98DE\u673A\u7EA2.png',
					a1p: '\u725B\u5976', a2p: '\u96F6\u98DF', a3p: '\u997C\u5E72', a4p: '\u901F\u98DF' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u996E\u6599\u7EA2.png',
					a1p: '\u7CD6\u5DE7', a2p: '\u53D8\u5E72', a3p: '\u575A\u679C', a4p: '\u725B\u5976' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u6CB9\u7EA2.png',
					a1p: '\u6CB9', a2p: '\u5927\u7C73', a3p: '\u8C03\u6599', a4p: '\u65B9\u4FBF\u9762' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u8721\u70DB\u7EA2.png',
					a1p: '\u6D17\u53D1', a2p: '\u6C90\u6D74', a3p: '\u7259\u818F', a4p: '\u6D01\u9762\u5976' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u526A\u5200\u7EA2.png',
					a1p: '\u6BDB\u5DFE', a2p: '\u5BB6\u7535', a3p: '\u6C34\u676F', a4p: '\u6536\u7EB3' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u9910\u5DFE\u7EB8\u7EA2.png',
					a1p: '\u7EB8', a2p: '\u6D17\u8863', a3p: '\u6D17\u6D01\u7CBE', a4p: '\u5783\u573E\u888B' }),
				_react2.default.createElement(_Mainshow_ul_li2.default, { li_img_url: './source/image/mainshow_image/ul_li_icon/\u9C7C\u513F\u7EA2.png',
					a1p: '\u7EB8\u5C3F\u88E4', a2p: '\u5976\u7C89', a3p: '', a4p: '\u6E7F\u5DFE' })
			);
		}
	}]);

	return Mainshow_ul;
}(_react2.default.Component);

exports.default = Mainshow_ul;