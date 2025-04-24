import MYRequest from '@/service'
import qs from 'qs'
export function postMemberLogin(user: any) {
  return MYRequest.post({
    url: '/userLogin',
    data: qs.stringify(user),
    addToken: false
  })
}
export function postBranchLogin(user: any) {
  return MYRequest.post({
    url: '/adminLogin/0', 
    data: qs.stringify(user),
    addToken: false
  })
}
export function postCommitteeLogin(user: any) {
  return MYRequest.post({
    url: '/adminLogin/1', 
    data: qs.stringify(user),
    addToken: false
  })
}