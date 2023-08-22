<script lang="ts" setup>
import {
  BorderBox11 as DvBorderBox11,
  BorderBox5 as DvBorderBox5,
  BorderBox6 as DvBorderBox6,
} from "@kjgl77/datav-vue3";
</script>
<template>
  <!--  我是大屏-->
  <dv-full-screen-container style="background-color: black">
    ​
    <div class="module-box">
      <div style="flex: 0 1 30%">
        <div class="flex flex-direction">
          <dv-border-box-5 style="height: 20vh">dv-border-box-8</dv-border-box-5>
          <dv-border-box-6 style="height: 20vh">dv-border-box-8</dv-border-box-6>
          <dv-border-box-11
            style="height: 20vh"
            title="dv-border-box-11"
          ></dv-border-box-11>
        </div>
      </div>
      <div style="flex: 0 1 40%">
        <dv-border-box-11 style="height: 60vh; width: 100%" title="dv-border-box-11">
        </dv-border-box-11>
      </div>
      <div style="flex: 0 1 30%">
        <div class="flex flex-direction"></div>
        <dv-border-box-11 style="height: 30vh" title="dv-border-box-11">
        </dv-border-box-11>
        <dv-border-box-11
          style="height: 30vh"
          title="dv-border-box-11"
        ></dv-border-box-11>
      </div>
    </div>
    <div class="module-box">
      <div style="flex: 0 1 50%">
        <dv-border-box-11 style="height: 38vh" title="dv-border-box-11">
        </dv-border-box-11>
      </div>
      <div style="flex: 0 1 50%">
        <dv-border-box-11
          style="height: 38vh"
          title="dv-border-box-11"
        ></dv-border-box-11>
      </div>
    </div>
  </dv-full-screen-container>
  ​
</template>
<style>
.module-box {
  display: flex;
}
</style>
