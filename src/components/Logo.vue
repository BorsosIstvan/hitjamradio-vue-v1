<script setup>
import packageInfo from '../../package.json'
const version = packageInfo.version
</script>
<template>
  <div class="hitjam-logo-container">
    <h1 style="margin: 0 0 5px 0; letter-spacing: 2px;">HITJAM RADIO</h1>
    <p style="font-size: 12px; text-transform: uppercase; opacity: 0.6; margin: 0 0 20px 0;">
      Hit Jam Radio v{{ version }}
    </p>
  </div>
</template>
