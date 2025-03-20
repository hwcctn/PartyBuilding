import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Branch from '@/views/Branch/index.vue'
import BMemberIndfo from '@/views/Branch/MemberInfo/index.vue'
import BPersonnel from '@/views/Branch/Personnel/index.vue'
import Committee from '@/views/Committee/index.vue'
import CMemberIndfo from '@/views/Committee/MemberInfo/index.vue'
import CPersonnel from '@/views/Committee/Personnel/index.vue'
import Member from '@/views/Member/index.vue'
import BasicInformation from '@/views/Member/BasicInformation/index.vue'
import Download from '@/views/Member/Download/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // component: Member
    redirect: '/Member'
  },
  {
    path: '/member',
    component: Member,
    redirect: '/member/basicInfo',
    children: [
      {
        path: 'basicInfo',
        component: BasicInformation
      },
      {
        path: 'download',
        component: Download
      }
    ]
  },
  {
    path: '/progress/:uid',
    component: () => import('@/views/Progress/index.vue'),
    children: [
      {
        path: ':sid',
        component: () => import('@/views/Progress/StepInfoDetail.vue'),
        meta: { hideStepCart: true }
      }
    ]
  },
  {
    path: '/branch',
    component: Branch,
    children: [
      {
        path: '/branch/member-info',
        component: BMemberIndfo
      },
      {
        path: '/branch/personnel',
        component: BPersonnel
      }
    ]
  },
  {
    path: '/committee',
    component: Committee,
    children: [
      {
        path: '/committee/member-info',
        component: CMemberIndfo
      },
      {
        path: '/committee/personnel',
        component: CPersonnel
      }
    ]
  },
  {
    path: '/manageUser/importUser',
    component: () => import('@/components/User/importUser.vue'),
    name: '批量导入用户'
  },
  {
    path: '/manageUser/newUser',
    component: () => import('@/components/User/newUser.vue'),
    name: '新增用户'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
