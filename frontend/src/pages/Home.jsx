import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';
import StatCounter from '../components/StatCounter';
import PageMeta from '../components/PageMeta';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard stats on component mount
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
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <PageMeta
        title="Home"
        description="Arambh - Empowering communities through education for underprivileged children and women's empowerment. Join us to make a difference!"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-marigold/10 via-brand-ivory to-brand-plum/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal mb-6"
            >
              Empower Change, <br />
              <span className="text-brand-marigold">One Step at a Time</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto mb-10"
            >
              Join Arambh in our mission to provide education to underprivileged children and empower women across communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/donate">
                <Button size="lg">Donate Now</Button>
              </Link>
              <Link to="/volunteer">
                <Button variant="outline" size="lg">Volunteer With Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-12">Our Impact So Far</h2>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-marigold"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats && (
                <>
                  <StatCounter target={stats.totalVolunteers} label="Volunteers" suffix="+" />
                  <StatCounter target={stats.totalDonations} label="Donations" suffix="+" />
                  <StatCounter target={stats.totalDonationAmount} label="Amount Raised" prefix="₹" suffix="+" />
                  <StatCounter target={stats.resolvedHelpRequests} label="Requests Resolved" suffix="+" />
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Our Causes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-16">Our Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Card */}
            <Card className="border-t-4 border-brand-marigold">
              <div className="text-brand-marigold mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">Education for All</h3>
              <p className="font-inter text-brand-charcoal/80 mb-6">
                We believe every child deserves access to quality education. We run free tutoring centers, provide school supplies, and sponsor education for underprivileged kids.
              </p>
              <Link to="/donate">
                <Button>Support This Cause</Button>
              </Link>
            </Card>

            {/* Women Empowerment Card */}
            <Card className="border-t-4 border-brand-plum">
              <div className="text-brand-plum mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">Women Empowerment</h3>
              <p className="font-inter text-brand-charcoal/80 mb-6">
                We conduct skill development workshops, financial literacy programs, and provide micro-entrepreneurship support to help women become self-reliant.
              </p>
              <Link to="/volunteer">
                <Button variant="secondary">Join the Cause</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials / Impact Stories */}
      <section className="py-20 bg-gradient-to-br from-brand-marigold/5 to-brand-plum/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-charcoal mb-16">Stories of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-turmeric flex items-center justify-center text-brand-charcoal font-heading text-xl font-bold mr-4">R</div>
                <div>
                  <h4 className="font-heading font-bold text-brand-charcoal">Riya</h4>
                  <p className="font-inter text-sm text-brand-charcoal/70">12 years old</p>
                </div>
              </div>
              <p className="font-inter text-brand-charcoal/80 italic">
                "Thanks to Arambh's tutoring center, I can now read and write English fluently! I dream of becoming a doctor one day."
              </p>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-marigold flex items-center justify-center text-brand-charcoal font-heading text-xl font-bold mr-4">M</div>
                <div>
                  <h4 className="font-heading font-bold text-brand-charcoal">Meera</h4>
                  <p className="font-inter text-sm text-brand-charcoal/70">Small Business Owner</p>
                </div>
              </div>
              <p className="font-inter text-brand-charcoal/80 italic">
                "The entrepreneurship workshop gave me the skills to start my own stitching business. Now I support my family and even employ two other women!"
              </p>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-plum flex items-center justify-center text-white font-heading text-xl font-bold mr-4">A</div>
                <div>
                  <h4 className="font-heading font-bold text-brand-charcoal">Ankit</h4>
                  <p className="font-inter text-sm text-brand-charcoal/70">Volunteer</p>
                </div>
              </div>
              <p className="font-inter text-brand-charcoal/80 italic">
                "Volunteering with Arambh has been the most rewarding experience of my life. Seeing the kids' faces light up when they learn something new is priceless."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-brand-marigold to-brand-plum">
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-inter text-lg text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Every contribution, big or small, helps us create lasting change in the lives of those who need it most.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/donate">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-marigold">
                Donate Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default Home;
