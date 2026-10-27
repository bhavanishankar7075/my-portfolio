import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'


const EXPERIENCES = [
  {
    id: 'roadvision-fulltime',
    role: 'Forward Deployment Engineer',
    company: 'RoadVision AI',
    location: 'On-site · Vijayawada, India',
    period: 'Oct 2026 – Present',
    type: 'Full-time',
    color: 'cyan',
    highlights: [
      'Supporting deployment and implementation of AI-based monitoring solutions for government projects, including warehouse monitoring systems.',
      'Coordinating with government clients, on-site stakeholders, and internal engineering teams to manage requirements, resolve issues, and support project execution.',
      'Working across camera integration, backend APIs, databases, and AI-powered application features to support system functionality and reliability.',
      'Performing feature testing, troubleshooting, and system validation while coordinating technical changes and client feedback.',
      'Taking greater ownership of project delivery, deployment activities, and cross-functional coordination in the Forward Deployment Engineer role.',
    ],
    skills: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'REST APIs',
      'AI Deployment',
      'Troubleshooting',
      'Project Coordination',
    ],
  },
  {
    id: 'roadvision-intern',
    role: 'Software Developer Engineer Intern',
    company: 'RoadVision AI',
    location: 'On-site · Vijayawada, India',
    period: 'Mar 2026 – Sep 2026',
    type: 'Internship',
    color: 'cyan',
    highlights: [
      'Contributed to the development and testing of AI-based monitoring applications using Python, FastAPI, React, and PostgreSQL.',
      'Supported backend API integration, database connectivity, and frontend development for monitoring dashboards.',
      'Worked on camera stream integration, deployment troubleshooting, and system validation for client-side projects.',
      'Collaborated with engineering and project teams to investigate issues and support implementation requirements.',
    ],
    skills: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
    ],
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
      'Developed modular React UI components and full-stack application features using the MERN stack.',
      'Built REST APIs using Node.js and Express and integrated backend services with MongoDB.',
      'Implemented Redux-powered dashboards and responsive user interfaces for improved usability.',
    ],
    skills: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
    ],
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
          <div className="flex flex-col justify-between gap-3 mb-5 sm:flex-row sm:items-start">
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.glow} to-transparent border ${c.border} flex items-center justify-center shrink-0`}>
                <Briefcase size={18} className={c.icon} />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight text-slate-900">{exp.role}</h3>
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
          <ul className="mb-5 space-y-3">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
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
    <section id="experience" ref={ref} className="px-6 py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-purple-400/50" />
            <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">Experience</span>
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
              className="w-full origin-top rounded-full timeline-line"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>


{/* Career status node */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="relative pl-12 mt-8 md:pl-16"
>
  <div className="absolute left-0 z-10 w-4 h-4 border-2 border-dashed rounded-full top-5 bg-slate-700 ring-4 ring-slate-700/40 border-slate-600" />
  <div className="p-5 border bg-white/60 backdrop-blur-sm rounded-2xl border-white/5">
    <p className="font-mono text-sm text-slate-500">
      <span className="text-cyan-400/70">// </span>
      B.Tech CSE graduate · Forward Deployment Engineer @ RoadVision AI ·
      Building AI-powered solutions and growing across software engineering
      and project delivery.
    </p>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}
