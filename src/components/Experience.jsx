import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const EXPERIENCES = [
  {
    id: 'roadvision',
    role: 'SDE Intern',
    company: 'Roadvision AI',
    location: 'On-site · Vijayawada, India',
    period: 'Current',
    type: 'Current · SDE Intern',
    color: 'cyan',
    highlights: [
      'Building scalable backend services with FastAPI and PostgreSQL — designing RESTful endpoints, async query optimization, and data models for AI-driven road analytics.',
      'Developing type-safe frontend components in React + TypeScript with TailwindCSS, ensuring strict prop contracts and a consistent design system across the dashboard.',
      'Bridging Python backend and React frontend in a full-stack Python ecosystem, enabling seamless data pipelines from model inference to UI visualization.',
    ],
    skills: ['FastAPI', 'PostgreSQL', 'Python', 'React', 'TypeScript', 'TailwindCSS', 'REST APIs'],
  },
  {
    id: 'labmentix',
    role: 'Full Stack Developer Intern',
    company: 'Labmentix',
    location: 'Remote',
    period: 'Apr 2025 – Jun 2025',
    type: 'Internship',
    color: 'purple',
    highlights: [
      'Owned development of MERN modules, building modular React UI components and designing efficient backend API flows.',
      'Engineered REST APIs using Node.js and Express, optimizing database queries and reducing average response latency by 30%.',
      'Built Redux-powered admin dashboards with accessibility-first responsive design to improve operational visibility and productivity.',
    ],
    skills: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const colorMap = {
    cyan: {
      dot: 'bg-cyan-400',
      ring: 'ring-cyan-400/30',
      border: 'border-cyan-400/20',
      glow: 'from-cyan-400/10',
      tag: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      icon: 'text-cyan-400',
      bullet: 'bg-cyan-400',
    },
    purple: {
      dot: 'bg-purple-400',
      ring: 'ring-purple-400/30',
      border: 'border-purple-400/20',
      glow: 'from-purple-400/10',
      tag: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      icon: 'text-purple-400',
      bullet: 'bg-purple-400',
    },
  }
  const c = colorMap[exp.color] || colorMap.cyan

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-7 w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring} shadow-glow-sm-cyan z-10`} />

      {/* Card */}
      <div className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-white/6 ${c.border.replace('border-', 'hover:border-')} p-7 transition-all duration-300 hover:-translate-y-0.5 group overflow-hidden relative`}>
        {/* Ambient */}
        <div className={`absolute top-0 left-0 w-48 h-48 rounded-full bg-gradient-to-br ${c.glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.glow} to-transparent border ${c.border} flex items-center justify-center shrink-0`}>
                <Briefcase size={18} className={c.icon} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{exp.role}</h3>
                <p className="text-base font-semibold gradient-text-cyan">{exp.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:text-right">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${c.tag}`}>
                {exp.type}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={12} className={c.icon} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin size={12} className={c.icon} />
              {exp.location}
            </span>
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-5">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                <ChevronRight size={14} className={`${c.icon} mt-0.5 shrink-0`} />
                {h}
              </li>
            ))}
          </ul>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-600 bg-white/4 border border-white/6">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" ref={ref} className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-purple-400/50" />
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="section-title text-slate-900">
            My career
            <br />
            <span className="gradient-text-purple">journey.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full">
            <motion.div
              className="w-full rounded-full timeline-line origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>

          {/* "Currently studying" node */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative pl-12 md:pl-16 mt-8"
          >
            <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-700/40 border-2 border-dashed border-slate-600 z-10" />
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/5 p-5">
              <p className="text-sm text-slate-500 font-mono">
                <span className="text-cyan-400/70">// </span>B.Tech CSE (2022–2026) · Currently SDE Intern @ Roadvision AI ·
                Open to full-time opportunities from 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
