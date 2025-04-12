import MYRequest from '@/service'
interface MemberUsersParams {
  name?: string
  identity_id?: string
}

interface BranchUsersParams {
  name?: string
  identity_id?: string
}
export function getMemberUsers(params?: MemberUsersParams) {
  console.log('参数', params)
  return MYRequest.get({
    url: '/committee/students',
    params: params
  })
}
export function getBranchUsers(params?: BranchUsersParams) {
  console.log('参数', params)
  return MYRequest.get({
    url: '/committee/branches',
    params: params
  })
}
export function postAddBranch(BranchInfo: object) {
  console.log('参数', BranchInfo)
  return MYRequest.post({
    url: '/committee/branch',
    params: BranchInfo
  })
}
