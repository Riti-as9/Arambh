import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Reusable StatCounter component with animated count-up effect
// Props:
// - target: Number to count to
// - label: Text label for the statistic
// - prefix: Optional prefix (e.g., $, ₹)
// - suffix: Optional suffix (e.g., +, people)
const StatCounter = ({ target, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = Math.ceil(target / 50);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 30);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-marigold">
        {prefix}{count}{suffix}
      </div>
      <div className="font-body text-brand-charcoal opacity-70 mt-2">{label}</div>
    </motion.div>
  );
};

export default StatCounter;
