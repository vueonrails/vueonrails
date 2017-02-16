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

	module.exports = __webpack_require__(263);


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _component = __webpack_require__(264);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_component2.default.install = function (Vue) {
	  Vue.component(_component2.default.name, _component2.default);
	};

	exports.default = _component2.default;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(265)

	/* template */
	var __vue_template__ = __webpack_require__(266)
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

/***/ 265:
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
	//
	//
	//
	//

	exports.default = {
	  name: 'ElSwitch',
	  props: {
	    value: {
	      type: Boolean,
	      default: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number,
	      default: 0
	    },
	    onIconClass: {
	      type: String,
	      default: ''
	    },
	    offIconClass: {
	      type: String,
	      default: ''
	    },
	    onText: {
	      type: String,
	      default: 'ON'
	    },
	    offText: {
	      type: String,
	      default: 'OFF'
	    },
	    onColor: {
	      type: String,
	      default: ''
	    },
	    offColor: {
	      type: String,
	      default: ''
	    },
	    name: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      coreWidth: this.width,
	      buttonStyle: {
	        transform: ''
	      }
	    };
	  },

	  computed: {
	    hasText: function hasText() {
	      /* istanbul ignore next */
	      return this.onText || this.offText;
	    },

	    _value: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.$emit('input', val);
	      }
	    }
	  },
	  watch: {
	    value: function value() {
	      if (this.onColor || this.offColor) {
	        this.setBackgroundColor();
	      }
	      this.handleButtonTransform();
	    }
	  },
	  methods: {
	    handleChange: function handleChange(event) {
	      this.$emit('change', event.currentTarget.checked);
	    },
	    handleButtonTransform: function handleButtonTransform() {
	      this.buttonStyle.transform = this.value ? 'translate(' + (this.coreWidth - 20) + 'px, 2px)' : 'translate(2px, 2px)';
	    },
	    setBackgroundColor: function setBackgroundColor() {
	      var newColor = this.value ? this.onColor : this.offColor;
	      this.$refs.core.style.borderColor = newColor;
	      this.$refs.core.style.backgroundColor = newColor;
	    }
	  },
	  mounted: function mounted() {
	    /* istanbul ignore if */
	    if (this.width === 0) {
	      this.coreWidth = this.hasText ? 58 : 46;
	    }
	    this.handleButtonTransform();
	    if (this.onColor || this.offColor) {
	      this.setBackgroundColor();
	    }
	  }
	};

/***/ },

/***/ 266:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "el-switch",
	    class: {
	      'is-disabled': _vm.disabled, 'el-switch--wide': _vm.hasText
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.disabled),
	      expression: "disabled"
	    }],
	    staticClass: "el-switch__mask"
	  }), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm._value),
	      expression: "_value"
	    }],
	    staticClass: "el-switch__input",
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": Array.isArray(_vm._value) ? _vm._i(_vm._value, null) > -1 : (_vm._value)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm._value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm._value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm._value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm._value = $$c
	        }
	      }, _vm.handleChange]
	    }
	  }), _c('span', {
	    ref: "core",
	    staticClass: "el-switch__core",
	    style: ({
	      'width': _vm.coreWidth + 'px'
	    })
	  }, [_c('span', {
	    staticClass: "el-switch__button",
	    style: (_vm.buttonStyle)
	  })]), _c('transition', {
	    attrs: {
	      "name": "label-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.value),
	      expression: "value"
	    }],
	    staticClass: "el-switch__label el-switch__label--left",
	    style: ({
	      'width': _vm.coreWidth + 'px'
	    })
	  }, [(_vm.onIconClass) ? _c('i', {
	    class: [_vm.onIconClass]
	  }) : _vm._e(), (!_vm.onIconClass && _vm.onText) ? _c('span', [_vm._v(_vm._s(_vm.onText))]) : _vm._e()])]), _c('transition', {
	    attrs: {
	      "name": "label-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.value),
	      expression: "!value"
	    }],
	    staticClass: "el-switch__label el-switch__label--right",
	    style: ({
	      'width': _vm.coreWidth + 'px'
	    })
	  }, [(_vm.offIconClass) ? _c('i', {
	    class: [_vm.offIconClass]
	  }) : _vm._e(), (!_vm.offIconClass && _vm.offText) ? _c('span', [_vm._v(_vm._s(_vm.offText))]) : _vm._e()])])], 1)
	},staticRenderFns: []}

/***/ }

/******/ });