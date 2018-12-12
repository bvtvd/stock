<template>
    <div>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.phone" placeholder="请输入用户手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="filters.nick_name" placeholder="请输入用户昵称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="filters.status" placeholder="请选择用户状态">
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
                    prop="phone"
                    label="手机号"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="nick_name"
                    label="昵称"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="注册时间"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    align="center"
                    :formatter="statusFormat"
            >
                <template slot-scope="scope">
                    <el-tag
                            :type="statusFormat(scope.row) == '禁用' ? 'danger' : 'success'"
                            close-transition>{{statusFormat(scope.row)}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center">
                <template slot-scope="scope">

                    <el-button
                            size="small"
                            type="danger"
                            @click="delHandle(scope.row)">改变状态</el-button>
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
    </div>
</template>


<script>
    export default {
        data() {
            return {
                uri : this.$adminPath + 'user',//当前页面的url
                tableData: [],//表格数据
                formData:{
                    roles:'',
                },//表单数据
                dialogFormVisible:false,
                formLabelWidth:'20%',
                filters:{
                    status:'',
                    type:''
                },//搜索

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
                }]
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

            filterData(){//搜索
                this.getData(this.filters);
            },
            handleSizeChange(val) {//改变每页条数
                this.pageData.per_page = val;
                this.getData(this.filters);

            },
            handleCurrentChange(val) {//翻页
                this.pageData.page = val;
                this.getData(this.filters);
            },
            reset(){//重置搜索表单
                this.filters = {
                    name:'',
                    phone:'',
                    status:'',
                    nick_name:''
                };
                this.getData();

            },
            statusFormat(row,column){ //格式化状态
                return ['禁用','启用'][row.status]
            },
            update(index,row){//更新数据
                let self = this;

                self.$emit('showLoading');
                self.formData._method = 'PUT';
                self.$axios.post(self.uri + '/' + row.id,self.formData)
                    .then(function(res){
                        self.$emit('showLoading');
                        if(res.data.code == 1000){
                            self.$message.success('设置成功');
                            self.getData(self.filters);
                        }else{
                            self.$message.error(res.data.msg);
                        }

                    }).catch(function(error){
                    console.log(error)
                });

            },
            delHandle(row){//删除
                let self = this;

                this.$confirm('是否切换用户状态?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    self.$emit('showLoading');
                    self.$axios.post(self.uri + '/' + row.id,{_method:'delete'})
                        .then(function(res){
                            self.$emit('showLoading');

                            if(res.data.code == 1000){
                                self.$message.success('切换成功');
                                self.getData(self.filters);
                            }else{
                                self.$message.error('切换失败');
                            }

                        }).catch(function(error){
                        console.log(error)
                    });
                }).catch(function(){
                    self.$message({
                        type: 'info',
                        message: '已取消切换'
                    });
                })
            },
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