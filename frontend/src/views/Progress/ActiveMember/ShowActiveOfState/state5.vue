<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
        </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '培养联系人',
    Text2: '单位及职位',
    Text3: '培养联系人',
    Text4: '单位及职位',
   
  });
  
  const contentInfo = ref({
    Text1: '胡燕',
    Text2: '人工智能学院研究生党支部 党支部书记',
    Text3: '陈菲',
    Text4: '人工智能学院研究生党支部 宣传委员',
  });

</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
 
</style>
