import React, { useState } from 'react';

const ModernAppImageTiles = () => {
  const [hoveredApp, setHoveredApp] = useState(null);

  const applications = [
    {
      id: 1,
      name: 'Care & Medication - Vanguard',
      imageUrl: 'https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwd2FyZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Comprehensive healthcare management platform'
    },
    {
      id: 2,
      name: 'Self-Service Portal',
      imageUrl: 'https://images.unsplash.com/photo-1648224394449-d10dbff84b8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvc3BpdGFsJTIwd2FyZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Intuitive user-driven service interface'
    },
    {
      id: 3,
      name: 'UAM',
      imageUrl: 'https://images.unsplash.com/photo-1570053999725-75f373783fa7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwc3ltYm9sc3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'Advanced user authentication system'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center space-x-6 p-8">
      {applications.map((app) => (
        <div 
          key={app.id}
          className={`
            relative w-64 h-64 rounded-3xl overflow-hidden
            transition-all duration-500 ease-in-out
            ${hoveredApp === app.id 
              ? 'scale-105 shadow-2xl' 
              : 'scale-100 shadow-xl'}
          `}
          onMouseEnter={() => setHoveredApp(app.id)}
          onMouseLeave={() => setHoveredApp(null)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={app.imageUrl} 
              alt={app.name}
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-all duration-500
                ${hoveredApp === app.id 
                  ? 'scale-110 brightness-75' 
                  : 'scale-100 brightness-100'}
              `}
            />
          </div>

          {/* Gradient Overlay */}
          <div 
            className={`
              absolute inset-0 bg-gradient-to-b from-transparent to-black
              opacity-70
            `}
          ></div>

          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2 opacity-90">
                {app.name}
              </h3>
              <p className="text-white text-sm opacity-80">
                {app.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModernAppImageTiles;