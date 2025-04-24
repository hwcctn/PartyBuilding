
import { defineStore } from 'pinia'

export const useBranchInformationStore = defineStore('BranchInformation', {
  state: () => ({
      name: '',
      password:'',
  }),

  actions: {
    setBranchInfo( name: string , password: string) {
      this.name = name;
      this.password = password;
    },

    clearBranchInfo() {
      this.name =  '';
      this.password = '';
    },
    resetBranchInformation() {
      this.name = ''
      this.password = ''
    }
  }
})
