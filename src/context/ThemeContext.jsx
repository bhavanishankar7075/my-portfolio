import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    // Toggle both data-theme attribute and .dark class for full compatibility
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')

    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Set initial state synchronously on mount to avoid FOUC
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    const initial = saved === 'light' ? false : true
    document.documentElement.setAttribute('data-theme', initial ? 'dark' : 'light')

    if (initial) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark((v) => !v) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
