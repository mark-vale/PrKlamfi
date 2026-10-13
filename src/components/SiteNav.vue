<template>
  <!-- Marker at the very top of the page; once it scrolls away, the nav lifts -->
  <div ref="sentinel" aria-hidden="true" class="nav-sentinel" />

  <header class="nav" :class="{ open, raised }">
    <div class="wrap nav-inner">
      <a class="brand" href="#top" @click="open = false">
        <span class="brand-name">Pr' Klamfi</span>
        <span class="brand-sub">Piknik prostor Kolovec</span>
      </a>

      <nav aria-label="Glavni meni" class="links">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <a class="btn btn-primary nav-cta" :href="contact.phoneHref">
        <AppIcon :path="mdiPhone" />
        Pokličite Žigo
      </a>

      <button
        aria-controls="mobile-menu"
        :aria-expanded="open"
        :aria-label="open ? 'Zapri meni' : 'Odpri meni'"
        class="burger"
        type="button"
        @click="open = !open"
      >
        <AppIcon :path="open ? mdiClose : mdiMenu" />
      </button>
    </div>

    <nav id="mobile-menu" aria-label="Meni" class="mobile" :inert="!open">
      <a v-for="item in nav" :key="item.href" :href="item.href" @click="open = false">{{ item.label }}</a>
      <a class="btn btn-primary" :href="contact.phoneHref">
        <AppIcon :path="mdiPhone" />
        Pokličite Žigo
      </a>
    </nav>
  </header>
</template>

<script setup>
  import { mdiClose, mdiMenu, mdiPhone } from '@mdi/js'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import AppIcon from '@/components/AppIcon.vue'
  import { contact, nav } from '@/content'

  const open = ref(false)
  const raised = ref(false)
  const sentinel = ref(null)

  let observer
  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      raised.value = !entry.isIntersecting
    })
    observer.observe(sentinel.value)
  })
  onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
  .nav-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 8px;
    pointer-events: none;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 20;
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(14px) saturate(140%);
    border-bottom: 1px solid var(--line);
    transition: box-shadow 0.35s var(--ease), background-color 0.35s var(--ease), border-color 0.35s var(--ease);
  }
  .nav.raised {
    background: color-mix(in srgb, var(--bg) 94%, transparent);
    border-bottom-color: transparent;
    box-shadow: var(--nav-shadow);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    gap: 32px;
    height: var(--nav-h);
  }

  .brand {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    line-height: 1.1;
    margin-right: auto;
  }
  .brand-name {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: -0.03em;
  }
  .brand-sub {
    font-size: 0.78rem;
    color: var(--muted);
  }

  .links {
    display: flex;
    gap: 26px;
  }
  .links a {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    padding-block: 6px;
    background: linear-gradient(var(--accent), var(--accent)) no-repeat left bottom / 0 2px;
    transition: background-size 0.3s var(--ease);
  }
  .links a:hover { background-size: 100% 2px; }

  .nav-cta { min-height: 44px; padding: 0 20px; font-size: 0.95rem; }

  .burger {
    display: none;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--text);
    font-size: 24px;
    cursor: pointer;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 1120px) {
    .links, .nav-cta { display: none; }
    .burger { display: inline-grid; place-items: center; }

    .mobile {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0 var(--gutter);
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.4s var(--ease), opacity 0.3s var(--ease), padding 0.4s var(--ease);
    }
    .open .mobile { max-height: 520px; opacity: 1; padding-block: 8px 24px; }
    .mobile a:not(.btn) {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;
      padding: 8px 0;
    }
    .mobile .btn { margin-top: 12px; align-self: flex-start; }
  }
</style>
