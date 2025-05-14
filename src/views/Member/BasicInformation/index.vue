<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: #fff;">
          <h5 class="mb-2">{{name}}</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :default-active="$route.path"
            @select="handleSelect"
            router
          >
            <el-sub-menu index="1">
              <template #title>
                <span>我的账户</span>
              </template>             
                <el-menu-item index="/member/basicInfo/passwordsetting">密码设置</el-menu-item>
                <el-menu-item index="/member/basicInfo/imformation" >个人信息</el-menu-item>
            </el-sub-menu>
            <!-- <el-menu-item index="/member/basicInfo/download">模板下载</el-menu-item> -->
          </el-menu>
        </el-aside>
      <el-main>
        <div class="content">
            <!-- 子组件展示结构的地方 -->
            <router-view></router-view>
        </div>
        <!-- 搜索框 -->
        <!--  -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import Info from './info/index.vue'
import { useMemberStore } from '@/stores/memberInfo/memberInfo'
import { useRoute } from 'vue-router'
const route = useRoute()
const memberStore = useMemberStore()
const { getMemberAction } = memberStore
import { useInformationStore } from '@/stores/Member/information.ts' // 路径按你项目结构来调整
const informationStore = useInformationStore()
// const { name } = storeToRefs(informationStore)
const name = localStorage.getItem('name')
onMounted(async () => {
  await getMemberAction()
})
</script>

<style lang="scss"   scoped>
.el-aside{
  h5{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .el-menu{
    span{
      margin-left: 20px;
    }
  }
}
.tac{
  .el-col {
      width: 180px;
      min-width: 180px;
      max-width: 240px;
      }
}
.bcgimg {
  position: relative;
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  top: 60px;
  left: 50%;
  width: 90%;
  z-index: 1;
  transform: translateX(-50%);
}
</style>
