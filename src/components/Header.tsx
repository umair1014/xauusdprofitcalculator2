import React from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-gray-900">XAUUSD Tools</span>
          </Link>
        </div>
      </div>
    </header>
  );
}