import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import AdminTable from '../../components/admin/AdminTable';
import PageMeta from '../../components/PageMeta';

const AdminHelpRequests = ({ adminName, onLogout }) => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // Fetch help requests
  useEffect(() => {
    const fetchHelpRequests = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/help-request`);
        if (res.data.success) {
          setHelpRequests(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching help requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHelpRequests();
  }, []);

  // Update status handler
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/api/help-request/${id}`, {
        status: newStatus,
      });
      if (res.data.success) {
        // Update local state
        setHelpRequests((prev) =>
          prev.map((req) =>
            req._id === id ? res.data.data : req
          )
        );
      }
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'location', header: 'Location' },
    { key: 'category', header: 'Category' },
    {
      key: 'description',
      header: 'Description',
      render: (row) => (
        <p className="max-w-xs truncate" title={row.description}>{row.description}</p>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <div className="flex items-center gap-2">
          <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}
        >
          {row.status}
        </span>
          <select
            value={row.status}
            onChange={(e) => handleStatusChange(row._id, e.target.value)}
            disabled={updatingId === row._id}
            className="ml-2 px-3 py-1 rounded-lg border border-gray-300 text-sm"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageMeta
        title="Admin Dashboard - Help Requests"
        description="Arambh Admin Dashboard - View and update help request statuses."
      />
      <AdminLayout
        title="Help Requests"
        adminName={adminName}
        onLogout={onLogout}
      >
      <AdminTable columns={columns} data={helpRequests} loading={loading} />
    </AdminLayout>
    </>
  );
};

export default AdminHelpRequests;
