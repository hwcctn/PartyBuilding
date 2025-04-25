import MYRequest from '@/service'
export function postPDF(ids:number) {
  return MYRequest.get({
    url: `/stu/wordFill/${num}`,
    headers: {
      'Content-Disposition': 'inline',
      'Content-Type': 'application/pdf'
    }
  })
}
