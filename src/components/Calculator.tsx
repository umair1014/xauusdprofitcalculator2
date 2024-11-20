import React, { useState } from 'react';
import { RotateCcw, TrendingUp, TrendingDown, Calculator as CalcIcon, BarChart, Percent, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CalculatorState {
  lotSize: string;
  entryPrice: string;
  exitPrice: string;
  leverage: string;
  position: 'buy' | 'sell';
}

const initialState: CalculatorState = {
  lotSize: '',
  entryPrice: '',
  exitPrice: '',
  leverage: '100',
  position: 'buy'
};

export function Calculator() {
  const [state, setState] = useState<CalculatorState>(initialState);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const lots = parseFloat(state.lotSize);
    const entry = parseFloat(state.entryPrice);
    const exit = parseFloat(state.exitPrice);
    const lev = parseFloat(state.leverage);

    if (!lots || !entry || !exit || !lev) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    // XAUUSD standard lot size is 100 oz
    const contractSize = 100;
    const priceDiff = state.position === 'buy' ? exit - entry : entry - exit;
    const profit = (priceDiff * contractSize * lots);
    setResult(profit);
  };

  const handleReset = () => {
    setState(initialState);
    setResult(null);
  };

  const relatedTools = [
    {
      icon: <Percent className="w-5 h-5" />,
      title: "Pip Calculator",
      description: "Calculate pip values and movements",
      link: "/pip-calculator",
      color: "bg-emerald-500"
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Margin Calculator",
      description: "Determine required margin for trades",
      link: "/margin-calculator",
      color: "bg-blue-500"
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Spread Comparison",
      description: "Compare broker spreads",
      link: "/spread-comparison",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          XAUUSD Profit Calculator
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Make informed gold trading decisions with our professional XAUUSD calculator. 
          Perfect for both novice and experienced traders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Related Tools Section */}
        <div className="order-2 lg:order-1 lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Trading Tools</h3>
            <div className="grid grid-cols-1 gap-4">
              {relatedTools.map((tool, index) => (
                <Link
                  key={index}
                  to={tool.link}
                  className="block group"
                >
                  <div className="p-4 rounded-lg border border-gray-200 hover:border-[#CA8A04] transition-all transform hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center space-x-3">
                      <div className={`${tool.color} p-2 rounded-lg text-white`}>
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-[#CA8A04] transition-colors">
                          {tool.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="order-1 lg:order-2 lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex justify-center space-x-4 mb-4 lg:mb-6">
                <button
                  onClick={() => setState(s => ({ ...s, position: 'buy' }))}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    state.position === 'buy'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Buy
                </button>
                <button
                  onClick={() => setState(s => ({ ...s, position: 'sell' }))}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    state.position === 'sell'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <TrendingDown className="w-5 h-5 mr-2" />
                  Sell
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lot Size
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={state.lotSize}
                    onChange={(e) => setState({ ...state, lotSize: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent"
                    placeholder="Enter lot size"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entry Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={state.entryPrice}
                    onChange={(e) => setState({ ...state, entryPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent"
                    placeholder="Enter entry price"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exit Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={state.exitPrice}
                    onChange={(e) => setState({ ...state, exitPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent"
                    placeholder="Enter exit price"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leverage
                  </label>
                  <input
                    type="number"
                    value={state.leverage}
                    onChange={(e) => setState({ ...state, leverage: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent"
                    placeholder="Enter leverage"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleCalculate}
                  className="flex items-center justify-center px-6 py-3 bg-[#CA8A04] text-white rounded-lg hover:bg-[#B27B04] transition-colors w-full sm:w-auto"
                >
                  <CalcIcon className="w-5 h-5 mr-2" />
                  Calculate
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors w-full sm:w-auto"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </button>
              </div>

              {result !== null && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-center">
                    Profit/Loss: {' '}
                    <span className={result >= 0 ? 'text-green-600' : 'text-red-600'}>
                      ${result.toFixed(2)}
                    </span>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}