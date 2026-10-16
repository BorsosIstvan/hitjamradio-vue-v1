<script setup>
import HitsList from './components/HitsList.vue';
import Logo from './components/Logo.vue';
import Footer from './components/Footer.vue';
import Status from './components/Status.vue';
import StationGrid from './components/StationGrid.vue';
import YoutubeView from './components/YoutubeView.vue';
import PlayButton from './components/PlayButton.vue';
</script>

<template>
  <div class="app-container">
    <Logo />
    <Status />
    <YoutubeView />
    <StationGrid />
    <PlayButton />
    <Footer />
  </div>
</template>