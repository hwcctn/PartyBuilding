<template>
  <div style="max-width: 600px; margin: 0 20%;" v-if="!$route.meta.hideView">
    <!-- 使用 v-for 渲染步骤 -->
    <StepContainer 
      v-for="(state, index) in stateCartArray" 
      :key="index" 
      :stateCart="state" 
    />
  </div>
  <router-view else />
</template>

<script setup>
import { ref } from 'vue';

// 定义步骤数据
const stateCartArray = ref([
 
  { topText: "第十九步", middleText: "编入党支部和党小组", bottomText: "NotStarted" },
  { topText: "第二十步", middleText: "入党宣誓", bottomText: "NotStarted" },
  { topText: "第二十一步", middleText: "继续教育考察", bottomText: "NotStarted" },
  { topText: "第二十二步", middleText: "提出转正申请", bottomText: "NotStarted" },
  { topText: "第二十三步", middleText: "支部大会讨论", bottomText: "NotStarted" },
  { topText: "第二十四步", middleText: "上级党委审批", bottomText: "NotStarted" },


]);
</script>
<style scoped>

.el-icon {
  width: 100%;
  height: 100%;
}

/* StepContainer 样式调整 */
.step-container {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  color: #000;
  font-weight: 600;
  font-size: 15px;
}


.step-container .top-text {
font-size: 14px;
color: #555;
}

.step-container .middle-text {
font-size: 16px;
font-weight: 600;
color: #333;
}

.step-container .bottom-text {
font-size: 14px;
color: #888;
}
</style>