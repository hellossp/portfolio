import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Terminal, Award, HelpCircle, CornerDownLeft, Star } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Hero() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'Sitansu OS v1.0.2 - Live Commander Enabled.',
    'Type a command or select a quick option below to interact.',
  ]);
  const [activeParticles, setActiveParticles] = useState([]);
  const logsContainerRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTo({
        top: logsContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [terminalLogs]);

  // Execute terminal command logic
  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = [];
    response.push(`$ ${cmd}`);

    switch (cleanCmd) {
      case '/help':
        response.push('Available commands:');
        response.push('  /skills   - Display primary technology toolkit');
        response.push('  /projects - Scroll down to projects portfolio');
        response.push('  /about    - Scroll down to professional bio');
        response.push('  /matrix   - Trigger glowing neon screen cascades');
        response.push('  /clear    - Flush terminal console history');
        break;
      case '/skills':
        response.push('Core Stack: [Next.js, React, Tailwind, Firebase, Python, Node, OCR]');
        response.push('Architecture Focus: Clean modular layouts & real-time DB integration.');
        break;
      case '/projects':
        response.push('Redirecting viewport to Projects section...');
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
        break;
      case '/about':
        response.push('Redirecting viewport to About section...');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
        break;
      case '/matrix':
        response.push('Spawning glowing electric particle streams...');
        // Spawn 20 random particles in viewport
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
          size: Math.random() * 6 + 3,
          duration: Math.random() * 2 + 1.5,
        }));
        setActiveParticles(newParticles);
        setTimeout(() => setActiveParticles([]), 3500);
        break;
      case '/clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        response.push(`Unknown command: "${cmd}". Type "/help" to list instructions.`);
    }

    setTerminalLogs((prev) => [...prev, ...response]);
    setTerminalInput('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center px-6 pt-32 pb-16 lg:pb-12 overflow-x-hidden"
    >
      {/* Dynamic Matrix Particle Emitter */}
      <AnimatePresence>
        {activeParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: '100vh', scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              y: '-20vh', 
              x: `${p.x}vw`,
              scale: [0.5, 1.2, 0.8]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: p.duration, ease: 'easeOut' }}
            className="fixed pointer-events-none rounded-full bg-gradient-to-t from-accentBlue to-accentPurple blur-[2px] z-50"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Backing Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[300px] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[250px] rounded-full bg-accentBlue/5 blur-[110px] -z-10" />

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Text, CTAs, and Interactive Terminal Commander (7 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Active status pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 hover:bg-white/[0.05] transition-all duration-300 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold text-zinc-300 tracking-wider uppercase">
              Open to contracts & product building
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>

          {/* Rebranded Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-7xl tracking-tight text-white leading-[1.05]"
          >
            Sitansu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-purple-500 to-fuchsia-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              Sekhar
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-display font-medium text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl leading-relaxed"
          >
            Fullstack Web Developer & Problem Solver
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed font-light"
          >
            I build responsive, scalable, and visually modern web applications using React, Next.js, Firebase, and modern fullstack technologies.
          </motion.p>

          {/* Key tags row to break the standard template feel */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-5"
          >
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.04] text-zinc-400 text-xs">
              <Terminal className="w-3.5 h-3.5 text-accentBlue" />
              <span>Fullstack Specialist</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.04] text-zinc-400 text-xs">
              <Award className="w-3.5 h-3.5 text-accentPurple" />
              <span>SIH '24 Finalist</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.04] text-zinc-400 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>SaaS & AI Platforms</span>
            </div>
          </motion.div>

          {/* Interactive Command Terminal Widget */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-lg mt-8 rounded-2xl bg-zinc-950/90 border border-white/[0.06] p-4 font-mono text-[11px] text-zinc-400 shadow-2xl relative backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-3.5 right-4 flex space-x-1.5 z-10">
              <span className="w-2 h-2 rounded-full bg-red-500/40" />
              <span className="w-2 h-2 rounded-full bg-amber-500/40" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/40" />
            </div>

            <div className="flex items-center space-x-2 text-zinc-500 border-b border-white/[0.04] pb-2 mb-3">
              <Terminal className="w-3.5 h-3.5 text-accentBlue" />
              <span>terminal_commander.sh</span>
            </div>

            {/* Scrollable logs */}
            <div
              ref={logsContainerRef}
              className="h-28 overflow-y-auto space-y-1.5 pr-2 custom-scrollbar text-left scrollbar-thin scrollbar-thumb-zinc-800"
            >
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.startsWith('$') 
                      ? 'text-white font-semibold' 
                      : log.startsWith('  /') 
                      ? 'text-accentBlue' 
                      : 'text-zinc-500 font-light'
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(terminalInput);
              }}
              className="flex items-center space-x-2 border-t border-white/[0.04] pt-3 mt-3 text-white"
            >
              <span className="text-accentPurple font-bold">~</span>
              <div className="flex-1 flex items-center relative">
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type /help, /skills, /matrix..."
                  className="bg-transparent border-none outline-none w-full text-white placeholder-zinc-700 text-[11px] font-mono focus:ring-0 focus:border-transparent py-0 px-0"
                />
              </div>
              <button type="submit" className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shrink-0">
                <CornerDownLeft className="w-3 h-3 text-zinc-400" />
              </button>
            </form>

            {/* Clickable Quick Commander options */}
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dashed border-white/[0.04] text-[9px] text-zinc-500 items-center">
              <span className="mr-1 font-bold shrink-0">Quick runs:</span>
              <button
                type="button"
                onClick={() => handleCommand('/skills')}
                className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:text-white transition-all font-mono"
              >
                /skills
              </button>
              <button
                type="button"
                onClick={() => handleCommand('/matrix')}
                className="px-2 py-0.5 rounded-md bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all font-mono text-emerald-400"
              >
                /matrix
              </button>
              <button
                type="button"
                onClick={() => handleCommand('/projects')}
                className="px-2 py-0.5 rounded-md bg-accentBlue/5 border border-accentBlue/10 hover:bg-accentBlue/10 hover:text-accentBlue transition-all font-mono text-accentBlue"
              >
                /projects
              </button>
            </div>
          </motion.div>

          {/* Static buttons row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <a
              href="mailto:sitansupanda791@gmail.com"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex gap-2.5 items-center w-full sm:w-auto justify-center sm:justify-start">
              <a
                href="https://github.com/hellossp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-all duration-300 shrink-0"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-all duration-300 shrink-0"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Frame (5 columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full max-w-[360px] lg:max-w-none mx-auto aspect-[4/5] flex items-center justify-center"
        >
          {/* Backing glows */}
          <div className="absolute inset-2 bg-gradient-to-tr from-accentPurple/20 via-transparent to-accentBlue/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow" />

          {/* Main frame container */}
          <div className="relative w-full h-full rounded-[26px] p-2 bg-white/[0.01] border border-white/[0.06] backdrop-blur-xl shadow-2xl overflow-hidden group">
            
            {/* Profile Image with modern transitions */}
            <div className="w-full h-full rounded-[18px] overflow-hidden relative">
              <img
                src="/profile.png"
                alt="Sitansu Sekhar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 contrast-[1.05] brightness-[0.93] group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating details badge */}
            <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-zinc-950/85 border border-white/[0.08] backdrop-blur-md flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest block">Availability</span>
                <span className="text-xs text-emerald-400 font-semibold block mt-0.5">Open for Contracts</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest block">Core Focus</span>
                <span className="text-xs text-accentBlue font-semibold block mt-0.5">Fullstack Web Developer</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bouncing scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer hidden lg:flex"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-5 h-5 text-zinc-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
