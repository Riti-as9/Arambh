import React from 'react';
import { motion } from 'framer-motion';

// Reusable Button component with multiple variants and sizes
// Props:
// - variant: "primary" (marigold), "secondary" (plum), "outline" (border only)
// - size: "sm", "md", "lg"
// - disabled: boolean
// - fullWidth: boolean
// - onClick, children, className
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses = 'rounded-2xl font-inter font-semibold transition-all duration-300 ease-in-out';

  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-brand-marigold text-brand-charcoal hover:bg-brand-turmeric shadow-lg hover:shadow-xl',
    secondary: 'bg-brand-plum text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-brand-marigold text-brand-marigold hover:bg-brand-marigold hover:text-brand-charcoal'
  };

  // Size-specific classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
