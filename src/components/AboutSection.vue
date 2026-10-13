<template>
  <section id="o-nas" class="section about">
    <div class="wrap">
      <div class="story">
        <h2 v-reveal>Družinsko podjetje od leta 1994</h2>
        <div class="paras">
          <p v-for="(p, i) in about.paragraphs" :key="i" v-reveal="i + 1">{{ p }}</p>
        </div>
      </div>

      <div class="photos">
        <figure v-reveal class="team">
          <img alt="Ekipa Pr' Klamfi ob ribniku" loading="lazy" :src="about.team">
        </figure>
        <figure v-reveal="1" class="sign">
          <img alt="Lesen napis Pr' Klamfi ob vhodu" loading="lazy" :src="about.sign">
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { about } from '@/content'
</script>

<style scoped>
  .story h2 { max-width: 14ch; }

  .paras {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
    max-width: 920px;
    margin-top: 32px;
    color: var(--muted);
    font-size: 1.08rem;
  }

  .photos {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-top: clamp(40px, 6vw, 72px);
  }
  .photos figure {
    margin: 0;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  .team { aspect-ratio: 14 / 9; }
  /* Stretches to the team photo's height, so tops and bottoms line up */
  .sign { aspect-ratio: auto; }
  .photos img { width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 760px) {
    .paras { grid-template-columns: 1fr; gap: 18px; }
    .photos { grid-template-columns: 1fr; }
    .sign { aspect-ratio: 16 / 10; }
  }
</style>
