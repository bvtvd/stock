<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item label="商家名称"  prop="name">
                    <el-input v-model="filters.business_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人"  prop="account">
                    <el-input v-model="filters.contacts" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话"  prop="password">
                    <el-input  v-model="filters.phone" auto-complete="off"></el-input>
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
            <el-table-column type="expand" >
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商家名称">
                            <span>{{ props.row.business_name }}</span>
                        </el-form-item>
                        <el-form-item label="联系人">
                            <span>{{ props.row.contacts }}</span>
                        </el-form-item>
                        <el-form-item label="电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <span>{{ props.row.email }}</span>
                        </el-form-item>
                        <el-form-item label="商家类型">
                            <span>{{ props.row.business_type }}</span>
                        </el-form-item>
                        <el-form-item label="配送方式">
                            <span>{{ props.row.distribution_type }}</span>
                        </el-form-item>
                        <el-form-item label="备注">
                            <span>{{ props.row.remarks }}</span>
                        </el-form-item>

                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="#"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="business_name"
                    label="商家名称"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="contacts"
                    label="联系人"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="business_type"
                    label="商家类型"
                    align="center"
            >
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
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
                <el-form-item label="商家名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.business_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="account">
                    <el-input v-model="formData.contacts" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth" prop="password">
                    <el-input  v-model="formData.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="password_confirmation">
                    <el-input  v-model="formData.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="商家类型" :label-width="formLabelWidth" prop="password_confirmation">
                    <el-input  v-model="formData.business_type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="配送方式" :label-width="formLabelWidth" prop="password_confirmation">
                    <el-input  v-model="formData.distribution_type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="商家类型" :label-width="formLabelWidth" prop="password_confirmation">
                    <el-input type="textarea" v-model="formData.remarks" auto-complete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="methodType?store('ruleForm'):update('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>



<script>
    export default {
        data() {

            return {
                uri : this.$adminPath + 'business',//当前页面的url
                tableData: [],//表格数据
                formData:{
                    roles:'',
                },//表单数据
                dialogFormVisible:false,
                formLabelWidth:'20%',
                filters:{
                    status:''
                },//搜索
                dialogTitle:'添加商家',//标题
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
                roles:[
                    {
                        id: '0',
                        name: '禁用'
                    }
                ],

                rules: {//验证规则


                }

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
            viewForAdd(){//显示添加页面
                let self = this;
                self.formData = {
                    status:'1',
                    roles:'',
                };
                self.rules.password = self.passwordRuleAdd;
                self.methodType = 1;//设置请求方法为添加
                self.dialogTitle = '添加商家';

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
                self.dialogTitle = '编辑商家信息';
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

            }

        },
        mounted(){
            this.getData();
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
<style >
    .el-table .red-row {
        background: #ff4d51;
    }

    .el-table .green-row {
        background: #00ff00;
    }

    .upload-storage-appendix input[type="file"] {
        display: none;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>