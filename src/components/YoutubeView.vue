<script setup>
defineProps({
  src: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="hitjam-video-wrapper">
    <iframe 
      :src="src"
      class="hitjam-iframe"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
