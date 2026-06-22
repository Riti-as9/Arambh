import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: 'Overview', icon: '📊' },
    { path: '/admin/volunteers', label: 'Volunteers', icon: '👥' },
    { path: '/admin/donations', label: 'Donations', icon: '💰' },
    { path: '/admin/help-requests', label: 'Help Requests', icon: '📋' },
  ];

  const isActive = (path) => location.pathname === path;

  // Desktop sidebar
  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-brand-teal text-white">
      {/* Logo */}
      <div className="p-6 border-b border-brand-teal/50">
        <Link
          to="/"
          onClick={onClose}
          className="font-heading text-2xl font-bold text-white"
        >
          Arambh
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-xl font-inter transition-all ${
              isActive(item.path)
                ? 'bg-brand-marigold text-brand-charcoal font-semibold'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom info */}
      <div className="p-4 border-t border-brand-teal/50">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center px-4 py-3 rounded-xl font-inter text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          <span className="mr-3 text-lg">←</span>
          Back to Website
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar (always visible on large screens) */}
      <div className="hidden lg:block w-64 h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Mobile sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-full w-64 z-50"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminSidebar;
