import React from 'react';
import { Users, Award, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We are dedicated to providing traders with professional tools and resources
          to make informed decisions in the gold trading market. Our XAUUSD Profit
          Calculator is just one of the many tools we offer to help traders succeed.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our team consists of experienced traders and financial experts.
            </p>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Leading</h3>
            <p className="text-gray-600">
              Recognized for providing accurate and reliable trading tools.
            </p>
          </div>
          
          <div className="text-center">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">
              Committed to helping traders achieve their financial goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}