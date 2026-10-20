import { defineStore } from "pinia";
import { ref } from "vue";
import stationsData from '../config/stations.json'

const nativeAudio = new Audio();

export const usePlayerStore = defineStore('playerStore', () => {

    // 1. STATE
    const stationsList = stationsData;
    const currentStation = ref(null);
    const isPlaying = ref(false);
    const isLoading = ref(false);
    const youtubeSrc = ref('');

    // 2. ACTIONS
    const play = (station) => {
        if (!station) return;

        stop();

        currentStation.value = station;
        isLoading.value = true;

        if (station.type === 'youtube') {
        youtubeSrc.value = `https://youtube.com/embed/${station.payload}?autoplay=1&modestbranding=1&rel=0`;
        isPlaying.value = true;
        
        setTimeout(() => {
            isLoading.value = false;
            updateMediaSession();
        }, 1000);
        
        } else if (station.type === 'native_mp3') {
        nativeAudio.src = station.payload;
        nativeAudio.load();
        
        nativeAudio.play()
            .then(() => {
            isPlaying.value = true;
            isLoading.value = false;
            updateMediaSession();
            })
            .catch((err) => {
            console.error("Native audio afspeelfout:", err);
            isPlaying.value = false;
            isLoading.value = false;
            });
        }
    };
    const stop = () => {
        nativeAudio.pause();
        nativeAudio.src = '';
        youtubeSrc.value = '';
        isPlaying.value = false;
        isLoading.value = false;
        updateMediaSessionState();
    };
    const next = () => {
        if (!currentStation.value || stationsList.length === 0) return;
        const currentIndex = stationsList.findIndex(s => s.id === currentStation.value.id);
        const nextIndex = (currentIndex + 1) % stationsList.length;
        play(stationsList[nextIndex]);
    };
    const prev = () => {
        if (!currentStation.value || stationsList.length === 0) return;
        const currentIndex = stationsList.findIndex(s => s.id === currentStation.value.id);
        const prevIndex = (currentIndex - 1 + stationsList.length) % stationsList.length;
        play(stationsList[prevIndex]);
    };
    const updateMediaSession = () => {};
    const updateMediaSessionState = () => {};

    // 3. RETURN
    return {
        stationsList,
        currentStation,
        isPlaying,
        isLoading,
        youtubeSrc,
        play,
        stop,
        next,
        prev,
        updateMediaSession,
        updateMediaSessionState
    }
});