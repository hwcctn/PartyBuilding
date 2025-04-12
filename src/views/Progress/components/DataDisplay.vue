<template>
  <div class="data-display">
    <div class="list-container">
      <div v-for="(item, index) in msg" :key="index" class="list-item">
        <div class="label">{{ item.label }}:</div>
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.data-display {
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow-y: auto;
}

.list-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px 200px;
}

.list-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 12px 24px;
  padding: 4px 0;
  line-height: 1.5;
  min-height: 24px;
}
.label {
  color: #606266;
  font-size: 14px;
  text-align: right;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.label:hover {
  white-space: normal;
  word-break: break-word;
}

.content {
  color: #303133;
  font-weight: 600;
  font-size: 14px;
  white-space: normal;
  word-break: break-all;
  line-height: 1.5;
}

/* 特殊样式处理 */
.content br {
  display: block;
  content: '';
  margin-top: 4px;
}

/* 日期样式 */
.content:has(span.date) {
  color: #409eff;
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .label {
    width: 160px;
  }
}
</style>
