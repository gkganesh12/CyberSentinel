import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FileText, Download, Filter, Calendar, BarChart2, PieChart, LineChart, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';
import PageTransition from '../components/PageTransition';

interface ReportsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const ReportsPage: React.FC<ReportsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('security');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState('30d');

  const reports = [
    {
      id: 1,
      title: 'Monthly Security Posture Assessment',
      category: 'security',
      type: 'Automated',
      generated: '2023-11-01',
      description: 'Comprehensive analysis of security posture including vulnerabilities, threats, and compliance status.',
      metrics: ['Vulnerability Trends', 'Threat Detection Rate', 'Compliance Score'],
      format: 'PDF'
    },
    {
      id: 2,
      title: 'Quarterly Compliance Report',
      category: 'compliance',
      type: 'Manual',
      generated: '2023-10-15',
      description: 'Detailed compliance status against industry standards including GDPR, HIPAA, and PCI DSS.',
      metrics: ['Compliance Score', 'Control Effectiveness', 'Remediation Progress'],
      format: 'XLSX'
    },
    {
      id: 3,
      title: 'Incident Response Summary',
      category: 'incidents',
      type: 'Automated',
      generated: '2023-10-28',
      description: 'Summary of security incidents, response actions taken, and resolution metrics.',
      metrics: ['MTTR', 'Incident Volume', 'Impact Assessment'],
      format: 'PDF'
    },
    {
      id: 4,
      title: 'Threat Intelligence Briefing',
      category: 'threats',
      type: 'Automated',
      generated: '2023-10-30',
      description: 'Analysis of current threat landscape and potential impacts to organizational assets.',
      metrics: ['Threat Severity', 'Geographic Distribution', 'Attack Vector Analysis'],
      format: 'PDF'
    },
    {
      id: 5,
      title: 'Vulnerability Management Report',
      category: 'security',
      type: 'Automated',
      generated: '2023-10-25',
      description: 'Status of vulnerability remediation efforts and risk exposure metrics.',
      metrics: ['Open Vulnerabilities', 'Remediation Rate', 'Risk Exposure Score'],
      format: 'XLSX'
    },
    {
      id: 6,
      title: 'Executive Security Summary',
      category: 'executive',
      type: 'Manual',
      generated: '2023-10-20',
      description: 'High-level overview of security posture and key metrics for executive leadership.',
      metrics: ['Security Score', 'Risk Trend', 'Major Incidents'],
      format: 'PPTX'
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === 'all' || report.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <Navbar onNavigate={onNavigate} />
        <div className="flex">
          <Sidebar currentPage="reports" onNavigate={onNavigate} />
          
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
            >Security Reports</motion.h1>
            
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              </div>
              
              <select 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </motion.div>

          {/* Report Categories */}
          <motion.div 
            className="flex border-b border-slate-700 mb-6 overflow-x-auto"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'all' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('all')}
            >
              All Reports
            </button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'security' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('security')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <BarChart2 className="inline-block mr-2 h-4 w-4" />
              Security Posture
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'compliance' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('compliance')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <PieChart className="inline-block mr-2 h-4 w-4" />
              Compliance
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'incidents' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('incidents')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <LineChart className="inline-block mr-2 h-4 w-4" />
              Incidents
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'threats' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('threats')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Filter className="inline-block mr-2 h-4 w-4" />
              Threats
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'executive' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('executive')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <FileText className="inline-block mr-2 h-4 w-4" />
              Executive
            </motion.button>
          </motion.div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <div 
                key={report.id} 
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors cursor-pointer"
                onClick={() => onNavigate('report-details', report)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{report.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                    {report.type}
                  </span>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{report.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {report.metrics.map((metric, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {report.generated}
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300">
                    <Download className="h-3 w-3 mr-1" />
                    {report.format}
                  </button>
                </div>
              </div>
            ))}
          </div>
          </motion.main>
        </div>
      </div>
    </PageTransition>
  );
};

export default ReportsPage;