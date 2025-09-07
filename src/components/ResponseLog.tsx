import React from 'react';
import { Zap, Shield, Ban, UserX, CheckCircle } from 'lucide-react';

const ResponseLog: React.FC = () => {
  const responseActions = [
    {
      id: 1,
      action: 'IP Address Blocked',
      target: '192.168.1.45',
      timestamp: '14:23:45',
      status: 'completed',
      icon: Ban,
      description: 'Malicious IP blocked from accessing network'
    },
    {
      id: 2,
      action: 'Host Isolated',
      target: 'DESKTOP-ABC123',
      timestamp: '14:22:30',
      status: 'completed',
      icon: Shield,
      description: 'Compromised host isolated from network'
    },
    {
      id: 3,
      action: 'User Account Disabled',
      target: 'john.doe@company.com',
      timestamp: '14:21:15',
      status: 'completed',
      icon: UserX,
      description: 'Suspicious user account temporarily disabled'
    },
    {
      id: 4,
      action: 'Malware Quarantined',
      target: 'suspicious_file.exe',
      timestamp: '14:20:05',
      status: 'completed',
      icon: Shield,
      description: 'Malicious file moved to secure quarantine'
    },
    {
      id: 5,
      action: 'Firewall Rule Updated',
      target: 'Port 445',
      timestamp: '14:19:22',
      status: 'pending',
      icon: Shield,
      description: 'New firewall rule to block SMB traffic'
    }
  ];

  const getActionIcon = (IconComponent: any, status: string) => {
    return (
      <div className={`p-2 rounded-lg ${status === 'completed' ? 'bg-green-400/10' : 'bg-yellow-400/10'}`}>
        <IconComponent className={`h-4 w-4 ${status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`} />
      </div>
    );
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Zap className="h-6 w-6 mr-2 text-purple-400" />
          Automated Response Actions
        </h2>
        <div className="flex items-center text-green-400">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span className="text-sm">4 actions completed</span>
        </div>
      </div>

      <div className="space-y-4">
        {responseActions.map((action) => (
          <div key={action.id} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
            {getActionIcon(action.icon, action.status)}
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-medium">{action.action}</h3>
                <span className="text-slate-400 text-sm">{action.timestamp}</span>
              </div>
              <p className="text-slate-300 text-sm mb-1">{action.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 text-sm font-mono">{action.target}</span>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                  action.status === 'completed' 
                    ? 'bg-green-400/10 text-green-400' 
                    : 'bg-yellow-400/10 text-yellow-400'
                }`}>
                  {action.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-green-400">24</p>
            <p className="text-xs text-slate-400">Actions Today</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-400">98%</p>
            <p className="text-xs text-slate-400">Success Rate</p>
          </div>
          <div>
            <p className="text-lg font-bold text-cyan-400">1.2s</p>
            <p className="text-xs text-slate-400">Avg Response</p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-400">156</p>
            <p className="text-xs text-slate-400">Threats Blocked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseLog;