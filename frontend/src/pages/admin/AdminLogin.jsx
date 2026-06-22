import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Card from '../../components/Card';
import PageMeta from '../../components/PageMeta';

const AdminLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, formData);
      if (res.data.success) {
        onLogin(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Admin Login"
        description="Login to the Arambh Admin Dashboard to manage volunteers, donations, and help requests."
      />
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-bold text-brand-charcoal mb-2">
              Arambh Admin
            </h1>
            <p className="font-inter text-brand-charcoal/60">
              Sign in to access the dashboard
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl font-inter">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@arambh.org"
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={loading}
              className="mt-2"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-charcoal mr-3"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
    </>
  );
};

export default AdminLogin;
