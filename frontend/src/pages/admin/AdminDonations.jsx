import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import AdminTable from '../../components/admin/AdminTable';
import PageMeta from '../../components/PageMeta';

const AdminDonations = ({ adminName, onLogout }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/donation`);
        if (res.data.success) {
          setDonations(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching donations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'amount',
      header: 'Amount',
      render: (row) => `₹${row.amount.toLocaleString()}`,
    },
    {
      key: 'createdAt',
      header: 'Date',
      render: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
  ];

  return (
    <>
      <PageMeta
        title="Admin Dashboard - Donations"
        description="Arambh Admin Dashboard - View and manage all donations received."
      />
      <AdminLayout
        title="Donations"
        adminName={adminName}
        onLogout={onLogout}
      >
      <AdminTable columns={columns} data={donations} loading={loading} />
    </AdminLayout>
    </>
  );
};

export default AdminDonations;
