<script setup>
import Logo from './components/Logo.vue';
import Footer from './components/Footer.vue';
import Status from './components/Status.vue';
import StationGrid from './components/StationGrid.vue';
import PlayButton from './components/PlayButton.vue';
</script>

<template>
  <div class="app-container">
    <Logo />
    <Status />
    <StationGrid />
    <PlayButton />
    <Footer />
  </div>
</template>