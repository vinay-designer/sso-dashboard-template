import React from 'react';
import Card from '../UI/Card';

const YourGallery: React.FC = () => {
  return (
    <Card className="overflow-hidden h-full flex flex-col justify-between relative min-h-[180px]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Gallery cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 p-5 mt-auto">
        <h3 className="text-xl font-semibold text-white">Your Gallery</h3>
      </div>
    </Card>
  );
};

export default YourGallery;