import { Trophy, Award, TrendingUp, Users, Star, Medal, ArrowUpRight, Search, Filter, Globe, Zap, Activity, Heart, ShieldCheck, Target, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 selection:bg-emerald-500/30">
      {/* Cinematic Header */}
      <div className="relative pt-32 pb-48 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-20" 
            alt="Leaderboard Background" 
          />
          {/* Animated Particles Simulation Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/20 backdrop-blur-xl border border-amber-500/30 text-amber-400 font-black mb-10 text-[10px] uppercase tracking-[0.4em]"
          >
             <Trophy className="h-4 w-4 animate-bounce" /> Hall of Impact v4.2
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85]"
          >
            Community <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">Gravity Well.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-2xl font-medium leading-relaxed max-w-3xl mx-auto opacity-80"
          >
            Recognizing the top nodes in our rescue cluster. Your impact is the gravitational force pulling us toward a zero-waste future.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        {/* Podium - Top 3 Rescuers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 items-end">
           {topRescuers.map((user, i) => (
             <motion.div 
               key={user.id}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className={`glass-panel p-12 rounded-[4rem] bg-white shadow-4xl relative overflow-hidden group hover:border-amber-200 transition-all duration-700 ${i === 0 ? 'md:order-2 md:-translate-y-12' : i === 1 ? 'md:order-1' : 'md:order-3'}`}
             >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-${user.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                
                <div className="relative z-10 text-center">
                   <div className="relative inline-block mb-10">
                      <div className={`absolute -inset-4 bg-${user.color}-500/20 rounded-[3.5rem] blur-xl`}></div>
                      <img 
                        src={`https://i.pravatar.cc/200?img=${user.avatar}`} 
                        className="relative w-32 h-32 rounded-[3rem] object-cover border-[6px] border-white shadow-2xl" 
                        alt={user.name} 
                      />
                      <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-${user.color}-500 text-white flex items-center justify-center font-black text-xl shadow-2xl border-4 border-white`}>
                         {i === 0 ? <Medal className="h-6 w-6" /> : user.rank}
                      </div>
                   </div>

                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{user.name}</h3>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Kolkata Node Hub</div>
                   
                   <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
                         <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact Score</div>
                         <div className="text-xl font-black text-slate-900">{user.points.toLocaleString()}</div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
                         <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Rescue</div>
                         <div className="text-xl font-black text-slate-900">{user.rescues}</div>
                      </div>
                   </div>

                   <button className={`w-full py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${i === 0 ? 'bg-amber-500 text-white shadow-2xl shadow-amber-500/20 hover:scale-105' : 'bg-slate-900 text-white hover:bg-emerald-600'}`}>
                      View Node Profile <ArrowUpRight className="h-4 w-4" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Global Standings Table */}
        <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel p-12 rounded-[5rem] bg-white shadow-3xl border-slate-50"
              >
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                       <h2 className="text-4xl font-black text-slate-900 tracking-tight">Global Standings</h2>
                       <div className="flex items-center gap-3 mt-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tracking 842 Active Nodes</p>
                       </div>
                    </div>
                    
                    <div className="flex p-1.5 bg-slate-50 rounded-3xl border border-slate-100 gap-1">
                       {['weekly', 'monthly', 'all-time'].map(tab => (
                         <button 
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}
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
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: i * 0.05 }}
                         className="group flex items-center justify-between p-8 rounded-[3rem] border border-slate-50 hover:bg-slate-50/50 hover:border-emerald-100 transition-all cursor-pointer"
                       >
                          <div className="flex items-center gap-8">
                             <span className="text-2xl font-black text-slate-200 tabular-nums w-8">0{i+4}</span>
                             <div className="flex items-center gap-6">
                                <img src={`https://i.pravatar.cc/100?img=${p.id + 15}`} className="w-16 h-16 rounded-[1.8rem] object-cover shadow-lg group-hover:scale-110 transition-transform" alt={p.name} />
                                <div>
                                   <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">{p.name}</h4>
                                   <div className="flex items-center gap-3">
                                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{p.status}</span>
                                      <div className="h-1 w-1 bg-slate-200 rounded-full"></div>
                                      <span className="text-[9px] font-black text-emerald-500">{p.change} this week</span>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="flex items-center gap-12">
                             <div className="text-right hidden sm:block">
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact Score</div>
                                <div className="text-xl font-black text-slate-900 tabular-nums">{p.points.toLocaleString()}</div>
                             </div>
                             <div className="text-right">
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Rescues</div>
                                <div className="text-xl font-black text-slate-900 tabular-nums">{p.rescues}</div>
                             </div>
                             <div className="p-3 rounded-2xl bg-slate-100 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                <ChevronRight className="h-5 w-5" />
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>

                 <button className="w-full mt-12 py-6 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] hover:border-emerald-500 hover:text-emerald-600 transition-all">
                    Load Next 50 Community Members
                 </button>
              </motion.div>
           </div>

           {/* Sidebar - Node Engagement Hub */}
           <div className="lg:col-span-4 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel p-12 rounded-[5rem] bg-slate-900 text-white shadow-4xl relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Zap className="h-48 w-48 animate-pulse" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500 text-slate-950 flex items-center justify-center mb-10 shadow-2xl">
                       <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-4xl font-black mb-6 tracking-tight leading-none">Climb the Hub <br/> Hierarchy.</h3>
                    <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
                       Complete 5 verified rescues this week to unlock the "Node Guardian" badge and jump +25 positions.
                    </p>
                    <button className="w-full bg-white text-slate-950 font-black py-6 rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg">
                       Begin Rescue Mission
                    </button>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel p-12 rounded-[5rem] bg-white shadow-3xl border-slate-50"
              >
                 <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Active Pulse</h3>
                    <Activity className="h-6 w-6 text-emerald-500" />
                 </div>
                 <div className="space-y-10">
                    {[
                      { icon: Globe, title: 'Network Scale', val: '482 Nodes', color: 'blue' },
                      { icon: Users, title: 'Total Rescuers', val: '12.4k Ops', color: 'emerald' },
                      { icon: Heart, title: 'Meals Served', val: '1.2M Hits', color: 'rose' },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-6">
                         <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center shadow-inner`}>
                            <stat.icon className="h-6 w-6" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.title}</div>
                            <div className="text-xl font-black text-slate-900">{stat.val}</div>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 pt-10 border-t border-slate-50">
                    <p className="text-xs font-bold text-slate-400 italic">"The community is currently 14% more active than last week's average."</p>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}
