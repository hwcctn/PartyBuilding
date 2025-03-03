<template>
    <el-row :gutter="24" class="main" >
        <el-col :span="1">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="20">
            <!-- 遍历菜单 -->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                :router="true" @select="handleSelect
                    ">
                <el-menu-item>

                    <p class="img-caption">SAI智慧党建</p>
                </el-menu-item>

                <template v-for="item in menuList" :key="item.index">
                    <!-- 普通菜单项 -->
                    <el-menu-item v-if="!item.children" :index="item.index">
                        <el-icon v-if="item.icon">
                            <component :is="item.icon" />
                        </el-icon>
                        {{ item.label }}
                    </el-menu-item>
                    <!-- 子菜单 -->
                    <el-sub-menu v-else :index="item.index">
                        <template #title>
                            <el-icon v-if="item.icon">
                                <component :is="item.icon" />
                            </el-icon>
                            {{ item.label }}
                        </template>
                        <template v-for="subItem in item.children" :key="subItem.index">
                            <!-- 子菜单项 -->
                            <el-menu-item :index="subItem.index">
                                <el-icon v-if="subItem.icon">
                                    <component :is="subItem.icon" />
                                </el-icon>
                                {{ subItem.label }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-col>
        <el-col :span="1">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="1">
            <el-icon :size="23" color="black">
                <Bell />
            </el-icon>
            <div class="demo-basic--circle">
                <div class="block">
                    <el-avatar :size="50"
                        src="https://th.bing.com/th/id/OIP.7KH4CcveY3sV0Bv_zPyJVgAAAA?rs=1&pid=ImgDetMain" />
                </div>
            </div>
        </el-col>
        <el-col :span="1">
            <div class="grid-content ep-bg-purple" />
        </el-col>
    </el-row>


</template>

<script setup>
import { ref, markRaw, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Folder, HomeFilled, Memo } from '@element-plus/icons-vue'
// 设置路由高亮
const route = useRoute()
const activeIndex = ref(route.meta.activeMenu || route.path)
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
// 路由监听
watch(route, (newRoute) => {
    activeIndex.value = newRoute.meta.activeMenu || newRoute.path
    // console.log(newRoute.meta.activeMenu);
    // console.log(newRoute)
})
// 菜单数据
const menuList = ref([
    {
        index: '/desktop',
        label: '我的桌面',
        icon: markRaw(HomeFilled),
    },
    {
        index: '2',
        label: '发展党员管理',
        icon: markRaw(Folder),
        children: [
            { index: '/auditStage', label: '申请人员管理', icon: markRaw(Memo) },
            { index: '2-2', label: '积极分子管理', icon: markRaw(Memo) },
            { index: '2-3', label: '发展对象管理', icon: markRaw(Memo) },
            { index: '2-4', label: '预备党员管理', icon: markRaw(Memo) },
            { index: '2-5', label: '正式党员管理', icon: markRaw(Memo) },
        ]
    },
    {
        index: '/manageInfo',
        label: '党员信息管理',
        icon: markRaw(Folder),
        children: [
            { index: '/progress', label: '进展情况', icon: markRaw(Memo) },

        ]
    },
    {
        index: '4',
        label: '人员管理',
        icon: markRaw(Folder),
        children: [
            { index: '/manageUser', label: '用户管理', icon: markRaw(Memo) },
            { index: '4-2', label: '管理员管理', icon: markRaw(Memo) },
        ]
    },

    {
        index: '/mystatus',
        label: '我的情况',
        icon: markRaw(Folder),
        children: [
            { index: '/basicInfo', label: '个人信息', icon: markRaw(Memo) },
            { index: '/download', label: '模版下载', icon: markRaw(Memo) },
        ]
    }

])
</script>

<style scoped lang="scss">
@use "element-plus/theme-chalk/src/common/var.scss" as *;
.main{
    background-color: #ffffff; border-bottom: solid 1px var(--el-menu-border-color);
}
.el-menu--horizontal>.el-menu-item:nth-child(2) {
    margin-right: auto;
}


.img-caption {
    margin: 0;
    font-size: 25px;
    background: linear-gradient(to right, var(--el-color-primary), var(--el-color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Lobster', cursive;
}

.el-col-1,
.el-col-1.is-guttered {
    display: flex;
    align-items: center;
    justify-content: center;
}

.demo-basic--circle {
    margin-left: 20px;
}

</style>
<style  lang="scss">
.el-sub-menu .el-sub-menu__icon-arrow {
    top: 0;
    margin-top: 0;
}
</style>