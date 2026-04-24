import { Award, Gift, History, Star, TrendingUp, Settings, MapPin, Calendar, Mail, ShieldCheck, Zap, Globe, Target, Activity, ArrowUpRight, Cpu, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { user } = useAppContext();
  
  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 selection:bg-emerald-500/30">
      {/* Cinematic Profile Header */}
      <div className="relative h-[600px] w-full overflow-hidden bg-slate-950">
         <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover" 
              alt="Cyber Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/60 to-slate-950"></div>
         </div>
         
         {/* Animated Grid Lines */}
         <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:100px_100px]"></div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-32">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="flex flex-col md:flex-row items-center md:items-end gap-12"
            >
               <div className="relative group">
                  <div className="absolute -inset-4 bg-emerald-500/20 rounded-[4.5rem] blur-2xl group-hover:bg-emerald-500/40 transition-all duration-700"></div>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="relative w-64 h-64 rounded-[4rem] border-[12px] border-slate-950 bg-slate-900 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
                  >
                     <img 
                       src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                       alt="Profile" 
                       className="w-full h-full object-cover"
                     />
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-slate-950 shadow-2xl border-8 border-slate-950 group-hover:rotate-12 transition-transform">
                     <ShieldCheck className="h-10 w-10" />
                  </div>
               </div>

               <div className="text-center md:text-left mb-4">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 text-emerald-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">
                     <Lock className="h-4 w-4" /> Personal Dossier: SECURE
                  </div>
                  <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none tabular-nums">
                     {user.name}
                  </h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                     <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl">
                        <Activity className="h-5 w-5 text-emerald-400" />
                        <span className="text-sm font-black text-white uppercase tracking-widest">Global Tier: Platinum</span>
                     </div>
                     <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl">
                        <Globe className="h-5 w-5 text-blue-400" />
                        <span className="text-sm font-black text-white uppercase tracking-widest">Kolkata Node Hub</span>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
         {/* Operational Stats Cluster */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
               { label: 'Impact Points', val: user.points.toLocaleString(), icon: Zap, color: 'amber' },
               { label: 'Missions Success', val: '142', icon: Target, color: 'emerald' },
               { label: 'Network Trust', val: '99.8%', icon: ShieldCheck, color: 'blue' },
               { label: 'Rescue Streak', val: '12 Days', icon: Activity, color: 'rose' },
            ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 + (i * 0.1) }}
                 className="glass-panel p-10 rounded-[3rem] bg-white shadow-3xl group relative overflow-hidden"
               >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
                  <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                     <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-black text-slate-900 tracking-tight tabular-nums mb-1">{stat.val}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
               </motion.div>
            ))}
         </div>

         <div className="grid lg:grid-cols-12 gap-12">
            {/* Achievement Vault & Certifications */}
            <div className="lg:col-span-8 space-y-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="glass-panel p-12 rounded-[5rem] bg-white shadow-4xl relative overflow-hidden"
               >
                  <div className="flex items-center justify-between mb-16">
                     <h2 className="text-4xl font-black text-slate-900 tracking-tight">Impact Portfolio</h2>
                     <button className="text-[10px] font-black text-blue-600 bg-blue-50 px-6 py-2.5 rounded-full uppercase tracking-widest border border-blue-100 hover:bg-blue-600 hover:text-white transition-all">
                        Request Official Audit
                     </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                     {[
                        { title: 'Zero Waste Pioneer', rank: 'Gold Elite', date: 'April 2026', icon: Award, color: 'emerald' },
                        { title: 'Community Stabilizer', rank: 'Platinum Tier', date: 'March 2026', icon: Globe, color: 'blue' },
                        { title: 'Cold-Chain Specialist', rank: 'Certified Operator', date: 'Feb 2026', icon: Cpu, color: 'purple' },
                        { title: 'Emergency Responder', rank: 'Rapid Deploy', date: 'Jan 2026', icon: Zap, color: 'rose' },
                     ].map((badge, i) => (
                        <div key={i} className="group p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
                           <div className={`absolute top-0 right-0 w-32 h-32 bg-${badge.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                           <div className="flex items-center gap-8 relative z-10">
                              <div className={`w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center text-${badge.color}-600 shadow-xl group-hover:rotate-12 transition-transform`}>
                                 <badge.icon className="h-10 w-10" />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">{badge.title}</h3>
                                 <div className="flex items-center gap-3">
                                    <span className={`text-[10px] font-black text-${badge.color}-600 uppercase tracking-widest`}>{badge.rank}</span>
                                    <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                    <span className="text-[10px] font-bold text-slate-400">{badge.date}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-slate-50 flex items-center justify-between">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Operational excellence verified by ZeroWaste HQ</p>
                     <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                           <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black">🏅</div>
                        ))}
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="glass-panel p-12 rounded-[5rem] bg-slate-900 text-white shadow-4xl relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                     <TrendingUp className="h-64 w-64" />
                  </div>
                  <div className="relative z-10">
                     <h2 className="text-4xl font-black mb-10 tracking-tight">Mission Trajectory</h2>
                     <div className="h-64 flex items-end gap-3 px-4">
                        {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                           <motion.div 
                             key={i}
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ delay: i * 0.1, duration: 1 }}
                             className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-2xl relative group"
                           >
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-black text-xs">
                                 {h * 10}
                              </div>
                           </motion.div>
                        ))}
                     </div>
                     <div className="mt-10 flex justify-between px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Sidebar - Personal Mission Log */}
            <div className="lg:col-span-4 space-y-12">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="glass-panel p-10 rounded-[5rem] bg-white shadow-3xl border-slate-50 flex flex-col"
                 style={{ minHeight: '800px' }}
               >
                  <div className="flex items-center justify-between mb-12">
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Mission Log</h3>
                     <History className="h-6 w-6 text-slate-300" />
                  </div>

                  <div className="flex-1 space-y-8">
                     {[
                        { title: "10 Servings: Veg Curry", meta: "Mission Complete • 2d ago", pts: "+120", color: "emerald" },
                        { title: "Node Stabilization", meta: "Kolkata North • 1w ago", pts: "+450", color: "blue" },
                        { title: "Emergency Distribution", meta: "Park Street Hub • 2w ago", pts: "+280", color: "amber" },
                        { title: "Safety Audit Phase 1", meta: "System Verified • 1m ago", pts: "+50", color: "rose" },
                     ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="flex justify-between items-start mb-3">
                              <div>
                                 <h4 className="font-black text-slate-900 text-lg tracking-tight group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.meta}</p>
                              </div>
                              <div className={`text-sm font-black text-${item.color}-600 bg-${item.color}-50 px-3 py-1 rounded-full`}>{item.pts}</div>
                           </div>
                           <div className="w-full h-px bg-slate-50 group-hover:bg-emerald-100 transition-colors"></div>
                        </div>
                     ))}
                  </div>

                  <button className="w-full mt-12 bg-slate-900 hover:bg-emerald-600 text-white font-black py-6 rounded-[2.5rem] transition-all flex items-center justify-center gap-4 shadow-2xl group">
                     View Full Archive <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="p-12 rounded-[4rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white shadow-4xl relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                     <Settings className="h-48 w-48 animate-spin-slow" />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-3xl font-black mb-6 tracking-tight">Operational <br/> Settings.</h3>
                     <p className="text-white/70 text-lg font-medium mb-12 leading-relaxed">
                        Fine-tune your rescue radius and communication nodes for maximum mission efficiency.
                     </p>
                     <button className="w-full bg-white text-slate-900 font-black py-5 rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl">
                        Open Control Panel
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
    </div>
  );
}
