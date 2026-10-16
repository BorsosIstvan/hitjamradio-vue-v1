<script setup>
import { useHitStore } from '../stores/hitStore';
const hitStore = useHitStore();
</script>

<template>
  <div class="hitjam-status-container">
    <div>
        <ul v-if="hitStore.songs.length > 0 && hitStore.showHits">
        <li v-for="song in hitStore.songs" :key="song.title">
            <!-- Ide jön az előadó és a cím -->
            <strong>{{ song.title }}</strong>
        </li>
        </ul>
        <p v-if="hitStore.songs.length === 0">Nincs még betöltött dal. Kattints a gombra!</p>
    </div>
    <div>
        <button class="hitjam-btn" @click="hitStore.loadSongs">load list</button>
        <button class="hitjam-btn" @click="hitStore.toggleHits">{{hitStore.showHits ? 'hide list' : 'show list'}}</button>
    </div>
    <div>
        <p v-if="hitStore.isUpToDate">Is up to date</p>
        <p v-else>Is not up to date</p>
    </div>

  </div>
</template>