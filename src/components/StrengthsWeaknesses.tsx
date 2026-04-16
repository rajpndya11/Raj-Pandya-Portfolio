import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const strengths = [
  "Strong analytical thinking",
  "Experimentation mindset",
  "Ownership and problem-solving",
  "Ability to connect data with product decisions"
];

const weaknesses = [
  "Tendency to go deep into data before decisions",
  "Still building advanced technical/AI depth",
  "Learning to balance speed vs perfection"
];

export default function StrengthsWeaknesses() {
  return (
    <section className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Self-Awareness" 
          subtitle="Honest reflection on where I excel and where I am actively growing."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              Strengths
            </h3>
            </div>
            
            <ul className="space-y-4">
              {strengths.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                <AlertCircle size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Areas of Growth</h3>
            </div>
            
            <ul className="space-y-4">
              {weaknesses.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
