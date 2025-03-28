import { acceptHMRUpdate, defineStore } from "pinia"

export const useUserAuth = defineStore('userAuth', {
    state:()=> {
        return{
            isLoggedIn:false,
        }
    },
  })
  
  // make sure to pass the right store definition, `useAuth` in this case.
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserAuth, import.meta.hot))
  }