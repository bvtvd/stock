webpackJsonp([24],{

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(718)
}
var normalizeComponent = __webpack_require__(37)
/* script */
var __vue_script__ = __webpack_require__(720)
/* template */
var __vue_template__ = __webpack_require__(721)
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
Component.options.__file = "resources\\assets\\js\\views\\banner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c410359", Component.options)
  } else {
    hotAPI.reload("data-v-0c410359", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(719);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("401d4138", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c410359\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./banner.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c410359\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./banner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 400px;\n    height: 400px;\n    line-height: 400px;\n    text-align: center;\n}\n.avatar {\n    width: 400px;\n    height: 400px;\n    display: block;\n}\n.avatar-uploader .el-upload input{\n    display: none;\n}\ndemo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 720:
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

exports.default = {
    data: function data() {
        return {
            uri: this.$adminPath + 'banner', //当前页面的url
            tableData: [], //表格数据
            formData: {
                path: ''
            }, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '20%',
            filters: {
                status: ''
            }, //搜索
            dialogTitle: '添加', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },
            showTitleInput: false,
            rules: { //验证规则
                path: [{ required: true, message: '请上传图片', trigger: 'blur' }],
                position: [{ required: true, message: '请选择位置', trigger: 'blur' }]
            },
            href: [{ required: true, message: '请输入图片链接', trigger: 'blur' }],
            title: [{ required: true, message: '请输入图片标题', trigger: 'blur' }],
            bashPath: this.$basePath
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
                path: '',
                has_href: false
            };

            delete this.rules.title;
            delete this.rules.href;
            this.showTitleInput = false;

            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '添加';

            self.dialogFormVisible = true;
        },
        store: function store(formName) {
            //保存数据
            var self = this;
            if (!self.formData.has_href) {
                delete self.formData.href;
            }
            self.$refs[formName].validate(function (valid) {
                console.log(valid);
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
            self.formData.has_href = Boolean(self.formData.has_href);
            self.formData.position = String(self.formData.position);
            self.dialogTitle = '编辑';
            self.methodType = 0; //设置请求方法为修改
            self.dialogFormVisible = true;
        },
        update: function update(formName) {
            //更新数据
            var self = this;
            if (!self.formData.has_href) {
                delete self.formData.href;
            }
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
            this.filters = {};
            this.getData();
        },
        handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            this.formData.path = res.data.url;
        },
        beforeAvatarUpload: function beforeAvatarUpload(file) {

            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        showTitle: function showTitle(value) {

            if (value == 2) {
                this.showTitleInput = true;
                this.rules.title = this.title;
            } else {
                this.showTitleInput = false;
                delete this.formData.title;
                delete this.rules.title;
            }
        },
        getHref: function getHref(value) {
            if (value == false) {
                delete this.formData.href;
                delete this.rules.href;
            } else {
                this.rules.href = this.href;
            }
        },
        positionFormat: function positionFormat(row) {
            return ['', '首页', '农业资讯', '金融保险', '仓储物流', '关于我们'][row.position];
        }
    },
    mounted: function mounted() {
        this.getData();
    }
};

/***/ }),

/***/ 721:
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
                "el-select",
                {
                  attrs: { placeholder: "请选择图片位置" },
                  model: {
                    value: _vm.filters.position,
                    callback: function($$v) {
                      _vm.$set(_vm.filters, "position", $$v)
                    },
                    expression: "filters.position"
                  }
                },
                [
                  _c("el-option", { attrs: { label: "首页", value: "1" } }),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "农业资讯", value: "2" } }),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "金融保险", value: "3" } }),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "仓储物流", value: "4" } }),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "关于我们", value: "5" } })
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
                        _c("el-form-item", { attrs: { label: "图片" } }, [
                          _c("img", {
                            staticStyle: { width: "400px", height: "400px" },
                            attrs: { src: _vm.bashPath + props.row.path }
                          })
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "图片位置" } }, [
                          _c("span", [
                            _vm._v(_vm._s(_vm.positionFormat(props.row)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "图片标题" } }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(props.row.title ? props.row.title : "无")
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "图片链接" } }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(props.row.href ? props.row.href : "无")
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "上传时间" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.created_at))])
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
              formatter: _vm.positionFormat,
              prop: "position",
              label: "图片位置",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "上传时间", align: "center" }
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
              attrs: {
                model: _vm.formData,
                rules: _vm.rules,
                "label-width": "20%"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "上传图片", prop: "path" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: _vm.$apiPath + "upload?type=banner",
                        "show-file-list": false,
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.formData.path
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.bashPath + _vm.formData.path }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "图片位置", prop: "position" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择图片位置" },
                      on: { change: _vm.showTitle },
                      model: {
                        value: _vm.formData.position,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "position", $$v)
                        },
                        expression: "formData.position"
                      }
                    },
                    [
                      _c("el-option", { attrs: { label: "首页", value: "1" } }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "农业资讯", value: "2" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "金融保险", value: "3" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "仓储物流", value: "4" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "关于我们", value: "5" }
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
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showTitleInput,
                      expression: "showTitleInput"
                    }
                  ],
                  attrs: { label: "图片标题", prop: "title" }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.title,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "title", $$v)
                      },
                      expression: "formData.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "是否跳转" } },
                [
                  _c("el-switch", {
                    attrs: { "on-text": "", "off-text": "" },
                    on: { change: _vm.getHref },
                    model: {
                      value: _vm.formData.has_href,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "has_href", $$v)
                      },
                      expression: "formData.has_href"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.formData.has_href,
                      expression: "formData.has_href"
                    }
                  ],
                  attrs: { label: "图片链接", prop: "href" }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.href,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "href", $$v)
                      },
                      expression: "formData.href"
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0c410359", module.exports)
  }
}

/***/ })

});