import React, { useState } from 'react';
import { Shield, Lock, User, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeIn, slideInFromBottom, staggerChildren } from '../utils/animations';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <PageTransition className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Cyber Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>

      {/* Floating circuit elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={staggerChildren}
        initial="hidden"
        animate="show"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            variants={fadeIn}
            custom={i * 0.1}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 w-full max-w-md p-8"
        variants={slideInFromBottom}
        initial="hidden"
        animate="show"
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
      >
        {/* Logo Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.8 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Shield className="h-12 w-12 text-cyan-400 mr-3" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CyberSentinel
            </h1>
          </motion.div>
          <p className="text-slate-400 text-sm">AI-Powered Cyber Defense Platform</p>
        </motion.div>

        {/* Login Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={staggerChildren}
          initial="hidden"
          animate="show"
        >
          {/* Username Field */}
          <motion.div 
            className="relative"
            variants={fadeIn}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div 
            className="relative"
            variants={fadeIn}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </motion.div>

          {/* Sign In Button */}
          <motion.button
            type="submit"
            className="w-full relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-400/30"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Secure Sign In</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-slate-500 text-xs">
            Protected by enterprise-grade encryption
          </p>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default LoginPage;