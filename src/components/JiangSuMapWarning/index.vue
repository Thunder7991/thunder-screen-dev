<template>
  <div class="JsMapWarning" style="width:100%;height:100%">
    <vue-echarts :option="options"></vue-echarts>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
import * as echarts from "echarts";
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: "JsMapWarning",
  setup() {
    const options = ref({});
    let timer = null
    const update = () => {
      fetch("http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json")
        .then(res => res.json())
        .then(data => {
          const center = []; 
          data.features.forEach(item => {
            if (item.properties) {
              center.push({
                key: item.properties.name,
                value: item.properties.center
              });
            }
          });
          echarts.registerMap("jiangsu", data); //地图注册
          options.value = {
            visualMap: {
              show: true, //展示标识
              max: 100, //最大值
              seriesIndex: [0],
              inRange: {
                color: ["#a5dcf4", "#006edd"]
              }
            },
            geo: [
              {
                map: "jiangsu",
                zoom: 1, //默认级别
                roam: false, //启动鼠标滚轮的地图搜房
                scaleLimit: {
                  //最大和最小缩放比例
                  min: 0,
                  max: 3
                },
                itemStyle: {
                  areaColor: "#013c62",
                  shadowColor: "#013c62",
                  shadowBlur: 20, //模糊度
                  shadowOffsetX: -5,
                  shadowOffsetY: 15
                }
              }
            ],
            series: [
              {
                type: "map",
                map: "jiangsu",
                zoom: 1,
                label: {
                  show: true,
                  color: "#fff"
                },
                itemStyle: {
                  borderColor: "#2980b9",
                  borderWidth: 1,
                  areaColor: "#12235c"
                },
                emphasis: {
                  label: {
                    color: "#fff",
                    show: true
                  },
                  itemStyle: {
                    areaColor: "#fa8c16",
                    borderWidth: 0,
                    color: "green"
                  }
                },
                data: center.map(item => {
                  const value = Math.random() * 100;
                  return {
                    name: item.key,
                    value //人口为百万
                  };
                })
              },
               {
                type: "effectScatter", //散点图
                data: [{ value: center[0].value, city: center[0].key }],
                coordinateSystem: "geo",
                symbolSize: 16,
                itemStyle: {
                  color: "#fa8c16"
                },
                emphasis: {
                  show: true
                },
                label: {
                  show: true,
                  position: "top",
                  backgroundColor: "rgba(254,174,33,0.8)",
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: "#fff",
                  rich: {
                    title: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    },
                    content: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    }
                  },
                  formatter: function(params) {
                    return `{title|${params.data.city}}\n{content|发生 ** 事件}`;
                  }
                }
              },
              {
                type: "effectScatter", //散点图
                data: [{ value: center[0].value, city: center[0].key }],
                coordinateSystem: "geo",
                symbolSize: 16,
                itemStyle: {
                  color: "#e93f42"
                },
                emphasis: {
                  show: true
                },
                label: {
                  show: true,
                  position: "top",
                  backgroundColor: "rgba(233,63,66,0.9)",
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: "#fff",
                  rich: {
                    title: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    },
                    content: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    }
                  },
                  formatter: function(params) {
               
                    return `{title|${params.data.city}}\n{content|发生 ** 事件}`;
                  }
                }
              },
              {
                type: "effectScatter", //散点图
                data: [{ value: center[0].value, city: center[0].key }],
                coordinateSystem: "geo",
                symbolSize: 16,
                itemStyle: {
                  color: "#08baec"
                },
                emphasis: {
                  show: true
                },
                label: {
                  show: true,
                  position: "top",
                  backgroundColor: "rgba(8,186,236,0.9)",
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: "#fff",
                  rich: {
                    title: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    },
                    content: {
                      padding: [0, 10, 0, 10],
                      color: "#fff"
                    }
                  },
                  formatter: function(params) {
                    return `{title|${params.data.city}}\n{content|发生 ** 事件}`;
                  }
                }
              }
            ]
          };

          //测试随机展示事件信息
          timer = setInterval(() => {
            const _options = cloneDeep(options.value)
            for (let i = 1; i < 4; i++) {
              _options.series[i].data = []
            }
            //生成城市随机数
            const citylLength = center.length
            const cityIndex = Math.floor(Math.random() * citylLength)
     
            const eventIndex = Math.floor(Math.random() * 3) + 1
            _options.series[eventIndex].data = [{
              city:center[cityIndex].key,
              value:center[cityIndex].value
            }]
            options.value = _options
          },2000)
        })
        .catch(err => {});
    };
    onMounted(update);
    onUnmounted(() => timer && clearInterval(timer))
    return {
      options
    };
  }
};
</script>

<style lang="scss" scoped></style>
