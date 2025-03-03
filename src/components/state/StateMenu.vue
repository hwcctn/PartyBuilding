<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <!-- 使用 v-for 动态渲染菜单项 -->
      <el-menu-item
        v-for="item in menuItems"
        :key="item.index"
        :index="item.index"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
    default: () => []
  }
});

const activeIndex = ref('');
const route = useRoute();

const handleSelect = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  activeIndex.value = route.path;
});
</script>

<style scoped>
.el-menu--horizontal.el-menu {
    border-bottom: 1px solid var(--el-menu-border-color);
    width: 100%;
}
.el-menu-item {
  width: 250px;
  font-size: 18px; /* 调整字体大小 */
  font-weight: 500; /* 可选，增加字体粗细 */
}
</style>
