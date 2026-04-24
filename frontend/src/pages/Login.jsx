import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      login(email, password);
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 opacity-20 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 opacity-20 rounded-full blur-[30px] translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Sign in to rescue food & track impact.</p>
          </div>

          <form onSubmit={handleLogin} className="relative z-10 space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/60 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-700 font-medium"
                  placeholder="name@example.com (use 'ngo' in email for NGO panel)"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary-600 hover:text-primary-700">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary-500 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/60 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-700 font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 flex gap-2 items-start text-xs text-primary-800 mt-6 font-medium">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <p>For Demo: Write anything! Including "ngo" in the email sets your role to NGO.</p>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-primary-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md mt-6 flex justify-center items-center gap-2 hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In <LogIn className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 font-bold mt-8 relative z-10">
            Don't have an account? <a href="#" className="text-primary-600 hover:text-primary-700">Register</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
