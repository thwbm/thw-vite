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
import { defineComponent } from 'vue'
import menuComponent from './module/menuComponent.vue'
import dayjs from 'dayjs'
import { xor } from 'lodash-es'

export default defineComponent({
  components: { menuComponent },
  setup(): {} {
    // console.log('dayjs :>> ', dayjs().format(), 1, xor([1, 2], [2, 3]))
    return {}
  },
  mounted() {
    this.$i18n.locale = 'zh-cn'
    console.log('object :>> ', this.$i18n.locale, this.$t('aside.hello'))
  },
})
</script>

<style lang="scss" scope>
@import 'module/index.scss';
</style>

function _xor(arg0: number[], arg1: number[]): any {
  throw new Error('Function not implemented.')
}

function _xor(arg0: number[], arg1: number[]): any {
  throw new Error('Function not implemented.')
}
