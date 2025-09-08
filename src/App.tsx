import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import IncidentDetails from './pages/IncidentDetails';
import IncidentsPage from './pages/IncidentsPage';
import ThreatIntelligencePage from './pages/ThreatIntelligencePage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import { fadeIn } from './utils/animations';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const navigateTo = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setSelectedIncident(data);
    }
  };

  // Render the current page with animation
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage key="login" onLogin={() => navigateTo('dashboard')} />;
      case 'dashboard':
        return <Dashboard key="dashboard" onNavigate={navigateTo} />;
      case 'alerts':
        return <AlertsPage key="alerts" onNavigate={navigateTo} />;
      case 'incidents':
        return <IncidentsPage key="incidents" onNavigate={navigateTo} />;
      case 'incident-details':
        return <IncidentDetails key="incident-details" incident={selectedIncident} onNavigate={navigateTo} />;
      case 'threat-intel':
        return <ThreatIntelligencePage key="threat-intel" onNavigate={navigateTo} />;
      case 'reports':
        return <ReportsPage key="reports" onNavigate={navigateTo} />;
      case 'settings':
        return <SettingsPage key="settings" onNavigate={navigateTo} />;
      default:
        return <Dashboard key="dashboard" onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <motion.div
        key={currentPage}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
        className="w-full h-full"
      >
        {renderPage()}
      </motion.div>
    </div>
  );
}

export default App;