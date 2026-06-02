import { motion } from 'framer-motion';
import { Coffee, Compass, Cpu, HelpCircle, LayoutGrid, Rocket, SearchCheck } from 'lucide-react';

const steps = [
  {
    phase: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Scope Alignment',
    desc: 'We start with a detailed consultation call to outline your business requirements, define key feature roadmaps, lock in the timeline budget, and pick the best stack.',
    icon: <Coffee className="w-5 h-5 text-accentBlue" />,
    color: 'border-accentBlue/20 hover:border-accentBlue/40 text-accentBlue'
  },
  {
    phase: '02',
    title: 'Architecture & UX',
    subtitle: 'System Blueprint',
    desc: 'I draft the database schemas, design modular APIs, map component interfaces, and build high-fidelity layout wireframes to establish a concrete visual roadmap.',
    icon: <Compass className="w-5 h-5 text-accentPurple" />,
    color: 'border-accentPurple/20 hover:border-accentPurple/40 text-accentPurple'
  },
  {
    phase: '03',
    title: 'Iterative Development',
    subtitle: 'Agile Coding Cycles',
    desc: 'Working in weekly sprints, I deliver incremental builds to a staging server. You see the product come alive and provide direct feedback at every stage.',
    icon: <Cpu className="w-5 h-5 text-teal-400" />,
    color: 'border-teal-500/20 hover:border-teal-500/40 text-teal-400'
  },
  {
    phase: '04',
    title: 'Optimization & QA',
    subtitle: 'Polishing & Auditing',
    desc: 'I perform thorough testing across mobile and desktop devices. This includes bundle optimization, PageSpeed SEO tuning, and Firestore security rules verification.',
    icon: <SearchCheck className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400'
  },
  {
    phase: '05',
    title: 'Launch & Hand-off',
    subtitle: 'Production Release',
    desc: 'Your application is deployed to Vercel/AWS. I set up analytics, connect custom domains, and deliver complete documentation for clean system ownership.',
    icon: <Rocket className="w-5 h-5 text-emerald-500" />,
    color: 'border-emerald-600/20 hover:border-emerald-600/40 text-emerald-500'
  }
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="process" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Backing Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[500px] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accentPurple font-bold font-display">Workflow</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            My Process
          </h2>
          <p className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
            A structured, collaborative approach to delivering high-performance software on time and within scope.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Dot with Phase Number */}
              <div className="absolute -left-[45px] md:-left-[73px] top-1.5 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-zinc-400 group-hover:border-zinc-500 transition-colors duration-300 shadow-xl">
                {step.phase}
              </div>

              {/* Step Card */}
              <div className={`glass-card rounded-3xl p-6 md:p-8 border border-white/[0.04] transition-all duration-300 hover:bg-white/[0.01] hover:border-white/[0.1] relative overflow-hidden`}>
                {/* Background soft color spotlight */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/[0.01] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-accentBlue transition-colors duration-300">
                        {step.title}
                      </h3>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold block mt-0.5">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
