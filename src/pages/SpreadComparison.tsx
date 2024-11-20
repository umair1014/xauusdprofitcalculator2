import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, RotateCcw, DollarSign, TrendingUp, LineChart } from 'lucide-react';

interface BrokerSpread {
  broker: string;
  spread: string;
  commission: string;
}

export function SpreadComparison() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [brokers, setBrokers] = useState<BrokerSpread[]>([
    { broker: '', spread: '', commission: '' }
  ]);

  const addBroker = () => {
    setBrokers([...brokers, { broker: '', spread: '', commission: '' }]);
  };

  const removeBroker = (index: number) => {
    setBrokers(brokers.filter((_, i) => i !== index));
  };

  const updateBroker = (index: number, field: keyof BrokerSpread, value: string) => {
    const newBrokers = [...brokers];
    newBrokers[index] = { ...newBrokers[index], [field]: value };
    setBrokers(newBrokers);
  };

  const calculateTotalCost = (spread: string, commission: string) => {
    const spreadCost = parseFloat(spread) || 0;
    const commissionCost = parseFloat(commission) || 0;
    return (spreadCost + commissionCost).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">XAUUSD Spread Comparison</h1>
        <p className="text-gray-600 mb-8 text-center">
          Compare spreads and commissions from different brokers to find the best trading conditions.
        </p>

        <div className="space-y-6">
          {brokers.map((broker, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Broker Name
                  </label>
                  <input
                    type="text"
                    value={broker.broker}
                    onChange={(e) => updateBroker(index, 'broker', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter broker name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Spread (in pips)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={broker.spread}
                    onChange={(e) => updateBroker(index, 'spread', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter spread"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commission (USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={broker.commission}
                    onChange={(e) => updateBroker(index, 'commission', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter commission"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Total Trading Cost: <span className="font-semibold">${calculateTotalCost(broker.spread, broker.commission)}</span>
                </div>
                {brokers.length > 1 && (
                  <button
                    onClick={() => removeBroker(index)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Remove Broker
                  </button>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={addBroker}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Add Another Broker
          </button>
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Understanding XAUUSD Spreads</h2>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <DollarSign className="w-6 h-6 text-yellow-500 mr-2" />
              What is a Spread?
            </h3>
            <p className="text-gray-700 mb-4">
              The spread is the difference between the buy (ask) and sell (bid) price of gold. It represents the cost of trading and is how brokers make their profit.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 text-yellow-500 mr-2" />
              Why Compare Spreads?
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Lower spreads mean lower trading costs</li>
              <li>Different brokers offer varying spreads</li>
              <li>Spreads can impact your trading strategy</li>
              <li>Important for high-frequency traders</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <LineChart className="w-6 h-6 text-yellow-500 mr-2" />
              Factors Affecting Spreads
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Market volatility</li>
              <li>Trading session times</li>
              <li>Broker's business model</li>
              <li>Account type and trading volume</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-3">Tips for Choosing a Broker</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Compare spreads during different market hours</li>
              <li>• Consider other fees besides spreads</li>
              <li>• Check for requotes and slippage</li>
              <li>• Verify broker regulation and reputation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}