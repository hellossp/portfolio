import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LaptopMockup = ({ screenshot }) => {
  return (
    <div className="w-full max-w-[460px] lg:max-w-[480px] mx-auto flex flex-col items-center select-none group/laptop">
      {/* Laptop Screen / Display Lid */}
      <div className="w-[90%] aspect-[1.6/1] bg-[#0a0a0b] border-[10px] border-[#18181b] rounded-t-2xl shadow-2xl relative flex flex-col overflow-hidden transition-all duration-500 group-hover/laptop:border-[#27272a]">
        
        {/* Web Camera Sensor */}
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-white/5 flex items-center justify-center z-20">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Display Screen */}
        <div className="flex-1 relative w-full h-full overflow-hidden bg-zinc-950">
          <img 
            src={screenshot} 
            alt="App Display UI" 
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/laptop:scale-105" 
          />
          {/* Subtle screen glare/reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Laptop Keyboard Base & Hinge */}
      <div className="w-full h-[12px] bg-gradient-to-b from-[#2d2d30] to-[#18181b] rounded-t-[2px] rounded-b-[12px] border-t border-[#464649] relative shadow-lg">
        {/* Front Opening Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#121214] rounded-b-[3px]" />
      </div>

      {/* Shadow base depth */}
      <div className="w-[94%] h-[6px] bg-black/40 rounded-full blur-[4px] mt-[1px] transition-all duration-500 group-hover/laptop:w-[96%] group-hover/laptop:bg-black/60" />
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
    screenshot: '/projects/workforce.png'
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
    screenshot: '/projects/swasthyasetu.png'
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
    screenshot: '/projects/genx.png'
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
    screenshot: '/projects/instantpages.png'
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
    screenshot: '/projects/internova.png'
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
      <div className={`flex-1 flex items-center justify-center order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} group-hover:scale-[1.01] transition-transform duration-500 relative py-6`}>
        <div className="absolute inset-0 bg-radial-glow blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
        <LaptopMockup screenshot={project.screenshot} />
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
