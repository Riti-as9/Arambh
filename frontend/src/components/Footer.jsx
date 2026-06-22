import React from 'react';
import { Link } from 'react-router-dom';

// Footer component with contact info and links
const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-3xl font-bold mb-4">Arambh</h2>
            <p className="font-inter text-gray-200">Empowering communities through education and women's empowerment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter text-gray-200">
              <li><Link to="/" className="hover:text-brand-turmeric transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-turmeric transition-colors">About Us</Link></li>
              <li><Link to="/volunteer" className="hover:text-brand-turmeric transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="hover:text-brand-turmeric transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 font-inter text-gray-200">
              <li>123 Welfare Street</li>
              <li>New Delhi, India 110001</li>
              <li>info@arambh.org</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Newsletter</h3>
            <p className="font-inter text-gray-200 mb-4">Stay updated with our latest initiatives!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-brand-charcoal font-inter"
              />
              <button className="bg-brand-marigold text-brand-charcoal px-4 py-2 rounded-lg font-inter font-semibold hover:bg-brand-turmeric transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <p className="font-inter text-center text-gray-300">© 2026 Arambh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
