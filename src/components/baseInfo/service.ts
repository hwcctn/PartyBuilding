import MYRequest from '@/service'
// export function postPDF(role: string, uid: string) {
//   return MYRequest.get({
//     url: `/${role}/wordFill/${uid}`
//   })
// }
export function postPDF(uid: string, ids: number[]) {
  return MYRequest.post({
    url: `/branch/wordFill/${uid}`,
    // params: { ids: JSON.stringify(ids) }   // GET 请求用 params 传递
    data: { ids }
  })
}