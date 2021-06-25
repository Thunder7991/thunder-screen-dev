<template>
  <div style="width:500px;height:400px;">
    <base-scroll-list
      :config="config"
    ></base-scroll-list>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Test",
  setup() {
    const config = ref({});

  const  headerData = ["姓名", "年龄", "月薪"];
  const  headerStyle = [{ color: "red" }, { color: "red" }, { color: "red" }];
  config.value = {
    headerData,
    headerStyle,
    headerBg:'rgb(80,80,80)',
    headerHeight:'40',
    headerIndex:true
  }
    return {
    config
    };
  }
};
</script>

<style lang="scss" scoped></style>
