import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Leaf, ArrowRight } from 'lucide-react';
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

  const fillPreset = (presetEmail) => {
    setEmail(presetEmail);
    setPassword('password123');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden selection:bg-emerald-500/30 font-sans">
      {/* Beautiful Soft Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638ca?auto=format&fit=crop&w=2000&q=80" 
          alt="Fresh Food Background" 
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-slate-50/80 to-slate-100/90 backdrop-blur-sm"></div>
        {/* Soft abstract shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-400/20 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-300/20 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white"
        >
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Welcome Back</h1>
            <p className="text-slate-500 text-sm font-medium">Log in to continue your food rescue mission.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  placeholder="hello@zerowaste.org"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              <span>{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
              {!isSubmitting && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Quick Demo Presets */}
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white/80 text-slate-400 font-medium uppercase tracking-wider">Demo Accounts</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button 
                type="button"
                onClick={() => fillPreset('nikitakarmakar831@gmail.com')}
                className="px-4 py-3 bg-white border border-slate-200 hover:border-emerald-500/30 hover:bg-emerald-50 rounded-xl text-xs font-bold text-slate-700 transition-all flex flex-col items-center gap-1"
              >
                <span className="text-emerald-600">Donor Profile</span>
              </button>
              <button 
                type="button"
                onClick={() => fillPreset('ngo_partner@zerowaste.org')}
                className="px-4 py-3 bg-white border border-slate-200 hover:border-blue-500/30 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-700 transition-all flex flex-col items-center gap-1"
              >
                <span className="text-blue-600">NGO Partner</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
