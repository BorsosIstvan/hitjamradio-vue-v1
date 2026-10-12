<script setup>
defineProps({
  isAdminView: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-admin']);
</script>

<template>
  <footer style="margin-top: 20px; width: 100%;">
    <div class="hitjam-footer">
      <!-- Toont de toggle knop alleen als we niet al in het admin paneel zitten -->
      <button v-if="!isAdminView" class="hitjam-btn hitjam-footer-toggle" @click="emit('toggle-admin')">
        ⚙️ Admin Panel
      </button>
      <span v-else style="display: block; padding: 4px 0; font-size: 10px; opacity: 0.5;">
        Módosítási fázis aktív
      </span>
      <div style="margin-top: 10px;">
        © HITJAM-PARTY STYLE • COMPONENT PWA v5.0
      </div>
    </div>
  </footer>
</template>
