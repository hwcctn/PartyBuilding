<template>
  <div class="content">
    <StateCart2 :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form :inline="true" :model="form" class="demo-form-inline">
    <div class="form-row">
    <el-form-item label="党委审批时间"  style="width: 300px;">
      <el-date-picker v-model="form.approvalTime" type="date" 
        placeholder="请输入审批时间" 
        clearable />
    </el-form-item>
    <el-form-item label="党委委员人数" style="width: 300px;" >
      <el-input
        v-model="form.committeeCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
  </div>
  <div class="form-row">
    <el-form-item label="实到人数" style="width: 300px;" >
      <el-input
        v-model="form.actualCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
    <el-form-item label="同意人数" style="width: 300px;" >
      <el-input
        v-model="form.agreeCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
  </div>
    <el-form-item label="预备起止时间"  style="width: 600px; ">
      <el-date-picker
        v-model="form.probationPeriod"
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
const labelInfo = [
  { Text1: "党委审批时间",Text2: "党委委员人数"  },
  { Text1: "实到人数",Text2: "同意人数"  },
  { Text1: "预备期起止时间"  },

];

const contentInfo = [
  { Text1: "2024年10月1号",Text2: "15" },
  {Text1: "15",Text2: "15"},
  {Text1: "2024年10月1号——2024年10月5号", },
];
// edit
const form=ref({
  approvalTime: "",  
  committeeCount: "", 
  actualCount: "", 
  agreeCount: "",  
  probationPeriod: ""  
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
//  .el-form-item {
//    margin-left: 300px;
   
// } 
:deep(.el-form-item) {
margin-right: 0;
}
:deep(.el-range__icon) {
  width: 16px !important;  // 设置合理宽度
  height: 16px !important;
}
:deep(.el-form-item__label) {
  text-align: right;  
  width: 130px;

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
