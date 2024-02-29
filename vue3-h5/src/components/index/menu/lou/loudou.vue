<template>
    <div id="loudou" style="width: 100%;height: 100%;">

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref ,defineProps} from 'vue'
import * as echarts from 'echarts';
let {percent} = defineProps(['percent']) 
onMounted(() => {
    type EChartsOption = echarts.EChartsOption;
    var chartDom = document.getElementById('loudou')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
        title: {
            text: '销售'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            {
                name: 'Expected',
                type: 'funnel',
                left: '10%',
                width: '80%',
                emphasis: {
                    label: {
                        position: 'inside',
                    }
                },
                data: [
                    { value: 500, name: '初步洽谈' },
                    { value: 350, name: '深入沟通' },
                    { value: 250, name: '产品报价' },
                    { value: 150, name: '成交商机' },
                    { value: 120, name: '流失商机' },
                ]
            },
            {
                name: 'Actual',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    position: 'inside',
                    formatter: '{c}%',
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        position: 'inside',
                        formatter: '{b}: {c}%'
                    }
                },
                data: percent,
                // Ensure outer shape will not be over inner shape when hover.
                z: 100
            }
        ]
    };

    option && myChart.setOption(option);



})
</script>

<style scoped></style>