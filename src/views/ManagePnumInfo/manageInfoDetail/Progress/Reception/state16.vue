<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">

    <el-form-item label="党委派人谈话时间"  style="width: 500px;">
      <el-date-picker v-model="form.talkTime" type="date" 
        placeholder="请输入谈话时间" 
        clearable
        " />
    </el-form-item>
    <el-form-item label="谈话人（单位、职务、签名）" style="width: 500px;" >
      <el-input v-model="form.interviewer" placeholder="请输入相关信息" />
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view
const labelInfo = {
  Text1: "党委派人谈话时间",
  Text2: "谈话人（单位、职务、签名）" 
}
 

const contentInfo = { 
  Text1: "2024年10月1号",
  Text2: "人工智能学院 学生 龚雪竹"
}


// edit
const form=ref({
  talkTime: "",   
  interviewer: "" 
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
