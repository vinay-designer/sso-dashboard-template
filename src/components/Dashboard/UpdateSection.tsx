import React from 'react';
import { Heart, Share2 } from 'lucide-react';

const UpdateSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Update</h2>
        <p className="text-sm text-gray-500">New updates to our system</p>
      </div>
      
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl p-4 relative">
        <div className="flex justify-between mb-2">
          <button className="bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center">
            <Heart size={16} className="text-gray-700" />
          </button>
          
          <button className="bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center">
            <Share2 size={16} className="text-gray-700" />
          </button>
        </div>
        
        <div className="mt-32 text-center">
          <h3 className="text-lg font-bold text-gray-800">Verification by AI</h3>
          <button className="mt-2 bg-white text-gray-800 px-4 py-1 rounded-full text-sm">
            Read
          </button>
        </div>
        
        {/* Abstract colorful design in background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;