import MYRequest from '@/service'
export function getMemberInfo() {
  return MYRequest.get({
    url: '/stu/userInfo'
  })
}
export function putMemberInfo(newmemberInfo: object) {
  return MYRequest.put({
    url: '/stu/update',
    data: newmemberInfo
  })
}
export function postUploadAvatar(formData: FormData) {
  return MYRequest.post({
    url: '/stu/upload',
    data: formData
  })
}
