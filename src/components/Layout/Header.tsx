import React from 'react';
import { Search, Bell, LogOut, Calendar } from 'lucide-react';

interface HeaderProps {
  user: {
    name: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  // Get current date for display
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Color theme - Modern aesthetic palette (matching dashboard)
  const colors = {
    primary: '#7F9CE0',     // Cleaner blue with slight purple undertone
    secondary: '#E3DFF9',   // Very light lavender
    accent: '#A7D7CF',      // Mint green with blue undertone
    textPrimary: '#1A1A2E',  // Almost black with slight blue
    textSecondary: '#565674', // Muted blue-gray
    background: '#F0F2F8',   // Very light blue-gray
    backgroundAlt: '#E8EAF2', // Slightly darker background
    border: '#DFE3F3',      // Blue-tinted border
    cardBackground: '#FFFFFF', // Pure white for cards
    shadow: '0 10px 30px rgba(136, 155, 198, 0.08)' // Soft shadow
  };

  return (
    <div className="flex items-center justify-between py-6 px-8" style={{ backgroundColor: colors.background }}>
      <div className="flex flex-col">
        <h1 className="text-xl font-medium" style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
          Good morning, {user.name}
        </h1>
        <div className="flex items-center mt-2 text-sm" style={{ color: colors.textSecondary }}>
          <Calendar className="w-3.5 h-3.5 mr-2" />
          <span>{formattedDate}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-4 h-4" style={{ color: colors.textSecondary }} />
          </div>
          <input
            type="text"
            placeholder="Search something..."
            className="py-2.5 pl-12 pr-5 w-64 rounded-full focus:outline-none"
            style={{ 
              backgroundColor: colors.backgroundAlt,
              color: colors.textPrimary,
              border: `1px solid ${colors.border}`,
              boxShadow: '0 2px 10px rgba(136, 155, 198, 0.05)'
            }}
          />
        </div>
        
        <div className="relative">
          <button className="p-2.5 rounded-full transition-colors duration-200" 
                 style={{ 
                   background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)`,
                   color: colors.primary
                 }}>
            <Bell className="w-4 h-4" />
          </button>
        </div>
        
        <div className="relative">
          <button className="p-2.5 rounded-full transition-colors duration-200" 
                 style={{ 
                   background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)`,
                   color: colors.primary
                 }}>
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;