import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, LogOut } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import { slideInFromTop, staggerChildren } from '../utils/animations';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <motion.nav 
      className="bg-slate-800 border-b border-slate-700 px-6 py-4"
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.img 
            src={logoSvg} 
            alt="CyberSentinel Logo" 
            className="h-10 w-10 mr-3" 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ rotate: -10, transition: { duration: 0.3 } }}
          />
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{ textShadow: ['0px 0px 0px rgba(14, 165, 233, 0)', '0px 0px 8px rgba(14, 165, 233, 0.5)', '0px 0px 0px rgba(14, 165, 233, 0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CyberSentinel
          </motion.h1>
        </motion.div>

        {/* User Section */}
        <motion.div 
          className="flex items-center space-x-4"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group">
            <motion.button 
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="h-6 w-6" />
              <span>Admin User</span>
            </motion.button>
            
            {/* Dropdown Menu */}
            <motion.div 
              className="absolute right-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg border border-slate-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-2">
                <motion.button 
                  className="flex items-center w-full px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </motion.button>
                <motion.button 
                  onClick={() => onNavigate('login')}
                  className="flex items-center w-full px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;