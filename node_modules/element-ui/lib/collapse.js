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

	module.exports = __webpack_require__(61);


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapse = __webpack_require__(62);

	var _collapse2 = _interopRequireDefault(_collapse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_collapse2.default.install = function (Vue) {
	  Vue.component(_collapse2.default.name, _collapse2.default);
	};

	exports.default = _collapse2.default;

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(63)

	/* template */
	var __vue_template__ = __webpack_require__(64)
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

/***/ 63:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElCollapse',

	  componentName: 'ElCollapse',

	  props: {
	    accordion: Boolean,
	    value: {
	      type: [Array, String, Number],
	      default: function _default() {
	        return [];
	      }
	    }
	  },

	  data: function data() {
	    return {
	      activeNames: [].concat(this.value)
	    };
	  },


	  watch: {
	    value: function value(_value) {
	      this.activeNames = [].concat(_value);
	    }
	  },

	  methods: {
	    setActiveNames: function setActiveNames(activeNames) {
	      activeNames = [].concat(activeNames);
	      var value = this.accordion ? activeNames[0] : activeNames;
	      this.activeNames = activeNames;
	      this.$emit('input', value);
	      this.$emit('change', value);
	    },
	    handleItemClick: function handleItemClick(item) {
	      if (this.accordion) {
	        this.setActiveNames(this.activeNames[0] && this.activeNames[0] === item.name ? '' : item.name);
	      } else {
	        var activeNames = this.activeNames.slice(0);
	        var index = activeNames.indexOf(item.name);

	        if (index > -1) {
	          activeNames.splice(index, 1);
	        } else {
	          activeNames.push(item.name);
	        }
	        this.setActiveNames(activeNames);
	      }
	    }
	  },

	  created: function created() {
	    this.$on('item-click', this.handleItemClick);
	  }
	};

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-collapse"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }

/******/ });