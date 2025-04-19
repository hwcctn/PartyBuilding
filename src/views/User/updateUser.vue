<template>
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
        <el-input v-model="formData.account" disabled />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" show-password />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="formData.sex" placeholder="请选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formData.phone" />
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="formData.identity_id" />
      </el-form-item>
      <el-form-item label="所属党组织">
        <el-select v-model="formData.organization" placeholder="请选择党组织">
          <el-option label="本科一" value="本科一" />
          <el-option label="本科二" value="本科二" />
          <el-option label="教工" value="教工" />
          <el-option label="研究生" value="研究生" />
        </el-select>
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
import type { User } from './type'
import { ref, watch } from 'vue'
import { UpdateUserByID } from './service'
// import { ElMessage } from 'element-plus'
// import { updateUser } from './service'
import { useRoute } from 'vue-router'
const route = useRoute()
const { role } = route.meta
// console.log('updataRoute', route)
const props = defineProps<{
  visible: boolean
  userData: User
}>()
console.log(props.visible)
const emit = defineEmits(['update:visible', 'success'])

const formData = ref<User>({
  id: 0,
  account: '',
  password: '',
  name: '',
  sex: '',
  phone: '',
  identity_id: '',
  organization: ''
})

// 监听props变化，更新表单数据
watch(
  () => props.userData,
  (newVal) => {
    console.log('新数据', newVal)
    formData.value = { ...newVal }
  },
  { immediate: true, deep: true }
)

const handleSubmit = async () => {
  try {
    const res = await UpdateUserByID(role as string, formData.value)
    console.log('修改结果是', res)
    ElMessage.success('修改成功')
    emit('success')
    emit('update:visible', false)
  } catch (error) {
    ElMessage.error(`修改失败:${error}`)
  }
}

const handleCancel = () => {
  emit('update:visible', false)
}
</script>

<style scoped>
/* 可以添加一些样式 */
</style>
