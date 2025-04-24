<template>
  <!-- <iframe :src="objectUrl" type="application/pdf" class="main"></iframe> -->
  <!-- <iframe src="/public/test.pdf" type="application/pdf" class="main"></iframe> -->
  <div class="container">
    <!-- <el-button @click="outputFile" type="primary">导出模版</el-button> -->
    <el-button 
    @click="exportDialogVisible = true"
    style="font-size: 30px; padding: 30px 30px;"
    >模板下载</el-button>
    <el-dialog v-model="exportDialogVisible" title="选择导出内容" width="30%">
      <el-checkbox-group v-model="exportOptions">
        <el-checkbox label="积极分子" />
        <el-checkbox label="发展对象" />
        <el-checkbox label="预备党员" />
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
import { ref } from 'vue'
const exportDialogVisible = ref(false) //显示
const exportOptions = ref([]) //多选框绑定，值为0，1，2
// 单选项与数值映射
const optionMap: Record<string, number> = {
  积极分子: 0,
  发展对象: 1,
  预备党员: 2
}
const confirmExport = async () => {
  if (exportOptions.value.length === 0) {
    ElMessage.warning('请至少选择一项导出内容')
    return
  }
  const ids = exportOptions.value.map(label => optionMap[label])
  exportDialogVisible.value = false

  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  try {
    const res = await postPDF({ ids })
    loading.close()
    console.log(res)
    const urls = [res.url, res.url1, res.url2].filter(Boolean)
    if (urls.length === 0) {
      ElMessage.warning('未返回可下载链接')
      return
    }

    urls.forEach(url => {
      const link = document.createElement('a')
      link.href = url
      link.download = '' // 可选：指定下载文件名
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })

    ElMessage.success('下载成功')
  } catch (error) {
    loading.close()
    ElMessage.error(`下载失败，错误信息：${error}`)
  }
}

// const outputFile = async () => {
//   const loading = ElLoading.service({
//     lock: true,
//     text: '数据加载中请稍后',
//     background: 'rgba(0, 0, 0, 0.7)'
//   })
//   await postPDF()
//     .then((res) => {
//       loading.close()
//       const downloadUrl = res.msg
//       const link = document.createElement('a')
//       link.href = downloadUrl
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)
//       ElMessage.success('下载成功')
//       console.log(res)
//     })
//     .catch((err) => {
//       ElMessage.error(`下载失败.错误：${err}`)
//     })
// }
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
