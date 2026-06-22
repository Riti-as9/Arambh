import React from 'react';
import { motion } from 'framer-motion';

// Admin Stat Card component with animated entrance
// Props:
// - title: Card title
// - value: Number/value to display
// - icon: Optional icon component
// - color: Primary color for card accent
// - delay: Animation delay in seconds
const AdminStatCard = ({ title, value, icon, color = 'marigold', delay = 0 }) => {
  // Map color names to Tailwind color classes
  const colorClasses = {
    marigold: 'bg-brand-marigold/10 text-brand-marigold',
    plum: 'bg-brand-plum/10 text-brand-plum',
    turmeric: 'bg-brand-turmeric/10 text-brand-turmeric',
    teal: 'bg-brand-teal/10 text-brand-teal',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-inter text-brand-charcoal/60 text-sm mb-1">{title}</p>
          <p className="font-heading text-3xl font-bold text-brand-charcoal">{value}</p>
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center`}>
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminStatCard;
