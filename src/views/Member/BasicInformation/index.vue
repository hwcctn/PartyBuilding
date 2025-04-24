<template>
  <!-- <div style="width: 100%; position: relative; height: 100px">
    <div class="bcgimg">
      <img
        style="width: 100%; height: 100%"
        src="https://th.bing.com/th/id/OIP.PCGzeD4ZJbzASqBw4smhewAAAA?rs=1&pid=ImgDetMain"
        alt=""
      />
    </div>
    <div class="info">
      <Info />
    </div>
  </div> -->
  <div class="common-layout">
    <el-container>
      <!-- <el-aside style="width: 320px; height: 100%; overflow: hidden">
        <el-card>
          <template #header>
            <div class="card-header">
              <div style="margin-bottom: 12px">
                <strong> 人工智能学院 </strong>
              </div>
              <div>
                <el-input
                  v-model="input1"
                  style="width: 240px"
                  placeholder="Type something"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <search />
                    </el-icon>
                  </template>
                </el-input>
              </div>
            </div>
          </template>
          <div>
            <template v-for="item in GroupTree" :key="item">
              <div class="GroupList">
                <svg-icon name="folder" style="margin-right: 10px"></svg-icon>
                {{ item }}
              </div>
            </template>
          </div>
        </el-card>
      </el-aside> -->
      <el-row class="tac">
        <el-col :span="24">
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
            <el-menu-item index="/member/basicInfo/download">模板下载</el-menu-item>
          </el-menu>·
        </el-col>
      </el-row>
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
const memberStore = useMemberStore()
const { getMemberAction } = memberStore
import { useInformationStore } from '@/stores/Member/information.ts' // 路径按你项目结构来调整
const informationStore = useInformationStore()
const { name } = storeToRefs(informationStore)
onMounted(async () => {
  await getMemberAction()
})
</script>

<style scoped>
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
