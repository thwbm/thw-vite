<template>
  <el-menu :default-active="routeName" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened router>
    <menuItem :routes="routes" />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuItem from './menuItem.vue'

export default defineComponent({
  name: 'menuComponent',
  components: { menuItem },
  setup() {
    // 路由集合
    const { routes } = useRouter().options
    // 当前路由
    const routeName = useRoute().name
    // 菜单展开收起，默认展开
    const isCollapse = false

    return { routes, routeName, isCollapse }
  },
})
</script>
