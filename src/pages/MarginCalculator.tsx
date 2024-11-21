import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, RotateCcw, Shield, AlertTriangle, BookOpen } from 'lucide-react';

export function MarginCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, setState] = useState({
    lotSize: '',
    leverage: '',
    goldPrice: ''
  });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const lots = parseFloat(state.lotSize);
    const leverage = parseFloat(state.leverage);
    const price = parseFloat(state.goldPrice);

    if (!lots || !leverage || !price) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    // Standard lot size for gold is 100 oz
    const contractSize = 100;
    const marginRequired = (price * contractSize * lots) / leverage;
    setResult(marginRequired);
  };

  const handleReset = () => {
    setState({
      lotSize: '',
      leverage: '',
      goldPrice: ''
    });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Gold Trading Margin Calculator | XAUUSD Position Size Tool</title>
        <meta name="description" content="Calculate required margin and position sizes for your XAUUSD trades. Our gold margin calculator helps you manage risk and leverage effectively." />
      </Helmet>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">XAUUSD Margin Calculator</h1>
        <p className="text-gray-600 mb-8 text-center">
          Calculate the required margin for your gold trading positions.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lot Size
            </label>
            <input
              type="number"
              step="0.01"
              value={state.lotSize}
              onChange={(e) => setState({ ...state, lotSize: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter lot size"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leverage (e.g., 100 for 1:100)
            </label>
            <input
              type="number"
              value={state.leverage}
              onChange={(e) => setState({ ...state, leverage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter leverage"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Gold Price (USD)
            </label>
            <input
              type="number"
              step="0.01"
              value={state.goldPrice}
              onChange={(e) => setState({ ...state, goldPrice: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter current gold price"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleCalculate}
              className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <CalcIcon className="w-5 h-5 mr-2" />
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-center">
                Required Margin: <span className="text-yellow-600">${result.toFixed(2)}</span>
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Understanding Margin in Gold Trading</h2>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="w-6 h-6 text-yellow-500 mr-2" />
              What is Trading Margin?
            </h3>
            <p className="text-gray-700 mb-4">
              Trading margin is the amount of money required to open and maintain a leveraged trading position. It acts as a good faith deposit to cover potential losses in your trading positions.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
              Important Margin Concepts
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Initial Margin: The minimum deposit required to open a position</li>
              <li>Maintenance Margin: The minimum amount required to keep a position open</li>
              <li>Margin Call: A warning when your account equity falls below maintenance margin</li>
              <li>Stop Out: Automatic position closure when margin requirements aren't met</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-yellow-500 mr-2" />
              How to Use This Calculator
            </h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Enter your desired lot size (e.g., 1.0 for a standard lot)</li>
              <li>Input your broker's leverage (e.g., 100 for 1:100)</li>
              <li>Enter the current gold price in USD</li>
              <li>Click "Calculate" to see your required margin</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-3">Pro Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Always maintain adequate margin in your account</li>
              <li>• Consider lower leverage to reduce margin requirements</li>
              <li>• Monitor your margin level regularly</li>
              <li>• Use stop-loss orders to protect against margin calls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
