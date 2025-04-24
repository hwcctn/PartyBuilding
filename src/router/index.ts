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
// 声明 RouteMeta类型
import 'vue-router'
// import path from 'path'
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    allowedRoles?: Array<'member' | 'branch' | 'committee'>
  }
}

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
  // 党员
  {
    path: '/member',
    component: Member,
    redirect: '/member/basicInfo/imformation',
    meta: { requiresAuth: true, allowedRoles: ['member'] },
    children: [
      {
        path: 'basicInfo',
        component: BasicInformation,
        redirect: '/member/basicInfo/imformation',
        children:[
          {
            path: 'imformation',
            component: () => import('@/views/Member/BasicInformation/imformation/index.vue'),
            meta: { title: '基本信息' }
          },
          {
            path: 'passwordsetting',
            component: () => import('@/views/Member/BasicInformation/passwordsetting/index.vue'),
            meta: { title: '密码设置' }
          },
          {
            path: 'download',
            component: () => import('@/views/Member/BasicInformation/download/index.vue'),
            meta: { title: '模板下载' }
          },
        ]
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
  //支部
  {
    path: '/branch',
    component: Branch,
    meta: { requiresAuth: true, allowedRoles: ['branch','member'] },
    redirect: '/branch/member-info/manageperson',
    children: [
      {
        path: 'member-info',
        component: BMemberIndfo,
        redirect: '/branch/member-info/manageperson',
        children:[
          {
            //相对路径不加/
            path: 'ManagePerson',
            component: () => import('@/views/Branch/MemberInfo/manageperson/index.vue'),
            meta: {
                title: '管理人员'
            }
          },
          {
            path: 'PasswordSetting',
            component: () => import('@/views/Branch/MemberInfo/account/passwordsetting/index.vue'),
            meta: {
                title: '密码设置'
            }
          },
          {
            path: 'Information',
            component: () => import('@/views/Branch/MemberInfo/account/information/index.vue'),
            meta: {
                title: '个人信息'
            }
          },
          // {
          //   path: 'personnel',
          //   component: () => import('@/views/Branch/MemberInfo/Personnelinfo/index.vue'),
          //   meta: { role: 'branch' }
          // },
          {
            path: '/branch/personnel',
            component: Personnel,
            meta: { role: 'branch' }
          },
          {
            path: 'organization',
            component: () => import('@/views/Branch/MemberInfo/organization/index.vue'),
            meta: {
                title: '组织机构'
            }
          },
          {
            path: 'data_centre',
            component: () => import('@/views/Branch/MemberInfo/data_centre/index.vue'),
            meta: {
                title: '数据中心'
            }
          },
        ],
      },
      // {
      //   path: '/:role(branch|committee)/personnel',
      //   component: Personnel
      // }
      // {
      //   path: '/branch/personnel',
      //   component: Personnel,
      //   meta: { role: 'branch' }
      // }
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
  // 党委
  {
    path: '/committee',
    component: Committee,
    meta: { requiresAuth: true, allowedRoles: ['committee'] },
    redirect: '/committee/home/member-info',
    children: [
      {
        path: '/committee/home',
        component: () => import('@/views/Committee/HomePage/index.vue'),
        children: [
          {
            path: '/committee/home/member-info',
            component: CMemberIndfo,
            meta: { title: '基本信息' }
          },
          {
            path: '/committee/home/passwordsetting',
            component: () => import('@/views/Committee/HomePage/passwordsetting/index.vue'),
            meta: {
              title: '密码设置'
            }
          },
          {
            path: '/committee/home/rootbranch',
            component: () => import('@/views/Committee/HomePage/rootbranch/index.vue'),
            meta: {
              title: '基层党支部'
            }
          },
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
            path: '/committee/home/branch-manage',
            component: CBranchManage,
            meta: { title: '党员发展管理' }
          }
        ]
      }, 
    ]
    // children: [
    //   {
    //     path: '/committee/member-info',
    //     component: CMemberIndfo
    //   },
    //   // {
    //   //   path: '/committee/personnel',
    //   //   component: CPersonnel
    //   // },
    //   {
    //     path: '/committee/personnel',
    //     component: Personnel,
    //     meta: { role: 'committee' }
    //   },
    //   // {
    //   //   path: '/:role(branch|committee)/personnel',
    //   //   component: Personnel
    //   // },
    //   {
    //     path: '/committee/branch-manage',
    //     component: CBranchManage
    //   }
    // ]
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
router.beforeEach((to, _, next) => {
  // const userStore = useUserStore()
  // const currentRole = userStore.role as 'member' | 'branch' | 'committee'
  const currentRole = localStorage.getItem('role') as
    | 'member'
    | 'branch'
    | 'committee'
  if (to.meta.allowedRoles && !to.meta.allowedRoles.includes(currentRole)) {
    return next('/403')
  }
  next()
})
export default router
