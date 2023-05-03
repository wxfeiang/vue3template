<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-05-03 11:53:21
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->

<script setup lang="ts">
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <van-button color="#7232dd">单色按钮</van-button>
  <van-button color="#7232dd" plain>单色按钮</van-button>
  <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
    渐变色按钮
  </van-button>
</template>

<style scoped>
h1 {
  color: #000;
  font-size: 50px;
}
.read-the-docs {
  color: #888;
}
</style>
