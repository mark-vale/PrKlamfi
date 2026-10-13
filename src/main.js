/**
 * main.js
 *
 * Loads fonts, icons and styles, then mounts the App
 */

// Composables
import { createApp } from 'vue'

// Directives
import reveal from '@/directives/reveal'

// Components
import App from './App.vue'

// Styles
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/figtree'
import '@/styles/site.css'

// Smooth scrolling (after styles, so it can read the nav height)
import '@/smooth-scroll'

createApp(App)
  .directive('reveal', reveal)
  .mount('#app')
