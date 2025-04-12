<template>
  <div class="managerUer">
    <div class="content">
      <div class="top">
        <div class="search">
          <el-input
            v-model="input"
            style="max-width: 400px"
            placeholder="请输入搜索的内容"
            class="line"
          >
            <template #prepend>
              <el-select
                v-model="select1"
                placeholder="请选择"
                style="width: 115px; background-color: #fff"
              >
                <el-option label="账号" value="account" />
                <el-option label="姓名" value="name" />
              </el-select>
            </template>
          </el-input>
          <el-select
            v-model="select2"
            placeholder="所属党组织"
            style="width: 150px"
            class="line"
          >
            <el-option label="本科一" value="本科一" />
            <el-option label="本科二" value="本科二" />
            <el-option label="教工" value="教工" />
            <el-option label="研究生" value="研究生" />
          </el-select>
          <el-button class="line" type="primary" @click="searchUser"
            >查询</el-button
          >
          <el-button class="line" plain @click="resetUser">重置</el-button>
        </div>
        <div class="operation">
          <el-button class="line" type="primary" @click="goTonewUser">
            <el-icon style="margin-right: 10px"><CirclePlus /></el-icon>
            新建用户
          </el-button>

          <el-button class="line" @click="goToImportUser" plain>
            批量导入
          </el-button>
          <el-button class="line" plainc @click="BatchRemove"
            >批量删除</el-button
          >
          <el-dropdown>
            <el-button type="primary">
              <el-icon style="margin-right: 10px"><Setting /></el-icon>
              设置显示内容
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>教工党组织</el-dropdown-item>
                <el-dropdown-item>本科生党组织1</el-dropdown-item>
                <el-dropdown-item>本科生党组织2</el-dropdown-item>
                <el-dropdown-item>研究生党组织</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="bottom">
        <el-table
          :data="tableData"
          style="width: 90%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column property="account" label="账号" width="150" />
          <el-table-column property="password" label="密码" width="150" />
          <el-table-column property="name" label="姓名" width="130" />
          <el-table-column property="sex" label="性别" width="130" />
          <el-table-column property="phone" label="手机号" width="160" />
          <el-table-column property="identity_id" label="身份证" width="210" />
          <el-table-column
            property="organization"
            label="所属党组织"
            width="160"
          />
          <el-table-column fixed="right" label="操作" min-width="130">
            <template #default="scope">
              <el-dropdown>
                <el-button type="primary" link>
                  操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <el-button
                        type="danger"
                        link
                        @click="handleDelete(scope.row.id)"
                      >
                        删除
                      </el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-button
                        type="warning"
                        link
                        @click="openEditDialog(scope.row)"
                      >
                        编辑
                      </el-button>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-pagination
            layout="prev, pager, next"
            :current-page="page"
            :page-size="size"
            :total="total"
            @size-change="sizeChange"
            @current-change="currentChange"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="dialog" v-if="DialogVisible"> -->
  <UpdateUser
    v-model:visible="DialogVisible"
    :user-data="currentEditUser"
    @success="handleEditSuccess"
  />
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { Modeldata } from './mockData'
import { useRouter, useRoute } from 'vue-router'
import { getUsers, deleteUserByID, deleteUserByIDs } from './service'
import UpdateUser from './updateUser.vue'
import type { User } from './type'

const router = useRouter()
const route = useRoute()
const { role } = route.params as { role: string }
const input = ref('')
const select1 = ref('')
const select2 = ref('')
let tableData = ref([])
let Modeldata = ref([])
// 选项设置
const selectedRows = ref<number[]>([])
const handleSelectionChange = (val: any[]) => {
  selectedRows.value = val.map((item) => {
    return item.id
  })
}

// 分页设置
let page = ref(1)
let size = ref(15)
let total = ref()
const getTableData = () => {
  tableData.value = Modeldata.value.slice(
    (page.value - 1) * size.value,
    page.value * size.value
  )
  // console.log(tableData.value, Modeldata)

  total.value = Modeldata.value.length
}
// page改变时的回调函数
const currentChange = (val: any) => {
  console.log('翻页，当前为第几页', val)
  page.value = val
  getTableData()
}
const sizeChange = (val: any) => {
  console.log('改变每页多少条，当前一页多少条数据', val)
  size.value = val
  page.value = 1
  getTableData()
}
const goToImportUser = () => {
  router.push('/manageUser/importUser')
}
const goTonewUser = () => {
  router.push('/manageUser/newUser')
}
async function getUsersAtion(UsersParams: Record<string, string>) {
  try {
    const res = await getUsers(role, UsersParams)
    // console.log('搜索', res)
    Modeldata.value = res.data
    getTableData()
  } catch (err) {
    ElMessage.error(`获取数据失败，请重试${err}`)
  }
}
// 查询
async function searchUser() {
  let UsersParams: Record<string, string> = {}
  if (select1.value) {
    UsersParams[select1.value] = input.value
  }
  if (select2.value) {
    UsersParams['organization'] = select2.value
  }
  getUsersAtion(UsersParams)
}
// 重置
async function resetUser() {
  input.value = ''
  select1.value = ''
  select2.value = ''
  searchUser()
}
// 删除单个用户
async function handleDelete(userId: number) {
  try {
    await ElMessageBox.confirm('确定要删除该用户吗？', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    await deleteUserByID(role, userId)
    searchUser()
    ElMessage.success('删除成功')
  } catch (error: any) {
    if (error !== 'cancel') {
      // 不是取消操作
      ElMessage.error(error.response?.data?.message || '删除失败')
    }
  }
}
// 批量删除用户
async function BatchRemove() {
  try {
    await ElMessageBox.confirm('确定要批量删除这些用户吗？', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })

    await deleteUserByIDs(role, { ids: selectedRows.value })
    searchUser()
    ElMessage.success('删除成功')
  } catch (error: any) {
    if (error !== 'cancel') {
      // 不是取消操作
      ElMessage.error(error.response?.data?.message || '删除失败')
    }
  }
}
// 编辑用户信息
const DialogVisible = ref(false)
const currentEditUser = ref<User>({
  id: 0,
  account: '',
  password: '',
  name: '',
  sex: '',
  phone: '',
  identity_id: '',
  organization: ''
})
const handleEditSuccess = () => {
  searchUser()
  console.log('提交成功')
}
const openEditDialog = (rowdata: any) => {
  currentEditUser.value = rowdata
  DialogVisible.value = true
}
// 渲染
onMounted(async () => {
  // console.log(route.path)
  // const res = await getUsers()
  // console.log('人员管理', res)
  // Modeldata.value = res.data
  // getTableData()
  searchUser()
})
</script>

<style lang="scss" scoped>
.managerUer {
  margin: 0 auto;
  width: 1500px;
  height: 100%;

  .title {
    text-align: left;
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    font-size: 15px;
    color: #4a4a4a;
  }

  .content {
    background-color: #fff;
    width: 1450px;
    margin: 0px auto;
    padding: 10px 0px;
    text-align: left;
    .operation {
      margin-top: 10px;
      display: flex;
      align-items: center;
      .el-dropdown {
        margin-left: 50%;
      }
    }
    .bottom {
      margin-top: 20px;
      margin-left: 20px;
    }
  }
  .line {
    margin-left: 30px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
