import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Responsive Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-brand-ivory shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-3xl font-bold text-brand-marigold">Arambh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/about') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              About
            </Link>
            <Link
              to="/volunteer"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/volunteer') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/donate') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              Donate
            </Link>
            <Link
              to="/help-request"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/help-request') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              Request Help
            </Link>
            <Link
              to="/contact"
              className={`font-inter font-medium transition-colors duration-300 ${isActive('/contact') ? 'text-brand-marigold' : 'text-brand-charcoal hover:text-brand-marigold'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6 text-brand-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/about') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                About
              </Link>
              <Link
                to="/volunteer"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/volunteer') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                Volunteer
              </Link>
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/donate') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                Donate
              </Link>
              <Link
                to="/help-request"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/help-request') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                Request Help
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block font-inter font-medium py-2 ${isActive('/contact') ? 'text-brand-marigold' : 'text-brand-charcoal'}`}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
