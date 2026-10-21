<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

onMounted(() => {
  // Amint betölt az app, azonnal megnézzük, van-e elmentett user
  userStore.checkLocalStorageUser()
})
</script>

<template>
    <div v-if="userStore.isLoggedIn" class="user-welcome-bar">
      <p>{{ userStore.username }}</p>
    </div>
</template>