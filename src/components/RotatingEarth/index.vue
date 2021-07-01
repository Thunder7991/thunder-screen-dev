<template>
  <div class="rotating-earth">
    <vue-echarts :option="options"></vue-echarts>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import "echarts-gl";
const ROOT_PATH = "./";
export default {
  name: "RotatingEarth",
  setup() {
    const options = ref({});
    const update = () => {
      options.value = {
        globe: {
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`, //基础纹理贴图
          environment: `${ROOT_PATH}assets/star-bg.jpg`, //背景环境贴图
          heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`, //高度纹理贴图
          displacementScale: 0.1, //地球顶点位置,可以使地球更加立体
          shading: "realistic",
          realisticMaterial: {
            //真实材质配置
            roughness: 0 //材质细节纹理的位移
            // postEffect:''
          },
          postEffect: {
            //后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果
            enable: true //是否开启后处理特效 默认是关闭
          },
          light: {
            main: {
              //场景主光源的设置，在 globe 组件中就是太阳光。
              intensity: 5, //主光源的强度。
              color: "#fff",
              shadow: true,
              shadowQuality:'high',
            },
            ambient:{ //全局的环境光配置
              intensity:0.5  //环境光的强度。
            }
          }
        }
      };
    };
    onMounted(update);
    return {
      options
    };
  }
};
</script>

<style lang="scss" scoped>
.rotating-earth {
  width: 100%;
  height: 100%;
}
</style>
