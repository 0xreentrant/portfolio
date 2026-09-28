export type MotionMode = {
  id: string
  label: string
  durationMs: number
}

export const MODES: MotionMode[] = [
  { id: 'tracking', label: 'Tracking pulse', durationMs: 1800 },
  { id: 'flip', label: 'Flip reveal', durationMs: 1400 },
  { id: 'wave', label: 'Wave offset', durationMs: 4400 },
  { id: 'clip', label: 'Clip reveal', durationMs: 1400 },
  { id: 'blur-in', label: 'Blur-in', durationMs: 1500 },
  { id: 'fade-up', label: 'Stagger fade-up', durationMs: 1400 },
]

const EASE_PAD_MS = 80

export function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function indexLetters(word: HTMLElement) {
  const letters = [...word.querySelectorAll<HTMLElement>('.letter')]
  letters.forEach((el, i) => {
    el.style.setProperty('--i', String(i))
  })
  return letters
}

function wait(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'))
      return
    }
    const id = setTimeout(() => resolve(), ms)
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(id)
        reject(new DOMException('Aborted', 'AbortError'))
      },
      { once: true },
    )
  })
}

export function clearMode(word: HTMLElement) {
  word.removeAttribute('data-mode')
  word.style.removeProperty('letter-spacing')
  word.style.removeProperty('transform')
  word.style.removeProperty('color')
  for (const el of word.querySelectorAll<HTMLElement>('.letter')) {
    el.style.removeProperty('animation')
    el.style.removeProperty('opacity')
    el.style.removeProperty('filter')
    el.style.removeProperty('clip-path')
    el.style.removeProperty('transform')
  }
  void word.offsetWidth
}

export async function playMode(
  word: HTMLElement,
  modeId: string,
  signal?: AbortSignal,
) {
  const mode = MODES.find((m) => m.id === modeId)
  if (!mode) throw new Error(`Unknown mode: ${modeId}`)
  if (prefersReducedMotion()) {
    clearMode(word)
    return mode
  }

  clearMode(word)
  word.dataset.mode = mode.id
  await wait(mode.durationMs + EASE_PAD_MS, signal)
  clearMode(word)
  return mode
}

export function pickRandomMode(excludeId: string | null) {
  const pool = excludeId
    ? MODES.filter((m) => m.id !== excludeId)
    : MODES.slice()
  return pool[Math.floor(Math.random() * pool.length)]
}

export async function runRandomCycle(
  word: HTMLElement,
  opts: { delayMs?: number; signal?: AbortSignal } = {},
) {
  const delayMs = opts.delayMs ?? 450
  const signal = opts.signal
  indexLetters(word)

  if (prefersReducedMotion()) {
    clearMode(word)
    return
  }

  let lastId: string | null = null
  while (!signal?.aborted) {
    const next = pickRandomMode(lastId)
    lastId = next.id
    await playMode(word, next.id, signal)
    await wait(delayMs, signal)
  }
}
