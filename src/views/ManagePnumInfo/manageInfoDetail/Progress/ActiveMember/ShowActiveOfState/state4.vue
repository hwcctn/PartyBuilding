<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="recordTime" class="demo-form-inline">
    <el-form-item 
    label="党委备案时间"  
    style=" height: 30px;"
    title="以学院党委备案时间为准，与入党积极分子的确定和培养教育过程材料本中P8党委备案意见相同">
      <el-date-picker v-model="recordTime" type="date" 
        placeholder="以学院党委备案时间为准" 
        clearable
        style="width: 300px; height: 30px;"
      " />
    </el-form-item>
  </el-form>
  <div>
    <el-button class="button" type="primary"@click="handleSave ">保存</el-button>
  </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '党委备案时间',
  });
  
  const contentInfo = ref({
    Text1: '2023年11月6日',
   
  });
  const recordTime=ref("")
</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
  .edit{
  margin-top: 50px;
  .el-form-item {
   margin-left: 300px;
   
}
.button{
  height: 40px;
  width: 100px;
}
}
</style>
