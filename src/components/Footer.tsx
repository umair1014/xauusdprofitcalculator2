import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">XAUUSD Calculator</span>
            </div>
            <p className="text-gray-400">
              Professional tools for gold traders. Calculate profits, analyze markets, and make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-yellow-500 transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href="mailto:support@freegoldsignal.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  support@freegoldsignal.com
                </a>
              </div>
              <a
                href="https://freegoldsignal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Get Trading Signals
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} XAUUSD Calculator. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Disclaimer
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
