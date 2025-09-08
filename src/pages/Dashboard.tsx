import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SecurityGauge from '../components/SecurityGauge';
import AlertsFeed from '../components/AlertsFeed';
import IncidentsWidget from '../components/IncidentsWidget';
import NetworkChart from '../components/NetworkChart';
import ResponseLog from '../components/ResponseLog';
import { Shield, Activity, AlertTriangle, TrendingUp } from 'lucide-react';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';

interface DashboardProps {
  onNavigate: (page: string, data?: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      className="min-h-screen bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="dashboard" onNavigate={onNavigate} />
        
        <motion.main 
          className="flex-1 p-6 ml-64"
          initial="hidden"
          animate="visible"
          variants={slideInFromBottom}
        >
          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {/* Security Score Card */}
            <motion.div 
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-green-900/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 } 
                }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Security Score</p>
                  <motion.p 
                    className="text-2xl font-bold text-green-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    94%
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="h-8 w-8 text-green-400" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Active Threats Card */}
            <motion.div 
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-red-900/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 } 
                }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(248, 113, 113, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Threats</p>
                  <motion.p 
                    className="text-2xl font-bold text-red-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                  >
                    3
                  </motion.p>
                </div>
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Endpoints Card */}
            <motion.div 
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-900/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 } 
                }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(34, 211, 238, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Endpoints</p>
                  <motion.p 
                    className="text-2xl font-bold text-cyan-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: 'spring' }}
                  >
                    247
                  </motion.p>
                </div>
                <motion.div
                  animate={{ 
                    y: [0, -3, 0, 3, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Activity className="h-8 w-8 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Response Time Card */}
            <motion.div 
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-900/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 } 
                }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(250, 204, 21, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Response Time</p>
                  <motion.p 
                    className="text-2xl font-bold text-yellow-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                  >
                    1.2s
                  </motion.p>
                </div>
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <TrendingUp className="h-8 w-8 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Dashboard Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.6
                } 
              }
            }}
          >
            {/* Security Posture */}
            <motion.div 
              className="lg:col-span-1"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5 } 
                }
              }}
            >
              <SecurityGauge />
            </motion.div>
            
            {/* Alerts Feed */}
            <motion.div 
              className="lg:col-span-2"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5 } 
                }
              }}
            >
              <AlertsFeed onNavigate={onNavigate} />
            </motion.div>
          </motion.div>

          {/* Incidents and Network Activity */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.8,
                  duration: 0.5,
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 } 
                }
              }}
            >
              <IncidentsWidget onNavigate={onNavigate} />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 } 
                }
              }}
            >
              <NetworkChart />
            </motion.div>
          </motion.div>

          {/* Response Actions Log */}
          <motion.div 
            className="mt-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 1, duration: 0.5 } 
              }
            }}
          >
            <ResponseLog />
          </motion.div>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default Dashboard;