<template>
  <div class="contain">
    <!-- 动态生成标签和内容 -->
    <div v-for="(value, key) in labelInfo" :key="key" class="view-row" style="margin-bottom: 20px;">
      <div class="label">{{ value }}</div>
      <div v-html="contentInfo[key]" class="content"></div> <!-- 使用 key 来从 form1 获取对应内容 -->
    </div>
  </div>
  <el-tag type="success" style="width: 100px; height: 40px;">已通过</el-tag>
</template>

<script setup>
const props = defineProps({
  labelInfo: {
    type: Object,
    required: true
  },
  contentInfo: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.label {
  font-weight: 600;
  color: #333;
  text-align: left;
  margin-right: 50px; 
  flex-shrink: 0; 
  font-size: 20px;
  
}

.contain {
  margin: 30px 0px 20px 80px;
  text-align: left;
  word-spacing: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.view-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  
}

</style>
