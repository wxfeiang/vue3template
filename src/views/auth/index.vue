<script setup lang="ts">
const { Login, userInfo, loginFrom, testToke } = useAuth();
</script>
<template>
  <div class="">
    用户名:{{ loginFrom.username }} 密码:{{ loginFrom.password }}
    <el-button type="success" @click="Login">点击登陆</el-button>

    <el-button type="success" @click="testToke">测试token</el-button>
  </div>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
