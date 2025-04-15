<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="left">
          <svg-icon @click="goBack" name="return_back"></svg-icon>
        </div>
        <div class="right"><strong>查看龚雪竹信息</strong></div>
      </el-header>
      <el-container>
        <!-- 左侧的 el-tabs -->
        <el-aside
          width="100%"
          class="custom-aside"
          v-if="!$route.meta.hideStepCart"
        >
          <el-menu
            class="el-menu-vertical-demo"
            @select="handleSelect"
            :default-active="String(activeTab)"
          >
            <el-menu-item
              v-for="(item, index) in menuData"
              :key="index"
              :index="index + ''"
            >
              <el-icon><document /></el-icon>
              <template #title>{{ item.title }}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 右侧的内容区 -->
        <el-main>
          <div class="content-area">
            <div class="baseInfo">
              <BaseInfo v-if="baseInfo.length > 0" :memberInfo="baseInfo" />
            </div>
            <div class="developmen">
              <div class="title">
                <p>党员发展全纪实</p>
                <div>|</div>
                <div class="pathName">
                  {{ getTitleByTab(activeTab) }}
                </div>
              </div>
              <!-- 根据选中的标签动态渲染内容 -->
              <div class="stage">
                <div class="stepCart" v-if="!$route.meta.hideStepCart">
                  <template
                    v-for="item in getContentByTab(activeTab)"
                    :key="item.step_id"
                  >
                    <StepContainer :stateCart="item" />
                  </template>
                </div>
                <div class="centent">
                  <RouterView />
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import StepContainer from '@/views/Progress/components/StepContainer.vue'
// import { ref, onMounted, watch } from 'vue'
import { ref, watch } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { getUserStatus } from './service'
// import type { StepGroup } from './service/style'
import type { UserInfoItem } from './service/style'
// 用pinia提供
// import { useBaseInfoStore } from './store/baseInfo.store'
// import { storeToRefs } from 'pinia'
// const baseInfoSote = useBaseInfoStore()
// const { baseInfo } = storeToRefs(baseInfoSote)
// 不用pinia
const baseInfo = ref<UserInfoItem[]>([])
const router = useRouter()
const route = useRoute()
console.log('路由', route)
// const { role, uid } = route.params
const { role } = route.params
const activeTab = ref(0) // 默认选中第一个标签
import { useStepCardStore } from './store/stepCard.store.ts'
import { storeToRefs } from 'pinia'
const stepCardStore = useStepCardStore()
const { menuData } = storeToRefs(stepCardStore)
// let menuData = ref<StepGroup[]>([])

// 监听路由参数变化
watch(
  () => route.params.uid,
  async (newUid) => {
    if (newUid) {
      // 重置 store 状态
      menuData.value = []
      // 重新获取数据
      await getUserStatus(Number(newUid), role as string).then((res) => {
        menuData.value = res.stepInfo
        baseInfo.value = res.userInfo
        console.log('卡片信息', menuData.value)
      })
    }
  },
  { immediate: true }
)

const handleSelect = (val: string) => {
  activeTab.value = Number(val)
}

// 根据选中的标签获取内容
const getContentByTab = (index: number) => {
  // console.log(index)
  return menuData?.value[index]?.StateCartData
}
const getTitleByTab = (index: number) => {
  return menuData?.value[index]?.title
}

const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.el-container {
  display: flex;
  flex: 1;
}

.el-header {
  background-color: #fff;
  width: 100%;
  height: 40px;
  margin: 5px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    cursor: pointer;
  }
  .right {
    color: #2dadef;
  }
}

.el-aside {
  width: 260px;
  /* margin-top: 20px; */
  background-color: #fff;
  /* margin-right: 5px; */
  border-right: 1px solid var(--el-menu-border-color);
  .el-menu {
    border: none;
    padding-top: 20px;
    min-height: 350px;
  }
}

.el-main {
  flex: 1;
  padding: 16px;
  background-color: #fff;
}

.content-area {
  .developmen {
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 10px;
    padding: 20px 0 30px 30px;
    background-color: #fff;
  }
  .title {
    display: flex;
    p {
      font-weight: 600;
      margin: 0 20px 0 0;
    }
    .pathName {
      margin-left: 5px;
      color: rgb(62, 62, 62);
    }
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.step-container {
  cursor: pointer;
  padding: 10px;
}
</style>
