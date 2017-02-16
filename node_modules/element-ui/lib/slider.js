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

	module.exports = __webpack_require__(241);


/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(242);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(243)

	/* template */
	var __vue_template__ = __webpack_require__(246)
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

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(244);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _tooltip = __webpack_require__(245);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _dom = __webpack_require__(90);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSlider',

	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      type: Number,
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    },
	    showInputControls: {
	      type: Boolean,
	      default: true
	    },
	    showStops: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  components: {
	    ElInputNumber: _inputNumber2.default,
	    ElTooltip: _tooltip2.default
	  },

	  data: function data() {
	    return {
	      precision: 0,
	      inputValue: null,
	      timeout: null,
	      hovering: false,
	      dragging: false,
	      startX: 0,
	      currentX: 0,
	      startPos: 0,
	      newPos: null,
	      oldValue: this.value,
	      currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
	    };
	  },


	  watch: {
	    inputValue: function inputValue(val) {
	      this.$emit('input', Number(val));
	    },
	    value: function value(val) {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.updatePopper();
	      });
	      if (typeof val !== 'number' || isNaN(val) || val < this.min) {
	        this.$emit('input', this.min);
	        return;
	      }
	      if (val > this.max) {
	        this.$emit('input', this.max);
	        return;
	      }
	      this.inputValue = val;
	      this.setPosition((val - this.min) * 100 / (this.max - this.min));
	    }
	  },

	  methods: {
	    handleMouseEnter: function handleMouseEnter() {
	      this.hovering = true;
	      this.$refs.tooltip.showPopper = true;
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hovering = false;
	      this.$refs.tooltip.showPopper = false;
	    },
	    updatePopper: function updatePopper() {
	      this.$refs.tooltip.updatePopper();
	    },
	    setPosition: function setPosition(newPos) {
	      if (newPos < 0) {
	        newPos = 0;
	      } else if (newPos > 100) {
	        newPos = 100;
	      }

	      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	      var steps = Math.round(newPos / lengthPerStep);
	      var value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
	      value = parseFloat(value.toFixed(this.precision));
	      this.$emit('input', value);
	      this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
	      if (!this.dragging) {
	        if (this.value !== this.oldValue) {
	          this.$emit('change', this.value);
	          this.oldValue = this.value;
	        }
	      }
	    },
	    onSliderClick: function onSliderClick(event) {
	      if (this.disabled || this.dragging) return;
	      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	      this.setPosition((event.clientX - sliderOffsetLeft) / this.$sliderWidth * 100);
	    },
	    onInputChange: function onInputChange() {
	      if (this.value === '') {
	        return;
	      }
	      if (!isNaN(this.value)) {
	        this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
	      }
	    },
	    onDragStart: function onDragStart(event) {
	      this.dragging = true;
	      this.startX = event.clientX;
	      this.startPos = parseInt(this.currentPosition, 10);
	    },
	    onDragging: function onDragging(event) {
	      if (this.dragging) {
	        this.$refs.tooltip.showPopper = true;
	        this.currentX = event.clientX;
	        var diff = (this.currentX - this.startX) / this.$sliderWidth * 100;
	        this.newPos = this.startPos + diff;
	        this.setPosition(this.newPos);
	      }
	    },
	    onDragEnd: function onDragEnd() {
	      var _this2 = this;

	      if (this.dragging) {
	        /*
	         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
	         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
	         */
	        setTimeout(function () {
	          _this2.dragging = false;
	          _this2.$refs.tooltip.showPopper = false;
	          _this2.setPosition(_this2.newPos);
	        }, 0);
	        window.removeEventListener('mousemove', this.onDragging);
	        window.removeEventListener('mouseup', this.onDragEnd);
	        window.removeEventListener('contextmenu', this.onDragEnd);
	      }
	    },
	    onButtonDown: function onButtonDown(event) {
	      if (this.disabled) return;
	      this.onDragStart(event);
	      window.addEventListener('mousemove', this.onDragging);
	      window.addEventListener('mouseup', this.onDragEnd);
	      window.addEventListener('contextmenu', this.onDragEnd);
	    }
	  },

	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt((0, _dom.getStyle)(this.$refs.slider, 'width'), 10);
	    },
	    stops: function stops() {
	      var stopCount = (this.max - this.value) / this.step;
	      var currentLeft = parseFloat(this.currentPosition);
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      var result = [];
	      for (var i = 1; i < stopCount; i++) {
	        result.push(currentLeft + i * stepWidth);
	      }
	      return result;
	    }
	  },

	  created: function created() {
	    if (typeof this.value !== 'number' || isNaN(this.value) || this.value < this.min) {
	      this.$emit('input', this.min);
	    } else if (this.value > this.max) {
	      this.$emit('input', this.max);
	    }
	    var precisions = [this.min, this.max, this.step].map(function (item) {
	      var decimal = ('' + item).split('.')[1];
	      return decimal ? decimal.length : 0;
	    });
	    this.precision = Math.max.apply(null, precisions);
	    this.inputValue = this.inputValue || this.value;
	  }
	}; //
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

/***/ },

/***/ 244:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input-number");

/***/ },

/***/ 245:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tooltip");

/***/ },

/***/ 246:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-slider"
	  }, [(_vm.showInput) ? _c('el-input-number', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": _vm.step,
	      "disabled": _vm.disabled,
	      "controls": _vm.showInputControls,
	      "min": _vm.min,
	      "max": _vm.max,
	      "size": "small"
	    },
	    domProps: {
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.inputValue = $event
	      }
	    },
	    nativeOn: {
	      "keyup": function($event) {
	        _vm.onInputChange($event)
	      }
	    }
	  }) : _vm._e(), _c('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': _vm.showInput, 'disabled': _vm.disabled
	    },
	    on: {
	      "click": _vm.onSliderClick
	    }
	  }, [_c('div', {
	    staticClass: "el-slider__bar",
	    style: ({
	      width: _vm.currentPosition
	    })
	  }), _c('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    },
	    style: ({
	      left: _vm.currentPosition
	    }),
	    on: {
	      "mouseenter": _vm.handleMouseEnter,
	      "mouseleave": _vm.handleMouseLeave,
	      "mousedown": _vm.onButtonDown
	    }
	  }, [_c('el-tooltip', {
	    ref: "tooltip",
	    attrs: {
	      "placement": "top"
	    }
	  }, [_c('span', {
	    slot: "content"
	  }, [_vm._v(_vm._s(_vm.value))]), _c('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    }
	  })])], 1), _vm._l((_vm.stops), function(item) {
	    return (_vm.showStops) ? _c('div', {
	      staticClass: "el-slider__stop",
	      style: ({
	        'left': item + '%'
	      })
	    }) : _vm._e()
	  })], 2)], 1)
	},staticRenderFns: []}

/***/ }

/******/ });