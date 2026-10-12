import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Importeer de HitJam-Party stijlen centraal
import { registerSW } from 'virtual:pwa-register'

if ('serviceWorker' in navigator) {
  registerSW({ immediate: true })
}

createApp(App).mount('#app')
