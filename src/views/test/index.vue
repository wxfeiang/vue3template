<script setup lang="ts">
// import { defineComponent } from 'vue' // 自动导入去掉引入
</script>
<template>
  <HelloWorld></HelloWorld>
  <div>======默认=============</div>
  <SlotTest> </SlotTest>
  <div>========插入到默认===========</div>
  <SlotTest>
    <div>插入了默认的内容 default====> 占用了</div>
  </SlotTest>

  <div>=======具名============</div>
  <SlotTest>
    <template #header>
      <div>我是 header 具名插槽==</div>
    </template>
  </SlotTest>

  <div>=======作用域插槽============</div>
  <SlotTest>
    <template #footer="slotProps">
      <div>{{ slotProps }}</div>
    </template>
  </SlotTest>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
