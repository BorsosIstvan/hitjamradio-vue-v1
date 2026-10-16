<script setup>
import { usePlayerStore } from '../stores/playerStore';
const playerStore = usePlayerStore();
</script>
<template>
  <div v-if="playerStore.youtubeSrc" class="hitjam-video-wrapper">
    <iframe 
      :src="playerStore.youtubeSrc"
      class="hitjam-iframe"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>