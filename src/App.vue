<script setup>
import { ref, computed } from 'vue';
import { audioPlayerService, stationsList } from './services/audioPlayer';

// Importeer alle losse componenten volgens jouw exacte specificaties
import Logo from './components/Logo.vue';
import Status from './components/Status.vue';
import StationGrid from './components/StationGrid.vue';
import YoutubeView from './components/YoutubeView.vue';
import PlayButton from './components/PlayButton.vue';
import Admin from './components/Admin.vue';
import Footer from './components/Footer.vue';
import HitsList from './components/HitsList.vue';

// Schakelaar voor de Admin-weergave
const isAdminView = ref(false);

// Gecentraliseerde reactieve statussen uit de audio Player service
const currentStation = computed(() => audioPlayerService.currentStation.value);
const isPlaying = computed(() => audioPlayerService.isPlaying.value);
const isLoading = computed(() => audioPlayerService.isLoading.value);
const youtubeSrc = computed(() => audioPlayerService.youtubeSrc.value);

// Event handlers voor de componenten
const handleSelectStation = (station) => {
  audioPlayerService.play(station);
};

const handleTogglePlay = () => {
  if (isPlaying.value) {
    audioPlayerService.stop();
  } else if (currentStation.value) {
    audioPlayerService.play(currentStation.value);
  } else if (stationsList.length > 0) {
    audioPlayerService.play(stationsList[0]); // Start de eerste zender uit de JSON
  }
};
</script>

<template>
  <div class="app-container">
    
    <!-- 1. DE LOGO-ZONE (Altijd zichtbaar bovenaan) -->
    <Logo />

    <!-- 2. DE DYNAMISCHE ADMIN-WEERGAVE -->
    <div v-if="isAdminView" style="width: 100%; flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <Admin @close="isAdminView = false" />
    </div>

    <!-- 3. DE NORMALE AUTÓS MÓD (RADIO) WEERGAVE -->
    <div v-else style="width: 100%; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
      
      <!-- Live Statusbalk -->
      <Status :current-station="currentStation" :is-loading="isLoading" />

      <!-- Middenzone: YouTube iframe OF het losse Component met de knoppen -->
      <main style="margin: 20px 0; flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <YoutubeView v-if="youtubeSrc" :src="youtubeSrc" />
        
        <StationGrid 
          v-else 
          :active-station-id="currentStation?.id" 
          :is-playing="isPlaying"
          @select-station="handleSelectStation" 
        />
      </main>

      <!-- Grote Hoofdfunctieknop -->
      <PlayButton :is-playing="isPlaying" :is-loading="isLoading" @toggle="handleTogglePlay" />
    </div>
    <HitsList />

    <!-- 4. DE UNIVERSELE FOOTER-ZONE (Altijd onderaan) -->
    <Footer :is-admin-view="isAdminView" @toggle-admin="isAdminView = true" />

  </div>
</template>
