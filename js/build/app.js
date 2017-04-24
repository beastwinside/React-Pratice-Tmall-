'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = require('./containers/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Sitenav = require('./containers/Sitenav');

var _Sitenav2 = _interopRequireDefault(_Sitenav);

var _Mainheader = require('./containers/Mainheader');

var _Mainheader2 = _interopRequireDefault(_Mainheader);

var _Sideleftnav = require('./containers/Sideleftnav');

var _Sideleftnav2 = _interopRequireDefault(_Sideleftnav);

var _Siderightnav = require('./containers/Siderightnav');

var _Siderightnav2 = _interopRequireDefault(_Siderightnav);

var _Footer = require('./containers/./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Sitenav2.default, null),
		_react2.default.createElement(_Main2.default, null),
		_react2.default.createElement(_Mainheader2.default, null),
		_react2.default.createElement(_Sideleftnav2.default, null),
		_react2.default.createElement(_Siderightnav2.default, null),
		_react2.default.createElement(_Footer2.default, null)
), document.getElementById('app'));