<template>
    <div class="step-container">
        <el-check-tag v-if="stateCart.bottomText == 'NotStarted'" checked type="info" >
            <div class="step-text-no top-text">{{ stateCart.topText }}</div>
            <div class="step-text-no middle-text">{{ stateCart.middleText }}</div>
            <div class="step-text-no bottom-text">
                <el-button type="info" round>未开始</el-button>
            </div>
        </el-check-tag>
        <el-check-tag  v-else round checked type="primary" >
            <div class="step-text top-text">{{ stateCart.topText }}</div>
            <div class="step-text middle-text">{{ stateCart.middleText }}</div>
            <div class="step-text bottom-text">
                <el-icon color="rgb(51.2, 126.4, 204)" v-if="stateCart.bottomText == 'Completed'">
                    <CircleCheckFilled />
                </el-icon>
                <el-button v-if="stateCart.bottomText == 'InProgress'" type="primary" round>进行中</el-button>
            </div>
        </el-check-tag >
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    stateCart: {
        type: Object,
        required: true,
        default: () => []
    }
});
</script>

<style scoped>
/* 外部容器样式 */
.step-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 200px;
    margin: 20px auto;
    border-radius: 10px;
    position: relative;
}

.el-check-tag.el-check-tag--primary.is-checked {
    width: 100%;
    height: 100%;
}
.el-check-tag.el-check-tag--info.is-checked {
    width: 100%;
    height: 100%;
}

/* 文字样式 */
.step-text {
    color: rgb(51.2, 126.4, 204);
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(35, 76, 197, 0.5);
    position: absolute;

}
.step-text-no {
    color: rgb(90, 91, 92);
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(108, 108, 109, 0.5);
    position: absolute;

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
</style>
