<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">
      <el-form-item label="党委备案时间"  style="width: 500px;">
        <el-date-picker v-model="form.partyRecordTime" type="date" 
          placeholder="请输入党委时间" 
          clearable />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '党委备案时间',

   
  });
  
  const contentInfo = ref({
    Text1: '2024年4月10日',
  
  });
  const form=ref({
    partyRecordTime:""
  })
</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
  .edit{
  margin-top: 50px;
}
 .el-form-item {
   margin-left: 300px;
   
} 
:deep(.el-form-item__label) {
  text-align: right;  
  width: 260px;

}
:deep(.el-input) {
  height: 100% !important;
  width: 100% !important;
}
</style>
