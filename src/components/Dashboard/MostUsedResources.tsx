import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const resourceData = [
  { name: "Dribbble", percentage: 30, color: "#E2F8F5" },
  { name: "Behance", percentage: 72, color: "#E8DCF5" },
  { name: "Twitter", percentage: 52, color: "#000000" },
  { name: "Figma", percentage: 76, color: "#E2F8F5" },
  { name: "Adobe", percentage: 27, color: "#F5DCF3" }
];

const ResourceBar = ({ 
  name, 
  percentage, 
  color 
}: { 
  name: string; 
  percentage: number; 
  color: string;
}) => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="w-12 h-32 bg-gray-100 rounded-full relative overflow-hidden">
        <div 
          className="absolute bottom-0 w-full rounded-full" 
          style={{ 
            backgroundColor: color, 
            height: `${percentage}%` 
          }}
        ></div>
      </div>
      <div className="mt-2 text-sm font-medium">{percentage}%</div>
      <div className="mt-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        {name === "Twitter" ? (
          <Twitter size={16} className="text-gray-700" />
        ) : name === "Instagram" ? (
          <Instagram size={16} className="text-gray-700" />
        ) : (
          <div className="text-xs font-bold">{name.charAt(0)}</div>
        )}
      </div>
    </div>
  );
};

const MostUsedResources = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Most used</h2>
        <p className="text-sm text-gray-500">5 most visited resources</p>
      </div>
      
      <div className="flex justify-between">
        {resourceData.map((resource, index) => (
          <ResourceBar
            key={index}
            name={resource.name}
            percentage={resource.percentage}
            color={resource.color}
          />
        ))}
      </div>
    </div>
  );
};

export default MostUsedResources;