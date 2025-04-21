
import { defineStore } from 'pinia'

export const useInformationStore = defineStore('information', {
  state: () => ({
      name: '',
  }),

  actions: {
    setMemberInfo( name: string ) {
      this.name = name
    },

    clearMemberInfo() {
      this.name =  '';
    }
  }
})
