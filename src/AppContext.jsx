import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState('fr')

  const t = translations[lang]

  const toggleTheme = () => setIsDark(d => !d)
  const toggleLang = () => setLang(l => (l === 'fr' ? 'en' : 'fr'))

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
