<template>
   <div style="width: 100%;">
    <el-row :gutter="20">
    <el-col :span="16"><el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="item.path" 
      v-for="(item, index) in breadcrumbList" 
      :key="index"
      >
      {{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4" >
        <el-icon :size="23" color="white"><Bell /></el-icon>
        <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="50" src="https://th.bing.com/th/id/OIP.7KH4CcveY3sV0Bv_zPyJVgAAAA?rs=1&pid=ImgDetMain" />
        </div>
      </div>
    </el-col>
  </el-row>
    
  </div>
</template>

<script setup>
import { ref ,watch} from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
const breadcrumbList = ref([])
const route = useRoute();

// 根据路由构建面包屑列表
const updateBreadcrumb = () => {
  breadcrumbList.value = route.matched.map((item) => ({
    name: item.meta.title || item.name,
    path: item.path,
  }));
};

watch(route, updateBreadcrumb, { immediate: true });
</script>

<style>
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    color: var(--el-text-color-primary);
    font-weight: bold;
    text-decoration: none;
    transition: var(--el-transition-color);
    color: #fff;
}
 .el-col-4, .el-col-4.is-guttered {
    display: flex;
    align-items: center;
    justify-content: center; 
}
.el-col-16, .el-col-16.is-guttered {
  display: flex;
  align-items: center;
  
}
.demo-basic--circle{
    margin-left: 20px;
}
</style>
