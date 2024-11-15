<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
        </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '群团组织推优情况',
    Text2: '支部确定入党积极分子时间',
    Text3: '党支部意见',
    Text4: '会议地点',
    Text5: '会议主持人',
    Text6: '会议记录人',

   
  });
  
  const contentInfo = ref({
    Text1: '经研究生团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
    Text2: '2023年11月3日',
    Text3: '推荐为入党积极分子人选，由团委组织审议，并通过党员投票选举产生。',
    Text4: '花江慧谷#403',
    Text5: '胡燕',
    Text6: '陈菲',
  });

</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
 
</style>
