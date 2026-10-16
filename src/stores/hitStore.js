import { defineStore } from "pinia";
import { ref } from "vue";

export const useHitStore = defineStore('hitStore', () => {
    const songs = ref([]);
    const showHits = ref(false);
    const latestDate = ref('');
    const isUpToDate = ref(false);

    const toggleHits = () => {
        showHits.value = !showHits.value;
    };

    const loadSongs = async () => {
        const response = await fetch('https://poci.n-soft.net/HitJamRadio/hits_status.php');

        const data = await response.json();
        if (data.success){
            songs.value = data.hits;
            latestDate.value = songs.value[0].scraped_date;
            const today = new Date().toISOString().split('T')[0];
            isUpToDate.value = (latestDate.value === today);
        }
    };

    return {
        songs,
        showHits,
        latestDate,
        isUpToDate,
        toggleHits,
        loadSongs
    }
});