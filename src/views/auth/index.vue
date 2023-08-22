<script setup lang="ts">
const { Login, userInfo, loginFrom } = useAuth();
</script>
<template>
  <dv class="">
    <HelloWorld></HelloWorld>

    用户名:{{ loginFrom.username }} 密码:{{ loginFrom.password }}
    <el-button type="success" @click="Login">点击登陆</el-button>
  </dv>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
