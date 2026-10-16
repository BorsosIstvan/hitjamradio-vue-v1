<script setup>
import { usePlayerStore } from '../stores/playerStore';
const playerStore = usePlayerStore();

const togglePlay = () => {
  if (playerStore.isPlaying) {
    playerStore.stop();
  } else if (playerStore.currentStation) {
    playerStore.play(playerStore.currentStation);
  } else if (playerStore.stationsList.length > 0) {
    playerStore.play(playerStore.stationsList[0]); // Elindítja a legelső adót
  }
};

</script>
<template>
  <button 
    class="hitjam-btn" 
    :class="{ 'hitjam-btn-logout': playerStore.isPlaying }" 
    @click="togglePlay"
    style="width: 100%; justify-content: center; font-size: 22px; padding: 15px 0; margin-top: 15px;"
  >
    <span v-if="playerStore.isLoading">🔄 LOADING</span>
    <span v-else-if="playerStore.isPlaying">⏸️ STOP AUDIO</span>
    <span v-else>▶️ PLAY RADIO</span>
  </button>
</template>