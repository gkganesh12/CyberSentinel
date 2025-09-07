import React from 'react';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Shield, 
  Brain, 
  FileText, 
  Settings,
  Activity
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
    { id: 'incidents', label: 'Incidents', icon: Shield },
    { id: 'threat-intel', label: 'Threat Intelligence', icon: Brain },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-slate-800 border-r border-slate-700 z-40">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Status Indicator */}
        <div className="mt-8 p-4 bg-slate-700 rounded-lg">
          <div className="flex items-center mb-2">
            <Activity className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-white">System Status</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-slate-300">All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;