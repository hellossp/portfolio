import { motion } from 'framer-motion';
import { Star, Quote, UserRound } from 'lucide-react';

const testimonials = [
  {
    quote: "Before Sitansu built the routines engine, scheduling sessions across three centers was a major logistical bottleneck. Now, it generates conflict-free schedules in under a minute. Absolutely life-saving.",
    author: "Prasanna Kumar",
    role: "Director, GenX Coaching Centers",
    project: "GenX Routine Automation System",
    stars: 5
  },
  {
    quote: "Sitansu delivered a clean, real-time workforce portal. The live Firestore listener updates sync allocations across worker terminals instantly. His technical advisory helped secure our data flow security.",
    author: "Operational Lead",
    role: "RINL Scheduler Project",
    project: "RINL Shift Allocation System",
    stars: 5
  },
  {
    quote: "We needed a custom operations portal fast. Sitansu delivered a high-performance admin dashboard with detailed check-in verification and cloud backup streams on-schedule. Excellent developer relationship.",
    author: "SaaS Platform Founder",
    role: "Operations Startup Client",
    project: "Workforce & Activity Tracker",
    stars: 5
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative gradient backing */}
      <div className="absolute top-[40%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-accentBlue/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-accentPurple/5 blur-[100px] -z-10" />

      {/* Grid line separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Client Success</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              Client Testimonials
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
            Feedback from founders and directors on systems designed to streamline daily business workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.01] transition-all duration-300 relative group"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
                <Quote className="w-24 h-24 text-white" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: test.stars }).map((_, sidx) => (
                    <Star key={sidx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-zinc-300 font-light leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author & Client Meta */}
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-zinc-500">
                  <UserRound className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{test.author}</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">
                    {test.role}
                  </p>
                  <span className="text-[9px] text-accentBlue font-semibold block mt-0.5">
                    {test.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
