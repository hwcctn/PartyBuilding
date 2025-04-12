<template>
  <div class="step-container">
    <el-check-tag
      v-if="stateCart.bottom_text == 'NotStarted'"
      checked
      type="info"
      @click="goToDetial(stateCart.step_id + '')"
    >
      <div class="step-text-no top-text">{{ stateCart.top_text }}</div>
      <div class="step-text-no middle-text">{{ stateCart.middle_text }}</div>
      <div class="step-text-no bottom-text">
        <el-button type="info" round>未开始</el-button>
      </div>
    </el-check-tag>
    <el-check-tag
      v-else
      round
      checked
      type="primary"
      @click="goToDetial(stateCart.step_id + '')"
    >
      <div class="step-text top-text">{{ stateCart.top_text }}</div>
      <div class="step-text middle-text">{{ stateCart.middle_text }}</div>
      <div class="step-text bottom-text">
        <el-icon
          color="rgb(51.2, 126.4, 204)"
          v-if="stateCart.bottom_text == 'Completed'"
        >
          <CircleCheckFilled />
        </el-icon>
        <el-button
          v-if="stateCart.bottom_text == 'InProgress'"
          type="primary"
          round
          >进行中</el-button
        >
      </div>
    </el-check-tag>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { useStepCardStore } from '@/stores'
const router = useRouter()
const route = useRoute()
// const stepCardStore = useStepCardStore()
// const { changeCardState } = stepCardStore
interface StateCartItem {
  step_id: number
  top_text: string
  middle_text: string
  bottom_text: string
}
interface Props {
  stateCart: StateCartItem
}
const prop = defineProps<Props>()
const { stateCart } = prop
// console.log(stateCart)
const goToDetial = (sid: string) => {
  console.log('123')
  router.push({
    path: `${route.path}/${sid}`,
    query: {
      topText: stateCart.top_text,
      middleText: stateCart.middle_text
    }
  })
}
</script>

<style scoped lang="scss">
/* 外部容器样式 */
.step-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 150px;
  margin: 20px auto;
  border-radius: 10px;

  .el-check-tag {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .top-text {
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .middle-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bottom-text {
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 文字样式 */
  .step-text {
    color: rgb(51.2, 126.4, 204);
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(35, 76, 197, 0.5);
    position: absolute;
  }

  .step-text-no {
    color: rgb(90, 91, 92);
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(108, 108, 109, 0.5);
    position: absolute;
  }
}
</style>
