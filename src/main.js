import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import thunderDatav from "thunder-libs-dev";
import "./plugins/echarts";
// import ECharts from 'vue-echarts'
createApp(App)
  .use(store)
  .use(router)
  .use(thunderDatav)
  .mount("#app");
