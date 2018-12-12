webpackJsonp([28],{

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(45)
/* script */
var __vue_script__ = __webpack_require__(704)
/* template */
var __vue_template__ = __webpack_require__(705)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\views\\menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06e9294c", Component.options)
  } else {
    hotAPI.reload("data-v-06e9294c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 704:
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


exports.default = {
    data: function data() {
        return {

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
            dialogFormVisible: false,
            nodeFormData: {},
            formLabelWidth: '20%',
            dialogName: '菜单管理',
            methodType: 0,
            currentUrl: this.$adminPath + 'permission',
            category: []
        };
    },


    methods: {

        /**
         * 点击节点名称时开关节点
         * @param node
         */
        nodeExpand: function nodeExpand(node) {
            node.expanded = !node.expanded;
        },

        /**
         * 显示修改菜单视图
          * @param node 菜单节点
         */
        nodeEditVisible: function nodeEditVisible(node) {
            this.methodType = 0;
            this.dialogName = '修改菜单';
            this.dialogFormVisible = true;
            this.nodeFormData = node.data;
            this.nodeFormData.display = String(this.nodeFormData.display);
        },


        /**
         * 显示添加菜单视图
         * @param node 父级菜单节点
         */
        nodeCreateVisible: function nodeCreateVisible(node) {
            this.methodType = 1;
            this.dialogName = '添加菜单';
            this.dialogFormVisible = true;
            this.nodeFormData = {
                display_name: '',
                name: '',
                icon: '',
                description: '',
                pid: node.data.id,
                display: '1'
            };
        },


        /**
         * 保存菜单
         */
        nodeStore: function nodeStore() {
            var self = this;
            self.$axios.post(self.currentUrl, self.nodeFormData).then(function (res) {
                if (res.data.code == 1000) {
                    self.dialogFormVisible = false;
                    self.$message.success('菜单添加成功');

                    self.getMenu();
                } else {
                    self.$message({ message: res.data.msg, type: 'error' });
                }
            }).catch(function (error) {

                console.log(error);
            });
        },

        /**
         * 更新菜单
         */
        nodeUpdate: function nodeUpdate() {
            var self = this;
            self.nodeFormData._method = 'put';
            self.$axios.post(self.currentUrl + '/' + self.nodeFormData.id, self.nodeFormData).then(function (res) {
                if (res.data.code == 1000) {
                    self.dialogFormVisible = false;
                    self.$message.success('菜单更新成功');
                    self.getMenu();
                } else {
                    self.$message.error(res.data.msg);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        /**
         *
         * 删除菜单
         * @param node
         */
        nodeDelete: function nodeDelete(node) {
            var self = this;

            this.$confirm('删除后不可恢复, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                self.$axios.post(self.currentUrl + '/' + node.data.id, { _method: 'delete' }).then(function (res) {

                    if (res.data.code == 1000) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getMenu();
                    } else {
                        self.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function () {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        renderContent: function renderContent(h, _ref) {
            var _this = this;

            var node = _ref.node,
                data = _ref.data,
                store = _ref.store;


            if (data.id) {
                return h('span', [h(
                    'span',
                    {
                        on: {
                            'click': function click() {
                                return _this.nodeExpand(node);
                            }
                        }
                    },
                    [h('span', [node.label])]
                ), h(
                    'span',
                    { style: 'float: right; margin-right: 20px' },
                    [h(
                        'el-button',
                        {
                            attrs: { size: 'mini' },
                            on: {
                                'click': function click() {
                                    return _this.nodeCreateVisible(node);
                                }
                            }
                        },
                        ['\u65B0\u589E']
                    ), h(
                        'el-button',
                        {
                            attrs: { size: 'mini' },
                            on: {
                                'click': function click() {
                                    return _this.nodeEditVisible(node);
                                }
                            }
                        },
                        ['\u4FEE\u6539']
                    ), h(
                        'el-button',
                        {
                            attrs: { size: 'mini' },
                            on: {
                                'click': function click() {
                                    return _this.nodeDelete(node);
                                }
                            }
                        },
                        ['\u5220\u9664']
                    )]
                )]);
            } else {
                return h('span', [h('span', [h('span', [node.label])]), h(
                    'span',
                    { style: 'float: right; margin-right: 20px' },
                    [h(
                        'el-button',
                        {
                            attrs: { size: 'mini' },
                            on: {
                                'click': function click() {
                                    return _this.nodeCreateVisible(node);
                                }
                            }
                        },
                        ['\u65B0\u589E']
                    )]
                )]);
            }
        },
        getMenu: function getMenu() {
            var self = this;

            self.$axios.get(self.$adminPath + 'permission').then(function (res) {
                self.$store.dispatch('setMenus', res.data.data);
                self.menus[0].children = res.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        refurbishMenu: function refurbishMenu() {
            this.getMenu();
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
        this.getMenu();
        this.getCategory();
    }
};

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-tree", {
        staticStyle: { width: "800px" },
        attrs: {
          data: _vm.menus,
          props: _vm.defaultProps,
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false,
          "render-content": _vm.renderContent
        }
      }),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: _vm.dialogName, visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            },
            close: _vm.refurbishMenu
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.nodeFormData } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "菜单路由",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.nodeFormData.name,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "name", $$v)
                      },
                      expression: "nodeFormData.name"
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
                    label: "菜单名称",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.nodeFormData.display_name,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "display_name", $$v)
                      },
                      expression: "nodeFormData.display_name"
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
                    label: "菜单图标",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.nodeFormData.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "icon", $$v)
                      },
                      expression: "nodeFormData.icon"
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
                    label: "菜单描述",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.nodeFormData.description,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "description", $$v)
                      },
                      expression: "nodeFormData.description"
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
                    label: "菜单排序",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.nodeFormData.sort,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "sort", $$v)
                      },
                      expression: "nodeFormData.sort"
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
                    label: "菜单分类",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.nodeFormData.category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.nodeFormData, "category_id", $$v)
                        },
                        expression: "nodeFormData.category_id"
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
                    label: "是否显示",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-switch", {
                    attrs: {
                      "on-text": "显示",
                      "on-value": "1",
                      "off-text": "隐藏",
                      "off-value": "0"
                    },
                    model: {
                      value: _vm.nodeFormData.display,
                      callback: function($$v) {
                        _vm.$set(_vm.nodeFormData, "display", $$v)
                      },
                      expression: "nodeFormData.display"
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
                      _vm.nodeFormData = {}
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
                      _vm.methodType ? _vm.nodeStore() : _vm.nodeUpdate()
                    }
                  }
                },
                [_vm._v(" 确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-06e9294c", module.exports)
  }
}

/***/ })

});