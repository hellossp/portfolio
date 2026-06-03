import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LaptopMockup = ({ screenshot, video, url, animateOnHover }) => {
  const cleanUrl = url ? url.replace('https://', '').replace('http://', '').split('/')[0] : 'localhost';

  return (
    <div className="w-full max-w-[440px] lg:max-w-[460px] mx-auto flex flex-col items-center select-none group/laptop">
      {/* Laptop Screen / Display Lid */}
      <div className="w-[90%] aspect-[16/8.5] bg-[#0c0c0e] border-[8px] border-[#1e1e21] rounded-t-2xl shadow-2xl relative flex flex-col overflow-hidden">

        {/* Web Camera Sensor */}
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-white/5 flex items-center justify-center z-20">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Display Screen Canvas */}
        <div className="flex-1 relative w-full h-full overflow-hidden bg-zinc-950 flex flex-col">
          {/* Virtual Browser Top Bar inside laptop screen */}
          <div className="w-full h-4 bg-zinc-900 border-b border-white/[0.04] flex items-center px-2 justify-between shrink-0">
            <div className="flex space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
            </div>
            <div className="text-[6px] font-mono text-zinc-500 bg-white/5 px-2.5 py-0.5 rounded max-w-[120px] truncate scale-90 border border-white/[0.02]">
              {cleanUrl}
            </div>
            <div className="w-5" />
          </div>

          {/* Main Web Page Display (Video Player or Image Screenshot) */}
          <div className="flex-1 w-full relative overflow-hidden bg-[#0c0c0e]">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={screenshot}
                alt="App Display UI"
                className={`w-full h-auto absolute top-0 left-0 transition-transform duration-[6000ms] ease-in-out ${animateOnHover ? 'group-hover/laptop:-translate-y-[5%]' : ''}`}
              />
            )}
            {/* Subtle screen glare/reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>

      {/* 2D Flat Keyboard Base Deck */}
      <div className="w-[104%] h-[12px] bg-gradient-to-b from-[#2d2d30] via-[#242426] to-[#121213] border-t border-[#464649] rounded-b-xl relative shadow-lg">
        {/* Front Opening Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-[#0c0c0e] rounded-b-md" />
      </div>

      {/* Shadow base depth */}
      <div className="w-[94%] h-[5px] bg-black/40 rounded-full blur-[3px] mt-[1.5px]" />
    </div>
  );
};

const projects = [
  {
    title: 'Élevé Interiors Experience',
    tagline: 'Cinematic Scroll-Linked Web Experience',
    desc: 'Engineered an immersive, high-end digital showroom for a luxury architecture studio featuring dual custom HTML5 Canvas rendering loops that orchestrate 320+ preloaded frames to deliver fluid, scroll-driven door-reveal animations at a solid 60 FPS.',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'HTML5 Canvas API', 'Asset-Preloading API'],
    github: 'https://github.com/hellossp',
    demo: 'https://interior-sample.vercel.app/',
    color: 'from-emerald-400 to-teal-500',
    category: 'Local Business',
    features: [
      'Dual HTML5 Canvas Animation Pipelines (Entry & Scroll-to-Open Form)',
      'Performance Optimization via Direct DOM mutations bypassing React virtual DOM',
      'Smart Assets Preloading Engine with luxury scroll-locked progress screen',
      'Responsive Aspect-Ratio Scaling (drawImageProp) with sub-pixel Rounding'
    ],
    screenshot: '/projects/interior.png',
    video: '/project videos/Recording 2026-06-02 120955.mp4'
  },
  {
    title: 'Workforce & Activity Tracker',
    tagline: 'Custom SaaS for Startup Operations',
    desc: 'Designed and built a full-stack operations dashboard for a startup client to automate attendance tracking and task verification. By creating a real-time Firestore synchronization flow, the system cut manual team oversight time by 60%.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase Auth', 'Cloud Firestore'],
    github: 'https://github.com/hellossp',
    demo: 'https://work-review-system.vercel.app/',
    color: 'from-teal-400 to-emerald-600',
    category: 'SaaS & MVPs',
    features: [
      'Real-time punch in/out attendance flow',
      'Daily work report submission pipeline',
      'Task verification & cloud file backups',
      'Granular dashboards for employees and administrators'
    ],
    screenshot: '/projects/workforce.png'
  },
  {
    title: 'GenX Timetable Routine System',
    tagline: 'Freelance Scheduling Automation',
    desc: 'Engineered an automated routines generation engine for coaching centers. Replaces manual scheduling worksheets by instantly resolving conflicts and arranging sessions, saving 10+ administrative hours weekly.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Firebase', 'Firestore'],
    github: 'https://github.com/hellossp',
    demo: 'https://genx-timetable.vercel.app/',
    color: 'from-teal-500 to-emerald-400',
    category: 'Local Business',
    features: [
      'Automated conflict-free scheduling engine',
      'Interactive routines preview grids',
      'Dynamic teacher availability matrix',
      'Vercel deployment hosting optimizations'
    ],
    screenshot: '/projects/genx.png'
  },
  {
    title: 'SwasthyaSetu',
    tagline: 'Automated OCR Document Parser Prototype',
    desc: 'Designed an intelligent medical report parsing system that parses PDF diagnostics and flags health parameters automatically. Cuts document analysis time for health personnel by 80% via custom REST OCR pipelines.',
    tech: ['Next.js', 'Tailwind CSS', 'OCR Systems', 'PDF Parsing', 'REST APIs'],
    github: 'https://github.com/hellossp',
    demo: 'https://swasthyasetubetaversion.vercel.app/',
    color: 'from-emerald-400 to-teal-400',
    category: 'Integrations & AI',
    features: [
      'PDF & image medical report uploads',
      'Automated text extraction & OCR parsing',
      'Standard parameter detection comparisons',
      'Odisha-inspired UI and dual English/Odia structural design'
    ],
    screenshot: '/projects/swasthyasetu.png'
  },
  {
    title: 'InstantPages',
    tagline: 'SaaS Website Builder Platform',
    desc: 'Designed a drag-and-drop landing page generator with Cashfree checkout payments and active database backups. Empowers clients to launch campaign landing pages with zero code involvement.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Cashfree Checkout'],
    github: 'https://github.com/hellossp',
    demo: 'https://instantpages.vercel.app/',
    color: 'from-emerald-500 to-teal-600',
    category: 'SaaS & MVPs',
    features: [
      'Interactive drag-and-drop WYSIWYG editor',
      'Cashfree checkout payment gateway',
      'Real-time Firestore backups & saves',
      'Modern, mobile-responsive layout templates'
    ],
    screenshot: '/projects/instantpages.png'
  },
  {
    title: 'INTERNOVA',
    tagline: 'AI Career Recommendation Engine',
    desc: 'Developed an AI career matching platform offering ATS analysis, resume optimization scores, and training pathways. Features automated PDF parsing to match candidate profiles to active openings.',
    tech: ['React.js', 'Python', 'FastAPI', 'Tailwind CSS'],
    github: 'https://github.com/hellossp',
    demo: 'https://internova-1m1j.onrender.com/',
    color: 'from-emerald-400 via-teal-500 to-emerald-600',
    category: 'Integrations & AI',
    features: [
      'AI Career recommendation pipelines',
      'Interactive resume analysis tools',
      'Real-time job notification alerts',
      'Adaptive training paths & courses'
    ],
    screenshot: '/projects/internova.png'
  },
  {
    title: 'MediLens AI',
    tagline: 'AI-Powered Prescription Scanning & Medicine Reference Platform',
    desc: 'Built a bilingual healthcare information platform that enables users to upload or scan medical prescriptions and instantly retrieve detailed medicine information from a structured pharmaceutical dataset. The platform combines OCR-powered prescription analysis, fuzzy medicine matching, and a responsive multilingual interface to improve medicine accessibility and understanding.',
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Firebase Firestore', 'Tesseract OCR', 'Fuse.js', 'i18next', 'Vercel'],
    github: 'https://github.com/hellossp',
    demo: 'https://medi-lens-theta.vercel.app/',
    color: 'from-teal-400 via-emerald-500 to-teal-600',
    category: 'Integrations & AI',
    features: [
      'OCR-based Prescription Upload & Camera Scanning',
      'Smart Medicine Detection with Fuzzy Search Matching',
      'Firebase Firestore-Powered Medicine Database',
      'English & Odia Bilingual User Experience',
      'Responsive Mobile-First Interface',
      'Beta-Phase Clinical Reference & Safety Information System'
    ],
    screenshot: '/projects/medilens.png'
  }
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden group border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.02]`}
    >
      {/* Background Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.06) 0%, rgba(5, 150, 105, 0.02) 50%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Custom border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.08) 0%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Text Info */}
      <div className={`flex-1 flex flex-col justify-between order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div>
          <span className={`inline-flex text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
            {project.tagline}
          </span>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 transition-transform duration-300">
            {project.title}
          </h3>

          <p className="mt-4 text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            {project.desc}
          </p>

          <ul className="mt-6 space-y-2">
            {project.features.map((feat, fidx) => (
              <li key={fidx} className="flex items-center space-x-2 text-xs text-zinc-300 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.05]">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, tid) => (
              <span key={tid} className="text-[10px] text-zinc-400 font-semibold bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-accentBlue hover:text-emerald-300 transition-colors duration-200"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Visual Mockup Canvas (Static Flat 2D container) */}
      <div className={`flex-1 flex items-center justify-center order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative py-6`}>
        <div className="absolute inset-0 bg-radial-glow blur-2xl opacity-40 pointer-events-none animate-pulse-slow" />
        <LaptopMockup screenshot={project.screenshot} video={project.video} url={project.demo} animateOnHover={index === 0} />
      </div>

    </motion.div>
  );
}

export default function Projects({ isFeaturedPreview = false }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'SaaS & MVPs', 'Local Business', 'Integrations & AI'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  if (isFeaturedPreview) {
    return (
      <section id="projects" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />

        {/* Grid line separator */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Work Products</span>
              <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
              Selected contract implementations and active software assets built with modern engineering workflows.
            </p>
          </div>

          {/* Project Cards stack (Show top 3) */}
          <div className="flex flex-col gap-10">
            {projects.slice(0, 3).map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>

          {/* See All Projects Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="#/all-projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full font-semibold bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl font-display text-sm"
            >
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    );
  }

  // Full Page standalone view
  return (
    <section className="relative py-32 px-6 overflow-hidden min-h-screen">
      <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto pt-8">

        {/* Standalone Back to Home & Title */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Back to Home</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Work Showcase</span>
              <h1 className="mt-2 text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
                All Projects & Works
              </h1>
            </div>
            <p className="text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
              A comprehensive archive of freelance contract builds, startup MVPs, and production integrations.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${isActive
                    ? 'bg-white text-black border-transparent shadow-lg shadow-white/5'
                    : 'bg-white/[0.02] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards stack */}
        <div className="flex flex-col gap-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
