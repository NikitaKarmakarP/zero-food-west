import { Award, Gift, History, Star, TrendingUp, Settings, MapPin, Calendar, Mail, ShieldCheck, Zap, Globe, Target, Activity, ArrowUpRight, Cpu, Lock, Fingerprint, Database, Terminal, Radar, BarChart3, Share2, X, Info, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StatCard = ({ label, val, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -5 }}
    className="p-8 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
    <div className={`w-14 h-14 rounded-2xl bg-${color}-500/10 text-${color}-600 dark:text-${color}-400 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
       <Icon className="h-7 w-7" />
    </div>
    <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums mb-1">{val}</div>
    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</div>
  </motion.div>
);

export default function Profile() {
  const { user, addNotification } = useAppContext();
  const [activeTab, setActiveTab] = useState('achievements');
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-32 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Profile Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 md:p-16 rounded-[4rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none mb-12 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Fingerprint className="h-64 w-64 text-slate-900 dark:text-white" />
           </div>

           <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 relative z-10">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] border-[12px] border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-2xl relative z-10">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}&backgroundColor=020617`} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800 z-20">
                    <ShieldCheck className="h-8 w-8" />
                 </div>
              </div>

              <div className="text-center lg:text-left flex-grow">
                 <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold mb-6 text-[10px] uppercase tracking-widest backdrop-blur-md">
                    <Fingerprint className="h-3 w-3 text-emerald-500" /> Identity Verified
                 </div>
                 <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                    {user.name}<span className="text-emerald-500">.</span>
                 </h1>
                 <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-100 dark:border-white/5">
                       <Activity className="h-5 w-5 text-emerald-500" />
                       <div className="text-left">
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Global Rank</div>
                          <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Platinum Rescuer</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-100 dark:border-white/5">
                       <Globe className="h-5 w-5 text-blue-500" />
                       <div className="text-left">
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Local Node</div>
                          <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Kolkata Central</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex gap-4">
                 <Link to="/settings" className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-md active:scale-95 group">
                    <Settings className="h-6 w-6 text-slate-400 group-hover:rotate-90 transition-transform duration-500" />
                 </Link>
                 <button 
                   onClick={() => alert('Secure Profile Link Copied to Neural Interface.')}
                   className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-md active:scale-95"
                 >
                    <Share2 className="h-6 w-6 text-slate-400" />
                 </button>
              </div>
           </div>
        </motion.div>

        {/* Stats Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           <StatCard label="Impact Points" val={user.points.toLocaleString()} icon={Zap} color="amber" delay={0.1} />
           <StatCard label="Rescue Cycles" val="142" icon={Target} color="emerald" delay={0.2} />
           <StatCard label="Reliability" val="99.8%" icon={ShieldCheck} color="blue" delay={0.3} />
           <StatCard label="Mission Streak" val="12d" icon={Activity} color="rose" delay={0.4} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
           {/* Achievements Section */}
           <div className="lg:col-span-8 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 md:p-16 rounded-[4rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
              >
                 <div className="flex justify-between items-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Achievements</h2>
                    <Link to="/leaderboard" className="text-emerald-500 font-bold text-sm hover:underline flex items-center gap-2">
                       Leaderboard <ArrowUpRight className="h-4 w-4" />
                    </Link>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                       { title: 'Pioneer', rank: 'Platinum', icon: Award, color: 'emerald' },
                       { title: 'Guardian', rank: 'Node Elite', icon: Globe, color: 'blue' },
                       { title: 'Specialist', rank: 'Certified', icon: Cpu, color: 'purple' },
                       { title: 'Responder', rank: 'Vanguard', icon: Zap, color: 'amber' },
                    ].map((badge, i) => (
                       <div key={i} className="p-8 rounded-[3rem] bg-slate-50/50 dark:bg-black/20 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 transition-all group cursor-pointer shadow-inner">
                          <div className="flex items-center gap-6">
                             <div className={`w-20 h-20 rounded-[2rem] bg-${badge.color}-500/10 text-${badge.color}-600 dark:text-${badge.color}-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                <badge.icon className="h-9 w-9" />
                             </div>
                             <div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-1">{badge.title}</h3>
                                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{badge.rank} Status</div>
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 md:p-16 rounded-[4rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
              >
                 <div className="flex justify-between items-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Mission Momentum</h2>
                    <BarChart3 className="h-6 w-6 text-slate-300" />
                 </div>
                 
                 <div className="h-64 flex items-end gap-3 md:gap-6 px-4">
                    {[60, 85, 55, 95, 75, 88, 100].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ delay: i * 0.1, duration: 1 }}
                         className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-2xl relative group/bar"
                       >
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-xl">
                             {h * 15}
                          </div>
                       </motion.div>
                    ))}
                 </div>
                 <div className="flex justify-between mt-8 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day}>{day}</span>)}
                 </div>
              </motion.div>
           </div>

           {/* Mission Log Sidebar */}
           <div className="lg:col-span-4 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
              >
                 <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Mission Log</h3>
                    <History className="h-5 w-5 text-slate-300" />
                 </div>

                 <div className="space-y-8 mb-10">
                    {[
                       { title: "Node Sync", time: "2h ago", val: "+250", color: "emerald" },
                       { title: "Rescue Intercept", time: "1d ago", val: "+420", color: "blue" },
                       { title: "Node Expansion", time: "3d ago", val: "+800", color: "purple" },
                       { title: "Safety Audit", time: "1w ago", val: "+150", color: "amber" },
                    ].map((log, i) => (
                       <div key={i} className="group cursor-pointer">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-emerald-600 transition-colors">{log.title}</h4>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{log.time}</div>
                             </div>
                             <div className={`text-xs font-black text-${log.color}-500 tabular-nums`}>{log.val}</div>
                          </div>
                          <div className="h-px bg-slate-50 dark:bg-white/5"></div>
                       </div>
                    ))}
                 </div>

                 <Link 
                   to="/dashboard"
                   className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-5 rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white transition-all shadow-xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-3"
                 >
                    View All Activity <ArrowUpRight className="h-4 w-4" />
                 </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Settings className="h-48 w-48 animate-spin-slow" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-md">
                       <Settings className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tight uppercase italic">Settings.</h3>
                    <p className="text-white/60 text-lg font-medium mb-10 leading-relaxed">Fine-tune your rescue radius and communication nodes.</p>
                    <button 
                      onClick={() => navigate('/settings')}
                      className="w-full bg-white text-slate-900 font-black py-4 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl text-[10px] uppercase tracking-widest active:scale-95"
                    >
                       Open Control Center
                    </button>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
}
