<template>
        <div>
                <el-tree style="width: 800px"
                         :data="menus"
                         :props="defaultProps"

                         node-key="id"
                         default-expand-all
                         :expand-on-click-node="false"
                         :render-content="renderContent">
                </el-tree>

                <el-dialog :title="dialogName" :visible.sync="dialogFormVisible" @close="refurbishMenu">
                        <el-form :model="nodeFormData">

                                <el-form-item label="分类名称" :label-width="formLabelWidth">
                                        <el-input v-model="nodeFormData.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="父分类" :label-width="formLabelWidth">
                                        <el-select v-model="nodeFormData.pid" placeholder="请选择">
                                                <el-option
                                                        :key="0"
                                                        :label="'顶级分类'"
                                                        :value="0">
                                                </el-option>
                                                <el-option
                                                        v-for="item in category"
                                                        :key="item.id"
                                                        :label="item.name"
                                                        :value="item.id">
                                                </el-option>
                                        </el-select>
                                </el-form-item>


                        </el-form>
                        <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false;nodeFormData = {}">取 消</el-button>
                                <el-button type="primary" @click="methodType ? nodeStore() : nodeUpdate()"> 确 定</el-button>
                        </div>
                </el-dialog>
        </div>






</template>
<script>

    export default {
        data() {
            return {

                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                menus:[
                    {
                        id: 0,
                        name: 'Root',
                        children: [],
                        display:'1'
                    }
                ],
                category:[],
                dialogFormVisible:false,
                nodeFormData:{},
                formLabelWidth:'20%',
                dialogName:'分类管理',
                methodType:0,
                currentUrl:this.$adminPath + 'category'
            }
        },

        methods: {

            /**
             * 点击节点名称时开关节点
             * @param node
             */
            nodeExpand(node){
                node.expanded = !node.expanded;
            },
            /**
             * 显示修改菜单视图
              * @param node 菜单节点
             */
            nodeEditVisible(node){
                this.methodType = 0;
                this.dialogName = '修改分类';
                this.getCategory();
                this.dialogFormVisible = true;
                this.nodeFormData = node.data;
                //this.nodeFormData.display = String(this.nodeFormData.display);
            },

            /**
             * 显示添加菜单视图
             * @param node 父级菜单节点
             */
            nodeCreateVisible(node){
                this.methodType = 1;
                this.dialogName = '添加分类';
                this.dialogFormVisible = true;
                this.getCategory();
                this.nodeFormData = {
                    display_name:'',
                    name:'',
                    icon:'',
                    description:'',
                    pid:node.data.id,
                    display:'1'
                };

            },

            /**
             * 保存菜单
             */
            nodeStore(){
                let self = this;
                self.$axios.post(self.currentUrl,self.nodeFormData)
                          .then(function(res){
                              if(res.data.code==1000){
                                  self.dialogFormVisible = false;
                                  self.$message.success('分类添加成功');

                                  self.getMenu();
                              }else{
                                  self.$message({message:res.data.msg,type:'error'})
                              }
                          })
                          .catch(function(error){

                              console.log(error)
                          })
            },
            /**
             * 更新菜单
             */
            nodeUpdate(){
                let self = this;
                self.nodeFormData._method = 'put';
                self.$axios.post(self.currentUrl+'/'+self.nodeFormData.id,self.nodeFormData)
                    .then(function(res){
                        if(res.data.code == 1000){
                            self.dialogFormVisible = false;
                            self.$message.success('分类更新成功');
                            self.getMenu();
                        }else{
                            self.$message.error(res.data.msg);
                        }
                    }).catch(function(error){
                        console.log(error)
                    });

            },
            /**
             *
             * 删除菜单
             * @param node
             */
            nodeDelete(node){
                let self = this;

                this.$confirm('删除后不可恢复, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    self.$axios.post(self.currentUrl+'/'+node.data.id,{_method:'delete'})
                        .then(function(res){

                            if(res.data.code == 1000){
                                self.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                })
                                self.getMenu();
                            }else{
                                self.$message({
                                    type: 'error',
                                    message: res.data.msg
                                })
                            }

                        }).catch(function(error){
                        console.log(error)
                    });
                }).catch(function(){
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })

            },
            renderContent(h, { node, data, store }) {

                if(data.id){
                    return (
                        <span>
                        <span on-click={ () => this.nodeExpand(node) }>
                        <span>{node.label}</span>
                    </span>
                    <span style="float: right; margin-right: 20px">
                        <el-button size="mini" on-click={ () => this.nodeCreateVisible(node) }>新增</el-button>
                        <el-button size="mini" on-click={ () => this.nodeEditVisible(node) }>修改</el-button>
                    <el-button  size="mini" on-click={ () => this.nodeDelete(node) }>删除</el-button>
                    </span>
                    </span>);
                }else{
                    return (
                        <span>
                        <span>
                        <span>{node.label}</span>
                    </span>
                    <span style="float: right; margin-right: 20px">
                        <el-button size="mini" on-click={ () => this.nodeCreateVisible(node) }>新增</el-button>
                    </span>
                    </span>);
                }



            }
            ,getMenu(){
                let self = this;

                self.$axios.get(self.$adminPath+'category').then(function(res){
                    self.menus[0].children =res.data.data;
                }).catch(function(error){
                    console.log(error);
                })
            }
            ,refurbishMenu(){
                this.getMenu();
            },
            getCategory(){
                    let self = this;

                    self.$axios.get(self.$adminPath+'category?old=1').then(function(res){
                        self.category = res.data.data;

                    }).catch(function(error){
                        console.log(error);
                    })
            }
        }
        ,mounted(){
            this.getMenu();
            this.getCategory();
        }
    };
</script>