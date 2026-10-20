<script setup>
// Beimportáljuk a package.json fájlt, amiből kiszedjük a verziót
import packageInfo from '../../package.json'

// Kimentjük a verziószámot egy változóba (pl. "3.0.0-dev")
const version = packageInfo.version
</script>

<template>
  <footer style="margin-top: 20px; width: 100%;">
    <div class="hitjam-footer">
      <div style="margin-top: 10px;">
        <p class="footer-row-1">
            © 2026 HitJam Radio v{{ version }} • Powered by Raspberry Pi, Vue & GitHub
        </p>
        <p class="footer-row-2">
            Audio Streams & Metadata via iTunes API • Built with JBL Sound System Compatibility
        </p>
      </div>
    </div>
  </footer>
</template>