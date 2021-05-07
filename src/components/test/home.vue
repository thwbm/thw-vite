<template>
  <div>
    <el-color-picker v-model="color"></el-color-picker>
    <el-button type="primary">主要按钮</el-button>
    <span class="span">span</span>
    <div class="div"></div>
    <theme />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import theme from '../common/theme-picker.vue'

export default defineComponent({
  setup() {
    const color = ref('#409EFF')

    watch(color, (val): void => {
      console.log('state.color :>> ', val)
      document.getElementsByTagName('body')[0].style.setProperty('--label-font-color', val)
    })
    return {
      color,
    }
  },
  components: { theme },
})
</script>

<style lang="scss">
.span {
  color: $labelFontColor;
}
.div {
  width: 100px;
  height: 100px;
  background: $labelFontColor;
}
</style>
