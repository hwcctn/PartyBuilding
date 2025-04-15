<template>
  <div style="width: 100%; height: 100">
    <div>
      <Back />
    </div>
    <div class="mian">
      <el-form :model="formInline" class="demo-form-inline">
        <el-form-item v-for="(label, key) in formLabels" :key="key">
          <template #label>
            <span
              v-if="
                key === 'account' ||
                key === 'password' ||
                key === 'organization'
              "
              style="color: red; margin-right: 4px"
              >*</span
            >
            {{ label }}
          </template>
          <el-input
            v-if="key !== 'sex' && key !== 'organization'"
            v-model="formInline[key]"
            :placeholder="'请输入' + label"
            clearable
          />
          <el-select
            v-else-if="key === 'sex'"
            v-model="formInline.sex"
            placeholder="请选择性别"
            clearable
          >
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
          <el-select
            v-else
            v-model="formInline.organization"
            placeholder="请选择党组织"
            clearable
          >
            <el-option label="本科一" value="本科一" />
            <el-option label="本科二" value="本科二" />
            <el-option label="教工" value="教工" />
            <el-option label="研究生" value="研究生" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="margin: 0 auto; width: 100px; height: 40px"
            @click="onSubmit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { addUser } from './service/index.ts'
const route = useRoute()
const router = useRouter()
const { role } = route.params
// console.log('newdataRoute', role)
const formInline = reactive({
  account: '',
  password: '',
  organization: '',
  name: '',
  sex: '',
  phone: '',
  identity_id: ''
})
const formLabels = reactive({
  account: '账号：',
  password: '密码：',
  organization: '所属党组织：',
  name: '姓名：',
  sex: '性别：',
  phone: '手机号：',
  identity_id: '身份证：'
})
const onSubmit = async () => {
  const res = await addUser(role, formInline)
  if (res?.msg && typeof res.msg !== 'string') {
    router.push(`/${role}/personnel`)
    ElMessage.success('添加用户成功')
  } else {
    ElMessage.error(res.msg)
  }
  // console.log('submit!')
}
</script>

<style lang="scss" scoped>
.mian {
  width: 1500px;
  padding: 10% 0;
  height: 100%;
  background-color: #fff;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .demo-form-inline .el-input {
    --el-input-width: 300px;
  }
  :deep(.el-input__wrapper) {
    height: 40px !important;
  }
  :deep(.el-select__wrapper) {
    height: 40px !important;
  }
  :deep(.demo-form-inline .el-form-item__label) {
    text-align: right;
    width: 120px;
  }
  .demo-form-inline .el-select {
    --el-select-width: 300px;
  }
}
</style>
