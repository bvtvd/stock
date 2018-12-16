webpackJsonp([29],{

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(763)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(765)
/* template */
var __vue_template__ = __webpack_require__(766)
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
Component.options.__file = "resources\\assets\\js\\views\\finance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e979f06", Component.options)
  } else {
    hotAPI.reload("data-v-1e979f06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(764);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("03d1fdb4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e979f06\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e979f06\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.upload-storage-appendix input[type=\"file\"] {\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 765:
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
    data: function data() {

        return {
            currentUrl: this.$adminPath + 'finance', //当前页面的url
            tableData: [], //表格数据
            formData: {}, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '20%',
            filters: {}, //搜索
            dialogTitle: '新增入库信息', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },

            rules: {//验证规则

            },
            types: [{
                id: 1,
                name: '收入'
            }, {
                id: 2,
                name: '支出'
            }],
            products: [],
            fileList: [],
            showContract: 'display:none;'

        };
    },

    methods: {
        getData: function getData() {
            var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            //获取数据
            var self = this;
            var parm = Object.assign(filters, self.pageData);

            self.$axios.get(self.currentUrl, { params: parm }).then(function (res) {

                if (res.data.code == 1000) {
                    self.pageData.page = Number(res.data.data.current_page);
                    self.pageData.per_page = Number(res.data.data.per_page);
                    self.pageData.total = Number(res.data.data.total);
                    self.tableData = res.data.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        create: function create() {
            //显示添加页面
            var self = this;
            self.formData = {};

            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '新增收支信息';

            self.dialogFormVisible = true;
        },
        store: function store(formName) {
            //保存数据
            var self = this;
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');

                    self.$axios.post(self.currentUrl, self.formData).then(function (res) {
                        self.$emit('showLoading');

                        if (res.data.code == 1000) {
                            self.dialogFormVisible = false;
                            self.$message.success('添加成功');
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
        edit: function edit(index, row) {
            //显示编辑视图
            var self = this;
            self.formData = Object.assign({}, row);

            self.dialogTitle = '编辑收支信息';

            self.methodType = 0; //设置请求方法为修改
            self.dialogFormVisible = true;
        },
        update: function update(formName) {
            //更新数据
            var self = this;
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');
                    self.formData._method = 'PUT';

                    self.$axios.post(self.currentUrl + '/' + self.formData.id, self.formData).then(function (res) {
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
        destroy: function destroy(row) {
            //删除
            var self = this;

            this.$confirm('删除后不可恢复, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$emit('showLoading');
                self.$axios.post(self.currentUrl + '/' + row.id, { _method: 'delete' }).then(function (res) {
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
        handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview: function handlePreview(file) {
            console.log(file);
        },
        handleUploadSuccess: function handleUploadSuccess(res, file) {
            this.formData.appendix = res.data.url;
            this.formData.appendix_name = res.data.name;
        },
        fmoney: function fmoney(s, n) {
            n = n > 0 && n <= 20 ? n : 2;
            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
            var l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
            var t = "";
            for (var i = 0; i < l.length; i++) {
                t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
            }
            return t.split("").reverse().join("") + "." + r;
        }
    },
    mounted: function mounted() {
        this.getData();
    }
};

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-col",
        {
          staticClass: "toolbar",
          staticStyle: { "padding-bottom": "0px" },
          attrs: { span: 24 }
        },
        [
          _c(
            "el-form",
            { attrs: { inline: true, model: _vm.filters } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "项目" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.filters.project,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "project", $$v)
                      },
                      expression: "filters.project"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "备注信息" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.filters.remarks,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "remarks", $$v)
                      },
                      expression: "filters.remarks"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.filterData()
                        }
                      }
                    },
                    [_vm._v("查询")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "warning" },
                      on: {
                        click: function($event) {
                          _vm.reset()
                        }
                      }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.create()
                        }
                      }
                    },
                    [_vm._v("新增")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
        [
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "时间", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "project", label: "项目", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "income", label: "收入", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.income, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "expend", label: "支付", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.expend, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "balance", label: "结存", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.balance, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "appendix_name", label: "附件", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "remarks", label: "备注", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small" },
                        on: {
                          click: function($event) {
                            _vm.edit(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small", type: "danger" },
                        on: {
                          click: function($event) {
                            _vm.destroy(scope.row)
                          }
                        }
                      },
                      [_vm._v("删除")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      [
        _c(
          "div",
          { staticClass: "block", staticStyle: { float: "right" } },
          [
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.pageData.page,
                "page-sizes": [10, 15, 30, 50],
                "page-size": _vm.pageData.per_page,
                layout: "total, sizes, prev, pager, next, jumper",
                total: _vm.pageData.total
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange
              }
            })
          ],
          1
        )
      ],
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: _vm.dialogTitle, visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "ruleForm",
              attrs: {
                model: _vm.formData,
                rules: _vm.rules,
                "label-width": _vm.formLabelWidth
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "项目", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.project,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "project", $$v)
                      },
                      expression: "formData.project"
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
                    label: "费用类型",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择费用类型" },
                      model: {
                        value: _vm.formData.type,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "type", $$v)
                        },
                        expression: "formData.type"
                      }
                    },
                    _vm._l(_vm.types, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "金额", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.money,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "money", $$v)
                      },
                      expression: "formData.money"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "备注", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.remarks,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "remarks", $$v)
                      },
                      expression: "formData.remarks"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "入库附件" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "upload-storage-appendix",
                      attrs: {
                        "on-preview": _vm.handlePreview,
                        "on-remove": _vm.handleRemove,
                        action: _vm.$adminPath + "appendix",
                        "on-success": _vm.handleUploadSuccess,
                        "file-list": _vm.fileList
                      }
                    },
                    [
                      _c(
                        "el-button",
                        { attrs: { size: "small", type: "primary" } },
                        [_vm._v("点击上传")]
                      )
                    ],
                    1
                  )
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
                      _vm.methodType
                        ? _vm.store("ruleForm")
                        : _vm.update("ruleForm")
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
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e979f06", module.exports)
  }
}

/***/ })

});