import { useEffect, useRef } from 'react'
import { runRandomCycle } from '@/lib/teachesMotions'

const LETTERS = ['t', 'e', 'a', 'c', 'h', 'e', 's'] as const

export function TeachesWord() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const controller = new AbortController()
    runRandomCycle(el, { delayMs: 450, signal: controller.signal }).catch((err) => {
      if (err?.name !== 'AbortError') throw err
    })
    return () => controller.abort()
  }, [])

  return (
    <span ref={ref} className="anim-word" data-word="teaches">
      {LETTERS.map((ch, i) => (
        <span key={`${ch}-${i}`} className="letter">
          {ch}
        </span>
      ))}
    </span>
  )
}
