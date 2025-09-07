import React from 'react';
import { Shield, Eye, CheckCircle, Clock } from 'lucide-react';

interface IncidentsWidgetProps {
  onNavigate: (page: string) => void;
}

const IncidentsWidget: React.FC<IncidentsWidgetProps> = ({ onNavigate }) => {
  const incidents = [
    { id: 'INC-001', title: 'Phishing Email Campaign', status: 'Investigating', priority: 'High', time: '2h ago' },
    { id: 'INC-002', title: 'Suspicious Network Traffic', status: 'Resolved', priority: 'Medium', time: '4h ago' },
    { id: 'INC-003', title: 'Failed Login Attempts', status: 'Investigating', priority: 'Low', time: '6h ago' },
    { id: 'INC-004', title: 'Malware Detection', status: 'Resolved', priority: 'High', time: '1d ago' }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'Investigating' ? <Eye className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />;
  };

  const getStatusColor = (status: string) => {
    return status === 'Investigating' ? 'text-yellow-400' : 'text-green-400';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Shield className="h-6 w-6 mr-2 text-blue-400" />
          Active Incidents
        </h2>
        <button
          onClick={() => onNavigate('alerts')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          Manage All
        </button>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
            onClick={() => onNavigate('incident-details', incident)}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{incident.title}</h3>
              <div className={`flex items-center ${getStatusColor(incident.status)}`}>
                {getStatusIcon(incident.status)}
                <span className="ml-1 text-sm">{incident.status}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-slate-400">{incident.id}</span>
                <span className={getPriorityColor(incident.priority)}>{incident.priority}</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Clock className="h-3 w-3 mr-1" />
                {incident.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-yellow-400">2</p>
            <p className="text-xs text-slate-400">Investigating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">2</p>
            <p className="text-xs text-slate-400">Resolved</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">1</p>
            <p className="text-xs text-slate-400">Critical</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentsWidget;