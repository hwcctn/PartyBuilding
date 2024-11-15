<template>
  <div class="contain">
          <el-row class="view-row">
            <el-col :span="8" class="label">{{ defaultValue.labelText1 }}：</el-col>
            <el-col :span="6" class="content">{{ form1.date }}</el-col>
          </el-row>
          <el-row class="view-row">
            <el-col :span="8" class="label">{{ defaultValue.receiver1 }}：</el-col>
            <el-col :span="12" class="content">{{ form1.user }}</el-col>
          </el-row>
        </div>
        <el-tag type="success" style="width: 100px;height: 40px;" >已通过</el-tag>
</template>

<script setup>
import { ref } from 'vue';
 const defaultValue = ref({
    labelText1: '申请入党时间',
    labelText2: '支部派人谈话时间',
    receiver1: '入党申请书接收人 (单位、职务、签名）',


  });
  
  const form1 = ref({
    user: '人工智能学院研究生党支部 党支部书记  胡燕',
    date: '2023年9月20日',
  });
  
</script>

<style  scoped>
 
 .label {
    font-weight: 600;
    color: #333;
    text-align: left;
    font-size: 20px;
  }
 .contain{
    margin: 30px 0px 20px 80px ;
 } 
 .content {
    font-size: 20px;
    color: #555;
    margin: 0;
    text-align: left;
  }
  .view-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
</style>
