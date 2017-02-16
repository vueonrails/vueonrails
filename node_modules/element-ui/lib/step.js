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

	module.exports = __webpack_require__(251);


/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _step = __webpack_require__(252);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_step2.default.install = function (Vue) {
	  Vue.component(_step2.default.name, _step2.default);
	};

	exports.default = _step2.default;

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(253)

	/* template */
	var __vue_template__ = __webpack_require__(254)
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

/***/ 253:
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
	  name: 'ElStep',

	  props: {
	    title: String,
	    icon: String,
	    description: String,
	    status: {
	      type: String,
	      default: 'wait'
	    }
	  },

	  data: function data() {
	    return {
	      index: -1,
	      style: {},
	      lineStyle: {},
	      mainOffset: 0,
	      isLast: false,
	      currentStatus: this.status
	    };
	  },
	  created: function created() {
	    this.$parent.steps.push(this);
	  },


	  methods: {
	    updateStatus: function updateStatus(val) {
	      var prevChild = this.$parent.$children[this.index - 1];

	      if (val > this.index) {
	        this.currentStatus = this.$parent.finishStatus;
	      } else if (val === this.index) {
	        this.currentStatus = this.$parent.processStatus;
	      } else {
	        this.currentStatus = 'wait';
	      }

	      if (prevChild) prevChild.calcProgress(this.currentStatus);
	    },
	    calcProgress: function calcProgress(status) {
	      var step = 100;
	      var style = {};

	      style.transitionDelay = 150 * this.index + 'ms';
	      if (status === this.$parent.processStatus) {
	        step = 50;
	      } else if (status === 'wait') {
	        step = 0;
	        style.transitionDelay = -150 * this.index + 'ms';
	      }

	      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

	      this.lineStyle = style;
	    },
	    adjustPosition: function adjustPosition() {
	      this.style = {};
	      this.$parent.stepOffset = this.$el.getBoundingClientRect().width / (this.$parent.steps.length - 1);
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var parent = this.$parent;
	    var isCenter = parent.center;
	    var len = parent.steps.length;
	    var isLast = this.isLast = parent.steps[parent.steps.length - 1] === this;
	    var space = parent.space ? parent.space + 'px' : 100 / (isCenter ? len - 1 : len) + '%';

	    if (parent.direction === 'horizontal') {
	      this.style = { width: space };
	      if (parent.alignCenter) {
	        this.mainOffset = -this.$refs.title.getBoundingClientRect().width / 2 + 16 + 'px';
	      }
	      isCenter && isLast && this.adjustPosition();
	    } else {
	      if (!isLast) {
	        this.style = { height: space };
	      }
	    }

	    var unwatch = this.$watch('index', function (val) {
	      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
	      unwatch();
	    });
	  }
	};

/***/ },

/***/ 254:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-step",
	    class: ['is-' + _vm.$parent.direction],
	    style: ([_vm.style, _vm.isLast ? '' : {
	      marginRight: -_vm.$parent.stepOffset + 'px'
	    }])
	  }, [_c('div', {
	    staticClass: "el-step__head",
	    class: ['is-' + _vm.currentStatus, {
	      'is-text': !_vm.icon
	    }]
	  }, [_c('div', {
	    staticClass: "el-step__line",
	    class: ['is-' + _vm.$parent.direction, {
	      'is-icon': _vm.icon
	    }],
	    style: (_vm.isLast ? '' : {
	      marginRight: _vm.$parent.stepOffset + 'px'
	    })
	  }, [_c('i', {
	    staticClass: "el-step__line-inner",
	    style: (_vm.lineStyle)
	  })]), _c('span', {
	    staticClass: "el-step__icon"
	  }, [(_vm.currentStatus !== 'success' && _vm.currentStatus !== 'error') ? _vm._t("icon", [(_vm.icon) ? _c('i', {
	    class: ['el-icon-' + _vm.icon]
	  }) : _c('div', [_vm._v(_vm._s(_vm.index + 1))])]) : _c('i', {
	    class: ['el-icon-' + (_vm.currentStatus === 'success' ? 'check' : 'close')]
	  })], 2)]), _c('div', {
	    staticClass: "el-step__main",
	    style: ({
	      marginLeft: _vm.mainOffset
	    })
	  }, [_c('div', {
	    ref: "title",
	    staticClass: "el-step__title",
	    class: ['is-' + _vm.currentStatus]
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
	    staticClass: "el-step__description",
	    class: ['is-' + _vm.currentStatus]
	  }, [_vm._t("description", [_vm._v(_vm._s(_vm.description))])], 2)])])
	},staticRenderFns: []}

/***/ }

/******/ });