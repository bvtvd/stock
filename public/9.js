webpackJsonp([9],{

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(767)
}
var normalizeComponent = __webpack_require__(37)
/* script */
var __vue_script__ = __webpack_require__(769)
/* template */
var __vue_template__ = __webpack_require__(770)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\views\\informationType.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aac71bae", Component.options)
  } else {
    hotAPI.reload("data-v-aac71bae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(768);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("373c9fa0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aac71bae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./informationType.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aac71bae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./informationType.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n.avatar-uploader input{\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n.content-class img{\n    width: 400px;\n}\n", ""]);

// exports


/***/ }),

/***/ 769:
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
    data: function data() {

        return {
            uri: this.$adminPath + 'informationType', //当前页面的url
            tableData: [], //表格数据
            formData: {
                category: [{
                    name: '',
                    type: 1
                }, {
                    name: '',
                    type: 2
                }, {
                    name: '',
                    type: 3
                }, {
                    name: '',
                    type: 4
                }]
            }, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '20%',
            filters: {}, //搜索
            dialogTitle: '添加', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },

            rules: {//验证规则

            },
            imageUrl: '',
            editorOption: {}
        };
    },

    methods: {
        getData: function getData() {
            var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            //获取数据
            var self = this;
            var parm = Object.assign(filters, self.pageData);

            self.$axios.get(self.uri, { params: parm }).then(function (res) {

                if (res.data.code == 1000) {

                    self.formData.category = res.data.data;
                    self.formData.category[0].type = 1;
                    self.formData.category[1].type = 2;
                    self.formData.category[2].type = 3;
                    self.formData.category[3].type = 4; //1=相关政策 2=产品资讯 3=市场资讯 4=产地资讯
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        update: function update(formName) {
            //更新数据
            var self = this;
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');
                    self.formData._method = 'PUT';
                    self.$axios.post(self.uri + '/' + self.formData.id, self.formData).then(function (res) {
                        self.$emit('showLoading');

                        if (res.data.code == 1000) {
                            self.formData = {};
                            self.dialogFormVisible = false;
                            self.$message.success('编辑成功');
                            self.getData();
                        } else {
                            self.$message.error(res.data.msg);
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                } else {
                    return false;
                }
            });
        },
        delHandle: function delHandle(row) {
            //删除
            var self = this;

            this.$confirm('确定删除吗? 删除后将不可恢复!', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$emit('showLoading');
                self.$axios.post(self.uri + '/' + row.id, { _method: 'delete' }).then(function (res) {
                    self.$emit('showLoading');

                    if (res.data.code == 1000) {
                        self.$message.success('删除成功');
                        self.getData();
                    } else {
                        self.$message.error('删除失败');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function () {
                self.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        filterData: function filterData() {
            //搜索
            this.getData(this.filters);
        },
        handleSizeChange: function handleSizeChange(val) {
            //改变每页条数
            this.pageData.per_page = val;
            this.getData();
        },
        handleCurrentChange: function handleCurrentChange(val) {
            //翻页
            this.pageData.page = val;
            this.getData();
        },
        reset: function reset() {
            //重置搜索表单
            this.filters = {};
            this.getData();
        },
        formatStatus: function formatStatus(row) {
            return ['禁用', '正常'][row.status];
        }
    },
    mounted: function mounted() {
        this.getData();
    }
};

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-form",
        {
          ref: "ruleForm",
          staticStyle: { width: "500px" },
          attrs: { model: _vm.formData, rules: _vm.rules }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                label: "栏目一名称",
                "label-width": _vm.formLabelWidth,
                prop: "name"
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.formData.category[0].name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.category[0], "name", $$v)
                  },
                  expression: "formData.category[0].name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "栏目二名称",
                "label-width": _vm.formLabelWidth,
                prop: "name"
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.formData.category[1].name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.category[1], "name", $$v)
                  },
                  expression: "formData.category[1].name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "栏目三名称",
                "label-width": _vm.formLabelWidth,
                prop: "name"
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.formData.category[2].name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.category[2], "name", $$v)
                  },
                  expression: "formData.category[2].name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "栏目四名称",
                "label-width": _vm.formLabelWidth,
                prop: "name"
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.formData.category[3].name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.category[3], "name", $$v)
                  },
                  expression: "formData.category[3].name"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.dialogFormVisible = false
                }
              }
            },
            [_vm._v("取 消")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.update("ruleForm")
                }
              }
            },
            [_vm._v("确 定")]
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-aac71bae", module.exports)
  }
}

/***/ })

});