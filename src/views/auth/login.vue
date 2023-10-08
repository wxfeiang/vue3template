<script setup lang="ts">
const { Login, userInfo, loginFrom, testToke } = useAuth();
</script>
<template>
  <div class="h-100 flex justify-center items-center bg-blue-200">
    <div class="w-96 h-70 bg-white p-10 rounded-md text-center">
      <el-form :model="loginFrom" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="loginFrom.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginFrom.password" />
        </el-form-item>
      </el-form>

      <el-button type="primary" @click="Login" class="mt-6">点击登陆</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
