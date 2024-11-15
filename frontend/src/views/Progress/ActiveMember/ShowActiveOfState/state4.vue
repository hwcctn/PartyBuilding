<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
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

</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
 
</style>
