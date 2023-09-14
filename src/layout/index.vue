<script setup lang="ts">
const testnode = (id: any) => {
  alert(id);
};
</script>
<template>
  <el-container class="h-100">
    <el-aside width="200px" class="sider_style">
      <div class="logo">logo</div>
      <el-menu
        active-text-color="#1890ff"
        background-color="#001628"
        default-active="1"
        text-color="#fff"
        router
        unique-opened
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>主页</span>
          </template>

          <el-menu-item index="/layout/home">项目介绍</el-menu-item>
          <el-menu-item index="/">返回登录</el-menu-item>
          <el-menu-item index="/layout/test">测试页面</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>菜单组件</span>
          </template>
          <el-menu-item index="/layout/menu">菜单</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="sider_style"> </el-header>
      <el-main>
        <div class="gis">
          <el-button
            type="primary"
            size="default"
            @click="testnode(1)"
            style="margin-top: 400px"
            >gis 点击测试</el-button
          >
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-menu {
  border-right: none !important;
}
.logo {
  height: 100px;
  color: #fff;
  line-height: 100px;
  text-align: center;
  font-size: 20px;
}
.el-main {
  position: relative;
}
.gis {
  position: absolute;
  left: 0px;
  right: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
  z-index: 0;
}
.content {
  position: absolute;
  /* left: 0;
  right: 0; */
  width: 100%;
  z-index: 1;
}
</style>
