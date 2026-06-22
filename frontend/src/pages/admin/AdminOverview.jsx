import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import AdminLayout from '../../layouts/AdminLayout';
import AdminStatCard from '../../components/admin/AdminStatCard';
import Card from '../../components/Card';
import PageMeta from '../../components/PageMeta';

const AdminOverview = ({ adminName, onLogout }) => {
  const [stats, setStats] = useState(null);
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [helpRequests, setHelpRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, volunteersRes, donationsRes, helpRequestsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard-stats`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/volunteer`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/donation`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/help-request`),
        ]);

        if (statsRes.data.success) setStats(statsRes.data.data);
        if (volunteersRes.data.success) setVolunteers(volunteersRes.data.data);
        if (donationsRes.data.success) setDonations(donationsRes.data.data);
        if (helpRequestsRes.data.success) setHelpRequests(helpRequestsRes.data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process donations into monthly data for bar chart
  const getDonationsOverTime = () => {
    const monthlyData = {};
    donations.forEach((donation) => {
      const date = new Date(donation.createdAt);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyData[monthKey] = (monthlyData[monthKey] || 0) + donation.amount;
    });

    return Object.entries(monthlyData)
      .map(([month, total]) => ({
        month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        amount: total,
      }))
      .sort((a, b) => new Date(a.month) - new Date(b.month));
  };

  // Process help requests by category for pie chart
  const getHelpRequestsByCategory = () => {
    const categoryData = {};
    helpRequests.forEach((request) => {
      categoryData[request.category] = (categoryData[request.category] || 0) + 1;
    });

    return Object.entries(categoryData).map(([category, count]) => ({
      name: category,
      value: count,
    }));
  };

  const COLORS = ['#E8871E', '#6B4E71', '#F4B942', '#1B4B43'];

  return (
    <>
      <PageMeta
        title="Admin Dashboard - Overview"
        description="Arambh Admin Dashboard - Overview with statistics, charts for donations and help requests."
      />
      <AdminLayout
        title="Overview"
        adminName={adminName}
        onLogout={onLogout}
      >
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
        <AdminStatCard
          title="Total Volunteers"
          value={loading ? '...' : stats?.totalVolunteers || 0}
          color="marigold"
          delay={0}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
        <AdminStatCard
          title="Total Donations"
          value={loading ? '...' : stats?.totalDonations || 0}
          color="plum"
          delay={0.1}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <AdminStatCard
          title="Total Amount Raised"
          value={loading ? '...' : `₹${(stats?.totalDonationAmount || 0).toLocaleString()}`}
          color="turmeric"
          delay={0.2}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>}
        />
        <AdminStatCard
          title="Total Help Requests"
          value={loading ? '...' : stats?.totalHelpRequests || 0}
          color="teal"
          delay={0.3}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
        />
        <AdminStatCard
          title="Resolved Requests"
          value={loading ? '...' : stats?.resolvedHelpRequests || 0}
          color="marigold"
          delay={0.4}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donations Over Time */}
        <Card className="p-6">
          <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-6">
            Donations Over Time
          </h3>
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-marigold"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={getDonationsOverTime()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b4e71" />
                <YAxis stroke="#6b4e71" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="amount" fill="#E8871E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>

        {/* Help Requests by Category */}
        <Card className="p-6">
          <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-6">
            Help Requests by Category
          </h3>
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-plum"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={getHelpRequestsByCategory()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {getHelpRequestsByCategory().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </Card>
      </div>
    </AdminLayout>
    </>
  );
};

export default AdminOverview;
