webpackJsonp([9],{

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(746)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(748)
/* template */
var __vue_template__ = __webpack_require__(749)
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
Component.options.__file = "resources\\assets\\js\\views\\finished-outgoing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24fbd26c", Component.options)
  } else {
    hotAPI.reload("data-v-24fbd26c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(747);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("c6fa87cc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24fbd26c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finished-outgoing.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24fbd26c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finished-outgoing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.upload-storage-appendix input[type=\"file\"] {\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 748:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            currentUrl: this.$adminPath + 'outgoing', //当前页面的url
            tableData: [], //表格数据
            formData: {
                product: [{
                    product_id: '',
                    quantity: '',
                    price: ''
                }]
            }, //表单数据
            dialogFormVisible: false,
            dialogProductVisible: false,
            formLabelWidth: '20%',
            filters: {
                contract: ''
            }, //搜索
            dialogTitle: '新增出库信息', //标题
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
                name: '销售'
            }, {
                id: 2,
                name: '样品'
            }, {
                id: 3,
                name: '调拨出库'
            }],
            products: [],
            fileList: [],
            showContract: 'display:none;',
            business: [],
            productsDetail: [],
            category_id: '',
            dialogMoneyVisible: false

        };
    },

    methods: {
        getData: function getData() {
            var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            //获取数据
            var self = this;
            var parm = Object.assign(filters, self.pageData);
            parm.category_id = self.category_id;

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
                product: [{
                    product_id: '',
                    quantity: '',
                    price: ''
                }],
                created_user: sessionStorage.getItem('username'),
                category_id: self.category_id

            };

            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '新增出库信息';

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
                            self.dialogMoneyVisible = false;
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
            self.formData.taxation = String(self.formData.taxation);
            self.dialogTitle = '编辑出库信息';

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
                    self.formData.category_id = self.category_id;
                    self.$axios.post(self.currentUrl + '/' + self.formData.id, self.formData).then(function (res) {
                        self.$emit('showLoading');

                        if (res.data.code == 1000) {
                            self.formData = {};
                            self.dialogFormVisible = false;
                            self.dialogMoneyVisible = false;
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
            this.getData(this.filters);
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
        getProducts: function getProducts() {
            var self = this;
            self.$axios.get(self.$adminPath + 'product', { params: { all: true, category_id: self.category_id } }).then(function (res) {
                if (res.data.code == 1000) {
                    self.products = res.data.data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        getBusiness: function getBusiness() {
            var self = this;
            self.$axios.get(self.$adminPath + 'business', { params: { all: true } }).then(function (res) {
                if (res.data.code == 1000) {
                    self.business = res.data.data;
                }
            }).catch(function (err) {
                console.log(err);
            });
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
        changeType: function changeType() {
            var self = this;
            if (self.formData.storage_type == 3) {
                self.showContract = 'display:block;';
            } else {
                self.showContract = 'display:none;';
            }
        },
        expandData: function expandData(row, expanded) {
            this.productsDetail = row.product;
        },
        showProduct: function showProduct() {
            var self = this;
            self.dialogProductVisible = true;
        },
        addProduct: function addProduct() {
            this.formData.product.push({
                product_id: "",
                price: '',
                quantity: ''
            });
        },
        editDate: function editDate(index, row, type) {
            var self = this;
            self.formData = Object.assign({}, row);
            self.formData.taxation = String(self.formData.taxation);

            self.methodType = 0; //设置请求方法为修改
            self.dialogMoneyVisible = true;
        },
        formatTime: function formatTime(val) {
            this.formData.created_at = val;
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
        this.getBusiness();
        this.category_id = this.$route.query.category;
        this.getProducts();
        this.getData();
    }
};

/***/ }),

/***/ 749:
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
                { attrs: { label: "合同编号" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.filters.contract,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "contract", $$v)
                      },
                      expression: "filters.contract"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "出库类型" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择出库类型" },
                      model: {
                        value: _vm.filters.outgoing_type,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "outgoing_type", $$v)
                        },
                        expression: "filters.outgoing_type"
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
        {
          staticStyle: { width: "100%" },
          attrs: { data: _vm.tableData },
          on: { expand: _vm.expandData }
        },
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
                        _c("el-form-item", { attrs: { label: "出库时间" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.created_at))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "类型" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.outgoing_type_zh))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "合同编号" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.contract_number))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "商家名称" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.business.business_name))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "出库地点" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.outgoing_address))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "出库金额" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.outgoing_money))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "增值税" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.value_added_tax))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "3%代扣税" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.withholding_tax))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "应收金额" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.receivable_money))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "备注" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.content))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "经办人" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.created_user))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "附件" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.appendix_name))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          { attrs: { label: "产品信息" } },
                          [
                            _c(
                              "el-button",
                              {
                                attrs: { size: "small" },
                                on: { click: _vm.showProduct }
                              },
                              [_vm._v("查看产品信息")]
                            )
                          ],
                          1
                        )
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
            attrs: {
              prop: "created_at",
              label: "出库时间",
              align: "center",
              width: "240"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [_vm._v(_vm._s(scope.row.created_at))]),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small" },
                        on: {
                          click: function($event) {
                            _vm.editDate(scope.$index, scope.row, 2)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_type_zh",
              label: "类型",
              align: "center",
              width: "100"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "contract_number",
              label: "合同编号",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "business.business_name",
              label: "商家名称",
              align: "center",
              width: "200"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "product",
              label: "产品名称",
              align: "center",
              width: "400"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.product, function(item) {
                    return _c("span", [
                      _vm._v(_vm._s(item.product.name)),
                      _c("br")
                    ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_quantity",
              label: "产品数量",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.product, function(item) {
                    return _c("span", [
                      _vm._v(_vm._s(item.outgoing_quantity)),
                      _c("br")
                    ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_quantity",
              label: "产品价格",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.product, function(item) {
                    return _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(item.product_price))),
                      _c("br")
                    ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_quantity",
              label: "产品单位",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.product, function(item) {
                    return _c("span", [
                      _vm._v(_vm._s(item.product.metering_unit)),
                      _c("br")
                    ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_address",
              label: "出库地点",
              align: "center"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "outgoing_money",
              label: "出库金额",
              align: "center",
              width: "150"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.outgoing_money, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "value_added_tax",
              label: "增值税",
              align: "center",
              width: "150"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.value_added_tax, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "withholding_tax",
              label: "3%代扣税",
              align: "center",
              width: "150"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.withholding_tax, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "receivable_money",
              label: "应收金额",
              align: "center",
              width: "150"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(scope.row.receivable_money, 2))),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "content",
              label: "备注",
              align: "center",
              width: "400"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_user", label: "经办人", align: "center" }
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
                    label: "出库类型",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: {
                        change: _vm.changeType(),
                        placeholder: "请选择出库类型"
                      },
                      model: {
                        value: _vm.formData.outgoing_type,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "outgoing_type", $$v)
                        },
                        expression: "formData.outgoing_type"
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
                {
                  attrs: {
                    label: "商家名称",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "420px" },
                      attrs: { placeholder: "请选择商家名称" },
                      model: {
                        value: _vm.formData.business_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "business_id", $$v)
                        },
                        expression: "formData.business_id"
                      }
                    },
                    _vm._l(_vm.business, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.business_name, value: item.id }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._l(_vm.formData.product, function(val, index) {
                return _c(
                  "div",
                  [
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          label: "产品名称",
                          "label-width": _vm.formLabelWidth
                        }
                      },
                      [
                        _c(
                          "el-select",
                          {
                            staticStyle: { width: "420px" },
                            attrs: { placeholder: "请选择产品" },
                            model: {
                              value: val.product_id,
                              callback: function($$v) {
                                _vm.$set(val, "product_id", $$v)
                              },
                              expression: "val.product_id"
                            }
                          },
                          _vm._l(_vm.products, function(item) {
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
                          label: "出库数量",
                          "label-width": _vm.formLabelWidth
                        }
                      },
                      [
                        _c("el-input", {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: val.outgoing_quantity,
                            callback: function($$v) {
                              _vm.$set(val, "outgoing_quantity", $$v)
                            },
                            expression: "val.outgoing_quantity"
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
                          label: "货物单价",
                          "label-width": _vm.formLabelWidth
                        }
                      },
                      [
                        _c("el-input", {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: val.product_price,
                            callback: function($$v) {
                              _vm.$set(val, "product_price", $$v)
                            },
                            expression: "val.product_price"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { "margin-bottom": "20px" } },
                [
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          staticStyle: { float: "right" },
                          attrs: { type: "primary" },
                          on: { click: _vm.addProduct }
                        },
                        [_vm._v("添加商品")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: { label: "申请人", "label-width": _vm.formLabelWidth }
                },
                [
                  _c("el-input", {
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请输入申请人"
                    },
                    model: {
                      value: _vm.formData.created_user,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "created_user", $$v)
                      },
                      expression: "formData.created_user"
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
                    label: "合同编号",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请输入合同编号"
                    },
                    model: {
                      value: _vm.formData.contract_number,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "contract_number", $$v)
                      },
                      expression: "formData.contract_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "税费", "label-width": _vm.formLabelWidth } },
                [
                  _c(
                    "el-radio-group",
                    {
                      model: {
                        value: _vm.formData.taxation,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "taxation", $$v)
                        },
                        expression: "formData.taxation"
                      }
                    },
                    [
                      _c("el-radio", { attrs: { label: "1" } }, [_vm._v("无")]),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "2" } }, [
                        _vm._v("增值税")
                      ]),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "3" } }, [
                        _vm._v("增值税加3%代扣税")
                      ])
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
                    label: "出库地点",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.outgoing_address,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "outgoing_address", $$v)
                      },
                      expression: "formData.outgoing_address"
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
                    label: "出库备注",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", "auto-complete": "off" },
                    model: {
                      value: _vm.formData.content,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "content", $$v)
                      },
                      expression: "formData.content"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "出库附件" } },
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
            2
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
          attrs: { title: "产品信息", visible: _vm.dialogProductVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogProductVisible = $event
            }
          }
        },
        [
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.productsDetail }
            },
            [
              _c("el-table-column", {
                attrs: {
                  prop: "product.name",
                  label: "产品名称",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "outgoing_quantity",
                  label: "产品数量",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "product_price",
                  label: "产品单价",
                  align: "center"
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
        "el-dialog",
        {
          attrs: { title: "出库时间", visible: _vm.dialogMoneyVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogMoneyVisible = $event
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
                    label: "出库时间",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-date-picker", {
                    attrs: { type: "datetime", placeholder: "选择收款时间" },
                    on: { change: _vm.formatTime },
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
                      _vm.dialogMoneyVisible = false
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
    require("vue-hot-reload-api")      .rerender("data-v-24fbd26c", module.exports)
  }
}

/***/ })

});