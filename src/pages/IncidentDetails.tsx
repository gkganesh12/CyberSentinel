import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ArrowLeft, Clock, User, Shield, Ban, UserX, AlertTriangle } from 'lucide-react';

interface IncidentDetailsProps {
  incident: any;
  onNavigate: (page: string, data?: any) => void;
}

const IncidentDetails: React.FC<IncidentDetailsProps> = ({ incident, onNavigate }) => {
  if (!incident) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">No Incident Selected</h2>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const mitreAttacks = [
    { id: 'T1566', name: 'Phishing', tactic: 'Initial Access' },
    { id: 'T1204', name: 'User Execution', tactic: 'Execution' },
    { id: 'T1055', name: 'Process Injection', tactic: 'Defense Evasion' },
    { id: 'T1083', name: 'File and Directory Discovery', tactic: 'Discovery' }
  ];

  const timeline = [
    { time: '14:23:45', event: 'Suspicious email detected', status: 'detected' },
    { time: '14:24:12', event: 'User clicked malicious link', status: 'critical' },
    { time: '14:24:30', event: 'Payload execution blocked', status: 'blocked' },
    { time: '14:25:01', event: 'Network traffic analyzed', status: 'analyzed' },
    { time: '14:25:45', event: 'Host isolated from network', status: 'contained' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="incidents" onNavigate={onNavigate} />
        
        <main className="flex-1 p-6 ml-64">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => onNavigate('alerts')}
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Alerts
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">Incident Analysis</h1>
              <p className="text-slate-400">ID: INC-{incident.id}</p>
            </div>
          </div>

          {/* Incident Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Incident Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Description</p>
                  <p className="text-white">{incident.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">Severity</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      incident.severity === 'High' ? 'bg-red-400/10 text-red-400' :
                      incident.severity === 'Medium' ? 'bg-yellow-400/10 text-yellow-400' :
                      'bg-green-400/10 text-green-400'
                    }`}>
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {incident.severity}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Status</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      incident.status === 'New' ? 'bg-red-400/10 text-red-400' :
                      incident.status === 'Investigating' ? 'bg-yellow-400/10 text-yellow-400' :
                      'bg-green-400/10 text-green-400'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">First Detected</p>
                    <p className="text-white">{incident.timestamp}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Source</p>
                    <p className="text-white">{incident.source}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Automated Response</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Shield className="h-4 w-4 mr-2" />
                  Isolate Host
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Ban className="h-4 w-4 mr-2" />
                  Block IP Address
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                  <UserX className="h-4 w-4 mr-2" />
                  Disable User Account
                </button>
              </div>
            </div>
          </div>

          {/* Timeline and MITRE ATT&CK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Incident Timeline */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-cyan-400" />
                Incident Timeline
              </h2>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-3 h-3 rounded-full mt-2 mr-4 ${
                      item.status === 'critical' ? 'bg-red-400' :
                      item.status === 'blocked' ? 'bg-orange-400' :
                      item.status === 'contained' ? 'bg-green-400' :
                      'bg-cyan-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-sm">{item.event}</p>
                        <p className="text-slate-400 text-xs">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MITRE ATT&CK Mapping */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">MITRE ATT&CK Mapping</h2>
              <div className="space-y-3">
                {mitreAttacks.map((attack) => (
                  <div key={attack.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{attack.name}</p>
                      <p className="text-slate-400 text-sm">{attack.tactic}</p>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">{attack.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Evidence and Analysis */}
          <div className="mt-6 bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Evidence & Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Network Indicators</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Source IP:</span>
                    <span className="text-red-400 font-mono">192.168.1.45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Destination:</span>
                    <span className="text-red-400 font-mono">malicious-site.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Protocol:</span>
                    <span className="text-white">HTTPS</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">File Hashes</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-slate-400 text-sm">MD5:</span>
                    <p className="text-yellow-400 font-mono text-sm">d41d8cd98f00b204e9800998ecf8427e</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">SHA256:</span>
                    <p className="text-yellow-400 font-mono text-sm break-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IncidentDetails;