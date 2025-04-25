import React from 'react';
import { Search, Bell } from 'lucide-react';

const TopNav = () => {
  return (
    <div className="fixed top-6 left-24 right-6 bg-white rounded-3xl py-2.5 px-5 flex items-center justify-between">
      <div className="flex items-center w-96">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={14} />
          </div>
        </div>
        <div className="bg-gray-100 p-1.5 rounded-full ml-2 cursor-pointer">
          <div className="text-gray-500 text-sm">
            ⌘
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-[#E8F5F3] text-[#2A9D8F] px-3 py-1.5 rounded-full text-sm font-medium">
          Online support
        </button>

        <div className="relative cursor-pointer">
          <Bell size={18} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Nika Meyer</span>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;