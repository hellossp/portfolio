import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layout, ShieldCheck, FileText, Calendar, Clock, Database, Activity } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const DeviceMockup = ({ screenshot, url, children }) => {
  return (
    <div className="w-full h-full bg-zinc-950 border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col group/device transition-all duration-500 hover:border-white/[0.12] hover:shadow-zinc-900/50 select-none">
      {/* Browser Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-900/40 border-b border-white/[0.04] shrink-0 z-10">
        <div className="flex space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/40" />
          <span className="w-2 h-2 rounded-full bg-amber-500/40" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/40" />
        </div>
        <div className="text-[8px] font-mono text-zinc-500 bg-white/5 px-3 py-0.5 rounded border border-white/[0.02] max-w-[140px] truncate">
          {url}
        </div>
        <div className="w-6" />
      </div>

      {/* Screen Frame */}
      <div className="flex-1 relative overflow-hidden bg-zinc-950 flex items-center justify-center min-h-0">
        {screenshot ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src={screenshot} 
              alt="App UI Screenshot" 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/device:scale-105 filter brightness-[0.55] group-hover/device:brightness-[0.75]" 
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.06),transparent_50%)]" />
          </div>
        )}
        
        {/* Floating details / widgets */}
        <div className="relative w-full h-full p-4 flex flex-col justify-end z-10 min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'Workforce & Activity Tracker',
    tagline: 'Custom SaaS for Startup Operations',
    desc: 'Designed and built a full-stack operations dashboard for a startup client to manage team attendance and track deliverables. Enables administrators to verify tasks and monitor daily activity reports in real time.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase Auth', 'Cloud Firestore'],
    github: 'https://github.com/hellossp',
    demo: 'https://work-review-system.vercel.app/',
    color: 'from-accentBlue to-indigo-500',
    features: [
      'Real-time punch in/out attendance flow',
      'Daily work report submission pipeline',
      'Task verification & cloud file backups',
      'Granular dashboards for employees and administrators'
    ],
    mockup: (
      <DeviceMockup screenshot="/projects/workforce.png" url="workforce-review.io">
        <div className="space-y-2 max-w-[90%] mx-auto mb-1">
          {/* Punch Card Status */}
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform -translate-y-1 group-hover/device:translate-y-[-6px] transition-transform duration-500">
            <div className="flex items-center justify-between text-[8px]">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-emerald-400 font-mono">PUNCHED IN</span>
              </div>
              <span className="text-zinc-500 font-mono text-[7px]">Active Shift</span>
            </div>
          </div>
          {/* Deliverable Badge */}
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform translate-y-1 group-hover/device:translate-y-0 transition-transform duration-500 text-[8px] space-y-1.5">
            <span className="text-zinc-400 font-semibold block text-[7px] uppercase tracking-wide">Recent Upload</span>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-zinc-300">Firebase_Listener_Fix.js</span>
              <span className="text-emerald-400 font-medium font-mono text-[7px]">VERIFIED</span>
            </div>
          </div>
        </div>
      </DeviceMockup>
    )
  },
  {
    title: 'SwasthyaSetu',
    tagline: 'AI Medical Report Analyzer Prototype',
    desc: 'An intelligent medical report parsing system designed to simplify pathology diagnostics. Automatically extracts test scores from documents, compares them to health standards, and delivers simple insight logs.',
    tech: ['Next.js', 'Tailwind CSS', 'OCR Systems', 'PDF Parsing', 'REST APIs'],
    github: 'https://github.com/hellossp',
    demo: 'https://swasthyasetubetaversion.vercel.app/',
    color: 'from-emerald-500 to-teal-400',
    features: [
      'PDF & image medical report uploads',
      'Automated text extraction & OCR parsing',
      'Standard parameter detection comparisons',
      'Odisha-inspired UI and dual English/Odia structural design'
    ],
    mockup: (
      <DeviceMockup screenshot="/projects/swasthyasetu.png" url="swasthyasetu.care">
        <div className="space-y-2 max-w-[90%] mx-auto mb-1">
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform -translate-y-1 group-hover/device:translate-y-[-6px] transition-transform duration-500 space-y-1">
            <div className="flex justify-between items-center text-[7px] text-zinc-400">
              <span className="font-semibold">Hemoglobin (Hb)</span>
              <span>Range: 13-17 g/dL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-red-400 font-display">11.2 g/dL</span>
              <span className="px-1 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-[7px] font-bold">LOW</span>
            </div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform translate-y-1 group-hover/device:translate-y-0 transition-transform duration-500 flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[7px] text-zinc-300 leading-tight">
              Insight: ଲୋହିତ ରକ୍ତ କଣିକା ସାଧାରଣ ସ୍ତରରୁ କମ ଅଛି.
            </span>
          </div>
        </div>
      </DeviceMockup>
    )
  },
  {
    title: 'GenX Timetable Routine System',
    tagline: 'Freelance Scheduling Automation',
    desc: 'An automated routines generation engine created for coaching centers. Replaces manual scheduling worksheets by instantly resolving conflicts and arranging sessions according to staff availability.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Firebase', 'Firestore'],
    github: 'https://github.com/hellossp',
    demo: 'https://genx-timetable.vercel.app/',
    color: 'from-orange-500 to-amber-400',
    features: [
      'Automated conflict-free scheduling engine',
      'Interactive routines preview grids',
      'Dynamic teacher availability matrix',
      'Vercel deployment hosting optimizations'
    ],
    mockup: (
      <DeviceMockup screenshot="/projects/genx.png" url="genx-timetable.io">
        <div className="space-y-2 max-w-[90%] mx-auto mb-1">
          <div className="grid grid-cols-2 gap-1.5 text-[7px] transform -translate-y-1 group-hover/device:translate-y-[-6px] transition-transform duration-500">
            <div className="bg-zinc-900/95 border border-white/10 p-1.5 rounded-lg backdrop-blur-md">
              <span className="text-zinc-500 block font-semibold text-[6px]">SLOT 1 (09:00 AM)</span>
              <span className="text-white block font-mono font-medium">Physics - Class A</span>
            </div>
            <div className="bg-zinc-900/95 border border-white/10 p-1.5 rounded-lg backdrop-blur-md">
              <span className="text-zinc-500 block font-semibold text-[6px]">SLOT 2 (10:30 AM)</span>
              <span className="text-white block font-mono font-medium">Chemistry - Class B</span>
            </div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform translate-y-1 group-hover/device:translate-y-0 transition-transform duration-500 flex items-center justify-between text-[7px]">
            <div className="flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Conflict Check Passed</span>
            </div>
            <span className="text-zinc-500 font-mono">0 Conflicts</span>
          </div>
        </div>
      </DeviceMockup>
    )
  },
  {
    title: 'InstantPages',
    tagline: 'SaaS Website Builder Product',
    desc: 'A drag-and-drop landing page generator allowing users to build websites in minutes. Features Cashfree payments integration and database syncs.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Cashfree Checkout'],
    github: 'https://github.com/hellossp',
    demo: 'https://instantpages.vercel.app/',
    color: 'from-accentPurple to-pink-500',
    features: [
      'Interactive drag-and-drop WYSIWYG editor',
      'Cashfree checkout payment gateway',
      'Real-time Firestore backups & saves',
      'Modern, mobile-responsive layout templates'
    ],
    mockup: (
      <DeviceMockup screenshot="/projects/instantpages.png" url="instantpages.so">
        <div className="space-y-2 max-w-[90%] mx-auto mb-1">
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform -translate-y-1 group-hover/device:translate-y-[-6px] transition-transform duration-500 flex justify-between items-center text-[7px]">
            <span className="text-zinc-400">Drag & Drop block:</span>
            <div className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white font-mono">Hero Section</div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform translate-y-1 group-hover/device:translate-y-0 transition-transform duration-500 flex items-center justify-between text-[7.5px]">
            <div className="flex items-center space-x-1">
              <Layout className="w-3 h-3 text-accentPurple" />
              <span className="text-zinc-300 font-medium">Canvas Editor Live</span>
            </div>
            <div className="bg-gradient-to-r from-accentPurple to-pink-500 text-white font-bold px-2 py-0.5 rounded-full text-[6.5px]">
              PAY WITH CASHFREE
            </div>
          </div>
        </div>
      </DeviceMockup>
    )
  },
  {
    title: 'INTERNOVA',
    tagline: 'AI Career Recommendation Platform',
    desc: 'An AI-powered professional onboarding system assisting candidates with ATS-friendly resume review calculations, matching scores, and custom training modules.',
    tech: ['React.js', 'Python', 'FastAPI', 'Tailwind CSS'],
    github: 'https://github.com/hellossp',
    demo: 'https://internova-1m1j.onrender.com/',
    color: 'from-accentBlue via-[#9333ea] to-fuchsia-500',
    features: [
      'AI Career recommendation pipelines',
      'Interactive resume analysis tools',
      'Real-time job notification alerts',
      'Adaptive training paths & courses'
    ],
    mockup: (
      <DeviceMockup screenshot={null} url="internova.ai">
        <div className="space-y-3 max-w-[90%] mx-auto mb-1 h-full flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-2 text-center text-[7.5px] transform -translate-y-1 group-hover/device:translate-y-[-6px] transition-transform duration-500">
            <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md">
              <span className="text-zinc-500 uppercase block font-semibold text-[6.5px]">Match Score</span>
              <span className="text-xs font-bold text-emerald-400 font-display">94%</span>
            </div>
            <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md">
              <span className="text-zinc-500 uppercase block font-semibold text-[6.5px]">ATS Review</span>
              <span className="text-xs font-bold text-accentBlue font-display">88/100</span>
            </div>
          </div>

          <div className="bg-zinc-900/90 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-lg transform translate-y-1 group-hover/device:translate-y-0 transition-transform duration-500 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[7px] text-zinc-300 leading-tight">
              AI Recommendation: Add context state management APIs for higher scores.
            </span>
          </div>
        </div>
      </DeviceMockup>
    )
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
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(124, 58, 237, 0.04) 0%, rgba(59, 130, 246, 0.02) 50%, transparent 100%)`,
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

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 group-hover:translate-x-1 transition-transform duration-300">
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
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-accentBlue hover:text-cyan-400 transition-colors duration-200"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Visual Mockup Canvas */}
      <div className={`flex-1 h-[260px] md:h-[300px] flex items-center justify-center order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} group-hover:scale-[1.01] transition-transform duration-500 relative`}>
        <div className="absolute inset-0 bg-radial-glow blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
        {project.mockup}
      </div>

    </motion.div>
  );
}

export default function Projects() {
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
              Freelance & SaaS Projects
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
            Real-world contract implementations and active software assets built with modern engineering workflows.
          </p>
        </div>

        {/* Project Cards stack */}
        <div className="flex flex-col gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
