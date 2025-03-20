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
        <el-aside width="200px" v-if="!$route.meta.hideStepCart">
          <el-tabs
            v-model="activeTab"
            tab-position="left"
            style="height: 100%"
            class="demo-tabs"
          >
            <template v-for="(item, index) in menuData" :key="index">
              <el-tab-pane :label="item.title" :name="index"></el-tab-pane>
            </template>
          </el-tabs>
        </el-aside>

        <!-- 右侧的内容区 -->
        <el-main>
          <div class="content-area">
            <div class="baseInfo">
              <BaseInfo />
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
                    v-for="(item, index) in getContentByTab(activeTab)"
                    :key="index"
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

<script setup>
import StepContainer from '@/views/Progress/components/StepContainer.vue'
import { ref, computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

// const route = useRoute()
// const pathName = computed(() => route.name)
const router = useRouter()
const activeTab = ref(0) // 默认选中第一个标签

const menuData = computed(() => {
  return [
    {
      title: '申请入党',
      stateCartData: [
        {
          topText: '第一步',
          middleText: '递交入党申请书',
          bottomText: 'Completed' //NotStarted 未开始；InProgress 进行中；Completed 已完成
        },
        {
          topText: '第二步',
          middleText: '党组织派人谈话',
          bottomText: 'Completed'
        }
      ]
    },
    {
      title: '入党积极分子的确定和培养教育',
      content: '这是入党积极分子的确定和培养教育相关内容...'
    },
    {
      title: '发展对象的确定和考察',
      content: '这是发展对象的确定和考察相关内容...'
    },
    {
      title: '预备党员的接收',
      content: '这是预备党员的接收相关内容...'
    },
    {
      title: '预备党员的教育考察和转正',
      content: '这是预备党员的教育考察和转正相关内容...'
    }
  ]
})

// 根据选中的标签获取内容
const getContentByTab = (index) => {
  return menuData.value[index].stateCartData
}
const getTitleByTab = (index) => {
  return menuData.value[index].title
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
  width: 200px;
  background-color: #f5f5f5;
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
