<template>
  <footer id="kontakt" class="footer">
    <div class="wrap">
      <div class="cta">
        <h2 v-reveal>Pridite na ogled in se prepričajte sami.</h2>
        <div v-reveal="1" class="reach">
          <p class="label">Pokličite Žigo in se dogovorite za sestanek</p>
          <a class="phone" :href="contact.phoneHref">{{ contact.phone }}</a>
          <a class="mail" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
      </div>

      <div class="meta">
        <div>
          <p class="strong">Naslov</p>
          <a :href="contact.mapHref" rel="noopener" target="_blank">
            {{ contact.street }}<br>{{ contact.city }}
          </a>
        </div>
        <div>
          <p class="strong">Podjetje</p>
          <p>{{ contact.company }}</p>
          <a :href="`mailto:${contact.businessEmail}`">{{ contact.businessEmail }}</a>
        </div>
        <div>
          <p class="strong">Sledite nam</p>
          <div class="social">
            <a aria-label="Facebook" :href="contact.facebook" rel="noopener" target="_blank">
              <AppIcon :path="mdiFacebook" />
            </a>
            <a aria-label="Instagram" :href="contact.instagram" rel="noopener" target="_blank">
              <AppIcon :path="mdiInstagram" />
            </a>
          </div>
        </div>
        <div>
          <p class="strong">Priznanje</p>
          <a :href="contact.award" rel="noopener" target="_blank">Ponudnik leta na omisli.si</a>
        </div>
      </div>

      <p class="legal">&copy; {{ year }} {{ contact.company }}</p>
    </div>
  </footer>
</template>

<script setup>
  import { mdiFacebook, mdiInstagram } from '@mdi/js'
  import AppIcon from '@/components/AppIcon.vue'
  import { contact } from '@/content'

  const year = new Date().getFullYear()
</script>

<style scoped>
  .footer {
    background: var(--forest);
    color: var(--on-forest);
    padding-top: clamp(72px, 10vw, 128px);
  }

  .cta {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 48px;
    align-items: end;
  }
  .cta h2 { max-width: 15ch; color: var(--on-forest); }

  .reach { display: flex; flex-direction: column; gap: 8px; }
  .label { color: var(--on-forest-muted); }
  .phone {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 650;
    letter-spacing: -0.035em;
    line-height: 1.05;
    text-decoration: none;
    color: var(--accent);
    width: fit-content;
    background: linear-gradient(var(--accent), var(--accent)) no-repeat left bottom / 0 3px;
    transition: background-size 0.4s var(--ease);
  }
  .phone:hover { background-size: 100% 3px; }
  .mail { font-size: 1.15rem; text-underline-offset: 4px; width: fit-content; }

  .meta {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
    margin-top: clamp(56px, 8vw, 96px);
    padding-top: 32px;
    border-top: 1px solid rgb(238 242 233 / 0.16);
    color: var(--on-forest-muted);
    font-size: 0.98rem;
  }
  .meta a { text-underline-offset: 3px; }
  .meta a:hover { color: var(--on-forest); }
  .strong { color: var(--on-forest); font-weight: 600; margin-bottom: 6px !important; }

  .social { display: flex; gap: 10px; }
  .social a {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid rgb(238 242 233 / 0.25);
    font-size: 22px;
    text-decoration: none;
    transition: background-color 0.25s var(--ease);
  }
  .social a:hover { background: rgb(238 242 233 / 0.1); }

  .legal {
    padding-block: 28px 32px;
    margin-top: 48px !important;
    border-top: 1px solid rgb(238 242 233 / 0.16);
    color: var(--on-forest-muted);
    font-size: 0.88rem;
  }

  @media (max-width: 860px) {
    .cta { grid-template-columns: 1fr; }
    .meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 480px) {
    .meta { grid-template-columns: 1fr; }
  }
</style>
