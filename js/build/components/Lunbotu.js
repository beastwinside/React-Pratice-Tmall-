"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lunbotu = function (_React$Component) {
	_inherits(Lunbotu, _React$Component);

	function Lunbotu(props) {
		_classCallCheck(this, Lunbotu);

		var _this = _possibleConstructorReturn(this, (Lunbotu.__proto__ || Object.getPrototypeOf(Lunbotu)).call(this, props));

		_this.state = {
			x: 1,
			index: 1

		};

		_this.xuanhuanalert = _this.xuanhuanalert.bind(_this);
		_this.handlclick = _this.handlclick.bind(_this);

		return _this;
	}

	_createClass(Lunbotu, [{
		key: "xuanhuanalert",
		value: function xuanhuanalert() {
			var _this2 = this;

			setInterval(function () {
				var ind = _this2.state.index;
				var ind_ = ind - 1;
				var mm = "lunbo_but" + ind;

				var curbut = document.getElementById(mm);
				curbut.style.backgroundColor = "red";

				if (ind_ != 0) {
					var mm_ = "lunbo_but" + ind_;
					var subbut = document.getElementById(mm_);
					subbut.style.backgroundColor = "black";
				} else document.getElementById("lunbo_but7").style.backgroundColor = "black";

				var am = _this2.state.x;
				if (am >= 1 && am <= 6) am++;else am = 1;
				_this2.setState({
					x: am,
					index: am

				});
			}, 5000);
		}
	}, {
		key: "handlclick",
		value: function handlclick(e) {
			var now = "lunbo_but" + e.target.innerText;
			if (this.state.x != 1) var before = this.state.x - 1;else {
				var before = 7;
			}
			before = "lunbo_but" + before;
			document.getElementById(now).style.backgroundColor = "red";
			document.getElementById(before).style.backgroundColor = "black";
			this.setState({
				x: e.target.innerText,
				index: e.target.innerText

			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {

			this.xuanhuanalert();
		}
	}, {
		key: "render",
		value: function render() {
			var urlx = "url('./source/image/mainshow_image/lunbo/lunbo" + this.state.x + ".png')";
			return _react2.default.createElement(
				"div",
				{ id: "lunbo",
					style: { backgroundImage: urlx } },
				_react2.default.createElement(
					"div",
					{ id: "Lunbotu_7but" },
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but1",
							onClick: this.handlclick },
						"1"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but2",
							onClick: this.handlclick },
						"2"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but3",
							onClick: this.handlclick },
						"3"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but4",
							onClick: this.handlclick },
						"4"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but5",
							onClick: this.handlclick },
						"5"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but6",
							onClick: this.handlclick },
						"6"
					),
					_react2.default.createElement(
						"div",
						{ id: "lunbo_but7",
							onClick: this.handlclick },
						"7"
					)
				)
			);
		}
	}]);

	return Lunbotu;
}(_react2.default.Component);

exports.default = Lunbotu;