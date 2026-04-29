import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import MagneticCursor from './components/MagneticCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Button appears after scrolling 400px
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500 bg-slate-50">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="ambient-blob-cyan absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] bg-cyan-400/12 transition-all duration-500" />
        <div className="ambient-blob-purple absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] bg-purple-400/10 transition-all duration-500" />
        <div className="ambient-blob-cyan absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] bg-sky-400/10 transition-all duration-500" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none grid-bg" />

      <MagneticCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Centered Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            onClick={scrollToTop}
            // "left-1/2 -translate-x-1/2" handles the perfect centering
            className="fixed z-50 p-4 text-blue-600 transition-all duration-300 -translate-x-1/2 border rounded-full shadow-xl bottom-10 left-1/2 bg-white/80 backdrop-blur-md border-slate-200 hover:shadow-blue-500/20 hover:border-blue-400 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}