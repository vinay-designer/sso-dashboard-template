import React from 'react';
import { MoreVertical, Cuboid as Cube, Plus } from 'lucide-react';
import Card from '../UI/Card';
import { Folder } from '../types';

interface FolderSectionProps {
  folders: Folder[];
}

const FolderSection: React.FC<FolderSectionProps> = ({ folders }) => {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Manage your folders</h2>
        <p className="text-gray-600 mt-2">Create folders to sort files and have quick access to documents</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="border border-dashed border-gray-300 p-0 flex flex-col items-center justify-center min-h-[180px]">
          <div className="bg-white rounded-full p-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
        </Card>
        
        {folders.map((folder) => (
          <Card key={folder.id} className={`relative ${folder.color} p-5 min-h-[180px]`} hoverable>
            <div className="flex justify-between items-start mb-8">
              <div className="bg-white/30 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-medium">
                {folder.id.padStart(2, '0')}
              </div>
              <button className="p-1 hover:bg-white/20 rounded-full">
                <MoreVertical className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="mb-4">
              {folder.icon === 'cube' && <Cube className="w-10 h-10 text-white/90" />}
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white">{folder.name}</h3>
              <p className="text-white/80 text-sm mt-1">{folder.size}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FolderSection;