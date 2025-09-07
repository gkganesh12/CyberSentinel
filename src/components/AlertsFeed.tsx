import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { mockAlerts } from '../utils/mockData';

interface AlertsFeedProps {
  onNavigate: (page: string) => void;
}

const AlertsFeed: React.FC<AlertsFeedProps> = ({ onNavigate }) => {
  const recentAlerts = mockAlerts.slice(0, 5);

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-400 border-red-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'low': return 'text-green-400 border-green-400';
      default: return 'text-slate-400 border-slate-400';
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-red-400" />
          Real-time Alerts
        </h2>
        <button
          onClick={() => onNavigate('alerts')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentAlerts.map((alert) => (
          <div
            key={alert.id}
            className="border-l-4 pl-4 py-3 bg-slate-700/30 rounded-r-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
            style={{ borderLeftColor: getSeverityColor(alert.severity).split(' ')[1].replace('border-', '#') }}
            onClick={() => onNavigate('incident-details', alert)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'High' ? 'bg-red-400/10 text-red-400' :
                    alert.severity === 'Medium' ? 'bg-yellow-400/10 text-yellow-400' :
                    'bg-green-400/10 text-green-400'
                  }`}>
                    {alert.severity}
                  </span>
                  <span className="ml-2 text-xs text-slate-400">{alert.source}</span>
                </div>
                <p className="text-white text-sm mb-1">{alert.description}</p>
                <div className="flex items-center text-xs text-slate-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {alert.timestamp}
                </div>
              </div>
              <div className="ml-4">
                <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                  alert.status === 'New' ? 'bg-red-400/10 text-red-400' :
                  alert.status === 'Investigating' ? 'bg-yellow-400/10 text-yellow-400' :
                  'bg-green-400/10 text-green-400'
                }`}>
                  {alert.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsFeed;