import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';

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

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace this with your Web3Forms Access Key from https://web3forms.com/
    // (It takes 10 seconds to get one sent to sitansupanda791@gmail.com)
    const ACCESS_KEY = "abadc18b-7389-42d8-88e5-b0e01f2ac477"; 

    if (!ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      // Fallback/Demo mode if key is not pasted yet
      setTimeout(() => {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          subject: `New Freelance Inquiry from ${form.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[40%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-accentPurple/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accentBlue/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accentBlue font-bold font-display">Get In Touch</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentPurple drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              Amazing Together
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Looking for internships, open-source collaborations, or freelance opportunities? Drop me a message!
          </p>
        </div>

        {/* Form and Contact Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Details Column - 5 cols */}
          <div className="lg:col-span-5 space-y-6">

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 flex items-start space-x-4 hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-accentBlue shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Location</span>
                <span className="text-sm font-semibold text-white mt-1 block">Berhampur, Odisha, India</span>
                <span className="text-xs text-zinc-400 font-light mt-0.5 block">Open to Internships & Remote Roles</span>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-start space-x-4 hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-accentPurple shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Email</span>
                <a href="mailto:sitansupanda791@gmail.com" className="text-sm font-semibold text-white mt-1 block hover:text-accentPurple transition-colors">
                  sitansupanda791@gmail.com
                </a>
                <span className="text-xs text-zinc-400 font-light mt-0.5 block">Active responses within 24h</span>
              </div>
            </motion.div>

            {/* Social Connect Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 flex items-center justify-between hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Social Networks</span>
                <span className="text-sm font-semibold text-white mt-1 block">Connect on Git & LinkedIn</span>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/hellossp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Form Column - 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/[0.05]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300"
                  />
                </div>
              </div>              {/* Inquiry Lead Qualifiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="projectType" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Inquiry Type</label>
                  <input
                    type="text"
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    placeholder="e.g. Internship, Freelance, Collab"
                    className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Est. Budget (if freelance)</label>
                  <input
                    type="text"
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    placeholder="e.g. $1,000, N/A, Flexible"
                    className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Est. Timeline</label>
                  <input
                    type="text"
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    placeholder="e.g. 3 weeks, Immediate, Flexible"
                    className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-2">Inquiry / Message Details</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, internship role, or how we can collaborate..."
                  className="w-full bg-[#121214] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex justify-center items-center space-x-2 px-8 py-4 rounded-xl font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Submitting Inquiry...</span>
                ) : status === 'success' ? (
                  <span className="flex items-center space-x-1.5 text-emerald-600 font-bold">
                    <Sparkles className="w-4.5 h-4.5 animate-pulse" />
                    <span>Inquiry Submitted!</span>
                  </span>
                ) : status === 'error' ? (
                  <span className="flex items-center space-x-1.5 text-red-500 font-bold">
                    <span>Submission Failed. Try Again!</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
