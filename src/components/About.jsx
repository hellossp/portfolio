import { motion } from 'framer-motion';
import { BookOpen, Award, Sparkles, Code2, Heart, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Introduction</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              My Story & Journey
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-md font-light leading-relaxed">
            A look into my journey as a student developer, building real-world projects, and leading university tech communities.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Story - Span 2 cols */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[80px] -z-10 group-hover:bg-accentPurple/10 transition-colors duration-500" />
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <Sparkles className="w-5 h-5 text-accentPurple" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">Software Engineer & Builder</h3>
              </div>
              
              <h4 className="text-xl md:text-2xl font-display text-zinc-200 leading-snug">
                I am a passionate <span className="text-white font-semibold">CS student</span> and <span className="text-white font-semibold">Web Developer</span> specializing in building modern web applications, learning system design, and exploring new technologies.
              </h4>
              
              <p className="mt-6 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                My work lies at the intersection of learning modern engineering and building beautiful interfaces. I love taking projects from concept to working prototypes. Currently, I am a Computer Science undergraduate focused on frontend design, API development, and web fundamentals. I am also the creator of several personal projects including <a href="https://www.instantpages.site/" target="_blank" rel="noopener noreferrer" className="text-accentBlue hover:text-emerald-400 transition-colors font-medium underline underline-offset-4 decoration-emerald-500/30">Instant Pages</a>, a speed-optimized page template experiment.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.05] grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">Primary Focus</span>
                <span className="text-xs md:text-sm text-zinc-300 font-medium mt-1 block">SaaS, AI Integrations, Web Apps</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">Architecture</span>
                <span className="text-xs md:text-sm text-zinc-300 font-medium mt-1 block">Component APIs & Performant Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accentBlue/5 rounded-full blur-[60px] -z-10 group-hover:bg-accentBlue/10 transition-colors duration-500" />
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <Code2 className="w-5 h-5 text-accentBlue" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">Principles</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accentBlue mt-2" />
                  <div>
                    <span className="text-sm font-medium text-white block">Speed & Performance</span>
                    <p className="text-xs text-zinc-400 mt-0.5">Optimized load times and fluid responsive layouts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accentPurple mt-2" />
                  <div>
                    <span className="text-sm font-medium text-white block">Aesthetic Integrity</span>
                    <p className="text-xs text-zinc-400 mt-0.5">High attention to detail, micro-animations, and alignment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <div>
                    <span className="text-sm font-medium text-white block">Product Thinking</span>
                    <p className="text-xs text-zinc-400 mt-0.5">Building code that directly empowers users and solves real problems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-zinc-500 font-light italic">
              "Simple is hard, but premium is simple."
            </div>
          </motion.div>

          {/* Engineering Leadership - Span 1 col */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] bg-emerald-500/5 rounded-full blur-[50px] -z-10 group-hover:bg-emerald-500/10 transition-colors duration-500" />
            
            <div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase inline-block mb-4">
                Engineering Leadership
              </span>
              <h3 className="font-display font-bold text-xl text-white">SANKALP Web Portal</h3>
              <span className="text-xs text-zinc-400 font-medium block mt-1">Technical Team Lead</span>
              
              <p className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Managed a remote 7-engineer technical squad to architect and launch a scale-ready college festival web platform. Successfully supported and routed live traffic spike bursts for 5,000+ active student registrants.
              </p>
            </div>
            
            <div className="mt-6 flex items-center space-x-2 text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform duration-300">
              <span>Led 7 developers to launch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Technical Consulting - Span 2 cols */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-accentBlue/5 rounded-full blur-[70px] -z-10 group-hover:bg-accentBlue/10 transition-colors duration-500" />
            
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-accentBlue/10 border border-accentBlue/20 text-accentBlue text-[10px] font-semibold tracking-wider uppercase inline-block mb-4">
                    Technical Advisory
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">Data Science & Development Club</h3>
                  <span className="text-xs text-zinc-400 font-medium block mt-1">Vice President</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <Users className="w-5 h-5 text-accentBlue" />
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Chaired program designs, organized hackathons, and mentored startup-focused builders on APIs, DB modeling, and web architectures. Proven ability to translate complex technical jargon into clear, actionable client business strategies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500 font-light">
              <span>Mentored 200+ Developers</span>
              <span className="text-accentBlue font-medium">Active Community Advising</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
