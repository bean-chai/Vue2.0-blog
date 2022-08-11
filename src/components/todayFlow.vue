<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 16:27:54
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-11 17:23:36
 * @FilePath: \blog-demo\src\components\todayFlow.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="todayBox">
    <div id="todayFlow"  class="numberTrend-echarts-line" style="height:90vh">今天流量是</div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
mounted() {
    this.init()
  },
  methods: {
    init() {
      const self = this
      self.line = echarts.init(document.getElementById('todayFlow'))
      var option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '25%',
          top: '10%'
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#19234b',
          padding: 10,
          enterable: true,
          borderColor: '#2c5780',
          borderRadius: 0,
          textStyle: {
            color: '#c7d5eb'
          },
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(126,199,255,0)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(126,199,255,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(126,199,255,0)'
                  }
                ],
                global: false
              }
            }
          }
        },
        legend: {
          textStyle: {
            color: '#B8D3F9'
          },
          bottom: '5%',
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 6,
          borderRadius: 0,
          data: ['2018年', '2019年', '2020年', '2021年', '2021同比变化']
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: [
              '2022-1',
              '2022-2',
              '2022-3',
              '2022-4',
              '2022-5',
              '2022-6',
              '2022-7',
              '2022-8',
              '2022-9',
              '2022-10',
              '2022-11',
              '2022-12',
            ],
            axisPointer: {
              type: 'line'
            },
            axisLabel: {
              rotate: 35,
              interval: 0,
              textStyle: {
                color: '#7ec7ff',
                // padding: 16,
                fontSize: 12
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#192a44'
                }
              },
              axisTick: {
                show: false
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '网站浏览人数统计',
            nameTextStyle: {
              color: '#7ec7ff',
              fontSize: 20,
              padding: 10
            },
            min: 0,
            scale: false, 
            position: 'left',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(118, 131, 164, 0.2)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              show: true,
              formatter: '{value}',
              textStyle: {
                color: '#7ec7ff',
                padding: 5
              }
            },
            axisTick: {
              show: false
            }
          },
          {
            type: 'value',
            name: '降低比',
            nameTextStyle: {
              color: '#7ec7ff',
              fontSize: 12,
              padding: 10
            },
            min: -50,
            scale: false,
            position: 'right',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(118, 131, 164, 0.2)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              show: true,
              formatter: '{value}',
              textStyle: {
                color: '#7ec7ff',
                padding: 5
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  formatter(params) {
                    return params.data.value
                  },
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#5470c6',
                    fontSize: 11
                  }
                }
              }
            },
            name: '2018年',
            type: 'bar',
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function(value) {
                return value
              }
            },
            data: [
              7.1, 1.2, 0, 0, 0, 0, 23, 0, 21, 0, 0, 24, 5.9, 21, 12.7, 22.9, 20.4, 0,
              0, 0, 0, 15.7, 0, 0, 2, 0, 1.7
            ]
          },
          {
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  formatter(params) {
                    return params.data.value
                  },
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#91cc75',
                    fontSize: 11
                  }
                }
              }
            },
            name: '2019年',
            type: 'bar',
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function(value) {
                return value
              }
            },
            data: [
              20.9, 0, 0, 19.7, 6, 24.5, 0, 0, 25.3, 0, 11, 19.3, 0, 23.7, 0, 0, 18.1,
              23.5, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]
          },
          {
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  formatter(params) {
                    return params.data.value
                  },
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#fac858',
                    fontSize: 11
                  }
                }
              }
            },
            name: '2020年',
            type: 'bar',
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function(value) {
                return value
              }
            },
            data: [
              16, 13.8, 15.9, 16.6, 11.2, 17, 22.7, 13.1, 18.1, 17.2, 17, 18.1, 13,
              18.8, 17, 17.2, 18.1, 17, 15, 0, 0, 0, 0, 0, 0, 0, 0
            ]
          },
          {
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  formatter(params) {
                    return params.data.value
                  },
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#ee6666',
                    fontSize: 11
                  }
                }
              }
            },
            name: '2021年',
            type: 'bar',
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function(value) {
                return value
              }
            },
            data: [
              3.2, 2, 11.1, 12.2, 6.8, 14.5, 20.9, 11.7, 17.2, 16.4, 16.6, 17.8, 12.9,
              18.7, 18.5, 18.8, 20.1, 21.9, 20.8, 18.5, 13.2, 15.6, 18, 15, 15, 14, 14
            ]
          },
          {
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  formatter(params) {
                    return params.data.value
                  },
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#73c0de',
                    fontSize: 11
                  }
                }
              }
            },
            name: '2021同比变化',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function(value) {
                return value
              }
            },
            data: [
              -12.8, -11.8, -4.8, -4.4, -4.4, -2.5, -1.8, -1.4, -0.9, -0.8, -0.4,
              -0.3, -0.2, -0.1, 1.5, 1.6, 2.1, 4.1, 5.8
            ],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          }
        ]
      }
      self.line.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.todayBox{
  // z-index: 999;
  margin-left: 10vw;
  margin-top: 10vh;
  width: 90vw;
  height: 90vh;
}
</style>