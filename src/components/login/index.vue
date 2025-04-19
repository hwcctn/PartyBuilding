<template>
  <section
    style="
      background-color: #00ff;
      width: 50%;
      height: 40%;

      background-color: #00000060;
      margin: auto;
      margin-top: 10%;
      text-align: center;
      border-radius: 10px;
      padding: 50px 50px;
    "
  >
    <el-container>
      <el-form
        :model="User"
        style="width: 100%; height: 100%; padding-left: 15%; padding-top: 15%"
      >
        <el-form-item prop="account">
          <el-input
            v-model="User.account"
            placeholder="请输入账号"
            style="width: 80%; padding: 0"
            size="large"
          ></el-input>
        </el-form-item>

        <el-form-item prop=" password">
          <el-input
            type="password"
            v-model="User.password"
            style="width: 80%; padding: 0"
            size="large"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="User.role">
            <el-radio label="member">党员</el-radio>
            <el-radio label="branch">支部</el-radio>
            <el-radio label="committee">党委</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-container>
    <div class="dialog-footer" style="margin-top: 5px">
      <el-button
        type="primary"
        @click="login"
        style="margin-right: 40px; width: 100px; height: 40px"
        >登 录</el-button
      >
      <!-- <RouterLink to="/register">注册</RouterLink> -->
      <div style="margin-top: 5%; text-align: center">
        <span style="color: #bbb9b9"
          >登录视为您已同意第三方账号绑定协议、服务条款、隐私政策</span
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import {
  postMemberLogin,
  postBranchLogin,
  postCommitteeLogin
} from './service/login'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const login = async () => {
//   router.push('/home')
// }
// import { useUserStore } from '@/stores/index'
// import type { UserRole } from '@/stores/index'
// const userStore = useUserStore()
// const { changeRole } = userStore
let User = reactive({ account: 'branch', password: '123456', role: 'branch' })

const login = async () => {
  let res
  const payload = {
    account: User.account,
    password: User.password
  }

  switch (User.role) {
    case 'member':
      res = await postMemberLogin(payload)
      break
    case 'branch':
      res = await postBranchLogin(payload)
      break
    case 'committee':
      res = await postCommitteeLogin(payload)
      break
  }

  if (res?.msg) {
    localStorage.setItem('token', res.msg)
    ElMessage.success('登录成功')
    // changeRole(User.role as UserRole)
    localStorage.setItem('role', User.role)
    router.push(`/${User.role}`)
  } else {
    console.error('登录失败', res)
    ElMessage.error(`登录失败`)
  }
}
</script>

<style scoped lang="scss">
.el-input__wrapper {
  height: 40px;
  color: #bbb9b9;
}
.el-radio {
  color: #bbb9b9;
}
</style>
