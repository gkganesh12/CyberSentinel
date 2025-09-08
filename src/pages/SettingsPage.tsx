import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Save, User, Shield, Bell, Database, Lock, Globe, Server, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';

interface SettingsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState('90');
  const [apiKey, setApiKey] = useState('••••••••••••••••');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [logLevel, setLogLevel] = useState('info');
  
  const handleSaveSettings = () => {
    // In a real app, this would save settings to backend
    alert('Settings saved successfully!');
  };

  return (
    <PageTransition className="min-h-screen bg-slate-900">
      <Navbar onNavigate={onNavigate} />
      <div className="flex">
        <Sidebar currentPage="settings" onNavigate={onNavigate} />
        
        <motion.main 
          className="flex-1 p-6 ml-64"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex justify-between items-center mb-6"
            variants={slideInFromBottom}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Settings
            </motion.h1>
            
            <motion.button 
              onClick={handleSaveSettings}
              className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05, backgroundColor: '#0891b2' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </motion.button>
          </motion.div>

          {/* Settings Tabs */}
          <motion.div 
            className="flex border-b border-slate-700 mb-6 overflow-x-auto"
            variants={staggerChildren}
            initial="hidden"
            animate="show"
          >
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'general' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('general')}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <User className="inline-block mr-2 h-4 w-4" />
              General
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'security' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('security')}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Shield className="inline-block mr-2 h-4 w-4" />
              Security
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'notifications' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('notifications')}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Bell className="inline-block mr-2 h-4 w-4" />
              Notifications
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'data' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => setActiveTab('data')}
            >
              <Database className="inline-block mr-2 h-4 w-4" />
              Data Management
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'api' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('api')}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Globe className="inline-block mr-2 h-4 w-4" />
              API Access
            </motion.button>
            <motion.button
              className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'system' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab('system')}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Server className="inline-block mr-2 h-4 w-4" />
              System
            </motion.button>
          </motion.div>

          {/* Settings Content */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">User Interface</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Dark Mode</p>
                      <p className="text-sm text-slate-400">Enable dark mode for the dashboard interface</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={darkModeEnabled}
                        onChange={() => setDarkModeEnabled(!darkModeEnabled)}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">System Updates</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Automatic Updates</p>
                      <p className="text-sm text-slate-400">Allow the system to update automatically when new versions are available</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={autoUpdateEnabled}
                        onChange={() => setAutoUpdateEnabled(!autoUpdateEnabled)}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Two-Factor Authentication</p>
                      <p className="text-sm text-slate-400">Require a verification code in addition to your password</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={twoFactorEnabled}
                        onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">Password</h3>
                  <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    <Lock className="inline-block mr-2 h-4 w-4" />
                    Change Password
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Alert Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Enable Notifications</p>
                      <p className="text-sm text-slate-400">Receive notifications for security alerts and incidents</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">Notification Channels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input 
                        id="email-notifications" 
                        type="checkbox" 
                        className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                        defaultChecked
                      />
                      <label htmlFor="email-notifications" className="ml-2 text-sm font-medium text-slate-300">Email</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        id="sms-notifications" 
                        type="checkbox" 
                        className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                        defaultChecked
                      />
                      <label htmlFor="sms-notifications" className="ml-2 text-sm font-medium text-slate-300">SMS</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        id="slack-notifications" 
                        type="checkbox" 
                        className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                        defaultChecked
                      />
                      <label htmlFor="slack-notifications" className="ml-2 text-sm font-medium text-slate-300">Slack</label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Management Settings */}
            {activeTab === 'data' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Data Retention</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Retention Period</p>
                      <p className="text-sm text-slate-400">How long to keep security event data</p>
                    </div>
                    <select 
                      className="bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5"
                      value={dataRetentionPeriod}
                      onChange={(e) => setDataRetentionPeriod(e.target.value)}
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">Data Export</h3>
                  <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    <Database className="inline-block mr-2 h-4 w-4" />
                    Export All Data
                  </button>
                </div>
              </div>
            )}

            {/* API Settings */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">API Access</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">API Key</p>
                      <p className="text-sm text-slate-400">Use this key to authenticate API requests</p>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        className="bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5 mr-2"
                        value={apiKey}
                        readOnly
                      />
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                        <RefreshCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">Rate Limiting</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">API Rate Limit</p>
                      <p className="text-sm text-slate-400">Maximum number of API requests per minute</p>
                    </div>
                    <select 
                      className="bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5"
                      defaultValue="100"
                    >
                      <option value="60">60 requests/minute</option>
                      <option value="100">100 requests/minute</option>
                      <option value="500">500 requests/minute</option>
                      <option value="1000">1000 requests/minute</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeTab === 'system' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Logging</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300">Log Level</p>
                      <p className="text-sm text-slate-400">Set the verbosity of system logs</p>
                    </div>
                    <select 
                      className="bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5"
                      value={logLevel}
                      onChange={(e) => setLogLevel(e.target.value)}
                    >
                      <option value="error">Error</option>
                      <option value="warn">Warning</option>
                      <option value="info">Info</option>
                      <option value="debug">Debug</option>
                      <option value="trace">Trace</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-medium text-white mb-4">System Maintenance</h3>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                      <RefreshCw className="inline-block mr-2 h-4 w-4" />
                      Restart Services
                    </button>
                    <button className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-colors">
                      Clear All Data
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.main>
      </div>
    </PageTransition>
  );
};

export default SettingsPage;