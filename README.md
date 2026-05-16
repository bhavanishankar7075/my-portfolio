# 🚀 Bhavani Shankar — Personal Portfolio

A modern, interactive developer portfolio built with React, Three.js, and Framer Motion. Features a live 3D animated scene, scroll-triggered animations, a magnetic cursor, dark/light theme toggle, and a bento-grid skills layout.

[![GitHub](https://img.shields.io/badge/GitHub-my--portfolio-black?style=for-the-badge&logo=github)](https://github.com/bhavanishankar7075/my-portfolio)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite)

---

## ✨ Features

### 🌐 Interactive 3D Hero Section
- Live **Three.js** scene with a floating icosahedron orb using `MeshDistortMaterial`
- Animated orbital rings, point lights, and a starfield background — all rendered in WebGL
- Built with `@react-three/fiber` and `@react-three/drei` (`Float`, `Stars`, `Sphere`)
- Smooth canvas rendering with `Suspense` fallback for performance

### ⌨️ Typing Animation
- Custom-built typewriter effect cycling through roles:
  `MERN Full-Stack Developer` → `React Specialist` → `Backend Engineer` → `API Architect`
- Handles typing, pausing, deleting, and looping without any library dependency

### 🎞️ Scroll-Triggered Animations
- Every section animates in on scroll using **Framer Motion** `useInView`
- Staggered children, fade-up, slide-in, and scale transitions throughout
- Parallax scroll effect on the Experience timeline

### 🧲 Magnetic Cursor
- Custom `MagneticCursor` component that follows the mouse with a smooth lag effect
- Enhances the interactive feel on desktop

### 🌙 Dark / Light Theme
- Global theme toggle powered by React **Context API** (`ThemeContext`)
- Smooth color transitions across all sections

### 📐 Bento Grid Skills Layout
- Visual skill cards displayed in a responsive bento grid
- Hero cell spans two columns for MERN stack overview
- Individual cards for: JavaScript, React, Node.js, MongoDB, Redux Toolkit, Express, Tailwind CSS, Python, FastAPI, Socket.IO, JWT, Git, Stripe/Razorpay, PostgreSQL, HTML5/CSS3, REST APIs

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 (Vite) |
| **3D / WebGL** | Three.js, @react-three/fiber, @react-three/drei |
| **Animations** | Framer Motion 12 |
| **Styling** | Tailwind CSS v3 |
| **Icons** | Lucide React |
| **State** | React Context API (ThemeContext) |
| **Build Tool** | Vite 8 |
| **Language** | JavaScript (JSX) |

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | 3D animated orb, typing role animation, social links, CTA buttons |
| **About** | Stats (2+ projects, 30% latency reduced, 33+ GitHub repos), education, personal info |
| **Skills** | Bento grid of 15+ technologies with hover effects |
| **Experience** | Timeline cards — Roadvision AI (Current) + Labmentix internship |
| **Projects** | Cards for E-Commerce, Home Service Provider, Weather App, World Book |
| **Contact** | Email/phone form, social links (GitHub, LinkedIn, Email) |
| **Footer** | Links and credits |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Hero.jsx          # 3D Three.js scene + typing animation
│   │   ├── About.jsx         # Stats, education cards
│   │   ├── Skills.jsx        # Bento grid skill layout
│   │   ├── Experience.jsx    # Timeline with scroll parallax
│   │   ├── Projects.jsx      # Project cards with hover effects
│   │   ├── Contact.jsx       # Contact form + social links
│   │   ├── Navbar.jsx        # Responsive navigation
│   │   ├── Footer.jsx        # Footer links
│   │   ├── ThemeToggle.jsx   # Dark/light mode switch
│   │   └── MagneticCursor.jsx # Custom cursor effect
│   ├── context/
│   │   └── ThemeContext.jsx  # Global theme state
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Local Setup

```bash
# Clone the repo
git clone https://github.com/bhavanishankar7075/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Key Packages

```json
{
  "@react-three/fiber": "^9.5.0",       // React renderer for Three.js
  "@react-three/drei": "^10.7.7",       // Three.js helpers (Float, Stars, etc.)
  "three": "^0.183.2",                  // 3D WebGL engine
  "framer-motion": "^12.38.0",          // Animation library
  "lucide-react": "^1.7.0"              // Icon set
}
```

---

## 🚀 Deployment

Deployed as a static site. Build output goes to `dist/` via `npm run build`.

Recommended platforms:
- **Vercel** — `npm run build` → deploy `dist/`
- **Netlify** — drag & drop `dist/` folder
- **GitHub Pages** — using `gh-pages` package

---

## 👨‍💻 Author

**Bhavani Shankar Mandala**
- 📧 bhavanishankarmandala@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/bhavani-shankar-mandala-b728782ba/)
- 🐙 [GitHub](https://github.com/bhavanishankar7075)
- 📱 +91 70756 08435
