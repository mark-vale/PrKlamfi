<template>
  <section id="informacije" class="section venue">
    <div class="wrap layout">
      <div class="media">
        <div v-reveal class="frame">
          <video
            ref="videoEl"
            aria-label="Video sprehod po piknik prostoru"
            loop
            muted
            playsinline
            :poster="video.poster"
            preload="none"
            :src="video.src"
          />
          <button
            v-if="!reduceMotion"
            :aria-label="playing ? 'Ustavi video' : 'Predvajaj video'"
            class="toggle"
            type="button"
            @click="toggle"
          >
            <AppIcon :path="playing ? mdiPause : mdiPlay" />
          </button>
        </div>
        <p v-reveal="1" class="caption">
          Prostor stoji v gozdu ob ribniku na Kolovcu pri Radomljah.
        </p>
      </div>

      <div class="info">
        <h2 v-reveal>Bistvene informacije</h2>

        <div class="groups">
          <section v-for="(g, i) in facts" :key="g.title" v-reveal="i" class="group">
            <h3>
              <span class="badge"><AppIcon :path="g.icon" /></span>
              {{ g.title }}
            </h3>
            <ul>
              <li v-for="item in g.items" :key="item">{{ item }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { mdiPause, mdiPlay } from '@mdi/js'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import AppIcon from '@/components/AppIcon.vue'
  import { facts, video } from '@/content'

  const videoEl = ref(null)
  const playing = ref(false)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Play the clip only while it is on screen, and never when the user prefers reduced motion
  let observer
  onMounted(() => {
    if (reduceMotion) return
    observer = new IntersectionObserver(([entry]) => {
      const el = videoEl.value
      if (!el) return
      if (entry.isIntersecting) {
        el.play().then(() => (playing.value = true)).catch(() => {})
      } else {
        el.pause()
        playing.value = false
      }
    }, { threshold: 0.4 })
    observer.observe(videoEl.value)
  })
  onBeforeUnmount(() => observer?.disconnect())

  function toggle () {
    const el = videoEl.value
    if (el.paused) {
      el.play()
      playing.value = true
      observer?.observe(el)
    } else {
      el.pause()
      playing.value = false
      observer?.unobserve(el)
    }
  }
</script>

<style scoped>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: start;
  }

  .media {
    position: sticky;
    top: calc(var(--nav-h) + 32px);
  }

  .frame {
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--forest);
    box-shadow: var(--shadow);
  }
  .frame video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .toggle {
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 999px;
    background: rgb(20 42 30 / 0.78);
    color: var(--on-forest);
    font-size: 24px;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: transform 0.25s var(--ease);
  }
  .toggle:active { transform: scale(0.94); }

  .caption {
    margin-top: 14px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .groups {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }

  .group h3 {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--line);
  }
  .group h3 .badge {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: var(--forest);
    color: var(--accent);
    font-size: 22px;
  }

  .group ul {
    list-style: none;
    padding: 0;
    margin: 16px 0 0;
    display: grid;
    gap: 10px;
  }
  .group li {
    position: relative;
    padding-left: 22px;
    color: var(--muted);
  }
  .group li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 0.72em;
    width: 8px;
    height: 2px;
    background: var(--accent);
  }

  @media (max-width: 900px) {
    .layout { grid-template-columns: 1fr; }
    .media { position: static; }
    .frame { aspect-ratio: 16 / 10; }
  }
</style>
