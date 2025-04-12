<template>
  <div style="width: 100%; height: 100%">
    <div>
      <Back />
    </div>
    <div class="mian">
      <div class="download">
        <el-text class="mx-1">1、下载导入模版，根据模版完善内容</el-text>
        <el-button @click="downloadDemo()">下载模版</el-button>
      </div>
      <div class="upload">
        <el-text class="mx-1" style="width: 100%; text-align: left"
          >2、上传完善好的内容，支持上传文件格式为：xls、xlsx</el-text
        >
        <div class="SelectFile">
          <!-- <svg-icon name="uploadXls"></svg-icon> -->
          <!-- <el-upload
            v-model:file-list="fileList"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :on-change="handleChange"
          > -->
          <el-upload
            v-model:file-list="fileList"
            style="width: 100%; height: 100%"
            :on-change="handleChange"
            :auto-upload="false"
            accept=".xls,xlsx"
            drag
          >
            <el-button style="margin-top: 50px">选择文件</el-button>
            <template #tip>
              <div class="el-upload__tip">仅支持 xls/xlsx 格式</div>
            </template>
          </el-upload>
        </div>
      </div>
      <div>
        <el-button
          type="primary"
          style="width: 120px; height: 40px"
          @click="submitUpload"
          :disabled="fileList.length === 0"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { addUsers } from './service/index'
// const uploadRef = ref()
const fileList = ref([])
const handleChange = () => {
  fileList.value = fileList.value.slice(-3)
}
// 下载模版
const downloadDemo = (filename = 'template.xlsx') => {
  const basePath = import.meta.env.MODE === 'production' ? '' : '/public'
  const link = document.createElement('a')
  link.href = `${basePath}/${filename}`
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
// 上传文件
const submitUpload = async () => {
  if (fileList.value.length === 0) {
    ElMessage.warning('请选择文件')
    return
  }
  const formData = new FormData()
  fileList.value.forEach((file) => {
    formData.append('file', file.raw)
  })
  await addUsers(formData)
    .then((res) => {
      console.log(res)
      if (res?.status === 500) {
        ElMessage.error(`文件上传失败：${res}`)
        return
      }
      ElMessage.success('文件上传成功')
      console.log(res)
    })
    .catch((error) => {
      ElMessage.error(`文件上传失败：${error} `)
    })
}
</script>

<style lang="scss" scoped>
.mian {
  width: 1500px;
  padding: 5% 0;
  height: 90%;
  background-color: #fff;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .download {
    padding: 40px 35px;
    background-color: #f8f8f8;
    border: 2px dashed #d8d7d7;
    width: 800px;
    display: flex;
    justify-content: space-between;
  }
  .upload {
    padding: 40px 35px;
    background-color: #f8f8f8;
    border: 2px dashed #d8d7d7;
    width: 800px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    gap: 20px;
    .SelectFile {
      width: 100%;
      height: 250px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}
:deep(.el-upload-dragger) {
  height: 200px;
}
</style>
