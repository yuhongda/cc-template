<style lang="scss" scoped>

    @function toRem($n) {
        @return $n / 75 + rem;
    }
    .page-content{
        height: 100%;
        & > .el-row {
            height: 44%;
            margin-top: 3%;
            .el-col {
                border-radius: 4px;
                height: 100%;
                position: relative;

                .grid-content {
                    border-radius: 4px;
                    width:100%;
                    height: 100%;
                    box-sizing: border-box;

                    .inner{
                        height: 50%;
                        line-height: 40px;
                        white-space: nowrap;

                        & > .el-row{
                            height: 50%;
                            .el-col{height:100%;}
                        }
                    }

                    h2{
                        font-size: 40px;line-height: 100%;font-family: FZYouHJW;color: #18FFEE;
                        & > span{font-size:50px;margin-right: 20px;font-family: Teko_Light;letter-spacing: 2px;font-weight:100;}
                    }

                    .field{
                        color: #50E3C2;font-size:20px;font-size: 1.4vw;
                        .unit{font-size: 12px;}
                    }
                    .value{text-align: right;}
                    .num{color:#55EA74;font-size:34px;font-size: 2.5vw;font-family: Teko_Light;letter-spacing: 2px;font-size:40px;font-size: 3vw;}
                }

                .frame{
                    border: 50px solid;
                }
            }
        }
    }
    .update-time{
        position: absolute;left:20px; bottom:20px;font-size: 14px;color: #aaa;font-weight: 200;
    }
</style>

<template>
    <div :class="{'page-wrap':true, 'page-wrap-anim':isAnim}">
        <div class="page-title">
            <h1>实时监控</h1>
            <p>Real-time monitoring</p>
        </div>
        <div class="page-content">
            <el-row>
                <el-col :span="2"><div class="grid-content"></div></el-col>
                <el-col :span="9">
                    <div class="grid-content frame">
                        <div class="inner">
                            <h2><span>01</span>采购</h2>
                        </div>
                        <div class="inner">
                            <el-row gutter="20">
                                <el-col :span="12" class="field">采购在途件数<span class="unit">(件)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value1"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                            <el-row gutter="20">
                                <el-col :span="12" class="field">采购在途金额<span class="unit">(万元)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value2"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content"></div></el-col>
                <el-col :span="9">
                    <div class="grid-content frame">
                        <div class="inner">
                            <h2><span>02</span>入库</h2>
                        </div>
                        <div class="inner">
                            <el-row gutter="20">
                                <el-col :span="12" class="field">当日累计采购入库件数<span class="unit">(件)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value3"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                            <el-row gutter="20">
                                <el-col :span="12" class="field">当日累计采购入库金额<span class="unit">(万元)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value4"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><div class="grid-content"></div></el-col>
                <el-col :span="9">
                    <div class="grid-content frame">
                        <div class="inner">
                            <h2><span>03</span>调拨</h2>
                        </div>
                        <div class="inner">
                            <el-row gutter="20">
                                <el-col :span="12" class="field">内配在途件数<span class="unit">(件)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value5"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                            <el-row gutter="20">
                                <el-col :span="12" class="field">内配在途金额<span class="unit">(万元)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value6"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content"></div></el-col>
                <el-col :span="9">
                    <div class="grid-content frame">
                        <div class="inner">
                            <h2><span>04</span>退供</h2>
                        </div>
                        <div class="inner">
                            <el-row gutter="20">
                                <el-col :span="12" class="field">退供应商在途件数<span class="unit">(件)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value7"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                            <el-row gutter="20">
                                <el-col :span="12" class="field">退供应商在途金额<span class="unit">(万元)</span></el-col>
                                <el-col :span="12" class="value">
                                    <ICountUp
                                        class="num"
                                        :startVal="0"
                                        :endVal="page2Data.value8"
                                        :duration="2"
                                    />
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content"></div></el-col>
            </el-row>
        </div>
        <div class="update-time">数据更新时间：{{page2Data.updateTime}}</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { mapState, mapGetters } from 'vuex'
    import { thousands } from '../js/util.js'
    import ICountUp from 'vue-countup-v2'

    export default{
        components:{
            ICountUp
        },
        computed:{
            ...mapState({
                page2Data: state => state.page2
            })
        },
        data(){
            return {
                isAnim: false
            }
        },
        mounted(){
            this.isAnim = true;
        },
        methods:{
            formatter(value){
                return thousands(value.toFixed())
            }
        }
    }
</script>

