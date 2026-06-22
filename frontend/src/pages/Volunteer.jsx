import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import PageMeta from '../components/PageMeta';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/volunteer`, {
        ...formData,
        skills: formData.skills.split(',').map(skill => skill.trim())
      });

      if (res.data.success) {
        setMessageType('success');
        setMessage('Thank you for registering as a volunteer! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', skills: '', city: '' });
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
        title="Volunteer"
        description="Join Arambh as a volunteer! Share your skills and time to support education for underprivileged children and women's empowerment programs."
      />
      <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Join Our Volunteer Team</h1>
          <p className="font-inter text-lg text-brand-charcoal/80">Make a difference by volunteering your time and skills with Arambh.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8">
            {/* Success/Error Message */}
            {message && (
              <div className={`mb-6 p-4 rounded-2xl font-inter ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
                <FormInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="New Delhi"
                  required
                />
              </div>

              <FormInput
                label="Skills (comma separated)"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Teaching, Photography, Graphic Design"
              />

              <Button type="submit" size="lg" disabled={loading} className="mt-2">
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-charcoal mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  'Register as Volunteer'
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

export default Volunteer;
