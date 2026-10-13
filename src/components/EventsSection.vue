<template>
  <section id="catering" class="section events">
    <div class="wrap">
      <header class="head">
        <h2 v-reveal>Pogostitve za vsako priložnost</h2>
        <p v-reveal="1" class="lead">
          Na našem prostoru ali kjerkoli na terenu. Od leta 1994 smo pogostili goste na več kot 350 lokacijah.
        </p>
      </header>

      <div class="grid">
        <article
          v-for="(e, i) in events"
          :key="e.key"
          v-reveal="i"
          class="card"
          :class="`card-${e.key}`"
        >
          <div class="img">
            <img :alt="e.alt" loading="lazy" :src="e.img">
          </div>
          <div class="text">
            <h3>{{ e.title }}</h3>
            <p>{{ e.text }}</p>
          </div>
        </article>

        <article v-reveal="4" class="card card-away">
          <AppIcon class="icon" :path="mdiTruckOutline" />
          <h3>Pridemo tudi k vam</h3>
          <p>
            Postavimo terensko kuhinjo, pečemo v živo in hrano ohranimo toplo v grelnih posodah.
            Za podjetja organiziramo zabavo kar na vaši lokaciji.
          </p>
          <a class="away-link" :href="contact.phoneHref">{{ contact.phone }}</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { mdiTruckOutline } from '@mdi/js'
  import AppIcon from '@/components/AppIcon.vue'
  import { contact, events } from '@/content'
</script>

<style scoped>
  .head {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: clamp(36px, 5vw, 64px);
  }
  .head h2 { max-width: 16ch; }

  .grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-areas:
      'wed wed wed wed prem prem'
      'biz biz pic pic away away';
    gap: 20px;
  }
  .card-wed { grid-area: wed; }
  .card-pic { grid-area: pic; }
  .card-biz { grid-area: biz; }
  .card-prem { grid-area: prem; }
  .card-away { grid-area: away; }

  .card {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .img {
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }
  /* Top-row photos grow to fill the row, so neither card shows empty space */
  .card-wed .img { aspect-ratio: auto; flex: 1; min-height: 340px; }
  .card-prem .img { aspect-ratio: auto; flex: 1; min-height: 220px; }
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.9s var(--ease);
  }
  .card:hover .img img { transform: scale(1.04); }

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 22px 24px 26px;
  }
  .text p { color: var(--muted); font-size: 0.98rem; }

  .card-away {
    justify-content: flex-end;
    gap: 12px;
    padding: 28px;
    background: var(--forest);
    color: var(--on-forest);
  }
  .card-away p { color: var(--on-forest-muted); font-size: 0.98rem; }
  .icon { font-size: 34px; color: var(--accent); margin-bottom: auto; }
  .away-link {
    margin-top: 8px;
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 650;
    letter-spacing: -0.02em;
    text-decoration-color: var(--accent);
    text-underline-offset: 6px;
  }

  @media (max-width: 980px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        'wed wed'
        'pic biz'
        'prem away';
    }
    .card-wed .img { aspect-ratio: 16 / 10; min-height: 0; }
    .card-prem .img { aspect-ratio: 4 / 3; flex: none; min-height: 0; }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-areas: 'wed' 'prem' 'biz' 'pic' 'away';
    }
    .card-away { min-height: 260px; }
  }
</style>
