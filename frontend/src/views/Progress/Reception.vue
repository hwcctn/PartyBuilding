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
 
  { topText: "第十二步", middleText: "支部委员会审查", bottomText: "NotStarted" },
  { topText: "第十三步", middleText: "上级党委预审", bottomText: "NotStarted" },
  { topText: "第十四步", middleText: "填写入党申请书", bottomText: "NotStarted" },
  { topText: "第十五步", middleText: "支部大会讨论", bottomText: "NotStarted" },
  { topText: "第十六步", middleText: "上级党委派人谈话", bottomText: "NotStarted" },
  { topText: "第十七步", middleText: "上级党委审批", bottomText: "NotStarted" },
  { topText: "第十八步", middleText: "再上一级党委组织部门备案", bottomText: "NotStarted" },

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