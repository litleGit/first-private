<template>
  <div ref="chart" style="width: 100%;height: 100%;">

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import * as echarts from 'echarts';
let { data, type, mu1, mu2,names } = defineProps(['data', 'type', 'mu1', 'mu2', 'names'])
const chart = ref(null);
onMounted(() => {
  var app: any = {};
  type EChartsOption = echarts.EChartsOption;
  var chartDom = chart.value
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ] as const;

  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {} as Record<string, string>)
    },
    distance: {
      min: 0,
      max: 100
    }
  };

  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption: BarLabelOption = {
        rotate: app.config.rotate as BarLabelOption['rotate'],
        align: app.config.align as BarLabelOption['align'],
        verticalAlign: app.config
          .verticalAlign as BarLabelOption['verticalAlign'],
        position: app.config.position as BarLabelOption['position'],
        distance: app.config.distance as BarLabelOption['distance']
      };
      myChart.setOption<echarts.EChartsOption>({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };

  type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

  const labelOption: BarLabelOption = {
    show: true,
    position: app.config.position as BarLabelOption['position'],
    distance: app.config.distance as BarLabelOption['distance'],
    align: app.config.align as BarLabelOption['align'],
    verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: app.config.rotate as BarLabelOption['rotate'],
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: type || ['默认1','默认2']
    },
    // 工具栏
    // toolbox: {
    //   show: true,
    //   orient: 'vertical',
    //   left: 'right',
    //   top: 'center',
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ['line', 'bar', 'stack'] },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: names
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: type[0] || '默认1',
        type: 'bar',
        barGap: 0,
        // label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: mu1
      },
      {
        name: type[1] || '默认2',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: mu2
      },

    ]
  };

  option && myChart.setOption(option);
})


</script>

<style></style>