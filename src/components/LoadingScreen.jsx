import { motion } from 'framer-motion';

export default function LoadingScreen({ finishLoading }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      onAnimationComplete={finishLoading}
      className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-darkBg overflow-hidden"
    >
      {/* Glow spot */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accentBlue/10 blur-[80px]" />

      <div className="text-center relative z-10">
        {/* Animated outer circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative inline-flex items-center justify-center p-6 mb-4"
        >
          {/* Pulsing ring */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border border-white/5 bg-white/[0.01]"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="absolute inset-1 rounded-full border-t border-accentBlue/40 border-r border-transparent"
          />

          <span className="font-display font-bold text-2xl tracking-tight text-white select-none">
            Sitansu<span className="text-accentBlue">.dev</span>
          </span>
        </motion.div>

        {/* Loading status bar */}
        <div className="w-32 h-[1px] bg-zinc-800 mx-auto rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accentPurple to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
