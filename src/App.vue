<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <!-- <n-theme-editor> -->
    <n-global-style />
    <!-- <n-button @click="theme = darkTheme">深色</n-button>
      <n-button @click="theme = null">浅色</n-button> -->
    <router-view />
    <!-- </n-theme-editor> -->
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NThemeEditor, darkTheme, zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: { NThemeEditor },
  setup() {
    return {
      darkTheme,
      theme: ref(null),
      zhCN,
      dateZhCN,
    }
  },
})
</script>
