<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
  AMapLoader.load({
    key: "7f29831af25b6784c38fb37f385c5419", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});

const addMark = () => {
  let marker = new AMap.Marker({
    icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    position: [116.406315, 39.908775],
    offset: new AMap.Pixel(-13, -30),
  });
  marker.setMap(map);
};
</script>

<template>
  <button @click="addMark">添加</button>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
