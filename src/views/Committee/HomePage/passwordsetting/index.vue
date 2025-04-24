<template>
    <el-card style="width: 600px;">
    <h3 style="border-bottom: 2px solid #0abf88; padding-bottom: 8px; margin-bottom: 20px;">
      密码设置
    </h3>

    <div style="text-align: center; margin-bottom: 20px;">
      <el-avatar :size="100" src="" />
      <div style="margin-top: 10px; font-size: 20px;">{{ savedaccount }}</div>
    </div>

    <el-form :model="form" label-width="80px" :rules="rules" ref="formRef">
      <el-form-item label="账号:">
        <el-input v-model="savedaccount" disabled />
      </el-form-item>

      <!-- <el-form-item label="昵称:">
        <el-input v-model="form.name" />
      </el-form-item> -->

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
import { updateCommitteeInfo } from './service/index'
// 模拟从 localStorage 读取账号信息
const savedaccount = localStorage.getItem('account')
const savedpassword = localStorage.getItem('password')
// 表单数据
const form = reactive({
  password: savedpassword,
})

// 表单引用
const formRef = ref()

// 校验规则（可选）
const rules = {
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }]
}

// 初始化数据
onMounted(() => {
  const savedname = localStorage.getItem('name')
  if (savedname) form.name = savedname
  if (savedpassword) form.password = savedpassword
})

// 提交处理
const onSubmit = () => {
  formRef.value.validate(async(valid) => {
    if (!valid) return
    try {
      const payload = {
        password: form.password || '' // 如果为空字符串，后端看情况处理
      }
      const res = await updateCommitteeInfo(payload)
      console.log("返回的数据",res)
      //更新pinia数据
      localStorage.setItem('password', form.password)
      // form.password = '' // 清空密码字段
      ElMessage.success('保存成功')
    } catch (error) {
      console.error('更新失败:', error)
      ElMessage.error('更新失败，请稍后再试')
    }
  })
}

// 重置处理
const onReset = () => {
  form.name = ''
  form.password = ''
}
</script>
<style lang="">
</style>