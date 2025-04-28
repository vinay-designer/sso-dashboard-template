import React from 'react';
import { Search, Bell, LogOut, Calendar } from 'lucide-react';

interface HeaderProps {
  user: {
    name: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  // Get current date for display
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex items-center justify-between py-6 px-8 bg-[#F0F2F8]">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium text-gray-800">Good morning, {user.name}</h1>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <Calendar className="w-3.5 h-3.5 mr-2" />
          <span>{formattedDate}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search something..."
            className="py-2.5 pl-12 pr-5 w-64 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 placeholder-gray-400"
          />
        </div>
        
        <div className="relative">
          <button className="p-2.5 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200">
            <Bell className="w-4 h-4" />
          </button>
        </div>
        
        <div className="relative">
          <button className="p-2.5 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;