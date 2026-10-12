<script setup>
defineProps({
  currentStation: {
    type: Object,
    default: null
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="hitjam-status-container">
    <!-- Status als er een zender is geselecteerd -->
    <div v-if="currentStation" class="hitjam-alert hitjam-alert-success">
      <span style="font-size: 24px; display: block; margin-bottom: 5px;">{{ currentStation.logo }}</span>
      <strong style="font-size: 20px; display: block;">{{ currentStation.name }}</strong>
      <span style="font-size: 14px; opacity: 0.8; display: block; margin-top: 5px;">
        <span v-if="isLoading">🔄 CSATLAKOZÁS...</span>
        <span v-else-if="currentStation.type === 'youtube'">⚡ KATTINTS A VIDEÓRA A HANGHOZ</span>
        <span v-else>⚡ ÉLŐ ADÁS SZÓL</span>
      </span>
    </div>
    
    <!-- Status als er nog niets is geselecteerd -->
    <div v-else class="hitjam-alert hitjam-alert-error">
      VÁLASSZ EGY ADÓT AZ INDÍTÁSHOZ
    </div>
  </div>
</template>
