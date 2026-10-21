import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref(null)
  const isLoggedIn = ref(false)

  // Ellenőrizzük a localStorage-t
  const checkLocalStorageUser = () => {
    const storedUser = localStorage.getItem('hitjam_user')
    
    if (storedUser) {
      username.value = storedUser
      isLoggedIn.value = true
    } else {
      username.value = null
      isLoggedIn.value = false
    }
  }

  return {
    username,
    isLoggedIn,
    checkLocalStorageUser
  }
})
