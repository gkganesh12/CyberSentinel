import React from 'react';
import { Shield } from 'lucide-react';

const SecurityGauge: React.FC = () => {
  const score = 94;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${(score / 100) * circumference} ${circumference}`;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <Shield className="h-6 w-6 mr-2 text-cyan-400" />
        Security Posture Score
      </h2>
      
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#374151"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={score >= 80 ? '#10B981' : score >= 60 ? '#F59E0B' : '#EF4444'}
              strokeWidth="8"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* Score text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{score}%</div>
              <div className="text-sm text-slate-400">Secure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Endpoints Protected</span>
          <span className="text-green-400">98%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Patches Updated</span>
          <span className="text-yellow-400">85%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Access Controls</span>
          <span className="text-green-400">100%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Backup Status</span>
          <span className="text-green-400">95%</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityGauge;