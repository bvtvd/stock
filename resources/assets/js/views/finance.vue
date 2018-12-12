<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item label="项目" >
                    <el-input  v-model="filters.project" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注信息" >
                    <el-input  v-model="filters.remarks" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="filterData()">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" v-on:click="reset()">重置</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="create()">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table
                :data="tableData"
                style="width: 100%"

        >

            <el-table-column
                    prop="created_at"
                    label="时间"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="project"
                    label="项目"
                    align="center"
            >
            </el-table-column>

            <el-table-column
                    prop="income"
                    label="收入"
                    align="center"
            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.income,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="expend"
                    label="支付"
                    align="center"
            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.expend,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="balance"
                    label="结存"
                    align="center"
            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.balance,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="appendix_name"
                    label="附件"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="remarks"
                    label="备注"
                    align="center"
            >
            </el-table-column>

            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            size="small"
                            @click="edit(scope.$index,scope.row)">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="destroy(scope.row)">删除</el-button>
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
            <el-form :model="formData"  :rules="rules" ref="ruleForm"  :label-width="formLabelWidth">

                <el-form-item label="项目" :label-width="formLabelWidth">
                    <el-input  v-model="formData.project" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="费用类型" :label-width="formLabelWidth">
                    <el-select v-model="formData.type"  placeholder="请选择费用类型">
                        <el-option
                                v-for="item in types"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="金额" :label-width="formLabelWidth">
                    <el-input  v-model="formData.money" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="formData.remarks" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="入库附件">
                    <el-upload
                            class="upload-storage-appendix"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :action="$adminPath + 'appendix'"

                            :on-success="handleUploadSuccess"
                            :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>

                    </el-upload>

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
                currentUrl : this.$adminPath + 'finance',//当前页面的url
                tableData: [],//表格数据
                formData:{

                },//表单数据
                dialogFormVisible:false,
                formLabelWidth:'20%',
                filters:{

                },//搜索
                dialogTitle:'新增入库信息',//标题
                methodType:1,//请求的方法类型1=新增 0=修改
                pageData:{
                    page:0,
                    per_page:0,
                    total:0
                },

                rules: {//验证规则

                },
                types:[
                    {
                        id:1,
                        name:'收入'
                    },
                    {
                        id:2,
                        name:'支出'
                    }
                ],
                products:[],
                fileList: [],
                showContract:'display:none;',


            }
        },
        methods:{

            getData(filters = {}){//获取数据
                let self = this;
                let parm = Object.assign(filters,self.pageData);

                self.$axios.get(self.currentUrl,{params:parm})
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
            create(){//显示添加页面
                let self = this;
                self.formData = {

                };

                self.methodType = 1;//设置请求方法为添加
                self.dialogTitle = '新增收支信息';

                self.dialogFormVisible = true;
            },
            store(formName){//保存数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.$emit('showLoading');

                        self.$axios.post(self.currentUrl,self.formData)
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
            edit(index,row){//显示编辑视图
                let self = this;
                self.formData = Object.assign({},row);

                self.dialogTitle = '编辑收支信息';

                self.methodType = 0 ;//设置请求方法为修改
                self.dialogFormVisible = true;
            },
            update(formName){//更新数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if(valid){
                        self.$emit('showLoading');
                        self.formData._method = 'PUT';

                        self.$axios.post(self.currentUrl + '/' + self.formData.id,self.formData)
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
            destroy(row){//删除
                let self = this;

                this.$confirm('删除后不可恢复, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    self.$emit('showLoading');
                    self.$axios.post(self.currentUrl + '/' + row.id,{_method:'delete'})
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

                };
                this.getData();

            },


            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleUploadSuccess(res, file) {
                this.formData.appendix = res.data.url;
                this.formData.appendix_name = res.data.name;
            },
            fmoney(s, n) {
                n = n > 0 && n <= 20 ? n : 2;
                s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
                var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
                let t = "";
                for (let i = 0; i < l.length; i++) {
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
                }
                return t.split("").reverse().join("") + "." + r;
            }



        },
        mounted(){
            this.getData();

        }
    }
</script>

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