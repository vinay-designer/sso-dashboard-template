import React from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';

const ProtectionSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Protection</h2>
        
        <button className="flex items-center space-x-1 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
          <span>More</span>
          <ChevronDown size={14} />
        </button>
      </div>
      
      {/* Account Protection Section */}
      <div className="bg-[#EBF6F5] rounded-xl p-5 mb-4 relative overflow-hidden">
        <div className="mb-2">
          <h3 className="text-sm font-medium">Account protection</h3>
          <p className="text-xs text-gray-500">Powered by AI</p>
        </div>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-3xl font-bold">23%</div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className="w-4 h-4 rounded-full bg-[#3F8A80] opacity-20 ml-2"
              style={{ 
                marginTop: index % 2 === 0 ? '8px' : '0', 
                opacity: 0.2 + (index * 0.1)
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Verification Speed Section */}
      <div className="bg-gray-900 text-white rounded-xl p-5 relative overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium">Verification speed</h3>
          <button className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">
            More
          </button>
        </div>
        
        <p className="text-xs text-gray-400 mb-3">increased by 17%</p>
        
        {/* Wave Chart */}
        <div className="h-16 w-full mt-4 relative flex items-end">
          {Array.from({ length: 20 }).map((_, index) => {
            const height = Math.sin(index * 0.5) * 20 + 30;
            return (
              <div 
                key={index} 
                style={{ height: `${height}%` }}
                className="w-1 bg-white opacity-50 mx-0.5"
              ></div>
            );
          })}
        </div>
        
        <div className="absolute bottom-4 right-4 text-2xl font-bold">
          17%
        </div>
      </div>
    </div>
  );
};

export default ProtectionSection;