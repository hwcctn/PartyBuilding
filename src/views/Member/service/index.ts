import MYRequest from '@/service'
interface MemberUsersParams {
  name?: string
  identity_id?: string
}
export function getMemberUsers(params?: MemberUsersParams) {
  console.log('参数', params)
  return MYRequest.get({
    url: '/branch/students',
    params: params
  })
}
