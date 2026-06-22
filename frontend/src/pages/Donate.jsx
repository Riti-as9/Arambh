import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import ProgressBar from '../components/ProgressBar';
import PageMeta from '../components/PageMeta';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const DONATION_GOAL = 100000; // Rs. 1 lakh goal

  // Fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard-stats`);
        if (res.data.success) {
          setStats(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/donation`, {
        ...formData,
        amount: Number(formData.amount)
      });

      if (res.data.success) {
        setMessageType('success');
        setMessage('Thank you for your generous donation!');
        setFormData({ name: '', email: '', amount: '' });
        // Refetch stats to update progress
        const updatedRes = await axios.get('http://localhost:5000/api/dashboard-stats');
        if (updatedRes.data.success) {
          setStats(updatedRes.data.data);
        }
      }
    } catch (error) {
      setMessageType('error');
      setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Donate"
        description="Support Arambh's mission! Make a donation to help us provide education for underprivileged children and women's empowerment programs."
      />
      <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Make a Donation</h1>
          <p className="font-inter text-lg text-brand-charcoal/80">Your contribution helps us continue our mission of education and empowerment.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              {message && (
                <div className={`mb-6 p-4 rounded-2xl font-inter ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
                <FormInput
                  label="Donation Amount (₹)"
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="500"
                  min="1"
                  required
                />

                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {[500, 1000, 2000, 5000].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: String(amount) })}
                      className={`px-6 py-2 rounded-2xl font-inter font-semibold transition-all ${formData.amount === String(amount) ? 'bg-brand-marigold text-brand-charcoal' : 'bg-gray-100 text-brand-charcoal hover:bg-brand-turmeric'}`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>

                <Button type="submit" size="lg" disabled={loading} fullWidth>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-charcoal mr-3"></div>
                      Processing...
                    </div>
                  ) : (
                    'Donate Now'
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Progress & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Progress Card */}
            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">Our Campaign Goal</h2>
              {statsLoading ? (
                <div className="animate-pulse h-16 bg-gray-200 rounded-2xl"></div>
              ) : (
                <ProgressBar
                  current={stats?.totalDonationAmount || 0}
                  goal={DONATION_GOAL}
                  label="Amount Raised"
                />
              )}
              <p className="font-inter text-brand-charcoal/70 mt-6">
                Help us reach our goal of ₹{DONATION_GOAL.toLocaleString()} to support more children's education and women's empowerment programs.
              </p>
            </Card>

            {/* Why Donate */}
            <Card className="p-8 border-l-4 border-brand-marigold">
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">Where Your Money Goes</h3>
              <ul className="space-y-3 font-inter text-brand-charcoal/80">
                <li className="flex items-start">
                  <span className="text-brand-marigold mr-3">✓</span>
                  60% - Education programs (books, supplies, teacher salaries)
                </li>
                <li className="flex items-start">
                  <span className="text-brand-marigold mr-3">✓</span>
                  30% - Women's empowerment workshops and skill training
                </li>
                <li className="flex items-start">
                  <span className="text-brand-marigold mr-3">✓</span>
                  10% - Operational costs and administrative expenses
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Donate;
