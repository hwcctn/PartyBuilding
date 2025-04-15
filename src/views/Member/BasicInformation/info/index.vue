<template>
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
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserInfoDisplay from './UserInfoDisplay.vue'
import UserInfoEdit from './UserInfoEdit.vue'
import { putMemberInfo } from '../service'
import { useMemberStore } from '@/stores/memberInfo/memberInfo'
import { storeToRefs } from 'pinia'
const memberStore = useMemberStore()
const { memberInfo, image } = storeToRefs(memberStore)

const isShow = ref(true)
const isEditing = ref(false)
const toggleEditMode = () => {
  if (isEditing.value) {
    // info.value = { ...editableInfo.value }
    const res = putMemberInfo(memberInfo.value)
    console.log(res)
  } else {
    // editableInfo.value = { ...info.value }
  }
  isEditing.value = !isEditing.value
}
// 头像上传
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import type { UploadRequestOptions } from 'element-plus'
import { postUploadAvatar } from '../service/index'

const imageUrl = ref(image)

// const handleAvatarSuccess: UploadProps['onSuccess'] = (
//   response,
//   uploadFile
// ) => {
//   imageUrl.value = URL.createObjectURL(uploadFile.raw!)
// }
const memberUpload = (option: UploadRequestOptions) => {
  const formData = new FormData()
  formData.append('avatar', option.file)
  postUploadAvatar(formData).then((res) => {
    imageUrl.value = res.url
    console.log(res)
  })
}
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
