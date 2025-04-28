import React from 'react';
import { Layers, Star, Settings, User, FileText, Server, AlertCircle } from 'lucide-react';
import Avatar from '../UI/Avatar';
import { NavItem } from '../types';

interface SidebarProps {
  user: {
    name: string;
    avatar: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const navigation: NavItem[] = [
    { icon: 'Layers', label: 'Dashboard', path: '/', active: true },
    { icon: 'Server', label: 'Service Components', path: '/components', active: false },
    { icon: 'FileText', label: 'Facilities', path: '/facilities', active: false },
    { icon: 'User', label: 'User', path: '/user', active: false },
    { icon: 'FileText', label: 'Audit Logs', path: '/audit-logs', active: false },
    { icon: 'FileText', label: 'Announcements', path: '/announcements', active: false },
    { icon: 'Settings', label: 'Global Params', path: '/global-params', active: false },
    { icon: 'AlertCircle', label: 'Exceptions', path: '/exceptions', active: false },
  ];
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Star':
        return <Star className="w-5 h-5" />;
      case 'Settings':
        return <Settings className="w-5 h-5" />;
      case 'User':
        return <User className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };
  
  return (
    <div className="w-64 min-w-fit max-w-xs h-full bg-gray-700 text-white flex flex-col overflow-hidden">
      <div className="p-4 md:p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-8 md:mb-10">
          <div className="h-8 w-8 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-xl font-medium">ECCare</span>
        </div>
        
        <div className="relative mb-10 md:mb-12">
          <div className="absolute -z-10 top-0 left-0 w-32 h-32 bg-gray-600 opacity-30 rounded-lg"></div>
          <div className="flex flex-col items-center pt-6">
            <Avatar
               src={user.avatar}
               alt={user.name}
               size="lg"
               className="mb-4 ring-2 ring-gray-600"
            />
            <h3 className="text-lg font-medium mb-2">{user.name}</h3>
          </div>
        </div>
        
        <nav className="space-y-1 md:space-y-2 flex-grow">
          {navigation.map((item, index) => (
            <div key={index} className="w-full">
              <a
                 href={item.path}
                className={`
                  flex items-center px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-medium
                  ${item.active ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}
                  transition-colors duration-200 ease-in-out
                  w-full
                `}
              >
                <span className="mr-3 md:mr-4 flex-shrink-0">{renderIcon(item.icon)}</span>
                <span className="truncate">{item.label}</span>
              </a>
            </div>
          ))}
        </nav>
        
        <div className="pt-4 border-t border-gray-600 mt-4">
          <a 
            href="/support" 
            className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
          >
            <AlertCircle className="w-4 h-4 mr-3" />
            <span>Help & Support</span>
          </a>
          <div className="px-3 py-2 mt-2 text-xs text-gray-400">
            Version 1.2.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;