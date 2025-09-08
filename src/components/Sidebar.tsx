import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Shield, 
  Brain, 
  FileText, 
  Settings,
  Activity
} from 'lucide-react';
import { slideInFromLeft, staggerChildren } from '../utils/animations';

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
    <motion.div 
      className="fixed left-0 top-16 h-full w-64 bg-slate-800 border-r border-slate-700 z-40"
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft}
    >
      <div className="p-4">
        <motion.nav 
          className="space-y-2"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    } 
                  }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  x: isActive ? 0 : 5,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Status Indicator */}
        <motion.div 
          className="mt-8 p-4 bg-slate-700 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="flex items-center mb-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Activity className="h-4 w-4 text-green-400 mr-2" />
            </motion.div>
            <span className="text-sm font-medium text-white">System Status</span>
          </div>
          <div className="flex items-center">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full mr-2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            <span className="text-xs text-slate-300">All Systems Operational</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;