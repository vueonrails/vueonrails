module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158);


/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _menuItemGroup = __webpack_require__(159);

	var _menuItemGroup2 = _interopRequireDefault(_menuItemGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_menuItemGroup2.default.install = function (Vue) {
	  Vue.component(_menuItemGroup2.default.name, _menuItemGroup2.default);
	};

	exports.default = _menuItemGroup2.default;

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(160)

	/* template */
	var __vue_template__ = __webpack_require__(161)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 160:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'ElMenuItemGroup',

	  componentName: 'ElMenuItemGroup',

	  props: {
	    title: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      paddingLeft: 20
	    };
	  },

	  computed: {
	    levelPadding: function levelPadding() {
	      var padding = 10;
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        if (parent.$options.componentName === 'ElSubmenu') {
	          padding += 20;
	        }
	        parent = parent.$parent;
	      }
	      padding === 10 && (padding = 20);
	      return padding;
	    }
	  }
	};

/***/ },

/***/ 161:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "el-menu-item-group"
	  }, [_c('div', {
	    staticClass: "el-menu-item-group__title",
	    style: ({
	      paddingLeft: _vm.levelPadding + 'px'
	    })
	  }, [(!_vm.$slots.title) ? [_vm._v(_vm._s(_vm.title))] : _vm._t("title")], 2), _c('ul', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }

/******/ });