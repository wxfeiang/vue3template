<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 11:57:53
 * @LastEditTime: 2023-08-20 16:30:15
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

  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger"> {{ count }}</el-button>

  <Menu />
  <a href="s" class="text-green-700">dfnkdlfnlkdn</a>
  <div class="flex bg-orange-50">eeeeeee1</div>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex justify-between space-x-4"
  >
    <div class="shrink-0">
      <img class="h- w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
