<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-07-26 10:03:28
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->

<script setup lang="ts">
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);

const dd = () => {
  console.log("🍑[dd]:", 1);
  count.value++;
  ElMessage("thiccs iccccs a message.🍑[dd]:,");
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <el-button @click="dd">默认dd按钮</el-button>
  <el-button type="primary" v-loading="false">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger"> {{ count }}</el-button>

  <Menu />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
