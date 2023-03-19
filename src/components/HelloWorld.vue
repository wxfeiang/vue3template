<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-03-19 10:46:46
 * @FilePath: /vue3template/src/components/HelloWorld.vue
-->
<script setup lang="ts">
defineProps<{ msg: string }>();

console.log(" HI: ====", import.meta.env.VITE_BASE_API);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
