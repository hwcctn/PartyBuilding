import MYRequest from '@/service'
export function getMemberInfo() {
  return MYRequest.get({
    url: '/stu/userInfo'
  })
}
