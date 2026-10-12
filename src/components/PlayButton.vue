<script setup>
defineProps({
  isPlaying: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle']);
</script>

<template>
  <button 
    class="hitjam-btn" 
    :class="{ 'hitjam-btn-logout': isPlaying }" 
    @click="emit('toggle')"
    style="width: 100%; justify-content: center; font-size: 22px; padding: 15px 0; margin-top: 15px;"
  >
    <span v-if="isLoading">🔄 LOADING</span>
    <span v-else-if="isPlaying">⏸️ STOP AUDIO</span>
    <span v-else>▶️ PLAY RADIO</span>
  </button>
</template>
