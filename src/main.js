import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Importeer de HitJam-Party stijlen centraal
import { registerSW } from 'virtual:pwa-register'

// Slimme automatische update-luisteraar voor mobiele telefoons
if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      console.log("Új rádiólista vagy verzió érkezett! Automatikus frissítés...");
      // Dwing de Service Worker om de nieuwe cache direct te activeren
      updateSW(true);
      
      // Korte time-out en herlaad de pagina zodat de nieuwe stations.json direct zichtbaar is
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
    onOfflineReady() {
      console.log("Az app készen áll az offline/autós használatra!");
    }
  });
}

createApp(App).mount('#app')
