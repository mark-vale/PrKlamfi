<template>
  <svg
    aria-hidden="true"
    class="ic"
    fill="currentColor"
    focusable="false"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path :d="path" />
  </svg>
</template>

<script setup>
  // Renders one icon from @mdi/js. Size follows font-size, color follows text color.
  defineProps({
    path: { type: String, required: true },
  })
</script>

<style scoped>
  .ic {
    display: inline-block;
    flex-shrink: 0;
    vertical-align: -0.125em;
  }
</style>
