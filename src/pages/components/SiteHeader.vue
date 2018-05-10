<style lang="scss" scoped>
    @font-face {
        font-family: FZYouHJW;
        src: url('../../fonts/FZYouHJW_Xian.eot');
        src: url('../../fonts/FZYouHJW_Xian.eot?#iefix') format("embedded-opentype"),url('../../fonts/FZYouHJW_Xian.woff') format("woff"),url('../../fonts/FZYouHJW_Xian.ttf') format("truetype"),url('../../fonts/FZYouHJW_Xian.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    @font-face {
        font-family: FZYouHJW;
        src: url('../../fonts/FZYouHJW_ChaoXi.eot');
        src: url('../../fonts/FZYouHJW_ChaoXi.eot?#iefix') format("embedded-opentype"),url('../../fonts/FZYouHJW_ChaoXi.woff') format("woff"),url('../../fonts/FZYouHJW_ChaoXi.ttf') format("truetype"),url('../../fonts/FZYouHJW_ChaoXi.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    .site-header{
        font-size: 16px;
        background: #fff;
        height: 60px;
        border-bottom: 1px solid #ebebeb;
        position: fixed;
        width:100%;
        z-index: 100;
        transition: all .5s ease-out;
        background-image: linear-gradient(to right, #5a77d4, #3c4c9d);
        box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);

        .site-logo{
            font-family: FZYouHJW;font-size: 30px;height: 60px;line-height: 60px;float: left;padding-left: 20px;color:#fff;
        }
        
        .login-wrap{
            float: right;
            padding:10px 18px 0 0;
            color: #fff;
            a.link{
                font-size: 14px;color: #fff;margin:0 30px;
                &.cur {
                    color:#35a5a6;
                }
            }
            .username{
                font-size: 14px;margin-left: 5px;
            }

            span{color: #ebebeb;font-size:12px;}

            .avatar{
                width:40px;height:40px;border-radius: 50%;background-position: center center;background-repeat: no-repeat;
                display:inline-block;

                img{width:40px;height:40px;border-radius: 50%;}
            }
        }
    }
</style>

<template>
    <div class="site-header">
        <div class="login-wrap middle">
            <a class="avatar"><img :src="userinfo.avatar" alt=""></a>
            <a class="username">{{userinfo.username}}</a>
            <a class="link">注销</a>
        </div>
        <div class="site-logo">LOGO</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default{
        components:{
            
        },
        data(){
            return {
            }
        },
        computed:{
            ...mapState({
                userinfo: state => state.userinfo
            })
        },
        mounted(){
            
        },
        methods:{
            
        }
    }
</script>

