<template>
  <!-- <iframe :src="objectUrl" type="application/pdf" class="main"></iframe> -->
  <!-- <iframe src="/public/test.pdf" type="application/pdf" class="main"></iframe> -->
  <div class="container">
    <!-- <el-button @click="outputFile" type="primary">导出模版</el-button> -->
    <el-button @click="exportDialogVisible = true">导出模版</el-button>
      <el-dialog v-model="exportDialogVisible" title="选择导出内容" width="30%">
        <el-checkbox-group v-model="exportOptions">
          <el-checkbox label="多选框1" />
          <el-checkbox label="多选框2" />
          <el-checkbox label="多选框3" />
        </el-checkbox-group>
        <template #footer>
          <el-button @click="exportDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmExport">确定导出</el-button>
        </template>
      </el-dialog>
  </div>
</template>

<script setup lang="ts">
// import pdf from 'vue-pdf'
// import { getDocument } from 'pdfjs-dist'
import 'pdfjs-dist/build/pdf.worker.entry'
// import { onMounted, ref } from 'vue'
import { postPDF } from './service'
import {ref} from 'vue'
// const canvasRef = ref<HTMLCanvasElement | null>(null)
// let objectUrl = ref('')

// onMounted(async () => {
//   const res = await postPDF()
//   objectUrl.value = res.msg
//   console.log(res)
// })
const exportDialogVisible = ref(false)
const exportOptions = ref<string[]>([])

const confirmExport = async () => {
  if (exportOptions.value.length === 0) {
    ElMessage.warning('请至少选择一项导出内容')
    return
  }

  exportDialogVisible.value = false

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

const outputFile = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await postPDF()
    .then((res) => {
      loading.close()
      const downloadUrl = res.msg
      const link = document.createElement('a')
      link.href = downloadUrl
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      ElMessage.success('下载成功')
      console.log(res)
    })
    .catch((err) => {
      ElMessage.error(`下载失败.错误：${err}`)
    })
}
// onMounted(async () => {
//   const pdf = await getDocument(objectUrl.value).promise
//   const page = await pdf.getPage(1)
//   const canvas = canvasRef.value
//   if (!canvas) return
//   const context = canvas.getContext('2d')
//   const viewport = page.getViewport({ scale: 1.5 })

//   canvas.height = viewport.height
//   canvas.width = viewport.width
//   await page.render({ canvasContext: context!, viewport }).promise
// })
// onMounted(async () => {
//   const res = await postPDF()
//   const response = await fetch(res)
//   const blob = await response.blob()
//   blobUrl.value = URL.createObjectURL(blob)
// })
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  border: none;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 全屏高度 */
}
</style>
