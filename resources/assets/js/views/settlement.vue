<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <span>应收总额:<b > {{fmoney(Money.receivable_money,2)}} </b></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>已收总额:<b style="color: green"> {{fmoney(Money.received_money,2)}} </b></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>未收总额:<b style="color: red"> {{fmoney(Money.uncollected,2)}} </b></span>&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item label="合同编号">
                    <el-input  v-model="filters.contract" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="商家名称">
                    <el-select  v-model="filters.business_name" auto-complete="off" filterable>
                        <el-option
                                v-for="item in business"
                                :key="item.business_name"
                                :label="item.business_name"
                                :value="item.business_name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注信息">
                    <el-input  v-model="filters.remarks" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="出库类型" >
                    <el-select v-model="filters.outgoing_type"  placeholder="请选择出库类型">
                        <el-option
                                v-for="item in types"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
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
                    <el-button type="primary" @click=" dialogExcelVisible = true ">导出</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table
                :data="tableData"
                style="width: 100%"
                @expand="expandData"
                :row-class-name="tableRowClassName"
        >
            <el-table-column type="expand" >
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="出库时间">
                            <span>{{ props.row.created_at }}</span>
                        </el-form-item>
                        <el-form-item label="类型">
                            <span>{{ props.row.outgoing_type_zh }}</span>
                        </el-form-item>
                        <el-form-item label="合同编号">
                            <span>{{ props.row.contract_number }}</span>
                        </el-form-item>
                        <el-form-item label="商家名称">
                            <span>{{ props.row.business.business_name }}</span>
                        </el-form-item>
                        <el-form-item label="出库地点">
                            <span>{{ props.row.outgoing_address }}</span>
                        </el-form-item>
                        <el-form-item label="出库金额">
                            <span>{{ fmoney(props.row.outgoing_money) }}</span>
                        </el-form-item>
                        <el-form-item label="增值税">
                            <span>{{ fmoney(props.row.value_added_tax) }}</span>
                        </el-form-item>
                        <el-form-item label="3%代扣税">
                            <span>{{ fmoney(props.row.withholding_tax) }}</span>
                        </el-form-item>
                        <el-form-item label="应收金额">
                            <span>{{ fmoney(props.row.receivable_money) }}</span>
                        </el-form-item>
                        <el-form-item label="已收金额">
                            <span>{{ fmoney(props.row.received_money) }}</span>
                        </el-form-item>
                        <el-form-item label="收款时间">
                            <span>{{ props.row.received_time }}</span>
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
                    width="240"

            >
            </el-table-column>
            <el-table-column
                    prop="outgoing_type_zh"
                    label="类型"
                    align="center"
                    width="80"
            >
            </el-table-column>
            <el-table-column
                    prop="contract_number"
                    label="合同编号"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="business.business_name"
                    label="商家名称"
                    align="center"
                    width="200"
            >
            </el-table-column>
            <el-table-column
                    prop="product"
                    label="产品名称"
                    align="center"
                    width="400"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.product">{{item.product.name}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="outgoing_quantity"
                    label="产品数量"
                    align="center"
                    width="120"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.product">{{item.outgoing_quantity}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="outgoing_quantity"
                    label="产品价格"
                    align="center"
                    width="150"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.product">{{fmoney(item.product_price,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="outgoing_quantity"
                    label="产品单位"
                    align="center"
                    width="120"
            >
                <template slot-scope="scope">
                    <span v-for="(item) in scope.row.product">{{item.product.metering_unit}}<br></span>
                </template>
            </el-table-column>



            <el-table-column
                    prop="outgoing_money"
                    label="出库金额"
                    align="center"
                    width="150"

            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.outgoing_money,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="value_added_tax"
                    label="增值税"
                    align="center"
                    width="150"

            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.value_added_tax,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="withholding_tax"
                    label="3%代扣税"
                    align="center"
                    width="150"

            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.withholding_tax,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="receivable_money"
                    label="应收金额"
                    align="center"
                    width="150"

            >
                <template slot-scope="scope">
                    <span >{{fmoney(scope.row.receivable_money,2)}}<br></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="received_money"
                    label="已收金额"
                    align="center"
                    width="150"

            >
                <template slot-scope="scope">
                    <span>{{fmoney(scope.row.received_money,2)}}</span>
                    <el-button v-if="scope.row.outgoing_type != 4"
                        size="small"
                        @click="editMoney(scope.$index,scope.row,1)">收款</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop="received_time"
                    label="收款时间"
                    align="center"
                    width="240"

            >
                <template slot-scope="scope" >
                    <span>{{scope.row.received_time}}</span>
                    <el-button v-if="scope.row.outgoing_type != 4"
                            size="small"
                            @click="editMoney(scope.$index,scope.row,2)">编辑</el-button>
                </template>

            </el-table-column>
            <el-table-column
                    prop="content"
                    label="备注"
                    align="center"
                    width="400"
            >
            </el-table-column>
            <el-table-column
                    prop="created_user"
                    label="经办人"
                    align="center"
            >
            </el-table-column>
            <!--<el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            size="small"
                            @click="edit(scope.$index,scope.row)">编辑</el-button>

                </template>
            </el-table-column>-->
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

                <el-form-item label="出库类型" :label-width="formLabelWidth">
                    <el-select v-model="formData.outgoing_type" :change="changeType()" placeholder="请选择出库类型">
                        <el-option
                                v-for="item in types"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商家名称" :label-width="formLabelWidth">
                    <el-select v-model="formData.business_id"  placeholder="请选择商家名称">
                        <el-option
                                v-for="item in business"
                                :key="item.id"
                                :label="item.business_name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <hr>

                <div v-for="(val,index) in formData.product">
                    <el-form-item label="产品名称" :label-width="formLabelWidth">
                        <el-select v-model="val.product_id" placeholder="请选择产品">
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

                    <el-form-item label="货物单价" :label-width="formLabelWidth">
                        <el-input  v-model="val.product_price" auto-complete="off"></el-input>
                    </el-form-item>
                    <hr>

                </div>
                <div style="margin-bottom: 20px">
                    <el-form-item >

                        <el-button type="primary" @click="addProduct" style="float: right">添加商品</el-button>
                    </el-form-item>

                </div>
                <hr>

                <el-form-item label="申请人" :label-width="formLabelWidth" >
                    <el-input  v-model="formData.created_user" auto-complete="off" placeholder="请输入申请人"></el-input>
                </el-form-item>
                <el-form-item label="合同编号" :label-width="formLabelWidth" >
                    <el-input  v-model="formData.contract_number" auto-complete="off" placeholder="请输入合同编号"></el-input>
                </el-form-item>
                <el-form-item label="税费"  :label-width="formLabelWidth" >
                    <el-radio-group v-model="formData.taxation">
                        <el-radio label="1" >无</el-radio>
                        <el-radio label="2">增值税</el-radio>
                        <el-radio label="3">增值税加3%代扣税</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="出库地点" :label-width="formLabelWidth">
                    <el-input  v-model="formData.outgoing_address" auto-complete="off"></el-input>
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

        <el-dialog title="收款" :visible.sync="dialogMoneyVisible">
            <el-form :model="formData"  :rules="rules" ref="ruleForm"  :label-width="formLabelWidth">


                <el-form-item label="收款金额" :label-width="formLabelWidth" :style="showMoney">
                    <el-input  v-model="formData.received_money_new" auto-complete="off" placeholder="请输入收款金额"></el-input>
                </el-form-item>
                <el-form-item label="收款时间" :label-width="formLabelWidth"  :style="showTime">
                    <el-date-picker
                            v-model="formData.received_time"
                            type="datetime"
                            placeholder="选择收款时间"
                            @change="formatTime">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogMoneyVisible = false">取 消</el-button>
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

        <el-dialog title="导出" :visible.sync="dialogExcelVisible">
            <el-form :model="formExcel"  ref="ruleForm">
                <el-form-item label="单文件数据条数(默认为10000条)" :label-width="LabelWidth">
                    <el-input number min="0" v-model="formExcel.title"></el-input>
                </el-form-item>

                <el-form-item label="按时间导出" :label-width="LabelWidth">
                    <template>

                        <el-date-picker
                                v-model="formExcel.times"
                                type="datetimerange"
                                :picker-options="pickerOptions2"
                                placeholder="选择时间范围"
                                align="right" format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>

                    </template>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogExcelVisible = false">取 消</el-button>
                <el-button type="primary" @click="Export()">确 定</el-button>
            </div>
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
                dialogMoneyVisible:false,
                dialogExcelVisible:false,
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
                    },
                    {
                        id:4,
                        name:'退货入库'
                    }
                ],
                products:[],
                fileList: [],
                showContract:'display:none;',
                showMoney:'display:none;',
                showTime:'display:none;',
                business:[],
                productsDetail:[],
                category_id:'',
                Money:{
                    receivable_money:0,
                    received_money:0,
                    uncollected:0
                },
                formExcel:{
                    number:'',
                    times:'',
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                LabelWidth:'25%',
            }
        },
        methods:{
            tableRowClassName(row, rowIndex){
                if(row.outgoing_type == 4){
                    return 'back-row';
                }
                if(row.received_money != row.receivable_money){

                    return 'red-row';
                }else{
                    return '';
                }

            },

            getData(){//获取数据
                let self = this;
                let parm = Object.assign(this.filters,self.pageData);
                parm.category_id = 1;
                parm.settlement = 1;
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
            getMoney(){
                let self = this;
                self.$axios.get(self.$adminPath + 'getMoney', {params: this.filters})
                    .then(function(res){
                        if(res.data.code == 1000){
                            self.Money = res.data.data;
                        }
                    }).catch(function(err){
                    console.log(err)
                })
            },

            create(){//显示添加页面
                let self = this;
                self.formData = {
                    product:[
                        {
                            product_id:'',
                            quantity:'',
                            price:''
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
                        self.formData.category_id = 1;
                        self.$axios.post(self.$adminPath + 'updateReceived/' + self.formData.id,self.formData)
                            .then(function(res){
                                self.$emit('showLoading');

                                if(res.data.code == 1000){
                                    self.formData = {};
                                    self.dialogFormVisible = false;
                                    self.dialogMoneyVisible = false;
                                    self.$message.success('编辑成功');
                                    self.getData(self.filters);
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
                this.getData();
                this.getMoney()
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
                this.getMoney()
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
            editMoney(index,row,type){//显示编辑视图
                let self = this;
                self.formData = Object.assign({},row);
                self.formData.taxation = String(self.formData.taxation);

                if(type == 1){
                    self.showMoney = 'display:block';
                    self.showTime = 'display:none';

                }else{
                    self.showTime = 'display:block';
                    self.showMoney = 'display:none';

                }



                self.methodType = 0 ;//设置请求方法为修改
                self.dialogMoneyVisible = true;

            },
            formatTime(val){
                this.formData.received_time = val;
            },
            dateFtt(fmt,date) {
                //author: meizz
                var o = {
                    "M+" : date.getMonth()+1,                 //月份
                    "d+" : date.getDate(),                    //日
                    "h+" : date.getHours(),                   //小时
                    "m+" : date.getMinutes(),                 //分
                    "s+" : date.getSeconds(),                 //秒
                    "q+" : Math.floor((date.getMonth()+3)/3), //季度
                    "S"  : date.getMilliseconds()             //毫秒
                };
                if(/(y+)/.test(fmt))
                    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
                for(var k in o)
                    if(new RegExp("("+ k +")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                return fmt;
            },
            Export(){

                let self = this;
                let start,end;

                if(self.formExcel.times[0] && self.formExcel.times[1]){
                    start = self.dateFtt('yyyy-MM-dd',self.formExcel.times[0]);
                    end = self.dateFtt('yyyy-MM-dd',self.formExcel.times[1]);
                }else{
                    start = '';
                    end = '';
                }

                self.dialogExcelVisible = false;
                window.location.href = self.$adminPath + 'export?number='+self.formExcel.number+'&name='+self.formExcel.name+'&start='+start+'&end='+end+'&category_id=1';
            },
            /*fmoney(s, n) {
                n = n > 0 && n <= 20 ? n : 2;
                let x= s > 0 ? 0:1
                s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";

                var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
                let t = "";
                for (let i = x; i < l.length; i++) {
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
                }
                return t.split("").reverse().join("") + "." + r;
            },*/
            fmoney(number, decimals = 2, dec_point = '.', thousands_sep = ',',roundtag = 'round') {
                /*
                * 参数说明：
                * number：要格式化的数字
                * decimals：保留几位小数
                * dec_point：小数点符号
                * thousands_sep：千分位符号
                * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
                * */
                number = (number + '').replace(/[^0-9+-Ee.]/g, '');
                roundtag = roundtag || "ceil"; //"ceil","floor","round"
                var n = !isFinite(+number) ? 0 : +number,
                    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                    s = '',
                    toFixedFix = function (n, prec) {

                        var k = Math.pow(10, prec);
                        console.log();

                        return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec*2))).toFixed(prec*2)) / k;
                    };
                s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
                var re = /(-?\d+)(\d{3})/;
                while (re.test(s[0])) {
                    s[0] = s[0].replace(re, "$1" + sep + "$2");
                }

                if ((s[1] || '').length < prec) {
                    s[1] = s[1] || '';
                    s[1] += new Array(prec - s[1].length + 1).join('0');
                }
                return s.join(dec);
            }

        },
        mounted(){
            this.getBusiness();
            this.category_id = this.$route.query.category;
            this.getProducts();
            this.getData();
            this.getMoney();
        }
    }
</script>

<style >
    .el-table .red-row {
        background: #ff4d51;
    }

    .el-table .back-row {
        background: #2ab27b;
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