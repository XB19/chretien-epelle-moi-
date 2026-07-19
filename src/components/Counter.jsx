import { useEffect, useRef } from 'react'

// Reprend l'animation des compteurs des pages Django (script "counter")
export default function Counter({ target }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cancelled = false
    el.innerText = '0'

    const updateCounter = () => {
      if (cancelled) return

      const c = +el.innerText
      const increment = target / 100

      if (c < target) {
        el.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 30)
      } else {
        el.innerText = target
      }
    }

    updateCounter()

    return () => { cancelled = true }
  }, [target])

  return <h3 className="counter" ref={ref}>+0</h3>
}
