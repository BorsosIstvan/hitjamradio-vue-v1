<script setup>
import { usePlayerStore } from '../stores/playerStoreNow';
const playerStore = usePlayerStore();

</script>
<template>
  <div class="hitjam-status-container">
    <!-- Status als er een zender is geselecteerd -->
    <div v-if="playerStore.currentStation" class="hitjam-alert hitjam-alert-success">
      <span class="status-logo">{{ playerStore.currentStation.logo }}</span>
      <strong class="status-title">{{ playerStore.currentStation.name }}</strong>
      <span class="status-info">
        <span v-if="playerStore.isLoading">🔄 CSATLAKOZÁS...</span>
        <span v-else-if="playerStore.currentStation.type === 'youtube'">⚡ KATTINTS A VIDEÓRA A HANGHOZ</span>
        <span v-else>
          ⚡ ÉLŐ ADÁS SZÓL
          <p class="status-track">{{ playerStore.trackTitle }}</p>
        </span>
      </span>
    </div>
    
    <!-- Status als er nog niets is geselecteerd -->
    <div v-else class="hitjam-alert hitjam-alert-error">
      VÁLASSZ EGY ADÓT AZ INDÍTÁSHOZ
    </div>
  </div>
</template>
