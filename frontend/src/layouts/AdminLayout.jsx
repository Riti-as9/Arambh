import React, { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopbar from '../components/admin/AdminTopbar';

// Admin Layout component
// Props:
// - title: Page title for topbar
// - adminName: Name of logged in admin
// - onLogout: Logout handler
// - children: Page content
const AdminLayout = ({ title, adminName, onLogout, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <div className="lg:ml-64">
        {/* Topbar */}
        <AdminTopbar
          title={title}
          adminName={adminName}
          onLogout={onLogout}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
