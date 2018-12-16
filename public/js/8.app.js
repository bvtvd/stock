webpackJsonp([8],{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(742)
}
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(744)
/* template */
var __vue_template__ = __webpack_require__(745)
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
Component.options.__file = "resources\\assets\\js\\views\\finished-storage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3332efe6", Component.options)
  } else {
    hotAPI.reload("data-v-3332efe6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(743);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(46)("360ad3a6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3332efe6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finished-storage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3332efe6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./finished-storage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.el-table .red-row {\n    background: #ff4d51;\n}\n.el-table .green-row {\n    background: #00ff00;\n}\n.upload-storage-appendix input[type=\"file\"] {\n    display: none;\n}\n.demo-table-expand {\n    font-size: 0;\n}\n.demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n.el-dialog--small {\n    width: 90%;\n}\n", ""]);

// exports


/***/ }),

/***/ 744:
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

exports.default = {
    data: function data() {

        return {
            currentUrl: this.$adminPath + 'finished', //当前页面的url
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
                name: '生产入库'
            }, {
                id: 2,
                name: '调拨入库'
            }, {
                id: 3,
                name: '退货入库'
            }],
            products: [],
            fileList: [],
            showContract: 'display:none;',
            category_id: '',
            outgoingProduct: [],
            outgoingProductTable: [],
            disabledProduct: false,
            showProduct: true,
            remarks: '',
            dialogMoneyVisible: false

        };
    },

    methods: {
        editDate: function editDate(index, row, type) {
            var self = this;
            self.formData = Object.assign({}, row);

            self.methodType = 0; //设置请求方法为修改
            self.dialogMoneyVisible = true;
        },
        formatTime: function formatTime(val) {
            this.formData.storage_time = val;
            console.log(this.formData.storage_time);
            console.log(this.formData);
        },
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
            self.formData = {};
            self.outgoingProductTable = [];
            self.methodType = 1; //设置请求方法为添加
            self.dialogTitle = '新增入库信息';

            self.dialogFormVisible = true;
        },
        store: function store(formName) {
            //保存数据
            var self = this;
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');
                    self.formData.category_id = self.category_id;

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
            console.log(row);
            var self = this;
            self.formData = Object.assign({}, row);

            self.dialogTitle = '编辑入库信息';
            self.remarks = self.formData.remarks;

            self.methodType = 0; //设置请求方法为修改
            self.dialogFormVisible = true;

            console.log(this.outgoingProductTable);
            if (3 == self.formData.storage_type) {
                // 编辑退货入库的操作
                this.changeType();
                this.getOutgoingProducts(self.formData.contract_number).then(function (res) {

                    //查询出之前的出库商品
                    if (self.formData.product) {
                        self.formData.out.map(function (item) {

                            self.formData.product.filter(function (e) {
                                if (e.outgoing_product == item.minus_from) {
                                    e.return_quantity = Math.abs(item.outgoing_quantity);
                                    e.address = item.address;
                                    e.id = item.id;
                                }
                            });
                        });
                    }
                });
            }
        },
        update: function update(formName) {
            //更新数据
            var self = this;

            console.log(this.formData);

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
        updateStorageTime: function updateStorageTime(formName) {
            var self = this;
            console.log(formName);
            self.$refs[formName].validate(function (valid) {
                if (valid) {
                    self.$emit('showLoading');
                    self.$axios.put(self.currentUrl + '/storage/time', { id: self.formData.id, storage_time: self.formData.storage_time }).then(function (res) {
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
                }
            });
            //
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
                self.showProduct = false;
            } else {
                self.showContract = 'display:none;';
                self.showProduct = true;
            }
        },
        getOutgoingProducts: function getOutgoingProducts(val) {
            //获取合同编号下的商品
            var self = this;
            return self.$axios.get(self.$adminPath + 'outgoing', { params: { contract_number: val } }).then(function (res) {
                if (res.data.code == 1000) {
                    self.products = res.data.data.product;
                    self.outgoingProduct = res.data.data.product;
                    self.outgoingProductTable = self.outgoingProduct;
                    self.formData.product = [];
                    self.outgoingProductTable && self.outgoingProductTable.forEach(function (val) {
                        self.formData.product.push({
                            outgoing_product: val.id,
                            return_quantity: '',
                            address: '',
                            remarks: '',
                            product_id: val.product_id
                        });
                    });
                } else {
                    self.$message.error('该合同号不存在');
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        changeProduct: function changeProduct(value) {
            var self = this;
            self.outgoingProduct.forEach(function (v) {
                if (v.product_id == value) {
                    self.outgoingProductTable = [v];
                    self.formData.outgoing_product = v.id;
                }
            });
        },
        tmd: function tmd(value, row, index) {
            var self = this;

            self.formData.product[index].return_quantity = value;
        },
        tmd1: function tmd1(value, row, index) {
            var self = this;

            self.formData.product[index].address = value;
        },
        tmd2: function tmd2(value, row, index) {
            var self = this;

            self.formData.product[index].remarks = value;
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
        this.category_id = this.$route.query.category;
        this.getProducts();
        this.getData();
    }
};

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { width: "100%" } },
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
                          _c("span", [_vm._v(_vm._s(props.row.product.name))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "产品单价" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.price))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "产品数量" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.quantity))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "入库金额" } }, [
                          _c(
                            "span",
                            {
                              style:
                                props.row.storage_type == 3
                                  ? "color:red"
                                  : "color:green"
                            },
                            [_vm._v(_vm._s(props.row.storage_money))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "计量单位" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.product.metering_unit))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "入库类型" } }, [
                          _c("span", [
                            _vm._v(_vm._s(props.row.storage_type_zh))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "入库时间" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.storage_time))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "经办人" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.user.username))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "库存地点" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.address))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "备注" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.remarks))])
                        ]),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "附件" } }, [
                          _c("span", [_vm._v(_vm._s(props.row.appendix_name))])
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
            attrs: {
              prop: "storage_time",
              label: "入库时间",
              align: "center",
              width: "240"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [_vm._v(_vm._s(scope.row.storage_time))]),
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
              prop: "product.name",
              label: "产品名称",
              align: "center",
              width: "400"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.out, function(item) {
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
              prop: "price",
              label: "产品单价",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.out, function(item) {
                    return _c("span", [
                      _vm._v(_vm._s(_vm.fmoney(item.product_price, 2))),
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
              prop: "quantity",
              label: "产品数量",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.out, function(item) {
                    return scope.row.storage_type == 3
                      ? _c(
                          "span",
                          { staticStyle: { color: "red", display: "block" } },
                          [_vm._v(_vm._s(item.outgoing_quantity))]
                        )
                      : _c("span", { staticStyle: { color: "green" } }, [
                          _vm._v(_vm._s(scope.row.quantity))
                        ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "storage_money",
              label: "入库金额",
              align: "center",
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.out, function(item) {
                    return scope.row.storage_type == 3
                      ? _c(
                          "span",
                          { staticStyle: { color: "red", display: "block" } },
                          [_vm._v(_vm._s(_vm.fmoney(item.storage_money, 2)))]
                        )
                      : _c("span", { staticStyle: { color: "green" } }, [
                          _vm._v(_vm._s(_vm.fmoney(scope.row.storage_money, 2)))
                        ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "product.metering_unit",
              label: "计量单位",
              align: "center",
              width: "100"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.out, function(item) {
                    return scope.row.storage_type == 3
                      ? _c("span", { staticStyle: { display: "block" } }, [
                          _vm._v(_vm._s(item.product.metering_unit))
                        ])
                      : _c("span", { staticStyle: { color: "green" } }, [
                          _vm._v(_vm._s(scope.row.product.metering_unit))
                        ])
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "storage_type_zh",
              label: "入库类型",
              align: "center",
              width: "120"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "remarks",
              label: "备注",
              align: "center",
              width: "200"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", align: "center", width: "200" },
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
          attrs: {
            title: _vm.dialogTitle,
            width: "80%",
            visible: _vm.dialogFormVisible
          },
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
                    label: "入库类型",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择入库类型" },
                      on: {
                        change: function($event) {
                          _vm.changeType()
                        }
                      },
                      model: {
                        value: _vm.formData.storage_type,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "storage_type", $$v)
                        },
                        expression: "formData.storage_type"
                      }
                    },
                    _vm._l(_vm.types, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.id }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _vm.formData.storage_type == 3
                    ? _c(
                        "span",
                        { staticStyle: { color: "red", "font-size": "16px" } },
                        [
                          _vm._v(
                            "无需退库的产品不用填写入库数量,入库地点以及备注"
                          )
                        ]
                      )
                    : _vm._e()
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
                      value: _vm.showProduct,
                      expression: "showProduct"
                    }
                  ],
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
                      attrs: {
                        disabled: _vm.disabledProduct,
                        placeholder: "请选择产品"
                      },
                      on: { change: _vm.changeProduct },
                      model: {
                        value: _vm.formData.product_id,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "product_id", $$v)
                        },
                        expression: "formData.product_id"
                      }
                    },
                    _vm._l(_vm.products, function(item) {
                      return _c("el-option", {
                        key: item.product ? item.product.id : item.id,
                        attrs: {
                          label: item.product ? item.product.name : item.name,
                          value: item.product ? item.product.id : item.id
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
                {
                  style: _vm.showContract,
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
                    on: { change: _vm.getOutgoingProducts },
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
                { style: _vm.showContract, attrs: { label: "出库商品" } },
                [
                  [
                    _c(
                      "el-table",
                      {
                        staticStyle: { width: "100%" },
                        attrs: { data: _vm.outgoingProductTable }
                      },
                      [
                        _c("el-table-column", {
                          attrs: {
                            prop: "product.name",
                            label: "商品名称",
                            align: "center"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "outgoing_quantity",
                            label: "出库数量",
                            align: "center"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "return_quantity",
                            label: "退货数量",
                            align: "center"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "red" } },
                                    [_vm._v(_vm._s(scope.row.return_quantity))]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "product_price",
                            label: "商品价格",
                            align: "center"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "product_price",
                            label: "入库数量",
                            align: "center"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _vm.formData.product
                                    ? _c("el-input", {
                                        attrs: { "auto-complete": "off" },
                                        on: {
                                          change: function(value) {
                                            _vm.tmd(
                                              value,
                                              scope.row,
                                              scope.$index
                                            )
                                          }
                                        },
                                        model: {
                                          value:
                                            _vm.formData.product[scope.$index]
                                              .return_quantity,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formData.product[
                                                scope.$index
                                              ],
                                              "return_quantity",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "formData.product[scope.$index].return_quantity"
                                        }
                                      })
                                    : _vm._e()
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "product_price",
                            label: "入库地点",
                            align: "center"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _vm.formData.product
                                    ? _c("el-input", {
                                        attrs: { "auto-complete": "off" },
                                        on: {
                                          change: function(value) {
                                            _vm.tmd1(
                                              value,
                                              scope.row,
                                              scope.$index
                                            )
                                          }
                                        },
                                        model: {
                                          value:
                                            _vm.formData.product[scope.$index]
                                              .address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formData.product[
                                                scope.$index
                                              ],
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "formData.product[scope.$index].address"
                                        }
                                      })
                                    : _vm._e()
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showProduct,
                      expression: "showProduct"
                    }
                  ],
                  attrs: {
                    label: "入库数量",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.quantity,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "quantity", $$v)
                      },
                      expression: "formData.quantity"
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
                      value: _vm.showProduct,
                      expression: "showProduct"
                    }
                  ],
                  attrs: {
                    label: "库存地点",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.formData.address,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "address", $$v)
                      },
                      expression: "formData.address"
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
                      value: _vm.showProduct,
                      expression: "showProduct"
                    }
                  ],
                  attrs: {
                    label: "入库备注",
                    "label-width": _vm.formLabelWidth
                  }
                },
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "入库时间", visible: _vm.dialogMoneyVisible },
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
                    label: "入库时间",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-date-picker", {
                    attrs: { type: "datetime", placeholder: "选择入库时间" },
                    on: { change: _vm.formatTime },
                    model: {
                      value: _vm.formData.storage_time,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "storage_time", $$v)
                      },
                      expression: "formData.storage_time"
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
                      _vm.updateStorageTime("ruleForm")
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
    require("vue-hot-reload-api")      .rerender("data-v-3332efe6", module.exports)
  }
}

/***/ })

});