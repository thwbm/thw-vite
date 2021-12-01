<template>
  <n-card>
    <n-tabs v-model:value="tabValue" justify-content="space-evenly">
      <template v-for="(item, index) in tabs" :key="item.name + index">
        <n-tab-pane :name="item.name" :tab="item.tab">
          <n-form :model="formValue" ref="formRef">
            <n-form-item-row path="name" label="用户名">
              <n-input v-model:value="formValue.name" />
            </n-form-item-row>
            <n-form-item-row path="password" label="密码">
              <n-input v-model:value="formValue.password" type="password" />
            </n-form-item-row>
            <n-form-item-row
              path="reenteredPassword"
              label="重复密码"
              v-if="tabValue == 'signup'"
            >
              <n-input
                v-model:value="formValue.reenteredPassword"
                type="password"
              />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block>{{ item.tab }}</n-button>
        </n-tab-pane>
      </template>
    </n-tabs>
  </n-card>
  <pre>
    {{ formValue }}
  </pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const tabs = ref([
      { tab: '登录', name: 'signin' },
      { tab: '注册', name: 'signup' },
    ])
    const tabValue = ref(tabs.value[0].name)
    const formValue = ref({
      name: '',
      password: '',
      reenteredPassword: '',
    })
    const formRef = ref()

    return { tabs, tabValue, formValue, formRef }
  },
})
</script>

<style lang="scss" scoped>
.n-card {
  max-width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
