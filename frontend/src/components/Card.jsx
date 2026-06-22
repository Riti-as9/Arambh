import React from 'react';
import { motion } from 'framer-motion';

// Reusable Card component
// Props:
// - children: Card content
// - className: Additional classes
const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
      className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
