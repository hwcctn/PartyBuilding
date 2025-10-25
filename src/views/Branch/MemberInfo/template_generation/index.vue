<template lang="">
    <div class = "common-layout">
        <div class="main">
            <div class="upload">
                <el-text class="mx-1" style="width: 100%; text-align: left">
                    1、上传完善好的内容，支持上传文件格式为：xls、xlsx
                </el-text>
                <div class="SelectFile">
                    <el-upload 
                        v-model:file-list="fileList"
                        :on-change="handleChange"
                        :auto-upload="false"
                        accept=".xls,xlsx"
                        drag
                    >
                        <el-button style="margin-top: 50px">选择文件</el-button>
                    </el-upload>
                </div>
            </div>
            <el-button
                type="primary"
                class="submit-button"
                @click="SubmitFile"
            >提交</el-button>
            <!-- <el-button
                type="primary"
                style="width: 120px; height: 40px"
                @click="submitUpload"
                :disabled="fileList.length === 0"
            >
            提交
            </el-button> -->
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { submitfile } from "./service/index"
const route = useRoute()
const router = useRouter()
const { role } = route.params

//上传模板
const SubmitFile = async () => {
  if (fileList.value.length === 0) {
    ElMessage.warning('请选择文件')
    return
  }
  const formData = new FormData()
  fileList.value.forEach((file) => {
    formData.append('file', file)
  })
  await submitfile(formData,role)
    .then((res) => {
        if(res?.status === 500) {
            ElMessage.error(`文件生成失败`);
            return;
        }
        ElMessage.success('文件上传成功')
    })
    .catch((error) => {
      ElMessage.error(`文件上传失败：${error} `)
    })
}
let fileList = ref([])
</script>
<style lang="scss" scoped>
    .common-layout{
        width: 1500px;
        display: flex;
        .main{
            justify-content: center;
            align-items: center;
            width: 1000px;
            height: 600px;
            margin-left: 130px;
            margin-top: 50px;
            background-color: #fff;
            padding: 100px 100px;
            .upload{
                border: 2px dashed #d8d7d7;
                background-color: #f8f8f8;
                height: 350px;
                padding: 20px;
                .SelectFile{
                    margin: 40px;
                }
            }
            .submit-button{
                margin: 20px;
                width: 100px;
                height: 30px;
                font-size: 20px;
            }

        }
    }
</style>