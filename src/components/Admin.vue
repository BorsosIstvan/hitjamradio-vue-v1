<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div style="text-align: left; width: 100%;">
    <button class="hitjam-btn hitjam-btn-logout" @click="emit('close')" style="margin-bottom: 20px; padding: 8px 16px;">
      ↩ Vissza a Rádióhoz
    </button>
    
    <h2 style="color: #ff4500; border-bottom: 1px solid rgba(255, 69, 0, 0.2); padding-bottom: 5px;">ADMIN PANEL</h2>
    <p style="color: #fff; opacity: 0.6; font-size: 14px; margin-top: 15px;">
      Az adminisztrációs felület előkészítve a jövőbeli fejlesztésekhez.
    </p>
  </div>
</template>
