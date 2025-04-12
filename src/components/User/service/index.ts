import MYRequest from '@/service'
interface UsersParams {
  name?: string
  rganization?: string
  account?: string
}
export function getUsers(role: string, params?: UsersParams) {
  return MYRequest.get({
    url: `/${role}/rawUsers`,
    params: params
  })
}

export function addUsers(role: string, formData: FormData) {
  return MYRequest.post({
    url: '/${role}/addUsers',
    data: formData
  })
}
export function deleteUserByID(role: string, userId: number) {
  return MYRequest.delete({
    url: `/${role}/userDel/${userId}`
  })
}
export function deleteUserByIDs(role: string, userIds: { ids: number[] }) {
  return MYRequest.delete({
    url: `/${role}/userDelIds`,
    data: userIds
  })
}
export function UpdateUserByID(role: string, updateInfo: any) {
  const { id, identity_id: identity, ...res } = updateInfo
  const apiData = { ...res, identity }
  // console.log('结构之后的值', id, apiData)
  return MYRequest.put({
    url: `/${role}/update/${id}`,
    params: apiData
  })
}
