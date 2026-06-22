import React from 'react';
import { motion } from 'framer-motion';

// Reusable ProgressBar component
// Props:
// - current: Current progress value
// - goal: Target value
// - label: Optional label for the progress bar
const ProgressBar = ({ current, goal, label }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="w-full">
      {label && <div className="flex justify-between items-center mb-2 font-inter">
        <span className="font-semibold text-brand-charcoal">{label}</span>
        <span className="text-brand-plum font-bold">{current} / {goal}</span>
      </div>}
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-brand-marigold to-brand-turmeric rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
