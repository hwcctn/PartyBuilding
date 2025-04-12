<template>
  <div class="view stepInfo-flex-wrap">
    <DataDisplay :msg="msgData" />
    <el-tag
      type="success"
      class="stepInfo-tag"
      v-if="stepStatus === '已审批'"
      >{{ stepStatus }}</el-tag
    >
    <el-tag type="danger" class="stepInfo-tag" v-if="stepStatus === '待审核'">{{
      stepStatus
    }}</el-tag>
    <el-tag type="danger" class="stepInfo-tag" v-if="stepStatus === '待提交'">{{
      stepStatus
    }}</el-tag>
    <div style="margin-top: 20px">
      <el-button
        type="success"
        class="btn-v1"
        @click="handlePass"
        v-if="stepStatus === '待审核'"
        >通过</el-button
      >
      <el-button
        type="primary"
        class="btn-v1"
        @click="UpataInfo"
        v-if="stepStatus !== '待提交'"
        >修改</el-button
      >
    </div>
  </div>
  <el-dialog
    :model-value="visible"
    title="修改信息"
    width="50%"
    :show-close="false"
    :draggable="true"
    :close-on-click-modal="false"
  >
    <!-- <div v-for="(item, index) in dataList" :key="index" class="form-item">
      <label class="form-label">{{ item.label }}</label>
      <input
        class="form-input"
        v-model="dataList[index].content"
        type="text"
        :placeholder="`请输入${item.label}`"
      />
    </div> -->
    <el-form :model="dataList" label-width="200px">
      <el-form-item
        v-for="(item, index) in dataList"
        :key="index"
        :label="item.label"
      >
        <el-input v-model="dataList[index].content" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import DataDisplay from '../../components/DataDisplay.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import {
  getCommitteeStepInfo,
  postCommitteeReview,
  putCommitteeStepInfo
} from '../../service/index'
import { ref } from 'vue'
const route = useRoute()
const { sid, uid } = route.params

// console.log(sid, uid)
const msgData = ref<any[]>([])

const stepStatus = ref('')
const handlePass = async () => {
  const data = {
    user_id: Number(uid),
    step_id: Number(sid),
    action: 1
  }
  const res = await postCommitteeReview(data)
  if (res?.msg) {
    await getStepInfoAction()
    ElMessage.success(`数据通过`)
    // console.log(res)
  }
}
// 修改信息
const visible = ref(false)
const dataList = ref<any[]>([])
const UpataInfo = () => {
  visible.value = true
  dataList.value = JSON.parse(JSON.stringify(msgData.value))
  // console.log('提交修改')
}
const handleCancel = () => {
  visible.value = false
}
const handleSubmit = async () => {
  const formatData = {
    data: dataList.value.reduce((acc, item) => {
      acc[item.label] = item.content
      return acc
    }, {})
  }
  await putCommitteeStepInfo(uid as string, sid as string, formatData).then(
    (res) => {
      if (res.message) {
        getStepInfoAction()
        ElMessage.success(res.message)
        visible.value = false
      }
    }
  )
  console.log('提交数据')
}
const getStepInfoAction = async () => {
  await getCommitteeStepInfo(uid as string, sid as string).then((res) => {
    console.log('StepInfo结果信息', res)
    stepStatus.value = res.status
    if (res.msg) {
      msgData.value = res.msg
    }
  })
}
onMounted(() => {
  getStepInfoAction()
})
</script>

<style lang="scss" scoped></style>
