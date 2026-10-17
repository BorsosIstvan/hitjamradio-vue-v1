<script setup>
import { computed } from 'vue';
import { usePlayerStore } from '../stores/playerStore';
const playerStore = usePlayerStore();
// Létrehozunk egy szűrt listát, ami csak a show: true adókat tartalmazza
const visibleStations = computed(() => {
  return playerStore.stationsList.filter(station => station.show === true);
});
</script>
<template>
  <div v-if="!playerStore.youtubeSrc" class="quiz-grid">
    <button 
      v-for="station in visibleStations"
      :key="station.id"
      class="quiz-btn" 
      :style="playerStore.currentStation?.id === station.id && playerStore.isPlaying ? 'border-color: #ff4500; background: rgba(255, 69, 0, 0.2); box-shadow: 0 0 15px #ff4500;' : ''"
      @click="playerStore.play(station)"
    >
      <span style="font-size: 32px; display: block; margin-bottom: 8px;">{{ station.logo }}</span>
      <span style="font-size: 18px; font-weight: bold; display: block;">{{ station.name }}</span>
    </button>
  </div>
</template>