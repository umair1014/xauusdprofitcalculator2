import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CTAPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want Professional Trading Guidance?
          </h3>
          <p className="text-gray-600 mb-6">
            Get expert trading signals and personalized account management services from our professional team.
          </p>
          <a
            href="https://freegoldsignal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}