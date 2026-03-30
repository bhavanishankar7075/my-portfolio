import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Phone, Mail, Code2, Zap, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const STATS = [
  { value: '2+', label: 'Projects Shipped', icon: Code2 },
  { value: '30%', label: 'Latency Reduced', icon: Zap },
  { value: '33+', label: 'GitHub Repos', icon: Globe },
]

const EDU = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Baba Institute of Technology & Science',
    location: 'Visakhapatnam',
    period: '2022 – 2026',
    grade: 'CGPA: 7.76',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-cyan-400/50" />
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">About Me</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="section-title text-white mb-16"
        >
          Crafting digital
          <br />
          <span className="gradient-text-cyan">experiences</span> that scale.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">MERN Full-Stack Developer</span> with
              hands-on experience building responsive, user-centric applications using React,
              Redux Toolkit, Node.js, Express, and MongoDB.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              From architecting scalable e-commerce platforms to building real-time booking
              systems with WebSocket live tracking, I focus on shipping production-grade
              systems with clean, maintainable code.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              Currently completing my B.Tech in Computer Science at BITS Visakhapatnam, I
              actively maintain GitHub repositories showcasing full-stack MERN projects with
              live demos for real-world evaluation.
            </motion.p>

            {/* Contact chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Mail, label: 'bhavanishankarmandala@gmail.com' },
                { icon: Phone, label: '+91 70756 08435' },
                { icon: MapPin, label: 'Visakhapatnam, India' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/6 text-xs text-slate-400"
                >
                  <Icon size={12} className="text-cyan-400" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats + edu */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-5"
          >
            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-4 border border-white/5 text-center group hover:border-cyan-400/20 transition-colors duration-300"
                >
                  <Icon size={18} className="mx-auto mb-2 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-2xl font-black text-white mb-1">{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Education card */}
            {EDU.map((e) => (
              <motion.div
                key={e.degree}
                variants={fadeUp}
                className="glass-card rounded-2xl p-5 border border-white/5 hover:border-purple-500/20 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <GraduationCap size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{e.degree}</div>
                    <div className="text-slate-400 text-xs mb-1">{e.school}, {e.location}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-cyan-400">{e.grade}</span>
                      <span className="text-slate-600 text-xs">{e.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certificates */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-5 border border-white/5">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Certifications</div>
              <div className="space-y-2">
                {[
                  'Full Stack Development — Internshala',
                  'Web Development — Labmentix',
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
