<template>
  <div class="home">
    <thunder-loading v-if="loading">
      <div class="loading-text">
        数据大屏加载中~
      </div>
    </thunder-loading>
    <container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator">separator</div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avg-age="averageAge"></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">
            <total-gender :data="genderData"></total-gender>
          </div>
          <div class="left5">
            <total-rider :data="riderData"></total-rider>
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerCenterData"></center-header>
          </div>
          <div class="right-top2">
            <transform-category
              :data="['ALL', '北京', '上海', '广州', '武汉', '成都']"
            ></transform-category>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1"><order-map></order-map></div>
              <div class="right-left2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178,209,126)', 'rgb(16,116,49)']"
                ></transform-category>
              </div>
              <div class="right-left3">
                <thunder-fly-box startColor="rgb(251,253,142)" lineColor="#000">
                   <real-time-order-data :data="realRTimeOrderData"></real-time-order-data>
                </thunder-fly-box>
               
              </div>
              <div class="right-left4">
                <schedule-view ></schedule-view>
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData"></sales-list>
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData"></sales-rank>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import UserScreenData from "../hooks/UserScreenData";

import AverageAge from "../components/AverageAge/index.vue";
import TopHeader from "../components/TopHeader/index.vue";
import TotalUser from "../components/TotalUser/index.vue";
import TotalDevice from "../components/TotalDevice/index.vue";
import TotalGender from "../components/TotalGender/index.vue";
import TotalRider from "../components/TotalRider/index.vue";
import HotCategory from "../components/HotCategory/index";
import CenterHeader from "../components/CenterHeader/index.vue";
import TransformCategory from "../components/TransformCategory/index.vue";
import SalesList from "../components/SalesList/index.vue";
import MapWarning from "../components/JiangSuMapWarning/index.vue";
import OrderMap from '../components/OrderMap/index.vue'
import RealTimeOrderData from '../components/RealTimeOrderData/index.vue'
import ScheduleView from '../components/ScheduleView/index.vue'
import SalesRank from '../components/SalesRank/index.vue'
// import GdpTimeLineChart from '../components/GdpTimeLineChart/index.vue'
// @ is an alias to /src
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  components: {
    AverageAge,
    TopHeader,
    TotalUser,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    TransformCategory,
    SalesList,
    // GdpTimeLineChart,
    // MapWarning,
    OrderMap,
    RealTimeOrderData,
    ScheduleView,
    SalesRank
  },
  setup() {
    const loading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });
    const screenData = UserScreenData();
    return {
      loading,
      ...screenData
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #thunder-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .header {
      width: 100%;
      height: 167px;
    }
    .separator {
      width: 100%;
      height: 10px;
    }
    .center {
      flex: 1;
      width: 100%;
      display: flex;
      .left {
        flex: 0 0 860px;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        .left1 {
          height: 300px;
        }
        .left2 {
          height: 320px;
        }
        .left3 {
          height: 280px;
        }
        .left4 {
          height: 230px;
        }
        .left5 {
          height: 360px;
        }
        .left6 {
          height: 360px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .right-top1 {
          width: 100%;
          height: 206px;
          background: darkgreen;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background: greenyellow;
          margin: 10px 0;
        }
        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
              background: grey;
            }
            .right-left2 {
              height: 80px;
              background: indigo;
            }
            .right-left3 {
              height: 350px;
          
            }
            .right-left4 {
              height: 220px;
              background: red;
            }
          }
          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 20px;
            .right-right1 {
              width: 100%;
              height: 999px;
            }
            .right-right2 {
              flex: 1;
              width: 100%;
              height: 650px;
              background: white;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
.loading-text {
  font-size: 20px;
  padding-top: 10px;
}
</style>
