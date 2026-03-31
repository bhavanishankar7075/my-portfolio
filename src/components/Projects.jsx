import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const PROJECTS = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'MERN · Full-Stack',
    period: 'Dec 2024 – Mar 2025',
    description:
      'Scalable MERN e-commerce platform with React/Redux frontend, JWT-protected REST APIs, server-side caching (40% faster response), and a production-grade admin panel with analytics, coupon management, and real-time order tracking.',
    highlights: [
      'Redux-centralized state for smooth catalog & checkout',
      'JWT auth + pagination + server-side caching → 40% faster',
      'Admin panel: analytics, product CRUD, coupon engine',
      'Real-time order tracking via Socket.IO',
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Socket.IO'],
    github: 'https://github.com/bhavanishankar7075/Ecommerce-Platform',
    demo: 'https://frontend-8uy4.onrender.com',
    accentFrom: 'from-cyan-500/20',
    accentTo: 'to-blue-600/10',
    borderHover: 'hover:border-cyan-400/30',
    tag: 'Featured',
    tagColor: 'text-cyan-700 bg-cyan-100 border-cyan-200',
  },
  {
    id: 'homeservice',
    title: 'Home Service Provider',
    subtitle: 'MERN · Capstone',
    period: 'Capstone Project',
    description:
      'Real-time home-services booking platform with WebSocket live tracking, role-based dashboards for Customers, Providers & Admins, and multi-mode payments — reducing confirmation time by 35% and cancellations by 20%.',
    highlights: [
      'Role-based dashboards: Customer, Provider, Admin',
      'WebSocket live location & job tracking',
      'Multi-mode payments: UPI, Cards, Wallets',
      'Automated invoicing, ratings → +15% retention',
    ],
    stack: ['React', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Stripe', 'Razorpay'],
    github: 'https://github.com/bhavanishankar7075/HOME-SERVICE-PROVIDER',
    demo: 'https://home-service-provider-frontend.onrender.com',
    accentFrom: 'from-purple-500/20',
    accentTo: 'to-pink-600/10',
    borderHover: 'hover:border-purple-400/30',
    tag: 'Capstone',
    tagColor: 'text-purple-700 bg-purple-100 border-purple-200',
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
    subtitle: 'React · OpenWeather API',
    period: '2025',
    description:
      'Dynamic weather dashboard powered by the OpenWeather API with real-time data fetching, location-based search, and a clean, responsive UI focused on clarity and performance.',
    highlights: [
      'Real-time weather data via OpenWeather REST API',
      'Location search with live current conditions & forecasts',
      'Clean, responsive UI with smooth data transitions',
      'Async fetch patterns with loading & error states',
    ],
    stack: ['React', 'JavaScript', 'OpenWeather API', 'CSS', 'REST APIs'],
    github: 'https://github.com/bhavanishankar7075/WEATHER-APP',
    demo: 'https://weather-app-bhavanishankar.onrender.com',
    accentFrom: 'from-sky-500/20',
    accentTo: 'to-blue-600/10',
    borderHover: 'hover:border-sky-400/30',
    tag: 'API Integration',
    tagColor: 'text-sky-700 bg-sky-100 border-sky-200',
  },
  {
    id: 'worldbook',
    title: 'World Book',
    subtitle: 'TypeScript · Frontend',
    period: '2025',
    description:
      'TypeScript-first web application exploring global content with a clean UI. Demonstrates proficiency in TypeScript beyond JavaScript projects and modern frontend patterns.',
    highlights: [
      'Built entirely in TypeScript',
      'Clean component architecture',
      'Modern UI patterns',
    ],
    stack: ['TypeScript', 'React', 'CSS'],
    github: 'https://github.com/bhavanishankar7075/World-Book',
    demo: 'https://world-book-fontend.onrender.com',
    accentFrom: 'from-blue-500/15',
    accentTo: 'to-indigo-600/8',
    borderHover: 'hover:border-blue-400/30',
    tag: 'TypeScript',
    tagColor: 'text-blue-700 bg-blue-100 border-blue-200',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}
const card = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white shadow-sm hover:shadow-lg rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 group ${hovered ? '-translate-y-1' : ''}`}
    >
      {/* Top gradient accent */}
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accentFrom.replace('/20', '')} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Ambient glow */}
      <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${project.accentFrom} ${project.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

      <div className="p-7 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 ${project.tagColor}`}>
              {project.tag}
            </span>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">{project.title}</h3>
            <p className="text-sm text-slate-600 mt-1 font-mono">{project.subtitle} · {project.period}</p>
          </div>
          <div className="flex gap-2 shrink-0 ml-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 hover:border-slate-300 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
              <ArrowUpRight size={12} className="text-cyan-500 mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border hover:border-blue-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-cyan-500" />
            <span className="text-xs font-mono text-cyan-600 tracking-widest uppercase">Projects</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-title text-slate-900">
              What I've
              <br />
              <span className="gradient-text-cyan">built.</span>
            </h2>
            <a
              href="https://github.com/bhavanishankar7075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 transition-colors group"
            >
              <GithubIcon size={16} />
              View all 33+ repos
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
