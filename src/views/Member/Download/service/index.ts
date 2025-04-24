import MYRequest from '@/service'
export function postPDF(data: number[] ) {
  return MYRequest.get({
    url: '/branch/wordFill',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
