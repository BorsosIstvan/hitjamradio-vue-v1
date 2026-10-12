import { ref, readonly } from 'vue';
import stationsData from '../config/stations.json';

// We exporteren direct de zenders uit het JSON-bestand
export const stationsList = stationsData;

const nativeAudio = new Audio();
const currentStation = ref(null);
const isPlaying = ref(false);
const isLoading = ref(false);
const youtubeSrc = ref('');

export const audioPlayerService = {
  currentStation: readonly(currentStation),
  isPlaying: readonly(isPlaying),
  isLoading: readonly(isLoading),
  youtubeSrc: readonly(youtubeSrc),

  play(station) {
    if (!station) return;
    
    this.stop();
    
    currentStation.value = station;
    isLoading.value = true;

    if (station.type === 'youtube') {
      youtubeSrc.value = `https://youtube.com/embed/${station.payload}?autoplay=1&modestbranding=1&rel=0`;
      isPlaying.value = true;
      
      setTimeout(() => {
        isLoading.value = false;
        this.updateMediaSession();
      }, 1000);
      
    } else if (station.type === 'native_mp3') {
      nativeAudio.src = station.payload;
      nativeAudio.load();
      
      nativeAudio.play()
        .then(() => {
          isPlaying.value = true;
          isLoading.value = false;
          this.updateMediaSession();
        })
        .catch((err) => {
          console.error("Native audio afspeelfout:", err);
          isPlaying.value = false;
          isLoading.value = false;
        });
    }
  },

  stop() {
    nativeAudio.pause();
    nativeAudio.src = '';
    youtubeSrc.value = '';
    isPlaying.value = false;
    isLoading.value = false;
    this.updateMediaSessionState();
  },

  next() {
    if (!currentStation.value || stationsList.length === 0) return;
    const currentIndex = stationsList.findIndex(s => s.id === currentStation.value.id);
    const nextIndex = (currentIndex + 1) % stationsList.length;
    this.play(stationsList[nextIndex]);
  },

  prev() {
    if (!currentStation.value || stationsList.length === 0) return;
    const currentIndex = stationsList.findIndex(s => s.id === currentStation.value.id);
    const prevIndex = (currentIndex - 1 + stationsList.length) % stationsList.length;
    this.play(stationsList[prevIndex]);
  },

  updateMediaSession() {
    if ('mediaSession' in navigator && currentStation.value) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentStation.value.name,
        artist: currentStation.value.genre,
        album: 'HitJamRadio',
        artwork: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      });
      this.updateMediaSessionState();
    }
  },

  updateMediaSessionState() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = isPlaying.value ? 'playing' : 'paused';
    }
  }
};

nativeAudio.onplay = () => { isPlaying.value = true; audioPlayerService.updateMediaSessionState(); };
nativeAudio.onpause = () => { isPlaying.value = false; audioPlayerService.updateMediaSessionState(); };

// Luisteraars voor de auto-knoppen direct koppelen
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => { if (currentStation.value) audioPlayerService.play(currentStation.value); });
  navigator.mediaSession.setActionHandler('pause', () => { audioPlayerService.stop(); });
  navigator.mediaSession.setActionHandler('stop', () => { audioPlayerService.stop(); });
  navigator.mediaSession.setActionHandler('previoustrack', () => { audioPlayerService.prev(); });
  navigator.mediaSession.setActionHandler('nexttrack', () => { audioPlayerService.next(); });
}
