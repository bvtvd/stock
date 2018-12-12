webpackJsonp([7],{

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(771)
}
var normalizeComponent = __webpack_require__(37)
/* script */
var __vue_script__ = __webpack_require__(773)
/* template */
var __vue_template__ = __webpack_require__(774)
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
Component.options.__file = "resources\\assets\\js\\views\\produce.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d3288afa", Component.options)
  } else {
    hotAPI.reload("data-v-d3288afa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(772);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("2762d454", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3288afa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./produce.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3288afa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./produce.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n.avatar-uploader input{\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n.content-class img{\n    width: 400px;\n}\n.upload-demo input{\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 773:
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
//
//
//

exports.default = {
    data: function data() {

        return {
            uri: this.$adminPath + 'produce', //当前页面的url
            tableData: [], //表格数据
            formData: {
                path: '',
                content: '',
                province_id: '',
                city_id: ''
            }, //表单数据
            dialogFormVisible: false,
            dialogExcelVisible: false,
            formLabelWidth: '10%',
            filters: {
                date: ''
            }, //搜索
            dialogTitle: '添加', //标题
            methodType: 1, //请求的方法类型1=新增 0=修改
            pageData: {
                page: 0,
                per_page: 0,
                total: 0
            },

            rules: { //验证规则
                name: [{ required: true, message: '请填写品名', trigger: 'blur' }],
                quote_time: [{ required: true, message: '请选择报价时间', trigger: 'blur' }],

                tallest_price: [{ required: true, message: '请填写最高报价', trigger: 'blur' }],
                lowest_price: [{ required: true, message: '请填写最低报价', trigger: 'blur' }],
                equally_price: [{ required: true, message: '请填写平均报价', trigger: 'blur' }]
            },
            imageUrl: '',
            editorOption: {},
            has_img: false,
            cate: {},
            formExcel: {
                number: '',
                times: '',
                name: ''
            },
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            LabelWidth: '25%',
            ExcelVisible: false,
            fileList3: [],
            token: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            },
            value6: '',
            value8: '',
            province: [],
            city: [],
            points: [],
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
                content: '',
                province_id: '',
                city_id: ''
            };
            self.value8 = '';
            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '添加';

            self.dialogFormVisible = true;
        },
        store: function store(formName) {
            //保存数据
            var self = this;
            self.formData.quote_time = String(Date.parse(self.value8) / 1000);

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
            var newDate = new Date();
            self.value8 = newDate.setTime(self.formData.quote_time * 1000);
            self.dialogTitle = '编辑';
            self.formData.type = String(self.formData.type);
            self.methodType = 0; //设置请求方法为修改
            self.dialogFormVisible = true;
            self.getCity();
            self.getPoints();
        },
        update: function update(formName) {
            //更新数据
            var self = this;
            console.log(self.value8);
            self.formData.quote_time = String(self.value8 / 1000);
            console.log(self.formData.quote_time);
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
            this.filters = {
                date: ''
            };
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
            this.formData.content = this.formData.content + '<img src="' + res.data.url + '">';
        },
        formatType: function formatType(row) {
            return ['', "首页", "每周热点", "热点资讯", "推荐资讯"][row.type];
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
        Export: function Export() {

            var self = this;
            var start = void 0,
                end = void 0;

            if (self.formExcel.times[0] && self.formExcel.times[1]) {
                start = Date.parse(self.formExcel.times[0]) / 1000;
                end = Date.parse(self.formExcel.times[1]) / 1000;
            } else {
                start = '';
                end = '';
            }

            self.dialogExcelVisible = false;
            window.location.href = self.uri + '/export?number=' + self.formExcel.number + '&name=' + self.formExcel.name + '&start=' + start + '&end=' + end;
        },
        Import: function Import() {},
        handleChange: function handleChange(file, fileList) {},
        beforeExcelUpload: function beforeExcelUpload(file) {
            var isJPG = file.type === 'application/vnd.ms-excel';

            if (!isJPG) {
                this.$message.error('导入文件只能是 XLS 格式!');
                return false;
            }

            return isJPG;
        },
        download: function download() {
            var self = this;
            window.location.href = self.uri + '/download';
        },
        handleExcelSuccess: function handleExcelSuccess(res, file) {
            var self = this;
            if (res.code == 1000) {
                this.fileList3 = fileList.slice(-3);

                self.$message.success('导入成功');
            } else {
                self.$message.error(res.msg);
            }
        },
        test: function test() {

            this.filters.date = this.value6.concat();
            this.filters.date[0] = Date.parse(this.filters.date[0]) / 1000;
            this.filters.date[1] = Date.parse(this.filters.date[1]) / 1000;
        },
        formatTime: function formatTime() {

            this.formData.quote_time = Date.parse(this.value8) / 1000;
        },
        getProvince: function getProvince() {
            var self = this;
            self.$axios.get(self.$apiPath + 'address').then(function (res) {
                if (res.data.code == 1000) {
                    self.province = res.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        getCity: function getCity() {
            var self = this;
            var pid = self.formData.province_id;
            self.$axios.get(self.$apiPath + 'address?id=' + pid).then(function (res) {
                if (res.data.code == 1000) {
                    self.city = res.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        getPoints: function getPoints() {
            var self = this;
            var pid = self.formData.city_id;
            self.$axios.get(self.$apiPath + 'getPoints?pid=' + pid).then(function (res) {
                if (res.data.code == 1000) {
                    self.points = res.data.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
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
        this.getProvince();
    }
};

/***/ }),

/***/ 774:
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
                    attrs: { placeholder: "请输入品名" },
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
                  _c("el-date-picker", {
                    attrs: {
                      type: "daterange",
                      placeholder: "请选择报价时间范围",
                      "range-separator": "至",
                      "start-placeholder": "开始日期",
                      "end-placeholder": "结束日期"
                    },
                    on: { change: _vm.test },
                    model: {
                      value: _vm.value6,
                      callback: function($$v) {
                        _vm.value6 = $$v
                      },
                      expression: "value6"
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
                          _vm.dialogExcelVisible = true
                        }
                      }
                    },
                    [_vm._v("导出Excel")]
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
                          _vm.ExcelVisible = true
                        }
                      }
                    },
                    [_vm._v("导入Excel")]
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
            attrs: { prop: "id", label: "#", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "品名", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "quote_time_format",
              label: "报价时间",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "point.name", label: "采集点", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          scope.row.province.name +
                            "-" +
                            scope.row.city.name +
                            "-" +
                            scope.row.point.name
                        )
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "tallest_price", label: "最高报价", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "lowest_price", label: "最低报价", align: "center" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "equally_price", label: "平均报价", align: "center" }
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
                    label: "品名",
                    "label-width": _vm.formLabelWidth,
                    prop: "name"
                  }
                },
                [
                  _c("el-input", {
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
                    label: "报价时间",
                    "label-width": _vm.formLabelWidth,
                    prop: "quote_time"
                  }
                },
                [
                  _c("el-date-picker", {
                    attrs: { type: "date", placeholder: "选择报价时间" },
                    on: { change: _vm.formatTime },
                    model: {
                      value: _vm.value8,
                      callback: function($$v) {
                        _vm.value8 = $$v
                      },
                      expression: "value8"
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
                    label: "产品类型",
                    "label-width": _vm.formLabelWidth,
                    prop: "type"
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择产品类型" },
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
                        attrs: { label: "水果蔬菜", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "畜牧水产", value: "2" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "粮油米面", value: "3" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "农副加工", value: "4" }
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
                  attrs: { label: "采集点", "label-width": _vm.formLabelWidth }
                },
                [
                  _c(
                    "el-select",
                    {
                      ref: "testqw",
                      attrs: { placeholder: "请选择省份" },
                      on: { change: _vm.getCity },
                      model: {
                        value: _vm.formData.province_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "province_id", $$v)
                        },
                        expression: "formData.province_id"
                      }
                    },
                    _vm._l(_vm.province, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择区县(市)" },
                      on: { change: _vm.getPoints },
                      model: {
                        value: _vm.formData.city_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "city_id", $$v)
                        },
                        expression: "formData.city_id"
                      }
                    },
                    _vm._l(_vm.city, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: {
                        filterable: "",
                        "allow-create": "",
                        placeholder: "请选择市场或输入新的市场"
                      },
                      model: {
                        value: _vm.formData.collect_point,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "collect_point", $$v)
                        },
                        expression: "formData.collect_point"
                      }
                    },
                    _vm._l(_vm.points, function(item) {
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
                    label: "最高报价",
                    "label-width": _vm.formLabelWidth,
                    prop: "tallest_price"
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.tallest_price,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "tallest_price", $$v)
                      },
                      expression: "formData.tallest_price"
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
                    label: "最低报价",
                    "label-width": _vm.formLabelWidth,
                    prop: "lowest_price"
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.lowest_price,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "lowest_price", $$v)
                      },
                      expression: "formData.lowest_price"
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
                    label: "平均报价",
                    "label-width": _vm.formLabelWidth,
                    prop: "equally_price"
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.formData.equally_price,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "equally_price", $$v)
                      },
                      expression: "formData.equally_price"
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
          attrs: { title: "导出Excel", visible: _vm.dialogExcelVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogExcelVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "ruleForm", attrs: { model: _vm.formExcel } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "单表格数据条数(每个表格默认为5000条)",
                    "label-width": _vm.LabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { number: "", min: "0" },
                    model: {
                      value: _vm.formExcel.number,
                      callback: function($$v) {
                        _vm.$set(_vm.formExcel, "number", $$v)
                      },
                      expression: "formExcel.number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: { label: "按品名导出", "label-width": _vm.LabelWidth }
                },
                [
                  _c("el-input", {
                    attrs: { number: "" },
                    model: {
                      value: _vm.formExcel.name,
                      callback: function($$v) {
                        _vm.$set(_vm.formExcel, "name", $$v)
                      },
                      expression: "formExcel.name"
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
                    label: "按报价时间导出",
                    "label-width": _vm.LabelWidth
                  }
                },
                [
                  [
                    _c("el-date-picker", {
                      attrs: {
                        type: "datetimerange",
                        "picker-options": _vm.pickerOptions2,
                        placeholder: "选择时间范围",
                        align: "right",
                        format: "yyyy-MM-dd HH:mm:ss"
                      },
                      model: {
                        value: _vm.formExcel.times,
                        callback: function($$v) {
                          _vm.$set(_vm.formExcel, "times", $$v)
                        },
                        expression: "formExcel.times"
                      }
                    })
                  ]
                ],
                2
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
                      _vm.dialogExcelVisible = false
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
                      _vm.Export()
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
          attrs: { title: "导入Excel", visible: _vm.ExcelVisible },
          on: {
            "update:visible": function($event) {
              _vm.ExcelVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "ruleForm", attrs: { model: _vm.formExcel } },
            [
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { size: "small", type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.download()
                        }
                      }
                    },
                    [_vm._v("下载模板")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "upload-demo",
                      attrs: {
                        action: _vm.uri + "/import ",
                        "on-change": _vm.handleChange,
                        "file-list": _vm.fileList3,
                        "before-upload": _vm.beforeExcelUpload,
                        "on-success": _vm.handleExcelSuccess,
                        headers: _vm.token
                      }
                    },
                    [
                      _c(
                        "el-button",
                        { attrs: { size: "small", type: "primary" } },
                        [_vm._v("点击上传文件")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "el-upload__tip",
                          attrs: { slot: "tip" },
                          slot: "tip"
                        },
                        [_vm._v("只能上传固定格式的xls文件,否则将上传失败")]
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
                      _vm.ExcelVisible = false
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d3288afa", module.exports)
  }
}

/***/ })

});