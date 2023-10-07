<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;
onMounted(() => {
  // 初始化地图
  window._AMapSecurityConfig = {
    securityJsCode: "52e5e4b8529bc3105202da302ff8e034",
  };
  AMapLoader.load({
    key: "7f29831af25b6784c38fb37f385c5419", // 申请好的Web端开发者Key，首次调用 load 时必填
    jscode: "52e5e4b8529bc3105202da302ff8e034",
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.Scale",
      "AMap.OverView",
      "AMap.ToolBar",
      "AMap.MapType",
      "AMap.PlaceSearch",
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "2D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
        resizeEnable: true,
      });
    })
    .catch((e) => {
      console.log(e, "地图加载失败。。。");
    });
});

// 地图打点

// 清除所有打点

// 地图缩小至初始化

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <button @click="addMark">添加</button>
  <button @click="autoInput">搜索</button>
  <div id="container"></div>
  <div id="panel"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
#panel {
  position: absolute;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
</style>
