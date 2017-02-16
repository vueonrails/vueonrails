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

	module.exports = __webpack_require__(40);


/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(41);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(46)
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

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _throttle = __webpack_require__(43);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(44);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _resizeEvent = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCarousel',

	  props: {
	    initialIndex: {
	      type: Number,
	      default: 0
	    },
	    height: String,
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    autoplay: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 3000
	    },
	    indicatorPosition: String,
	    indicator: {
	      type: Boolean,
	      default: true
	    },
	    arrow: {
	      type: String,
	      default: 'hover'
	    },
	    type: String
	  },

	  data: function data() {
	    return {
	      items: [],
	      activeIndex: -1,
	      containerWidth: 0,
	      timer: null,
	      hover: false
	    };
	  },


	  watch: {
	    activeIndex: function activeIndex(val, oldVal) {
	      this.resetItemPosition();
	      this.$emit('change', val, oldVal);
	    }
	  },

	  methods: {
	    handleMouseEnter: function handleMouseEnter() {
	      this.hover = true;
	      this.pauseTimer();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hover = false;
	      this.startTimer();
	    },
	    itemInStage: function itemInStage(item, index) {
	      var length = this.items.length;
	      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
	        return 'left';
	      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
	        return 'right';
	      }
	      return false;
	    },
	    handleButtonEnter: function handleButtonEnter(arrow) {
	      var _this = this;

	      this.items.forEach(function (item, index) {
	        if (arrow === _this.itemInStage(item, index)) {
	          item.hover = true;
	        }
	      });
	    },
	    handleButtonLeave: function handleButtonLeave() {
	      this.items.forEach(function (item) {
	        item.hover = false;
	      });
	    },
	    handleItemChange: function handleItemChange() {
	      var _this2 = this;

	      (0, _debounce2.default)(100, function () {
	        _this2.updateItems();
	      });
	    },
	    updateItems: function updateItems() {
	      this.items = this.$children.filter(function (child) {
	        return child.$options.name === 'ElCarouselItem';
	      });
	    },
	    resetItemPosition: function resetItemPosition() {
	      var _this3 = this;

	      this.items.forEach(function (item, index) {
	        item.translateItem(index, _this3.activeIndex);
	      });
	    },
	    playSlides: function playSlides() {
	      if (this.activeIndex < this.items.length - 1) {
	        this.activeIndex++;
	      } else {
	        this.activeIndex = 0;
	      }
	    },
	    pauseTimer: function pauseTimer() {
	      clearInterval(this.timer);
	    },
	    startTimer: function startTimer() {
	      if (this.interval <= 0 || !this.autoplay) return;
	      this.timer = setInterval(this.playSlides, this.interval);
	    },
	    setActiveItem: function setActiveItem(index) {
	      if (typeof index === 'string') {
	        var filteredItems = this.items.filter(function (item) {
	          return item.name === index;
	        });
	        if (filteredItems.length > 0) {
	          index = this.items.indexOf(filteredItems[0]);
	        }
	      }
	      index = Number(index);
	      if (isNaN(index) || index !== Math.floor(index)) {
	        ("production") !== 'production' && console.warn('[Element Warn][Carousel]index must be an integer.');
	        return;
	      }
	      var length = this.items.length;
	      if (index < 0) {
	        this.activeIndex = length - 1;
	      } else if (index >= length) {
	        this.activeIndex = 0;
	      } else {
	        this.activeIndex = index;
	      }
	    },
	    prev: function prev() {
	      this.setActiveItem(this.activeIndex - 1);
	    },
	    next: function next() {
	      this.setActiveItem(this.activeIndex + 1);
	    },
	    handleIndicatorClick: function handleIndicatorClick(index) {
	      this.activeIndex = index;
	    },
	    handleIndicatorHover: function handleIndicatorHover(index) {
	      if (this.trigger === 'hover' && index !== this.activeIndex) {
	        this.activeIndex = index;
	      }
	    }
	  },

	  created: function created() {
	    var _this4 = this;

	    this.throttledArrowClick = (0, _throttle2.default)(300, true, function (index) {
	      _this4.setActiveItem(index);
	    });
	    this.throttledIndicatorHover = (0, _throttle2.default)(300, function (index) {
	      _this4.handleIndicatorHover(index);
	    });
	  },
	  mounted: function mounted() {
	    var _this5 = this;

	    this.updateItems();
	    this.$nextTick(function () {
	      (0, _resizeEvent.addResizeListener)(_this5.$el, _this5.resetItemPosition);
	      if (_this5.initialIndex < _this5.items.length && _this5.initialIndex >= 0) {
	        _this5.activeIndex = _this5.initialIndex;
	      }
	      _this5.startTimer();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetItemPosition);
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

/***/ 43:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/throttle");

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/resize-event");

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-carousel",
	    class: {
	      'el-carousel--card': _vm.type === 'card'
	    },
	    on: {
	      "mouseenter": function($event) {
	        $event.stopPropagation();
	        _vm.handleMouseEnter($event)
	      },
	      "mouseleave": function($event) {
	        $event.stopPropagation();
	        _vm.handleMouseLeave($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-carousel__container",
	    style: ({
	      height: _vm.height
	    })
	  }, [_c('transition', {
	    attrs: {
	      "name": "carousel-arrow-left"
	    }
	  }, [(_vm.arrow !== 'never') ? _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.arrow === 'always' || _vm.hover),
	      expression: "arrow === 'always' || hover"
	    }],
	    staticClass: "el-carousel__arrow el-carousel__arrow--left",
	    on: {
	      "mouseenter": function($event) {
	        _vm.handleButtonEnter('left')
	      },
	      "mouseleave": _vm.handleButtonLeave,
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.throttledArrowClick(_vm.activeIndex - 1)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-left"
	  })]) : _vm._e()]), _c('transition', {
	    attrs: {
	      "name": "carousel-arrow-right"
	    }
	  }, [(_vm.arrow !== 'never') ? _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.arrow === 'always' || _vm.hover),
	      expression: "arrow === 'always' || hover"
	    }],
	    staticClass: "el-carousel__arrow el-carousel__arrow--right",
	    on: {
	      "mouseenter": function($event) {
	        _vm.handleButtonEnter('right')
	      },
	      "mouseleave": _vm.handleButtonLeave,
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.throttledArrowClick(_vm.activeIndex + 1)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-right"
	  })]) : _vm._e()]), _vm._t("default")], 2), (_vm.indicatorPosition !== 'none') ? _c('ul', {
	    staticClass: "el-carousel__indicators",
	    class: {
	      'el-carousel__indicators--outside': _vm.indicatorPosition === 'outside' || _vm.type === 'card'
	    }
	  }, _vm._l((_vm.items), function(item, index) {
	    return _c('li', {
	      staticClass: "el-carousel__indicator",
	      class: {
	        'is-active': index === _vm.activeIndex
	      },
	      on: {
	        "mouseenter": function($event) {
	          _vm.throttledIndicatorHover(index)
	        },
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.handleIndicatorClick(index)
	        }
	      }
	    }, [_c('button', {
	      staticClass: "el-carousel__button"
	    })])
	  })) : _vm._e()])
	},staticRenderFns: []}

/***/ }

/******/ });