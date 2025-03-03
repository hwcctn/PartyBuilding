<template>
  <div>
  <div class="contain">
          <el-row class="view-row">
            <el-col :span="8" class="label">{{ labelInfo.Text1 }}：</el-col>
            <el-col :span="12" class="content">{{ contentInfo.Text1 }}</el-col>
          </el-row>
          <el-row class="view-row">
            <el-col :span="8" class="label">{{labelInfo.Text2 }}：</el-col>
            <el-col :span="12" class="content">{{ contentInfo.Text2  }}</el-col>
          </el-row>
        </div>
        <el-tag type="success" style="width: 100px;height: 40px;" >已通过</el-tag>
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
import { ref,reactive } from 'vue';
 const labelInfo = ref({
    Text1: '申请入党时间',
    Text2: '入党申请书接收人 (单位、职务、签名）',


  });
  
  const contentInfo = ref({
    Text1: '2023年9月20日',
    Text2: '人工智能学院研究生党支部 党支部书记  胡燕',
    
  });
  // Edit
const defaultValue=ref({
  labelText1:"申请入党的时间",
  tooltipText1:"要满18岁之后才能申请入党",
  placeholder1:"与入党申请书落款时间一致",
  labelText2:"入党申请书接收人(单位、职务、签名）",
  placeholder2:"人工智能学院XXXX党支部 支部书记（副书记/组织委员等） 王五（本人签字）",
})
let form=reactive({
  data1:"",
  data2:"人工智能学院XXXX党支部 支部书记（副书记/组织委员等）",
})
</script>

<style  scoped>
 
 .label {
    font-weight: 600;
    color: #333;
    text-align: left;
   
  }
 .contain{
    margin: 30px 0px 20px 80px ;
    font-size: 14px;

 } 
 .content {
    color: #555;
    margin: 0;
    text-align: left;
  }
  .view-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
/* edit */
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
