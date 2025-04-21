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
                <span>系统管理</span>
              </template>             
                <el-menu-item index="/branch/member-info/manageperson" >
                  管理人员
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span>我的账户</span>
              </template>             
                <el-menu-item index="/branch/member-info/passwordsetting">密码设置</el-menu-item>
                <el-menu-item index="/branch/member-info/information">个人信息</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>组织机构</span>
              </template>             
                <el-menu-item index="/branch/member-info/branch">基层党支部</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span>党员数据中心</span>
              </template>             
                <el-menu-item index="4-1">党员信息管理</el-menu-item>
                <el-menu-item index="4-2">党员信息查询</el-menu-item>
                <el-menu-item index="4-3">党员认正记录</el-menu-item>
            </el-sub-menu>
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { usePnumberStore, useUserStore } from '@/stores/index.ts'
import { getMemberUsers } from '../service'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
const pnumberStore = usePnumberStore()
const { menudata } = pnumberStore
let Modeldata = ref([])
const { role } = useUserStore()
const router = useRouter()
const route = useRoute()
function handleSelect(index) {
  router.push(index)
}

const filterGroup = (value: any, row: any) => {
  return String(row.organization) === value
}
// const tableRowClassName = ({ row }: any) => {
//   switch (row.organization) {
//     case '人工智能学院党委教工党组织':
//       return 'teacher-row'
//     case '人工智能学院党委本科生党组织1':
//       return
//     case '人工智能学院党委本科生党组织2':
//       return 'undergraduate-row'
//     case '人工智能学院党委研究生党组织':
//       return 'graduate-row'
//     default:
//       return ''
//   }
// }
// const formatter = (_row: any, column: any, cellValue: number) => {
//   if (column.property === 'organization') {
//     const map: Record<number, string> = {
//       0: '本科生1',
//       1: '本科生2',
//       2: '教工',
//       3: '研究生'
//     }
//     return map[cellValue] ?? cellValue
//   }
//   return String(cellValue)
// }

// const input1 = ref('')
// const input2 = ref('')
// const select = ref('1')
// // 表格设置
// const handleClick = (row: any) => {
//   console.log(row.id)
//   router.push({ path: `/branch/progress/${row.id}` })
// }
// let tableData = ref([])
// // 分页设置
// let page = ref(1)
// let size = ref(15)

// let total = ref()
// const getTableData = () => {
//   tableData.value = Modeldata.value.slice(
//     (page.value - 1) * size.value,
//     page.value * size.value
//   )
//   // console.log('数据展示', tableData.value, Modeldata.value)

//   total.value = Modeldata.value.length
// }
// // page改变时的回调函数
// const currentChange = (val: any) => {
//   console.log('翻页，当前为第几页', val)
//   page.value = val
//   getTableData()
// }
// const sizeChange = (val: any) => {
//   console.log('改变每页多少条，当前一页多少条数据', val)
//   size.value = val
//   page.value = 1
//   getTableData()
// }
// async function getMemberUsersAction() {
//   let searchParams = {}
//   try {
//     if (input2.value) {
//       if (select.value === '1') searchParams = { name: input2.value }
//       else if (select.value === '2')
//         searchParams = { identity_id: input2.value }
//     }
//     const res = await getMemberUsers(searchParams)
//     Modeldata.value = res.msg
//     console.log('结果', res)
//     getTableData()
//   } catch (err) {
//     ElMessage.error(`获取数据失败，请重试${err}`)
//   }
// }
// //重置
// const resetUser = () => {
//   input2.value = ''
//   select.value = '1'
//   getMemberUsersAction()
// }

// onMounted(async () => {
//   const res = await getMemberUsers()
//   console.log('党员信息数据', res)
//   Modeldata.value = res.msg
//   getTableData()
// })
</script>
<style lang="scss">
.tac{
  .mb-2{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.el-sub-menu .el-sub-menu__icon-arrow{
  margin-top: 20px;
}



// .el-table .warning-row {
//   --el-table-tr-bg-color: var(--el-color-warning-light-9);
// }
// .el-table .success-row {
//   --el-table-tr-bg-color: var(--el-color-success-light-9);
// }
// .el-table .teacher-row {
//   background-color: #e8f5e9; /* 淡绿色背景 */
// }

// /* 本科生支部2行样式 */
// .el-table .undergraduate-row {
//   background-color: #e3f2fd; /* 淡蓝色背景 */
// }

// /* 研究生支部行样式 */
// .graduate-row {
//   background-color: #fff3e0; /* 淡橙色背景 */
// }
// </style>
// <style lang="scss" scoped>
// .common-layout {
//   width: auto;
// }

// .GroupList {
//   text-align: left;
//   height: 50px;
//   color: rgb(158, 158, 158);
//   align-items: center;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// }
// .line {
//   margin-left: 50px;
// }

// .el-card {
//   text-align: left;
//   width: 100%;
// }
// .el-main {
//   width: 100%;
//   padding: 0 10px;
//   .top {
//     margin: 10px 0;
//     text-align: left;
//   }
//   .centre {
//     padding: 20px 0 0 20px;
//     background-color: #fff;
//   }
// }

</style>
