<template>
  <div class="view">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">
          <el-form-item :label="defaultValue.labelText1" :title="defaultValue.tooltipText1">
            <el-date-picker 
            v-model="form.data1" type="date" :placeholder="defaultValue.placeholder1" 
            @blur="checkYearOnFocus2"
            clearable />
          </el-form-item>
          <el-form-item :label="defaultValue.labelText2" >
            <el-input  
            v-model="form.data2"
            size="large"
            type="textarea"
            :placeholder="defaultValue.placeholder2"
            clearable
            maxlength="50"
            style="width: 380px; height: 65px;overflow: hidden;"
            resize="none"
            overflow="hidden"
            :rows="2"
            />
          </el-form-item>
        </el-form>
        <div>
          <el-button class="button" type="primary"@click="handleSave ">保存</el-button>
        </div>      
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
// View
 const labelInfo = ref({
    Text1: '支部派人谈话时间',
    Text2: '谈话人 (单位、职务、签名）',
   
  });
  const contentInfo = ref({
    Text1: '2023年10月10日',
    Text2: '人工智能学院研究生党支部 党支部书记  胡燕',
  });
// Edit
const defaultValue=ref({
  labelText1:"支部派人谈话时间",
  tooltipText1:"递交入党申请书一个月内的时间",
  placeholder1:"谈话时间",
  labelText2:"谈话人(单位、职务、签名）",
  placeholder2:"人工智能学院XXXX党支部 支部书记（副书记/组织委员等） 王五（本人签字）",
})
let form=reactive({
  data1:"",
  data2:"人工智能学院XXXX党支部 支部书记（副书记/组织委员等） 王五（本人签字）",
})
</script>

<style lang="scss" scoped>
.edit{
  margin-top: 50px;
}
 .el-form-item {
   margin-left: 300px;
   
}
.el-form-item__content {
    flex: none;
}
:deep(.el-form-item__label) {
  text-align: right;  
  width: 260px;

}

.button{
  height: 40px;
  width: 100px;
}
</style>
