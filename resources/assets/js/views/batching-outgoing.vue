<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item label="产品名称">
                    <el-input  v-model="filters.product_name" auto-complete="off"></el-input>
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
                @expand="expandData"
        >
            <el-table-column type="expand" >
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="出库时间">
                            <span>{{ props.row.created_at }}</span>
                        </el-form-item>

                        <el-form-item label="经办人">
                            <span>{{ props.row.created_user }}</span>
                        </el-form-item>
                        <el-form-item label="附件">
                            <span>{{ props.row.appendix_name }}</span>
                        </el-form-item>
                        <el-form-item label="产品信息">
                            <el-button size="small" @click="showProduct">查看产品信息</el-button>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="出库时间"
                    align="center"
            >
            </el-table-column>
            <el-table-column

                    label="产品名称"
                    align="center"
                    :formatter=getProductName

            >
            </el-table-column>
            <el-table-column

                    label="产品数量"
                    align="center"
                    :formatter=getProductQuantity

            >
            </el-table-column>
            <el-table-column
                    prop="appendix_name"
                    label="附件"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="created_user"
                    label="经办人"
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


                <hr>

                <div v-for="(val,index) in formData.product">
                    <el-form-item label="产品名称" :label-width="formLabelWidth">
                        <el-select style="width: 420px"  v-model="val.product_id" placeholder="请选择产品">
                            <el-option
                                    v-for="item in products"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出库数量" :label-width="formLabelWidth">
                        <el-input  v-model="val.outgoing_quantity" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="货物单价" style="display: none" :label-width="formLabelWidth">
                        <el-input  v-model="val.product_price" value="0" auto-complete="off"></el-input>
                    </el-form-item>
                    <hr>

                </div>

                <hr>

                <el-form-item label="申请人" :label-width="formLabelWidth" >
                    <el-input  v-model="formData.created_user" auto-complete="off" placeholder="请输入申请人"></el-input>
                </el-form-item>

                <el-form-item label="出库备注" :label-width="formLabelWidth">
                    <el-input  type="textarea" v-model="formData.content" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="出库附件">
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

        <el-dialog title="产品信息" :visible.sync="dialogProductVisible">
            <el-table
                    :data="productsDetail"
                    style="width: 100%"

            >
                <el-table-column
                        prop="product.name"
                        label="产品名称"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="outgoing_quantity"
                        label="产品数量"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="product_price"
                        label="产品单价"
                        align="center"
                >
                </el-table-column>

            </el-table>
        </el-dialog>
    </div>
</template>



<script>
    export default {
        data() {

            return {
                currentUrl : this.$adminPath + 'outgoing',//当前页面的url
                tableData: [],//表格数据
                formData:{
                    product:[
                        {
                            product_id:'',
                            quantity:'',
                            price:''
                        }
                    ]
                },//表单数据
                dialogFormVisible:false,
                dialogProductVisible:false,
                formLabelWidth:'20%',
                filters:{

                },//搜索
                dialogTitle:'新增出库信息',//标题
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
                        name:'销售'
                    },
                    {
                        id:2,
                        name:'样品'
                    },
                    {
                        id:3,
                        name:'调拨出库'
                    }
                ],
                products:[],
                fileList: [],
                showContract:'display:none;',
                business:[],
                productsDetail:[],
                category_id:''
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
                    product:[
                        {
                            outgoing_quantity:'',

                            product_price:0
                        }
                    ],
                    created_user:sessionStorage.getItem('username'),
                    category_id :self.category_id

            };

                self.methodType = 1;//设置请求方法为添加
                self.dialogTitle = '新增出库信息';

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
                self.formData.taxation = String(self.formData.taxation);
                self.dialogTitle = '编辑出库信息';

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
            getBusiness(){
                let self = this;
                self.$axios.get(self.$adminPath + 'business',{params:{all:true}})
                    .then(function(res){
                        if(res.data.code == 1000){
                            self.business = res.data.data;
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
            expandData(row,expanded){
                this.productsDetail = row.product;

            },
            showProduct(){
                let self = this;
                self.dialogProductVisible = true;
            },
            addProduct(){
                this.formData.product.push({
                    product_id:"",
                    price:'',
                    quantity:''
                })
            },
            getProductName(row){
                return row.product[0].product.name;
            },
            getProductQuantity(row){
                return row.product[0].outgoing_quantity;
            }



        },
        mounted(){
            this.getBusiness();
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