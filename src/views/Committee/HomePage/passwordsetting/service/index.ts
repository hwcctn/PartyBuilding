import MYRequest from '@/service'
export function updateCommitteeInfo(data: { name: string, password: string }) {
  return MYRequest.put({
    url: '/branch/updateSelf',
     data
  })
}

