<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-05-21 22:51:49
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->

<script setup lang="ts">
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);
const dd = () => {
  console.log("🍑[dd]:", 1);
  ElMessage("this is a message.");
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button @click="dd">默认按钮</el-button>
  <el-button type="primary" v-loading="true">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>

  <Menu />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
