import MYRequest from '@/service'
// export function postPDF(role: string, uid: string) {
//   return MYRequest.get({
//     url: `/${role}/wordFill/${uid}`
//   })
// }
export function postPDF(role: string, uid: string, num: number) {
  return MYRequest.get({
    url: `/${role}/wordFill/${uid}/${num}`
  })
}