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

var Footer_up = function (_React$Component) {
	_inherits(Footer_up, _React$Component);

	function Footer_up() {
		_classCallCheck(this, Footer_up);

		return _possibleConstructorReturn(this, (Footer_up.__proto__ || Object.getPrototypeOf(Footer_up)).apply(this, arguments));
	}

	_createClass(Footer_up, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'Footer_up' },
				_react2.default.createElement(
					'div',
					{ id: 'Footer_up_container' },
					_react2.default.createElement(
						'dl',
						{ id: 'Footer_up_gwzn' },
						_react2.default.createElement(
							'dt',
							null,
							'\u8D2D\u7269\u6307\u5357'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u8D2D\u7269\u6307\u53571'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u8D2D\u7269\u6307\u53572'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u8D2D\u7269\u6307\u53573'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u8D2D\u7269\u6307\u53574'
						)
					),
					_react2.default.createElement(
						'dl',
						{ id: 'Footer_up_shfw' },
						_react2.default.createElement(
							'dt',
							null,
							'\u552E\u540E\u670D\u52A1'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u552E\u540E\u670D\u52A11'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u552E\u540E\u670D\u52A12'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u552E\u540E\u670D\u52A13'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u552E\u540E\u670D\u52A14'
						)
					),
					_react2.default.createElement(
						'dl',
						{ id: 'Footer_up_zzfw' },
						_react2.default.createElement(
							'dt',
							null,
							'\u81EA\u52A9\u670D\u52A1'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u81EA\u52A9\u670D\u52A11'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u81EA\u52A9\u670D\u52A12'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u81EA\u52A9\u670D\u52A13'
						)
					),
					_react2.default.createElement(
						'dl',
						{ id: 'Footer_up_sjfw' },
						_react2.default.createElement(
							'dt',
							null,
							'\u5546\u5BB6\u670D\u52A1'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u5546\u5BB6\u670D\u52A11'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u5546\u5BB6\u670D\u52A12'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u5546\u5BB6\u670D\u52A13'
						),
						_react2.default.createElement(
							'dd',
							null,
							'\u5546\u5BB6\u670D\u52A14'
						)
					)
				)
			);
		}
	}]);

	return Footer_up;
}(_react2.default.Component);

exports.default = Footer_up;