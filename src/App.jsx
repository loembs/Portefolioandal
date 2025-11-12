import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='text-gray-900 bg-gradient-to-b from-gray-50 to-white min-h-screen'>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className='text-center text-sm text-gray-500 py-6'>
        © {new Date().getFullYear()} Nat'si POATHY — React · Python · Java · Symfony
      </footer>
    </div>
  )
}
