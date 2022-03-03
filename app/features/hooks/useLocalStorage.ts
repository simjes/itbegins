import { useEffect, useState } from 'react'

export const useLocalStorage = (
  key: string,
): [string | null, (nextState: string) => void] => {
  const [state, setState] = useState<string | null>(null)

  useEffect(() => {
    setState(localStorage.getItem(key))
  }, [key])

  const setWithLocalStorage = (nextState: string) => {
    setState(nextState)
    localStorage.setItem(key, nextState)
  }

  return [state, setWithLocalStorage]
}
