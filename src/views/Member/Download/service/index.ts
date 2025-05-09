import MYRequest from '@/service'
export function postPDF(ids: number[]) {
  return MYRequest.post({
    url: '/stu/wordFill',
    data: { ids },
    // headers: {
    //   'Content-Disposition': 'inline',
    //   'Content-Type': 'application/pdf'
    // }
    headers: {
      'Content-Type': 'application/json'  // 确保传递的请求类型是 JSON
    }
  })
}
