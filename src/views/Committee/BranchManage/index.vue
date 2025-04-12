<template>
  <div class="managerUer">
    <div class="content">
      <div class="top">
        <div class="left">
          <el-input
            v-model="input"
            style="max-width: 400px"
            placeholder="请输入搜索的内容"
            class="line"
          >
            <template #prepend>
              <el-select
                v-model="select"
                placeholder="请选择"
                style="width: 115px; background-color: #fff"
              >
                <el-option label="账号" value="account" />
                <el-option label="姓名" value="name" />
              </el-select>
            </template>
          </el-input>

          <el-button class="line" type="primary" @click="searchUser"
            >查询</el-button
          >
          <el-button class="line" plain @click="resetUser">重置</el-button>
        </div>
        <div class="right">
          <el-button class="line" type="primary" @click="goTonewBranch">
            <el-icon style="margin-right: 10px"><CirclePlus /></el-icon>
            新建支部账号
          </el-button>

          <el-button class="line" plainc @click="BatchRemove"
            >批量删除</el-button
          >
        </div>
      </div>
      <div class="bottom">
        <div class="user-cards-container">
          <el-card
            v-for="user in userDemo"
            :key="user.id"
            class="user-card"
            shadow="hover"
          >
            <div class="card-checkbox">
              <el-checkbox
                :checked="selectedUsers.includes(user.id)"
                @change="(val) => toggleSelect(user.id, val)"
              >
              </el-checkbox>
            </div>
            <div class="card-content">
              <div class="user-info">
                <p><strong>ID：</strong>{{ user.id }}</p>
                <p><strong>姓名：</strong>{{ user.name }}</p>
                <p><strong>账号：</strong>{{ user.account }}</p>
                <p><strong>密码：</strong>{{ user.password }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
  <el-dialog
    :model-value="visible"
    title="编辑用户信息"
    width="50%"
    :show-close="false"
    :draggable="true"
    :close-on-click-modal="false"
  >
    <el-form :model="formData" label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="formData.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" show-password />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CheckboxValueType } from 'element-plus'
import { getBranchUsers, postAddBranch } from '../service/index'
interface User {
  id: string
  name: string
  account: string
  password: string
}
const visible = ref(false)
const formData = ref({
  account: '',
  password: '',
  name: ''
})
const userDemo = ref<User[]>([])
const selectedUsers = ref<string[]>([])

const toggleSelect = (userId: string, checked?: CheckboxValueType) => {
  const index = selectedUsers.value.indexOf(userId)
  if (checked) {
    selectedUsers.value.push(userId)
  } else {
    if (index !== -1) selectedUsers.value.splice(index, 1)
  }
}
// 新建账号
const goTonewBranch = () => {
  visible.value = true
}
const handleCancel = () => {
  visible.value = false
}
const handleSubmit = async () => {
  try {
    const res = await postAddBranch(formData.value)
    searchUser()
    ElMessage.success(res)
  } catch (err) {
    ElMessage.error(`${err}`)
  }
  visible.value = false
}
// 删除
const BatchRemove = () => {
  console.log('删除成功')
}
// 查询
const input = ref('')
const select = ref('')
async function getUsersAtion(UsersParams: Record<string, string>) {
  try {
    const res = await getBranchUsers(UsersParams)
    // console.log('搜索', res)
    userDemo.value = res.data
  } catch (err) {
    ElMessage.error(`获取数据失败，请重试${err}`)
  }
}
async function searchUser() {
  let UsersParams: Record<string, string> = {}
  if (select.value) {
    UsersParams[select.value] = input.value
  }
  getUsersAtion(UsersParams)
}
// 重置
const resetUser = () => {
  input.value = ''
  select.value = ''
  searchUser()
}

onMounted(async () => {
  // const res = await getBranchUsers()
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
    padding: 20px 0px;
    text-align: left;
    .top {
      display: flex;
      justify-content: space-between;
      .left {
        flex-grow: 1;
      }
      .right {
        margin-right: 200px;
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
/* 卡片样式 */
.user-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.user-card {
  width: 300px;
  margin-bottom: 20px;
}

.user-info p {
  margin: 10px 0;
  line-height: 1.6;
}

/* 卡片悬停效果 */
.el-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
