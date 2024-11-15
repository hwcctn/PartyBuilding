import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginView/index.vue';
import ApplyToJoin from '../views/Progress/ApplyToJoin/index.vue'
import State1 from '../views/Progress/ApplyToJoin/ShowApplyOfState/state1.vue'
import State2 from '../views/Progress/ApplyToJoin/ShowApplyOfState/state2.vue'
import ActiveMember from '../views/Progress/ActiveMember/index.vue'
import State3 from '../views/Progress/ActiveMember/ShowActiveOfState/state3.vue'
import ShowActiveOfState from '../views/Progress/ActiveMember/ShowActiveOfState/ShowActiveOfState.vue'
import DevelopmentObject from '../views/Progress/DevelopmentObject.vue'
import Reception from '../views/Progress/Reception.vue'
import ShowApplyOfState from '../views/Progress/ApplyToJoin/ShowApplyOfState/ShowApplyOfState.vue'
import EducationAndApproval from '../views/Progress/EducationAndApproval.vue'
import FirstStage  from '../views/Audit/index.vue'
import Detail  from '../views/Audit/Detail.vue'
import DownloadApply from '../views/Download/ViewApplyToJoin.vue'
import DownloadActive from '../views/Download/ViewActiveMember.vue'
const stateComponents = [
    { path: '/state3', name: '推荐和确定入党积极分子', component: () => import('../views/Progress/ActiveMember/ShowActiveOfState/state3.vue') },
    { path: '/state4', name: '上级党委备案', component: () => import('../views/Progress/ActiveMember/ShowActiveOfState/state4.vue') },
    { path: '/state5', name: '指定培养联系人', component: () => import('../views/Progress/ActiveMember/ShowActiveOfState/state5.vue') },
    { path: '/state6', name: '培养教育考察', component: () => import('../views/Progress/ActiveMember/ShowActiveOfState/state6.vue') },
  ];
  
const routes = [
    {
        path: '/',
        redirect: '/login',
        
       
    },
    {
        path:'/login',
        name: 'Login',
        component: Login,
            
    },
    {
        path: '/register',
        component: () => import('../views/RegisterView/index.vue'),
        name: 'register',
    },
    {
        path:'/home',
        component: () => import('../views/Layout/index.vue'),
        name: '首页',
        redirect: 'basicInfo',
        children: [
            {
              path: '/basicInfo', 
              component: () => import('../views/BasicInformation/index.vue'), 
              name: '基本信息',
            },
            {
                path: '/download', 
                component: () => import('../views/Download/index.vue'), 
                name: '下载',
                redirect: '',
                children: [
                    {
                      path: '/downloadApply', 
                      name: '申请入党模版',
                      component:DownloadApply,
                      meta: { activeMenu: '/download' }, 
                    },
                    {
                      path: '/downloadActive', 
                      name: '积极分子模版',
                      component:DownloadActive,
                      meta: { activeMenu: '/download' }, 
                    }
                ]
              },
            {
                path:'/progress',
                component: () => import('../views/Progress/index.vue'),
                name: '进展情况',
                redirect: 'showApplyOfState',
                children: [
                    {
                      path: '/showApplyOfState', 
                      name: '入党申请情况',
                      component:ShowApplyOfState,
                      meta: { activeMenu: '/progress' }, // 添加 activeMenu
                      children: [
                        {
                            path: '/state1', 
                            name: '递交入党申请书',
                            component:State1,
                            meta: { activeMenu: '/showApplyOfState',
                                hideView: true
                             }
                        },
                        {
                            path: '/state2', 
                            name: '党组织派人谈话',
                            component:State2,
                            meta: { activeMenu: '/showApplyOfState',
                                hideView: true
                             }
                        }
                      ]
                    },
                    {
                      path: '/applyToJoin', 
                      name: 'ApplyToJoin',
                      component:ApplyToJoin,
                      meta: { activeMenu: '/progress' }, // 添加 activeMenu
                    },
                    {
                        path:'/showActiveOfState',
                        name: '积极分子确定和培养情况',
                        component: ShowActiveOfState,
                        meta: { activeMenu: '/progress' },
                        children: stateComponents.map(state => ({
                            path: state.path,
                            name: state.name,
                            component: state.component,
                            meta: { activeMenu: '/showActiveOfState',
                                hideView: true }
                          }))
                    
                    },
                    {
                        path:'/activeMember',
                        name: 'ActiveMember',
                        component: ActiveMember,
                        meta: { activeMenu: '/progress' }, // 添加 activeMenu
                    },
                    {
                        path:'/developmentObject',
                        name: 'DevelopmentObject',
                        component: DevelopmentObject,
                        meta: { activeMenu: '/progress' }, // 添加 activeMenu
                    },
                    {
                        path:'/reception',
                        name: 'Reception',
                        component: Reception,
                        meta: { activeMenu: '/progress' }, // 添加 activeMenu
                    },
                    {
                        path:'/educationAndApproval',
                        name: 'EducationAndApproval',
                        component: EducationAndApproval,
                        meta: { activeMenu: '/progress' }, // 添加 activeMenu
                    },
                    
                ]
            },
            {
                path:'/firstStage',
                name: 'FirstStage',
                component: FirstStage,
                children: [
                    {
                      path: 'detail', 
                      name: 'Detail',
                      component:Detail,
                      meta: { activeMenu: '/firstStage',
                            hideList: true
                       }, 
                    },
                ]
            }
          ],
    },
   
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
