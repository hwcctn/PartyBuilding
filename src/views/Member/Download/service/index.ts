import MYRequest from '@/service'
export function postPDF() {
  return MYRequest.get({
    url: '/stu/wordFill',
    headers: {
      'Content-Disposition': 'inline',
      'Content-Type': 'application/pdf'
    }
  })
}
