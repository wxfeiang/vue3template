<script setup lang="ts"></script>
<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card> 项目情况 </el-card>
    </el-col>
    <el-col :span="8">
      <el-card> 组件情况 </el-card>
    </el-col>
    <el-col :span="8">
      <el-card> 其他情况 </el-card>
    </el-col>
  </el-row>
  <div class="map">
    <MapContainer></MapContainer>
  </div>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.map {
  padding: 20px;
}
</style>
