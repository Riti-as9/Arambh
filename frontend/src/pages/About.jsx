import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import PageMeta from '../components/PageMeta';

const About = () => {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Arambh's mission, vision, story, and core values. Discover how we're transforming lives through education and women's empowerment."
      />
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-charcoal mb-6">About Arambh</h1>
          <p className="font-inter text-lg text-brand-charcoal/80 max-w-3xl mx-auto">
            Founded in 2018, Arambh began as a small initiative to educate underprivileged children in a Delhi slum. Today, we're a growing movement dedicated to transforming lives through education and women's empowerment.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-t-4 border-brand-marigold">
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">Our Mission</h2>
              <p className="font-inter text-brand-charcoal/80">
                To provide access to quality education for every child, empower women to achieve economic independence, and build inclusive communities where everyone has the opportunity to thrive.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-t-4 border-brand-plum">
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">Our Vision</h2>
              <p className="font-inter text-brand-charcoal/80">
                A society where every child receives an education, every woman is empowered, and every individual has the chance to reach their full potential, regardless of their background.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-12">Our Story</h2>
          <Card className="p-8">
            <p className="font-inter text-brand-charcoal/80 mb-4 text-lg">
              It all started in 2018 when our founder, Priya Sharma, noticed a group of children playing in the streets instead of going to school. She began teaching them under a tree in her neighborhood.
            </p>
            <p className="font-inter text-brand-charcoal/80 mb-4 text-lg">
              Word spread quickly, and soon more children and volunteers joined in. What began as a small tutoring session has now grown into an organization with multiple education centers and women's empowerment programs across the National Capital Region.
            </p>
            <p className="font-inter text-brand-charcoal/80 text-lg">
              Today, Arambh has impacted over 5,000 lives, but our journey is just beginning. We believe that together, we can create a brighter future for everyone.
            </p>
          </Card>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-marigold/20 flex items-center justify-center text-brand-marigold">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Compassion</h3>
              <p className="font-inter text-brand-charcoal/70">We work with empathy and care for every individual we serve.</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-plum/20 flex items-center justify-center text-brand-plum">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Integrity</h3>
              <p className="font-inter text-brand-charcoal/70">We maintain transparency and honesty in all our actions.</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-turmeric/20 flex items-center justify-center text-brand-turmeric">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Innovation</h3>
              <p className="font-inter text-brand-charcoal/70">We continuously seek new ways to create lasting impact.</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">Community</h3>
              <p className="font-inter text-brand-charcoal/70">We believe in the power of people coming together.</p>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default About;
