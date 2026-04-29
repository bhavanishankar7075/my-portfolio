import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Code2,
  Zap,
  Globe,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const STATS = [
  { value: "2+", label: "Projects Shipped", icon: Code2 },
  { value: "30%", label: "Latency Reduced", icon: Zap },
  { value: "33+", label: "GitHub Repos", icon: Globe },
];

const EDU = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Baba Institute of Technology & Science",
    location: "Visakhapatnam",
    period: "2022 – 2026",
    grade: "CGPA: 7.76",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-10 h-px bg-gradient-to-r from-blue-600 to-indigo-600" />
          <span className="font-mono text-xs font-semibold tracking-widest text-transparent uppercase bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text">
            About Me
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16 text-transparent section-title bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 bg-clip-text"
        >
          Crafting digital
          <br />
          <span className="gradient-text-cyan">experiences</span> that scale.
        </motion.h2>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-slate-700"
            >
              I'm a{" "}
              <span className="font-semibold text-cyan-500">
                Full-Stack Developer
              </span>{" "}
              specializing in the{" "}
              <span className="font-semibold text-blue-600">MERN stack</span>{" "}
              and modern
              <span className="font-semibold text-indigo-600">
                {" "}
                Python Backend
              </span>{" "}
              development. With hands-on experience in React and Node.js,
              alongside an active focus on building high-performance APIs with{" "}
              <span className="font-semibold text-teal-500">FastAPI</span>, I
              bridge the gap between complex logic and user-centric design.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="leading-relaxed text-slate-600"
            >
              From architecting scalable e-commerce platforms to building
              real-time booking systems with WebSocket live tracking, I focus on
              shipping production-grade systems with clean, maintainable code.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="leading-relaxed text-slate-600"
            >
              Beyond development, I am committed to optimizing system
              performance and code quality. My GitHub serves as a professional
              laboratory where I document full-scale MERN projects—complete with
              live deployments—to demonstrate my ability to solve complex
              technical challenges with production-ready solutions.
            </motion.p>

            {/* Contact chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Mail, label: "bhavanishankarmandala@gmail.com" },
                { icon: Phone, label: "+91 70756 08435" },
                { icon: MapPin, label: "Visakhapatnam, India" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:border-blue-400 hover:shadow-[0_0_12px_rgba(37,99,235,0.15)] transition-all duration-200"
                >
                  <Icon size={12} className="text-blue-600" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats + edu */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-5"
          >
            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 border border-slate-200 text-center group hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-200"
                >
                  <Icon
                    size={18}
                    className="mx-auto mb-2 transition-colors text-blue-600/60 group-hover:text-blue-600"
                  />
                  <div className="mb-1 text-2xl font-black text-slate-900">
                    {value}
                  </div>
                  <div className="text-xs text-slate-600">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Education card */}
            {EDU.map((e) => (
              <motion.div
                key={e.degree}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 transition-colors border border-blue-200 rounded-xl bg-blue-50 shrink-0 group-hover:bg-blue-100">
                    <GraduationCap size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm mb-0.5">
                      {e.degree}
                    </div>
                    <div className="mb-1 text-xs text-slate-600">
                      {e.school}, {e.location}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-cyan-500">
                        {e.grade}
                      </span>
                      <span className="text-xs text-slate-600">{e.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certificates */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-200"
            >
              <div className="mb-3 font-mono text-xs font-semibold tracking-widest text-transparent uppercase bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text">
                Certifications
              </div>
              <div className="space-y-2">
                {[
                  "Full Stack Development — Internshala",
                  "Web Development — Labmentix",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
