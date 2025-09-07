import React from 'react';
import { Shield, User, Settings, LogOut } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-cyan-400 mr-3" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            CyberSentinel
          </h1>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
              <User className="h-6 w-6" />
              <span>Admin User</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg border border-slate-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <button className="flex items-center w-full px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
                <button 
                  onClick={() => onNavigate('login')}
                  className="flex items-center w-full px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;