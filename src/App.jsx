import { useState } from 'react'
import { AppProvider, useApp } from './AppContext.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'

function AppContent() {
  const { isDark, toggleTheme, lang, toggleLang, t } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { id: 'about', title: t.nav.about },
    { id: 'experience', title: t.nav.experience },
    { id: 'projects', title: t.nav.projects },
    { id: 'contact', title: t.nav.contact },
  ]

  return (
    <div className={`relative z-0 font-poppins transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-[#f0f4ff]'}`}>

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 z-20 w-full flex items-center py-4 px-6 sm:px-16 border-b transition-colors duration-300 ${
        isDark
          ? 'bg-primary/90 border-white/5 backdrop-blur'
          : 'bg-white/90 border-gray-200 backdrop-blur'
      }`}>
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" className="text-[18px] font-black tracking-tight" onClick={() => window.scrollTo(0, 0)}>
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Nat&apos;si </span>
            <span className="text-yellow">POATHY</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden sm:flex items-center gap-6">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-[14px] font-medium transition-colors duration-200 ${
                    isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv-patrick.pdf"
                className="text-[13px] font-semibold text-primary bg-yellow px-4 py-1.5 rounded-full hover:brightness-110 transition-all"
              >
                {t.nav.cv}
              </a>
            </li>

            {/* ── Theme toggle ── */}
            <li>
              <button
                onClick={toggleTheme}
                title={isDark ? 'Mode clair' : 'Mode sombre'}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isDark
                    ? 'border-white/10 bg-black-100 hover:border-yellow/40'
                    : 'border-gray-200 bg-gray-100 hover:border-gray-300'
                }`}
              >
                {isDark ? (
                  <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zm-1.78 5.78a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 011.42-1.42l.7.7zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-1.05a1 1 0 010 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7a1 1 0 011.42 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zm.27-7.27a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM10 6a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                )}
              </button>
            </li>

            {/* ── Lang toggle ── */}
            <li>
              <button
                onClick={toggleLang}
                className={`text-[12px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 text-secondary hover:text-white hover:border-yellow/40'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>

          {/* Mobile right side */}
          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                isDark ? 'border-white/10 bg-black-100' : 'border-gray-200 bg-gray-100'
              }`}
            >
              {isDark ? (
                <svg className="w-3.5 h-3.5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zm-1.78 5.78a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 011.42-1.42l.7.7zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-1.05a1 1 0 010 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7a1 1 0 011.42 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zm.27-7.27a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM10 6a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>
            <button
              onClick={toggleLang}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                isDark ? 'border-white/10 text-secondary' : 'border-gray-200 text-gray-600'
              }`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block h-0.5 w-6 transition-all ${isDark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all ${isDark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all ${isDark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`absolute top-full left-0 w-full border-t flex flex-col px-6 py-4 gap-4 ${
            isDark ? 'bg-black-100 border-white/5' : 'bg-white border-gray-200'
          }`}>
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-secondary hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Main ── */}
      <Hero />
      <div className={`relative z-0 transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-[#f0f4ff]'}`}>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className={`text-center text-sm py-8 border-t transition-colors duration-300 ${
          isDark ? 'text-secondary border-white/5' : 'text-gray-500 border-gray-200'
        }`}>
          {t.footer}
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
