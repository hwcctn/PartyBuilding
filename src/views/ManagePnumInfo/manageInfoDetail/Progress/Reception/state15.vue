<template>
 <div class="content">
    <div v-for="(item, index) in labelInfo" :key="index" class="row">
      <div class="column" v-for="(value, key) in item" :key="key">
      <div class="item">
        <div class="label">{{value }}</div>
        <div class="content">{{ contentInfo[index][key] }}</div>
      </div>
    </div>
  </div>
 </div>
  <div class="edit">
    <el-form :inline="true" :model="form" class="demo-form-inline">
    <div class="form-row">
    <el-form-item label="会议时间"  style="width: 400px;">
      <el-date-picker v-model="form.meetingTime" type="date" 
        placeholder="请输入会议时间" 
        clearable />
    </el-form-item>
    <el-form-item label="有表决权党员人数" style="width: 400px;" >
      <el-input
        v-model="form.votersCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
  </div>
  <div class="form-row">
    <el-form-item label="应到人数" style="width: 400px;" >
      <el-input
        v-model="form.votersCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
    <el-form-item label="实到人数" style="width: 400px;" >
      <el-input
        v-model="form.votersCount"
        placeholder="请输入人员个数"
        clearable
      />
    </el-form-item>
  </div>
    <el-form-item label="赞成票数" label-width="140px" style="width: 265px; margin-left: 10px;">
      <el-input
        v-model="form.votersCount"
        placeholder="请输入赞成票数"
        clearable
      />
    </el-form-item>
    <el-form-item label="反对票数" label-width="140px" style="width: 265px;" >
      <el-input
        v-model="form.votersCount"
        placeholder="请输入反对票数"
        clearable
      />
    </el-form-item>
    <el-form-item label="弃权票数" label-width="140px" style="width: 265px;" >
      <el-input
        v-model="form.votersCount"
        placeholder="请输入弃权票数"
        clearable
      />
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view

const labelInfo = [
  { Text1: "会议时间",Text2: "有表决权党员人数",Text3: "应当人数", Text4: "实到人数"  },
  {Text1: "赞成票数", Text2: "反对票数",Text3:"弃权票数"},

];

const contentInfo = [
  { Text1: "2024年10月1号",Text2: "15", Text3: "15", Text4: "15" },
  {Text1: "15", Text2: "0",Text3:"0"},
];
// edit
const form=ref({
  meetingTime:"",
  votersCount: "",       // 有表决权党员人数
  expectedCount: "",     // 应到人数
  actualCount: "",       // 实到人数
  approvalVotes: "",     // 赞成票数
  oppositionVotes: "",   // 反对票数
  abstentionVotes: ""    // 弃权票数
})
</script>

<style  scoped lang="scss">
/* view */
.content {
    font-size: 14px;
    color: #555;
  }
.row{
  margin-left: 200px;
  display: flex;
  .column{
  margin-top: 10px;
  .item{
    display: flex;
    margin-left: 50px;
    
  }
  .label {

  font-weight: 600;
  color: #333;
  text-align: right;
  margin-right: 12px; 
  flex-shrink: 0; 
  }
  .content{

    text-align: left;
    
  }
    }
}
// edit
.edit{
  margin-top: 50px;
}

:deep(.el-form-item) {
margin-right: 0;
}
:deep(.el-form-item__label) {
  text-align: right;  
  width: 150px;

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
