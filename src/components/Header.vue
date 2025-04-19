<template>
  <el-row :gutter="24" class="main">
    <el-col :span="1">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="20">
      <!-- 遍历菜单 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
      >
        <el-menu-item>
          <p class="img-caption">SAI智慧党务</p>
        </el-menu-item>
        <el-menu-item>
          <el-icon><MagicStick /></el-icon>
          {{ Menudata.title }}
        </el-menu-item>
        <template v-for="item in Menudata.menu" :key="item.index">
          <el-menu-item :index="item.index">
            <el-icon><Folder /></el-icon>
            {{ item.label }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <!-- <el-col :span="1">
      <div class="grid-content ep-bg-purple" />
    </el-col> -->
    <el-col :span="2">
      <el-icon :size="23" color="black">
        <Bell />
      </el-icon>
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar
            :size="50"
            src="https://th.bing.com/th/id/OIP.7KH4CcveY3sV0Bv_zPyJVgAAAA?rs=1&pid=ImgDetMain"
          />
        </div>
      </div>
    </el-col>
    <el-col :span="1">
      <!-- <div class="grid-content ep-bg-purple" /> -->
      <el-button link @click="goToLogin">退出登录 </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// // 设置路由高亮
const route = useRoute()
const activeIndex = ref<string>(route.path)
console.log(route)
// 退出登录
const router = useRouter()
const goToLogin = () => {
  router.push('/login')
}
// // 路由监听
watch(route, (newRoute) => {
  activeIndex.value = newRoute.path
})
interface MenuItem {
  index: string
  label: string
}
interface PageData {
  title: string
  menu: MenuItem[]
}
defineProps<{
  Menudata: PageData
}>()
// 菜单数据
// const menuList = ref([
//   {
//     index: '/desktop',
//     label: '我的桌面',
//     icon: markRaw(HomeFilled)
//   },
//   {
//     index: '2',
//     label: '发展党员管理',
//     icon: markRaw(Folder)
//   },
//   {
//     index: '/manageInfo',
//     label: '党员信息管理',
//     icon: markRaw(Folder)
//   },
//   {
//     index: '4',
//     label: '人员管理',
//     icon: markRaw(Folder)
//   },

//   {
//     index: '/mystatus',
//     label: '我的情况',
//     icon: markRaw(Folder)
//   }
// ])
</script>

<style scoped lang="scss">
@use 'element-plus/theme-chalk/src/common/var.scss' as *;
.main {
  background-color: #ffffff;
  border-bottom: solid 1px var(--el-menu-border-color);
  margin: 0 !important;
}
.el-menu--horizontal > .el-menu-item:nth-child(2) {
  margin-right: auto;
}

.img-caption {
  margin: 0;
  font-size: 25px;
  background: linear-gradient(
    to right,
    var(--el-color-primary),
    var(--el-color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Lobster', cursive;
}

.el-col-2,
.el-col-2.is-guttered,
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
<style lang="scss">
.el-sub-menu .el-sub-menu__icon-arrow {
  top: 0;
  margin-top: 0;
}
</style>
