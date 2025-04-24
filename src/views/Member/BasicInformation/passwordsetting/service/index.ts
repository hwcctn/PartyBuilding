import MYRequest from '@/service'
export function updateuserInfo(data: { name: string, password: string }) {
  return MYRequest.put({
    url: '/stu/update',
     data
  })
}
