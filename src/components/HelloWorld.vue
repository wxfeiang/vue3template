<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-03-29 22:55:03
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->

<script setup lang="ts">
import Menu from "./menu";
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <Menu />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
