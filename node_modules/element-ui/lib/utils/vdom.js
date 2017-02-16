'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isVNode = isVNode;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVNode(node) {
  if (!node || (typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') return false;
  return _vue2.default.util.hasOwn(node, 'tag') && _vue2.default.util.hasOwn(node, 'componentOptions');
};