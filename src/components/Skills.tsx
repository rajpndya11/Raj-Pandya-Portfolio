import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Filter, 
  FlaskConical, 
  BarChart3, 
  BrainCircuit, 
  Wrench,
  LineChart,
  Lightbulb,
  Bot,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: "Product Management",
    skills: [
      { icon: Target, name: 'Product Strategy' },
      { icon: TrendingUp, name: 'Roadmapping & Prioritization' },
      { icon: Users, name: 'User Research & Problem Framing' },
      { icon: FlaskConical, name: 'Experimentation (A/B Testing)' },
      { icon: Filter, name: 'Funnel & Conversion Optimization' },
      { icon: Users, name: 'Stakeholder Collaboration' },
    ]
  },
  {
    title: "Analytics & Data",
    skills: [
      { icon: BarChart3, name: 'Product Analytics' },
      { icon: LineChart, name: 'Data Interpretation' },
      { icon: Target, name: 'Metrics Thinking (Retention, Conversion, CAC, LTV)' },
      { icon: Layers, name: 'Prompt Engineering' },
    ]
  },
  {
    title: "AI & Modern Product",
    skills: [
      { icon: BrainCircuit, name: 'AI Product Thinking' },
      { icon: Lightbulb, name: 'Personalization Systems' },
      { icon: Target, name: 'Predictive User Behavior' },
      { icon: Bot, name: 'Automation & AI-driven workflows' },
    ]
  },
  {
    title: "Tools",
    skills: [
      { icon: BarChart3, name: 'Mixpanel / GA4' },
      { icon: Wrench, name: 'Excel / Google Sheets' },
      { icon: Wrench, name: 'Notion / Jira' },
      { icon: Wrench, name: 'Figma / Canva' },
      { icon: Bot, name: 'AI tools & Automation' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive toolkit spanning product management, data analytics, and AI."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-border"
            >
              <h3 className="text-xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary">
                      <skill.icon size={16} />
                    </div>
                    <span className="text-sm text-secondary font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
