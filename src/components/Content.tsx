import React from 'react';
import { TrendingUp, Shield, Brain, Target, Clock, BarChart, HelpCircle } from 'lucide-react';

export function Content() {
  return (
    <div className="prose max-w-none">
      {/* What is XAUUSD Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">What is XAUUSD Trading?</h2>
          </div>
          <p className="text-gray-700">
            XAUUSD represents gold trading against the US dollar. Our calculator simplifies complex calculations, 
            helping you make data-driven trading decisions in the volatile gold market.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Risk Management</h2>
          </div>
          <p className="text-gray-700">
            Protect your investment by calculating potential profits and losses before executing trades. 
            Our tool helps you maintain responsible position sizes and leverage levels.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Features of Our Calculator</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Calculations</h3>
            <p className="text-gray-600">Instant and accurate profit/loss calculations for both buy and sell positions</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Trading</h3>
            <p className="text-gray-600">Fine-tune your position sizes and leverage for optimal trading outcomes</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Results</h3>
            <p className="text-gray-600">Get immediate feedback on your potential trading scenarios</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <HelpCircle className="w-8 h-8 text-primary mr-3" />
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">What is XAUUSD?</h3>
            <p className="text-gray-700">
              XAUUSD is the symbol representing gold priced in US dollars. XAU is the international code for gold, while USD represents the US dollar.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">How accurate is the profit calculator?</h3>
            <p className="text-gray-700">
              Our calculator provides precise calculations based on your input data, considering factors like lot size, entry/exit prices, and leverage.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">What's the standard lot size for gold?</h3>
            <p className="text-gray-700">
              One standard lot in gold trading equals 100 troy ounces. Our calculator automatically factors this in for accurate profit/loss calculations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">How does leverage affect my trades?</h3>
            <p className="text-gray-700">
              Leverage multiplies both potential profits and losses. For example, 1:100 leverage means you can control $100 worth of gold for every $1 in your account.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <BarChart className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-2xl font-bold text-gray-900">Ready to Start Trading?</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Get professional guidance and expert trading signals to enhance your gold trading journey. Our team of experienced traders is ready to help you succeed.
        </p>
        <a
          href="https://freegoldsignal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Get Expert Trading Support
        </a>
      </section>
    </div>
  );
}