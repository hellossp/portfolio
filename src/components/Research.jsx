import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Terminal, Cpu, FileText, ArrowRight } from 'lucide-react';

export default function Research() {
  const [activeTab, setActiveTab] = useState('raw'); // raw or refined

  const rawCode = `// TO DO: implement sum
function calcTotal(items) {
  return items.reduce((a, b) => a + b.price, 0);
}`;

  const refinedCode = `/**
 * Calculates the total price of all items in the array.
 * @param {Array<{price: number}>} items - List of purchase items
 * @returns {number} Sum of all item prices
 */
function calcTotal(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((total, item) => total + (item?.price || 0), 0);
}`;

  return (
    <section id="research" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Glow behind */}
      <div className="absolute top-[30%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-accentBlue/5 blur-[120px] -z-10" />

      {/* Grid line separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accentPurple font-bold font-display">Publications</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              Academic Research
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
            Exploring deep learning models, natural language processing, and automated software development.
          </p>
        </div>

        {/* Layout split: Details (Left) and Editor Mockup (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column - 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/[0.05]"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <Brain className="w-5 h-5 text-accentPurple" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">NLP & Code Synthesis</span>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-snug">
                Auto Comment Generation & Code Refinement using Transformer-Based Models
              </h3>

              <p className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                This study explores leveraging sequence-to-sequence neural network architectures (like Google's T5 and Salesforce's CodeT5) to automatically understand React & JavaScript syntax. The system produces clean, developer-friendly JSDoc document comments and corrects performance anti-patterns.
              </p>

              {/* Research Bullets */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accentPurple" />
                  <span className="text-xs text-zinc-300">CodeT5 & T5 finetuning pipelines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
                  <span className="text-xs text-zinc-300">AI-assisted structural code refinement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-zinc-300">React context & hook optimizations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
              <span className="text-[10px] text-zinc-400 font-semibold bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-full">
                T5 Transformers
              </span>
              <span className="text-[10px] text-zinc-400 font-semibold bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-full">
                CodeT5
              </span>
              <span className="text-[10px] text-zinc-400 font-semibold bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-full">
                Sequence-to-Sequence
              </span>
            </div>
          </motion.div>

          {/* Interactive Code Editor Mockup - 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-zinc-950 border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-2xl relative min-h-[350px]"
          >
            {/* Background glowing line */}
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-accentPurple/20 via-transparent to-transparent" />

            {/* IDE Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 relative z-10">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-accentBlue" />
                <span className="text-[10px] font-semibold text-zinc-400 font-mono">transformer_refine.py</span>
              </div>
              <div className="flex space-x-1.5">
                <button
                  onClick={() => setActiveTab('raw')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-mono transition-all duration-300 ${
                    activeTab === 'raw'
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Raw Input
                </button>
                <button
                  onClick={() => setActiveTab('refined')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-mono transition-all duration-300 ${
                    activeTab === 'refined'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  CodeT5 Output
                </button>
              </div>
            </div>

            {/* Editor Body */}
            <div className="flex-1 font-mono text-[11px] leading-relaxed relative z-10 overflow-x-auto whitespace-pre">
              {activeTab === 'raw' ? (
                <motion.div
                  key="raw"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-zinc-400"
                >
                  {rawCode.split('\n').map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className="w-6 text-zinc-700 select-none text-right pr-3">{idx + 1}</span>
                      <span className={line.startsWith('//') ? 'text-red-400/80 italic' : 'text-zinc-300'}>
                        {line}
                      </span>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="refined"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-zinc-400"
                >
                  {refinedCode.split('\n').map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className="w-6 text-zinc-700 select-none text-right pr-3">{idx + 1}</span>
                      <span className={
                        line.trim().startsWith('/**') || line.trim().startsWith('*') || line.trim().startsWith('*/')
                          ? 'text-emerald-400 italic'
                          : line.includes('calcTotal')
                          ? 'text-accentBlue'
                          : 'text-zinc-300'
                      }>
                        {line}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Editor Footer Status */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono relative z-10">
              <div className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-accentPurple" />
                <span>Model: CodeT5-base-multi</span>
              </div>
              <span className="text-zinc-600">UTF-8 | LF</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
