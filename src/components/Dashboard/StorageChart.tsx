import React from 'react';
import Card from '../UI/Card';
import { StorageItem } from '../types';

interface StorageChartProps {
  usage: number;
  items: StorageItem[];
}

const StorageChart: React.FC<StorageChartProps> = ({ usage, items }) => {
  return (
    <Card className="p-5 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Storage</h3>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-36 h-36 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#f3f4f6" 
              strokeWidth="12" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#4f46e5" 
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * usage / 100)}
              transform="rotate(-90 50 50)"
              strokeLinecap="round"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#84B0AA" 
              strokeWidth="12"
              strokeDasharray="83.7"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
              strokeLinecap="round"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#eab308" 
              strokeWidth="12"
              strokeDasharray="62.8"
              strokeDashoffset="0"
              transform="rotate(15 50 50)"
              strokeLinecap="round"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#422006" 
              strokeWidth="12"
              strokeDasharray="104.67"
              strokeDashoffset="0"
              transform="rotate(90 50 50)"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{usage}%</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
              <span className="text-gray-700">{item.category}</span>
            </div>
            <span className="text-gray-500 font-medium">{item.size}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default StorageChart;