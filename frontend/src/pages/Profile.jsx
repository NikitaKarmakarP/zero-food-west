import { Award, Gift, History, Star, TrendingUp, Settings, MapPin, Calendar, Mail, ShieldCheck, Zap, Globe, Target, Activity, ArrowUpRight, Cpu, Lock, Fingerprint, Database, Terminal, Radar, BarChart3, Share2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ label, val, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="relative p-10 rounded-[3.5rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-4xl group overflow-hidden transition-all duration-500"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
    <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 text-${color === 'amber' ? 'orange' : color}-600 dark:text-${color === 'amber' ? 'orange' : color}-400 flex items-center justify-center mb-8 shadow-inner group-hover:bg-${color === 'amber' ? 'orange' : color}-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-500`}>
       <Icon className="h-7 w-7" />
    </div>
    <div className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums mb-2">{val}</div>
    <div className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">{label}</div>
    
    <div className="absolute bottom-6 right-8 opacity-5 group-hover:opacity-20 transition-opacity">
       <Icon className="h-12 w-12 text-slate-950 dark:text-white" />
    </div>
  </motion.div>
);

export default function Profile() {
  const { user, addNotification } = useAppContext();
  const [activeTab, setActiveTab] = useState('portfolio');
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const headerScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-32 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* 1. Immersive Profile Hero HUD */}
      <motion.div 
        style={{ y: headerY, scale: headerScale }}
        className="relative h-[750px] w-full overflow-hidden"
      >
         {/* Background Visual Layer */}
         <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover opacity-10 dark:opacity-20 grayscale" 
              alt="Cyber Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 dark:from-[#020617]/20 via-white/80 dark:via-[#020617]/80 to-white dark:to-[#020617]"></div>
            
            {/* Animated Data Stream Particles */}
            <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:120px_120px]"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-40">
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="relative group"
               >
                  <div className="absolute -inset-10 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/30 transition-all duration-1000 animate-pulse"></div>
                  
                  <div className="relative">
                     <motion.div 
                       initial={{ scale: 0.8 }}
                       animate={{ scale: 1 }}
                       className="w-72 h-72 rounded-[5rem] border-[16px] border-white dark:border-[#020617] bg-slate-50 dark:bg-slate-900 overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] dark:shadow-[0_60px_120px_rgba(0,0,0,0.8)] relative z-10 group-hover:rotate-3 transition-transform duration-700"
                     >
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}&backgroundColor=020617`} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                     </motion.div>
                     <motion.div 
                       animate={{ y: [0, -10, 0] }}
                       transition={{ duration: 4, repeat: Infinity }}
                       className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center text-white dark:text-slate-950 shadow-6xl border-[10px] border-white dark:border-[#020617] z-20"
                     >
                        <ShieldCheck className="h-12 w-12" />
                     </motion.div>
                  </div>
               </motion.div>

               <div className="text-center lg:text-left flex-grow">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-50 dark:bg-white/5 backdrop-blur-3xl border border-black/5 dark:border-white/10 text-slate-950 dark:text-white font-black mb-10 text-[10px] uppercase tracking-[0.5em]"
                  >
                     <Fingerprint className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Identity_Verified // Node_X_942
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-8 leading-[0.9] uppercase italic"
                  >
                    {user.name}<span className="text-emerald-500">.</span>
                  </motion.h1>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                     <div className="group flex items-center gap-4 bg-slate-50 dark:bg-white/[0.03] backdrop-blur-3xl border border-black/5 dark:border-white/5 px-8 py-4 rounded-3xl hover:bg-white dark:hover:bg-white/[0.08] transition-all cursor-pointer shadow-sm hover:shadow-xl">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all">
                           <Activity className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                           <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Global_Tier</div>
                           <div className="text-sm font-black text-slate-950 dark:text-white uppercase tracking-widest">Platinum_Elite</div>
                        </div>
                     </div>
                     <div className="group flex items-center gap-4 bg-slate-50 dark:bg-white/[0.03] backdrop-blur-3xl border border-black/5 dark:border-white/5 px-8 py-4 rounded-3xl hover:bg-white dark:hover:bg-white/[0.08] transition-all cursor-pointer shadow-sm hover:shadow-xl">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                           <Globe className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                           <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Primary_Node</div>
                           <div className="text-sm font-black text-slate-950 dark:text-white uppercase tracking-widest">Kolkata_West_01</div>
                        </div>
                     </div>
                  </div>
               </div>

                <div className="hidden xl:flex flex-col gap-6">
                  <button 
                    onClick={() => addNotification('System_Config', 'Accessing secure configuration vault. Sector_01 uplink established.', '/profile')}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 transition-all group shadow-2xl"
                  >
                     <Settings className="h-7 w-7 text-slate-950 dark:text-white group-hover:text-white dark:group-hover:text-slate-950 group-hover:rotate-90 transition-all duration-700" />
                  </button>
                  <button 
                    onClick={() => addNotification('Node_Share', 'Broadcasting node credentials to regional network.', '/profile')}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-blue-500 group transition-all shadow-2xl"
                  >
                     <Share2 className="h-7 w-7 text-slate-950 dark:text-white group-hover:text-white transition-all" />
                  </button>
                </div>
            </div>
         </div>
      </motion.div>

      {/* 2. Operational Telemetry Matrix */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { label: "Impact_Telemetry", val: user.points.toLocaleString(), icon: Zap, color: "amber", delay: 0.4 },
              { label: "Rescue_Cycles", val: "142", icon: Target, color: "emerald", delay: 0.5 },
              { label: "Reliability_Index", val: "99.8%", icon: ShieldCheck, color: "blue", delay: 0.6 },
              { label: "Mission_Streak", val: "12d", icon: Activity, color: "rose", delay: 0.7 }
            ].map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
         </div>

         <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Data Feed */}
            <div className="lg:col-span-8 space-y-12">
               {/* Impact Portfolio - Visual Grid */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 dark:bg-white/[0.02] rounded-[5rem] border border-black/5 dark:border-white/5 backdrop-blur-3xl p-16 relative overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-6xl transition-colors duration-500"
               >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
                     <div>
                        <h2 className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic mb-2">Impact_Portfolio.</h2>
                        <p className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.4em]">Verified Operational Accomplishments</p>
                     </div>
                     <Link 
                        to="/leaderboard"
                        className="group flex items-center gap-4 bg-slate-950 dark:bg-emerald-500 text-white dark:text-slate-950 px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-white transition-all shadow-4xl active:scale-95"
                     >
                        Initialize_Audit <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                     {[
                        { title: 'ZeroWaste Pioneer', rank: 'Platinum_Class', date: 'APR_2026', icon: Award, color: 'emerald' },
                        { title: 'Community Anchor', rank: 'Node_Guardian', date: 'MAR_2026', icon: Globe, color: 'blue' },
                        { title: 'Logistics Specialist', rank: 'HACCP_Certified', date: 'FEB_2026', icon: Cpu, color: 'purple' },
                        { title: 'Rapid Responder', rank: 'Vanguard_Status', date: 'JAN_2026', icon: Zap, color: 'amber' },
                     ].map((badge, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.02 }}
                          className="group relative p-10 rounded-[3.5rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-emerald-500/20 transition-all duration-700 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
                        >
                           <div className={`absolute top-0 right-0 w-40 h-40 bg-${badge.color}-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                           <div className="flex items-center gap-8 relative z-10">
                              <div className={`w-24 h-24 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 flex items-center justify-center text-${badge.color}-600 dark:text-${badge.color}-400 shadow-inner group-hover:bg-${badge.color === 'amber' ? 'orange' : badge.color}-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-700`}>
                                 <badge.icon className="h-10 w-10" />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-2 uppercase italic">{badge.title}</h3>
                                 <div className="flex items-center gap-4">
                                    <span className={`text-[10px] font-black text-${badge.color === 'amber' ? 'orange' : badge.color}-600 dark:text-${badge.color === 'amber' ? 'orange' : badge.color}-400 uppercase tracking-widest`}>{badge.rank}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{badge.date}</span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Mission Momentum - Data Visualization */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 dark:bg-white/[0.02] rounded-[5rem] border border-black/5 dark:border-white/5 backdrop-blur-3xl p-16 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-6xl transition-colors duration-500"
               >
                  <div className="flex justify-between items-center mb-20">
                     <div>
                        <h2 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">Momentum_Stream.</h2>
                        <p className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.4em]">Real-time Performance Telemetry</p>
                     </div>
                      <div className="flex items-center gap-4 bg-white dark:bg-black/40 px-6 py-3 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
                        <BarChart3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-widest">Live_Feed</span>
                      </div>
                  </div>
                  
                  <div className="h-80 flex items-end gap-4 px-6 relative">
                     <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-10 px-6">
                        {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-950 dark:bg-white"></div>)}
                     </div>

                     {[60, 85, 55, 95, 75, 88, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1 bg-gradient-to-t from-emerald-600 via-emerald-400 to-teal-300 rounded-[1.5rem] relative group/bar hover:scale-x-110 transition-transform"
                        >
                           <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-3 py-1.5 rounded-xl font-black text-xs shadow-6xl z-30">
                              {h * 15}
                           </div>
                           <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-0 group-hover/bar:opacity-20 transition-opacity"></div>
                        </motion.div>
                     ))}
                  </div>
                  
                  <div className="mt-12 flex justify-between px-8">
                     {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                        <span key={day} className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">{day}</span>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* Sidebar HUD */}
            <div className="lg:col-span-4 space-y-12">
               {/* Mission Log - Tactical List */}
               <motion.div 
                 initial={{ opacity: 0, x: 40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 dark:bg-white/[0.02] rounded-[5rem] border border-black/5 dark:border-white/5 backdrop-blur-3xl p-12 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-6xl transition-colors duration-500"
               >
                  <div className="flex items-center justify-between mb-16">
                     <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">Mission_Log.</h3>
                     <History className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                  </div>

                  <div className="space-y-10 mb-12">
                     {[
                        { title: "Node_Sync: Veg_Matrix", time: "2h ago", val: "+250", color: "emerald" },
                        { title: "Logistics_Intercept", time: "1d ago", val: "+420", color: "blue" },
                        { title: "Relief_Node_Expansion", time: "3d ago", val: "+800", color: "purple" },
                        { title: "Safety_Vault_Audit", time: "1w ago", val: "+150", color: "amber" },
                        { title: "Dynamic_Rescue_v9", time: "2w ago", val: "+560", color: "rose" },
                     ].map((log, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ x: 10 }}
                          className="group cursor-pointer"
                        >
                           <div className="flex justify-between items-start mb-4">
                              <div>
                                 <h4 className="font-black text-slate-950 dark:text-white text-lg tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase italic">{log.title}</h4>
                                 <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{log.time} // Sector_01</div>
                              </div>
                              <div className={`text-xs font-black text-${log.color === 'amber' ? 'orange' : log.color}-600 dark:text-${log.color === 'amber' ? 'orange' : log.color}-400 tabular-nums`}>{log.val}</div>
                           </div>
                           <div className="h-px bg-black/5 dark:bg-white/5 group-hover:bg-emerald-500/20 transition-colors"></div>
                        </motion.div>
                     ))}
                  </div>

                  <Link 
                    to="/dashboard"
                    className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-8 rounded-[3rem] hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all flex items-center justify-center gap-4 group/btn shadow-4xl active:scale-95 text-xs uppercase tracking-[0.4em]"
                  >
                     Full_Log_Dumping <Terminal className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
               </motion.div>

               {/* Tactical Config Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-12 rounded-[5rem] bg-gradient-to-br from-indigo-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden group/config shadow-6xl transition-all duration-700"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity duration-1000">
                     <Settings className="h-64 w-64 animate-spin-slow" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 border border-white/20 backdrop-blur-3xl">
                        <Settings className="h-10 w-10 text-white" />
                     </div>
                     <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase italic">System_Config.</h3>
                     <p className="text-white/60 text-xl font-medium mb-12 leading-relaxed">
                        Fine-tune your rescue radius and communication nodes for maximum mission efficiency.
                     </p>
                     <button className="w-full bg-white text-slate-950 font-black py-6 rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all shadow-4xl text-xs uppercase tracking-[0.4em]">
                        Initialize_Control_v9.4
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>

      {/* Internal Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </div>
  );
}
