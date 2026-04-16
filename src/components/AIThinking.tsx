import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Sparkles, Database, GitMerge } from 'lucide-react';

export default function AIThinking() {
  return (
    <section id="ai-thinking" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="AI Product Philosophy" 
          subtitle="How I think about integrating AI to solve real user problems, not just chasing hype."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "AI for Personalization",
              desc: "Moving beyond static segments. I leverage AI to create dynamic, 1:1 user experiences that adapt in real-time based on behavioral signals and intent."
            },
            {
              icon: Database,
              title: "Predictive User Journeys",
              desc: "Anticipating user needs before they arise. By analyzing historical data, we can predict churn risks or high-intent actions and intervene proactively."
            },
            {
              icon: GitMerge,
              title: "Automating Funnel Decisions",
              desc: "Removing friction at scale. I look for opportunities to use AI to automate complex decision-making within the funnel, reducing cognitive load for the user."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl glass border border-border hover:border-accent/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
