<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
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
    resizeEnable: true,
  });
  marker.setMap(map);
};

// 获取搜索信息
const autoInput = () => {
  AMap.plugin(["AMap.PlaceSearch"], function () {
    //构造地点查询类
    var placeSearch = new AMap.PlaceSearch({
      pageSize: 5, // 单页显示结果条数
      pageIndex: 1, // 页码
      city: "兰州", // 兴趣点城市
      citylimit: true, //是否强制限制在设置的城市内搜索
      map: map, // 展现结果的地图实例
      panel: "panel", // 结果列表将在此容器中进行展示。
      autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    //关键字查询
    placeSearch.search("兰州大学");
  });
};
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
