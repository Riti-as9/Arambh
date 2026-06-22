import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Layout component that wraps all pages
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
