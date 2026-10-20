<script setup>
import { registerSW } from 'virtual:pwa-register';
const { needRefresh, updateServiceWorker } = registerSW({
  onNeedRefresh() {
    console.log("A háttérben a telefon észlelte az új verziót!");
  }
});
const updateApp = () => {updateServiceWorker(true);}
</script>

<template>
    <p v-if="needRefresh">
        <button class="hitjam-btn" @click="updateApp()">update app</button>
    </p>
</template>