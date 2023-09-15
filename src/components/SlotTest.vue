<script setup lang="ts">
// import { defineComponent } from 'vue' // 自动导入去掉引入
let data = reactive({
  a: 1,
  b: 2,
});
</script>
<template>
  <div class="">
    这里是组件本身的n内容---
    <slot>
      <div>不插入内容的时候回显示====</div>
    </slot>
    <slot name="header"></slot>
    <!-- 作用域插槽 -->
    <!-- 要返回出的data -->
    <slot text="我是子组件小猪课堂" :count="1" name="footer" :data="data">
      此处写值无效
    </slot>
  </div>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
