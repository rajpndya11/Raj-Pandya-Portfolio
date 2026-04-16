import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Let's build impactful products." 
              subtitle="Currently open for new opportunities in Product Management roles. Let's connect and discuss how I can add value to your team."
            />
            
            <div className="flex flex-col gap-6 mt-8">
              <a 
                href="mailto:rajpandya1131@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-border hover:border-accent/50 transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary">Email me</p>
                  <p className="text-lg font-medium text-primary">rajpandya1131@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rajpandya-product-management/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-border hover:border-accent/50 transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary">Connect on LinkedIn</p>
                  <p className="text-lg font-medium text-primary">rajpandya.linkedin.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-10 rounded-3xl border border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send a message</h3>
            
            {formState === 'success' ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary">Message Sent!</h4>
                <p className="text-secondary">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-4 px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-background font-semibold py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  {!formState && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
