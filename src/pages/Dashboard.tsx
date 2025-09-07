import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SecurityGauge from '../components/SecurityGauge';
import AlertsFeed from '../components/AlertsFeed';
import IncidentsWidget from '../components/IncidentsWidget';
import NetworkChart from '../components/NetworkChart';
import ResponseLog from '../components/ResponseLog';
import { Shield, Activity, AlertTriangle, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string, data?: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="dashboard" onNavigate={onNavigate} />
        
        <main className="flex-1 p-6 ml-64">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Security Score</p>
                  <p className="text-2xl font-bold text-green-400">94%</p>
                </div>
                <Shield className="h-8 w-8 text-green-400" />
              </div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Threats</p>
                  <p className="text-2xl font-bold text-red-400">3</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Endpoints</p>
                  <p className="text-2xl font-bold text-cyan-400">247</p>
                </div>
                <Activity className="h-8 w-8 text-cyan-400" />
              </div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Response Time</p>
                  <p className="text-2xl font-bold text-yellow-400">1.2s</p>
                </div>
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Security Posture */}
            <div className="lg:col-span-1">
              <SecurityGauge />
            </div>
            
            {/* Alerts Feed */}
            <div className="lg:col-span-2">
              <AlertsFeed onNavigate={onNavigate} />
            </div>
          </div>

          {/* Incidents and Network Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <IncidentsWidget onNavigate={onNavigate} />
            <NetworkChart />
          </div>

          {/* Response Actions Log */}
          <div className="mt-6">
            <ResponseLog />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;