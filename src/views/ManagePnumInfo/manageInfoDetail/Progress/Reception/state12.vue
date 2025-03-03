<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">

    <el-form-item label="支部审查时间"  style="width: 500px;">
      <el-date-picker v-model="form.branchReviewTime" type="date" 
        placeholder="请输入支部审查时间" 
        clearable
       />
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view
 const labelInfo = ref({
    Text1: '支部审查时间',
   
   
  });
  
  const contentInfo = ref({
    Text1: '2024年3月10日',
    
  });
// edit
const form=ref({
  branchReviewTime:"",

})
</script>

<style  scoped lang="scss">
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
.el-form-item__content {
    flex: none;
}
.button{
  height: 40px;
  width: 100px;
} 

</style>
