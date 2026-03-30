import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const trailConfig = { damping: 30, stiffness: 150, mass: 0.8 }

  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  const trailSpringX = useSpring(trailX, trailConfig)
  const trailSpringY = useSpring(trailY, trailConfig)

  const isHoveringRef = useRef(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice()) return

    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      dotRef.current?.classList.add('scale-[3]', 'opacity-40')
      ringRef.current?.classList.add('scale-150', 'border-purple-400/60')
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      dotRef.current?.classList.remove('scale-[3]', 'opacity-40')
      ringRef.current?.classList.remove('scale-150', 'border-purple-400/60')
    }

    window.addEventListener('mousemove', move)

    const interactables = document.querySelectorAll('a, button, [data-cursor="hover"]')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const observer = new MutationObserver(() => {
      const newInteractables = document.querySelectorAll('a, button, [data-cursor="hover"]')
      newInteractables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [cursorX, cursorY, trailX, trailY])

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[99999] transition-transform duration-150"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/40 pointer-events-none z-[99998] transition-all duration-200"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
