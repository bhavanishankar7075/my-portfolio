import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const SOCIAL = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'bhavanishankar7075',
    href: 'https://github.com/bhavanishankar7075',
    color: 'hover:border-slate-400/40 hover:text-slate-300',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'bhavani-shankar-mandala',
    href: 'https://www.linkedin.com/in/bhavani-shankar-mandala-b728782ba/',
    color: 'hover:border-blue-400/40 hover:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bhavanishankarmandala@gmail.com',
    href: 'mailto:bhavanishankarmandala@gmail.com',
    color: 'hover:border-cyan-400/40 hover:text-cyan-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 70756 08435',
    href: 'tel:+917075608435',
    color: 'hover:border-green-400/40 hover:text-green-400',
  },
]

const inputClass =
  'w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-200 font-sans backdrop-blur-sm'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async submit (wire up to your preferred email service)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-cyan-400/50" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="section-title text-slate-900">
            Let's build something
            <br />
            <span className="gradient-text-cyan">great together.</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-md">
            Available for internships, full-time roles, and freelance projects. Drop a message
            and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-md p-8 space-y-5 shadow-glass-lg"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-2 tracking-widest uppercase">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-2 tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-2 tracking-widest uppercase">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-2 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the project, role, or just say hello..."
                  className={`${inputClass} resize-none focus:ring-purple-500/60 focus:border-purple-500/50`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-500 text-slate-900 hover:shadow-glow-cyan disabled:opacity-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={14} />
                  Something went wrong. Try emailing directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability badge */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-green-400/15 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available Now</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Open to internships, full-time roles, and freelance work. Based in India · Remote OK.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {SOCIAL.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/5 text-slate-600 ${color} transition-all duration-200 group`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-600 mb-0.5">{label}</div>
                    <div className="text-sm font-medium truncate">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
