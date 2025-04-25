<template>
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
          <h5 class="mb-2">人工智能学院支部</h5>
          <el-menu
            
            class="el-menu-vertical-demo"


            :default-active="$route.path"
            @select="handleSelect"
            router
          >
            <el-sub-menu index="1">
              <template #title>
                <span>我的账户</span>
              </template>             
                <el-menu-item index="/branch/member-info/passwordsetting">密码设置</el-menu-item>
            </el-sub-menu>
         
                <el-menu-item index="/branch/member-info/manageperson" > 党员发展管理 </el-menu-item>

           
                <el-menu-item index="/branch/personnel" >党员信息管理 </el-menu-item>
          </el-menu>
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

<script setup lang="ts">
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useRoute } from 'vue-router'
// import { usePnumberStore } from '@/stores/index.ts'
// import { getMemberUsers } from '../service'
// import { ElMessage } from 'element-plus'
// import { Search } from '@element-plus/icons-vue'
// const pnumberStore = usePnumberStore()
// const { menudata } = pnumberStore
// let Modeldata = ref([])
// const { role } = useUserStore()
const router = useRouter()
// const route = useRoute()
function handleSelect(index:any) {
  router.push(index)
}

</script>
<style lang="scss">
.tac{
  .el-col {
      width: 180px;
      min-width: 180px;
      max-width: 240px;
      }
  .mb-2{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.el-sub-menu .el-sub-menu__icon-arrow{
  margin-top: 20px;
}
</style>
