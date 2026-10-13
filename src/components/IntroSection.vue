<template>
  <section class="section intro">
    <div class="wrap">
      <div class="questions">
        <p v-reveal="0">Želite prirediti piknik v naravi?</p>
        <p v-reveal="1">Vam je zabava za okroglo obletnico prevelik zalogaj?</p>
        <p v-reveal="2">Bi radi imeli unikatno poroko?</p>
        <p v-reveal="3" class="answer">Tu smo mi za vas.</p>
      </div>

      <div class="body">
        <p v-reveal class="lead">
          Za organizacijo poskrbimo mi: sveže jedi iz naše kuhinje, točilni pult z vedno hladno pijačo in osebje
          z dolgoletnimi izkušnjami. Vaša naloga je le vabilo gostom in dobra volja.
        </p>

        <dl class="stats">
          <div v-for="(s, i) in stats" :key="s.label" v-reveal="i">
            <dt>{{ s.label }}</dt>
            <dd>{{ s.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { stats } from '@/content'
</script>

<style scoped>
  .questions p {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.7rem, 3.6vw, 3rem);
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: var(--muted);
    max-width: 24ch;
  }
  .questions p + p { margin-top: 10px; }
  .questions .answer {
    color: var(--text);
    margin-top: 22px;
  }
  .answer::after {
    content: '';
    display: block;
    width: 72px;
    height: 5px;
    margin-top: 18px;
    border-radius: 999px;
    background: var(--accent);
  }

  .body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: clamp(32px, 6vw, 96px);
    align-items: start;
    margin-top: clamp(48px, 7vw, 88px);
  }
  .body .lead { padding-top: 14px; }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 32px;
    margin: 0;
  }
  .stats div {
    display: flex;
    flex-direction: column-reverse;
    border-top: 1px solid var(--line);
    padding-top: 14px;
  }
  .stats dd {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 650;
    letter-spacing: -0.04em;
    line-height: 1;
  }
  .stats dt {
    margin-top: 6px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  @media (max-width: 860px) {
    .body { grid-template-columns: 1fr; }
    .body .lead { padding-top: 0; }
  }
</style>
