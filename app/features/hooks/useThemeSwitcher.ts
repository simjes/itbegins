import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

// TODO: få på linting for hooks
export const useThemeSwitcher = () => {
  const { state: currentTheme, setWithLocalStorage: setCurrentTheme } =
    useLocalStorage('theme')

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
    } else {
      setCurrentTheme('dark')
    }
  }

  // TODO: bug - overwrites localstorage
  // useEffect(() => {
  //   if (currentTheme) return
  //   const preferesDarkTheme = window.matchMedia(
  //     '(prefers-color-scheme: dark)',
  //   ).matches
  //   setCurrentTheme(preferesDarkTheme ? 'dark' : 'light')
  // }, [currentTheme, setCurrentTheme])

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [currentTheme])

  return {
    currentTheme,
    toggleTheme,
  }
}
