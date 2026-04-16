import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="From Growth to Product Management" 
          subtitle="My journey into product management has shaped how I approach building products—focusing on user problems, data-driven decisions, and scalable growth."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-secondary text-lg leading-relaxed"
          >
            <p>
              I started my career in digital marketing, obsessing over funnels, acquisition costs, and conversion rates. I quickly realized that the best marketing is a great product. This realization drove my transition into Product Management.
            </p>
            <p>
              Today, I operate at the intersection of <strong className="text-primary">Product Thinking, Data, and AI</strong>. I don't just build features; I build growth engines. I leverage data analytics, A/B testing, and AI-driven personalization to optimize user journeys and maximize retention.
            </p>
            <p>
              Whether it's reducing CPL through better funnel design or increasing LTV via predictive CRM strategies, my focus is always on measurable business impact.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Philosophy</h3>
            <ul className="space-y-4">
              {[
                { title: "Problem Solving First", desc: "Deeply understanding the user's pain point before jumping to solutions." },
                { title: "Data-Driven Decisions", desc: "Every decision should be backed by quantitative or qualitative data." },
                { title: "Experimentation Mindset", desc: "The faster we test, the faster we learn and grow." },
                { title: "AI as an Enabler", desc: "AI isn't a feature; it's a tool to solve user problems faster and better." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary">{item.title}</h4>
                    <p className="text-sm text-secondary mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
