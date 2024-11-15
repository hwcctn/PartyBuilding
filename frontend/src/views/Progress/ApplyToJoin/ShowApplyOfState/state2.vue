<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
        </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '支部派人谈话时间',
    Text2: '谈话人 (单位、职务、签名）',
   
  });
  
  const contentInfo = ref({
    Text1: '2023年10月10日',
    Text2: '人工智能学院研究生党支部 党支部书记  胡燕',
  });

</script>

<style  scoped>
 .content {
  font-size: 20px;
    color: #555;
  }
  .label {
    font-weight: 600;
    color: #333;
    text-align: left;
    font-size: 20px;
  }
 
</style>
