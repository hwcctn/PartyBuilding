<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">

    <el-form-item label="入党宣誓时间"  style="width: 500px;">
      <el-date-picker v-model="form.PartyOathTime" type="date" 
        placeholder="请输入宣誓时间" 
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
    Text1: '入党宣誓时间',
   
   
  });
  
  const contentInfo = ref({
    Text1: '2024年11月10日',

  });
// edit
const form=ref({
  PartyOathTime:"",

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
:deep(.el-range__icon) {
  width: 16px !important;  // 设置合理宽度
  height: 16px !important;
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
