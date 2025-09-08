import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Shield, Calendar, Search, Filter, AlertCircle, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';
import PageTransition from '../components/PageTransition';

interface IncidentsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const IncidentsPage: React.FC<IncidentsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState('30d');

  const incidents = [
    {
      id: 1,
      title: 'Unauthorized Access Attempt',
      severity: 'Critical',
      status: 'Active',
      timestamp: '2023-11-01T14:32:00',
      source: 'Firewall',
      target: 'Authentication Server',
      description: 'Multiple failed login attempts from suspicious IP addresses targeting admin accounts.',
      affectedSystems: ['Authentication Server', 'User Database'],
      assignedTo: 'Sarah Chen'
    },
    {
      id: 2,
      title: 'Malware Detection',
      severity: 'High',
      status: 'Investigating',
      timestamp: '2023-10-31T09:15:00',
      source: 'Endpoint Protection',
      target: 'Workstation WS-42',
      description: 'Trojan detected on marketing department workstation. Initial analysis suggests phishing email vector.',
      affectedSystems: ['Workstation WS-42'],
      assignedTo: 'Michael Rodriguez'
    },
    {
      id: 3,
      title: 'Data Exfiltration Alert',
      severity: 'Critical',
      status: 'Contained',
      timestamp: '2023-10-30T23:05:00',
      source: 'DLP System',
      target: 'File Server',
      description: 'Unusual data transfer detected from finance department file server to external IP address.',
      affectedSystems: ['File Server', 'Finance Database'],
      assignedTo: 'Alex Johnson'
    },
    {
      id: 4,
      title: 'Suspicious API Calls',
      severity: 'Medium',
      status: 'Resolved',
      timestamp: '2023-10-28T16:47:00',
      source: 'API Gateway',
      target: 'Customer Database',
      description: 'Abnormal pattern of API calls attempting to extract customer records. Rate limiting engaged.',
      affectedSystems: ['API Gateway', 'Customer Database'],
      assignedTo: 'Jamie Taylor'
    },
    {
      id: 5,
      title: 'Ransomware Outbreak',
      severity: 'Critical',
      status: 'Mitigated',
      timestamp: '2023-10-25T08:30:00',
      source: 'Email Gateway',
      target: 'Multiple Systems',
      description: 'Ransomware detected in accounting department. Isolated affected systems and initiated recovery protocols.',
      affectedSystems: ['Accounting Workstations', 'Department File Share'],
      assignedTo: 'Chris Washington'
    },
    {
      id: 6,
      title: 'DDoS Attack',
      severity: 'High',
      status: 'Resolved',
      timestamp: '2023-10-22T11:20:00',
      source: 'Web Application Firewall',
      target: 'Public Website',
      description: 'Distributed denial of service attack targeting company website. Mitigation measures successfully deployed.',
      affectedSystems: ['Web Servers', 'Load Balancers'],
      assignedTo: 'Robin Patel'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'text-red-500 bg-red-500/10';
      case 'high': return 'text-orange-500 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-500 bg-green-500/10';
      default: return 'text-blue-500 bg-blue-500/10';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-red-400 bg-red-400/10';
      case 'investigating': return 'text-amber-400 bg-amber-400/10';
      case 'contained': return 'text-blue-400 bg-blue-400/10';
      case 'mitigated': return 'text-purple-400 bg-purple-400/10';
      case 'resolved': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    // Filter by search query
    const matchesSearch = 
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.target.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by status
    const matchesStatus = activeFilter === 'all' || 
                         incident.status.toLowerCase() === activeFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <Navbar onNavigate={onNavigate} />
        <div className="flex">
          <Sidebar currentPage="incidents" onNavigate={onNavigate} />
          
          <motion.main 
            className="flex-1 p-6 ml-64"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
          <motion.div 
            className="flex justify-between items-center mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-2xl font-bold text-white"
              variants={slideInFromBottom}
              initial="hidden"
              animate="show"
            >Security Incidents</motion.h1>
            
            <motion.div 
              className="flex space-x-4"
              variants={staggerChildren}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="relative"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  placeholder="Search incidents..."
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              </motion.div>
              
              <motion.select 
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </motion.select>
            </motion.div>
          </motion.div>

          {/* Status Filters */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'all' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Incidents
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'active' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('active')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Active
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'investigating' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('investigating')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Investigating
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'contained' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('contained')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contained
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'mitigated' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('mitigated')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mitigated
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg font-medium text-sm ${activeFilter === 'resolved' ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveFilter('resolved')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resolved
            </motion.button>
          </motion.div>

          {/* Incidents Table */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Incident</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <motion.tbody
                variants={staggerChildren}
                initial="hidden"
                animate="show"
                className="divide-y divide-slate-700"
              >
                {filteredIncidents.map((incident, index) => (
                  <motion.tr 
                    key={incident.id} 
                    className="hover:bg-slate-750"
                    variants={fadeIn}
                    custom={index * 0.1}
                    whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-white">{incident.title}</div>
                        <div className="text-sm text-slate-400">{incident.source} → {incident.target}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {incident.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-slate-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {new Date(incident.timestamp).toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {incident.assignedTo}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center"
                        onClick={() => onNavigate('incident-details', incident)}
                      >
                        View Details
                        <ArrowUpRight className="ml-1 w-3 h-3" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
          </motion.main>
        </div>
      </div>
    </PageTransition>
  );
};

export default IncidentsPage;