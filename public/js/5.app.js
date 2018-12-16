webpackJsonp([5],{

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(712)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(714)
/* template */
var __vue_template__ = __webpack_require__(715)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d181c9dc"
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
Component.options.__file = "resources\\assets\\js\\views\\product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d181c9dc", Component.options)
  } else {
    hotAPI.reload("data-v-d181c9dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(713);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("67f81b9f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d181c9dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d181c9dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row[data-v-d181c9dc] {\n    background: #ff4d51;\n}\n.el-table .green-row[data-v-d181c9dc] {\n    background: #00ff00;\n}\n.demo-table-expand[data-v-d181c9dc] {\n    font-size: 0;\n}\n.demo-table-expand label[data-v-d181c9dc] {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-d181c9dc] {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 714:
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
//
//
//
//
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
            currentUrl: this.$adminPath + 'product', //当前页面的url
            tableData: [], //表格数据
            formData: {}, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '20%',
            filters: {}, //搜索
            dialogTitle: '', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },

            rules: {//验证规则

            },
            category: []
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
            self.formData = {
                status: '1'
            };

            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '新增产品';

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

            self.formData.status = String(self.formData.status);
            self.dialogTitle = '编辑产品';

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
        getCategory: function getCategory() {
            var self = this;

            self.$axios.get(self.$adminPath + 'category?old=1').then(function (res) {
                self.category = res.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted: function mounted() {
        this.getData();
        this.getCategory();
    }
};

/***/ }),

/***/ 715:
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
                { attrs: { label: "产品名称" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.filters.product_name,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "product_name", $$v)
                      },
                      expression: "filters.product_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "产品分类" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.filters.category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "category_id", $$v)
                        },
                        expression: "filters.category_id"
                      }
                    },
                    _vm._l(_vm.category, function(item) {
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
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "el-form",
                      {
                        staticClass: "demo-table-expand",
                        attrs: { "label-position": "left", inline: "" }
                      },
                      [
                        _c("el-form-item", { attrs: { label: "产品名称" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.name))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "产品分类" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.category.name))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "市场单价" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.market_price))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "计量单位" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.metering_unit))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "型号规格" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.spec))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "添加人" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.user.username))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "添加时间" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.created_at))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "产品状态" } }, [
                          _c(
                            "span",
                            [
                              _c(
                                "el-tag",
                                {
                                  attrs: {
                                    type:
                                      props.row.status === "0"
                                        ? "danger"
                                        : "success",
                                    "close-transition": ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        props.row.status === "0"
                                          ? "禁用"
                                          : "启用"
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "详情" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.desc))])
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "id", label: "#", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "name",
              label: "产品名称",
              align: "center",
              width: "400"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "category.name", label: "产品分类", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "market_price", label: "市场单价", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "metering_unit", label: "计量单位", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "spec", label: "型号规格", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "user.username", label: "添加人", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "添加时间", align: "center" }
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
                {
                  attrs: {
                    label: "产品名称",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.name,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "name", $$v)
                      },
                      expression: "formData.name"
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
                    label: "产品分类",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.formData.category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "category_id", $$v)
                        },
                        expression: "formData.category_id"
                      }
                    },
                    _vm._l(_vm.category, function(item) {
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
                {
                  attrs: {
                    label: "市场单价",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.market_price,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "market_price", $$v)
                      },
                      expression: "formData.market_price"
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
                    label: "计量单位",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.metering_unit,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "metering_unit", $$v)
                      },
                      expression: "formData.metering_unit"
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
                    label: "型号规格",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.spec,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "spec", $$v)
                      },
                      expression: "formData.spec"
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
                    label: "详情",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "desc", $$v)
                      },
                      expression: "formData.desc"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "状态", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-switch", {
                    attrs: {
                      "on-text": "启用",
                      "on-value": "1",
                      "off-text": "禁用",
                      "off-value": "0"
                    },
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
                {
                  attrs: {
                    label: "排序",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "number", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.sort,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "sort", $$v)
                      },
                      expression: "formData.sort"
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
    require("vue-hot-reload-api")      .rerender("data-v-d181c9dc", module.exports)
  }
}

/***/ })

});