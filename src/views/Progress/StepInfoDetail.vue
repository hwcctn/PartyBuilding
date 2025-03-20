<template>
  <el-form :model="formData" label-width="200px">
    <el-row :gutter="20">
      <el-col
        v-for="field in fieldsConfig"
        :key="field.key"
        :span="field.span || 12"
      >
        <el-form-item :label="field.label" :title="field.tooltip">
          <!-- 日期选择框 -->
          <el-date-picker
            v-if="field.type === 'date'"
            v-model="formData[field.key]"
            type="date"
            :placeholder="field.placeholder || '选择日期'"
            style="width: 100%"
          />

          <!-- 下拉选择框 -->
          <el-select
            v-else-if="field.type === 'select'"
            v-model="formData[field.key]"
            style="width: 100%"
            placeholder="请选择"
          >
            <el-option
              v-for="option in field.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>

          <!-- 文本输入框 -->
          <el-input
            v-else
            v-model="formData[field.key]"
            :type="field.type || 'text'"
            placeholder="请输入"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { ref, computed } from 'vue'

const formData = ref({}) // 存储表单数据

// 🔹 定义不同页面的表单字段配置
const formConfigs = {
  'progress-1': [
    // 示例：progress-1 页面
    {
      key: 'date',
      label: '申请入党的时间',
      type: 'date',
      tooltip: '要满18岁之后才能申请入党',
      placeholder: '与入党申请书落款时间一致'
    },
    {
      key: 'type',
      label: '增加类型',
      type: 'select',
      options: [
        { label: '新增党员', value: '1' },
        { label: '转入党员', value: '2' }
      ]
    }
  ],
  'progress-2': [
    // 示例：progress-2 页面，字段不同
    { key: 'talkDate', label: '支部谈话时间', type: 'date' },
    { key: 'talkPerson', label: '谈话人 (单位、职务、签名）' }
  ]
}

// 根据路由参数动态获取表单配置
const fieldsConfig = computed(() => formConfigs['progress-1'] || [])
</script>
