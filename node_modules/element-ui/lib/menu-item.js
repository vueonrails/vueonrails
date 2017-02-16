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

	module.exports = __webpack_require__(153);


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _menuItem = __webpack_require__(154);

	var _menuItem2 = _interopRequireDefault(_menuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_menuItem2.default.install = function (Vue) {
	  Vue.component(_menuItem2.default.name, _menuItem2.default);
	};

	exports.default = _menuItem2.default;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(155)

	/* template */
	var __vue_template__ = __webpack_require__(157)
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

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menuMixin = __webpack_require__(156);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	var _emitter = __webpack_require__(13);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	module.exports = {
	  name: 'ElMenuItem',

	  componentName: 'ElMenuItem',

	  mixins: [_menuMixin2.default, _emitter2.default],

	  props: {
	    index: {
	      type: String,
	      required: true
	    },
	    route: {
	      type: Object,
	      required: false
	    },
	    disabled: {
	      type: Boolean,
	      required: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.index === this.rootMenu.activedIndex;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.dispatch('ElMenu', 'item-click', this);
	    }
	  },
	  created: function created() {
	    this.parentMenu.addItem(this);
	    this.rootMenu.addItem(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.parentMenu.removeItem(this);
	    this.rootMenu.removeItem(this);
	  }
	};

/***/ },

/***/ 156:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    parentMenu: function parentMenu() {
	      var parent = this.$parent;
	      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    paddingStyle: function paddingStyle() {
	      if (this.rootMenu.mode !== 'vertical') return {};

	      var padding = 20;
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        if (parent.$options.componentName === 'ElSubmenu') {
	          padding += 20;
	        }
	        parent = parent.$parent;
	      }
	      return { paddingLeft: padding + 'px' };
	    }
	  }
	};

/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "el-menu-item",
	    class: {
	      'is-active': _vm.active,
	      'is-disabled': _vm.disabled
	    },
	    style: (_vm.paddingStyle),
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }

/******/ });