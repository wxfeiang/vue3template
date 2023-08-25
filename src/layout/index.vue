<script setup lang="ts"></script>
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
        <router-view></router-view>
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
</style>
