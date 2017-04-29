'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sideleft_item = require('../components/Sideleft_item');

var _Sideleft_item2 = _interopRequireDefault(_Sideleft_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sideleftnav = function (_React$Component) {
	_inherits(Sideleftnav, _React$Component);

	function Sideleftnav(props) {
		_classCallCheck(this, Sideleftnav);

		var _this = _possibleConstructorReturn(this, (Sideleftnav.__proto__ || Object.getPrototypeOf(Sideleftnav)).call(this, props));

		_this.scrolltoshow = _this.scrolltoshow.bind(_this);

		return _this;
	}

	_createClass(Sideleftnav, [{
		key: 'scrolltoshow',
		value: function scrolltoshow() {
			var xx = document.getElementsByClassName('side_left_item');
			var clear = function clear() {
				xx[0].style.backgroundColor = "#bf0000";
				xx[1].style.backgroundColor = "#bf0000";
				xx[2].style.backgroundColor = "#bf0000";
				xx[3].style.backgroundColor = "#bf0000";
				xx[4].style.backgroundColor = "#bf0000";
				xx[5].style.backgroundColor = "#bf0000";
				xx[6].style.backgroundColor = "#bf0000";
				xx[7].style.backgroundColor = "#bf0000";
				xx[8].style.backgroundColor = "#bf0000";
				xx[9].style.backgroundColor = "#bf0000";
				xx[10].style.backgroundColor = "#bf0000";
				xx[11].style.backgroundColor = "#bf0000";
			};

			window.onscroll = function () {

				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;;
				if (scrollTop >= 500) {
					document.getElementById("sideleft").style.display = 'block';
					if (scrollTop >= 500 && scrollTop < 1100) {
						clear();xx[0].style.backgroundColor = "black";
					} else if (scrollTop >= 1100 && scrollTop < 1700) {
						clear();xx[1].style.backgroundColor = "black";
					} else if (scrollTop >= 1700 && scrollTop < 2300) {
						clear();xx[2].style.backgroundColor = "black";
					} else if (scrollTop >= 2300 && scrollTop < 2900) {
						clear();xx[3].style.backgroundColor = "black";
					} else if (scrollTop >= 2900 && scrollTop < 3500) {
						clear();xx[4].style.backgroundColor = "black";
					} else if (scrollTop >= 3500 && scrollTop < 4100) {
						clear();xx[5].style.backgroundColor = "black";
					} else if (scrollTop >= 4100 && scrollTop < 4700) {
						clear();xx[6].style.backgroundColor = "black";
					} else if (scrollTop >= 4700 && scrollTop < 5300) {
						clear();xx[7].style.backgroundColor = "black";
					} else if (scrollTop >= 5300 && scrollTop < 5900) {
						clear();xx[8].style.backgroundColor = "black";
					} else if (scrollTop >= 5900 && scrollTop < 6500) {
						clear();xx[9].style.backgroundColor = "black";
					} else if (scrollTop >= 6500 && scrollTop < 7100) {
						clear();xx[10].style.backgroundColor = "black";
					} else if (scrollTop >= 7100 && scrollTop < 7700) {
						clear();xx[11].style.backgroundColor = "black";
					}
				} else if (scrollTop < 500) {
					document.getElementById("sideleft").style.display = 'none';
				}
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.scrolltoshow();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ id: 'sideleft' },
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u751F\u9C9C\u6C34\u679C ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u8FDB\u53E3\u96F6\u98DF ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u8FDB\u53E3\u9152\u996E ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u5976\u5236\u54C1   ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u4F11\u95F2\u96F6\u98DF ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u997C\u5E72\u7CD6\u5DE7 ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u9152\u6C34\u996E\u6599 ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u51B2\u996E\u4FDD\u5065 ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u7C73\u9762\u6742\u7CAE ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u6CB9\u54C1\u8C03\u5473 ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u4E2A\u4EBA\u6E05\u6D01 ' }),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u7F8E\u5BB9\u62A4\u80A4 ' }),
				_react2.default.createElement(
					'div',
					{ id: 'sideleft_erweima' },
					_react2.default.createElement('img', { src: './source/image/erweima.jpg' })
				),
				_react2.default.createElement(_Sideleft_item2.default, { item_value: '\u5728\u7EBF\u54A8\u8BE2' })
			);
		}
	}]);

	return Sideleftnav;
}(_react2.default.Component);

exports.default = Sideleftnav;