import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle, Fingerprint, ShieldCheck, Terminal, Globe, Zap, Activity, Cpu, Radar, Satellite, ShieldAlert, Wifi, Database, Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Particle = ({ i }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 20 + 10;
  
  return (
    <motion.div
      animate={{
        y: [0, -1000],
        opacity: [0, 1, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "linear"
      }}
      className="absolute bg-emerald-500/20 rounded-full blur-[1px]"
      style={{
        left: `${x}%`,
        bottom: `-10%`,
        width: size,
        height: size,
      }}
    />
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consoleMessages, setConsoleMessages] = useState(['INIT_GATEWAY_V10.2_PRO_STABLE...']);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const { login } = useAppContext();
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const terminalSequence = [
    'ENCRYPTING_AES_256_QUANTUM_SHIELD...',
    'SYNC_GLOBAL_NODES: 4,821_SUCCESS',
    'BIO_PASS_VERIFIED: STATUS_AWAITING',
    'GATEWAY_STABILITY: 99.98%',
    'TRACING_IP_LOG_ENCRYPTED...',
    'READY_FOR_NEURAL_UPLINK.'
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < terminalSequence.length) {
        setConsoleMessages(prev => [...prev.slice(-4), terminalSequence[i]]);
        i++;
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setHoverPos({ x: (x - 0.5) * 20, y: (y - 0.5) * 20 });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsSubmitting(true);
    setConsoleMessages(prev => [...prev, 'AUTHENTICATING_NEURAL_SIGNATURE...']);
    
    setTimeout(() => {
      login(email, password);
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden font-sans text-slate-950 dark:text-white selection:bg-emerald-500/30">
      {/* 1. Immersive Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98108_1px,transparent_1px)] [background-size:25px_25px]"></div>
        
        {/* Cinematic Light Sources */}
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => <Particle key={i} i={i} />)}
      </div>

      {/* 2. Top Status Bar - The HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 border-b border-black/5 dark:border-white/5 backdrop-blur-3xl bg-white/40 dark:bg-black/40">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-[10px] font-black text-slate-500 dark:text-white/60 uppercase tracking-[0.5em]">Network: Linked</span>
           </div>
           <div className="hidden md:flex items-center gap-3">
              <Wifi className="h-3 w-3 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-black text-slate-500 dark:text-white/60 uppercase tracking-[0.5em]">Ping: 12ms</span>
           </div>
        </div>
        <div className="flex items-center gap-8">
           <div className="text-[10px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.5em] tabular-nums">
              {new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
           </div>
           <div className="w-px h-4 bg-black/10 dark:bg-white/10"></div>
           <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.5em] tabular-nums">
              Session_Active
           </div>
        </div>
      </div>

      {/* 3. Main Login Matrix */}
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverPos({ x: 0, y: 0 })}
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateX: hoverPos.y,
          rotateY: -hoverPos.x
        }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="bg-slate-50 dark:bg-white/[0.03] backdrop-blur-[60px] p-12 md:p-24 rounded-[5rem] border border-black/10 dark:border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.05)] dark:shadow-[0_80px_150px_rgba(0,0,0,0.7)] relative overflow-hidden group">
          {/* Animated Internal Data Stream */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>

          {/* Dynamic Laser Scan */}
          <motion.div 
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent z-20"
            style={{ boxShadow: '0 0 40px rgba(16,185,129,0.8)' }}
          />

          <div className="relative z-10 text-center mb-20">
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-[3.5rem] flex items-center justify-center mx-auto mb-12 border border-black/5 dark:border-emerald-500/20 shadow-2xl dark:shadow-4xl relative group/biometric"
            >
               <Fingerprint className="h-16 w-16 text-emerald-600 dark:text-emerald-400 group-hover/biometric:scale-110 transition-transform duration-700" />
               <motion.div 
                 animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute inset-0 bg-emerald-500/20 rounded-[3.5rem]"
               />
               {/* Orbital HUD Ring */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-4 border-2 border-dashed border-black/5 dark:border-emerald-500/10 rounded-full"
               />
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter mb-6 uppercase italic">
              Gateway<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 dark:to-blue-500">_Uplink.</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.6em]">
               <ShieldCheck className="h-4 w-4 text-emerald-500" /> 
               <span>Level_04 Authentication Protocol</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="relative z-10 space-y-12">
            <div className="space-y-6">
              <div className="flex justify-between items-center px-4">
                 <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Node_Identity_Log</label>
                 <span className="text-[9px] font-black text-emerald-500/40 uppercase tracking-widest">Type: Encrypted_SMTP</span>
              </div>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-10 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within/input:text-emerald-500 transition-all">
                  <Mail className="h-7 w-7 group-focus-within/input:scale-110 transition-transform" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-24 pr-10 py-8 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-[3rem] focus:bg-black/[0.05] dark:focus:bg-white/[0.06] focus:border-emerald-500/40 outline-none transition-all text-slate-950 dark:text-white text-2xl font-black placeholder-slate-200 dark:placeholder-slate-800 shadow-inner"
                  placeholder="USER@RESCUE_NODE.NET"
                  required
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/input:opacity-100 transition-opacity">
                   <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Tactical_Passkey</label>
                <button type="button" className="text-[9px] font-black text-emerald-600 dark:text-emerald-500 hover:text-slate-950 dark:hover:text-white transition-colors uppercase tracking-[0.3em] border-b border-emerald-500/20">Wipe_Log_Recovery</button>
              </div>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-10 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within/input:text-emerald-500 transition-all">
                  <Lock className="h-7 w-7 group-focus-within/input:scale-110 transition-transform" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-24 pr-10 py-8 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-[3rem] focus:bg-black/[0.05] dark:focus:bg-white/[0.06] focus:border-emerald-500/40 outline-none transition-all text-slate-950 dark:text-white text-2xl font-black placeholder-slate-200 dark:placeholder-slate-800 shadow-inner"
                  placeholder="••••••••••••"
                  required
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700">
                   <Zap className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Tactical Console - Pro Stream */}
            <div className="bg-slate-950/90 dark:bg-black/60 border border-white/10 rounded-[3.5rem] p-10 font-mono text-[11px] text-emerald-500/80 space-y-3 relative overflow-hidden group/console backdrop-blur-2xl">
              <div className="absolute top-6 right-8 opacity-20 group-hover/console:opacity-100 transition-opacity">
                 <Terminal className="h-6 w-6 text-emerald-400" />
              </div>
              <AnimatePresence mode="popLayout">
                {consoleMessages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-6 items-center"
                  >
                     <span className="text-slate-600 dark:text-slate-700 tabular-nums">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                     <span className="font-bold tracking-tighter uppercase">{msg}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex gap-6 items-center animate-pulse">
                 <span className="text-emerald-500 font-black">&gt;</span>
                 <span className="text-white font-black tracking-widest bg-emerald-500/20 px-2">AWAITING_NEURAL_UPLINK_COMMAND</span>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full relative overflow-hidden bg-slate-950 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-slate-950 font-black py-10 rounded-[3.5rem] transition-all shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(16,185,129,0.3)] mt-8 flex justify-center items-center gap-6 group/btn active:scale-95 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></div>
              <span className="relative z-10 text-2xl uppercase tracking-[0.2em] italic">
                {isSubmitting ? 'Verifying Node...' : 'Initialize Uplink'}
              </span>
              <LogIn className="h-8 w-8 relative z-10 group-hover/btn:translate-x-4 transition-transform duration-500" />
            </button>
          </form>

          {/* Infrastructure Signatures */}
          <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/5 flex flex-wrap justify-center items-center gap-12">
             {[
               { icon: ShieldCheck, label: "Quantum_Shield" },
               { icon: Database, label: "Forensic_Vault" },
               { icon: Search, label: "Node_Audit_Ready" }
             ].map((sig, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-help">
                  <sig.icon className="h-4 w-4" /> {sig.label}
               </div>
             ))}
          </div>
        </div>
      </motion.div>

      {/* 4. Application Presets (Under the white box) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-2xl relative z-10 mt-8 flex flex-col items-center"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700"></div>
          <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">
            Quick Access Presets
          </div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 w-full">
           <button 
             type="button"
             onClick={() => {
               setEmail('nikitakarmakar831@gmail.com');
               setPassword('password123');
             }}
             className="flex-1 min-w-[200px] px-6 py-4 rounded-3xl bg-white/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all backdrop-blur-xl flex items-center gap-4 group shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
           >
             <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black shadow-inner">
               NI
             </div>
             <div className="text-left">
               <div className="text-xs font-black text-slate-950 dark:text-white group-hover:text-emerald-500 transition-colors uppercase tracking-widest truncate max-w-[140px]">
                 NIKITAKARMAKAR831
               </div>
               <div className="text-[9px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.3em]">
                 Role: Donor
               </div>
             </div>
           </button>
           
           <button 
             type="button"
             onClick={() => {
               setEmail('ngo_partner@zerowaste.org');
               setPassword('password123');
             }}
             className="flex-1 min-w-[200px] px-6 py-4 rounded-3xl bg-white/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all backdrop-blur-xl flex items-center gap-4 group shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
           >
             <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black shadow-inner">
               NG
             </div>
             <div className="text-left">
               <div className="text-xs font-black text-slate-950 dark:text-white group-hover:text-blue-500 transition-colors uppercase tracking-widest truncate max-w-[140px]">
                 NGO_PARTNER
               </div>
               <div className="text-[9px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em]">
                 Role: NGO
               </div>
             </div>
           </button>
        </div>
      </motion.div>

      {/* Persistent Radar Display */}
      <div className="fixed bottom-12 right-12 flex flex-col gap-8 z-40 opacity-30 hover:opacity-100 transition-opacity duration-1000">
        <div className="relative w-40 h-40 bg-white/10 dark:bg-white/5 backdrop-blur-3xl rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center overflow-hidden">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"
           />
           <Radar className="h-10 w-10 text-slate-400 dark:text-white" />
           <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        input::placeholder {
          letter-spacing: 0.3em;
        }
      `}} />
    </div>
  );
}
