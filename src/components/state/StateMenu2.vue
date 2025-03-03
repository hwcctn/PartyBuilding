<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">展开</el-radio-button>
    <el-radio-button :value="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
  >
  
    <!-- 使用 v-for 动态渲染菜单项 -->
    <el-menu-item
        v-for="item in menuItems"
        :key="item.index"
        :index="item.index"
        :disabled="item.disabled"
      >
      <el-icon><document /></el-icon>
      <template #title>{{ item.label }}</template>
        
      </el-menu-item>
    
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSelect = (index) => {
  router.push(index)  // 点击菜单时切换路由
}
const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
    default: () => []
  }
});
const isCollapse = defineModel(ref(true));
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
 padding-top: 20px;
  min-height: 350px;
}
</style>
