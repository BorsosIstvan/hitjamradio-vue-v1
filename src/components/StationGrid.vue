<script setup>
import { stationsList } from '../services/audioPlayer';

defineProps({
  activeStationId: {
    type: String,
    default: null
  },
  isPlaying: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['select-station']);

const handleSelect = (station) => {
  emit('select-station', station);
};
</script>

<template>
  <div class="quiz-grid">
    <button 
      v-for="station in stationsList"
      :key="station.id"
      class="quiz-btn" 
      :style="activeStationId === station.id && isPlaying ? 'border-color: #ff4500; background: rgba(255, 69, 0, 0.2); box-shadow: 0 0 15px #ff4500;' : ''"
      @click="handleSelect(station)"
    >
      <span style="font-size: 32px; display: block; margin-bottom: 8px;">{{ station.logo }}</span>
      <span style="font-size: 18px; font-weight: bold; display: block;">{{ station.name }}</span>
    </button>
  </div>
</template>