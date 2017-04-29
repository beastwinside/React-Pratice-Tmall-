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
										itemvalue7: '\u9E21\u8089', itemvalue8: '\u9C7C\u96F7\u5236\u54C1', itemvalue9: '\u725B\u8089',
										mainitem1_price: '18\uFFE5', mainitem2_price: '39.9\uFFE5', mainitem3_price: '13.8\uFFE5', mainitem4_price: '38.8\uFFE5',
										mainitem5_price: '9.9\uFFE5', mainitem6_price: '65\uFFE5', mainitem7_price: '58\uFFE5', mainitem8_price: '26.8\uFFE5',
										toprightvalue1: '\u8FDB\u53E3\u706B\u9F99\u679C', toprightvalue2: '\u51B0\u9C9C\u732A\u8089\u4E0A\u65B0', toprightvalue3: '\u4E09\u6587\u9C7C\u523A\u8EAB',
										toprightvalue4: '', toprightvalue5: '',
										mainitem1_value: '\u7CBE\u54C1\u725B\u8089', mainitem2_value: '\u65B0\u9C9C\u5927\u867E', mainitem3_value: '\u7F8E\u5473\u8292\u679C',
										mainitem4_value: '\u53EF\u53E3\u9CD5\u9C7C', mainitem5_value: '\u7F8E\u5473\u9E21\u817F', mainitem6_value: '\u51B0\u9C9C\u732A\u8089',
										mainitem7_value: '\u65B0\u9C9C\u6C34\u679C', mainitem8_value: '\u8FDB\u53E3\u63D0\u5B50'

								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u8FDB\u53E3\u96F6\u98DF\u901F\u98DF', bgcolor: '#ff9228', boxid: '2',
										itemvalue1: '\u997C\u5E72', itemvalue2: '\u7CD5\u70B9', itemvalue3: '\u5DE7\u514B\u529B',
										itemvalue4: '\u65B9\u4FBF\u9762', itemvalue5: '\u871C\u996F\u679C\u5E72', itemvalue6: '\u610F\u9762',
										itemvalue7: '\u6D77\u4EA7\u54C1', itemvalue8: '\u67A3\u7C7B', itemvalue9: '\u85AF\u7247\u81A8\u5316',
										mainitem1_price: '16.9\uFFE5', mainitem2_price: '10.8\uFFE5', mainitem3_price: '39.9\uFFE5', mainitem4_price: '14.9\uFFE5',
										mainitem5_price: '16.9\uFFE5', mainitem6_price: '49.9\uFFE5', mainitem7_price: '39.0\uFFE5', mainitem8_price: '15.5\uFFE5',
										toprightvalue1: '6.5\u5143\u8D77', toprightvalue2: '\u5F20\u541B\u96C5\u5C0F\u59B9\u59B93.9\u5143\u8D77', toprightvalue3: 'Loacker/\u83B1\u5BB6\u5A01\u5316\u997C',
										toprightvalue4: '\u7687\u51A04.9\u5143\u8D77', toprightvalue5: '',
										mainitem1_value: '\u53F0\u6E7E\u8FDB\u53E377\u677E\u5854', mainitem2_value: 'choco', mainitem3_value: '\u8D8A\u5357\u8FDB\u53E3\u83E0\u841D\u871C\u5E72',
										mainitem4_value: '\u65E5\u6E05\u98CE\u4E3D\u829D\u58EB\u5A01\u5316', mainitem5_value: 'tipo\u9762\u5305\u5E72', mainitem6_value: '\u97E9\u56FD\u4E09\u517B\u706B\u9E21\u9762',
										mainitem7_value: '\u53F0\u6E7E\u8FDB\u53E3\u5200\u677E\u5854', mainitem8_value: '\u5FB7\u56FD\u8FDB\u53E3Krooper'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u8FDB\u53E3\u9152\u996E\u7CAE\u6CB9', bgcolor: '#a95ffa', boxid: '3',
										itemvalue1: '\u8C03\u5473\u6C41', itemvalue2: '\u6A44\u6984\u6CB9', itemvalue3: '\u8C03\u5473\u6599',
										itemvalue4: '\u8C03\u5473\u9171', itemvalue5: '\u70D8\u7119\u539F\u6599', itemvalue6: '\u5927\u7C73',
										itemvalue7: '\u8C37\u7269\u51B2\u5370', itemvalue8: '\u8336\u996E\u6599', itemvalue9: '\u6C34',
										mainitem1_price: '19.9\uFFE5', mainitem2_price: '69.9\uFFE5', mainitem3_price: '8.8\uFFE5', mainitem4_price: '119.0\uFFE5',
										mainitem5_price: '29.9\uFFE5', mainitem6_price: '129.0\uFFE5', mainitem7_price: '38.9\uFFE5', mainitem8_price: '109.0\uFFE5',
										toprightvalue1: '\u7F8E\u5473\u9C9C', toprightvalue2: '\u6D77\u5929', toprightvalue3: '',
										toprightvalue4: '', toprightvalue5: '',
										mainitem1_value: 'neinz', mainitem2_value: 'rizone', mainitem3_value: '\u5496\u55B1\u5757',
										mainitem4_value: '\u71D5\u9EA6\u7247', mainitem5_value: '\u901F\u6EB6\u5496\u5561', mainitem6_value: '\u5564\u9152',
										mainitem7_value: '\u6A44\u6984\u6CB9', mainitem8_value: '\u4F9D\u4E91\u77FF\u6CC9\u6C34'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u5976\u5236\u54C1', bgcolor: '#2abff6', boxid: '4',
										itemvalue1: '\u8FDB\u53E3\u9178\u5976', itemvalue2: '\u8FDB\u53E3\u7EAF\u725B\u5976', itemvalue3: '\u8FDB\u53E3\u542B\u4E73\u996E\u6599',
										itemvalue4: '\u5E38\u6E29\u5976', itemvalue5: '\u9178\u5976', itemvalue6: '\u542B\u4E73\u996E\u6599',
										itemvalue7: '\u8499\u725B', itemvalue8: '\u4F0A\u5229', itemvalue9: '\u4E09\u5143',
										mainitem1_price: '27.9\uFFE5', mainitem2_price: '54.9\uFFE5', mainitem3_price: '74.8\uFFE5', mainitem4_price: '52.9\uFFE5',
										mainitem5_price: '79.8\uFFE5', mainitem6_price: '65.0\uFFE5', mainitem7_price: '89.0\uFFE5', mainitem8_price: '49.9\uFFE5',
										toprightvalue1: '\u8FDB\u53E3\u6A44\u6984\u6CB9', toprightvalue2: '\u8FDB\u53E3\u53A8\u623F\u8C03\u6599', toprightvalue3: '\u8FDB\u53E3\u679C\u6C41',
										toprightvalue4: '\u8FDB\u53E3\u5564\u9152', toprightvalue5: '\u9A6C\u7389\u5C71',
										mainitem1_value: '\u4E09\u5143\u7EAF\u725B\u5976', mainitem2_value: '\u8499\u725B\u7EAF\u725B\u5976', mainitem3_value: '\u9999\u8549\u725B\u5976',
										mainitem4_value: '\u73B0\u4EE3\u7267\u573A\u7EAF\u725B\u5976', mainitem5_value: '\u4F0A\u5229\u7EAF\u725B\u5976', mainitem6_value: '\u5149\u660E\u7EAF\u725B\u5976',
										mainitem7_value: '\u5B89\u500D\u7EAF\u725B\u5976', mainitem8_value: '\u5B89\u6155\u5E0C\u9178\u5976'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u4F11\u95F2\u96F6\u98DF', bgcolor: '#67cd7d', boxid: '5',
										itemvalue1: '\u8292\u679C/\u852C\u83DC\u5E72', itemvalue2: '\u732A\u8089\u7C7B', itemvalue3: '\u5C71\u6942',
										itemvalue4: '\u8170\u679C', itemvalue5: '\u725B\u8089\u7C7B', itemvalue6: '\u6D77\u5473\u96F6\u98DF',
										itemvalue7: '\u74DC\u5B50', itemvalue8: '\u9E21\u9E2D', itemvalue9: '\u597D\u5403\u7684\u575A\u679C',
										mainitem1_price: '9.9\uFFE5', mainitem2_price: '15.9\uFFE5', mainitem3_price: '8.9\uFFE5', mainitem4_price: '19.9\uFFE5',
										mainitem5_price: '13.9\uFFE5', mainitem6_price: '13.99\uFFE5', mainitem7_price: '8.8\uFFE5', mainitem8_price: '12.8\uFFE5',
										toprightvalue1: '\r \u5976\u5236\u54C1\r \u5B89\u6155\u5E0C\u9178\u5976 ', toprightvalue2: '\u4E09\u5143', toprightvalue3: '\u6709\u673A\u725B\u5976',
										toprightvalue4: '\u513F\u7AE5\u725B\u5976\u4E13\u533A', toprightvalue5: '\u9999\u8549\u725B\u5976',
										mainitem1_value: '\u50BB\u5B69\u5B50', mainitem2_value: '\u767E\u8349\u5473', mainitem3_value: '\u826F\u54C1\u94FA\u5B50',
										mainitem4_value: '\u5C71\u6942\u7247', mainitem5_value: '\u8292\u679C\u5E72', mainitem6_value: '\u9999\u74DC\u5B50',
										mainitem7_value: '\u9C7F\u9C7C\u4E1D', mainitem8_value: '\u8700\u9053\u9999\u5154\u8089'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u997C\u5E72\u7CD6\u5DE7', bgcolor: '#ff7a64', boxid: '6',
										itemvalue1: '\u997C\u5E72', itemvalue2: '\u7CD6\u679C', itemvalue3: '\u5DE7\u514B\u529B',
										itemvalue4: '\u897F\u5F0F\u7CD5\u70B9', itemvalue5: '\u85AF\u7247/\u81A8\u5316', itemvalue6: '\u4F20\u7EDF\u7CD5\u70B9',
										itemvalue7: '\u679C\u51BB/\u5E03\u4E01', itemvalue8: '\u53E3\u9999\u7CD6', itemvalue9: '\u5C0F\u5403\u7CD5\u70B9',
										mainitem1_price: '7.9\uFFE5', mainitem2_price: '49.9\uFFE5', mainitem3_price: '39.8\uFFE5', mainitem4_price: '13.8\uFFE5',
										mainitem5_price: '35.8\uFFE5', mainitem6_price: '26.8\uFFE5', mainitem7_price: '9.9\uFFE5', mainitem8_price: '12.5\uFFE5',
										toprightvalue1: '\u767E\u8349\u5473', toprightvalue2: '\u826F\u54C1\u94FA\u5B50', toprightvalue3: '\u65B0\u519C\u54E5',
										toprightvalue4: '\u897F\u57DF\u826F\u54C1', toprightvalue5: '\u6765\u4F0A\u4EFD',
										mainitem1_value: '\u84B8\u86CB\u7CD5', mainitem2_value: '\u7EA4\u9EB8\u997C\u5E72', mainitem3_value: '\u68C9\u82B1\u7CD6',
										mainitem4_value: '\u60CA\u5947\u8106\u7247', mainitem5_value: '\u66F2\u5947', mainitem6_value: '\u661F\u7403\u676F',
										mainitem7_value: '\u725B\u624E\u7CD6', mainitem8_value: '\u661F\u7403\u676F'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u9152\u6C34\u996E\u6599', bgcolor: '#83cfff', boxid: '7',
										itemvalue1: '\u767D\u9152', itemvalue2: '\u4FDD\u5065\u9152', itemvalue3: '\u5564\u9152',
										itemvalue4: '\u9178\u6885\u6C64', itemvalue5: '\u5176\u5B83\u996E\u6599', itemvalue6: '\u8336\u996E\u6599',
										itemvalue7: '\u6C34', itemvalue8: '\u679C\u852C\u996E\u6599', itemvalue9: '\u519C\u592B\u679C\u56ED',
										mainitem1_price: '99.0\uFFE5', mainitem2_price: '139.0\uFFE5', mainitem3_price: '408.0\uFFE5', mainitem4_price: '106.9\uFFE5',
										mainitem5_price: '153.0\uFFE5', mainitem6_price: '60.8\uFFE5', mainitem7_price: '56.0\uFFE5', mainitem8_price: '60.0\uFFE5',
										toprightvalue1: '\u5927\u724C\u76F4\u964D', toprightvalue2: '\u597D\u4E3D\u53CB\u4E0D\u6B6250%off', toprightvalue3: '\u4E50\u4E8B\u4EAB\u4E0D\u505C',
										toprightvalue4: '\u5FB7\u8299\u4E0D\u6B6250%off', toprightvalue5: '\u8DA3\u56ED1\u5143\u8D77',
										mainitem1_value: '\u70E7\u9152', mainitem2_value: '\u8305\u53F0\u9152', mainitem3_value: '\u516D\u4E2A\u6838\u6843',
										mainitem4_value: '\u7EA2\u661F\u4E8C\u9505\u5934', mainitem5_value: '\u53E4\u8D8A\u9F99\u5C71', mainitem6_value: '\u767E\u57CE\u6B21\u65E5\u8FBE',
										mainitem7_value: '\u9AD8\u4E50\u9AD8', mainitem8_value: '\u963F\u534E\u7530'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u51B2\u5370\u4FDD\u5065', bgcolor: '#c6a868', boxid: '8',
										itemvalue1: '\u8702\u871C', itemvalue2: '\u81B3\u98DF\u8425\u517B\u5242', itemvalue3: '\u67B8\u675E',
										itemvalue4: '\u963F\u80F6', itemvalue5: '\u7EF4\u751F\u7D20', itemvalue6: '\u71D5\u7A9D',
										itemvalue7: '\u690D\u7269\u7CBE\u534E', itemvalue8: '\u901F\u6EB6\u5496\u5561', itemvalue9: '\u9EA6\u7247\u8C37\u7269\u51B2\u996E',
										mainitem1_price: '29.9\uFFE5', mainitem2_price: '19.9\uFFE5', mainitem3_price: '12.8\uFFE5', mainitem4_price: '39.9\uFFE5',
										mainitem5_price: '99.0\uFFE5', mainitem6_price: '23.9\uFFE5', mainitem7_price: '22.9\uFFE5', mainitem8_price: '16.8\uFFE5',
										toprightvalue1: '\u767E\u5A01', toprightvalue2: '\u519C\u592B\u5C71\u6CC9\u6709\u70B9\u751C', toprightvalue3: '\u71D5\u4EAC\u5564\u9152 \u6E05\u723D\u611F\u52A8\u4E16\u754C',
										toprightvalue4: '\u5065\u5EB7\u6C34\u751F\u6D3B', toprightvalue5: '\u6CF8\u5DDE\u8001\u7A96',
										mainitem1_value: '\u67B8\u675E', mainitem2_value: '\u745E\u8D1D\u6069', mainitem3_value: '\u5373\u4F7F\u71D5\u9EA6\u7247',
										mainitem4_value: '\u96C0\u5DE2\u5496\u5561', mainitem5_value: '\u963F\u80F6\u7CD5', mainitem6_value: '\u5357\u65B9\u9ED1\u829D\u9EBB\u7CCA',
										mainitem7_value: '\u8702\u871C\u67DA\u5B50\u8336', mainitem8_value: '\u51A0\u751F\u56ED\u8702\u871C'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u7C73\u9762\u6742\u7CAE', bgcolor: '#ffbb00', boxid: '9',
										itemvalue1: '\u5927\u7C73', itemvalue2: '\u94F6\u8033', itemvalue3: '\u7C97\u7CAE',
										itemvalue4: '\u6842\u5706\u5E72', itemvalue5: '\u98DF\u7528\u83CC', itemvalue6: '\u83B2\u5B50',
										itemvalue7: '\u8C46\u7C7B', itemvalue8: '\u767E\u5408', itemvalue9: '\u6728\u8033',
										mainitem1_price: '21.5\uFFE5', mainitem2_price: '8.09\uFFE5', mainitem3_price: '16.8\uFFE5', mainitem4_price: '15.8\uFFE5',
										mainitem5_price: '29.9\uFFE5', mainitem6_price: '55.0\uFFE5', mainitem7_price: '27.9\uFFE5', mainitem8_price: '32.8\uFFE5',
										toprightvalue1: '\u4E94\u82B3\u658B', toprightvalue2: '\u771F\u771F\u8001\u8001', toprightvalue3: '\u8363\u5E86\u548C',
										toprightvalue4: '\u7C73\u7CAE\u8C03\u5473', toprightvalue5: '',
										mainitem1_value: '\u6C64\u8FBE\u4EBA', mainitem2_value: '\u5341\u6708\u7A3B\u7530\u5C0F\u7C73', mainitem3_value: '\u5341\u6708\u7A3B\u7530\u7EA2\u67A3',
										mainitem4_value: '\u6CF0\u91D1\u9999', mainitem5_value: '\u82CF\u8F6F\u9999', mainitem6_value: '\u91D1\u9F99\u9C7C',
										mainitem7_value: '\u53CC\u6C47\u738B\u4E2D\u738B', mainitem8_value: '\u91D1\u5510\u751F\u59DC\u7CD6'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u6CB9\u54C1\u8C03\u5473', bgcolor: '#f4935f', boxid: '10',
										itemvalue1: '\u8C03\u548C\u6CB9', itemvalue2: '\u82B1\u751F\u6CB9', itemvalue3: '\u7389\u7C73\u6CB9',
										itemvalue4: '\u8475\u82B1\u7C7D\u6CB9', itemvalue5: '\u6A44\u6984\u6CB9', itemvalue6: '\u814C\u5236\u54C1',
										itemvalue7: '\u8C03\u5473\u6599', itemvalue8: '\u8FA3\u6912\u8C03\u6599', itemvalue9: '\u9171\u6CB9',
										mainitem1_price: '39.9\uFFE5', mainitem2_price: '69.9\uFFE5', mainitem3_price: '74.9\uFFE5', mainitem4_price: '139.9\uFFE5',
										mainitem5_price: '129.9\uFFE5', mainitem6_price: '39.9\uFFE5', mainitem7_price: '8.9\uFFE5', mainitem8_price: '25.9\uFFE5',
										toprightvalue1: '\u82B1\u751F\u6CB9\u805A\u201C\u60E0\u201D', toprightvalue2: '\u5F00\u80C3\u83DC\u70ED\u5356', toprightvalue3: '\u6E05\u51C9\u6742\u7CAE\u5B63',
										toprightvalue4: '', toprightvalue5: '',
										mainitem1_value: '\u6D77\u5929\u9171\u6CB9', mainitem2_value: '\u8475\u82B1\u7C7D\u6CB9', mainitem3_value: '\u91D1\u9F99\u9C7C\u8C03\u548C\u6CB9',
										mainitem4_value: '\u8475\u82B1\u6CB9', mainitem5_value: '\u8001\u5E72\u5988\u8C46\u74E3\u9171', mainitem6_value: '\u9F99\u5929',
										mainitem7_value: '\u6A44\u6984\u6CB9', mainitem8_value: '\u957F\u5BFF\u82B1\u7389\u7C73\u6CB9'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u4E2A\u4EBA\u6E05\u6D01', bgcolor: '#6290f6', boxid: '11',
										itemvalue1: '\u6D17\u53D1\u6C34', itemvalue2: '\u62A4\u53D1\u7D20', itemvalue3: '\u6C90\u6D74\u9732',
										itemvalue4: '\u6D17\u624B\u6DB2', itemvalue5: '\u9999\u7682', itemvalue6: '\u7259\u818F',
										itemvalue7: '\u7259\u5237', itemvalue8: '\u9ED1\u4EBA', itemvalue9: '\u8212\u5BA2',
										mainitem1_price: '109.9\uFFE5', mainitem2_price: '49.9\uFFE5', mainitem3_price: '49.9\uFFE5', mainitem4_price: '21.0\uFFE5',
										mainitem5_price: '56.0\uFFE5', mainitem6_price: '13.9\uFFE5', mainitem7_price: '39.9\uFFE5', mainitem8_price: '16.9\uFFE5',
										toprightvalue1: '\u9ED1\u4EBA\u7259\u818F', toprightvalue2: '\u6C99\u5BA3', toprightvalue3: '\u6F58\u5A77',
										toprightvalue4: '', toprightvalue5: '',
										mainitem1_value: '\u9ED1\u4EBA\u7259\u818F', mainitem2_value: '\u6E05\u626C\u53BB\u5C51\u6D17\u53D1\u6DB2', mainitem3_value: '\u8212\u514B\u7259\u818F',
										mainitem4_value: '\u6F58\u5A77', mainitem5_value: '\u6C99\u5BA3\u62A4\u53D1\u7CFB\u5217', mainitem6_value: '\u6F58\u5A77\u6C90\u6D74\u9732',
										mainitem7_value: '\u5C0F\u82CF\u6253', mainitem8_value: '\u4E91\u5357\u767D\u836F'
								}),
								_react2.default.createElement(_Show_box2.default, { topvalue: '\u7F8E\u5BB9\u62A4\u80A4', bgcolor: '#ff909f', boxid: '12',
										itemvalue1: '\u8FDB\u53E3\u5378\u5986\u7528\u54C1', itemvalue2: '\u6B62\u6C57\u9999\u4F53', itemvalue3: '\u7537\u58EB\u63A7\u6CB9',
										itemvalue4: '\u9632\u6652', itemvalue5: '\u62A4\u624B\u971C', itemvalue6: '\u7537\u58EB\u723D\u80A4\u6C34',
										itemvalue7: '\u8FDB\u53E3\u9762\u971C', itemvalue8: '\u8FDB\u53E3\u4E73\u6DB2', itemvalue9: '\u7537\u58EB\u4E73\u6DB2',
										mainitem1_price: '165.0\uFFE5', mainitem2_price: '31.9\uFFE5', mainitem3_price: '18.9\uFFE5', mainitem4_price: '9.9\uFFE5',
										mainitem5_price: '19.9\uFFE5', mainitem6_price: '39.0\uFFE5', mainitem7_price: '30.6\uFFE5', mainitem8_price: '69.0\uFFE5',
										toprightvalue1: '\u767E\u96C0\u7F9A', toprightvalue2: '\u819C\u6CD5\u4E16\u5BB6', toprightvalue3: '\u6B27\u83B1\u96C5\u7537\u58EB',
										toprightvalue4: '\u59AE\u7EF4\u96C5', toprightvalue5: '\u66FC\u79C0\u96F7\u6566',
										mainitem1_value: '\u6CD5\u56FD\u8D1D\u5FB7\u739B', mainitem2_value: 'NATURE REPUBLIC', mainitem3_value: 'BeeeY',
										mainitem4_value: '\u5927\u5B9D', mainitem5_value: '\u76F8\u5B9C\u672C\u8349', mainitem6_value: '\u5343\u7EA4\u8349',
										mainitem7_value: '\u59AE\u7EF4\u96C5', mainitem8_value: '\u767E\u96C0\u7F9A'
								}),
								_react2.default.createElement(_Show_box_last2.default, null)
						);
				}
		}]);

		return Main;
}(_react2.default.Component);

exports.default = Main;