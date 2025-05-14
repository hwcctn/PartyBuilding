<template lang="">
  <el-card v-show="isShow">
    <div class="demo-fit">
      <div class="block">
        <!-- <el-avatar
          shape="square"
          class="custom-avatar"
          fit="fill"
          src="https://img2.baidu.com/it/u=717423697,1047943915&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
        /> -->
        <el-upload
          class="avatar-uploader"
          :http-request="memberUpload"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </div>
    </div>
    <div class="info">
      <template v-if="isEditing">
        <UserInfoEdit :editableInfo="memberInfo" />
      </template>
      <template v-else>
        <UserInfoDisplay :memberInfo="memberInfo" />
      </template>
    </div>
    <div class="button">
      <el-button type="primary" @click="toggleEditMode">
        {{ isEditing ? '保存' : '编辑' }}
      </el-button>
      <el-button @click="exportDialogVisible = true">模板下载</el-button>
    </div>
    <!-- <el-button @click="exportDialogVisible = true">模板下载</el-button> -->
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
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserInfoDisplay from './UserInfoDisplay.vue'
import UserInfoEdit from './UserInfoEdit.vue'
import { putMemberInfo } from '../service'
import { useMemberStore } from '@/stores/memberInfo/memberInfo'
import { ElLoading } from 'element-plus'
import { storeToRefs } from 'pinia'
const memberStore = useMemberStore()
const { memberInfo, image } = storeToRefs(memberStore)
//避免报错
void UserInfoDisplay // 仅用于消除报错
void UserInfoEdit // 仅用于消除报错
//模板下载
import { postPDF } from './service'
const exportDialogVisible = ref(false) //显示
const exportOptions = ref<string[]>([])//单选框绑定，值为0，1，2
// 单选项与数值映射
const optionMap: Record<string, number> = {
  积极分子: 0,
  发展对象: 1,
  预备党员: 2
}
// const route = useRoute()
// const { role, uid } = route.params
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
void confirmExport
const isShow = ref(true)
void isShow
const isEditing = ref(false)

const toggleEditMode = () => {
  if (isEditing.value) {
    // info.value = { ...editableInfo.value }
    const res = putMemberInfo(memberInfo.value)
    void res;
  } else {
    // editableInfo.value = { ...info.value }
  }
  isEditing.value = !isEditing.value
}
void toggleEditMode
// 头像上传
import { ElMessage } from 'element-plus'
// import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import type { UploadRequestOptions, UploadRequestHandler } from 'element-plus'
import { postUploadAvatar } from '../service/index'

const imageUrl = ref(image)

const memberUpload: UploadRequestHandler = (option: UploadRequestOptions) => {
  const formData = new FormData()
  formData.append('avatar', option.file)
  return postUploadAvatar(formData).then((res) => {
    imageUrl.value = res.url
  })
}
void memberUpload
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('图片必须是 JPG 或 PNG 格式!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片的尺寸不能超过 2MB!')
    return false
  }
  return true
}
void beforeAvatarUpload


</script>

<style scoped lang="scss">
/* .custom-avatar {
  width: 120px;
  height: 155px;
} */
/* 头像样式 */
:deep(.avatar-uploader) .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  width: 120px;
  height: 155px;
  line-height: 178px; /* 垂直居中 */
  text-align: center;
}

:deep(.avatar-uploader) .el-upload:hover {
  border-color: var(--el-color-primary);
}

:deep(.avatar-uploader) .avatar {
  width: 100%;
  height: 100%;
  display: block;
}

:deep(.avatar-uploader) .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
}

.info {
  margin-bottom: 30px;
}

.button {
  margin-bottom: 30px;
}
</style>
<style lang="scss"></style>
