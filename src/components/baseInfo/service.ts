import MYRequest from '@/service'
export function postPDF(role: string, uid: string) {
  return MYRequest.get({
    url: `/${role}/wordFill/${uid}`
  })
}
