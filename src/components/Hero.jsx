import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── 3D Scene ─────────────────────────────────────────────── */
function FloatingOrb() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12;
      meshRef.current.rotation.y = t * 0.18;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.08;
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      {/* Core orb */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 4]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.35}
          speed={2.5}
          roughness={0.05}
          metalness={0.9}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <icosahedronGeometry args={[1.26, 1]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Outer ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 8, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>

      {/* Outer ring 2 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.4, 0.01, 8, 80]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} />
      </mesh>

      {/* Point light glow */}
      <pointLight color="#00d4ff" intensity={3} distance={5} />
      <pointLight
        color="#a855f7"
        intensity={2}
        distance={4}
        position={[2, -1, 0]}
      />
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.8}
      />
      <FloatingOrb />
    </>
  );
}

/* ── Typing effect ────────────────────────────────────────── */
const ROLES = [
  "MERN Full-Stack Developer",
  "React Specialist",
  "Backend Engineer",
  "API Architect",
];

function TypedText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1400);
      return () => clearTimeout(t);
    }

    const target = ROLES[roleIdx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      setPaused(true);
      setTimeout(() => setDeleting(true), 1200);
      return;
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIdx, paused]);

  return (
    <span className="font-mono text-cyan-400">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

/* ── Main Hero ────────────────────────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* 3D Canvas — right side */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#02020f] via-[#02020f]/80 to-transparent" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#02020f] via-transparent to-[#02020f]/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 pt-24 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-cyan-400/20 text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight gradient-text-cyan text-slate-900 dark:text- mb-4 transition-colors duration-300"
          >
            Bhavani
            <br />
            <span className="gradient-text-cyan">Shankar</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            variants={item}
            className="h-8 mb-6 text-xl font-medium sm:text-2xl text-slate-300"
          >
            <TypedText />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl mb-10 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            MERN Full-Stack Developer crafting responsive, user-centric
            applications — from React UIs to Node.js APIs — with a focus on
            scalability and clean architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white glass-card transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/bhavanishankar7075",
                label: "GitHub",
              },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/bhavani-shankar-mandala-b728782ba/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:bhavanishankarmandala@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg glass-card border border-white/6 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-white/10 to-transparent" />
            <span className="font-mono text-xs tracking-widest text-slate-600">
              bhavanishankarmandala@gmail.com
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute z-10 flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-slate-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-600"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
