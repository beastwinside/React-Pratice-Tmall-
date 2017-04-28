'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Show_box_last = require('./Show_box_last');

var _Show_box_last2 = _interopRequireDefault(_Show_box_last);

var _Mainshow = require('./Mainshow');

var _Mainshow2 = _interopRequireDefault(_Mainshow);

var _Show_box = require('./Show_box');

var _Show_box2 = _interopRequireDefault(_Show_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
		_inherits(Main, _React$Component);

		function Main() {
				_classCallCheck(this, Main);

				return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
		}

		_createClass(Main, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'div',
								{ id: 'main' },
								_react2.default.createElement(_Mainshow2.default, null),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u751F\u9C9C\u6C34\u679C', bgcolor: '#8dd514', boxid: '1',
										itemvalue1: '\u9C7C', itemvalue2: '\u725B\u6392', itemvalue3: '\u867E',
										itemvalue4: '\u67E0\u6AAC', itemvalue5: '\u68A8', itemvalue6: '\u8461\u8404/\u63D0\u5B50',
										itemvalue7: '\u9E21\u8089', itemvalue8: '\u9C7C\u96F7\u5236\u54C1', itemvalue9: '\u725B\u8089' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u8FDB\u53E3\u96F6\u98DF\u901F\u98DF', bgcolor: '#ff9228', boxid: '2',
										itemvalue1: '\u997C\u5E72', itemvalue2: '\u7CD5\u70B9', itemvalue3: '\u5DE7\u514B\u529B',
										itemvalue4: '\u65B9\u4FBF\u9762', itemvalue5: '\u871C\u996F\u679C\u5E72', itemvalue6: '\u610F\u9762',
										itemvalue7: '\u6D77\u4EA7\u54C1', itemvalue8: '\u67A3\u7C7B', itemvalue9: '\u85AF\u7247\u81A8\u5316' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u8FDB\u53E3\u9152\u996E\u7CAE\u6CB9', bgcolor: '#a95ffa', boxid: '3',
										itemvalue1: '\u8C03\u5473\u6C41', itemvalue2: '\u6A44\u6984\u6CB9', itemvalue3: '\u8C03\u5473\u6599',
										itemvalue4: '\u8C03\u5473\u9171', itemvalue5: '\u70D8\u7119\u539F\u6599', itemvalue6: '\u5927\u7C73',
										itemvalue7: '\u8C37\u7269\u51B2\u5370', itemvalue8: '\u8336\u996E\u6599', itemvalue9: '\u6C34' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u5976\u5236\u54C1', bgcolor: '#2abff6', boxid: '4',
										itemvalue1: '\u8FDB\u53E3\u9178\u5976', itemvalue2: '\u8FDB\u53E3\u7EAF\u725B\u5976', itemvalue3: '\u8FDB\u53E3\u542B\u4E73\u996E\u6599',
										itemvalue4: '\u5E38\u6E29\u5976', itemvalue5: '\u9178\u5976', itemvalue6: '\u542B\u4E73\u996E\u6599',
										itemvalue7: '\u8499\u725B', itemvalue8: '\u4F0A\u5229', itemvalue9: '\u4E09\u5143' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u4F11\u95F2\u96F6\u98DF', bgcolor: '#67cd7d', boxid: '5',
										itemvalue1: '\u8292\u679C/\u852C\u83DC\u5E72', itemvalue2: '\u732A\u8089\u7C7B', itemvalue3: '\u5C71\u6942',
										itemvalue4: '\u8170\u679C', itemvalue5: '\u725B\u8089\u7C7B', itemvalue6: '\u6D77\u5473\u96F6\u98DF',
										itemvalue7: '\u74DC\u5B50', itemvalue8: '\u9E21\u9E2D', itemvalue9: '\u597D\u5403\u7684\u575A\u679C' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u997C\u5E72\u7CD6\u5DE7', bgcolor: '#ff7a64', boxid: '6',
										itemvalue1: '\u997C\u5E72', itemvalue2: '\u7CD6\u679C', itemvalue3: '\u5DE7\u514B\u529B',
										itemvalue4: '\u897F\u5F0F\u7CD5\u70B9', itemvalue5: '\u85AF\u7247/\u81A8\u5316', itemvalue6: '\u4F20\u7EDF\u7CD5\u70B9',
										itemvalue7: '\u679C\u51BB/\u5E03\u4E01', itemvalue8: '\u53E3\u9999\u7CD6', itemvalue9: '\u5C0F\u5403\u7CD5\u70B9' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u9152\u6C34\u996E\u6599', bgcolor: '#83cfff', boxid: '7',
										itemvalue1: '\u767D\u9152', itemvalue2: '\u4FDD\u5065\u9152', itemvalue3: '\u5564\u9152',
										itemvalue4: '\u9178\u6885\u6C64', itemvalue5: '\u5176\u5B83\u996E\u6599', itemvalue6: '\u8336\u996E\u6599',
										itemvalue7: '\u6C34', itemvalue8: '\u679C\u852C\u996E\u6599', itemvalue9: '\u519C\u592B\u679C\u56ED' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u51B2\u5370\u4FDD\u5065', bgcolor: '#c6a868', boxid: '8',
										itemvalue1: '\u8702\u871C', itemvalue2: '\u81B3\u98DF\u8425\u517B\u5242', itemvalue3: '\u67B8\u675E',
										itemvalue4: '\u963F\u80F6', itemvalue5: '\u7EF4\u751F\u7D20', itemvalue6: '\u71D5\u7A9D',
										itemvalue7: '\u690D\u7269\u7CBE\u534E', itemvalue8: '\u901F\u6EB6\u5496\u5561', itemvalue9: '\u9EA6\u7247\u8C37\u7269\u51B2\u996E' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u7C73\u9762\u6742\u7CAE', bgcolor: '#ffbb00', boxid: '9',
										itemvalue1: '\u5927\u7C73', itemvalue2: '\u94F6\u8033', itemvalue3: '\u7C97\u7CAE',
										itemvalue4: '\u6842\u5706\u5E72', itemvalue5: '\u98DF\u7528\u83CC', itemvalue6: '\u83B2\u5B50',
										itemvalue7: '\u8C46\u7C7B', itemvalue8: '\u767E\u5408', itemvalue9: '\u6728\u8033' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u6CB9\u54C1\u8C03\u5473', bgcolor: '#f4935f', boxid: '10',
										itemvalue1: '\u8C03\u548C\u6CB9', itemvalue2: '\u82B1\u751F\u6CB9', itemvalue3: '\u7389\u7C73\u6CB9',
										itemvalue4: '\u8475\u82B1\u7C7D\u6CB9', itemvalue5: '\u6A44\u6984\u6CB9', itemvalue6: '\u814C\u5236\u54C1',
										itemvalue7: '\u8C03\u5473\u6599', itemvalue8: '\u8FA3\u6912\u8C03\u6599', itemvalue9: '\u9171\u6CB9' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u4E2A\u4EBA\u6E05\u6D01', bgcolor: '#6290f6', boxid: '11',
										itemvalue1: '\u6D17\u53D1\u6C34', itemvalue2: '\u62A4\u53D1\u7D20', itemvalue3: '\u6C90\u6D74\u9732',
										itemvalue4: '\u6D17\u624B\u6DB2', itemvalue5: '\u9999\u7682', itemvalue6: '\u7259\u818F',
										itemvalue7: '\u7259\u5237', itemvalue8: '\u9ED1\u4EBA', itemvalue9: '\u8212\u5BA2' }),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u7F8E\u5BB9\u62A4\u80A4', bgcolor: '#ff909f', boxid: '12',
										itemvalue1: '\u8FDB\u53E3\u5378\u5986\u7528\u54C1', itemvalue2: '\u6B62\u6C57\u9999\u4F53', itemvalue3: '\u7537\u58EB\u63A7\u6CB9',
										itemvalue4: '\u9632\u6652', itemvalue5: '\u62A4\u624B\u971C', itemvalue6: '\u7537\u58EB\u723D\u80A4\u6C34',
										itemvalue7: '\u8FDB\u53E3\u9762\u971C', itemvalue8: '\u8FDB\u53E3\u4E73\u6DB2', itemvalue9: '\u7537\u58EB\u4E73\u6DB2' }),
								_react2.default.createElement(_Show_box_last2.default, null)
						);
				}
		}]);

		return Main;
}(_react2.default.Component);

exports.default = Main;