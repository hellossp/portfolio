export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.05] overflow-hidden bg-zinc-950/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display font-bold text-base tracking-tight text-white">
            Sitansu<span className="text-accentBlue">.dev</span>
          </span>
          <p className="text-[10px] text-zinc-500 font-light mt-1">
            © {currentYear} Sitansu Sekhar Panda. All rights reserved.
          </p>
        </div>

        {/* Tech Label */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-[10px] text-zinc-500 font-mono">
          <span>Built with React + Vite + Tailwind CSS</span>
          <span className="text-zinc-600 mt-0.5">Animated using Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
