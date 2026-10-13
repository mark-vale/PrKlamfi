/**
 * directives/reveal.js
 *
 * v-reveal: fades an element in once it enters the viewport.
 * Pass a number to stagger siblings, e.g. v-reveal="2".
 */

let observer

function getObserver () {
  observer ??= new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
  return observer
}

export default {
  mounted (el, binding) {
    el.dataset.reveal = ''
    if (binding.value != null) {
      el.style.setProperty('--i', binding.value)
    }
    getObserver().observe(el)
  },
  unmounted (el) {
    observer?.unobserve(el)
  },
}
