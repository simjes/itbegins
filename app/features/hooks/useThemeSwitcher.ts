import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage('theme')

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
    } else {
      setCurrentTheme('dark')
    }
  }

  useEffect(() => {
    // Read directly from localstorage as currentTheme has not been set yet
    const theme = localStorage.getItem('theme')
    if (theme === null) {
      const preferesDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setCurrentTheme(preferesDarkTheme ? 'dark' : 'light')
    }
  }, [setCurrentTheme])

  useEffect(() => {
    if (!currentTheme) return
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
