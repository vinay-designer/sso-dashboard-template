import React from 'react';
import { Clock, Sliders, BarChart2 } from 'lucide-react';

// Days for the activity heatmap
const days = Array.from({ length: 9 }, (_, i) => {
  const day = 22 + i;
  return `${day} Sept`;
});

// Create a random activity level for demonstration
const getRandomActivity = () => {
  const level = Math.floor(Math.random() * 5); // 0-4
  if (level === 0) return "bg-gray-100 opacity-30";
  if (level === 1) return "bg-gray-400 opacity-50";
  if (level === 2) return "bg-gray-500 opacity-60";
  if (level === 3) return "bg-gray-600 opacity-70";
  return "bg-gray-800 opacity-90";
};

const ActivityTracker = () => {
  return (
    <div className="bg-[#EBF6F5] rounded-xl p-6 mb-6 relative overflow-hidden">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold mb-1">Your activity</h2>
          <div className="flex items-center space-x-3">
            <div className="text-sm text-gray-600">
              <div className="font-medium">Your device</div>
              <div className="text-xs text-gray-500">Added 3 devices</div>
            </div>
            
            <div className="flex space-x-2">
              <div className="p-1 border rounded border-gray-300 bg-white">
                <div className="w-4 h-6 bg-[#f5f5f5] rounded-sm border border-gray-300"></div>
              </div>
              <div className="p-1 border rounded border-gray-300 bg-white w-6"></div>
              <div className="p-1 border rounded border-gray-300 bg-white w-6"></div>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-300 text-xs text-gray-500">+</div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <div className="font-medium">Unconfirmed login attempts</div>
            <div className="text-xs text-gray-500">3 attempts this month</div>
          </div>
          
          <div className="mt-2 flex space-x-2">
            <button className="bg-white text-xs px-3 py-1 rounded-full text-gray-600 flex items-center space-x-1">
              <span>📍</span>
              <span>View more</span>
            </button>
            <button className="bg-white text-xs px-3 py-1 rounded-full text-gray-600 flex items-center space-x-1">
              <span>🕒</span>
              <span>View more</span>
            </button>
            <button className="bg-white text-xs px-2 py-1 rounded-full text-gray-600">
              •••
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <Sliders size={18} className="text-white" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Clock size={18} className="text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <BarChart2 size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Activity Heatmap */}
      <div className="mt-4">
        <div className="grid grid-cols-9 gap-2 mt-6">
          {Array.from({ length: 45 }).map((_, index) => {
            const className = `h-12 rounded-md ${getRandomActivity()}`;
            // Adding markers to some cells for visual interest
            const hasMarker = index === 36 || index === 42;
            
            return (
              <div key={index} className="relative">
                <div className={className}></div>
                {hasMarker && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] text-white">
                    •
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-9 gap-2 mt-2">
          {days.map((day, index) => (
            <div key={index} className="text-xs text-gray-500 text-center">
              {day}
            </div>
          ))}
        </div>
      </div>
      
      {/* Toggle Switch */}
      <div className="absolute top-6 right-40 flex items-center space-x-2">
        <span className="text-xs text-gray-500">Linked Account Activity</span>
        <div className="w-10 h-5 bg-gray-800 rounded-full relative flex items-center p-0.5">
          <div className="w-4 h-4 bg-white rounded-full absolute right-0.5"></div>
        </div>
        <span className="text-xs text-gray-500">Activity level</span>
      </div>
    </div>
  );
};

export default ActivityTracker;