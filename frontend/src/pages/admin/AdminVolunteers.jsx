import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import AdminTable from '../../components/admin/AdminTable';
import PageMeta from '../../components/PageMeta';

const AdminVolunteers = ({ adminName, onLogout }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/volunteer`);
        if (res.data.success) {
          setVolunteers(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching volunteers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    {
      key: 'skills',
      header: 'Skills',
      render: (row) => row.skills?.join(', ') || '-',
    },
    { key: 'city', header: 'City' },
    {
      key: 'createdAt',
      header: 'Date Joined',
      render: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
  ];

  return (
    <>
      <PageMeta
        title="Admin Dashboard - Volunteers"
        description="Arambh Admin Dashboard - View and manage all registered volunteers."
      />
      <AdminLayout
        title="Volunteers"
        adminName={adminName}
        onLogout={onLogout}
      >
      <AdminTable columns={columns} data={volunteers} loading={loading} />
    </AdminLayout>
    </>
  );
};

export default AdminVolunteers;
