<template>
  <div class="site">
    <SiteNav />
    <main>
      <HeroSection />
      <IntroSection />
      <EventsSection />
      <VenueSection />
      <MenuSection />
      <GallerySection />
      <AboutSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
  import AboutSection from '@/components/AboutSection.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import EventsSection from '@/components/EventsSection.vue'
  import GallerySection from '@/components/GallerySection.vue'
  import HeroSection from '@/components/HeroSection.vue'
  import IntroSection from '@/components/IntroSection.vue'
  import MenuSection from '@/components/MenuSection.vue'
  import SiteNav from '@/components/SiteNav.vue'
  import VenueSection from '@/components/VenueSection.vue'
</script>
