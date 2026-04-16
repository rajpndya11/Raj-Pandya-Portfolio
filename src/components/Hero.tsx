import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-secondary mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           Open to PM & APM Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="block text-secondary text-2xl md:text-3xl mb-4 font-medium">Raj Pandya</span>
            <span className="block text-primary mb-2">AI & Growth</span>
            <span className="text-gradient">Product Manager</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium max-w-xl mb-4 leading-snug">
            Scaling Products Through Data & AI.
          </p>

          <p className="text-lg text-secondary max-w-xl mb-10 leading-relaxed">
            I combine product thinking, data, and AI to design and optimize high-impact user journeys.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-xl font-medium hover:opacity-90 transition-all"
            >
              View Case Studies
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:bg-surface-hover transition-all border border-border"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] p-2 rounded-[2rem] rounded-tr-[6rem] rounded-bl-[6rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-2xl backdrop-blur-sm"
        >
          <div className="relative w-full h-full rounded-[1.5rem] rounded-tr-[5.5rem] rounded-bl-[5.5rem] overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-transparent to-primary/30 mix-blend-overlay z-10" />
            <img 
              src="406364f8-b08c-4da9-b88a-acb647a1707f.jfif" 
              alt="Raj Pandya" 
              className="w-full h-full object-contain object-center bg-black/5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 glass px-5 py-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Product Management</p>
                <p className="text-xs text-secondary mt-0.5">Strategy, execution & outcomes</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
