<!-- <template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header :Menudata />
      </el-header>
      <el-main> <RouterView /></el-main>
    </el-container>
  </div>
</template> -->
<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <Header :Menudata />
    <div style="flex: 1; overflow: hidden">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// const route = useRoute()

const Menudata = ref({
  title: '个人信息',
  menu: [
    { index: '/member/basicInfo', label: '基本信息' },
    { index: '/member/download', label: '模版下载' }
  ]
})
</script>

<style lang="scss" scoped></style>
