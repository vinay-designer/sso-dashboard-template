import React from 'react';
import { MoreHorizontal, ChevronRight, Plus } from 'lucide-react';

const users = [
  {
    id: 1,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const resources = [
  { name: "Snapchat", active: true },
  { name: "Behance", active: true },
  { name: "Dribbble", active: true },
  { name: "Instagram", active: false, limited: true }
];

const UserManagement = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Add User Section */}
      <div className="border-b border-gray-100 p-6">
        <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300"></div>
          </div>
          <h3 className="text-lg font-bold">Add user</h3>
          <p className="text-xs text-gray-500">You can add 2 users</p>
        </div>
      </div>
      
      {/* Users List */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="w-10 h-10 rounded-full overflow-hidden -ml-2 first:ml-0 border-2 border-white"
              >
                <img 
                  src={user.avatar} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center -ml-2 border-2 border-white">
              <span className="text-gray-500 text-xs">•••</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <span className="text-gray-800">You have added 8 users</span>
            <button className="flex items-center text-[#2A9D8F] ml-2">
              <span>view all</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Resources */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Resources</h3>
          <span className="text-xs text-gray-500">14 added</span>
        </div>
        
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 font-medium">{resource.name}</span>
                <button className="text-gray-400">
                  <MoreHorizontal size={14} />
                </button>
              </div>
              
              <div className="w-10 flex items-center">
                {resource.limited ? (
                  <span className="text-xs text-purple-400">limited</span>
                ) : (
                  <div className={`w-8 h-4 ${resource.active ? 'bg-gray-800' : 'bg-gray-200'} rounded-full relative`}>
                    <div 
                      className={`absolute ${resource.active ? 'right-0.5' : 'left-0.5'} top-0.5 w-3 h-3 bg-white rounded-full`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button className="text-xs text-gray-500 flex items-center">
            <span>view all</span>
            <ChevronRight size={14} />
          </button>
          
          <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Plus size={14} className="text-gray-500" />
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="mt-6 bg-gray-900 text-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">17<span className="text-sm font-normal text-gray-400">/60</span></div>
            <div className="text-xs text-gray-400">resources</div>
          </div>
          
          <div className="my-2">
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-white rounded-full"></div>
            </div>
          </div>
          
          <h3 className="font-medium text-sm mt-4">Expand your possibilities</h3>
          <p className="text-xs text-gray-400">Upgrade your plan and expand your account</p>
          
          <div className="flex items-center justify-between mt-2">
            <button className="text-xs text-gray-300 flex items-center">
              <span>More info</span>
              <ChevronRight size={14} />
            </button>
            
            <button className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
              <Plus size={14} className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;