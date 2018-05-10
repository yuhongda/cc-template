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
        font-style: normal;
    }
    .site-sider{
        position: fixed;top:60px;left:0;width: 200px;height: 100%;height: 100%;z-index: 100;
        .site-menu{
            height: 100%;
        }
        .el-menu{
            border-right: 0;
            .el-menu-item{
                &.is-active{
                    background: #111 !important;
                }
            }
        }
    }
</style>
<!--
<template>
    <div class="site-sider">
        <el-menu :default-active="currentPage" class="site-menu" router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-for="item in menuData">
                <template v-if="item.type == 'group'">
                    <el-submenu :index="currentPage">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <el-menu-item :index="subItem.link" v-for="subItem in item.children">{{subItem.name}}</el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.link">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
-->
<script>
    import { mapState } from 'vuex'

    export default{
        components:{
            
        },
        data(){
            return {
                isCollapse: false
            }
        },
        computed:{
            ...mapState({
                permission: state => state.permission,
                menuData: state => state.menuData,
                currentPage: state => state.currentPage
            })
        },
        mounted(){
        },
        render(h){

            const generateMenu = (items) => {
                return items.map(item => {
                    if(item.type == 'group'){
                        return h('el-submenu',
                            {
                                props:{
                                    index: this.currentPage
                                }
                            },
                            [
                                h('template',
                                    {
                                        slot: 'title'
                                    },
                                    [
                                        h('i',{'class':{'el-icon-menu': true}}),
                                        h('span',{slot:'title'}, item.name)
                                    ]
                                ),
                                item.children.map(subItem => {
                                    return h('el-menu-item', 
                                        {
                                            props:{
                                                index: subItem.link
                                            }
                                        },
                                        subItem.name
                                    )
                                })
                            ]
                        )
                    }else{
                        return h('el-menu-item', 
                            {
                                props:{
                                    index: item.link
                                }
                            },
                            [
                                h('i',{'class':{'el-icon-menu': true}}),
                                h('span',{slot:'title'}, item.name)
                            ]
                        )
                    }
                })
            }

            return h('div', 
                {'class':{'site-sider':true}},
                [
                    h('el-menu',
                        {
                            'class':{
                                'site-menu': true
                            },
                            props: {
                                'default-active': this.currentPage,
                                'background-color': '#242433',
                                'text-color': '#fff',
                                router: true,
                                collapse: this.isCollapse
                            },
                            on: {
                                open: this.handleOpen,
                                close: this.handleClose
                            }
                        },
                        generateMenu(this.menuData)
                    )
                ]
            )
        },
        methods:{
            
        }
    }
</script>

