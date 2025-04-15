import MYRequest from '@/service'
import type { PartyMemberProcessData } from './style'

export function getUserStatus(stuId: number, role: string) {
  return MYRequest.get<PartyMemberProcessData>({
    url: `/${role}/status/${stuId}`
  })
}
export function getBranchStepInfo(uid: string, sid: string) {
  return MYRequest.get({
    url: `/branch/stepInfo/${uid}/${sid}`
  })
}
export function getCommitteeStepInfo(uid: string, sid: string) {
  return MYRequest.get({
    url: `/committee/stepInfo/${uid}/${sid}`
  })
}
export function putBranchStepInfo(uid: string, sid: string, data: object) {
  return MYRequest.put({
    url: `/branch/stepInfo/${uid}/${sid}`,
    data: data
  })
}

// 党委同意（已废除）
export function postCommitteeReview(data: object) {
  return MYRequest.post({
    url: '/committee/review',
    data: data
  })
}
export function putCommitteeStepInfo(uid: string, sid: string, data: object) {
  return MYRequest.put({
    url: `/committee/stepInfo/${uid}/${sid}`,
    data: data
  })
}
export function putNextStep(uid: string, sid: string) {
  return MYRequest.put({
    url: `/branch/next/${uid}/${sid}`
  })
}
