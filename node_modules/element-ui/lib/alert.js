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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(2);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
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
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var TYPE_CLASSES_MAP = {
	  'success': 'el-icon-circle-check',
	  'warning': 'el-icon-warning',
	  'error': 'el-icon-circle-cross'
	};
	exports.default = {
	  name: 'ElAlert',

	  props: {
	    title: {
	      type: String,
	      default: '',
	      required: true
	    },
	    description: {
	      type: String,
	      default: ''
	    },
	    type: {
	      type: String,
	      default: 'info'
	    },
	    closable: {
	      type: Boolean,
	      default: true
	    },
	    closeText: {
	      type: String,
	      default: ''
	    },
	    showIcon: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      visible: true
	    };
	  },


	  methods: {
	    close: function close() {
	      this.visible = false;
	      this.$emit('close');
	    }
	  },

	  computed: {
	    typeClass: function typeClass() {
	      return 'el-alert--' + this.type;
	    },
	    iconClass: function iconClass() {
	      return TYPE_CLASSES_MAP[this.type] || 'el-icon-information';
	    },
	    isBigIcon: function isBigIcon() {
	      return this.description ? 'is-big' : '';
	    },
	    isBoldTitle: function isBoldTitle() {
	      return this.description ? 'is-bold' : '';
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-alert-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-alert",
	    class: [_vm.typeClass]
	  }, [(_vm.showIcon) ? _c('i', {
	    staticClass: "el-alert__icon",
	    class: [_vm.iconClass, _vm.isBigIcon]
	  }) : _vm._e(), _c('div', {
	    staticClass: "el-alert__content"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "el-alert__title",
	    class: [_vm.isBoldTitle]
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("default", [(_vm.description) ? _c('p', {
	    staticClass: "el-alert__description"
	  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()]), _c('i', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.closable),
	      expression: "closable"
	    }],
	    staticClass: "el-alert__closebtn",
	    class: {
	      'is-customed': _vm.closeText !== '', 'el-icon-close': _vm.closeText === ''
	    },
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.closeText))])], 2)])])
	},staticRenderFns: []}

/***/ }
/******/ ]);