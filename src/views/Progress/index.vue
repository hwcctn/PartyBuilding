<template>
  <div class="common-layout">
    <el-container style="height: 100vh; flex-direction: column;">
      <el-header style="height: 60px;">
        <div class="left">
          <svg-icon @click="goBack" name="return_back"></svg-icon>
        </div>
        <div class="right"><strong>查看信息</strong></div>
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
                  <!-- <el-button class="stepInfo-button" type="warning" @click="dialogVisible = true">
                    更改信息
                  </el-button>
                  <el-dialog v-model="dialogVisible" title="更改信息" width="900px">
                    <span>更换党支部，培养联系人信息</span>
                    <el-form-item label="单位及职位1">
                      <el-input 
                      v-model="data.position1" 
                      placeholder="请输入"
                      />
                    </el-form-item>
                    <el-form-item label="单位及职位2">
                      <el-input 
                      v-model="data.position2" 
                      placeholder="请输入"
                      />  
                    </el-form-item>
                    <el-form-item label="培养联系人1">
                      <el-input 
                      v-model="data.contact1" 
                      placeholder="请输入"
                      />
                    </el-form-item>
                    <el-form-item label="培养联系人2">
                      <el-input 
                      v-model="data.contact2" 
                      placeholder="请输入"
                      />
                    </el-form-item>
                    <template #footer>
                      <el-button @click="dialogVisible = false">关闭</el-button>
                      <el-button 
                      type="primary"
                      @click="updatedContacts"
                      >
                        提交
                      </el-button>
                    </template>
                  </el-dialog> -->
                  <el-button class="stepInfo-button" type="warning" @click="dialogVisible = true">
                    更改信息
                  </el-button>
                  <el-dialog v-model="dialogVisible" title="更改信息" width="900px">
                    <el-tabs v-model="activeTabName" class="custom-tabs" style="margin-top: 20px;">
                      <el-tab-pane label="培养联系人信息" name="contact">
                        <span>更换党支部和培养联系人</span>
                        <el-form>
                          <el-form-item label="单位及职位1">
                            <el-input v-model="data.position1" placeholder="请输入" />
                          </el-form-item>
                          <el-form-item label="单位及职位2">
                            <el-input v-model="data.position2" placeholder="请输入" />  
                          </el-form-item>
                          <el-form-item label="培养联系人1">
                            <el-input v-model="data.contact1" placeholder="请输入" />
                          </el-form-item>
                          <el-form-item label="培养联系人2">
                            <el-input v-model="data.contact2" placeholder="请输入" />
                          </el-form-item>
                        </el-form>
                      </el-tab-pane>

                      <el-tab-pane label="入党介绍人信息" name="sponsor">
                        <span>更换入党介绍人和党支部</span>
                        <el-form>
                          <el-form-item label="入党介绍人1">
                            <el-input v-model="data2.sponsor1" placeholder="请输入" />
                          </el-form-item>
                          <el-form-item label="入党介绍人2">
                            <el-input v-model="data2.sponsor2" placeholder="请输入" />  
                          </el-form-item>
                          <el-form-item label="单位及职务1">
                            <el-input v-model="data2.position1" placeholder="请输入" />
                          </el-form-item>
                          <el-form-item label="单位及职务2">
                            <el-input v-model="data2.position2" placeholder="请输入" />
                          </el-form-item>
                        </el-form>
                      </el-tab-pane>
                    </el-tabs>

                    <template #footer>
                      <el-button @click="dialogVisible = false">关闭</el-button>
                      <el-button type="primary" @click="updatedContacts">提交</el-button>
                    </template>
                  </el-dialog>
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
import { onMounted, ref } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { getUserStatus,updatecontacts,updatesponsor } from './service'
// import type { StepGroup } from './service/style'
import type { UserInfoItem } from './service/style'
import { ElMessage } from 'element-plus'
//弹窗
let dialogVisible = ref(false)
void dialogVisible.value // 👈 强制让 TS 识别这个变量被使用

const activeTabName = ref('contact') // 默认选中第一个 tab
//弹窗内容
const data = ref({
    position1: '',
    position2: '',
    contact1: '',
    contact2: '',
  })
  const data2 = ref({
    sponsor1: '',
    sponsor2: '',
    position1: '',
    position2: '',
  })

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
const { role, uid } = route.params
// const { role } = route.params
const activeTab = ref(0) // 默认选中第一个标签
import { useStepCardStore } from './store/stepCard.store.ts'
import { storeToRefs } from 'pinia'
const stepCardStore = useStepCardStore()
const { menuData } = storeToRefs(stepCardStore)

const updatedContacts = async () => {
  if (activeTabName.value === 'contact') {
    const res = await updatecontacts(uid, data.value)
    dialogVisible.value = false
    if ( res.code === 200) {
      ElMessage({
        message: '修改成功',
        type: 'success',
      }) 
    } else {
      ElMessage ({
        message: '修改失败',
        type:'error',
      })
    }
  }
  if (activeTabName.value === 'sponsor') {
    const res = await updatesponsor(uid, data2.value)
    dialogVisible.value = false 
    if ( res.code === 200) {
      ElMessage({
        message: '修改成功',
        type:'success',
      }) 
    } else 
      ElMessage ({
        message: '修改失败',
        type:'error',
      })
    }
  }
  
onMounted(async () => {
  menuData.value = []
  // 重新获取数据
  await getUserStatus(Number(uid), role as string).then((res) => {
    menuData.value = res.stepInfo
    baseInfo.value = res.userInfo
    console.log('卡片信息', menuData.value)
  })
})

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
