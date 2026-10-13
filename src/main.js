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

createApp(App)
  .directive('reveal', reveal)
  .mount('#app')
