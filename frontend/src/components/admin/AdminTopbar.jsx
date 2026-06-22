import React from 'react';

const AdminTopbar = ({ title, adminName, onLogout, onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-4"
          >
            <svg
              className="w-6 h-6 text-brand-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Page title */}
          <h1 className="font-heading text-xl font-bold text-brand-charcoal">
            {title}
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Admin info */}
          <div className="hidden sm:flex items-center">
            <div className="w-10 h-10 rounded-full bg-brand-marigold flex items-center justify-center text-brand-charcoal font-inter font-semibold mr-3">
              {adminName.charAt(0).toUpperCase()}
            </div>
            <span className="font-inter text-brand-charcoal font-medium">
              {adminName}
            </span>
          </div>

          {/* Logout button */}
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl font-inter font-medium text-brand-charcoal/70 hover:text-brand-charcoal hover:bg-gray-100 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
