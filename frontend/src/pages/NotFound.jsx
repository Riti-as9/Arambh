import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import PageMeta from '../components/PageMeta';

const NotFound = () => {
  return (
    <>
      <PageMeta
        title="404 Not Found"
        description="Oops! The page you're looking for doesn't exist. Return to Arambh's homepage or contact us for support."
      />
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <Card className="p-8 sm:p-12">
          <h1 className="font-heading text-6xl sm:text-7xl font-bold text-brand-marigold mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-charcoal mb-4">
            Page Not Found
          </h2>
          <p className="font-inter text-brand-charcoal/70 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button>
                Go to Homepage
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
    </>
  );
};

export default NotFound;
