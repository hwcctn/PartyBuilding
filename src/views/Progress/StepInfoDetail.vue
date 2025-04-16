<template>
  <el-config-provider :locale="zhCn">
    <div class="title">
      <h3>{{ stepInfo.topText }} - {{ stepInfo.middleText }}</h3>
    </div>
    <div class="form-view">
      <el-form :model="msgData" label-width="200px">
        <el-row :gutter="20">
          <el-col
            v-for="item in currentConfig"
            :key="item.key"
            :span="item.span || 12"
          >
            <el-form-item
              :label="item.label || item.label"
              :title="item.tooltip"
              v-if="msgData[item.key]"
            >
              <!-- 日期阶段选择框 -->
              <el-date-picker
                v-if="item.type === 'datetimerange' && msgData[item.key]"
                v-model="msgData[item.key].content"
                type="daterange"
                size="large"
                value-format="YYYY年M月D日"
                format="YYYY年M月D日"
                style="width: 100%; max-width: 520px"
                :locale="zhCn"
                :start-placeholder="item.startplaceholder || '开始 日期'"
                :end-placeholder="item.endplaceholder || '结束 日期'"
              />
              <!-- 日期选择框 -->
              <el-date-picker
                v-else-if="item.type === 'date' && msgData[item.key]"
                v-model="msgData[item.key].content"
                value-format="YYYY年M月D日"
                format="YYYY年M月D日"
                type="date"
                size="large"
                :placeholder="item.placeholder || '选择日期'"
                style="width: 100%"
              />
              <!-- 下拉选择框 -->
              <el-select
                v-else-if="item.type === 'select' && msgData[item.key]"
                v-model="msgData[item.key].content"
                style="width: 100%"
                :placeholder="item.placeholder || '请选择'"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>

              <!-- 文本输入框 -->
              <el-input
                v-else-if="msgData[item.key]"
                size="large"
                v-model="msgData[item.key].content"
                :type="item.type || 'text'"
                :placeholder="item.placeholder || '请输入'"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div>
        <el-button class="stepInfo-button" type="primary" @click="handleSave"
          >保存</el-button
        >
        <el-button
          class="stepInfo-button"
          type="success"
          @click="nextStep"
          v-show="bottomText === 'InProgress' && role === 'branch'"
          >转到下一阶段</el-button
        >
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import {
  getBranchStepInfo,
  getCommitteeStepInfo,
  putBranchStepInfo,
  putCommitteeStepInfo,
  putNextStep,
  getUserStatus
} from './service/index.ts'
import { formConfigs } from './Data/formData.ts'
const route = useRoute()
const sid = Number(route.params.sid)
const uid = route.params.uid
const role = route.params.role
// 当前步骤信息
const stepInfo = {
  topText: route.query.topText,
  middleText: route.query.middleText
}
const bottomText = route.query.bottomText

// const a = ref(['2025年4月16日', '2025年5月14日'])
// watch(a, (n) => {
//   console.log(n)
// })
// 根据路由参数动态获取表单配置
const currentConfig = computed(() => formConfigs[sid] || [])
// 提交表单数据处理
const formatLabel = () => {
  const labeledData: Record<string, string> = {}
  Object.values(msgData.value).forEach((value) => {
    const label = value.label
    const content = value.content
    labeledData[label as string] = content
  })
  return labeledData
}
const handleSave = async () => {
  const labeledData = formatLabel()
  console.log('labeledData', labeledData)
  let res = null
  if (role === 'committee') {
    res = await putCommitteeStepInfo(uid as string, sid.toString(), {
      data: labeledData
    })
  } else if (role === 'branch') {
    res = await putBranchStepInfo(uid as string, sid.toString(), {
      data: labeledData
    })
  }
  console.log('提交表格返回的数据', res)
  if (res?.response?.data?.code == '400') {
    ElMessage.error(res.response.data.error)
    getStepInfoAction()
  } else {
    ElMessage.success(res.message)
  }
}

const msgData = ref<Record<string, { content: string; label?: string }>>({})

const getStepInfoAction = async () => {
  if (role === 'committee') {
    await getCommitteeStepInfo(uid as string, String(sid)).then((res) => {
      msgData.value = res.msg
      console.log('StepInfo结果信息', msgData.value)
    })
  } else if (role === 'branch') {
    await getBranchStepInfo(uid as string, String(sid)).then((res) => {
      msgData.value = res.msg
      console.log('StepInfo结果信息', msgData.value)
    })
  }
}
import { useRouter } from 'vue-router'
import { useStepCardStore } from './store/stepCard.store.ts'
const baseInfoSote = useStepCardStore()
const { changeCardState } = baseInfoSote
const router = useRouter()
// 跳转到下一个阶段
const nextStep = async () => {
  await putNextStep(uid as string, String(sid))
  await getUserStatus(Number(uid), role as string).then((res) => {
    changeCardState(res.stepInfo)
  })
  router.back()
}
onMounted(() => {
  getStepInfoAction()
})
</script>

<style lang="scss" scoped>
.form-view {
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow-y: auto;
}
::v-deep(.el-form-item__label) {
  line-height: normal;
  display: flex;
  align-items: center;
}
.el-row {
  justify-content: center;
}
.form-view {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
::v-deep(.el-range-editor) {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
