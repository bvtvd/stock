webpackJsonp([21],{

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(726)
}
var normalizeComponent = __webpack_require__(37)
/* script */
var __vue_script__ = __webpack_require__(728)
/* template */
var __vue_template__ = __webpack_require__(729)
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
Component.options.__file = "resources\\assets\\js\\views\\repertory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5acec7ef", Component.options)
  } else {
    hotAPI.reload("data-v-5acec7ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(727);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("36b75af6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5acec7ef\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./repertory.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5acec7ef\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./repertory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n", ""]);

// exports


/***/ }),

/***/ 728:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            uri: this.$adminPath + 'repertory', //当前页面的url
            tableData: [], //表格数据
            formData: {}, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '120px',
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

            tagType: ''

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
                    self.pageData.page = Number(res.data.data.current_page);
                    self.pageData.per_page = Number(res.data.data.per_page);
                    self.pageData.total = Number(res.data.data.total);
                    self.tableData = res.data.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        store: function store(formName) {
            //保存数据
            var self = this;
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');

                    self.$axios.post(self.uri, self.formData).then(function (res) {
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
        viewForEdit: function viewForEdit(index, row) {
            //显示编辑视图
            var self = this;
            self.formData = Object.assign({}, row);

            self.dialogTitle = '查看';
            self.formData.repertory_type = this.formatType(self.formData);
            self.formData.status = this.formatStatus(self.formData);
            self.methodType = 0; //设置请求方法为修改
            self.dialogFormVisible = true;
        },
        delHandle: function delHandle(row) {
            //删除
            var self = this;

            this.$confirm('删除后不可恢复, 是否继续?', '提示', {
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
        formatType: function formatType(row) {
            return ['', '肉类冻品冷冻库', '果蔬保鲜库', '茶叶保鲜库'][row.repertory_type];
        },
        formatStatus: function formatStatus(row) {
            return row.status == 1 ? '已处理' : '未处理';
        },
        formatTime: function formatTime(row) {

            if (Number(row.is_overdue) <= 0 && Number(row.is_overdue) >= -10) {
                return 1;
            } else if (Number(row.is_overdue) > 0) {
                return 2;
            }
            return 3;
        },
        setStatus: function setStatus(row) {
            //改变状态
            var self = this;

            this.$confirm('确认改变状态吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$emit('showLoading');
                self.$axios.post(self.uri + '/' + row.id, { _method: 'PUT' }).then(function (res) {
                    self.$emit('showLoading');

                    if (res.data.code == 1000) {
                        self.$message.success('改变成功');
                        self.getData();
                    } else {
                        self.$message.error('改变失败');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function () {
                self.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        }
    },
    mounted: function mounted() {
        this.getData();
    }
};

/***/ }),

/***/ 729:
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
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入申请人姓名" },
                    model: {
                      value: _vm.filters.proposer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "proposer_name", $$v)
                      },
                      expression: "filters.proposer_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入申请人联系方式" },
                    model: {
                      value: _vm.filters.proposer_phone,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "proposer_phone", $$v)
                      },
                      expression: "filters.proposer_phone"
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
                    "el-select",
                    {
                      attrs: { placeholder: "请选择处理状态" },
                      model: {
                        value: _vm.filters.status,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "status", $$v)
                        },
                        expression: "filters.status"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "已处理", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "未处理", value: "0" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择仓库类型" },
                      model: {
                        value: _vm.filters.repertory_type,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "repertory_type", $$v)
                        },
                        expression: "filters.repertory_type"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "肉类冻品冷冻库", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "果蔬保鲜库", value: "2" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "茶叶保鲜库", value: "3" }
                      })
                    ],
                    1
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
            attrs: { prop: "id", label: "#", align: "center", width: "40" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "proposer_name",
              label: "申请人姓名",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "proposer_phone",
              label: "申请人电话",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              formatter: _vm.formatType,
              prop: "repertory_type",
              label: "仓库类型",
              align: "center",
              width: "200"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "lease_time_end",
              label: "租赁到期时间",
              align: "center"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm.formatTime(scope.row) == 1
                      ? _c(
                          "el-popover",
                          { attrs: { trigger: "hover", placement: "top" } },
                          [
                            _c("p", [_vm._v("该仓库即将过期!")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "name-wrapper",
                                attrs: { slot: "reference" },
                                slot: "reference"
                              },
                              [
                                _c(
                                  "el-tag",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    attrs: { type: "danger" }
                                  },
                                  [_vm._v(_vm._s(scope.row.lease_time_end))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      : _vm.formatTime(scope.row) == 2
                        ? _c(
                            "el-popover",
                            { attrs: { trigger: "hover", placement: "top" } },
                            [
                              _c("p", [_vm._v("该仓库已过期!")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "name-wrapper",
                                  attrs: { slot: "reference" },
                                  slot: "reference"
                                },
                                [
                                  _c(
                                    "el-tag",
                                    { staticStyle: { cursor: "pointer" } },
                                    [_vm._v(_vm._s(scope.row.lease_time_end))]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        : _c("span", [_vm._v(_vm._s(scope.row.lease_time_end))])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "status", label: "状态", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.status == 0
                      ? _c(
                          "el-tag",
                          {
                            staticStyle: { cursor: "pointer" },
                            attrs: { type: "danger" }
                          },
                          [_vm._v(_vm._s(_vm.formatStatus(scope.row)))]
                        )
                      : _c("el-tag", { staticStyle: { cursor: "pointer" } }, [
                          _vm._v(_vm._s(_vm.formatStatus(scope.row)))
                        ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "提交时间", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.status == 0
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "small" },
                            on: {
                              click: function($event) {
                                _vm.setStatus(scope.row)
                              }
                            }
                          },
                          [_vm._v("改变状态")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small" },
                        on: {
                          click: function($event) {
                            _vm.viewForEdit(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("查看")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small", type: "danger" },
                        on: {
                          click: function($event) {
                            _vm.delHandle(scope.row)
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
                { attrs: { label: "申请人姓名" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.proposer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "proposer_name", $$v)
                      },
                      expression: "formData.proposer_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "申请人联系方式" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.proposer_phone,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "proposer_phone", $$v)
                      },
                      expression: "formData.proposer_phone"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "仓库类型" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.repertory_type,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "repertory_type", $$v)
                      },
                      expression: "formData.repertory_type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "处理状态" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.status,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "status", $$v)
                      },
                      expression: "formData.status"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "租赁开始时间" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.lease_time_start,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "lease_time_start", $$v)
                      },
                      expression: "formData.lease_time_start"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "租赁结束时间" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.lease_time_end,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "lease_time_end", $$v)
                      },
                      expression: "formData.lease_time_end"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "申请提交时间" } },
                [
                  _c("el-input", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.formData.created_at,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "created_at", $$v)
                      },
                      expression: "formData.created_at"
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5acec7ef", module.exports)
  }
}

/***/ })

});