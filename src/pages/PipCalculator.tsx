import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Calculator as CalcIcon, RotateCcw } from 'lucide-react';

export function PipCalculator() {
  const [state, setState] = useState({
    lotSize: '',
    pipValue: '',
    numberOfPips: ''
  });
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalculate = () => {
    const lots = parseFloat(state.lotSize);
    const pipValue = parseFloat(state.pipValue);
    const pips = parseFloat(state.numberOfPips);

    if (!lots || !pipValue || !pips) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    const profit = lots * pipValue * pips;
    setResult(profit);
  };

  const handleReset = () => {
    setState({
      lotSize: '',
      pipValue: '',
      numberOfPips: ''
    });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Meta Tags */}
      <Helmet>
        <title>XAUUSD Pip Calculator | Calculate Gold Trading Profits</title>
        <meta
          name="description"
          content="Use the XAUUSD Pip Calculator to estimate your potential profits or losses in gold trading. Accurate, easy-to-use tool for traders of all levels."
        />
      </Helmet>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">XAUUSD Pip Calculator</h1>
        <p className="text-gray-600 mb-8 text-center">
          Calculate your potential profit or loss based on pip movements in gold trading.
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
              Pip Value
            </label>
            <input
              type="number"
              step="0.01"
              value={state.pipValue}
              onChange={(e) => setState({ ...state, pipValue: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter pip value"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Pips
            </label>
            <input
              type="number"
              step="0.1"
              value={state.numberOfPips}
              onChange={(e) => setState({ ...state, numberOfPips: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter number of pips"
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
                Pip Value: {' '}
                <span className={result >= 0 ? 'text-green-600' : 'text-red-600'}>
                  ${result.toFixed(2)}
                </span>
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">How to Use the Pip Calculator</h2>
        <div className="prose max-w-none">
          <ol className="list-decimal pl-6 space-y-4">
            <li>Enter your <strong>lot size</strong> (e.g., 1.0 for a standard lot)</li>
            <li>Input the <strong>pip value</strong> in USD</li>
            <li>Specify the <strong>number of pips</strong> you expect to gain or lose</li>
            <li>Click "Calculate" to see your potential profit or loss</li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-4">Tips for Beginners</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Start with small lot sizes to minimize risk</li>
            <li>Always calculate your potential loss before entering a trade</li>
            <li>Consider using a demo account to practice</li>
            <li>Keep track of your pip calculations for future reference</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">What is a pip in gold trading?</h4>
              <p>In XAUUSD trading, a pip is typically the fourth decimal place of the price quote. For example, if gold moves from 1950.50 to 1950.60, that's a 1-pip movement.</p>
            </div>
            <div>
              <h4 className="font-semibold">How do I determine the pip value?</h4>
              <p>The pip value varies based on your lot size and the current gold price. Your broker typically provides this information in your trading platform.</p>
            </div>
            <div>
              <h4 className="font-semibold">Why is pip calculation important?</h4>
              <p>Understanding pip values helps you manage risk, set appropriate stop losses, and calculate potential profits before entering a trade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
