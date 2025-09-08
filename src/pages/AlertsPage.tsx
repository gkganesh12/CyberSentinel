import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Search, Filter, ChevronDown, AlertCircle, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';
import { mockAlerts } from '../utils/mockData';

interface AlertsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const AlertsPage: React.FC<AlertsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAlerts = mockAlerts.filter(alert => {
    const matchesSearch = alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || alert.severity.toLowerCase() === severityFilter;
    const matchesStatus = statusFilter === 'all' || alert.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return <AlertCircle className="h-4 w-4" />;
      case 'medium': return <Shield className="h-4 w-4" />;
      case 'low': return <Zap className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <PageTransition className="min-h-screen bg-slate-900">
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="alerts" onNavigate={onNavigate} />
        
        <motion.main 
          className="flex-1 p-6 ml-64"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-8"
            variants={slideInFromBottom}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Security Alerts
            </motion.h1>
            <motion.p 
              className="text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
             >
               Monitor and manage security incidents in real-time
             </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
              variants={staggerChildren}
              initial="hidden"
              animate="show"
            >
              {/* Search */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </motion.div>

              {/* Severity Filter */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <select
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
                >
                  <option value="all">All Severities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </motion.div>

              {/* Status Filter */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="investigating">Investigating</option>
                  <option value="resolved">Resolved</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </motion.div>

              {/* Advanced Filters */}
              <motion.button 
                className="flex items-center justify-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                variants={fadeIn}
                whileHover={{ scale: 1.05, backgroundColor: '#0891b2' }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Advanced
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Alerts Table */}
          <motion.div 
            className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700 border-b border-slate-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Severity</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <motion.tbody 
                  className="divide-y divide-slate-700"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="show"
                >
                  {filteredAlerts.map((alert, index) => (
                    <motion.tr 
                      key={alert.id} 
                      className="hover:bg-slate-700/50 transition-colors"
                      variants={fadeIn}
                      custom={index * 0.1}
                      whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                        {alert.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {getSeverityIcon(alert.severity)}
                          <span className="ml-1">{alert.severity}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300 max-w-md">
                        {alert.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                        {alert.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          alert.status === 'New' ? 'bg-red-400/10 text-red-400' :
                          alert.status === 'Investigating' ? 'bg-yellow-400/10 text-yellow-400' :
                          'bg-green-400/10 text-green-400'
                        }`}>
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => onNavigate('incident-details', alert)}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Investigate
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>

          {/* Results Summary */}
          <div className="mt-4 flex justify-between items-center text-sm text-slate-400">
            <p>Showing {filteredAlerts.length} of {mockAlerts.length} alerts</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 transition-colors">Previous</button>
              <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 transition-colors">Next</button>
            </div>
          </div>
        </motion.main>
      </div>
    </PageTransition>
  );
};

export default AlertsPage;