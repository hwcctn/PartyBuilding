interface StepCard {
  top_text: string
  step_id: number
  middle_text: string
  bottom_text: 'NotStarted' | 'InProgress' | 'Completed'
}
export interface StepGroup {
  title: string
  StateCartData: StepCard[]
}
export interface UserInfoItem {
  label: string
  value: string
}
export interface PartyMemberProcessData {
  stepInfo: StepGroup[]
  userInfo: UserInfoItem[]
}
