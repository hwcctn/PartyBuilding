<template>
   
    <div  style="max-width: 600px ;margin: 0 20%; " v-if="!$route.meta.hideView">
        <!--递交入党申请书 -->
            <StepContainer :stateCart="stateCart1" @click="handleClick('递交入党申请书')" />
            <StepContainer :stateCart="stateCart2" @click="handleClick('党组织派人谈话')"/>
       
    </div>
    <router-view  else/>

</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const handleClick = (routeName) => {
  router.push({
    name: routeName,
  });
};
const stateCart1=ref({
    topText: "第一步",
    middleText: "递交入党申请书",
    bottomText: "Completed"
})
const stateCart2=ref({
    topText: "第二步",
    middleText: "党组织派人谈话",
    bottomText: "Completed"
})
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