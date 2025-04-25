import React from 'react';
import { Clock, Globe, Download, BarChart2 } from 'lucide-react';

interface TabProps {
  label: string;
  active?: boolean;
}

const Tab: React.FC<TabProps> = ({ label, active = false }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-[#E8F5F3] text-[#2A9D8F]' 
          : 'bg-white text-gray-500 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
};

const VerificationStats = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold">Verification stats</h1>
        
        <div className="flex space-x-6">
          <div className="flex items-center">
            <div className="rounded-full p-2 bg-gray-100 mr-4">
              <Clock size={24} className="text-gray-700" />
            </div>
            <div>
              <div className="text-3xl font-bold">124</div>
              <div className="text-sm text-gray-500">hours per month</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="rounded-full p-2 bg-gray-100 mr-4">
              <Globe size={24} className="text-gray-700" />
            </div>
            <div>
              <div className="text-3xl font-bold">315</div>
              <div className="text-sm text-gray-500">sites</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Tab label="All" />
          <Tab label="Activity" active />
          <Tab label="Protection" />
          <Tab label="Update" />
          <Tab label="Resources" />
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
            <span className="text-gray-400 text-lg">+</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Download size={18} className="text-gray-600" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <BarChart2 size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationStats;