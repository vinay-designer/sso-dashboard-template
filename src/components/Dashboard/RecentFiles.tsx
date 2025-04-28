import React from 'react';
import { File, FileText, Image, File as FileZip } from 'lucide-react';
import Card from '../UI/Card';
import { FileItem } from '../types';

interface RecentFilesProps {
  files: FileItem[];
}

const RecentFiles: React.FC<RecentFilesProps> = ({ files }) => {
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-white" />;
      case 'jpg':
      case 'psd':
        return <Image className="w-5 h-5 text-white" />;
      case 'zip':
        return <FileZip className="w-5 h-5 text-white" />;
      default:
        return <File className="w-5 h-5 text-white" />;
    }
  };

  const getIconBackground = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-500';
      case 'jpg':
        return 'bg-indigo-500';
      case 'psd':
        return 'bg-green-500';
      case 'zip':
        return 'bg-amber-800';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="p-5 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Last File</h3>
        <div className="flex items-center">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {files.map((file) => (
          <div key={file.id} className="py-4 flex items-center">
            <div className={`${getIconBackground(file.type)} p-3 rounded-md mr-4`}>
              {getFileIcon(file.type)}
            </div>
            
            <div className="flex-grow">
              <h4 className="text-sm font-medium text-gray-900">{file.name}</h4>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {file.collaborators.slice(0, 3).map((collaborator, index) => (
                  <img 
                    key={index}
                    src={collaborator} 
                    alt={`Collaborator ${index + 1}`}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
                {file.extraCollaborators && (
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white">
                    +{file.extraCollaborators}
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-500">{file.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentFiles;