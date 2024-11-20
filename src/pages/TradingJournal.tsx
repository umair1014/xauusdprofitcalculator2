import React, { useState, useEffect } from 'react';
import { Save, Trash2, Plus, BookOpen, BarChart, Target } from 'lucide-react';

interface Trade {
  id: number;
  date: string;
  pair: string;
  type: 'buy' | 'sell';
  entry: string;
  exit: string;
  lots: string;
  pnl: string;
  notes: string;
}

export function TradingJournal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [trades, setTrades] = useState<Trade[]>([]);
  const [currentTrade, setCurrentTrade] = useState<Omit<Trade, 'id'>>({
    date: '',
    pair: 'XAUUSD',
    type: 'buy',
    entry: '',
    exit: '',
    lots: '',
    pnl: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrades([...trades, { ...currentTrade, id: Date.now() }]);
    setCurrentTrade({
      date: '',
      pair: 'XAUUSD',
      type: 'buy',
      entry: '',
      exit: '',
      lots: '',
      pnl: '',
      notes: ''
    });
  };

  const deleteTrade = (id: number) => {
    setTrades(trades.filter(trade => trade.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Trading Journal</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={currentTrade.date}
              onChange={(e) => setCurrentTrade({ ...currentTrade, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              value={currentTrade.type}
              onChange={(e) => setCurrentTrade({ ...currentTrade, type: e.target.value as 'buy' | 'sell' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Entry Price</label>
            <input
              type="number"
              step="0.01"
              value={currentTrade.entry}
              onChange={(e) => setCurrentTrade({ ...currentTrade, entry: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Exit Price</label>
            <input
              type="number"
              step="0.01"
              value={currentTrade.exit}
              onChange={(e) => setCurrentTrade({ ...currentTrade, exit: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lot Size</label>
            <input
              type="number"
              step="0.01"
              value={currentTrade.lots}
              onChange={(e) => setCurrentTrade({ ...currentTrade, lots: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">P&L</label>
            <input
              type="number"
              step="0.01"
              value={currentTrade.pnl}
              onChange={(e) => setCurrentTrade({ ...currentTrade, pnl: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea
              value={currentTrade.notes}
              onChange={(e) => setCurrentTrade({ ...currentTrade, notes: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              rows={3}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Trade
            </button>
          </div>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lots</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P&L</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trades.map((trade) => (
                <tr key={trade.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{trade.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      trade.type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {trade.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{trade.entry}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{trade.exit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{trade.lots}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={Number(trade.pnl ) >= 0 ? 'text-green-600' : 'text-red-600'}>
                      ${Number(trade.pnl).toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{trade.notes}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => deleteTrade(trade.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Mastering Your Trading Journal</h2>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-yellow-500 mr-2" />
              Why Keep a Trading Journal?
            </h3>
            <p className="text-gray-700 mb-4">
              A trading journal is your personal trading database that helps you track, analyze, and improve your trading performance. It's an essential tool for both beginners and experienced traders.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart className="w-6 h-6 text-yellow-500 mr-2" />
              Key Metrics to Track
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Entry and exit points</li>
              <li>Position size and leverage used</li>
              <li>Profit/loss for each trade</li>
              <li>Market conditions and strategy used</li>
              <li>Emotional state during trading</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="w-6 h-6 text-yellow-500 mr-2" />
              Best Practices
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Record trades immediately after execution</li>
              <li>Include detailed notes about your decision-making process</li>
              <li>Review your journal regularly to identify patterns</li>
              <li>Use screenshots of charts for visual reference</li>
              <li>Track both winning and losing trades</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-3">Journal Analysis Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Look for patterns in your winning trades</li>
              <li>• Identify common mistakes in losing trades</li>
              <li>• Calculate your risk-reward ratio</li>
              <li>• Track your emotional state's impact on trading</li>
              <li>• Use the data to refine your trading strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}