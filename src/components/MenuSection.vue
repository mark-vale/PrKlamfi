<template>
  <section id="ponudba" class="section menu">
    <div class="wrap layout">
      <div class="content">
        <p v-reveal class="eyebrow">Okvirna ponudba</p>
        <h2 v-reveal="1">Kaj vas čaka na mizi</h2>
        <p v-reveal="2" class="lead">
          Primer piknik pogostitve. Ponudbo vedno prilagodimo vašim željam.
        </p>

        <div v-reveal="3" aria-label="Hodi" class="tabs" role="tablist">
          <button
            v-for="(c, i) in menu"
            :id="`tab-${c.key}`"
            :key="c.key"
            :ref="el => (tabEls[i] = el)"
            :aria-controls="`panel-${c.key}`"
            :aria-selected="active === i"
            role="tab"
            :tabindex="active === i ? 0 : -1"
            type="button"
            @click="active = i"
            @keydown="onKey"
          >
            {{ c.label }}
          </button>
        </div>

        <!-- Desktop: panels share one grid cell, so the box fits the longest list.
             Mobile: the box is as tall as the drinks list (--h); longer lists scroll inside it. -->
        <div class="panel-wrap" :style="capHeight && { '--h': `${capHeight}px` }">
          <ul
            v-for="(c, i) in menu"
            :id="`panel-${c.key}`"
            :key="c.key"
            :ref="el => (listEls[i] = el)"
            :aria-labelledby="`tab-${c.key}`"
            class="items"
            :class="{ cols: c.items.length > 6, active: active === i, scrolls: overflows[i], 'at-end': atEnd[i] }"
            :inert="active !== i"
            role="tabpanel"
            :tabindex="overflows[i] ? 0 : undefined"
            @scroll.passive="onListScroll(i)"
          >
            <li v-for="item in c.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="actions">
          <a class="btn btn-outline" :href="contact.menuPdf" rel="noopener" target="_blank">
            <AppIcon :path="mdiFileDownloadOutline" />
            Prenesi ponudbo (PDF)
          </a>
          <p class="note">
            Želite drugačen meni? Pišite na
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>.
          </p>
        </div>
      </div>

      <figure v-reveal="1" class="photo">
        <img alt="Kuhar pripravlja krožnike v kuhinji na piknik prostoru" loading="lazy" :src="about.chef">
      </figure>
    </div>
  </section>
</template>

<script setup>
  import { mdiFileDownloadOutline } from '@mdi/js'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import AppIcon from '@/components/AppIcon.vue'
  import { about, contact, menu } from '@/content'

  const active = ref(0)
  const tabEls = []
  const listEls = []
  const capHeight = ref(0)
  const overflows = ref([])
  const atEnd = ref([])

  // The drinks list sets the box height on mobile; anything longer scrolls
  const capIndex = menu.findIndex(c => c.key === 'drinks')

  function measure () {
    capHeight.value = listEls[capIndex]?.scrollHeight ?? 0
    overflows.value = listEls.map(el => el.scrollHeight > capHeight.value + 1)
    for (const [i, _] of listEls.entries()) onListScroll(i)
  }

  function onListScroll (i) {
    const el = listEls[i]
    atEnd.value[i] = el.scrollTop + el.clientHeight >= el.scrollHeight - 2
  }

  let resizeObserver
  onMounted(() => {
    measure()
    resizeObserver = new ResizeObserver(measure)
    for (const el of listEls) resizeObserver.observe(el)
  })
  onBeforeUnmount(() => resizeObserver?.disconnect())

  function onKey (e) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    active.value = (active.value + step + menu.length) % menu.length
    tabEls[active.value]?.focus()
  }
</script>

<style scoped>
  .menu { background: var(--surface); }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: center;
  }

  .eyebrow { color: var(--muted); margin-bottom: 16px; }
  .lead { margin-top: 18px; }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 36px;
  }
  .tabs button {
    min-height: 44px;
    padding: 0 20px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: transparent;
    color: var(--text);
    font: 600 0.95rem var(--font-body);
    cursor: pointer;
    transition: background-color 0.25s var(--ease), color 0.25s var(--ease), border-color 0.25s var(--ease);
  }
  .tabs button:hover { border-color: var(--text); }
  .tabs button[aria-selected='true'] {
    background: var(--forest);
    border-color: var(--forest);
    color: var(--on-forest);
  }

  .panel-wrap {
    display: grid;
    margin-top: 28px;
  }

  .items {
    grid-area: 1 / 1;
    align-content: start;
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 12px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    transition: opacity 0.3s var(--ease), transform 0.4s var(--ease), visibility 0s linear 0.3s;
  }
  .items.active {
    opacity: 1;
    visibility: visible;
    transform: none;
    transition: opacity 0.3s var(--ease) 0.08s, transform 0.4s var(--ease) 0.08s, visibility 0s;
  }
  .items.cols { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 32px; }
  .items li {
    padding-left: 22px;
    position: relative;
  }
  .items li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 0.72em;
    width: 8px;
    height: 2px;
    background: var(--accent);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px 24px;
    margin-top: 32px;
  }
  .note { color: var(--muted); font-size: 0.95rem; }
  .note a { color: var(--text); text-underline-offset: 3px; }

  .photo {
    margin: 0;
    border-radius: var(--radius);
    overflow: hidden;
    aspect-ratio: 4 / 5;
    box-shadow: var(--shadow);
  }
  .photo img { width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 900px) {
    .layout { grid-template-columns: 1fr; }
    .photo { aspect-ratio: 16 / 11; order: -1; }

    /* Fixed box, as tall as the drinks list. Longer lists scroll inside it */
    .panel-wrap {
      display: block;
      position: relative;
      height: var(--h, auto);
    }
    .items {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      max-height: 100%;
      overflow-y: auto;
      scrollbar-width: thin;
    }
    /* Fade at the bottom hints there is more; it goes away at the end of the list */
    .items.scrolls:not(.at-end) {
      -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 56px), transparent);
      mask-image: linear-gradient(to bottom, #000 calc(100% - 56px), transparent);
    }
    .items.scrolls:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 4px;
      border-radius: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .items, .items.active { transition: none; transform: none; }
  }

  @media (max-width: 560px) {
    .items.cols { grid-template-columns: 1fr; }
  }
</style>
