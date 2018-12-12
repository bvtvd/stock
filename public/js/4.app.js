webpackJsonp([4],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(729)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(731)
/* template */
var __vue_template__ = __webpack_require__(732)
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
Component.options.__file = "resources\\assets\\js\\views\\role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b0230e3", Component.options)
  } else {
    hotAPI.reload("data-v-1b0230e3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(730);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("972b490e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b0230e3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./role.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b0230e3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n", ""]);

// exports


/***/ }),

/***/ 731:
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

exports.default = {
    data: function data() {
        return {
            uri: this.$adminPath + 'role', //当前页面的url
            tableData: [], //表格数据
            formData: {}, //表单数据
            dialogFormVisible: false,
            dialogRoleVisible: false,
            formLabelWidth: '20%',
            filters: {
                status: ''
            }, //搜索
            dialogTitle: '添加角色', //标题
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
            rules: { //验证规则
                name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }, { min: 2, max: 16, message: '长度在 2 到 16个字符', trigger: 'blur' }]

            },
            defaultProps: {
                children: 'children',
                label: 'display_name'
            },
            menus: [{
                id: 0,
                display_name: 'Root',
                children: [],
                display: '1'
            }],
            checkedMenu: [],
            thisId: null, //当前授权角色的ID
            test: 'hidden'
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
        getMenu: function getMenu(row) {
            //获取菜单
            var self = this;

            self.$axios.get(self.$adminPath + 'permission').then(function (res) {

                if (res.data.code == 1000) {

                    self.menus[0].children = res.data.data;
                } else {
                    self.$message.error(res.data.msg);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        authorize: function authorize() {
            var self = this;
            self.$emit('showLoading');
            self.$axios.post(self.uri + '/accredit', { id: self.thisId, menu_id: self.$refs.tree.getCheckedNodes() }).then(function (res) {
                self.$emit('showLoading');

                if (res.data.code == 1000) {
                    self.dialogRoleVisible = false;
                    self.checkedMenu = [];
                    self.$message.success('授权成功');
                    self.getData();
                } else {
                    self.$message.error(res.data.msg);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        viewRole: function viewRole(row) {
            //授权视图
            var self = this;
            self.dialogRoleVisible = true;
            self.thisId = row.id;
            self.checkedMenu = row.permissions;
        },
        renderContent: function renderContent(h, _ref) {
            var node = _ref.node,
                data = _ref.data,
                store = _ref.store;
            //渲染函数
            var self = this;

            if (self.checkedMenu.indexOf(data.id) > -1) {
                //判断是否拥有权限
                node.checked = true;
            } else {
                node.checked = false;
            }
            return h('span', [h('span', [h('span', [node.label])])]);
        },
        viewForAdd: function viewForAdd() {
            //显示添加页面
            var self = this;
            self.formData = {
                status: '1'
            };
            self.rules.password = self.passwordRuleAdd;
            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '添加角色';

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
            self.dialogTitle = '编辑角色信息';
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
        }
    },
    mounted: function mounted() {
        this.getData();
        this.getMenu();
    }
};

/***/ }),

/***/ 732:
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
                    attrs: { placeholder: "请输入角色名称" },
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
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择角色状态" },
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
            attrs: { prop: "name", label: "名称", align: "center" }
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
                            _vm.viewRole(scope.row)
                          }
                        }
                      },
                      [_vm._v("授权")]
                    ),
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
                    label: "名称",
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "授权", visible: _vm.dialogRoleVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogRoleVisible = $event
            }
          }
        },
        [
          _c("el-tree", {
            ref: "tree",
            style: { display: _vm.test },
            attrs: {
              data: _vm.menus,
              "show-checkbox": "",
              "default-expand-all": "",
              "node-key": "id",
              "highlight-current": "",
              "render-content": _vm.renderContent,
              props: _vm.defaultProps
            }
          }),
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
                      _vm.dialogRoleVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.authorize } },
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
    require("vue-hot-reload-api")      .rerender("data-v-1b0230e3", module.exports)
  }
}

/***/ })

});