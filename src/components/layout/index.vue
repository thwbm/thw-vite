<template>
  <el-container id="layout">
    <el-aside>
      <menuComponent />
    </el-aside>
    <el-container>
      <el-header> header </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import menuComponent from "./module/menuComponent.vue";

export default defineComponent({
  components: { menuComponent },
  setup(): {} {
    return {};
  },
});
</script>

<style lang="scss" scope>
@import "module/index.scss";
</style>
