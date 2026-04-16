import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Funnel Optimization',
    category: 'Growth & Conversion',
    problem: 'High drop-offs in the lead qualification stage, leading to inefficient ad spend.',
    hypothesis: 'Simplifying the form structure and adding progressive profiling will reduce cognitive load and increase completion rates.',
    actions: 'Redesigned the multi-step form, implemented A/B testing on CTA placement, and integrated behavioral tracking to identify micro-frictions.',
    beforeAfter: {
      before: 'High drop-offs in lead stage',
      after: 'Improved conversion rate and reduced acquisition cost'
    },
    metrics: '24% increase in form completion rate, 15% reduction in Cost Per Lead (CPL).',
    learnings: 'Users prefer micro-commitments over single large forms. Contextual micro-copy significantly impacts conversion.'
  },
  {
    title: 'Retention Strategy',
    category: 'Retention & LTV',
    problem: 'Low repeat engagement and high churn rate after the first purchase/interaction.',
    hypothesis: 'Segmenting users based on behavioral intent and predictive lead scoring will improve engagement.',
    actions: 'Built a lead scoring model using historical CRM data. Deployed personalized email sequences triggered by specific user actions.',
    beforeAfter: {
      before: 'Low repeat engagement',
      after: 'Increased retention and engagement rates'
    },
    metrics: '35% increase in email open rates, 20% boost in click-to-open rate (CTOR).',
    learnings: 'Timing is as important as content. Trigger-based communication vastly outperforms scheduled blasts.'
  },
  {
    title: 'AI Concept Project',
    category: 'AI Product Strategy',
    problem: 'Users struggle to find relevant products in a massive catalog, leading to choice paralysis.',
    hypothesis: 'An LLM-powered conversational interface will help users articulate their needs better than traditional filters.',
    actions: 'Designed a product spec for an AI assistant that asks clarifying questions and ranks results based on semantic search rather than exact match.',
    beforeAfter: {
      before: 'High bounce rate on search pages',
      after: 'More personalized and efficient discovery process'
    },
    metrics: 'Projected to increase search-to-lead conversion by 30% based on prototype testing.',
    learnings: 'Conversational UI requires robust fallback mechanisms. Transparency in how AI selects recommendations builds trust.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Case Studies" 
          subtitle="Deep dives into how I approach problems, formulate hypotheses, and drive measurable results."
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl border border-border overflow-hidden flex flex-col group hover:border-accent/50 transition-colors"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-medium text-accent mb-3 tracking-wider uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-5 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Problem</h4>
                    <p className="text-sm text-secondary leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Hypothesis</h4>
                    <p className="text-sm text-secondary leading-relaxed">{project.hypothesis}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Actions Taken</h4>
                    <p className="text-sm text-secondary leading-relaxed">{project.actions}</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <div className="mb-2">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Before:</span>
                      <p className="text-sm text-secondary">{project.beforeAfter.before}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider">After:</span>
                      <p className="text-sm text-primary">{project.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/5 border-t border-border mt-auto">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-1 flex items-center gap-2">
                    <ArrowUpRight size={16} />
                    Results
                  </h4>
                  <p className="text-sm text-primary font-medium">{project.metrics}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Key Learning</h4>
                  <p className="text-sm text-secondary italic">"{project.learnings}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
