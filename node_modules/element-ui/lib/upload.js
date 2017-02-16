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

	module.exports = __webpack_require__(322);


/***/ },

/***/ 80:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _src = __webpack_require__(323);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_src2.default.install = function (Vue) {
	  Vue.component(_src2.default.name, _src2.default);
	};

	exports.default = _src2.default;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(324)
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


	module.exports = __vue_exports__


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadList = __webpack_require__(325);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _upload = __webpack_require__(329);

	var _upload2 = _interopRequireDefault(_upload);

	var _iframeUpload = __webpack_require__(336);

	var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

	var _progress = __webpack_require__(327);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	exports.default = {
	  name: 'ElUpload',

	  components: {
	    ElProgress: _progress2.default,
	    UploadList: _uploadList2.default,
	    Upload: _upload2.default,
	    IframeUpload: _iframeUpload2.default
	  },

	  props: {
	    action: {
	      type: String,
	      required: true
	    },
	    headers: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    data: Object,
	    multiple: Boolean,
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: Boolean,
	    thumbnailMode: Boolean,
	    showUploadList: {
	      type: Boolean,
	      default: true
	    },
	    accept: String,
	    type: {
	      type: String,
	      default: 'select'
	    },
	    beforeUpload: Function,
	    onRemove: {
	      type: Function,
	      default: noop
	    },
	    onChange: {
	      type: Function,
	      default: noop
	    },
	    onPreview: {
	      type: Function,
	      default: noop
	    },
	    onSuccess: {
	      type: Function,
	      default: noop
	    },
	    onProgress: {
	      type: Function,
	      default: noop
	    },
	    onError: {
	      type: Function,
	      default: noop
	    },
	    defaultFileList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },

	  data: function data() {
	    return {
	      fileList: [],
	      dragOver: false,
	      draging: false,
	      tempIndex: 1
	    };
	  },


	  watch: {
	    defaultFileList: {
	      immediate: true,
	      handler: function handler(fileList) {
	        var _this = this;

	        this.fileList = fileList.map(function (item) {
	          item.status = 'finished';
	          item.percentage = 100;
	          item.uid = Date.now() + _this.tempIndex++;
	          return item;
	        });
	      }
	    }
	  },

	  methods: {
	    handleStart: function handleStart(file) {
	      file.uid = Date.now() + this.tempIndex++;
	      var _file = {
	        status: 'uploading',
	        name: file.name,
	        size: file.size,
	        percentage: 0,
	        uid: file.uid,
	        showProgress: true
	      };

	      try {
	        _file.url = URL.createObjectURL(file);
	      } catch (err) {
	        console.error(err);
	        return;
	      }

	      this.fileList.push(_file);
	    },
	    handleProgress: function handleProgress(ev, file) {
	      var _file = this.getFile(file);
	      this.onProgress(ev, _file, this.fileList);
	      _file.percentage = ev.percent || 0;
	    },
	    handleSuccess: function handleSuccess(res, file) {
	      var _file = this.getFile(file);

	      if (_file) {
	        _file.status = 'finished';
	        _file.response = res;

	        this.onSuccess(res, _file, this.fileList);

	        setTimeout(function () {
	          _file.showProgress = false;
	        }, 1000);
	      }
	    },
	    handleError: function handleError(err, response, file) {
	      var _file = this.getFile(file);
	      var fileList = this.fileList;

	      _file.status = 'fail';

	      fileList.splice(fileList.indexOf(_file), 1);

	      this.onError(err, response, file);
	    },
	    handleRemove: function handleRemove(file) {
	      var fileList = this.fileList;
	      fileList.splice(fileList.indexOf(file), 1);
	      this.onRemove(file, fileList);
	    },
	    getFile: function getFile(file) {
	      var fileList = this.fileList;
	      var target;
	      fileList.every(function (item) {
	        target = file.uid === item.uid ? item : null;
	        return !target;
	      });
	      return target;
	    },
	    handlePreview: function handlePreview(file) {
	      if (file.status === 'finished') {
	        this.onPreview(file);
	      }
	    },
	    clearFiles: function clearFiles() {
	      this.fileList = [];
	    }
	  },

	  render: function render(h) {
	    var uploadList;

	    if (this.showUploadList && !this.thumbnailMode && this.fileList.length) {
	      uploadList = h(
	        _uploadList2.default,
	        {
	          attrs: {
	            files: this.fileList
	          },
	          on: {
	            'remove': this.handleRemove,
	            'preview': this.handlePreview
	          }
	        },
	        []
	      );
	    }

	    var props = {
	      props: {
	        type: this.type,
	        action: this.action,
	        multiple: this.multiple,
	        'before-upload': this.beforeUpload,
	        'with-credentials': this.withCredentials,
	        headers: this.headers,
	        name: this.name,
	        data: this.data,
	        accept: this.thumbnailMode ? 'image/gif, image/png, image/jpeg, image/bmp, image/webp' : this.accept,
	        'on-start': this.handleStart,
	        'on-progress': this.handleProgress,
	        'on-success': this.handleSuccess,
	        'on-error': this.handleError,
	        'on-preview': this.handlePreview,
	        'on-remove': this.handleRemove
	      },
	      ref: 'upload-inner'
	    };

	    var uploadComponent = typeof FormData !== 'undefined' || this.$isServer ? h(
	      'upload',
	      props,
	      [this.$slots.default]
	    ) : h(
	      'iframeUpload',
	      props,
	      [this.$slots.default]
	    );

	    if (this.type === 'select') {
	      return h(
	        'div',
	        { 'class': 'el-upload' },
	        [uploadList, uploadComponent, this.$slots.tip]
	      );
	    }

	    if (this.type === 'drag') {
	      return h(
	        'div',
	        { 'class': 'el-upload' },
	        [uploadComponent, this.$slots.tip, uploadList]
	      );
	    }
	  }
	};

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(326)

	/* template */
	var __vue_template__ = __webpack_require__(328)
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

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(80);

	var _locale2 = _interopRequireDefault(_locale);

	var _progress = __webpack_require__(327);

	var _progress2 = _interopRequireDefault(_progress);

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
	  mixins: [_locale2.default],

	  components: { ElProgress: _progress2.default },

	  props: {
	    files: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  methods: {
	    parsePercentage: function parsePercentage(val) {
	      return parseInt(val, 10);
	    }
	  }
	};

/***/ },

/***/ 327:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/progress");

/***/ },

/***/ 328:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition-group', {
	    staticClass: "el-upload__files",
	    attrs: {
	      "tag": "ul",
	      "name": "list"
	    }
	  }, _vm._l((_vm.files), function(file) {
	    return _c('li', {
	      key: file,
	      staticClass: "el-upload__file",
	      class: {
	        'is-finished': file.status === 'finished'
	      },
	      on: {
	        "click": function($event) {
	          _vm.$emit('clickFile', file)
	        }
	      }
	    }, [_c('a', {
	      staticClass: "el-upload__file__name",
	      on: {
	        "click": function($event) {
	          _vm.$emit('preview', file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-document"
	    }), _vm._v(_vm._s(file.name) + "\n    ")]), _c('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (file.status === 'finished'),
	        expression: "file.status === 'finished'"
	      }],
	      staticClass: "el-upload__btn-delete",
	      on: {
	        "click": function($event) {
	          _vm.$emit('remove', file)
	        }
	      }
	    }, [_vm._v(_vm._s(_vm.t('el.upload.delete')))]), (file.showProgress) ? _c('el-progress', {
	      attrs: {
	        "stroke-width": 2,
	        "percentage": _vm.parsePercentage(file.percentage),
	        "status": file.status === 'finished' && file.showProgress ? 'success' : ''
	      }
	    }) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(330)

	/* template */
	var __vue_template__ = __webpack_require__(335)
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

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ajax = __webpack_require__(331);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _cover = __webpack_require__(332);

	var _cover2 = _interopRequireDefault(_cover);

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
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: {
	    Cover: _cover2.default
	  },
	  props: {
	    type: String,
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    data: Object,
	    headers: Object,
	    withCredentials: Boolean,
	    multiple: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },

	  data: function data() {
	    return {
	      dragOver: false,
	      mouseover: false
	    };
	  },


	  computed: {
	    lastestFile: function lastestFile() {
	      var fileList = this.$parent.fileList;
	      return fileList[fileList.length - 1];
	    },
	    showCover: function showCover() {
	      var file = this.lastestFile;
	      return this.thumbnailMode && file && file.status !== 'fail';
	    },
	    thumbnailMode: function thumbnailMode() {
	      return this.$parent.thumbnailMode;
	    }
	  },

	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleChange: function handleChange(ev) {
	      var files = ev.target.files;

	      if (!files) {
	        return;
	      }
	      this.uploadFiles(files);
	      this.$refs.input.value = null;
	    },
	    uploadFiles: function uploadFiles(files) {
	      var _this = this;

	      var postFiles = Array.prototype.slice.call(files);
	      if (!this.multiple) {
	        postFiles = postFiles.slice(0, 1);
	      }

	      if (postFiles.length === 0) {
	        return;
	      }

	      postFiles.forEach(function (file) {
	        var isImage = _this.isImage(file.type);

	        if (_this.thumbnailMode && !isImage) {
	          return;
	        } else {
	          _this.upload(file);
	        }
	      });
	    },
	    upload: function upload(file) {
	      var _this2 = this;

	      if (!this.beforeUpload) {
	        return this.post(file);
	      }

	      var before = this.beforeUpload(file);
	      if (before && before.then) {
	        before.then(function (processedFile) {
	          if (Object.prototype.toString.call(processedFile) === '[object File]') {
	            _this2.post(processedFile);
	          } else {
	            _this2.post(file);
	          }
	        }, function () {
	          // this.$emit('cancel', file);
	        });
	      } else if (before !== false) {
	        this.post(file);
	      } else {
	        // this.$emit('cancel', file);
	      }
	    },
	    post: function post(file) {
	      var _this3 = this;

	      this.onStart(file);
	      var formData = new FormData();
	      formData.append(this.name, file);

	      (0, _ajax2.default)({
	        headers: this.headers,
	        withCredentials: this.withCredentials,
	        file: file,
	        data: this.data,
	        filename: this.name,
	        action: this.action,
	        onProgress: function onProgress(e) {
	          _this3.onProgress(e, file);
	        },
	        onSuccess: function onSuccess(res) {
	          _this3.onSuccess(res, file);
	        },
	        onError: function onError(err, response) {
	          _this3.onError(err, response, file);
	        }
	      });
	    },
	    onDrop: function onDrop(e) {
	      this.dragOver = false;
	      this.uploadFiles(e.dataTransfer.files);
	    },
	    handleClick: function handleClick() {
	      this.$refs.input.click();
	    }
	  }
	};

/***/ },

/***/ 331:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = upload;
	function getError(action, option, xhr) {
	  var msg = 'fail to post ' + action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  var action = option.action;

	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();

	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  formData.append(option.filename, option.file);

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    if (xhr.status < 200 || xhr.status >= 300) {
	      return option.onError(getError(action, option, xhr), getBody(xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  xhr.open('post', action, true);

	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  var headers = option.headers || {};

	  // if (headers['X-Requested-With'] !== null) {
	  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	  // }

	  for (var item in headers) {
	    if (headers.hasOwnProperty(item) && headers[item] !== null) {
	      xhr.setRequestHeader(item, headers[item]);
	    }
	  }
	  xhr.send(formData);
	}

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(333)

	/* template */
	var __vue_template__ = __webpack_require__(334)
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

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(80);

	var _locale2 = _interopRequireDefault(_locale);

	var _progress = __webpack_require__(327);

	var _progress2 = _interopRequireDefault(_progress);

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
	  mixins: [_locale2.default],

	  components: { ElProgress: _progress2.default },

	  props: {
	    image: {},
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	  data: function data() {
	    return {
	      mouseover: false
	    };
	  }
	};

/***/ },

/***/ 334:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.image) ? _c('div', {
	    staticClass: "el-dragger__cover",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "el-fade-in"
	    }
	  }, [(_vm.image.status === 'uploading') ? _c('el-progress', {
	    staticClass: "el-dragger__cover__progress",
	    attrs: {
	      "percentage": _vm.image.percentage,
	      "show-text": false,
	      "status": _vm.image.status === 'finished' ? 'success' : ''
	    }
	  }) : _vm._e()], 1), (_vm.image.status === 'finished') ? _c('div', {
	    staticClass: "el-dragger__cover__content",
	    on: {
	      "mouseenter": function($event) {
	        _vm.mouseover = true
	      },
	      "mouseleave": function($event) {
	        _vm.mouseover = false
	      }
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.image.url
	    }
	  }), _c('transition', {
	    attrs: {
	      "name": "el-fade-in"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.mouseover),
	      expression: "mouseover"
	    }],
	    staticClass: "el-dragger__cover__interact"
	  }, [_c('div', {
	    staticClass: "el-draggeer__cover__btns"
	  }, [_c('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        _vm.$parent.handleClick()
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-upload2"
	  }), _c('span', [_vm._v(_vm._s(_vm.t('el.upload.continue')))])]), _c('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        _vm.onPreview(_vm.image)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-view"
	  }), _c('span', [_vm._v(_vm._s(_vm.t('el.upload.preview')))])]), _c('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        _vm.onRemove(_vm.image)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-delete2"
	  }), _c('span', [_vm._v(_vm._s(_vm.t('el.upload.delete')))])])])])]), _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-bottom"
	    }
	  }, [_c('h4', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.mouseover),
	      expression: "mouseover"
	    }],
	    staticClass: "el-dragger__cover__title"
	  }, [_vm._v(_vm._s(_vm.image.name))])])], 1) : _vm._e()], 1) : _vm._e()
	},staticRenderFns: []}

/***/ },

/***/ 335:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-upload__inner",
	    class: {
	      'el-dragger': _vm.type === 'drag',
	        'is-dragOver': _vm.dragOver,
	        'is-showCover': _vm.showCover
	    },
	    on: {
	      "click": _vm.handleClick,
	      "drop": function($event) {
	        $event.preventDefault();
	        _vm.onDrop($event)
	      },
	      "dragover": function($event) {
	        $event.preventDefault();
	        _vm.dragOver = true
	      },
	      "dragleave": function($event) {
	        $event.preventDefault();
	        _vm.dragOver = false
	      }
	    }
	  }, [(!_vm.showCover) ? _vm._t("default") : _c('cover', {
	    attrs: {
	      "image": _vm.lastestFile,
	      "on-preview": _vm.onPreview,
	      "on-remove": _vm.onRemove
	    }
	  }), _c('input', {
	    ref: "input",
	    staticClass: "el-upload__input",
	    attrs: {
	      "type": "file",
	      "multiple": _vm.multiple,
	      "accept": _vm.accept
	    },
	    on: {
	      "change": _vm.handleChange
	    }
	  })], 2)
	},staticRenderFns: []}

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(337)
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


	module.exports = __vue_exports__


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _cover = __webpack_require__(332);

	var _cover2 = _interopRequireDefault(_cover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    Cover: _cover2.default
	  },
	  props: {
	    type: String,
	    data: {},
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },

	  data: function data() {
	    return {
	      dragOver: false,
	      mouseover: false,
	      domain: '',
	      file: null,
	      disabled: false
	    };
	  },


	  computed: {
	    lastestFile: function lastestFile() {
	      var fileList = this.$parent.fileList;
	      return fileList[fileList.length - 1];
	    },
	    showCover: function showCover() {
	      var file = this.lastestFile;
	      return this.thumbnailMode && file && file.status !== 'fail';
	    },
	    thumbnailMode: function thumbnailMode() {
	      return this.$parent.thumbnailMode;
	    }
	  },

	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.click();
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var file = ev.target.files[0];
	      this.file = file;
	      this.onStart(file);

	      var formNode = this.getFormNode();
	      var dataSpan = this.getFormDataNode();
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data(file);
	      }
	      var inputs = [];
	      for (var key in data) {
	        if (data.hasOwnProperty(key)) {
	          inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	        }
	      }
	      dataSpan.innerHTML = inputs.join('');
	      formNode.submit();
	      dataSpan.innerHTML = '';
	      this.disabled = true;
	    },
	    getFormNode: function getFormNode() {
	      return this.$refs.form;
	    },
	    getFormDataNode: function getFormDataNode() {
	      return this.$refs.data;
	    },
	    onDrop: function onDrop(e) {
	      e.preventDefault();
	      this.dragOver = false;
	      this.uploadFiles(e.dataTransfer.files);
	    },
	    handleDragover: function handleDragover(e) {
	      e.preventDefault();
	      this.onDrop = true;
	    },
	    handleDragleave: function handleDragleave(e) {
	      e.preventDefault();
	      this.onDrop = false;
	    },
	    onload: function onload(e) {
	      this.disabled = false;
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    !this.$isServer && window.addEventListener('message', function (event) {
	      var targetOrigin = new URL(_this.action).origin;
	      if (event.origin !== targetOrigin) {
	        return false;
	      }
	      var response = event.data;
	      if (response.result === 'success') {
	        _this.onSuccess(response, _this.file);
	      } else if (response.result === 'failed') {
	        _this.onSuccess(response, _this.file);
	      }
	    }, false);
	  },
	  render: function render(h) {
	    var cover = h(
	      'cover',
	      {
	        attrs: { image: this.lastestFile },
	        on: {
	          'preview': this.onPreview,
	          'remove': this.onRemove
	        }
	      },
	      []
	    );
	    var frameName = 'frame-' + Date.now();
	    return h(
	      'div',
	      {
	        'class': {
	          'el-upload__inner': true,
	          'el-dragger': this.type === 'drag',
	          'is-dragOver': this.dragOver,
	          'is-showCover': this.showCover
	        },
	        on: {
	          'click': this.handleClick
	        },
	        nativeOn: {
	          'drop': this.onDrop,
	          'dragover': this.handleDragover,
	          'dragleave': this.handleDragleave
	        }
	      },
	      [h(
	        'iframe',
	        {
	          on: {
	            'load': this.onload
	          },

	          ref: 'iframe',
	          attrs: { name: frameName
	          }
	        },
	        []
	      ), h(
	        'form',
	        { ref: 'form', attrs: { action: this.action, target: frameName, enctype: 'multipart/form-data', method: 'POST' }
	        },
	        [h(
	          'input',
	          {
	            'class': 'el-upload__input',
	            attrs: { type: 'file',

	              name: 'file',

	              accept: this.accept },
	            ref: 'input', on: {
	              'change': this.handleChange
	            }
	          },
	          []
	        ), h(
	          'input',
	          {
	            attrs: { type: 'hidden', name: 'documentDomain', value: this.$isServer ? '' : document.domain }
	          },
	          []
	        ), h(
	          'span',
	          { ref: 'data' },
	          []
	        )]
	      ), !this.showCover ? this.$slots.default : cover]
	    );
	  }
	};

/***/ }

/******/ });