<template>
  <div class="form-view">
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
              value-format="YYYY-MM-DD"
              type="date"
              :placeholder="field.placeholder || '选择日期'"
              style="width: 100%"
            />

            <!-- 下拉选择框 -->
            <el-select
              v-else-if="field.type === 'select'"
              v-model="formData[field.key]"
              style="width: 100%"
              :placeholder="field.placeholder || '请选择'"
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
              :placeholder="field.placeholder || '请输入'"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <el-button
        style="width: 100px; height: 40px; margin-top: 50px"
        type="primary"
        @click="handleSave"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { putBranchStepInfo } from '../service/index'
const props = defineProps<{
  onSubmitSuccess: () => void
}>()
const route = useRoute()
const sid = Number(route.params.sid)
const uid = route.params.uid
const defaultValues: Record<number, Record<string, string>> = {
  1: {
    '1-2': '人工智能学院XXXX党支部 支部书记(副书记/组织委员等)'
  },
  2: {
    '2-2': '人工智能学院XXXX党支部 支部书记(副书记/组织委员等) 王五(本人签字)'
  },
  3: {
    '3-5':
      '经XXX团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
    '3-6':
      '支部委员会于××××年××月××日研究决定，同意把×××同志确定为入党积极分子。指定×××和×××为培养联系人。'
  }
}
const formData = ref({ ...defaultValues[sid] })
// console.log('formData', formData)
const formConfigs: any = {
  1: [
    // {
    //   key: '1-1',
    //   label: '入党申请时间',                                                                                                                                ',
    //   type: 'date',
    //   tooltip: '要满18岁之后才能申请入党',
    //   placeholder: '与入党申请书落款时间一致',
    //   span: 20
    // },

    {
      key: '1-2',
      label: '入党申请书接收人(单位、职务、签名)',
      type: 'text',
      span: 20
    }
  ],

  2: [
    {
      key: '2-1',
      label: '支部谈话时间',
      type: 'date',
      placeholder: '与入党申请书落款时间一致'
    },
    { key: '2-2', label: '谈话人(单位、职务、签名)' }
    // {
    //   key: 'type',
    //   label: '增加类型',
    //   type: 'select',
    //   options: [
    //     { label: '新增党员', value: '1' },
    //     { label: '转入党员', value: '2' }
    //   ]
    // }
  ],
  3: [
    {
      key: '3-1',
      label: '支部确定入党积极分子时间',
      type: 'date',
      placeholder: '入党积极分子时间'
    },
    {
      key: '3-2',
      label: '会议记录人',
      type: 'text',
      placeholder: '请输入会议记录人'
    },
    {
      key: '3-3',
      label: '会议地点',
      type: 'text',
      placeholder: '请输入会议地点'
    },
    {
      key: '3-4',
      label: '会议主持人',
      type: 'text',
      placeholder: '请输入会议主持人'
    },
    {
      key: '3-5',
      label: '群团组织推优情况',
      type: 'textarea'
    },
    {
      key: '3-6',
      label: '党支部意见',
      type: 'textarea'
    }
  ],
  4: [
    {
      key: '4-1',
      label: '党委备案时间',
      type: 'date',
      placeholder: '以学院党委备案时间为准',
      span: 20
    }
  ],
  5: [
    {
      key: '5-1',
      label: '培养联系人 1',
      placeholder: '请输入培养联系人1'
    },
    {
      key: '5-2',
      label: '单位以及职业',
      placeholder: '请输入培养联系人2的单位以及职业'
    },
    {
      key: '5-3',
      label: '培养联系人 2',
      placeholder: '请输入培养联系人2'
    },
    {
      key: '5-4',
      label: '单位以及职业',
      placeholder: '请输入培养联系人2的单位以及职业'
    }
  ],
  6: [
    {
      key: '6-1',
      label: '书面思想汇报时间1',
      placeholder: '请选择时间1',
      type: 'date',
      span: 6
    },
    {
      key: '6-2',
      label: '书面思想汇报时间2',
      placeholder: '请选择时间2',
      type: 'date',
      span: 6
    },
    {
      key: '6-3',
      label: '书面思想汇报时间3',
      placeholder: '请选择时间3',
      type: 'date',
      span: 6
    },
    {
      key: '6-4',
      label: '书面思想汇报时间4',
      placeholder: '请选择时间4',
      type: 'date',
      span: 6
    },
    {
      key: '6-5',
      label: '支部考察时间1',
      placeholder: '请选择时间1',
      type: 'date',
      span: 6
    },
    {
      key: '6-6',
      label: '支部考察时间2',
      placeholder: '请选择时间2',
      type: 'date',
      span: 6
    },
    {
      key: '6-7',
      label: '支部考察时间3',
      placeholder: '请选择时间3',
      type: 'date',
      span: 6
    },
    {
      key: '6-8',
      label: '支部考察时间4',
      placeholder: '请选择时间4',
      type: 'date',
      span: 6
    },
    {
      key: '6-9',
      label: '培养教育情况',
      type: 'textarea',
      placeholder: `（例文：××××年××月--××××年××月，组织×××同志参加×××培训班，学习××××等课程。）
××××年××月××日，组织×××同志听×××同志讲的党课，题目为×××××××。
××××年××月××日，组织×××同志到×××单位开展党员服务群众活动。
××××年××月××日，发放《党章》等资料，要求×××同志认真学习。
(至少四条，其中参加培训班只能算一条记录）`
    },
    {
      key: '6-10',
      label: '考察情况',
      placeholder:
        '（从列为积极分子后每半年考察一次，考察情况落款时间刚满半年当天）',
      type: 'textarea'
    }
  ]
}

// 根据路由参数动态获取表单配置
const fieldsConfig = computed(() => formConfigs[sid] || [])
// 表单数据处理
const formatLabel = () => {
  const labeledData: Record<string, string> = {}
  fieldsConfig.value.forEach((field: any) => {
    const key = field.key
    const label = field.label
    if (formData.value[key] !== undefined) {
      labeledData[label] = formData.value[key]
    }
  })
  return labeledData
}
const handleSave = async () => {
  const labeledData = formatLabel()
  console.log('labeledData', labeledData)
  const res = await putBranchStepInfo(uid as string, sid.toString(), {
    data: labeledData
  })
  console.log('提交表格返回的数据', res)
  props.onSubmitSuccess()
  ElMessage.success('数据提交成功')

  // console.log('formData', formData.value)
}
</script>

<style lang="scss" scoped>
.form-view {
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow-y: auto;
}
</style>
