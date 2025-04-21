<template>
    <el-card style="width: 600px;">
    <h3 style="border-bottom: 2px solid #0abf88; padding-bottom: 8px; margin-bottom: 20px;">
      密码设置
    </h3>

    <div style="text-align: center; margin-bottom: 20px;">
      <el-avatar :size="100" src="" />
      <div style="margin-top: 10px; font-size: 20px;">{{ form.username }}</div>
    </div>

    <el-form :model="form" label-width="80px" :rules="rules" ref="formRef">
      <el-form-item label="用户名:">
        <el-input v-model="form.username" disabled />
      </el-form-item>

      <el-form-item label="昵称:">
        <el-input v-model="form.nickname" />
      </el-form-item>

      <el-form-item label="密码:">
        <el-input v-model="form.password" show-password placeholder="不修改密码请留空" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

// 模拟从 localStorage 读取账号信息
const account = localStorage.getItem('account') 
const password = localStorage.getItem('password')
// 表单数据
const form = reactive({
  username: account,
  nickname: '',
  password: password,
})

// 表单引用
const formRef = ref()

// 校验规则（可选）
const rules = {
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }]
}

// 初始化数据
onMounted(() => {
  const savedNickname = localStorage.getItem('nickname')
  if (savedNickname) form.nickname = savedNickname
})

// 提交处理
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) return

    // 模拟保存逻辑
    localStorage.setItem('nickname', form.nickname)
    if (form.password) {
      localStorage.setItem('password', form.password)
    }

    ElMessage.success('保存成功')
    form.password = '' // 清空密码输入框
  })
}

// 重置处理
const onReset = () => {
  form.nickname = ''
  form.password = ''
}
</script>
<style lang="">

</style>