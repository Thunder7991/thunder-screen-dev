<template>
  <!-- <div id="nav">
      <test-component></test-component>
    <svg width="30" height="30" style="color:red">
      <use href="#more"></use>
    </svg>
    <svg width="50" height="50" style="color:green">
      <use href="#filledArrowRight"></use>
    </svg>
    <svg width="50" height="50" style="color:green">
      <use href="#arrowRight"></use>
    </svg>
    <svg-icon name="arrowRight" :style="{width:50,height:50,color:'red'}"></svg-icon>
    <svg-icon class="iconfont " name="icon-jisuanqi" :style="{width:50,height:50,color:'red'}"></svg-icon>
    
    <svg-animation></svg-animation>
    <thunder-loading width="100" height="100" duration="3">
      <div style="font-size:16px;color:red">
        数据大屏加载中... ...
      </div>
    </thunder-loading>
  <div style="width:50%;background:#000">
    <thunder-fly-box>
      <div>???</div>
      <div>???</div>
      <div>???</div>
      <div>???</div>
      <div>???</div>
      <div>???</div>
      <div>???</div>
      <div>???</div>
    </thunder-fly-box>
  </div>
  </div> -->
  <router-view />
</template>

<style lang="scss">
html,body,#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.svg-wrapper {
  width: 20px;
  height: 20px;
  color: blue;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
