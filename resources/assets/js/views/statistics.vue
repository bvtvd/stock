<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">

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
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="产品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="产品分类">
                            <span>{{ props.row.category.name }}</span>
                        </el-form-item>
                        <el-form-item label="市场单价">
                            <span>{{ props.row.market_price }}</span>
                        </el-form-item>
                        <el-form-item label="计量单位">
                            <span>{{ props.row.metering_unit }}</span>
                        </el-form-item>
                        <el-form-item label="型号规格">
                            <span>{{ props.row.spec }}</span>
                        </el-form-item>
                        <el-form-item label="入库数量">
                            <span>{{ props.row.storage_number }}</span>
                        </el-form-item>
                        <el-form-item label="出库数量">
                            <span>{{ props.row.outgoing_number }}</span>
                        </el-form-item>
                        <el-form-item label="库存">
                            <span>{{ props.row.stock }}</span>
                        </el-form-item>
                        <el-form-item label="库存金额">
                            <span>{{ props.row.stock_money }}</span>
                        </el-form-item>
                        <el-form-item label="添加人">
                            <span>{{ props.row.user.username }}</span>
                        </el-form-item>

                        <el-form-item label="产品状态">
                            <span>
                                <el-tag
                                        :type="props.row.status === '0' ? 'danger' : 'success'"
                                        close-transition>
                                    {{props.row.status === '0' ? '禁用' : '启用'}}
                                </el-tag>
                            </span>
                        </el-form-item>
                        <el-form-item label="详情">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="产品名称"
                    align="center"
                    width="400"
            >
            </el-table-column>
            <el-table-column
                    prop="category.name"
                    label="产品分类"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="market_price"
                    label="市场单价"
                    align="center"
            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.market_price,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="storage_number"
                    label="入库数量"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="outgoing_number"
                    label="出库数量"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="stock"
                    label="库存"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="stock_money"
                    label="库存金额"
                    align="center"
            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.stock_money,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="user.username"
                    label="添加人"
                    align="center"
            >
            </el-table-column>

        </el-table>
        <!--<template>
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
        </template>-->
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
            <el-form :model="formData"  :rules="rules" ref="ruleForm"  :label-width="formLabelWidth">

                <el-form-item label="产品名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="产品分类" :label-width="formLabelWidth">
                    <el-select v-model="formData.category_id" placeholder="请选择">
                        <el-option
                                v-for="item in category"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="市场单价" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.market_price" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="计量单位" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.metering_unit" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="型号规格" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="formData.spec" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="详情" :label-width="formLabelWidth" prop="name">
                    <el-input type="textarea" v-model="formData.desc" auto-complete="off"></el-input>
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
    </div>
</template>



<script>
    export default {
        data() {

            return {
                currentUrl : this.$adminPath + 'statistics',//当前页面的url
                tableData: [],//表格数据
                formData:{

                },//表单数据
                dialogFormVisible:false,
                formLabelWidth:'20%',
                filters:{

                },//搜索
                dialogTitle:'',//标题
                methodType:1,//请求的方法类型1=新增 0=修改
                pageData:{
                    page:0,
                    per_page:0,
                    total:0
                },

                rules: {//验证规则

                },
                category:[]
            }
        },
        methods:{

            getData(filters = {}){//获取数据
                let self = this;
                let parm = Object.assign(filters,self.pageData);

                self.$axios.get(self.currentUrl,{params:parm})
                    .then(function(res){

                        if(res.data.code == 1000){
                            /*self.pageData.page = Number(res.data.data.current_page);
                            self.pageData.per_page = Number(res.data.data.per_page);
                            self.pageData.total = Number(res.data.data.total);*/
                            self.tableData = res.data.data;
                        }
                    }).catch(function(error){
                    console.log(error)
                })
            },
            create(){//显示添加页面
                let self = this;
                self.formData = {
                    status:'1'
                };

                self.methodType = 1;//设置请求方法为添加
                self.dialogTitle = '新增产品';

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

                self.formData.status = String(self.formData.status);
                self.dialogTitle = '编辑产品';

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
            getCategory(){
                let self = this;

                self.$axios.get(self.$adminPath+'category?old=1').then(function(res){
                    self.category = res.data.data;

                }).catch(function(error){
                    console.log(error);
                })
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
            this.getCategory();
        }
    }
</script>

<style scoped>
    .el-table .red-row {
        background: #ff4d51;
    }

    .el-table .green-row {
        background: #00ff00;
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