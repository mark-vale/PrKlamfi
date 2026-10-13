/**
 * smooth-scroll.js
 *
 * Smooth wheel and trackpad scrolling with Lenis. Touch scrolling stays native.
 * Skipped entirely when the visitor prefers reduced motion.
 */

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Anchor links land just below the sticky nav
const navHeight = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68

export const lenis = reduceMotion
  ? null
  : new Lenis({
    autoRaf: true,
    lerp: 0.1,
    anchors: { offset: -(navHeight + 12) },
    allowNestedScroll: true,
  })

/** Freezes page scrolling, e.g. while the gallery lightbox is open */
export function lockScroll (locked) {
  document.documentElement.classList.toggle('scroll-locked', locked)
  if (locked) {
    lenis?.stop()
  } else {
    lenis?.start()
  }
}
