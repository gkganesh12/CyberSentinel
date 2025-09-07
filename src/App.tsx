import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import IncidentDetails from './pages/IncidentDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const navigateTo = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setSelectedIncident(data);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {currentPage === 'login' && <LoginPage onLogin={() => navigateTo('dashboard')} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentPage === 'alerts' && <AlertsPage onNavigate={navigateTo} />}
      {currentPage === 'incident-details' && <IncidentDetails incident={selectedIncident} onNavigate={navigateTo} />}
    </div>
  );
}

export default App;