<template>
  <div style="width: 100%; height: 100%; min-height: 900px ;">
  <div>
    <Back/>
  </div>
  <div class="mian">
    <el-form  :model="formInline" class="demo-form-inline">
      <el-form-item 
      v-for="(label, key) in formLabels" 
      :key="key" 
      
    >
    <template #label>
    <span v-if="key === 'account' || key === 'password'" style="color: red; margin-right: 4px;">*</span>
    {{ label }}
  </template>
      <el-input 
        v-if="key !== 'gender' && key !== 'partyOrg'" 
        v-model="formInline[key]" 
        :placeholder="'请输入' + label" 
        clearable
      />
      <el-select v-else-if="key === 'gender'" v-model="formInline.gender" placeholder="请选择性别" clearable>
        <el-option label="男" value="male" />
        <el-option label="女" value="female" />
      </el-select>
      <el-select v-else v-model="formInline.partyOrg" placeholder="请选择党组织" clearable>
        <el-option label="男" value="male" />
        <el-option label="女" value="female" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="margin: 0 auto; width: 100px; height: 40px;" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  account: '',      
  password: '',     
  name: '',         
  gender: '',       
  phone: '',        
  idCard: '', 
  partyOrg: ''
})
const formLabels = reactive({
  account: '账号：',
  password: '密码：',
  name: '姓名：',
  gender: '性别：',
  phone: '手机号：',
  idCard: '身份证：',
  partyOrg: '所属党组织：'
})
const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang='scss' scoped>
.mian{
  width: 1500px;

  height:100%;
  background-color: #fff;
  margin: 20px auto;
  display: flex;            
  flex-direction:column;      
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
