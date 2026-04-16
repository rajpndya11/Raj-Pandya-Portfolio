import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 relative border-y border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/50">
          {[
            { value: 24, suffix: '%', label: 'Conversion Uplift' },
            { value: 15, suffix: '%', prefix: '-', label: 'CPL Reduction' },
            { value: 35, suffix: '%', prefix: '+', label: 'Email Open Rate' },
            { value: 3, suffix: 'x', label: 'Experiment Velocity' },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index === 0 ? '' : 'pl-8 md:pl-12'}`}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2 tracking-tighter">
                <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </div>
              <div className="text-sm md:text-base text-secondary font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
