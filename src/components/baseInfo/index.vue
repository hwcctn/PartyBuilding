<template>
  <div class="main-container">
    <div class="title">
      <span style="margin: 0; padding-bottom: 10px">基本信息</span>
      <el-button @click="outputFile">导出模版</el-button>
    </div>
    <div class="info-container">
      <div class="avater">
        <el-avatar
          shape="square"
          class="custom-avatar"
          fit="fill"
          :src="info[0].value"
        />
      </div>
      <div class="right">
        <div class="info">
          <el-descriptions class="custom-descriptions">
            <template v-for="item in info.slice(1)" :key="item">
              <el-descriptions-item
                style="width: 10px"
                :label="`${item.label}:`"
                >{{ item.value }}</el-descriptions-item
              >
            </template>
          </el-descriptions>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface UserInfoItem {
  label: string
  value: string
}
const props = defineProps<{
  memberInfo: UserInfoItem[]
}>()
console.log('传过来的人员信息', props.memberInfo)

const info = ref(props.memberInfo)
import { useRoute } from 'vue-router'
import { postPDF } from './service'
const route = useRoute()
const { role, uid } = route.params
const outputFile = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await postPDF(role as string, uid as string)
    .then((res) => {
      loading.close()
      const downloadUrl = res.msg
      if (downloadUrl) {
        const link = document.createElement('a')
        link.href = downloadUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        ElMessage.success('下载成功')
        console.log(res)
      } else {
        ElMessage.warning(`下载异常`)
      }
    })
    .catch((err) => {
      ElMessage.error(`下载失败.错误：${err}`)
    })
}
</script>

<style lang="scss" scoped>
.custom-descriptions {
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
}
::v-deep(.el-descriptions__label) {
  color: var(--el-text-color-primary);
  margin-right: 16px;
  font-weight: 900;
}
.main-container {
  background-image:
    linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9) 50%
    ),
    url(https://i.pinimg.com/originals/8d/6a/80/8d6a80c726074d6f9fedd43d22651155.png);
  background-size: cover;
  background-position: center;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-weight: 600;
}

.info-container {
  display: flex;
  align-items: center;
}

.avater {
  margin-right: 20px;
  height: 100%;
  margin-left: 20px;
}

.right {
  height: 100%;
  width: 100%;
  margin: 0px 20px 20px 0px;
}

.name {
  text-align: left;
}

.info {
  padding: 20px 20px 20px 20px;
  color: #767474;
  background-color: #fbfafb;
}

.custom-avatar {
  width: 120px;
  height: 100%;
  cursor: pointer;
}
</style>
