webpackJsonp([24],{

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(721)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(723)
/* template */
var __vue_template__ = __webpack_require__(724)
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
Component.options.__file = "resources\\assets\\js\\views\\admin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-352a6832", Component.options)
  } else {
    hotAPI.reload("data-v-352a6832", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(722);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("c841af2a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-352a6832\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./admin.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-352a6832\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n", ""]);

// exports


/***/ }),

/***/ 723:
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

exports.default = {
    data: function data() {
        var _this = this;

        var validatePass2 = function validatePass2(rule, value, callback) {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== _this.formData.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            uri: this.$adminPath + 'admin', //当前页面的url
            tableData: [], //表格数据
            formData: {
                roles: ''
            }, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '20%',
            filters: {
                status: ''
            }, //搜索
            dialogTitle: '添加管理员', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },
            options: [{
                value: '0',
                label: '禁用'
            }, {
                value: '1',
                label: '启用'
            }],
            roles: [{
                id: '0',
                name: '禁用'
            }],

            rules: { //验证规则
                name: [{ required: true, message: '请输入管理员姓名', trigger: 'blur' }, { min: 2, max: 16, message: '长度在 2 到 16个字符', trigger: 'blur' }],
                account: [{ required: true, message: '请输入管理员账号', trigger: 'blur' }, { min: 5, max: 16, message: '长度在 5 到 16个字符', trigger: 'blur' }],
                password: [{ required: true, message: '请输入管理员密码', trigger: 'blur' }, { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }],
                password_confirmation: [{ validator: validatePass2, trigger: 'blur' }]

            },
            passwordRuleEdit: [{ min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }],
            passwordRuleAdd: [{ required: true, message: '请输入管理员密码', trigger: 'blur' }, { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }]

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
        viewForAdd: function viewForAdd() {
            //显示添加页面
            var self = this;
            self.formData = {
                status: '1',
                roles: ''
            };
            self.rules.password = self.passwordRuleAdd;
            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '添加管理员';

            self.dialogFormVisible = true;
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
            self.formData.status = String(self.formData.status); //将账号状态转为字符串
            self.formData.roles = self.formData.roles[0] ? self.formData.roles[0]['id'] : ''; //将账号状态转为字符串
            self.formData.old_roles = self.formData.roles[0] ? self.formData.roles[0]['id'] : ''; //获取管理员当前账号 单角色取 下标0
            self.dialogTitle = '编辑管理员信息';
            self.rules.password = self.passwordRuleEdit;
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
            this.filters = {
                name: '',
                account: '',
                status: ''
            };
            this.getData();
        },
        statusFormat: function statusFormat(row, column) {
            //格式化状态
            return ['禁用', '启用'][row.status];
        },
        getRoles: function getRoles() {
            //获取角色
            var self = this;

            self.$axios.get(self.$adminPath + 'admin/role').then(function (res) {
                self.roles = res.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        rolesFormat: function rolesFormat(row) {
            //返回角色名称

            return row.roles[0] ? row.roles[0]['name'] : '未设置';
        }
    },
    mounted: function mounted() {
        this.getData();
        this.getRoles();
    }
};

/***/ }),

/***/ 724:
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
                    attrs: { placeholder: "请输入管理员姓名" },
                    model: {
                      value: _vm.filters.name,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "name", $$v)
                      },
                      expression: "filters.name"
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
                    attrs: { placeholder: "请输入管理员账号" },
                    model: {
                      value: _vm.filters.account,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "account", $$v)
                      },
                      expression: "filters.account"
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
                      attrs: { placeholder: "请选择账号状态" },
                      model: {
                        value: _vm.filters.status,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "status", $$v)
                        },
                        expression: "filters.status"
                      }
                    },
                    _vm._l(_vm.options, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.label, value: item.value }
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
                      on: { click: _vm.viewForAdd }
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
            attrs: { prop: "id", label: "#", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "姓名", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "account", label: "账号", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "status",
              label: "状态",
              align: "center",
              formatter: _vm.statusFormat
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-tag",
                      {
                        attrs: {
                          type:
                            _vm.statusFormat(scope.row) == "禁用"
                              ? "danger"
                              : "success",
                          "close-transition": ""
                        }
                      },
                      [_vm._v(_vm._s(_vm.statusFormat(scope.row)))]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              formatter: _vm.rolesFormat,
              label: "角色",
              align: "center"
            }
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
                            _vm.viewForEdit(scope.$index, scope.row)
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
              attrs: { model: _vm.formData, rules: _vm.rules }
            },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "姓名",
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
                    label: "账号",
                    "label-width": _vm.formLabelWidth,
                    prop: "account"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.account,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "account", $$v)
                      },
                      expression: "formData.account"
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
                    label: "密码",
                    "label-width": _vm.formLabelWidth,
                    prop: "password"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "password", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.password,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "password", $$v)
                      },
                      expression: "formData.password"
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
                    label: "确认密码",
                    "label-width": _vm.formLabelWidth,
                    prop: "password_confirmation"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "password", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "password_confirmation", $$v)
                      },
                      expression: "formData.password_confirmation"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "角色", "label-width": _vm.formLabelWidth } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择管理员角色" },
                      model: {
                        value: _vm.formData.roles,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "roles", $$v)
                        },
                        expression: "formData.roles"
                      }
                    },
                    _vm._l(_vm.roles, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: {
                          label: item.name,
                          value: item.id,
                          disabled: item.disabled
                        }
                      })
                    })
                  )
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-352a6832", module.exports)
  }
}

/***/ })

});