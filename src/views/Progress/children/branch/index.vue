<template>
  <!-- <div class="edit stepInfo-flex-wrap">
      <DataEditor :onSubmitSuccess="getBranchStepInfoAction" />
    </div> -->
  <div class="form-view">
    <el-form :model="msgData" label-width="200px">
      <el-row :gutter="20">
        <el-col
        v-for="item in currentConfig" :key="item.key"
        :span="item.span || 24"
        >
          <el-form-item :label="item.label">
            <!-- 日期选择框 -->
            <el-date-picker
              v-if="item.type === 'date'"
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
              v-if="item.type === 'select'"
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
        v-show="bottomText === 'InProgress'"
        >转到下一阶段</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
// import DataEditor from '../../components/DataEditor.vue'
// import DataDisplay from '../../components/DataDisplay.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import {
  getBranchStepInfo,
  putBranchStepInfo,
  putNextStep,
  getUserStatus
} from '../../service/index'
import { ref } from 'vue'

const route = useRoute()
const sid = Number(route.params.sid)
const uid = route.params.uid
const role = route.params.role
const bottomText = route.query.bottomText

// 根据路由参数动态获取表单配置
import {formConfigs} from '../../Data/formData'
import { computed } from 'vue'
const currentConfig = computed(() => formConfigs[sid] || [])
// 表单数据处理
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
  const res = await putBranchStepInfo(uid as string, sid.toString(), {
    data: labeledData
  })
  ElMessage.success(res.message)
}

// const msgData = ref<any[]>([])
const msgData = ref<Record<string, { content: string; label?: string }>>({})

const getBranchStepInfoAction = async () => {
  await getBranchStepInfo(uid as string, String(sid)).then((res) => {
    msgData.value = res.msg
  })
}
import { useRouter } from 'vue-router'
import { useStepCardStore } from '../../store/stepCard.store'
const baseInfoSote = useStepCardStore()
const { changeCardState } = baseInfoSote
const router = useRouter()
// 跳转到下一个阶段
const nextStep = async () => {
  await putNextStep(uid as string, String(sid))
  await getUserStatus(Number(uid), role as string).then((res) => {
    // menuData.value = res.stepInfo
    // baseInfo.value = res.userInfo
    changeCardState(res.stepInfo)
  })
  router.back()
}
onMounted(() => {
  getBranchStepInfoAction()
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
</style>
