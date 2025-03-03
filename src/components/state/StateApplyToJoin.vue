<template>
    <el-timeline style="max-width: 600px">
      <!--递交入党申请书 -->
      <el-timeline-item timestamp="递交入党申请书" placement="top">
    
        <div class="content">
          <el-row class="view-row">
            <el-col :span="6" class="label">{{ defaultValue.labelText1 }}：</el-col>
            <el-col :span="18" class="content">{{ form1.date }}</el-col>
          </el-row>
          <el-row class="view-row">
            <el-col :span="8" class="label">{{ defaultValue.receiver1 }}：</el-col>
            <el-col :span="16" class="content">{{ form1.user }}</el-col>
          </el-row>
        </div>
      </el-timeline-item>
  
      <!--党组织派人谈话  -->
      <el-timeline-item timestamp="党组织派人谈话" placement="top">
        
        <div class="content">
          <el-row class="view-row">
            <el-col :span="6" class="label">{{ defaultValue.labelText2 }}：</el-col>
            <el-col :span="18" class="content">{{ form2.date }}</el-col>
          </el-row>
          <el-row class="view-row">
            <el-col :span="6" class="label">{{ defaultValue.receiver2 }}：</el-col>
            <el-col :span="18" class="content">{{ form2.user }}</el-col>
          </el-row>
        </div>
      </el-timeline-item>
    </el-timeline>
  
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  mode: String
});

const emits = defineEmits(['update:mode']);


  const defaultValue = ref({
    labelText1: '申请入党时间',
    placeholder1: '与入党申请书落款时间一致',
    tooltipText1: '要满18岁之后才能申请入党',
    labelText2: '支部派人谈话时间',
    placeholder2: '人工智能学院XXXX党支部 党支部书记  李四（本人签字）',
    receiver1: '入党申请书接收人 (单位、职务、签名）',
    placeholder3: '谈话时间',
    tooltipText3: '递交入党申请书一个月内的时间',
    receiver2: '谈话人 (单位、职务、签名）',
    placeholder4: '人工智能学院XXXX党支部 支部书记（副书记/组织委员等） 王五（本人签字）',
  });
  
  const form1 = ref({
    user: '人工智能学院研究生党支部 党支部书记  胡燕',
    date: '2023年9月20日',
  });
  
  const form2 = ref({
    user: '人工智能学院研究生党支部 党支部书记  胡燕',
    date: '2023年10月10日',
  });
  </script>
  
  <style scoped>
  /* 样式 */
  .el-timeline-item {
    margin-bottom: 30px;
  }
  
  .label {
    font-weight: 600;
    color: #333;
  }
  
  .content {
    font-size: 20px;
    color: #555;
  }
  
  .view-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .el-timeline-item .el-timeline-item__timestamp.is-top {
    color: #000;
    font-weight: 600;
    font-size: 15px;
  }
  
  .el-timeline-item .el-timeline-item__dot {
    background-color: #fff;
    left: -6px;
    width: 20px;
    height: 20px;
  }
  
  .el-timeline-item .el-timeline-item__dot .el-icon {
    width: 100%;
  }
  </style>
  