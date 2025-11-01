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
            <div class="display" >
                <ul v-if="templates.length">
                    <li v-for="(item,index) in templates" :key="index">
                        <h3>{{item.Name}}</h3>
                        <ul>
                            <li v-for="(url, idx) in item.Data" :key="idx">
                                <a
                                    :href="url"
                                    target="_blank"
                                    rel="noopener"
                                    :download
                                >
                                     {{ url }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { submitfile } from "./service/index"
const route = useRoute()
const router = useRouter()
void router
const role = computed(() => route.meta.role);
let fileList = ref([])
let templates = ref([])
// console.log(role.value)
//上传模板
const SubmitFile = async () => {
  if (fileList.value.length === 0) {
    ElMessage.warning('请选择文件')
    return
  }

  const formData = new FormData()
  fileList.value.forEach((file) => {
    formData.append('file', file.raw)
  })

  try {
    const res = await submitfile(formData, role.value)
    console.log('接口返回：', res)
    const result = res.data 
    if (Array.isArray(result) && result.length > 0) {
      templates.value = result
      ElMessage.success('模板生成成功')
    } else {
      ElMessage.error('模板生成失败：返回为空')
    }
  } catch (error) {
    ElMessage.error(`文件上传失败：${error}`)
  }
}
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
            .display {
                display: block;
                text-align: left;
                
                ul {
                    list-style: none;
                    padding-left: 0;
                    margin: 0;
                    
                    li {
                        text-align: left;
                        
                        a {
                            display: inline-block;
                            text-align: left;
                            vertical-align: top;
                        }
                    }
                }
            }

        }
    }
</style>