<style lang="scss" scoped>
    
</style>

<template>
    <div class="page-wrap">
        <div class="page-content">
            <h1>Page1</h1>
            <div>{{page1.value1}}</div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/tooltip'
    import graphic from 'echarts/lib/util/graphic.js'

    export default{
        components:{
            chart: ECharts
        },
        data(){
            return {
                isAnim: false
            }
        },
        computed:{
            ...mapState({
                currentIndex: state => state.currentIndex,
                page1: state => state.page1
            }),
            ...mapGetters({
                mapDataStore: 'mapData'
            }),
            mapData() {
                return this.mapDataStore[this.currentIndex % this.mapDataStore.length];
            }
        },
        mounted(){
            this.isAnim = true;
        },
        methods:{
            
        }
    }
</script>

