<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">
      <el-form-item label="参加发展对象集中培训起止时间" style="width: 500px;" >
        <el-date-picker
            v-model="form.trainTime"
            type="daterange"
            range-separator="To"
            start-placeholder="开始 日期"
            end-placeholder="结束 日期"
          />
      </el-form-item>
      <el-form-item label="培训成绩" style="width: 500px;" >
        <el-input v-model="form.trainScore" placeholder="请输入培训成绩" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view
 const labelInfo = ref({
    Text1: '参加发展对象集中培训起止时间',
    Text2: '培训成绩',
   
  });
  
  const contentInfo = ref({
    Text1: '2024年6月10日',
    Text2: '85分',
  });
// edit
  const form=ref({
    trainTime:"",
    trainScore:"",
  })
</script>

<style  lang="scss" scoped>
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
  width: 16px !important; 
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
</style>
