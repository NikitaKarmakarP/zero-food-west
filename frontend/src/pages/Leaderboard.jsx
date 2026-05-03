import { Trophy, Award, TrendingUp, Users, Star, Medal, ArrowUpRight, Search, Filter, Globe, Zap, Activity, Heart, ShieldCheck, Target, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Tactical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Forensic Intelligence Ticker */}
      <div className="bg-slate-50 dark:bg-emerald-500/5 border-b border-black/5 dark:border-white/5 py-4 overflow-hidden relative z-50">
         <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-16 text-[9px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.4em]">
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Trophy className="h-3 w-3" /> IMPACT_GRAVITY: ACTIVE</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Globe className="h-3 w-3" /> GLOBAL_RANKING: SYNCHRONIZED</span>
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><Zap className="h-3 w-3" /> NODE_POWER: OPTIMAL</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Target className="h-3 w-3" /> SECTOR: KOLKATA_NODE</span>
              </div>
            ))}
         </div>
      </div>

      {/* Cinematic Header */}
      <section className="relative pt-24 pb-48 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/10 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 font-black mb-12 text-[9px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-sm"
          >
             <Trophy className="h-4 w-4 animate-bounce" /> Hall of Impact v4.2.1
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-12 tracking-tighter leading-[0.8]"
          >
            Community <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 italic">Gravity Well.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-3xl mx-auto border-l-2 border-amber-500/30 pl-8 opacity-90 dark:opacity-80"
          >
            Recognizing the top nodes in our rescue cluster. Your impact is the gravitational force pulling us toward a zero-waste future. <span className="text-amber-600 dark:text-amber-400 font-black">Tactical impact metrics live.</span>
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        {/* Podium - Top 3 Rescuers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 items-end">
           {topRescuers.map((user, i) => (
             <motion.div 
               key={user.id}
               onClick={() => navigate('/profile')}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className={`p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-700 cursor-pointer ${i === 0 ? 'md:order-2 md:-translate-y-16 scale-110 shadow-amber-500/10 border-amber-500/20' : i === 1 ? 'md:order-1' : 'md:order-3'}`}
             >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-${user.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                
                <div className="relative z-10 text-center">
                   <div className="relative inline-block mb-12">
                      <div className={`absolute -inset-6 bg-${user.color}-500/10 dark:bg-${user.color}-500/20 rounded-[4rem] blur-2xl animate-pulse`}></div>
                      <img 
                        src={`https://i.pravatar.cc/200?img=${user.avatar}`} 
                        className="relative w-36 h-36 rounded-[3.5rem] object-cover border-[8px] border-white dark:border-slate-950 shadow-6xl" 
                        alt={user.name} 
                      />
                      <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-${user.color}-500 text-white dark:text-slate-950 flex items-center justify-center font-black text-2xl shadow-6xl border-[6px] border-white dark:border-slate-950`}>
                         {i === 0 ? <Medal className="h-8 w-8" /> : user.rank}
                      </div>
                   </div>

                   <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 leading-none">{user.name}</h3>
                   <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-12">Kolkata Node Hub</div>
                   
                   <div className="grid grid-cols-2 gap-6 mb-12">
                      <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-inner">
                         <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Impact Score</div>
                         <div className="text-3xl font-black text-slate-950 dark:text-white tabular-nums tracking-tighter">{user.points.toLocaleString()}</div>
                      </div>
                      <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-inner">
                         <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Total Rescue</div>
                         <div className="text-3xl font-black text-slate-950 dark:text-white tabular-nums tracking-tighter">{user.rescues}</div>
                      </div>
                   </div>

                   <button className={`w-full py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 active:scale-95 ${i === 0 ? 'bg-amber-500 text-white shadow-6xl shadow-amber-500/20 hover:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950' : 'bg-slate-950 dark:bg-white/5 text-white dark:text-white hover:bg-emerald-500 dark:hover:bg-white dark:hover:text-slate-950'}`}>
                      View Node Profile <ArrowUpRight className="h-5 w-5" />
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
                whileInView={{ opacity: 1, x: 0 }}
                className="p-12 rounded-[5rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 backdrop-blur-3xl shadow-4xl"
              >
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
                    <div>
                       <h2 className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter uppercase">Global Standings</h2>
                       <div className="flex items-center gap-4 mt-4">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Tracking 842 Active Nodes</p>
                       </div>
                    </div>
                    
                    <div className="flex p-2 bg-slate-50 dark:bg-white/[0.02] rounded-[2.5rem] border border-black/5 dark:border-white/5 gap-2 shadow-inner">
                       {['weekly', 'monthly', 'all-time'].map(tab => (
                         <button 
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === tab ? 'bg-white dark:bg-white text-slate-950 dark:text-slate-950 shadow-6xl' : 'text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white'}`}
                         >
                           {tab.replace('-', ' ')}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    {allParticipants.map((p, i) => (
                       <motion.div 
                         key={p.id}
                         onClick={() => navigate('/profile')}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: i * 0.05 }}
                         className="group flex flex-col md:flex-row items-center justify-between p-10 rounded-[3.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-transparent hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-xl"
                       >
                          <div className="flex items-center gap-10">
                             <span className="text-3xl font-black text-slate-200 dark:text-slate-800 tabular-nums w-12 tracking-tighter">0{i+4}</span>
                             <div className="flex items-center gap-8">
                                <div className="relative">
                                   <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <img src={`https://i.pravatar.cc/100?img=${p.id + 15}`} className="relative w-20 h-20 rounded-[2rem] object-cover shadow-2xl border-2 border-white/10 group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                                </div>
                                <div>
                                   <h4 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-none">{p.name}</h4>
                                   <div className="flex items-center gap-4 mt-2">
                                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">{p.status}</span>
                                      <div className="h-1.5 w-1.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">{p.change} this week</span>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="flex items-center gap-16 mt-8 md:mt-0">
                             <div className="text-right hidden sm:block">
                                <div className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mb-2">Impact Score</div>
                                <div className="text-3xl font-black text-slate-950 dark:text-white tabular-nums tracking-tighter">{p.points.toLocaleString()}</div>
                             </div>
                             <div className="text-right">
                                <div className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mb-2">Rescues</div>
                                <div className="text-3xl font-black text-slate-950 dark:text-white tabular-nums tracking-tighter">{p.rescues}</div>
                             </div>
                             <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950 transition-all shadow-md">
                                <ChevronRight className="h-6 w-6" />
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>

                 <button className="w-full mt-16 py-8 border-2 border-dashed border-black/5 dark:border-white/5 rounded-[3rem] text-slate-400 dark:text-slate-600 font-black text-[10px] uppercase tracking-[0.5em] hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-500 transition-all shadow-inner">
                    Load Next 50 Community Members
                 </button>
              </motion.div>
           </div>

           {/* Sidebar - Node Engagement Hub */}
           <div className="lg:col-span-4 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-12 rounded-[5rem] bg-slate-950 dark:bg-slate-950 text-white shadow-4xl relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Zap className="h-64 w-64 animate-pulse" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-20 h-20 rounded-[2rem] bg-amber-500 text-white flex items-center justify-center mb-12 shadow-6xl group-hover:rotate-12 transition-transform">
                       <Award className="h-10 w-10" />
                    </div>
                    <h3 className="text-5xl font-black mb-8 tracking-tighter leading-[0.8] uppercase italic">Climb the Hub <br/> Hierarchy.</h3>
                    <p className="text-slate-400 text-xl font-medium mb-16 leading-relaxed opacity-80">
                       Complete 5 verified rescues this week to unlock the <span className="text-amber-500 font-black">"Node Guardian"</span> badge and jump +25 positions in the matrix.
                    </p>
                    <button className="w-full bg-white text-slate-950 font-black py-7 rounded-[2.5rem] hover:bg-amber-500 hover:text-white transition-all shadow-4xl text-lg uppercase tracking-widest active:scale-95">
                       Begin Rescue Mission
                    </button>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-12 rounded-[5rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl relative overflow-hidden"
              >
                 <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter uppercase">Active Pulse</h3>
                    <Activity className="h-8 w-8 text-emerald-500 animate-pulse" />
                 </div>
                 <div className="space-y-12">
                    {[
                      { icon: Globe, title: 'Network Scale', val: '482 Nodes', color: 'blue' },
                      { icon: Users, title: 'Total Rescuers', val: '12.4k Ops', color: 'emerald' },
                      { icon: Heart, title: 'Meals Served', val: '1.2M Hits', color: 'rose' },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-8 group/stat">
                         <div className={`w-16 h-16 rounded-[1.8rem] bg-slate-50 dark:bg-white/5 text-${stat.color}-600 dark:text-${stat.color}-400 flex items-center justify-center border border-black/5 dark:border-white/5 shadow-inner group-hover/stat:scale-110 transition-transform duration-500`}>
                            <stat.icon className="h-8 w-8" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mb-2">{stat.title}</div>
                            <div className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter">{stat.val}</div>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/5">
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-600 italic leading-relaxed">"The community is currently <span className="text-emerald-600 dark:text-emerald-400 font-black">14% more active</span> than last week's average sync frequency."</p>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}
