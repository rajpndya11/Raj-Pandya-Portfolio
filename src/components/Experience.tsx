import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: 'Godrej Properties',
    role: 'Digital Project Management',
    duration: 'Present',
    impact: [
      'Worked on end-to-end user funnel to optimize the acquisition and conversion journey.',
      'Identified critical drop-offs and implemented solutions to improve conversion journeys.',
      'Improved CPL and overall campaign efficiency through data-driven experimentation.',
      'Collaborated with cross-functional teams (marketing, tech, sales) to drive growth initiatives.'
    ]
  },
  {
    company: 'Moksh Consultants',
    role: 'Growth Digital Marketing',
    duration: 'Previous',
    impact: [
      'Managed performance campaigns with a strong focus on measurable business outcomes.',
      'Improved lead quality and significantly reduced cost per acquisition (CPA).',
      'Used data insights and analytics to continuously optimize funnel performance.',
    ]
  },
  {
    company: 'Tata Cliq Luxury',
    role: 'Product & CRM Intern',
    duration: 'Previous',
    impact: [
      'Worked on retention strategies and lifecycle journeys for high-value users.',
      'Built targeted user communication flows to nurture leads and drive repeat purchases.',
      'Improved overall engagement metrics through detailed user segmentation.',
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Experience" 
          subtitle="A track record of driving measurable growth and building user-centric products."
        />
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-black/20 z-10">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <div className="text-accent font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm text-secondary px-3 py-1 rounded-full bg-primary/5 w-fit">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.impact.map((item, i) => (
                    <li key={i} className="text-sm text-secondary flex gap-3 leading-relaxed">
                      <span className="text-accent/50 mt-1.5 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
