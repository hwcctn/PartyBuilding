import MYRequest from '@/service'
import qs from 'qs'
export function postMemberLogin(user: object) {
  return MYRequest.post({
    url: '/userLogin',
    data: qs.stringify(user),
    addToken: false
  })
}
export function postBranchLogin(user: object) {
  return MYRequest.post({
    url: '/adminLogin',
    data: qs.stringify(user),
    addToken: false
  })
}
export function postCommitteeLogin(user: object) {
  return MYRequest.post({
    url: '/adminLogin',
    data: qs.stringify(user),
    addToken: false
  })
}
