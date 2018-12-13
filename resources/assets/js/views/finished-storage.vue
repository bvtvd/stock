<template>
    <div style="width: 100%">
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
                        <el-form-item label="入库类型">
                            <span>{{ props.row.storage_type_zh }}</span>
                        </el-form-item>
                        <el-form-item label="入库时间">
                            <span>{{ props.row.storage_time }}</span>
                        </el-form-item>
                        <el-form-item label="经办人">
                            <span>{{ props.row.user.username }}</span>
                        </el-form-item>
                        <el-form-item label="库存地点">
                            <span>{{ props.row.address }}</span>
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
                    width="240"
            >
                <template slot-scope="scope">
                    <span>{{scope.row.storage_time}}</span>
                    <el-button size="small" @click="editDate(scope.$index,scope.row,2)">编辑</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop="product.name"
                    label="产品名称"
                    align="center"
                    width="400"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.out">{{item.product.name}}<br></span>
                </template>
            </el-table-column>

            <el-table-column
                    prop="price"
                    label="产品单价"
                    align="center"
                    width="120"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.out">{{fmoney(item.product_price,2)}}<br></span>
                </template>
                <!--<template slot-scope="scope">-->
                    <!--<span >{{fmoney(scope.row.price,2)}}<br></span>-->
                <!--</template>-->
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="产品数量"
                    align="center"
                    width="120"
            >
                <template slot-scope="scope">
                    <span style="color:red;display: block" v-if="scope.row.storage_type == 3" v-for="(item) in scope.row.out">{{ item.outgoing_quantity }}</span>
                    <span v-else style="color:green">{{ scope.row.quantity }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="storage_money"
                    label="入库金额"
                    align="center"
                    width="120"
            >
                <template slot-scope="scope">
                    <span style="color:red;display: block" v-if="scope.row.storage_type == 3" v-for="(item) in scope.row.out">{{ fmoney(item.storage_money,2) }}</span>
                    <span v-else style="color:green">{{ fmoney(scope.row.storage_money,2) }}</span>
                    <!--<span :style="scope.row.storage_type == 3 ? 'color:red' : 'color:green'">{{ fmoney(scope.row.storage_money,2) }}</span>-->
                </template>
            </el-table-column>

            <el-table-column
                    prop="product.metering_unit"
                    label="计量单位"
                    align="center"
                    width="100"
            >
                <template slot-scope="scope">
                    <span style="display: block" v-if="scope.row.storage_type == 3" v-for="(item) in scope.row.out">{{ item.product.metering_unit }}</span>
                    <span v-else style="color:green">{{ scope.row.product.metering_unit }}</span>
                    <!--<span :style="scope.row.storage_type == 3 ? 'color:red' : 'color:green'">{{ fmoney(scope.row.storage_money,2) }}</span>-->
                </template>
            </el-table-column>
            <el-table-column
                    prop="storage_type_zh"
                    label="入库类型"
                    align="center"
                    width="120"
            >
            </el-table-column>
            <el-table-column
                    prop="remarks"
                    label="备注"
                    align="center"
                    width="200"
            ></el-table-column>
            <el-table-column label="操作" align="center" width="200">
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
        <el-dialog :title="dialogTitle" width="80%" :visible.sync="dialogFormVisible">
            <el-form :model="formData"  :rules="rules" ref="ruleForm"  :label-width="formLabelWidth">

                <el-form-item label="入库类型" :label-width="formLabelWidth">
                    <el-select v-model="formData.storage_type" :change="changeType()" placeholder="请选择入库类型">
                        <el-option
                                v-for="item in types"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                    <span v-if="formData.storage_type == 3" style="color: red;font-size: 16px">无需退库的产品不用填写入库数量,入库地点以及备注</span>
                </el-form-item>
                <el-form-item label="产品名称" v-show="showProduct" :label-width="formLabelWidth">
                    <el-select style="width: 420px"  v-model="formData.product_id" @change="changeProduct" :disabled="disabledProduct" placeholder="请选择产品">
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
                            <el-table-column
                                    prop="product_price"
                                    label="入库数量"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-input  v-model="formData.product[scope.$index].return_quantity" @change="(value) => { tmd(value,scope.row,scope.$index)}" auto-complete="off"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="product_price"
                                    label="入库地点"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-input  v-model="formData.product[scope.$index].address" @change="(value) => { tmd1(value,scope.row,scope.$index)}"  auto-complete="off"></el-input>
                                </template>
                            </el-table-column>
                            <!--<el-table-column-->
                                    <!--prop="product_price"-->
                                    <!--label="备注"-->
                                    <!--align="center">-->
                                <!--<template slot-scope="scope">-->
                                    <!--<el-input  v-model="formData.product[scope.$index].remarks" @change="(value) => { tmd2(value,scope.row,scope.$index)}"  auto-complete="off"></el-input>-->
                                <!--</template>-->
                            <!--</el-table-column>-->
                        </el-table>
                    </template>
                </el-form-item>
                <el-form-item label="入库数量" v-show="showProduct" :label-width="formLabelWidth">
                    <el-input  v-model="formData.quantity" auto-complete="off"></el-input>
                </el-form-item>


                <el-form-item label="库存地点" v-show="showProduct" :label-width="formLabelWidth">
                    <el-input   v-model="formData.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="入库备注" v-show="showProduct" :label-width="formLabelWidth">
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
        <el-dialog title="入库时间" :visible.sync="dialogMoneyVisible">
            <el-form :model="formData"  :rules="rules" ref="ruleForm"  :label-width="formLabelWidth">

                <el-form-item label="入库时间" :label-width="formLabelWidth"  >
                    <el-date-picker
                            v-model="formData.storage_time"
                            type="datetime"
                            placeholder="选择入库时间"
                            @change="formatTime">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogMoneyVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateStorageTime('ruleForm')">确 定</el-button>
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
                showProduct:true,
                remarks:'',
                dialogMoneyVisible:false

            }
        },
        methods:{
            editDate(index,row,type){
                let self = this;
                self.formData = Object.assign({},row);

                self.methodType = 0 ;//设置请求方法为修改
                self.dialogMoneyVisible = true;
            },
            formatTime(val){
                this.formData.storage_time = val;
                console.log(this.formData.storage_time)
                console.log(this.formData)
            },
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
                console.log(row);
                let self = this;
                self.formData = Object.assign({},row);

                self.dialogTitle = '编辑入库信息';
                self.remarks = self.formData.remarks ;

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
                                    self.dialogMoneyVisible = false;
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
            updateStorageTime(formName){
                let self = this;
                console.log(formName)
                self.$refs[formName].validate((valid) => {
                    if(valid){
                        self.$emit('showLoading');
                        self.$axios.put(self.currentUrl + '/storage/time', {id: self.formData.id, storage_time: self.formData.storage_time})
                            .then( res => {
                                self.$emit('showLoading');

                                if(res.data.code == 1000){
                                    self.formData = {};
                                    self.dialogFormVisible = false;
                                    self.dialogMoneyVisible = false;
                                    self.$message.success('编辑成功');
                                    self.getData();
                                }else{
                                    self.$message.error(res.data.msg);
                                }
                        }).catch( error => {
                            console.log(error)
                        })
                    }
                })
                //
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
                    self.showProduct = false;
                    self.outgoingProductTable = self.outgoingProduct;
                    self.formData.product = [];
                    self.outgoingProductTable && self.outgoingProductTable.forEach(function(val){
                        self.formData.product.push({
                            outgoing_product:val.id,
                            return_quantity:'',
                            address:'',
                            remarks:'',
                            product_id:val.product_id
                        })
                    })

                }else{
                    self.showContract = 'display:none;';
                    self.showProduct = true;

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
            },
            tmd(value,row,index){
                let self = this;

                self.formData.product[index].return_quantity = value;

            },
            tmd1(value,row,index){
                let self = this;

                self.formData.product[index].address = value;

            },
            tmd2(value,row,index){
                let self = this;

                self.formData.product[index].remarks = value;

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
            this.category_id = this.$route.query.category;
            this.getProducts();
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

    .el-dialog--small {
        width: 90%;
    }
</style>