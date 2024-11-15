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
 
  { topText: "第七步", middleText: "确认发展对象", bottomText: "NotStarted" },
  { topText: "第八步", middleText: "报上级党委备案", bottomText: "NotStarted" },
  { topText: "第九步", middleText: "确认入党介绍人", bottomText: "NotStarted" },
  { topText: "第十步", middleText: "进行整治审查", bottomText: "NotStarted" },
  { topText: "第十一步", middleText: "开展集中培训", bottomText: "NotStarted" },

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