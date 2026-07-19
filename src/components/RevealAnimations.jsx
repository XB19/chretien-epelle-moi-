import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Révélation au scroll de tout le site client.
// Aucun changement de design : on ajoute/retire seulement des classes
// d'animation (voir styles/animations.css), puis on nettoie une fois
// l'animation terminée pour ne pas gêner les effets de survol existants.

// Éléments qui glissent depuis un côté (texte <- gauche, image <- droite,
// détecté automatiquement selon leur position réelle dans la mise en page)
const SIDE_SELECTORS = [
  '.about-text', '.about-image',
  '.history-text', '.history-image',
  '.contact-info', '.contact-form',
  '.donation-info', '.donation-card',
  '.timeline-content',
]

// Éléments qui apparaissent en fondu montant
const UP_SELECTORS = [
  '.hero-content h1', '.hero-content .hero-subtitle', '.hero-content .hero-buttons',
  '.page-hero h1', '.page-hero p',
  '.donation-hero h1', '.donation-hero p',
  '.mission-header', '.mission-card',
  '.testimonial-intro', '.testimonial-header', '.testimonialSwiper',
  '.values h2', '.value-card',
  '.partner-intro h2', '.partner-intro p',
  '.benefit-card',
  '.partners h2', '.partners-slider',
  '.partner-form',
  '.team-intro h2', '.team-intro p', '.team-card',
  '.timeline h2',
  '.history-impact h2', '.history-impact > p', '.impact-card',
  '.gallery-intro h2', '.gallery-intro p', '.gallery-item',
  '.contact-map iframe',
  '.about-cta > *', '.history-cta > *', '.gallery-cta > *',
  '.testimonial-cta > *', '.team-cta > *',
  '.footer-col',
]

// Direction déduite de la position de l'élément par rapport à son parent
function directionFor(el) {
  const parent = el.parentElement
  if (!parent) return 'reveal-from-up'
  const p = parent.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const elCenter = r.left + r.width / 2
  const parentCenter = p.left + p.width / 2
  if (Math.abs(elCenter - parentCenter) < 24) return 'reveal-from-up' // empilé (mobile)
  return elCenter < parentCenter ? 'reveal-from-left' : 'reveal-from-right'
}

export default function RevealAnimations() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = []
    const seen = new Set()

    const collect = (selectors, variantOf) => {
      document.querySelectorAll(selectors.join(',')).forEach((el) => {
        if (seen.has(el) || el.dataset.revealDone) return
        seen.add(el)
        items.push({ el, variant: variantOf(el) })
      })
    }

    collect(SIDE_SELECTORS, directionFor)
    collect(UP_SELECTORS, () => 'reveal-from-up')

    // Décalage en cascade entre éléments d'un même bloc (cartes, grilles...)
    const perParent = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )

    items.forEach(({ el, variant }) => {
      const parent = el.parentElement
      const index = perParent.get(parent) ?? 0
      perParent.set(parent, index + 1)

      el.classList.add('reveal-hidden', variant)
      el.style.setProperty('--reveal-delay', `${Math.min(index * 0.09, 0.45)}s`)

      el.addEventListener(
        'animationend',
        (e) => {
          if (e.target !== el) return
          el.classList.remove('reveal-hidden', 'reveal-in', variant)
          el.style.removeProperty('--reveal-delay')
          el.dataset.revealDone = '1'
        },
        { once: true }
      )

      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      items.forEach(({ el, variant }) => {
        el.classList.remove('reveal-hidden', 'reveal-in', variant)
        el.style.removeProperty('--reveal-delay')
      })
    }
  }, [pathname])

  return null
}
