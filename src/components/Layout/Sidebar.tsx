import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Mail, 
  Calendar, 
  CircleUser, 
  Settings,
  ArrowUp,
  HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-6 top-6 bottom-6 w-14 bg-white rounded-3xl flex flex-col items-center py-3">
      <div className="mb-6">
        <div className="w-8 h-8 bg-black flex items-center justify-center rounded-xl">
          <div className="w-4 h-4 border-2 border-white rounded"></div>
        </div>
      </div>
      
      <nav className="flex flex-col items-center space-y-4 flex-1">
        <NavItem icon={<Home size={18} />} active />
        <NavItem icon={<LayoutGrid size={18} />} />
        <NavItem icon={<Mail size={18} />} />
        <NavItem icon={<Calendar size={18} />} />
        <NavItem icon={<CircleUser size={18} />} />
        <NavItem icon={<Settings size={18} />} />
      </nav>

      <div className="mt-auto flex flex-col items-center space-y-3 mb-3">
        <div className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full">
          <HelpCircle size={16} className="text-gray-600" />
        </div>
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full">
          <ArrowUp size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active }) => {
  return (
    <div className={`p-1.5 rounded-xl cursor-pointer transition-all duration-200 ${active ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
      <div className={`${active ? 'text-black' : 'text-gray-500'}`}>
        {icon}
      </div>
    </div>
  );
};

export default Sidebar;