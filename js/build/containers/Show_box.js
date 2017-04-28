'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Show_box_main_cell = require('../components/Show_box_main_cell');

var _Show_box_main_cell2 = _interopRequireDefault(_Show_box_main_cell);

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
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'div',
								{ className: 'show_box' },
								_react2.default.createElement(
										'header',
										{ className: 'show_headerr' },
										_react2.default.createElement(
												'span',
												null,
												this.props.topvalue
										)
								),
								_react2.default.createElement(
										'div',
										{ className: 'show_container' },
										_react2.default.createElement(
												'div',
												{ className: 'show_box_left' },
												_react2.default.createElement(
														'div',
														{ className: 'show_box_left_top' },
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' }),
														_react2.default.createElement('span', { className: 'showbox_9item' })
												),
												_react2.default.createElement('img', { className: 'showbox_left_img', alt: '\u56FE\u7247' })
										),
										_react2.default.createElement(
												'div',
												{ className: 'show_box_main' },
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null),
												_react2.default.createElement(_Show_box_main_cell2.default, null)
										),
										_react2.default.createElement(
												'div',
												{ className: 'show_box_right' },
												_react2.default.createElement('img', { alt: '\u56FE', className: 'show_box_right_u' }),
												_react2.default.createElement('img', { alt: '\u56FE', className: 'show_box_right_d' })
										)
								)
						);
				}
		}]);

		return Show_box;
}(_react2.default.Component);

exports.default = Show_box;