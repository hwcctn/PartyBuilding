import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMemberInfo } from './service'
interface MemberInfo {
  id?: number
  name?: string
  account?: string
  password?: string
  xue_hao: string
  positon: string
  sex?: string
  status: string
  step: number
  nation?: string
  birthday?: string
  origin?: string
  occupation?: string
  identity_id?: string
  politicalStatus?: string
  address?: string
  education?: string
  phone?: string
  resume?: string
}
export const useMemberStore = defineStore('member', () => {
  const memberInfo = ref<MemberInfo>({})
  const image = ref<string>('')
  const changeMemberInfo = (newmemberInfo: MemberInfo) => {
    memberInfo.value = newmemberInfo
  }
  const getMemberAction = async () => {
    const res = await getMemberInfo()
    memberInfo.value = res.msg.Info
    image.value = res.msg.Image
    console.log(res)
    return memberInfo.value
  }
  // const getMemberAction = () => {
  //   getMemberInfo().then((res) => {
  //     // console.log(res)
  //     // changeMemberInfo(res.msg)
  //     memberInfo.value = res.msg
  //   })
  // }

  return { memberInfo, image, changeMemberInfo, getMemberAction }
})
