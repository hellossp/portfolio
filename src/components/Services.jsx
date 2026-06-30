import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'MVP & Startup Prototypes',
    desc: 'Launch your product to market rapidly. As a student builder, I create functional prototypes that validate your ideas with real users using lightweight, modern setups.',
    features: ['Rapid prototyping loops', 'Authentication & database setup', 'Scale-ready frontends'],
    color: 'from-emerald-400 to-teal-500',
    icon: <Rocket className="w-6 h-6 text-emerald-400" />
  },
  {
    title: 'Full-Stack Web Apps',
    desc: 'Build responsive web applications with interactive dashboards, database integrations, and clean state management using React, Next.js, and Node.js.',
    features: ['Next.js App Router & SSR', 'Role-based access controls', 'Real-time database sync'],
    color: 'from-teal-400 to-emerald-600',
    icon: <Globe className="w-6 h-6 text-teal-400" />
  },
  {
    title: 'API & System Integrations',
    desc: 'Connect third-party systems seamlessly, including secure payment gateways, database hooks, document processing, and cloud function integrations.',
    features: ['Secure checkout processors', 'Document processing pipelines', 'Robust webhook handlers'],
    color: 'from-emerald-500 to-teal-600',
    icon: <Cpu className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Websites for Local Brands',
    desc: 'Custom web development and landing pages for local brands (gyms, cafes, clinics, institutes) looking to build an online presence without high agency fees.',
    features: ['Local SEO & conversion layouts', 'Booking page integrations', 'Mobile-first responsive layouts'],
    color: 'from-teal-500 to-emerald-400',
    icon: <Zap className="w-6 h-6 text-teal-500" />
  }
];

function ServiceCard({ service, index }) {
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl glass-card p-8 flex flex-col justify-between border border-white/[0.04] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02]"
    >
      {/* Spotlight cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <span className={`text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
            Package {index + 1}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-white tracking-wide">{service.title}</h3>
        <p className="text-xs md:text-sm text-zinc-400 font-light mt-3 leading-relaxed">{service.desc}</p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/[0.04]">
        <ul className="space-y-2.5">
          {service.features.map((feat, fidx) => (
            <li key={fidx} className="flex items-center space-x-2 text-xs text-zinc-300 font-light">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-[20%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-accentBlue/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-accentPurple/5 blur-[100px] -z-10" />

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Specialties</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              Freelance Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 max-w-sm font-light leading-relaxed">
            From academic projects to freelance solutions, I build functional applications while focusing on clean code and modern tech stacks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
