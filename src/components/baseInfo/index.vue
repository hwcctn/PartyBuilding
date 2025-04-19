<template>
  <div class="main-container">
    <div class="title">
      <span style="margin: 0; padding-bottom: 10px">基本信息</span>
      <!-- <el-button @click="outputFile">导出模版</el-button> -->
      <el-button @click="exportDialogVisible = true">导出模版</el-button>
      <el-dialog v-model="exportDialogVisible" title="选择导出内容" width="30%">
        <el-radio-group v-model="exportOption">
          <el-radio label="积极分子" />
          <el-radio label="发展对象" />
          <el-radio label="预备党员" />
        </el-radio-group>
        <template #footer>
          <el-button @click="exportDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmExport">确定导出</el-button>
        </template>
      </el-dialog>
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
const exportDialogVisible = ref(false) //显示
const exportOption = ref('') //单选框绑定，值为0，1，2
// 单选项与数值映射
const optionMap: Record<string, number> = {
  积极分子: 0,
  发展对象: 1,
  预备党员: 2
}
const confirmExport = async () => {
  if (exportOption.value.length === 0) {
    ElMessage.warning('请至少选择一项导出内容')
    return
  }
  const num = optionMap[exportOption.value]
  console.log(`调用接口地址: /${role}/wordFill/${uid}/${num}`)
  exportDialogVisible.value = false

  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await postPDF(role as string, uid as string, num)
    .then((res) => {
      console.log('返回内容:', res)
      loading.close()
      const downloadUrl = res.url
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

// const outputFile = async () => {
//   //显示一个全屏加载动画
//   const loading = ElLoading.service({
//     lock: true,
//     text: '数据加载中请稍后',
//     background: 'rgba(0, 0, 0, 0.7)'
//   })
//   await postPDF(role as string, uid as string)
//     .then((res) => {
//       loading.close()
//       const downloadUrl = res.msg
//       if (downloadUrl) {
//         const link = document.createElement('a')
//         link.href = downloadUrl
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//         ElMessage.success('下载成功')
//         console.log(res)
//       } else {
//         ElMessage.warning(`下载异常`)
//       }
//     })
//     .catch((err) => {
//       ElMessage.error(`下载失败.错误：${err}`)
//     })
// }
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
