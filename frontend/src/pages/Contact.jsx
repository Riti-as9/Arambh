import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only submission
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Arambh! We'd love to hear from you about volunteering, donating, or any questions you have about our programs."
      />
      <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Contact Us</h1>
          <p className="font-inter text-lg text-brand-charcoal/80">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-2">Thank You!</h2>
                  <p className="font-inter text-brand-charcoal/70">We've received your message and will get back to you soon.</p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                  <FormInput
                    label="Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <Card className="p-6 border-l-4 border-brand-marigold">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-marigold/20 flex items-center justify-center text-brand-marigold mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Address</h3>
                  <p className="font-inter text-brand-charcoal/70">123 Welfare Street, New Delhi, India 110001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-brand-plum">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-plum/20 flex items-center justify-center text-brand-plum mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Email</h3>
                  <p className="font-inter text-brand-charcoal/70">info@arambh.org</p>
                  <p className="font-inter text-brand-charcoal/70">support@arambh.org</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-brand-turmeric">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-turmeric/20 flex items-center justify-center text-brand-turmeric mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Phone</h3>
                  <p className="font-inter text-brand-charcoal/70">+91 98765 43210</p>
                  <p className="font-inter text-brand-charcoal/70">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-4 overflow-hidden">
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="font-inter text-brand-charcoal/50">Map Location</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
