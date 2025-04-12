import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/LoginView/index.vue'
import Branch from '@/views/Branch/index.vue'
import BMemberIndfo from '@/views/Branch/MemberInfo/index.vue'
// import BPersonnel from '@/views/Branch/Personnel/index.vue'
import Committee from '@/views/Committee/index.vue'
import CMemberIndfo from '@/views/Committee/MemberInfo/index.vue'
// import CPersonnel from '@/views/Committee/Personnel/index.vue'
import CBranchManage from '@/views/Committee/BranchManage/index.vue'
import Member from '@/views/Member/index.vue'
import BasicInformation from '@/views/Member/BasicInformation/index.vue'
import Download from '@/views/Member/Download/index.vue'
import Personnel from '@/views/User/index.vue'
// import { useUserStore } from '@/stores'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // component: Member
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/member',
    component: Member,
    redirect: '/member/basicInfo',
    meta: { requiresAuth: true, allowedRoles: ['member'] },
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
    path: '/:role(branch|committee)/progress/:uid',
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
    meta: { requiresAuth: true, allowedRoles: ['branch'] },
    children: [
      {
        path: '/branch/member-info',
        component: BMemberIndfo
      },
      // {
      //   path: '/:role(branch|committee)/personnel',
      //   component: Personnel
      // }
      {
        path: '/branch/personnel',
        component: Personnel,
        meta: { role: 'branch' }
      }
      // {
      //   path: '/branch/personnel',
      //   component: BPersonnel
      // }
      // {
      //   path: '/branch/progress/:uid',
      //   component: () => import('@/views/Progress/index.vue'),
      //   children: [
      //     {
      //       path: ':sid',
      //       component: () => import('@/views/Progress/StepInfoDetail.vue'),
      //       meta: { hideStepCart: true }
      //     }
      //   ]
      // }
    ]
  },
  {
    path: '/committee',
    component: Committee,
    meta: { requiresAuth: true, allowedRoles: ['committee'] },
    children: [
      {
        path: '/committee/member-info',
        component: CMemberIndfo
      },
      // {
      //   path: '/committee/personnel',
      //   component: CPersonnel
      // },
      {
        path: '/committee/personnel',
        component: Personnel,
        meta: { role: 'committee' }
      },
      // {
      //   path: '/:role(branch|committee)/personnel',
      //   component: Personnel
      // },
      {
        path: '/committee/branch-manage',
        component: CBranchManage
      }
    ]
  },

  {
    path: '/:role(branch|committee)/manageUser/importUser',
    component: () => import('@/views/User/importUser.vue'),
    name: '批量导入用户',
    meta: {
      requiresAuth: true,
      allowedRoles: ['branch', 'committee']
    }
  },
  {
    path: '/:role(branch|committee)/manageUser/newUser',
    name: '新增用户',
    component: () => import('@/views/User/newUser.vue'),
    meta: {
      requiresAuth: true,
      allowedRoles: ['branch', 'committee']
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue')
  },
  {
    path: '/403',
    component: () => import('@/views/Error/403.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   const currentRole = userStore.role as 'member' | 'branch' | 'committee'
//   if (to.meta.requiresAuth && !userStore.isAuthenticated) {
//     return next('/login')
//   }
//   if (to.meta.allowedRoles && !to.meta.allowedRoles.includes(currentRole)) {
//     return next('/forbidden') // 返回错误页面
//   }
// })
export default router
