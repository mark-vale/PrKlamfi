<template>
  <section id="galerija" class="section gallery">
    <div class="wrap">
      <h2 v-reveal class="title">Galerija</h2>

      <div class="masonry">
        <button
          v-for="(g, i) in gallery"
          :key="g.id"
          v-reveal="i % 3"
          :aria-label="`Povečaj fotografijo: ${g.alt}`"
          class="tile"
          type="button"
          @click="openAt(i)"
        >
          <img
            :alt="g.alt"
            :height="Math.round(g.h * 0.7)"
            loading="lazy"
            :src="photo(g.id, 700, Math.round(g.h * 0.7))"
            :width="700"
          >
        </button>
      </div>
    </div>

    <dialog
      ref="dialogEl"
      aria-label="Galerija"
      class="lightbox"
      @click.self="close"
      @close="onClosed"
    >
      <template v-if="index > -1">
        <img :alt="gallery[index].alt" :src="photo(gallery[index].id, 1800, gallery[index].h * 1.5, 85)">
        <p class="count">{{ gallery[index].alt }}</p>
        <button aria-label="Zapri" class="lb-btn lb-close" type="button" @click="close">
          <AppIcon :path="mdiClose" />
        </button>
        <button aria-label="Prejšnja fotografija" class="lb-btn lb-prev" type="button" @click="step(-1)">
          <AppIcon :path="mdiChevronLeft" />
        </button>
        <button aria-label="Naslednja fotografija" class="lb-btn lb-next" type="button" @click="step(1)">
          <AppIcon :path="mdiChevronRight" />
        </button>
      </template>
    </dialog>
  </section>
</template>

<script setup>
  import { mdiChevronLeft, mdiChevronRight, mdiClose } from '@mdi/js'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import AppIcon from '@/components/AppIcon.vue'
  import { gallery, photo } from '@/content'
  import { lockScroll } from '@/smooth-scroll'

  const dialogEl = ref(null)
  const index = ref(-1)

  function openAt (i) {
    index.value = i
    dialogEl.value.showModal()
    lockScroll(true)
  }
  function close () {
    dialogEl.value.close()
  }
  // Fires for every way of closing: button, backdrop click or Esc
  function onClosed () {
    index.value = -1
    lockScroll(false)
  }
  function step (dir) {
    index.value = (index.value + dir + gallery.length) % gallery.length
  }
  function onKey (e) {
    if (index.value < 0) return
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  onMounted(() => window.addEventListener('keydown', onKey))
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
  .title { margin-bottom: clamp(32px, 5vw, 56px); }

  .masonry {
    columns: 3 300px;
    column-gap: 16px;
  }

  .tile {
    display: block;
    width: 100%;
    margin: 0 0 16px;
    padding: 0;
    border: 0;
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
    cursor: zoom-in;
    break-inside: avoid;
  }
  .tile img {
    width: 100%;
    height: auto;
    transition: transform 0.9s var(--ease), filter 0.4s var(--ease);
  }
  .tile:hover img { transform: scale(1.04); }

  .lightbox {
    width: 100vw;
    height: 100dvh;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: rgb(10 18 13 / 0.94);
    color: var(--on-forest);
  }
  .lightbox::backdrop { background: transparent; }
  .lightbox[open] {
    display: grid;
    place-items: center;
  }
  .lightbox img {
    max-width: min(92vw, 1400px);
    max-height: 80dvh;
    border-radius: 12px;
    object-fit: contain;
  }
  .count {
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    font-size: 0.95rem;
    color: var(--on-forest-muted);
    text-align: center;
  }

  .lb-btn {
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 999px;
    border: 1px solid rgb(238 242 233 / 0.3);
    background: rgb(238 242 233 / 0.08);
    color: var(--on-forest);
    font-size: 28px;
    cursor: pointer;
  }
  .lb-btn:hover { background: rgb(238 242 233 / 0.18); }
  .lb-close { top: 20px; right: 20px; }
  .lb-prev { left: 20px; top: 50%; transform: translateY(-50%); }
  .lb-next { right: 20px; top: 50%; transform: translateY(-50%); }

  @media (max-width: 640px) {
    .masonry { columns: 2 140px; column-gap: 10px; }
    .tile { margin-bottom: 10px; border-radius: 12px; }
    .lb-prev, .lb-next { top: auto; bottom: 64px; transform: none; }
  }
</style>
