import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Rashtriya Ispat Nigam Limited (RINL)',
    role: 'Web Application Developer Intern',
    period: 'Summer Internship',
    type: 'Internship',
    color: 'accentBlue',
    bullets: [
      'Engineered a complete worker scheduling and shift allocation system using React.js and Firebase.',
      'Implemented real-time database listener updates to synchronize allocations across worker terminals instantly.',
      'Reduced schedule allocation errors by 35% through algorithmic collision checks.',
      'Integrated Secure Firebase Authentication and optimized overall page performance (reducing load latencies by 40%).'
    ]
  },
  {
    company: 'SANKALP Fest',
    role: 'Technical Lead',
    period: '2024 - 2025',
    type: 'Leadership',
    color: 'accentPurple',
    bullets: [
      'Led a cross-functional technical team of 7 developers in designing and launching the official college festival web app.',
      'Configured server scaling, handling concurrent traffic bursts from over 5,000 active student users.',
      'Created a responsive, content-rich event schedule, registration nodes, and live scoring portals.'
    ]
  },
  {
    company: 'Data Science Club',
    role: 'Vice President',
    period: '2023 - 2024',
    type: 'Leadership',
    color: 'emerald',
    bullets: [
      'Organized multiple technical workshops, code camps, and interactive ideathons for 200+ students.',
      'Designed curriculums and taught introductory sessions on data operations, model building, and React development.',
      'Managed club partnerships and worked with academic advisors to secure event funding.'
    ]
  }
];

export default function Experience() {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accentBlue/5 blur-[120px] -z-10" />

      {/* Grid line separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-accentPurple font-bold font-display">Timeline</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Professional Experience
          </h2>
        </div>

        {/* Experience List */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12"
        >
          {experiences.map((exp, idx) => {
            let colorClass = 'bg-accentBlue';
            let textClass = 'text-accentBlue border-accentBlue/20';
            if (exp.color === 'accentPurple') {
              colorClass = 'bg-accentPurple';
              textClass = 'text-accentPurple border-accentPurple/20';
            } else if (exp.color === 'emerald') {
              colorClass = 'bg-emerald-500';
              textClass = 'text-emerald-400 border-emerald-500/20';
            }

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full ${colorClass} border-4 border-darkBg shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:scale-125 transition-transform duration-300`} />

                {/* Card Container */}
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(124,58,237,0.03)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <span className={`px-2 py-0.5 rounded-full bg-white/[0.03] border text-[9px] font-semibold uppercase tracking-wider ${textClass}`}>
                        {exp.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-2 group-hover:text-accentBlue transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <h4 className="text-sm font-medium text-zinc-300 mt-0.5">{exp.role}</h4>
                    </div>

                    <div className="flex items-center space-x-2 text-zinc-400 text-xs md:text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mt-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${exp.color === 'accentBlue' ? 'text-accentBlue' : exp.color === 'accentPurple' ? 'text-accentPurple' : 'text-emerald-400'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
