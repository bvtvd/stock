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
                            <span>{{ props.row.product.name }}</span>
                        </el-form-item>
                        <el-form-item label="产品单价">
                            <span>{{ props.row.price }}</span>
                        </el-form-item>
                        <el-form-item label="产品数量">
                            <span>{{ props.row.quantity }}</span>
                        </el-form-item>
                        <el-form-item label="入库金额">
                            <span :style="props.row.storage_type == 3 ? 'color:red' : 'color:green'">{{ props.row.storage_money }}</span>
                        </el-form-item>
                        <el-form-item label="计量单位">
                            <span>{{ props.row.product.metering_unit }}</span>
                        </el-form-item>

                        <el-form-item label="入库时间">
                            <span>{{ props.row.storage_time }}</span>
                        </el-form-item>
                        <el-form-item label="经办人">
                            <span>{{ props.row.user.username }}</span>
                        </el-form-item>

                        <el-form-item label="备注">
                            <span>{{ props.row.remarks }}</span>
                        </el-form-item>
                        <el-form-item label="附件">
                            <span>{{ props.row.appendix_name }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="storage_time"
                    label="入库时间"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="product.name"
                    label="产品名称"
                    align="center"
            >
            </el-table-column>

            <el-table-column
                    prop="price"
                    label="产品单价"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="产品数量"
                    align="center"
            >
                <template slot-scope="scope">
                    <span :style="scope.row.storage_type == 3 ? 'color:red' : 'color:green'">{{ scope.row.quantity }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="storage_money"
                    label="入库金额"
                    align="center"
            >
                <template slot-scope="scope">
                    <span :style="scope.row.storage_type == 3 ? 'color:red' : 'color:green'">{{ scope.row.storage_money }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="product.metering_unit"
                    label="计量单位"
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

                <el-form-item label="产品名称" :label-width="formLabelWidth">
                    <el-select style="width: 420px"   v-model="formData.product_id" @change="changeProduct" :disabled="disabledProduct" placeholder="请选择产品">
                        <el-option
                                v-for="item in products"
                                :key="item.product ? item.product.id : item.id"
                                :label="item.product ? item.product.name : item.name"
                                :value="item.product ? item.product.id : item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合同编号" :label-width="formLabelWidth" :style="showContract">
                    <el-input @change="getOutgoingProducts" v-model="formData.contract_number" auto-complete="off" placeholder="请输入合同编号"></el-input>
                </el-form-item>
                <el-form-item label="出库商品" :style="showContract">
                    <template>
                        <el-table
                                :data="outgoingProductTable"
                                style="width: 100%"
                                >
                            <el-table-column
                                    prop="product.name"
                                    label="商品名称"
                                    align="center"
                                    >
                            </el-table-column>
                            <el-table-column
                                    prop="outgoing_quantity"
                                    label="出库数量"
                                    align="center"
                                    >
                            </el-table-column>
                            <el-table-column
                                    prop="return_quantity"
                                    label="退货数量"
                                    align="center"
                            >
                                <template slot-scope="scope">
                                    <span style="color:red">{{ scope.row.return_quantity }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="product_price"
                                    label="商品价格"
                                    align="center">
                            </el-table-column>
                        </el-table>
                    </template>
                </el-form-item>
                <el-form-item label="入库数量" :label-width="formLabelWidth">
                    <el-input  v-model="formData.quantity" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="货物单价" :label-width="formLabelWidth">
                    <el-input  v-model="formData.price" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="入库备注" :label-width="formLabelWidth">
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
                currentUrl : this.$adminPath + 'finished',//当前页面的url
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
                        name:'生产入库'
                    },
                    {
                        id:2,
                        name:'调拨入库'
                    },
                    {
                        id:3,
                        name:'退货入库'
                    }
                ],
                products:[],
                fileList: [],
                showContract:'display:none;',
                category_id:'',
                outgoingProduct:[],
                outgoingProductTable:[],
                disabledProduct:false,

            }
        },
        methods:{

            getData(filters = {}){//获取数据
                let self = this;
                let parm = Object.assign(filters,self.pageData);
                parm.category_id = self.category_id;
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
                self.dialogTitle = '新增入库信息';

                self.dialogFormVisible = true;
            },
            store(formName){//保存数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.$emit('showLoading');
                        self.formData.category_id = self.category_id;

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

                self.dialogTitle = '编辑入库信息';

                self.methodType = 0 ;//设置请求方法为修改
                self.dialogFormVisible = true;
            },
            update(formName){//更新数据
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if(valid){
                        self.$emit('showLoading');
                        self.formData._method = 'PUT';
                        self.formData.category_id = self.category_id;

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
            getProducts(){
                let self = this;
                self.$axios.get(self.$adminPath + 'product',{params:{all:true,category_id:self.category_id}})
                    .then(function(res){
                        if(res.data.code == 1000){
                            self.products = res.data.data;
                        }
                }).catch(function(err){
                    console.log(err)
                })
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
            changeType(){
                let self = this;
                if(self.formData.storage_type == 3){
                    self.showContract = 'display:block;';
                }else{
                    self.showContract = 'display:none;';
                }
            },
            getOutgoingProducts(val){//获取合同编号下的商品
                let self = this;
                self.$axios.get(self.$adminPath + 'outgoing',{params:{contract_number:val}})
                    .then(function(res){
                        if(res.data.code == 1000){
                            self.products = res.data.data.product;
                            self.outgoingProduct = res.data.data.product;
                        }else{
                            self.$message.error('该合同号不存在');
                        }

                }).catch(function(err){
                    console.log(err)
                })
            },
            changeProduct(value){
                let self = this;
                self.outgoingProduct.forEach(function(v){
                    if(v.product_id == value){
                        self.outgoingProductTable = [v];
                        self.formData.outgoing_product = v.id;
                    }
                });
            }


        },
        mounted(){
            this.category_id = this.$route.query.category;
            this.getProducts();
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