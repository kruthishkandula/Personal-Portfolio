import { EffectCallback, useEffect } from 'react'

export function useEffectOnce (effect) {
  useEffect(effect, [])
}
