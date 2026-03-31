import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── Skill data ────────────────────────────────────────────── */
const BENTO = [
  {
    id: 'js',
    label: 'JavaScript',
    emoji: '⚡',
    desc: 'Primary language',
    accent: 'from-yellow-400/15 to-yellow-500/5',
    border: 'border-yellow-400/15',
    tag: 'col-span-1',
    size: 'large',
  },
  {
    id: 'react',
    label: 'React.js',
    emoji: '⚛️',
    desc: 'UI & component architecture',
    accent: 'from-cyan-400/15 to-cyan-500/5',
    border: 'border-cyan-400/15',
    tag: 'col-span-1',
    size: 'large',
  },
  {
    id: 'node',
    label: 'Node.js',
    emoji: '🟢',
    desc: 'REST APIs & server logic',
    accent: 'from-green-400/15 to-green-500/5',
    border: 'border-green-400/15',
    tag: 'col-span-1',
    size: 'large',
  },
  {
    id: 'mongo',
    label: 'MongoDB',
    emoji: '🍃',
    desc: 'NoSQL & data modeling',
    accent: 'from-emerald-400/15 to-emerald-500/5',
    border: 'border-emerald-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'redux',
    label: 'Redux Toolkit',
    emoji: '🔄',
    desc: 'State management',
    accent: 'from-purple-400/15 to-purple-500/5',
    border: 'border-purple-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'express',
    label: 'Express.js',
    emoji: '🚂',
    desc: 'Backend framework',
    accent: 'from-slate-400/15 to-slate-500/5',
    border: 'border-slate-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    emoji: '🎨',
    desc: 'Utility-first CSS',
    accent: 'from-sky-400/15 to-sky-500/5',
    border: 'border-sky-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'python',
    label: 'Python',
    emoji: '🐍',
    desc: 'Scripting & automation',
    accent: 'from-blue-400/15 to-blue-500/5',
    border: 'border-blue-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'socketio',
    label: 'Socket.IO',
    emoji: '🔌',
    desc: 'Real-time bidirectional events',
    accent: 'from-pink-400/15 to-pink-500/5',
    border: 'border-pink-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'jwt',
    label: 'JWT / Auth',
    emoji: '🔐',
    desc: 'Secure API authentication',
    accent: 'from-orange-400/15 to-orange-500/5',
    border: 'border-orange-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    emoji: '🐙',
    desc: 'Version control',
    accent: 'from-rose-400/15 to-rose-500/5',
    border: 'border-rose-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
  {
    id: 'stripe',
    label: 'Stripe / Razorpay',
    emoji: '💳',
    desc: 'Payment integrations',
    accent: 'from-violet-400/15 to-violet-500/5',
    border: 'border-violet-400/15',
    tag: 'col-span-1',
    size: 'medium',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const cell = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <span className="text-xs font-mono bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent tracking-widest uppercase font-semibold">Technical Skills</span>
          </div>
          <h2 className="section-title text-slate-900">
            Tools I build
            <br />
            <span className="gradient-text-purple">things with.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* Hero cell — spans 2 cols */}
          <motion.div
            variants={cell}
            className="col-span-2 row-span-1 bg-white/60 backdrop-blur-sm rounded-3xl p-7 border border-white/6 bg-gradient-to-br from-cyan-400/8 to-purple-500/5 hover:border-cyan-400/20 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition-colors" />
            <div className="relative">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Full-Stack MERN</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                End-to-end development — from React UI components to Node.js APIs and MongoDB schemas.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {['React', 'Node', 'Express', 'MongoDB'].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Individual skill cells */}
          {BENTO.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cell}
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-5 border ${skill.border} bg-gradient-to-br ${skill.accent} hover:scale-[1.03] transition-all duration-300 group cursor-default relative overflow-hidden`}
            >
              <div className="text-2xl mb-3">{skill.emoji}</div>
              <div className="text-sm font-semibold text-slate-900 skill-label mb-1">{skill.label}</div>
              <div className="text-xs text-slate-600 skill-desc group-hover:text-slate-600 transition-colors">{skill.desc}</div>
            </motion.div>
          ))}

          {/* HTML/CSS cell */}
          <motion.div
            variants={cell}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-orange-400/15 bg-gradient-to-br from-orange-400/10 to-red-500/5 hover:scale-[1.03] transition-all duration-300 group cursor-default"
          >
            <div className="text-2xl mb-3">🌐</div>
            <div className="text-sm font-semibold text-slate-900 skill-label mb-1">HTML5 / CSS3</div>
            <div className="text-xs text-slate-600 skill-desc group-hover:text-slate-600 transition-colors">Semantic markup & modern CSS</div>
          </motion.div>

          {/* REST APIs cell */}
          <motion.div
            variants={cell}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-teal-400/15 bg-gradient-to-br from-teal-400/10 to-cyan-500/5 hover:scale-[1.03] transition-all duration-300 group cursor-default"
          >
            <div className="text-2xl mb-3">📡</div>
            <div className="text-sm font-semibold text-slate-900 skill-label mb-1">REST APIs</div>
            <div className="text-xs text-slate-600 skill-desc group-hover:text-slate-600 transition-colors">API design & integration</div>
          </motion.div>

          {/* ── Backend & Database hero cell ── */}
          <motion.div
            variants={cell}
            className="col-span-2 bg-white/60 backdrop-blur-sm rounded-3xl p-7 border border-white/6 bg-gradient-to-br from-green-500/10 to-blue-600/8 hover:border-green-400/25 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-green-400/8 blur-2xl group-hover:bg-green-400/15 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent tracking-widest uppercase font-semibold">Backend & Database</span>
              </div>
              <div className="text-lg font-bold text-slate-900 mb-2">High-Performance Python Stack</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Building async FastAPI services with auto-generated OpenAPI docs and managing relational data at scale with PostgreSQL — powering the backend at Roadvision AI.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* FastAPI */}
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-200">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#009688"/>
                      <path d="M12.5 4L7 13h5.5l-1 7 6-9h-5l1-7z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 skill-label">FastAPI</div>
                    <div className="text-xs text-slate-600 skill-desc">Async Python APIs</div>
                  </div>
                </div>
                {/* PostgreSQL */}
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-200">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                      <ellipse cx="12" cy="5.5" rx="8" ry="3.5" fill="#336791"/>
                      <path d="M4 5.5v6c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-6" stroke="#336791" strokeWidth="0"/>
                      <path d="M20 5.5v6c0 1.93-3.58 3.5-8 3.5S4 13.43 4 11.5v-6" fill="#4a86b8" opacity="0.7"/>
                      <ellipse cx="12" cy="5.5" rx="8" ry="3.5" fill="#336791"/>
                      <ellipse cx="12" cy="5.5" rx="6" ry="2.2" fill="#4a86b8"/>
                      <path d="M20 11.5v5c0 1.93-3.58 3.5-8 3.5S4 18.43 4 16.5v-5" fill="#336791" opacity="0.85"/>
                      <path d="M17.5 8c.5 1.5.5 4-.5 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 skill-label">PostgreSQL</div>
                    <div className="text-xs text-slate-600 skill-desc">Relational data mgmt</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
