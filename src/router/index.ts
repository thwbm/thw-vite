import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { t } from '@/i18n'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/general',
    name: 'general',
    alias: '/',
    redirect: { name: 'jobDescription' },
    component: () => import('@/components/layout/index.vue'),
    meta: {
      title: t('aside.hello'),
    },
    children: [
      {
        path: 'jobDescription',
        name: 'jobDescription',
        component: () => import('@/components/general/jobDescription/index.vue'),
        meta: {
          title: '工作概况',
        },
      },
      {
        path: 'profileData',
        name: 'profileData',
        component: () => import('@/components/general/profileData/index.vue'),
        meta: {
          title: '数据概况',
        },
      },
    ],
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/components/test/HelloWorld.vue'),
  //   meta: {
  //     title: '数据概况',
  //   },
  // },
  // {
  //   path: '/HelloWorld',
  //   name: 'HelloWorld',
  //   component: () => import('@/components/test/home.vue'),
  //   meta: {import default from './../i18n/zh-cn';

  //     title: '数据概况',
  //   },
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
