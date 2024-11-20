import React from 'react';

interface InfographicProps {
  title: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

export function Infographic({ title, items, className = '' }: InfographicProps) {
  return (
    <div className={`my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 ${className}`}>
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="text-yellow-500 mb-3">
              {item.icon}
            </div>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}