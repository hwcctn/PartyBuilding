<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
        </div>
</template>

<script setup>
import { ref } from 'vue';
 const labelInfo = ref({
    Text1: '书面思想汇报时间',
    Text2: '支部考察时间',
    Text3: '培养教育情况',
    Text4: '考察情况',
   
  });
  
  const contentInfo = ref({

    Text1:'2024-02-03   2024-05-03    2024-08-03   2024-11-03',
    Text2: '2024-05-03 2024-11-03',
    Text3: '2023年11月--2023年11月，组织龚雪竹同志参加入党积极分子培训班，学习中国共产党的光辉历程等课程。<br />2023年12月12日，组织龚雪竹同志学习习近平总书记视察时重要讲话精神。<br />2024年3月10日，组织龚雪竹同志到学院开展志愿服务活动。<br />2024年5月11日，发放《党章》等资料，要求龚雪竹同志认真学习。',
    Text4: '该同志自被列为入党积极分子以来，主动学习党的基本知识，对党认识深刻，学习刻苦努力，团结同学，起到很好的带头作用，乐于帮助有困难的同学，受到同学们的好评。',
   
  
  });

</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
 
</style>
