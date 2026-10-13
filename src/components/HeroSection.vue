<template>
  <section id="top" class="hero">
    <img
      alt="Piknik prostor z ribnikom in gozdom v ozadju"
      class="bg"
      fetchpriority="high"
      height="1350"
      sizes="100vw"
      :src="heroImg"
      :srcset="`${heroImgSm} 900w, ${heroImg} 2400w, ${heroImgXl} 3600w`"
      width="2400"
    >

    <div class="wrap inner">
      <div class="glass">
        <p class="eyebrow enter" style="--d: 0">Piknik prostor Kolovec, Domžale</p>
        <h1 class="enter" style="--d: 1">Piknik v osrčju narave, ob ribniku.</h1>
        <p class="sub enter" style="--d: 2">
          Pokrit prostor za do 150 gostov, lastna kuhinja in izkušena ekipa. Le 20 minut iz Ljubljane.
        </p>
        <div class="ctas enter" style="--d: 3">
          <a class="btn btn-primary" :href="contact.phoneHref">
            <AppIcon :path="mdiPhone" />
            Pokličite Žigo
          </a>
          <a class="btn btn-ghost" href="#ponudba">Okvirna ponudba</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { mdiPhone } from '@mdi/js'
  import AppIcon from '@/components/AppIcon.vue'
  import { contact, photo } from '@/content'

  const heroImg = photo('7d5c14c06ac04f3d8986ba4298c75ea1', 2400, 1350, 85)
  const heroImgSm = photo('7d5c14c06ac04f3d8986ba4298c75ea1', 900, 1200, 80)
  const heroImgXl = photo('7d5c14c06ac04f3d8986ba4298c75ea1', 3600, 2025, 82)
</script>

<style scoped>
  .hero {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    /* Fills the screen below the nav at any size. svh = viewport with browser toolbars visible */
    min-height: calc(100vh - var(--nav-h));
    min-height: calc(100svh - var(--nav-h));
    overflow: hidden;
    background: var(--forest);
  }

  .bg {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 60% 50%;
  }

  /* Darkens the photo behind the card so text never sits on bright sky or grass */
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(90deg, rgb(12 26 18 / 0.55) 0%, rgb(12 26 18 / 0.25) 45%, transparent 75%);
  }

  .inner { padding-block: clamp(32px, 6vw, 72px); }

  /* Frosted glass, web approximation via backdrop-filter */
  .glass {
    max-width: 600px;
    padding: clamp(28px, 4vw, 52px);
    border-radius: 28px;
    color: var(--on-forest);
    background:
      linear-gradient(140deg, rgb(255 255 255 / 0.14), rgb(255 255 255 / 0.03) 60%),
      rgb(20 42 30 / 0.58);
    border: 1px solid rgb(255 255 255 / 0.22);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.28),
      0 30px 80px -30px rgb(8 20 13 / 0.7);
    backdrop-filter: blur(22px) saturate(150%);
    -webkit-backdrop-filter: blur(22px) saturate(150%);
  }

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .glass { background: rgb(20 42 30 / 0.9); }
  }
  @media (prefers-reduced-transparency: reduce) {
    .glass {
      background: var(--forest);
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }

  .eyebrow { color: var(--accent); }

  .glass h1 {
    margin-top: 18px;
    font-size: clamp(2.4rem, 5vw, 4.2rem);
    line-height: 1.02;
    color: #fff;
    text-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
  }

  .sub {
    margin-top: 20px;
    font-size: 1.18rem;
    line-height: 1.55;
    color: rgb(238 242 233 / 0.92);
    max-width: 30em;
  }

  .ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .enter {
      opacity: 0;
      transform: translateY(20px);
      animation: rise 1s var(--ease) forwards;
      animation-delay: calc(var(--d) * 110ms + 150ms);
    }
    .bg { animation: settle 1.8s var(--ease) both; }
  }

  @keyframes rise {
    to { opacity: 1; transform: none; }
  }
  @keyframes settle {
    from { transform: scale(1.08); }
    to { transform: scale(1); }
  }

  @media (max-width: 760px) {
    .hero::before {
      background: rgb(12 26 18 / 0.3);
    }
    .bg { object-position: 35% 50%; }
    .inner { padding-block: 24px; }
    .glass { border-radius: 22px; }
  }
</style>
