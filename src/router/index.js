import { createRouter, createWebHistory } from 'vue-router'
// 桌面
import Desktop from '../views/Desktop/index.vue'
// 模版下载
import DownloadApply from '../views/MyStatus/Download/ViewApplyToJoin.vue'
import DownloadActive from '../views/MyStatus/Download/ViewActiveMember.vue'
// 党员信息录入
import ManageInfo from '../views/ManagePnumInfo/index.vue'
import ManageInfoDetail from '../views/ManagePnumInfo/manageInfoDetail/index.vue'
// 账号管理
import ManageUser from '../views/ManagePeople/User/index.vue'
// 信息录入的阶段
    // 第一大阶段
import ShowApplyOfState from '../views/ManagePnumInfo/manageInfoDetail/Progress/ApplyToJoin/ShowApplyOfState/ShowApplyOfState.vue'
import State1 from '../views/ManagePnumInfo/manageInfoDetail/Progress/ApplyToJoin/ShowApplyOfState/state1.vue'
import State2 from '../views/ManagePnumInfo/manageInfoDetail/Progress/ApplyToJoin/ShowApplyOfState/state2.vue'
    // 第二大阶段
import ShowActiveOfState from '../views/ManagePnumInfo/manageInfoDetail/Progress/ActiveMember/ShowActiveOfState/ShowActiveOfState.vue'
const stateComponents = [
    { path: 'state3', name: '推荐和确定入党积极分子', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/ActiveMember/ShowActiveOfState/state3.vue') },
    { path: 'state4', name: '上级党委备案', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/ActiveMember/ShowActiveOfState/state4.vue') },
    { path: 'state5', name: '指定培养联系人', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/ActiveMember/ShowActiveOfState/state5.vue') },
    { path: 'state6', name: '培养教育考察', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/ActiveMember/ShowActiveOfState/state6.vue') },
  ];
    // 第三大阶段
import DevelopmentObject from '../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/DevelopmentObject.vue'
const stateComponents3 = [
    { path: 'state7', name: '确认发展对象', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/state7.vue') },
    { path: 'state8', name: '报上级党委备案', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/state8.vue') },
    { path: 'state9', name: '确认入党介绍人', component: () =>import('../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/state9.vue') },
    { path: 'state10', name: '进行整治审查', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/state10.vue') },
    { path: 'state11', name: '开展集中培训', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/DevelopmentObject/state11.vue') },
]
    // 第四大阶段
    import Reception from '../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/Reception.vue'
    const stateComponents4 = [
        { path: 'state12', name: '支部委员会审查', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state12.vue') },
        { path: 'state13', name: '上级党委预审', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state13.vue') },
        { path: 'state14', name: '填写入党申请书', component: () =>import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state14.vue') },
        { path: 'state15', name: '支部大会讨论', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state15.vue') },
        { path: 'state16', name: '上级党委派人谈话', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state16.vue') },
        { path: 'state17', name: '上级党委审批', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state17.vue') },
        { path: 'state18', name: '再上一级党委组织部门备案', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/Reception/state18.vue') },
    ]
    // 第五大阶段
    import EducationAndApproval from '../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/EducationAndApproval.vue'
    const stateComponents5 = [
        { path: 'state19', name: '编入党支部和党小组', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state19.vue') },
        { path: 'state20', name: '入党宣誓', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state20.vue') },
        { path: 'state21', name: '继续教育考察', component: () =>import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state21.vue') },
        { path: 'state22', name: '提出转正申请', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state22.vue') },
        { path: 'state23', name: '支部大会的讨论', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state23.vue') },
        { path: 'state24', name: '上级党委的审批', component: () => import('../views/ManagePnumInfo/manageInfoDetail/Progress/EducationAndApproval/state24.vue') },
         ]
// 信息审查
import AuditStage  from '../views/Audit/index.vue'
import Detail  from '../views/Audit/Detail.vue'
const routes = [

    {
        path: '/',
        component: () => import('../views/Layout/index.vue'),
        name: '首页',
        redirect: 'desktop',
        children: [
            {
                path: '/desktop',
                component: Desktop
            },
            // 党员信息录入
            {
                path: '/manageInfo',
                redirect: 'progress',
                children: [
                    {
                        path: '/progress',
                        component: ManageInfo,
                    },
                    {
                        path: '/progress/:id',
                        redirect: to => {
                            return `/progress/${to.params.id}/showApplyOfState`;
                        },
                        component: ManageInfoDetail,
                        name: '人员管理详情',
                        meta: { activeMenu: '/progress' },
                        // 各个阶段的信息录入
                        children: [
                            {
                                path: 'showApplyOfState',
                                name: '入党申请情况',
                                component: ShowApplyOfState,
                                meta: { activeMenu: '/progress' }, // 添加 activeMenu
                                children: [
                                    {
                                        path: 'state1',
                                        name: '递交入党申请书',
                                        component: State1,
                                        meta: {
                                            activeMenu: '/showApplyOfState',
                                            hideView: true
                                        }
                                    },
                                    {
                                        path: 'state2',
                                        name: '党组织派人谈话',
                                        component: State2,
                                        meta: {
                                            activeMenu: '/showApplyOfState',
                                            hideView: true
                                        }

                                    }
                                ]
                            },
                            {
                                path: 'showActiveOfState',
                                name: '积极分子确定和培养情况',
                                component: ShowActiveOfState,
                                meta: { activeMenu: '/progress' },
                                children: stateComponents.map(state => ({
                                    path: state.path,
                                    name: state.name,
                                    component: state.component,
                                    meta: {
                                        activeMenu: '/showActiveOfState',
                                        hideView: true
                                    }
                                }))

                            },
                            {
                                path: 'developmentObject',
                                name: '发展对象的确定和考察',
                                component: DevelopmentObject,
                                meta: { activeMenu: '/progress' },
                                children: stateComponents3.map(state => ({
                                    path: state.path,
                                    name: state.name,
                                    component: state.component,
                                    meta: {
                                        activeMenu: '/developmentObject',
                                        hideView: true
                                    }
                                }))

                            },
                            {
                                path: 'reception',
                                name: '预备党员的接收',
                                component:Reception,
                                meta: { activeMenu: '/progress' },
                                children: stateComponents4.map(state => ({
                                    path: state.path,
                                    name: state.name,
                                    component: state.component,
                                    meta: {
                                        activeMenu: '/reception',
                                        hideView: true
                                    }
                                }))

                            },
                            {
                                path: 'educationAndApproval',
                                name: '预备党员的教育考察和转正',
                                component:EducationAndApproval,
                                meta: { activeMenu: '/progress' },
                                children: stateComponents5.map(state => ({
                                    path: state.path,
                                    name: state.name,
                                    component: state.component,
                                    meta: {
                                        activeMenu: '/educationAndApproval',
                                        hideView: true
                                    }
                                }))

                            },
                        ]
                    }
                ]
            },
            // 我的情况
            {
                path: '/mystatus',
                redirect: 'basicInfo',
                children: [
                    //  个人信息
                    {
                        path: '/basicInfo',
                        component: () => import('../views/MyStatus/BasicInformation/index.vue'),
                        name: '基本信息',
                    },
                    //   模版下载
                    {
                        path: '/download',
                        component: () => import('../views/MyStatus/Download/index.vue'),
                        name: '下载',
                        redirect: '/download/downloadApply',
                        children: [
                            {
                                path: '/download/downloadApply',
                                name: '申请入党模版',
                                component: DownloadApply,
                                meta: { activeMenu: '/download' },
                            },
                            {
                                path: '/download/downloadActive',
                                name: '积极分子模版',
                                component: DownloadActive,
                                meta: { activeMenu: '/download' },
                            }
                        ]
                    },
                ]
            },
            // 账号管理
            {
                path: '/manageUser',
                component: ManageUser,
                name: '用户管理',
            },
            {
                path: '/manageUser/importUser',
                component: () => import('../views/ManagePeople/User/importUser.vue'),
                name: '批量导入用户',
            },
            {
                path: '/manageUser/newUser',
                component: () => import('../views/ManagePeople/User/newUser.vue'),
                name: '新增用户',
            },
            // 信息审查
            {
                path:'/auditStage',
                name: 'AuditStage',
                component:AuditStage,
                children: [
                    {
                      path: 'detail', 
                      name: 'Detail',
                      component:Detail,
                      meta: { activeMenu: '/auditStage',
                            hideList: true
                       }, 
                    },
                ]
            }


        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router