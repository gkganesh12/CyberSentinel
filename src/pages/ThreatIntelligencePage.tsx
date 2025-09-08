import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Globe, Shield, AlertTriangle, Zap, Calendar, Search } from 'lucide-react';

interface ThreatIntelligencePageProps {
  onNavigate: (page: string, data?: any) => void;
}

const ThreatIntelligencePage: React.FC<ThreatIntelligencePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('global');
  const [searchQuery, setSearchQuery] = useState('');

  const threatFeeds = [
    {
      id: 1,
      name: 'APT-29 Campaign',
      type: 'Advanced Persistent Threat',
      severity: 'Critical',
      lastUpdated: '2 hours ago',
      description: 'Sophisticated state-sponsored threat actor targeting government and defense sectors with spear-phishing campaigns.',
      indicators: 42,
      relatedIncidents: 3
    },
    {
      id: 2,
      name: 'Ransomware-as-a-Service: BlackCat',
      type: 'Ransomware',
      severity: 'High',
      lastUpdated: '1 day ago',
      description: 'Emerging RaaS operation with sophisticated encryption and double extortion techniques targeting financial institutions.',
      indicators: 28,
      relatedIncidents: 5
    },
    {
      id: 3,
      name: 'CVE-2023-XXXX Exploitation',
      type: 'Vulnerability',
      severity: 'High',
      lastUpdated: '3 days ago',
      description: 'Active exploitation of critical remote code execution vulnerability in widely used enterprise software.',
      indicators: 17,
      relatedIncidents: 2
    },
    {
      id: 4,
      name: 'DDoS Campaign: Financial Sector',
      type: 'DDoS',
      severity: 'Medium',
      lastUpdated: '5 days ago',
      description: 'Coordinated distributed denial of service attacks targeting financial institutions across North America.',
      indicators: 31,
      relatedIncidents: 8
    },
    {
      id: 5,
      name: 'Supply Chain Compromise: DevTools',
      type: 'Supply Chain',
      severity: 'Critical',
      lastUpdated: '1 week ago',
      description: 'Sophisticated supply chain attack targeting development tools used in critical infrastructure sectors.',
      indicators: 53,
      relatedIncidents: 12
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

  const filteredThreats = threatFeeds.filter(threat => 
    threat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    threat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    threat.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="threat-intel" onNavigate={onNavigate} />
        
        <main className="flex-1 p-6 ml-64">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Threat Intelligence</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search threats..."
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-700 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'global' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('global')}
            >
              <Globe className="inline-block mr-2 h-4 w-4" />
              Global Threats
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'targeted' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('targeted')}
            >
              <Shield className="inline-block mr-2 h-4 w-4" />
              Targeted Threats
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'vulnerabilities' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('vulnerabilities')}
            >
              <AlertTriangle className="inline-block mr-2 h-4 w-4" />
              Vulnerabilities
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'campaigns' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('campaigns')}
            >
              <Zap className="inline-block mr-2 h-4 w-4" />
              Active Campaigns
            </button>
          </div>

          {/* Threat Feed */}
          <div className="grid grid-cols-1 gap-4">
            {filteredThreats.map((threat) => (
              <div 
                key={threat.id} 
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors cursor-pointer"
                onClick={() => onNavigate('threat-details', threat)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{threat.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-slate-400 mr-4">{threat.type}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getSeverityColor(threat.severity)}`}>
                        {threat.severity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-slate-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {threat.lastUpdated}
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{threat.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-400">{threat.indicators} Indicators</span>
                  <span className="text-amber-400">{threat.relatedIncidents} Related Incidents</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ThreatIntelligencePage;