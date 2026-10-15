<script setup>
import {ref} from 'vue';
const songs = ref([]);
const latestDate = ref('');
const isUpToDate = ref(false);
const showHits = ref(false);

const loadSongs = async () => {
const response = await fetch('https://poci.n-soft.net/HitJamRadio/hits_status.php');

const data = await response.json();
if (data.success){
    songs.value = data.hits;
    latestDate.value = songs.value[0].scraped_date;
    const today = new Date().toISOString().split('T')[0];
    isUpToDate.value = (latestDate.value === today);
}
}
const toggleHits = () => {
    showHits.value = !showHits.value;
}

</script>

<template>
  <div class="hitjam-status-container">
    <div>
        <ul v-if="songs.length > 0 && showHits">
        <li v-for="song in songs" :key="song.title">
            <!-- Ide jön az előadó és a cím -->
            <strong>{{ song.title }}</strong>
        </li>
        </ul>
        <p v-else>Nincs még betöltött dal. Kattints a gombra!</p>
    </div>
    <div>
        <button class="hitjam-btn" @click="loadSongs">load list</button>
        <button class="hitjam-btn" @click="toggleHits">{{showHits ? 'hide list' : 'show list'}}</button>
    </div>
    <div>
        <p v-if="isUpToDate">Is up to date</p>
        <p v-else>Is not up to date</p>
    </div>

  </div>
</template>
