<template>
  <div class="main">
    <el-button text="plain" @click="goBack">
      <el-icon size="30" color="black"><Back /></el-icon>
      &nbsp;&nbsp; 返回
    </el-button>
    <div class="halvingLine">|</div>

    <div class="pathName">{{ pathName }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const pathName = ref(route.name)
console.log(route, router)
const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  .halvingLine {
    margin: 0 20px;
    color: gray;
  }
  .pathName {
    color: rgb(92, 90, 90);
    font-size: 17px;
    font-weight: 500;
  }
}
</style>
