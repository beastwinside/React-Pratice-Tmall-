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

var Show_box = function (_React$Component) {
		_inherits(Show_box, _React$Component);

		function Show_box() {
				_classCallCheck(this, Show_box);

				return _possibleConstructorReturn(this, (Show_box.__proto__ || Object.getPrototypeOf(Show_box)).apply(this, arguments));
		}

		_createClass(Show_box, [{
				key: "render",
				value: function render() {

						var boxsrc = "./source/image/showbox/showbox" + this.props.boxid + "/main.jpg";
						return _react2.default.createElement(
								"div",
								{ className: "show_box" },
								_react2.default.createElement(
										"header",
										{ className: "show_headerr" },
										_react2.default.createElement(
												"span",
												null,
												this.props.topvalue
										),
										_react2.default.createElement(
												"nav",
												{ className: "showboxheader_right" },
												_react2.default.createElement(
														"a",
														null,
														this.props.toprightvalue5
												),
												_react2.default.createElement(
														"a",
														null,
														this.props.toprightvalue4
												),
												_react2.default.createElement(
														"a",
														null,
														this.props.toprightvalue3
												),
												_react2.default.createElement(
														"a",
														null,
														this.props.toprightvalue2
												),
												_react2.default.createElement(
														"a",
														null,
														this.props.toprightvalue1
												)
										)
								),
								_react2.default.createElement(
										"div",
										{ className: "show_container" },
										_react2.default.createElement(
												"div",
												{ className: "show_box_left", style: { backgroundColor: this.props.bgcolor } },
												_react2.default.createElement(
														"div",
														{ className: "show_box_left_top" },
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue1
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue2
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue3
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue4
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue5
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue6
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue7
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue8
																)
														),
														_react2.default.createElement(
																"div",
																{ className: "showbox_9item" },
																_react2.default.createElement(
																		"span",
																		null,
																		this.props.itemvalue9
																)
														)
												),
												_react2.default.createElement("img", { className: "showbox_left_img", src: boxsrc })
										),
										_react2.default.createElement(
												"div",
												{ className: "show_box_main" },
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/1.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem1_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/2.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem2_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/3.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem3_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/4.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem4_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/5.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem5_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/6.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem6_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/7.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem7_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "show_box_main_item" },
														_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/8.jpg" }),
														_react2.default.createElement(
																"p",
																null,
																this.props.mainitem8_price,
																_react2.default.createElement("img", { src: "./source/image/showbox/shopcart.png" })
														)
												)
										),
										_react2.default.createElement(
												"div",
												{ className: "show_box_right" },
												_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/11.jpg", className: "show_box_right_u" }),
												_react2.default.createElement("img", { src: "./source/image/showbox/showbox" + this.props.boxid + "/12.jpg", className: "show_box_right_d" })
										)
								)
						);
				}
		}]);

		return Show_box;
}(_react2.default.Component);

exports.default = Show_box;