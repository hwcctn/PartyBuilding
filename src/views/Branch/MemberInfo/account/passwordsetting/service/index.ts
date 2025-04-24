import MYRequest from '@/service'
export function updateBranchInfo(data: { name: string, password: string }) {
  return MYRequest.put({
    url: '/branch/updateSelf',
     data
  })
}
