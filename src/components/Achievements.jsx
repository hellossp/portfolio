import { motion } from 'framer-motion';
import { Award, Trophy, MapPin, Users2, Sparkles } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[500px] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />

      {/* Grid line separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Honors</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Key Achievements
          </h2>
        </div>

        {/* Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.02] relative overflow-hidden group shadow-2xl"
        >
          {/* Animated floating particles */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-accentPurple/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-accentBlue/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Trophy Illustration / Icon */}
            <div className="w-20 h-20 shrink-0 mx-auto md:mx-0 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accentPurple/20 to-accentBlue/20 opacity-30 rounded-2xl" />
              <Trophy className="w-10 h-10 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-float" />
            </div>

            {/* Content info */}
            <div className="flex-1 text-center md:text-left">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                Hackathon Excellence
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-3">
                Smart India Hackathon 2024 Finalist
              </h3>
              <p className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Developed an AI-based platform tailored for the <span className="text-white font-medium">Government of Rajasthan</span>. Evaluated and placed in the top tier nationwide, demonstrating product capability under intense development schedules.
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.05]">
            <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-center">
              <Users2 className="w-4 h-4 text-accentBlue mx-auto mb-1.5" />
              <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Competition</span>
              <span className="text-sm font-bold text-white mt-0.5 block font-display">400+ Submissions</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-center">
              <Award className="w-4 h-4 text-accentPurple mx-auto mb-1.5" />
              <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Standing</span>
              <span className="text-sm font-bold text-white mt-0.5 block font-display">Top 5 Nationwide</span>
            </div>

            <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-center flex flex-col justify-center">
              <div className="flex items-center justify-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-zinc-300 font-semibold">Govt. of Rajasthan</span>
              </div>
              <span className="text-[9px] text-zinc-500 uppercase block font-medium mt-1">Platform client</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
