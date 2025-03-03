<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form  :model="form" class="demo-form-inline">

    <el-form-item label="支部确定发展对象人选时间"  style="width: 500px;">
      <el-date-picker v-model="form.develomentTime" type="date" 
        placeholder="发展对象人选时间" 
        clearable
        @blur="checkDate(form.confirmActiveTime)" />
    </el-form-item>
    <el-form-item label="起止公示时间" style="width: 500px;" >
    <el-date-picker
        v-model="form.publicTime"
        type="daterange"
        range-separator="To"
        start-placeholder="开始 日期"
        end-placeholder="结束 日期"
      />
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view
 const labelInfo = ref({
    Text1: '支部确定发展对象人选时间',
    Text2: '公示起止时间',
   
  });
  
  const contentInfo = ref({
    Text1: '2024年3月10日',
    Text2: '2024年3月12日——2024年3月15日',
  });
// edit
const form=ref({
  develomentTime:"",
  publicTime:""
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
