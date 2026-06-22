import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import PageMeta from '../components/PageMeta';

const HelpRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const categories = [
    { value: 'Education', label: 'Education' },
    { value: 'Women Empowerment', label: 'Women Empowerment' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Other', label: 'Other' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/help-request`, formData);

      if (res.data.success) {
        setMessageType('success');
        setMessage('Your help request has been submitted successfully! We will reach out soon.');
        setFormData({ name: '', location: '', category: '', description: '' });
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
        title="Request Help"
        description="Request help from Arambh! Whether it's for education, women's empowerment, healthcare, or other needs, we're here to support you."
      />
      <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Request Help</h1>
          <p className="font-inter text-lg text-brand-charcoal/80">If you or someone you know needs assistance, please fill out the form below.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
              <FormInput
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your city/village"
                required
              />
              <FormInput
                label="Category"
                type="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={categories}
                required
              />
              <FormInput
                label="Description"
                type="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe the help you need in detail"
                required
              />

              <Button type="submit" size="lg" disabled={loading} className="mt-2">
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-charcoal mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default HelpRequest;
