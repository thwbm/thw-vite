<template>
  <el-container id="layout">
    <div style="width: 260px">
      <el-aside>Aside</el-aside>
    </div>
    <el-container>
      <div>
        <el-header>Header</el-header>
      </div>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(): {} {
    return {};
  },
});
</script>

<style lang="scss" scope>
@import "index.scss";
</style>
