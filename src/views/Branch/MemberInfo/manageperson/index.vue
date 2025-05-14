<template lang="">
    <div class="top">
          <el-input
            v-model="input2"
            style="max-width: 600px"
            placeholder="输入关键字"
            class="input-with-select"
          >
            <template #prepend>
              <el-select
                v-model="select"
                placeholder="Select"
                style="width: 115px"
              >
                <el-option label="姓名" value="1" />
                <el-option label="身份证" value="2" />
              </el-select>
            </template>
            <template #append>
              <el-button @click="getMemberUsersAction">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
          <el-button class="line" plain @click="resetUser">
            <el-icon style="margin-right: 5px"><RefreshRight /></el-icon>
            重置</el-button
          >
        </div>
        <div class="centre">
          <el-table
            row-key="序号"
            :data="tableData"
            style="width: 1600px"
            :row-class-name="tableRowClassName"
          >
            <el-table-column width="10" v-if="role === 'committee'">
              <template #default="scope">
                <el-badge is-dot v-if="scope.row.isDot"></el-badge>
              </template>
            </el-table-column>

            <el-table-column prop="id" label="序号" sortable width="100" />
            <el-table-column prop="name" label="姓名" width="150">
            </el-table-column>
            <el-table-column
              prop="organization"
              label="所在支部"
              sortable
              width="250"
              show-overflow-tooltip
              
              :filters="[
                { text: '本科生1', value: '0' },
                { text: '本科生2', value: '1' },
                { text: '教工', value: '2' },
                { text: '研究生', value: '3' }
              ]"
              
            />
            <el-table-column
              prop="sex"
              label="性别"
              width="100"
              show-overflow-tooltip
            />
            <el-table-column
              prop="nation"
              label="民族"
              width="100"
              show-overflow-tooltip
            />
            <el-table-column
              prop="origin"
              label="籍贯"
              width="200"
              show-overflow-tooltip
            />
            <el-table-column
              prop="birthday"
              label="出生日期"
              width="200"
              show-overflow-tooltip
            />
            <el-table-column
              prop="identity_id"
              label="身份证号"
              width="250"
              show-overflow-tooltip
            />
            <el-table-column
              prop="education"
              label="学历"
              width="150"
              show-overflow-tooltip
            />
            <el-table-column
              prop="position"
              label="个人身份"
              width="200"
              show-overflow-tooltip
            />
            <el-table-column fixed="right" label="操作" min-width="120">
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="handleClick(scope.row)"
                >
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="bottom">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="page"
            :page-size="size"
            :total="total"
            @size-change="sizeChange"
            @current-change="currentChange"
          />
        </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useRoute } from 'vue-router'
// import {  useUserStore } from '@/stores/index.ts'
import { getMemberUsers } from '../../service/index'
import { ElMessage } from 'element-plus'
// import { Search } from '@element-plus/icons-vue'
// const pnumberStore = usePnumberStore()
// const { menudata } = pnumberStore
let Modeldata = ref([])
// const { role } = useUserStore()
const router = useRouter()
// const route = useRoute()
// function handleSelect(index) {
//   router.push(index)
// }

// const filterGroup = (value: any, row: any) => {
//   return String(row.organization) === value
// }
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
const input2 = ref('')
const select = ref('1')
// 表格设置
// @ts-ignore
const handleClick = (row: any) => {
  router.push({ path: `/branch/progress/${row.id}` })
}
let tableData = ref([])
// 分页设置
let page = ref(1)
let size = ref(15)

let total = ref()
const getTableData = () => {
  tableData.value = Modeldata.value.slice(
    (page.value - 1) * size.value,
    page.value * size.value
  )

  total.value = Modeldata.value.length
}
// page改变时的回调函数
// @ts-ignore
const currentChange = (val: any) => {
  page.value = val
  getTableData()
}
// @ts-ignore
const sizeChange = (val: any) => {
  size.value = val
  page.value = 1
  getTableData()
}
async function getMemberUsersAction() {
  let searchParams = {}
  try {
    if (input2.value) {
      if (select.value === '1') searchParams = { name: input2.value }
      else if (select.value === '2')
        searchParams = { identity_id: input2.value }
    }
    const res = await getMemberUsers(searchParams)
    Modeldata.value = res.msg
    getTableData()
  } catch (err) {
    ElMessage.error(`获取数据失败，请重试${err}`)
  }
}
//重置
// @ts-ignore
const resetUser = () => {
  input2.value = ''
  select.value = '1'
  getMemberUsersAction()
}

onMounted(async () => {
  const res = await getMemberUsers()

  Modeldata.value = res.msg
  getTableData()
})
</script>
<style lang="scss">
    
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.el-table .teacher-row {
  background-color: #e8f5e9; /* 淡绿色背景 */
}

/* 本科生支部2行样式 */
.el-table .undergraduate-row {
  background-color: #e3f2fd; /* 淡蓝色背景 */
}

/* 研究生支部行样式 */
.graduate-row {
  background-color: #fff3e0; /* 淡橙色背景 */
}
</style>
<style lang="scss" scoped>
.common-layout {
  width: auto;
}

.GroupList {
  text-align: left;
  height: 50px;
  color: rgb(158, 158, 158);
  align-items: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.line {
  margin-left: 50px;
}

.el-card {
  text-align: left;
  width: 100%;
}
.el-main {
  width: 100%;
  padding: 0 10px;
  .top {
    margin: 10px 0;
    text-align: left;
  }
  .centre {
    padding: 20px 0 0 20px;
    background-color: #fff;
  }
}

</style>