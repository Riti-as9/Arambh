import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import HelpRequest from './pages/HelpRequest';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/AdminLogin';
import AdminOverview from './pages/admin/AdminOverview';
import AdminVolunteers from './pages/admin/AdminVolunteers';
import AdminDonations from './pages/admin/AdminDonations';
import AdminHelpRequests from './pages/admin/AdminHelpRequests';

function App() {
  // Check localStorage for existing admin session
  const [admin, setAdmin] = useState(() => {
    const savedAdmin = localStorage.getItem('arambh_admin');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  const handleLogin = (adminData) => {
    setAdmin(adminData);
    localStorage.setItem('arambh_admin', JSON.stringify(adminData));
  };

  const handleLogout = () => {
    setAdmin(null);
    localStorage.removeItem('arambh_admin');
  };

  return (
    <Router>
      <Routes>
        {/* Public website routes */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/help-request" element={<HelpRequest />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        } />

        {/* Admin login route */}
        <Route path="/admin/login" element={
          admin ? <Navigate to="/admin" replace /> : <AdminLogin onLogin={handleLogin} />
        } />

        {/* Admin protected routes */}
        <Route path="/admin/*" element={
          !admin ? <Navigate to="/admin/login" replace /> : (
            <Routes>
              <Route path="/" element={<AdminOverview adminName={admin.name} onLogout={handleLogout} />} />
              <Route path="/volunteers" element={<AdminVolunteers adminName={admin.name} onLogout={handleLogout} />} />
              <Route path="/donations" element={<AdminDonations adminName={admin.name} onLogout={handleLogout} />} />
              <Route path="/help-requests" element={<AdminHelpRequests adminName={admin.name} onLogout={handleLogout} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
