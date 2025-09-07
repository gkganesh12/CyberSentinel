import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const NetworkChart: React.FC = () => {
  // Mock data points for network activity
  const networkData = [
    { time: '00:00', normal: 45, anomaly: 2 },
    { time: '04:00', normal: 30, anomaly: 1 },
    { time: '08:00', normal: 75, anomaly: 0 },
    { time: '12:00', normal: 85, anomaly: 3 },
    { time: '16:00', normal: 95, anomaly: 5 },
    { time: '20:00', normal: 60, anomaly: 1 }
  ];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Activity className="h-6 w-6 mr-2 text-green-400" />
          Network Traffic Analysis
        </h2>
        <div className="flex items-center text-green-400">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm">+5.2% today</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 mb-4">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={40 * i + 10}
              x2="400"
              y2={40 * i + 10}
              stroke="#374151"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}

          {/* Normal traffic line */}
          <polyline
            points={networkData.map((point, index) => 
              `${(index * 80) + 20},${180 - (point.normal * 1.5)}`
            ).join(' ')}
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            className="drop-shadow-sm"
          />

          {/* Anomaly indicators */}
          {networkData.map((point, index) => 
            point.anomaly > 0 && (
              <circle
                key={index}
                cx={(index * 80) + 20}
                cy={180 - (point.anomaly * 20)}
                r="4"
                fill="#EF4444"
                className="animate-pulse"
              />
            )
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <span className="text-slate-300 text-sm">Normal Traffic</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-slate-300 text-sm">Anomalies</span>
          </div>
        </div>
        
        {/* Time indicators */}
        <div className="flex items-center space-x-4 text-xs text-slate-400">
          {networkData.slice(0, 3).map(point => (
            <span key={point.time}>{point.time}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-slate-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-green-400">99.2%</p>
            <p className="text-xs text-slate-400">Uptime</p>
          </div>
          <div>
            <p className="text-lg font-bold text-cyan-400">2.1TB</p>
            <p className="text-xs text-slate-400">Data Processed</p>
          </div>
          <div>
            <p className="text-lg font-bold text-yellow-400">12</p>
            <p className="text-xs text-slate-400">Anomalies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkChart;