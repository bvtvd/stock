<template>
    <div>
        <el-row >
            <el-col :span="24" style="border-bottom: #eee solid 1px; padding: 0.2rem">
                <div>
                    <el-button type="success" v-on:click="databaseBackup">数据库备份</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    export default {
        data() {
            return {}
        },

        methods: {
            /** 数据库备份 */
            databaseBackup(){
                console.log('databaseBackup-----------');
                window.location.href = this.$basePath + '/database/backup';
            }
        }
        , mounted() {
        }
    };
</script>