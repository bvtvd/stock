<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="请输入角色名称"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-select v-model="filters.status" placeholder="请选择角色状态">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="filterData()">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" v-on:click="reset()">重置</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="viewForAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table
                :data="tableData"
                style="width: 100%"

        >
            <el-table-column
                    prop="id"
                    label="#"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    align="center"
                    :formatter="statusFormat"
            >
                <template slot-scope ="scope">
                    <el-tag
                            :type="statusFormat(scope.row) == '禁用' ? 'danger' : 'success'"
                            close-transition>{{statusFormat(scope.row)}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            size="small"
                            @click="viewRole(scope.row)">授权</el-button>
                    <el-button
                            size="small"
                            @click="viewForEdit(scope.$index,scope.row)">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="delHandle(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <template>
            <div class="block" style="float: right">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageData.page"
                        :page-sizes="[10, 15, 30, 50]"
                        :page-size="pageData.per_page"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="pageData.total">
                </el-pagination>
            </div>
        </template>
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
            <el-form :model="formData"  :rules="rules" ref="ruleForm">
                <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-switch on-text="启用" on-value='1' off-text="禁用" off-value='0' v-model="formData.status"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="methodType?store('ruleForm'):update('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="授权" :visible.sync="dialogRoleVisible">
            <el-tree :style="{display:test}"
                    :data="menus"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current
                     :render-content="renderContent"

                    :props="defaultProps">
            </el-tree>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogRoleVisible = false;">取 消</el-button>
                <el-button type="primary" @click="authorize">确 定</el-button>
            </div>
        </el-dialog>


    </div>
</template>



<script>
    export default {
        data() {
            return {
                uri : this.$adminPath + 'role',//当前页面的url
                tableData: [],//表格数据
                formData:{},//表单数据
                dialogFormVisible:false,
                dialogRoleVisible:false,
                formLabelWidth:'20%',
                filters:{
                    status:''
                },//搜索
                dialogTitle:'添加角色',//标题
                methodType:1,//请求的方法类型1=新增 0=修改
                pageData:{
                    page:0,
                    per_page:0,
                    total:0
                },
                options: [{
                    value: '0',
                    label: '禁用'
                }, {
                    value: '1',
                    label: '启用'
                }],
                rules: {//验证规则
                    name: [
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                        { min: 2, max: 16, message: '长度在 2 到 16个字符', trigger: 'blur' }
                    ],

                },
                defaultProps: {
                    children: 'children',
                    label: 'display_name'
                },
                menus:[
                    {
                        id: 0,
                        display_name: 'Root',
                        children: [],
                        display:'1'
                    }
                ],
                checkedMenu:[],
                thisId:null,//当前授权角色的ID
                test:'hidden'
            }
        },
        methods:{
            getData(filters = {}){//获取数据
                let self = this;
                let parm = Object.assign(filters,self.pageData);

                self.$axios.get(self.uri,{params:parm})
                    .then(function(res){

                        if(res.data.code == 1000){
                            self.pageData.page = Number(res.data.data.current_page);
                            self.pageData.per_page = Number(res.data.data.per_page);
                            self.pageData.total = Number(res.data.data.total);
                            self.tableData = res.data.data.data;
                        }
                    }).catch(function(error){
                    console.log(error)
                })
            },
            getMenu(row){//获取菜单
                let self = this;

                self.$axios.get(self.$adminPath+'permission').then(function(res){

                    if(res.data.code == 1000){

                        self.menus[0].children =res.data.data;

                    }else{
                        self.$message.error(res.data.msg)
                    }
                }).catch(function(error){
                    console.log(error);
                })
            },
            authorize(){
                let self = this;
                self.$emit('showLoading');
                self.$axios.post(self.uri + '/accredit',{id:self.thisId,menu_id:self.$refs.tree.getCheckedNodes()})
                    .then(function(res){
                        self.$emit('showLoading');

                        if(res.data.code == 1000){
                            self.dialogRoleVisible = false;
                            self.checkedMenu = [];
                            self.$message.success('授权成功');
                            self.getData();
                        }else{
                            self.$message.error(res.data.msg)
                        }

                }).catch(function(error){
                    console.log(error)
                });

            },
            viewRole(row){//授权视图
                let self = this;
                self.dialogRoleVisible = true;
                self.thisId = row.id;
                self.checkedMenu = row.permissions;
            },
            renderContent(h, { node, data, store }) {//渲染函数
                let self = this;

                if(self.checkedMenu.indexOf(data.id) >-1  ){ //判断是否拥有权限
                    node.checked = true;
                }else{
                    node.checked = false;

                }
                return (
                    <span>
                    <span>
                    <span>{node.label}</span>
                </span>

                </span>);


            },
            viewForAdd(){//显示添加页面
                let self = this;
                self.formData = {
                    status:'1'
                };
                self.rules.password = self.passwordRuleAdd;
                self.methodType = 1;//设置请求方法为添加
                self.dialogTitle = '添加角色';

                self.dialogFormVisible = true;
            },
            store(formName){//保存数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.$emit('showLoading');

                        self.$axios.post(self.uri,self.formData)
                            .then(function(res){
                                self.$emit('showLoading');

                                if(res.data.code == 1000){
                                    self.dialogFormVisible = false;
                                    self.$message.success('添加成功');
                                    self.getData();

                                }else{
                                    self.$message.error(res.data.msg);
                                }
                            }).catch(function(error){
                            console.log(error)
                        });
                    } else {
                        return false;
                    }
                });
            },
            viewForEdit(index,row){//显示编辑视图
                let self = this;
                self.formData = Object.assign({},row);
                self.formData.status = String(self.formData.status);//将账号状态转为字符串
                self.dialogTitle = '编辑角色信息';
                self.rules.password = self.passwordRuleEdit;
                self.methodType = 0 ;//设置请求方法为修改
                self.dialogFormVisible = true;
            },
            update(formName){//更新数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if(valid){
                        self.$emit('showLoading');
                        self.formData._method = 'PUT';
                        self.$axios.post(self.uri + '/' + self.formData.id,self.formData)
                            .then(function(res){
                                self.$emit('showLoading');

                                if(res.data.code == 1000){
                                    self.formData = {};
                                    self.dialogFormVisible = false;
                                    self.$message.success('编辑成功');
                                    self.getData();
                                }else{
                                    self.$message.error(res.data.msg);
                                }

                            }).catch(function(error){
                            console.log(error)
                        });

                    }else{
                        return false;
                    }
                });
            },
            delHandle(row){//删除
                let self = this;

                this.$confirm('删除后不可恢复, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    self.$emit('showLoading');
                    self.$axios.post(self.uri + '/' + row.id,{_method:'delete'})
                        .then(function(res){
                            self.$emit('showLoading');

                            if(res.data.code == 1000){
                                self.$message.success('删除成功');
                                self.getData();
                            }else{
                                self.$message.error('删除失败');
                            }

                        }).catch(function(error){
                        console.log(error)
                    });
                }).catch(function(){
                    self.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })


            },
            filterData(){//搜索
                this.getData(this.filters);
            },
            handleSizeChange(val) {//改变每页条数
                this.pageData.per_page = val;
                this.getData();

            },
            handleCurrentChange(val) {//翻页
                this.pageData.page = val;
                this.getData();
            },
            reset(){//重置搜索表单
                this.filters = {
                    name:'',
                    account:'',
                    status:''
                };
                this.getData();
            },
            statusFormat(row,column){ //格式化状态
                return ['禁用','启用'][row.status]
            }

        },
        mounted(){
            this.getData();
            this.getMenu();
        }
    }
</script>

<style>
    .el-table .red-row {
        background: #ff4d51;
    }

    .el-table .green-row {
        background: #00ff00;
    }
</style>