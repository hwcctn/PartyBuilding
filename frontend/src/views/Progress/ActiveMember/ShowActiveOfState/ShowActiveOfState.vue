<template>
   <div  style="max-width: 600px ;margin: 0 20%; " v-if="!$route.meta.hideView">
      <StepContainer :stateCart="stateCart3"  @click="handleClick('推荐和确定入党积极分子')"/>
    <!-- 上级党委备案 -->
      <StepContainer :stateCart="stateCart4" @click=" handleClick('上级党委备案')"/>

      <StepContainer :stateCart="stateCart5" @click=" handleClick('指定培养联系人')"/>

      <StepContainer :stateCart="stateCart6" @click=" handleClick('培养教育考察')"/>
    </div>
  <router-view  else/>
  
</template>
<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const handleClick = (routerName) => {
  router.push({
    name: routerName,
  });
};
const stateCart3=ref({
    topText: "第三步",
    middleText: "推荐和确定入党积极分子",
    bottomText: "Completed"
})
const stateCart4=ref({
    topText: "第四步",
    middleText: "上级党委备案",
    bottomText: "Completed"
})
const stateCart5=ref({
    topText: "第五步",
    middleText: "指定培养联系人",
    bottomText: "Completed"
})
const stateCart6=ref({
    topText: "第六步",
    middleText: "培养教育考察",
    bottomText: "Completed"
})
</script>
<style>
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