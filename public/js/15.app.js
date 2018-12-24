webpackJsonp([15],{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(741)
/* template */
var __vue_template__ = __webpack_require__(742)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\manage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-432b45dc", Component.options)
  } else {
    hotAPI.reload("data-v-432b45dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    data: function data() {
        return {};
    },


    methods: {
        /** 数据库备份 */
        databaseBackup: function databaseBackup() {
            console.log('databaseBackup-----------');
            window.location.href = this.$basePath + '/database/backup';
        }
    },
    mounted: function mounted() {}
};

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            {
              staticStyle: {
                "border-bottom": "#eee solid 1px",
                padding: "0.2rem"
              },
              attrs: { span: 24 }
            },
            [
              _c(
                "div",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "success" },
                      on: { click: _vm.databaseBackup }
                    },
                    [_vm._v("数据库备份")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-432b45dc", module.exports)
  }
}

/***/ })

});