import { Trophy, Award, TrendingUp, Users, Star, Medal, ArrowUpRight, Search, Filter, Globe, Zap, Activity, Heart, ShieldCheck, Target, ChevronRight, History, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topRescuers = [
  { id: 1, name: 'Rahul S.', points: 12400, rescues: 45, impact: '1.2k People', rank: 1, avatar: '45', color: 'amber' },
  { id: 2, name: 'Priya K.', points: 10850, rescues: 38, impact: '850 People', rank: 2, avatar: '32', color: 'slate' },
  { id: 3, name: 'Amit B.', points: 9200, rescues: 32, impact: '720 People', rank: 3, avatar: '28', color: 'orange' },
];

const allParticipants = [
  { id: 4, name: 'Sneha M.', points: 8100, rescues: 28, status: 'Rising Star', change: '+12%' },
  { id: 5, name: 'Vikram R.', points: 7500, rescues: 24, status: 'Active Node', change: '+8%' },
  { id: 6, name: 'Ananya G.', points: 6800, rescues: 21, status: 'Elite Partner', change: '+15%' },
  { id: 7, name: 'Rohan D.', points: 5900, rescues: 18, status: 'Community Hero', change: '+4%' },
  { id: 8, name: 'Sonal P.', points: 5200, rescues: 15, status: 'Verified Rescuer', change: '+22%' },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('weekly');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-rose-500/10 dark:bg-rose-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      {/* Cinematic Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm"
        >
           <Trophy className="h-3 w-3" /> Hall of Impact
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight"
        >
          Community <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 dark:from-amber-400 dark:via-orange-400 dark:to-rose-400">
            Heroes.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Recognizing the top nodes in our rescue cluster. Your impact is the driving force pulling us toward a zero-waste future.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        
        {/* Podium - Top 3 Rescuers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 items-end">
           {topRescuers.map((user, i) => (
             <motion.div 
               key={user.id}
               onClick={() => navigate('/profile')}
               initial={{ opacity: 0, y: 60 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, type: 'spring', damping: 25, stiffness: 120 }}
               className={`p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-3xl border transition-all duration-700 cursor-pointer relative overflow-hidden group shadow-2xl dark:shadow-none ${
                 i === 0 
                 ? 'md:order-2 md:-translate-y-16 scale-110 border-amber-400/50 z-20 ring-4 ring-amber-500/10' 
                 : i === 1 ? 'md:order-1 border-slate-300 dark:border-white/10 z-10' : 'md:order-3 border-slate-300 dark:border-white/10 z-10'
               }`}
             >
                {/* Winner Glow */}
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                )}
                
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${user.color}-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                
                <div className="relative z-10 text-center">
                   <div className="relative inline-block mb-12">
                      <div className={`absolute -inset-8 bg-${user.color}-500/20 rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-1000`}></div>
                      <div className="relative">
                         <img 
                           src={`https://i.pravatar.cc/200?img=${user.avatar}`} 
                           className={`w-36 h-36 rounded-[3rem] object-cover border-4 border-white dark:border-slate-800 shadow-2xl transition-transform duration-700 group-hover:scale-105 ${i === 0 ? 'ring-8 ring-amber-500/5' : ''}`} 
                           alt={user.name} 
                         />
                         <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${
                           i === 0 ? 'from-amber-400 via-orange-500 to-rose-500' : 
                           i === 1 ? 'from-slate-300 to-slate-500' : 'from-orange-400 to-orange-600'
                         } text-white flex items-center justify-center font-black text-2xl shadow-4xl border-4 border-white dark:border-slate-800 group-hover:rotate-12 transition-transform`}>
                            {i === 0 ? <Medal className="h-8 w-8 text-white drop-shadow-md" /> : user.rank}
                         </div>
                      </div>
                   </div>

                   <div className="mb-12">
                      <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-2 italic uppercase group-hover:text-amber-500 transition-colors">{user.name}</h3>
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic">
                         <MapPin className="h-3 w-3" /> Kolkata Node Cluster
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-5 mb-12">
                      <div className="bg-slate-50/50 dark:bg-black/30 p-6 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-inner group-hover:bg-white dark:group-hover:bg-white/5 transition-all">
                         <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Impact</div>
                         <div className={`text-3xl font-black tabular-nums tracking-tighter italic ${i === 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                            {user.points.toLocaleString()}
                         </div>
                      </div>
                      <div className="bg-slate-50/50 dark:bg-black/30 p-6 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-inner group-hover:bg-white dark:group-hover:bg-white/5 transition-all">
                         <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Rescues</div>
                         <div className={`text-3xl font-black tabular-nums tracking-tighter italic ${i === 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                            {user.rescues}
                         </div>
                      </div>
                   </div>

                   <button 
                     onClick={() => navigate('/profile')}
                     className="w-full group/btn relative overflow-hidden py-5 rounded-[2rem] bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-amber-500 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-900 shadow-xl flex items-center justify-center gap-4 active:scale-95 italic"
                   >
                      <span className="relative z-10">VIEW_MISSION_DATA</span>
                      <ArrowUpRight className="h-5 w-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Standings Table & Side Stats */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
           
           {/* Standings Table */}
           <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
              >
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                       <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Global Standings</h2>
                       <div className="flex items-center gap-3 mt-3">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Tracking 842 Active Nodes</p>
                       </div>
                    </div>
                    
                    <div className="flex p-1.5 bg-slate-100 dark:bg-black/30 rounded-2xl border border-slate-200 dark:border-white/5 gap-2 shadow-inner">
                       {['weekly', 'monthly', 'all-time'].map(tab => (
                         <button 
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-lg scale-[1.02]' : 'text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white'}`}
                         >
                           {tab.replace('-', ' ')}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-4">
                    {allParticipants.map((p, i) => (
                       <motion.div 
                         key={p.id}
                         onClick={() => navigate('/profile')}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.05 }}
                         className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-[2.5rem] border border-white dark:border-white/5 bg-white/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-xl"
                       >
                          <div className="flex items-center gap-8">
                             <span className="text-2xl font-black text-slate-200 dark:text-slate-800 tabular-nums w-10">0{i+4}</span>
                             <div className="flex items-center gap-6">
                                <div className="relative">
                                   <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <img src={`https://i.pravatar.cc/100?img=${p.id + 15}`} className="relative w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-white/50 dark:border-white/10 group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                                </div>
                                <div>
                                   <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-none mb-2">{p.name}</h4>
                                   <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{p.status}</span>
                                      <div className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">{p.change}</span>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="flex items-center gap-12 mt-6 md:mt-0">
                             <div className="text-right hidden sm:block">
                                <div className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Impact</div>
                                <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{p.points.toLocaleString()}</div>
                             </div>
                             <div className="text-right">
                                <div className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Rescues</div>
                                <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{p.rescues}</div>
                             </div>
                             <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 transition-colors">
                                <ChevronRight className="h-5 w-5" />
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>

                  <button 
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      btn.innerText = 'UPLINKING...';
                      setTimeout(() => { btn.innerText = 'NO MORE NODES IN RANGE'; btn.disabled = true; }, 1500);
                    }}
                    className="w-full mt-12 py-6 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 dark:text-slate-500 font-black text-xs uppercase tracking-widest hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-inner"
                  >
                     Load More Members
                  </button>
              </motion.div>
           </div>

           {/* Sidebar Stats */}
           <div className="lg:col-span-4 space-y-10">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-slate-900 dark:bg-white/[0.03] backdrop-blur-xl text-white shadow-2xl border border-transparent dark:border-white/10 relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Zap className="h-48 w-48 animate-pulse" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-10 shadow-lg group-hover:rotate-12 transition-transform">
                       <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-4xl font-black mb-6 tracking-tight leading-none uppercase italic">Climb the <br/> Hierarchy.</h3>
                    <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
                       Complete 5 verified rescues this week to unlock the <span className="text-amber-500 font-black">"Node Guardian"</span> badge.
                    </p>
                    <button 
                      onClick={() => navigate('/donate')}
                      className="w-full bg-white text-slate-900 font-black py-5 rounded-2xl hover:bg-amber-500 hover:text-white transition-all shadow-xl text-sm uppercase tracking-widest active:scale-95"
                    >
                       Begin Rescue Mission
                    </button>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-3xl dark:shadow-none"
              >
                 <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Network Pulse</h3>
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                       <Activity className="h-4 w-4 animate-pulse" />
                       <span className="text-[8px] font-black uppercase tracking-widest">LIVE_SYNC</span>
                    </div>
                 </div>
                 <div className="space-y-8">
                    {[
                      { icon: Globe, title: 'Active Nodes', val: '482 Ops', color: 'blue', trend: '+12' },
                      { icon: Users, title: 'Total Rescuers', val: '12.4k', color: 'emerald', trend: '+85' },
                      { icon: Heart, title: 'Meals Served', val: '1.2M', color: 'rose', trend: '+2.4k' },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between group/stat">
                         <div className="flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-${stat.color}-50 dark:bg-${stat.color}-500/10 text-${stat.color}-600 dark:text-${stat.color}-400 flex items-center justify-center border border-${stat.color}-100 dark:border-white/5 group-hover/stat:scale-110 group-hover/stat:rotate-6 transition-all duration-500 shadow-sm`}>
                               <stat.icon className="h-7 w-7" />
                            </div>
                            <div>
                               <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{stat.title}</div>
                               <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{stat.val}</div>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className={`text-[10px] font-black text-${stat.color}-600 dark:text-${stat.color}-400 mb-1 italic`}>{stat.trend}</div>
                            <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">DELTA_24H</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}
