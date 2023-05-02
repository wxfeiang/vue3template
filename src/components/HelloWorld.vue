<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-05-03 00:32:41
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->

<script setup lang="ts">
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <van-button type="primary">主要按钮</van-button>
</template>

<style scoped>
h1 {
  color: aquamarine;
  font-size: 50px;
}
.read-the-docs {
  color: #888;
}
</style>
