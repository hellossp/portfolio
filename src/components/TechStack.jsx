import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Next.js',
    category: 'Framework',
    desc: 'Server-side rendering, App Router, static generation.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M117.5 137.5L50 50V130H40V30H50L130 132.5V30H140V137.5H117.5Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'React.js',
    category: 'Library',
    desc: 'Component-driven UI, custom hooks, state management.',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeDasharray="3 3"/>
        <ellipse rx="10" ry="4.5" transform="rotate(30 12 12)"/>
        <ellipse rx="10" ry="4.5" transform="rotate(90 12 12)"/>
        <ellipse rx="10" ry="4.5" transform="rotate(150 12 12)"/>
      </svg>
    )
  },
  {
    name: 'Express.js',
    category: 'Framework',
    desc: 'Minimalist Node.js web application framework for routing and middleware APIs.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h6M4 12h5M4 16h6" />
        <path d="M14 8l6 8M20 8l-6 8" />
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 1" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    category: 'Database',
    desc: 'Document-based NoSQL database, schema design, and aggregation pipelines.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.18 10.37c-.52-1.9-1.57-3.95-2.92-5.74-.26-.35-.7-.35-.96 0-2.31 3.06-3.8 6.55-3.8 10.35 0 3.63 1.83 6.07 4.28 7.02.26.1.53-.1.53-.38v-4.14c0-.28.22-.5.5-.5s.5.22.5.5v4.14c0 .28.27.48.53.38 2.45-.95 4.28-3.39 4.28-7.02 0-1.85-.35-3.48-.94-4.61zm-3.68 7.74v-1.61c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.61c-1.3-.61-2.22-2.14-2.22-4.61 0-3 .93-5.83 2.72-8.35 1.79 2.52 2.72 5.35 2.72 8.35 0 2.47-.92 4-2.22 4.61z"/>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    desc: 'Utility-first utility system, responsive fluid design.',
    icon: (
      <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6C9.33333 6 7.33333 7.33333 6 10C8 9 9.5 9.5 10.5 11.5C11.5 13.5 11.5 14.5 13 15.5C14.5 16.5 16.5 16 19 14C17.6667 15 16.1667 15 14.5 14C12.5 12.8 11.8333 11.8 11 9C10.1667 6.2 11.1667 5.2 14 6C16.6667 6.8 18 6.5 18 5C16.6667 5.5 15.3333 5.3 14 4.5C12 3.3 11 3.5 10 4.5C9 5.5 9 6.5 7.5 7.5C6 8.5 4 8 1.5 6C3 5 4.5 5 6 6C7.5 7 8 6 9.5 4.5C11 3 13 3 15.5 5C14.1667 4 12.8333 4 12 6Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'Firebase',
    category: 'Backend-as-a-Service',
    desc: 'Firestore, Authentication, hosting, cloud functions.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.89 15.55L12 2L13.11 3.2L13.43 3.55C13.29 3.48 13.06 3.4 12.8 3.4C12.44 3.4 12.18 3.51 12.01 3.65C11.83 3.79 11.75 3.99 11.75 4.19C11.75 4.3 11.77 4.41 11.81 4.52L13.59 9.38L3.89 15.55Z" fill="currentColor"/>
        <path d="M20.09 15.53L17.72 5.09C17.65 4.79 17.5 4.55 17.27 4.38C17.04 4.21 16.74 4.12 16.42 4.12C15.86 4.12 15.42 4.42 15.26 4.96L13.59 9.38L20.09 15.53Z" fill="currentColor"/>
        <path d="M2.56 17.43L3.89 15.55L13.59 9.38L15.26 4.96L16.42 4.12C16.74 4.12 17.04 4.21 17.27 4.38C17.5 4.55 17.65 4.79 17.72 5.09L20.09 15.53L21.44 17.43C21.62 17.69 21.7 17.99 21.68 18.3C21.66 18.61 21.54 18.91 21.34 19.14C20.89 19.64 20.09 19.78 19.47 19.48L12.05 15.85L4.53 19.48C3.91 19.78 3.11 19.64 2.66 19.14C2.46 18.91 2.34 18.61 2.32 18.3C2.3 17.99 2.38 17.69 2.56 17.43Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'Language',
    desc: 'ES6+ syntax, asynchronous flow, DOM manipulation.',
    icon: (
      <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm11.375 13.93c.218.423.483.774.802 1.055.318.28.694.42 1.13.42.443 0 .822-.132 1.136-.395.313-.263.472-.656.472-1.18 0-.49-.138-.857-.417-1.1-.278-.243-.728-.483-1.348-.72l-.962-.365c-1.077-.41-1.85-.92-2.316-1.53-.466-.607-.7-1.385-.7-2.33 0-1.114.398-2.008 1.196-2.68.796-.673 1.834-1.01 3.113-1.01 1.258 0 2.213.313 2.868.94.654.626 1.004 1.488 1.05 2.585h-2.58c-.046-.575-.224-.997-.534-1.265-.31-.268-.7-.402-1.173-.402-.455 0-.822.115-1.1.348-.278.232-.418.537-.418.913 0 .344.113.618.34.823.226.205.674.43 1.345.675l.963.364c1.37.52 2.348 1.112 2.935 1.776.587.663.88 1.514.88 2.552 0 1.32-.472 2.378-1.417 3.17-.945.794-2.203 1.192-3.774 1.192-1.47 0-2.663-.393-3.578-1.178-.915-.785-1.405-1.89-1.47-3.315h2.585zM5 14.168c.046.772.314 1.353.805 1.745.49.39 1.164.587 2.02.587 1.01 0 1.716-.275 2.115-.827.4-.55.6-1.37.6-2.457V7.07h2.61v6.945c0 1.898-.445 3.33-1.336 4.3-1.002 1.09-2.54 1.635-4.61 1.635-1.868 0-3.238-.456-4.11-1.368C2.222 17.67 1.758 16.273 1.7 14.168h3.3z" />
      </svg>
    )
  },
  {
    name: 'Python',
    category: 'Language',
    desc: 'AI modeling, APIs, scripting and data engineering.',
    icon: (
      <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.91 2c-3.13 0-2.93 1.36-2.93 1.36v2.17h5.93V3.36S15 2 11.91 2zm-4.75 4c-.75 0-1.31.28-1.66.75C5.17 7.2 5 8.04 5 9.07c0 1.36.43 2.12.91 2.53.48.4 1.25.4 1.25.4h1.06v-1.78S8.22 10 7.82 10c-.4 0-.82-.23-.82-.82V7.82C7 7.22 7.42 7 7.82 7H11.5V6H7.16zm9.68 0h-4.34v1h3.68c.4 0 .82.22.82.82v1.36c0 .59-.42.82-.82.82h-1.06v1.78s.77 0 1.25-.4c.48-.41.91-1.17.91-2.53 0-1.03-.17-1.87-.5-2.32-.35-.47-.91-.75-1.66-.75zM8.56 12v1.78h3.69c.4 0 .81-.22.81-.82V12H8.56zm3.35 4.64v2.18s-.2 1.36-3.32 1.36c-3.13 0-2.93-1.36-2.93-1.36v-2.18h6.25z" />
      </svg>
    )
  },
  {
    name: 'Java',
    category: 'Language',
    desc: 'Object-oriented programming, data structures, backend logic.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.7 18.23c.33.24.78.36 1.35.36 1.48 0 2.45-.63 3.65-2.35 1.5 2.1 2.92 2.35 3.96 2.35 1.38 0 2-.45 2-.45l-.46-1.13s-.46.36-1.12.36c-.95 0-1.92-.66-3.08-2.3 2.05-1.8 3.52-3.8 4.25-5.9H7.64c-.38.78-.9 1.63-1.57 2.45-.88-1.12-1.78-2.6-2.53-4.52l-1.38.38c.95 2.48 2.08 4.38 3.18 5.68-1.5 1.7-2.73 2.65-3.66 2.65-.33 0-.6-.08-.75-.24v.67zm12.35-8.25c.02-.15.03-.27.03-.38 0-1.52-1.38-2.52-3.33-2.52-2.12 0-3.3 1.15-3.3 2.45 0 .2.03.4.08.6l1.24-.13c-.02-.12-.04-.26-.04-.37 0-.74.65-1.35 1.95-1.35 1.22 0 1.96.55 1.96 1.3 0 .47-.28.87-.93 1.25-.86.5-1.96.96-2.77 1.52-.77.53-1.25 1.28-1.25 2.2 0 1.53 1.2 2.5 3.12 2.5 1.83 0 3-1.02 3-1.02l-.37-1.13s-.9.76-2.18.76c-1.13 0-1.73-.5-1.73-1.25 0-.5.27-.9.84-1.24.73-.42 1.95-.92 2.8-1.4.82-.48 1.4-1.22 1.4-2.22l-.24-.33z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    category: 'VCS & Platform',
    desc: 'Collaboration, pull requests, actions CI/CD, release management.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    desc: 'Prototyping, vector layouts, wireframing, UX logic.',
    icon: (
      <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c2.76 0 5 2.24 5 5 0 1.66-.81 3.13-2.05 4.05C16.19 11.97 17 13.39 17 15c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.61.76-3.03 1.95-3.95C7.76 10.13 7 8.66 7 7c0-2.76 2.24-5 5-5zm-2.5 5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5S13.38 9.5 12 9.5 9.5 8.38 9.5 7zM12 12.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-2.5-5.5c0 1.38 1.12 2.5 2.5 2.5V4.5c-1.38 0-2.5 1.12-2.5 2.5z" />
      </svg>
    )
  },
  {
    name: 'REST APIs',
    category: 'Integration',
    desc: 'HTTP protocols, endpoint schemas, JSON parsing.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }
];

function SpotlightCard({ skill }) {
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl glass-card p-6 flex flex-col justify-between h-48 border border-white/[0.04] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02]"
    >
      {/* Dynamic Cursor Light Spot */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Light border spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="flex justify-between items-start">
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-widest bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded-full">
          {skill.category}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="font-display font-bold text-base text-white tracking-wide">{skill.name}</h3>
        <p className="text-xs text-zinc-400 font-light mt-1.5 leading-relaxed">{skill.desc}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Toolkit</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              Tech Stack & Expertise
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
            Languages, frameworks, and developer environments that I work with to build responsive, robust user experiences.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <SpotlightCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
