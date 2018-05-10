<style lang="scss" scoped>
    @font-face {
        font-family: FZYouHJW;
        src: url('../fonts/FZYouHJW_Xian.eot');
        src: url('../fonts/FZYouHJW_Xian.eot?#iefix') format("embedded-opentype"),url('../fonts/FZYouHJW_Xian.woff') format("woff"),url('../fonts/FZYouHJW_Xian.ttf') format("truetype"),url('../fonts/FZYouHJW_Xian.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    @font-face {
        font-family: FZYouHJW;
        src: url('../fonts/FZYouHJW_ChaoXi.eot');
        src: url('../fonts/FZYouHJW_ChaoXi.eot?#iefix') format("embedded-opentype"),url('../fonts/FZYouHJW_ChaoXi.woff') format("woff"),url('../fonts/FZYouHJW_ChaoXi.ttf') format("truetype"),url('../fonts/FZYouHJW_ChaoXi.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    .login-wrap{
        position: absolute;width:100%;height: 100%;
        .el-row{
            height:100%;
            .el-col {
                height:100%;
                .grid-content {
                    height: 100%;
                    display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; 
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    -webkit-align-items: center;
                    align-items: center;
                    flex-direction: column;

                    h1{
                        font-family: FZYouHJW;font-size: 50px;
                    }
                    .row{
                        margin-top:20px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="login-wrap">
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <h1>Sign in</h1>
                    <div class="row">
                        <el-input v-model="username" placeholder="请输入用户名" style="width:300px"></el-input>
                    </div>
                    <div class="row">
                        <el-input v-model="password" type="password" placeholder="请输入密码" style="width:300px"></el-input>
                    </div>
                    <div class="row">
                        <el-button type="primary" style="width:300px" @click="login">登录</el-button>
                    </div>
                    <div class="row">
                        <el-alert
                            title="用户名和密码错误"
                            type="error"
                            center
                            show-icon style="width:300px" v-if="isError">
                        </el-alert>
                    </div>
                </div>
            </el-col>
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</template>

<script>
    import { signIn } from '../js/api.js'
    import { mapState } from 'vuex'

    export default{
        components:{
            
        },
        data(){
            return {
                username: '',
                password: '',
                isError: false
            }
        },
        computed:{
            ...mapState({
                permission: state => state.permission
            })
        },
        mounted(){
            if(this.permission){
                this.$router.push({path:'/page1'})
                this.$emit('on-login')
            }
        },
        methods:{
            login(){
                const self = this;
                self.isError = false;
                
                signIn({
                    username: this.username,
                    password: this.password
                }).subscribe(result => {
                    if(result.success){
                        this.$store.dispatch('setUserPermission', true)
                        this.$cookie.set('__YDept_Marketing_Dashboard', 'true', { expires: '30s' })
                        this.$emit('on-login')
                        this.$router.push({path:'/page1'})
                    }else{
                        self.isError = true;
                    }
                });
            }
        }
    }
</script>

