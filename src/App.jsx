import { ThemeProvider, useTheme } from './context/ThemeContext'
import MagneticCursor from './components/MagneticCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function AppInner() {
  const { isDark } = useTheme()

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.5s ease',
      }}
    >
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`ambient-blob-cyan absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-500 ${isDark ? 'bg-cyan-500/5' : 'bg-cyan-400/12'}`} />
        <div className={`ambient-blob-purple absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-500 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'}`} />
        <div className={`ambient-blob-cyan absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-500 ${isDark ? 'bg-cyan-500/4' : 'bg-sky-400/10'}`} />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 grid-bg" />

      <MagneticCursor />
      <Navbar />
      <ThemeToggle />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
