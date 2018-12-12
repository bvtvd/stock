webpackJsonp([10],{

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(763)
}
var normalizeComponent = __webpack_require__(37)
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
Component.options.__file = "resources\\assets\\js\\views\\information.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67c64162", Component.options)
  } else {
    hotAPI.reload("data-v-67c64162", Component.options)
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
var update = __webpack_require__(46)("01042020", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67c64162\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./information.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67c64162\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./information.vue");
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
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n.avatar-uploader input{\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n.content-class img{\n    width: 400px;\n}\n", ""]);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            uri: this.$adminPath + 'information', //当前页面的url
            tableData: [], //表格数据
            formData: {
                path: '',
                content: ''
            }, //表单数据
            dialogFormVisible: false,
            formLabelWidth: '10%',
            filters: {}, //搜索
            dialogTitle: '添加', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },

            rules: { //验证规则
                title: [{ required: true, message: '请填写标题', trigger: 'blur' }],
                source: [{ required: true, message: '请填写资讯来源', trigger: 'blur' }],
                type: [{ required: true, message: '请选择新闻类型', trigger: 'change' }],
                cate_id: [{ required: true, message: '请选择新闻栏目', trigger: 'change', type: 'number' }],
                path: [{ required: true, message: '请上传图片', trigger: 'blur' }],

                content: [{ required: true, message: '请填写资讯详情', trigger: 'blur' }],
                desc: [{ required: true, message: '请填写资讯简介', trigger: 'blur' }]
            },
            imageUrl: '',
            editorOption: {},
            has_img: false,
            cate: {},
            dialogImageUrl: [],
            dialogVisible: false,
            path1: [{ required: true, message: '请上传图片', trigger: 'blur' }],
            path2: [{ required: true, message: '请上传图片', trigger: 'blur' }],
            multipleSelection: [],
            showDelete: false
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
                path1: '',
                path2: '',
                content: ''
            };

            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '添加';

            self.dialogFormVisible = true;
        },
        store: function store(formName) {
            //保存数据
            console.log(this.fileList2);
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

            self.dialogTitle = '编辑';
            self.formData.type = String(self.formData.type);
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

            this.$confirm('删除收不可恢复,确认删除吗?', '提示', {
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
        handleAvatarSuccess1: function handleAvatarSuccess1(res, file) {
            this.formData.path1 = res.data.url;
        },
        handleAvatarSuccess2: function handleAvatarSuccess2(res, file) {
            this.formData.path2 = res.data.url;
        },
        beforeAvatarUpload: function beforeAvatarUpload(file) {

            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        onEditorBlur: function onEditorBlur(editor) {
            // console.log('editor blur!', editor)
        },
        onEditorFocus: function onEditorFocus(editor) {
            // console.log('editor focus!', editor)
        },
        onEditorReady: function onEditorReady(editor) {
            // console.log('editor ready!', editor)
            var self = this;
            var toolbar = editor.getModule('toolbar'); //修改图片上传的方式
            toolbar.addHandler('image', function () {
                self.$refs['uploadImage'].$el.children[0].children.file.click();
            });
        },
        handleUploadSuccess: function handleUploadSuccess(res, file) {
            this.formData.content = this.formData.content + '<img src="' + this.$basePath + res.data.url + '">';
        },
        formatType: function formatType(row) {
            return ['', "首页纯标题", "每周热点", "热门资讯", "推荐资讯", "首页+图"][row.type];
        },
        getCate: function getCate() {
            var self = this;
            self.$axios.get(self.uri + '/getCate').then(function (res) {
                if (res.data.code == 1000) {
                    self.cate = res.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureSuccess: function handlePictureSuccess(res, file, fileList) {},
        setTop: function setTop(row) {
            var self = this;
            var title = row.is_top == 1 ? '取消' : '设置';
            this.$confirm(title + '置顶', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$emit('showLoading');
                self.$axios.post(self.uri + '/setTop', { id: row.id }).then(function (res) {
                    if (res.data.code == 1000) {
                        self.$emit('showLoading');

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
                    message: '已取消设置'
                });
            });
        },
        changeType: function changeType() {
            if (this.formData.type == 5) {
                this.rules.path1 = this.path1;
                this.rules.path2 = this.path2;
            } else {
                delete this.rules.path1;
                delete this.rules.path2;
            }
        },
        handleSelectionChange: function handleSelectionChange(val) {
            if (val.length > 0) {
                this.showDelete = true;
            } else {
                this.showDelete = false;
            }
            for (var i = 0; i < val.length; i++) {
                this.multipleSelection.push(val[i].id);
            }
        },
        multipleDelete: function multipleDelete() {
            var self = this;

            this.$confirm('删除收不可恢复,确认删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$emit('showLoading');
                self.$axios.post(self.uri + '/multiple', { ids: self.multipleSelection }).then(function (res) {
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
        }
    },
    mounted: function mounted() {
        this.getData();
        this.getCate();
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
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入标题" },
                    model: {
                      value: _vm.filters.title,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "title", $$v)
                      },
                      expression: "filters.title"
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
                      attrs: { placeholder: "请选择资讯栏目" },
                      model: {
                        value: _vm.filters.cate,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "cate", $$v)
                        },
                        expression: "filters.cate"
                      }
                    },
                    _vm._l(_vm.cate, function(item) {
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
                    "el-select",
                    {
                      attrs: { placeholder: "请选择资讯类型" },
                      model: {
                        value: _vm.filters.type,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "type", $$v)
                        },
                        expression: "filters.type"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "首页纯标题", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "每周热点", value: "2" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "热门资讯", value: "3" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "推荐资讯", value: "4" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "首页+图", value: "5" }
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
        {
          staticStyle: { width: "100%" },
          attrs: { data: _vm.tableData },
          on: { "selection-change": _vm.handleSelectionChange }
        },
        [
          _c("el-table-column", { attrs: { type: "selection", width: "55" } }),
          _vm._v(" "),
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
                        _c("el-form-item", { attrs: { label: "标题" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.title))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "新闻来源" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.source))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "阅读数量" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.read_number))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "资讯类型" } }, [
                          _c("span", [
                            _vm._v(_vm._s(_vm.formatType(props.row)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "资讯栏目" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.category.name))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "资讯简介" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.desc))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "图片" } }, [
                          _c("img", {
                            attrs: {
                              src: _vm.$basePath + props.row.path,
                              width: "400px"
                            }
                          })
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
            attrs: { prop: "title", label: "标题", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "read_number", label: "阅读数量", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              formatter: _vm.formatType,
              prop: "type",
              label: "资讯类型",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "category.name", label: "资讯栏目", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "is_top", label: "置顶设置", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          type: scope.row.is_top == 1 ? "danger" : "success"
                        },
                        on: {
                          click: function($event) {
                            _vm.setTop(scope.row)
                          }
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(scope.row.is_top == 1 ? "取消置顶" : "置顶")
                        )
                      ]
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
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showDelete,
                expression: "showDelete"
              }
            ],
            staticClass: "block",
            staticStyle: { float: "left", "margin-left": "15px" }
          },
          [
            _c(
              "el-button",
              {
                attrs: { size: "small", type: "danger" },
                on: {
                  click: function($event) {
                    _vm.multipleDelete()
                  }
                }
              },
              [_vm._v("删除")]
            )
          ],
          1
        ),
        _vm._v(" "),
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
                    label: "资讯标题",
                    "label-width": _vm.formLabelWidth,
                    prop: "title"
                  }
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
                {
                  attrs: {
                    label: "资讯来源",
                    "label-width": _vm.formLabelWidth,
                    prop: "source"
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.source,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "source", $$v)
                      },
                      expression: "formData.source"
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
                    label: "资讯栏目",
                    "label-width": _vm.formLabelWidth,
                    prop: "cate_id"
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择资讯栏目" },
                      model: {
                        value: _vm.formData.cate_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "cate_id", $$v)
                        },
                        expression: "formData.cate_id"
                      }
                    },
                    _vm._l(_vm.cate, function(item) {
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
                    label: "资讯类型",
                    "label-width": _vm.formLabelWidth,
                    prop: "type"
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择资讯类型" },
                      on: { change: _vm.changeType },
                      model: {
                        value: _vm.formData.type,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "type", $$v)
                        },
                        expression: "formData.type"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "首页纯标题", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "每周热点", value: "2" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "热门资讯", value: "3" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "推荐资讯", value: "4" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "首页+图", value: "5" }
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
                  attrs: {
                    label: "图片",
                    "label-width": _vm.formLabelWidth,
                    prop: "path"
                  }
                },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      staticStyle: { display: "inline-block" },
                      attrs: {
                        action: _vm.$apiPath + "upload?type=information",
                        "show-file-list": false,
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.formData.path
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.$basePath + _vm.formData.path }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.formData.type == 5
                    ? _c(
                        "p",
                        { staticStyle: { display: "inline-block" } },
                        [
                          _c(
                            "el-form-item",
                            {
                              staticStyle: { display: "inline-block" },
                              attrs: { prop: "path1" }
                            },
                            [
                              _c(
                                "el-upload",
                                {
                                  staticClass: "avatar-uploader",
                                  staticStyle: { display: "inline-block" },
                                  attrs: {
                                    action:
                                      _vm.$apiPath + "upload?type=information",
                                    "show-file-list": false,
                                    "on-success": _vm.handleAvatarSuccess1,
                                    "before-upload": _vm.beforeAvatarUpload
                                  }
                                },
                                [
                                  _vm.formData.path1
                                    ? _c("img", {
                                        staticClass: "avatar",
                                        attrs: {
                                          src:
                                            _vm.$basePath + _vm.formData.path1
                                        }
                                      })
                                    : _c("i", {
                                        staticClass:
                                          "el-icon-plus avatar-uploader-icon"
                                      })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              staticStyle: { display: "inline-block" },
                              attrs: { prop: "path2" }
                            },
                            [
                              _c(
                                "el-upload",
                                {
                                  staticClass: "avatar-uploader",
                                  staticStyle: { display: "inline-block" },
                                  attrs: {
                                    action:
                                      _vm.$apiPath + "upload?type=information",
                                    "show-file-list": false,
                                    "on-success": _vm.handleAvatarSuccess2,
                                    "before-upload": _vm.beforeAvatarUpload
                                  }
                                },
                                [
                                  _vm.formData.path2
                                    ? _c("img", {
                                        staticClass: "avatar",
                                        attrs: {
                                          src:
                                            _vm.$basePath + _vm.formData.path2
                                        }
                                      })
                                    : _c("i", {
                                        staticClass:
                                          "el-icon-plus avatar-uploader-icon"
                                      })
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "资讯简介",
                    "label-width": _vm.formLabelWidth,
                    prop: "desc"
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "textarea" },
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
                {
                  attrs: {
                    label: "资讯详情",
                    "label-width": _vm.formLabelWidth,
                    prop: "content"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "quill-editor-example" },
                    [
                      _c("quill-editor", {
                        attrs: { options: _vm.editorOption },
                        on: {
                          blur: function($event) {
                            _vm.onEditorBlur($event)
                          },
                          focus: function($event) {
                            _vm.onEditorFocus($event)
                          },
                          ready: function($event) {
                            _vm.onEditorReady($event)
                          }
                        },
                        model: {
                          value: _vm.formData.content,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "content", $$v)
                          },
                          expression: "formData.content"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "el-upload",
                        {
                          ref: "uploadImage",
                          staticClass: "avatar-uploader",
                          staticStyle: { display: "none" },
                          attrs: {
                            action: _vm.$apiPath + "upload?type=information",
                            "show-file-list": false,
                            "on-success": _vm.handleUploadSuccess
                          }
                        },
                        [
                          _vm.imageUrl
                            ? _c("img", {
                                ref: "uploadImage",
                                staticClass: "avatar",
                                attrs: { src: _vm.imageUrl, width: "400px" }
                              })
                            : _c("i", {
                                staticClass: "el-icon-plus avatar-uploader-icon"
                              })
                        ]
                      )
                    ],
                    1
                  )
                ]
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-67c64162", module.exports)
  }
}

/***/ })

});