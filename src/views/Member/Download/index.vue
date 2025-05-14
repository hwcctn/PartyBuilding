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
import { ElMessage, ElLoading } from 'element-plus'
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
  const ids = exportOptions.value.map(option => optionMap[option])
  exportDialogVisible.value = false

  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await postPDF(ids)
    .then((res) => {
      loading.close()

      const urls = [res?.url, res?.url1, res?.url2].filter(Boolean)
      if (urls.length === 0) {
        ElMessage.warning('未返回可下载链接')
        return
      }

      // 创建下载链接并下载
      urls.forEach(url => {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        document.body.appendChild(iframe)

        // 下载后移除 iframe，防止 DOM 积压
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 2000)
      })
      
      ElMessage.success('下载成功')
    })
    .catch((err) => {
      loading.close()
      ElMessage.error(`下载失败. 错误：${err}`)
    })
}

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
