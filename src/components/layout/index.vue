<template>
  <el-container id="layout">
    <el-aside id="aside">
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
import elementResizeDetectorMaker from 'element-resize-detector'
import store from '@/store/index'

export default defineComponent({
  components: { menuComponent },
  setup(): {} {
    // console.log('dayjs :>> ', dayjs().format(), 1, xor([1, 2], [2, 3]))
    return {}
  },
  mounted() {
    console.log('store :>> ', store.state.color)
    this.$i18n.locale = 'zh-cn'
    console.log('object :>> ', this.$i18n.locale, this.$t('aside.general.title'))
    // 监听历史菜单可视区域宽度
    let erd = elementResizeDetectorMaker()
    erd.listenTo(document.getElementById('aside'), (el: any) => {
      console.log('el :>> ', el.offsetWidth)
    })
  },
})
</script>

<style lang="scss" scope>
@import 'module/index.scss';

#aside {
  width: 300px !important;
}
</style>

function _xor(arg0: number[], arg1: number[]): any {
  throw new Error('Function not implemented.')
}

function _xor(arg0: number[], arg1: number[]): any {
  throw new Error('Function not implemented.')
}
