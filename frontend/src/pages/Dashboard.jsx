import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area, PieChart, Pie } from 'recharts';
import { Leaf, Users, Utensils, TrendingUp, Zap, Globe, MapPin, Award, Activity, Search, Download, ChevronRight, ShieldCheck, Radar, Cpu, Star, ArrowUpRight, Clock, Terminal, Satellite, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const weeklyData = [
  { name: 'Mon', meals: 120, target: 150, co2: 45 },
  { name: 'Tue', meals: 98, target: 150, co2: 38 },
  { name: 'Wed', meals: 156, target: 180, co2: 62 },
  { name: 'Thu', meals: 204, target: 180, co2: 78 },
  { name: 'Fri', meals: 305, target: 250, co2: 110 },
  { name: 'Sat', meals: 420, target: 350, co2: 165 },
  { name: 'Sun', meals: 390, target: 350, co2: 140 },
];

const missionLogs = [
  { id: 1, type: 'Rescue', title: '50kg Surplus Rescued', location: 'Hotel Taj Bengal', time: '2m ago', status: 'In Transit', urgency: 'High' },
  { id: 2, type: 'Impact', title: '200 Meals Distributed', location: 'Kolkata NGO Hub', time: '14m ago', status: 'Completed', urgency: 'Normal' },
  { id: 3, type: 'Safety', title: 'Quality Batch Verified', location: 'Royal Caterers', time: '28m ago', status: 'Verified', urgency: 'Critical' },
  { id: 4, type: 'Rescue', title: 'Cold-Chain Pickup', location: 'City Ballroom', time: '45m ago', status: 'Pending', urgency: 'Normal' },
];

const achievements = [
  { id: 1, title: 'Zero Waste Pioneer', icon: Leaf, level: 'Gold', progress: 100, color: 'emerald' },
  { id: 2, title: 'Community Savior', icon: Users, level: 'Silver', progress: 65, color: 'blue' },
  { id: 3, title: 'Safety Inspector', icon: ShieldCheck, level: 'Bronze', progress: 40, color: 'amber' },
];

export default function Dashboard() {
  const { getAcceptedDonations, addNotification } = useAppContext();
  const [activeMetric, setActiveMetric] = useState('meals');
  const [liveTelemetry, setLiveTelemetry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTelemetry(prev => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const accepted = getAcceptedDonations() || [];
  const totalMeals = 12450 + accepted.reduce((acc, curr) => acc + Number(curr.quantity || 0), 0);
  const peopleAssisted = 45302 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 1.5), 0);
  const co2Avoided = 4200 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 0.8), 0);
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Tactical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>
      </div>

      {/* Forensic Intelligence Ticker */}
      <div className="bg-slate-50 dark:bg-emerald-500/5 border-b border-black/5 dark:border-white/5 py-3 overflow-hidden relative z-50">
         <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-16 text-[9px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.4em]">
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><Activity className="h-3 w-3" /> SYSTEM_STATUS: NOMINAL</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Globe className="h-3 w-3" /> UPTIME: 99.998%</span>
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Zap className="h-3 w-3" /> POWER: OPTIMAL</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Terminal className="h-3 w-3" /> NODES: 482_ACTIVE</span>
              </div>
            ))}
         </div>
      </div>

      {/* Cinematic Dashboard Header */}
      <div className="relative pt-24 pb-48 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black mb-10 text-[9px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-sm">
                   <Radar className="h-4 w-4 animate-pulse" /> Mission Command Hub v9.0.4
                </div>
                <h1 className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-[0.8]">
                  Operational <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Intelligence.</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed opacity-90 dark:opacity-80 max-w-2xl border-l-2 border-emerald-500/30 pl-8">
                  Forensic analysis of high-integrity food rescue missions across the global node cluster. <span className="text-slate-950 dark:text-white font-black">Real-time telemetry streaming.</span>
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-8">
                 <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] min-w-[240px] relative overflow-hidden group transition-all"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                       <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                       <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Network Sync</span>
                    </div>
                    <div className="text-6xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums relative z-10">482<span className="text-slate-400 dark:text-slate-500 text-xl ml-2">NODES</span></div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-2 tracking-widest relative z-10">Active Relief Clusters</div>
                 </motion.div>
                 
                 <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] min-w-[240px] relative overflow-hidden group transition-all"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                       <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                       <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Operational Radius</span>
                    </div>
                    <div className="text-6xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums relative z-10">12<span className="text-slate-400 dark:text-slate-500 text-xl ml-2">KM</span></div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-2 tracking-widest relative z-10">Rescue Vector Range</div>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        {/* Core Impact Dossier */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {[
            { label: "Total Rescues", value: totalMeals, icon: Utensils, color: "emerald", growth: "+14%", desc: "Units diverted from urban landfills" },
            { label: "Community Assisted", value: Math.floor(peopleAssisted), icon: Users, color: "blue", growth: "+22%", desc: "Direct node-to-node impact reach" },
            { label: "Carbon Offset", value: Math.floor(co2Avoided), icon: Leaf, color: "amber", growth: "+9%", desc: "KG environmental credit equivalent" }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-12 rounded-[4rem] bg-white/80 dark:bg-white/[0.04] border border-black/5 dark:border-white/5 backdrop-blur-3xl group relative overflow-hidden hover:border-emerald-500/30 transition-all duration-700 shadow-4xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${card.color === 'amber' ? 'orange' : card.color}-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className={`w-20 h-20 rounded-3xl bg-slate-50 dark:bg-white/5 text-${card.color === 'amber' ? 'orange' : card.color}-600 dark:text-${card.color === 'amber' ? 'orange' : card.color}-400 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <card.icon className="h-10 w-10" />
                 </div>
                 <div className={`flex items-center gap-2 px-5 py-2 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl border border-emerald-500/10 dark:border-emerald-500/20 text-[10px] font-black uppercase tracking-widest shadow-sm`}>
                    <ArrowUpRight className="h-4 w-4" /> {card.growth}
                 </div>
              </div>

              <h3 className="text-slate-400 dark:text-slate-500 font-black text-[11px] uppercase tracking-[0.4em] mb-4">{card.label}</h3>
              <div className="text-8xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums mb-8 leading-none">{card.value.toLocaleString()}</div>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-xl leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Command Level Directives */}
          <div className="lg:col-span-12 mb-4">
              <div className="p-8 md:p-10 rounded-[3rem] bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden transition-all hover:border-emerald-500/30">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10 pointer-events-none">
                      <Zap className="h-48 w-48 text-emerald-600 dark:text-emerald-500 transform rotate-12" />
                  </div>
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-500/10 to-transparent dark:from-emerald-500/5 pointer-events-none"></div>
                  
                  <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] shrink-0 group hover:scale-110 transition-transform cursor-pointer">
                          <Terminal className="h-8 w-8 text-white dark:text-slate-950 group-hover:animate-pulse" />
                      </div>
                      <div>
                          <div className="flex items-center gap-3 mb-1">
                             <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                                 AWAITING COMMAND
                             </h4>
                             <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                             </div>
                          </div>
                          <p className="text-[11px] font-black text-emerald-600 dark:text-emerald-400/80 uppercase tracking-widest">3 High-Priority Nodes require immediate payload routing authorization</p>
                      </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 relative z-10 w-full md:w-auto mt-4 md:mt-0">
                      <button className="flex-1 sm:flex-none px-8 py-5 rounded-[2rem] bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-900 text-[11px] font-black uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all shadow-xl flex items-center justify-center gap-3">
                          Authorize Routing <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <button className="flex-1 sm:flex-none px-8 py-5 rounded-[2rem] bg-white dark:bg-white/10 text-slate-900 dark:text-white text-[11px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/20 transition-all shadow-sm flex items-center justify-center gap-3">
                          <Search className="h-4 w-4" /> View Matrix
                      </button>
                  </div>
              </div>
          </div>

          {/* Main Visualization Matrix */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="p-12 md:p-16 rounded-[5rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl dark:shadow-[0_50px_150px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all"
            >
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                 <Activity className="h-80 w-80 text-slate-950 dark:text-white" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10 relative z-10">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-px w-12 bg-emerald-500"></div>
                     <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.5em]">Forensic Analytics</span>
                  </div>
                  <h2 className="text-5xl font-black text-slate-950 dark:text-white tracking-tight">Rescue Momentum <span className="text-emerald-600 dark:text-emerald-500 font-black">v9.0</span></h2>
                </div>
                
                <div className="flex items-center gap-6">
                   <div className="flex p-2 bg-slate-100 dark:bg-white/[0.03] rounded-3xl border border-black/5 dark:border-white/5 gap-2 shadow-inner">
                      {['meals', 'co2'].map(metric => (
                        <button 
                          key={metric}
                          onClick={() => setActiveMetric(metric)}
                          className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMetric === metric ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-2xl scale-105' : 'text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white'}`}
                        >
                          {metric.toUpperCase()}
                        </button>
                      ))}
                   </div>
                </div>
              </div>

              <div className="h-[500px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeMetric === 'meals' ? '#059669' : '#2563eb'} stopOpacity={0.2}/>
                        <stop offset="95%" stopColor={activeMetric === 'meals' ? '#059669' : '#2563eb'} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: 'rgba(100,116,139,0.5)', fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em'}} 
                      dy={25}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: 'rgba(100,116,139,0.5)', fontSize: 10, fontWeight: 900}} 
                      dx={-20}
                    />
                    <Tooltip 
                      cursor={{stroke: 'rgba(16, 185, 129, 0.1)', strokeWidth: 2}} 
                      contentStyle={{
                        borderRadius: '32px', 
                        border: '1px solid rgba(0,0,0,0.05)', 
                        background: 'rgba(255, 255, 255, 0.95)', 
                        backdropFilter: 'blur(20px)', 
                        boxShadow: '0 40px 100px rgba(0, 0, 0, 0.1)', 
                        padding: '24px 32px'
                      }}
                      itemStyle={{color: activeMetric === 'meals' ? '#059669' : '#2563eb', fontSize: '32px', fontWeight: '900', letterSpacing: '-0.02em'}}
                      labelStyle={{color: 'rgba(100,116,139,0.6)', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '10px'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey={activeMetric} 
                      stroke={activeMetric === 'meals' ? '#10b981' : '#3b82f6'} 
                      strokeWidth={6} 
                      fillOpacity={1} 
                      fill="url(#colorMetric)" 
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                 <div className="flex flex-wrap justify-center gap-12">
                    <div className="flex items-center gap-5">
                       <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/10 dark:border-emerald-500/20 shadow-sm">
                          <Activity className="h-7 w-7" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Rolling Mean</div>
                          <div className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">245.8 <span className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase ml-2">Units</span></div>
                       </div>
                    </div>
                    <div className="flex items-center gap-5">
                       <div className="w-14 h-14 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/10 dark:border-blue-500/20 shadow-sm">
                          <Zap className="h-7 w-7" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Peak Capacity</div>
                          <div className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">420.2 <span className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase ml-2">Units</span></div>
                       </div>
                    </div>
                 </div>
                 <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black px-10 py-5 rounded-[2rem] text-[11px] uppercase tracking-widest shadow-4xl hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all flex items-center gap-4 active:scale-95 group">
                    <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" /> Export Technical Dossier
                  </button>
                  <button onClick={() => addNotification('Dossier_Export', 'Generating high-fidelity technical dossier. Sector_01 telemetry synchronized.', '/dashboard')} className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black px-10 py-5 rounded-[2rem] text-[11px] uppercase tracking-widest shadow-4xl hover:bg-emerald-500 hover:text-white dark:hover:text-emerald-500 dark:hover:text-white transition-all flex items-center gap-4 active:scale-95 group" style={{display:'none'}}>
                 </button>
              </div>
            </motion.div>

            {/* Achievement Node & Global Radar */}
            <div className="grid md:grid-cols-2 gap-12">
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all"
               >
                  <div className="flex items-center justify-between mb-12">
                     <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tight">Achievement Vault</h3>
                     <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center border border-amber-500/20 dark:border-amber-500/30 shadow-sm">
                        <Star className="h-6 w-6 text-amber-600 dark:text-amber-500 fill-amber-500" />
                     </div>
                  </div>
                  
                  <div className="space-y-10">
                     {achievements.map((item, i) => (
                       <div key={item.id} className="group/item cursor-pointer">
                          <div className="flex justify-between items-center mb-5">
                             <div className="flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'amber'}-600 dark:text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'amber'}-400 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover/item:scale-110 transition-transform shadow-sm`}>
                                   <item.icon className="h-7 w-7" />
                                </div>
                                <div>
                                   <h4 className="font-black text-slate-950 dark:text-white text-lg tracking-tight mb-1">{item.title}</h4>
                                   <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">{item.level} RANK PROTOCOL</span>
                                </div>
                             </div>
                             <span className="text-slate-950 dark:text-white font-black text-sm">{item.progress}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-black/5 dark:border-white/10">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${item.progress}%` }}
                               transition={{ duration: 1.5, delay: i * 0.2 }}
                               className={`h-full bg-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'amber'}-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                  
                  <button className="w-full mt-12 py-6 border-2 border-dashed border-black/5 dark:border-white/5 rounded-[2.5rem] text-slate-400 dark:text-slate-500 font-black text-[11px] uppercase tracking-[0.4em] hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">
                     SYNC ALL 12 UNLOCKED CERTIFICATES
                  </button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-12 rounded-[4rem] bg-slate-950 dark:bg-slate-950 text-white shadow-4xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group transition-all"
               >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-12">
                        <h3 className="text-3xl font-black tracking-tight text-white">Active Node Telemetry</h3>
                        <div className="flex items-center gap-3 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 shadow-sm">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                           <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Live Radar</span>
                        </div>
                     </div>

                     <div className="flex-grow flex items-center justify-center py-12">
                        <div className="relative w-56 h-56">
                           <motion.div 
                             animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                             transition={{ duration: 3, repeat: Infinity }}
                             className="absolute inset-0 border-2 border-blue-500/40 rounded-full"
                           />
                           <motion.div 
                             animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                             transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                             className="absolute inset-0 border border-blue-400/20 rounded-full"
                           />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <Globe className="h-20 w-20 text-white opacity-20 group-hover:opacity-60 transition-opacity duration-1000" />
                           </div>
                           <motion.div 
                             animate={{ rotate: 360 }}
                             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                             className="absolute inset-0"
                           >
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                           </motion.div>
                        </div>
                     </div>

                     <div className="mt-12 space-y-8">
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Impact Radius Projection</div>
                              <div className="text-6xl font-black tracking-tighter text-white">2.4k<span className="text-slate-500 text-xl font-bold uppercase ml-2">KM²</span></div>
                           </div>
                           <div className="text-right">
                              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Operational Nodes</div>
                              <div className="text-3xl font-black text-white">482</div>
                           </div>
                        </div>
                        <div className="h-[1px] w-full bg-white/5 shadow-inner"></div>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                          "Your contributions have stabilized <span className="text-blue-400 font-black">3 high-urgency clusters</span> in the Kolkata North sector this week."
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Sidebar - Mission Intelligence Stream */}
          <div className="lg:col-span-4 space-y-12">
             <motion.div 
               initial={{ opacity: 0, x: 40 }}
               animate={{ opacity: 1, x: 0 }}
               className="p-10 md:p-12 rounded-[5rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl dark:shadow-[0_50px_150px_rgba(0,0,0,0.6)] flex flex-col transition-all"
               style={{ minHeight: '950px' }}
             >
                <div className="flex items-center justify-between mb-16">
                   <div>
                      <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tight">Mission Log</h3>
                      <div className="flex items-center gap-3 mt-2">
                         <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                         <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Real-time Data Stream</span>
                      </div>
                   </div>
                   <button className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-black/5 dark:border-white/10 shadow-sm">
                      <Search className="h-6 w-6 text-slate-400 dark:text-slate-400" />
                   </button>
                </div>

                <div className="flex-1 space-y-8">
                   <AnimatePresence mode="popLayout">
                      {missionLogs.map((log, idx) => (
                        <motion.div 
                          key={log.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group p-8 rounded-[3.5rem] border border-black/5 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-xl"
                        >
                           <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="flex justify-between items-start mb-6 relative z-10">
                              <div className="flex gap-3">
                                 <span className={`text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-xl border shadow-sm ${
                                   log.type === 'Rescue' ? 'bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/10 dark:border-blue-500/20' : 
                                   log.type === 'Impact' ? 'bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/10 dark:border-emerald-500/20' : 'bg-amber-500/5 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/10 dark:border-amber-500/20'
                                 }`}>
                                    {log.type}
                                 </span>
                                 {log.urgency === 'Critical' && (
                                   <span className="text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/10 dark:border-rose-500/30 animate-pulse shadow-sm">
                                      Critical
                                   </span>
                                 )}
                              </div>
                              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 flex items-center gap-2">
                                 <Clock className="h-3.5 w-3.5" /> {log.time}
                              </span>
                           </div>
                           
                           <h4 className="font-black text-slate-950 dark:text-white text-xl mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight relative z-10">{log.title}</h4>
                           
                           <div className="flex items-center gap-3 text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 relative z-10">
                              <MapPin className="h-4 w-4 text-slate-300 dark:text-slate-600" /> {log.location}
                           </div>

                           <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5 relative z-10">
                              <div className="flex items-center gap-3">
                                 <div className={`h-2.5 w-2.5 rounded-full ${log.status === 'Completed' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.3)]'}`}></div>
                                 <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">{log.status}</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all shadow-sm">
                                 <ChevronRight className="h-4 w-4" />
                              </div>
                           </div>
                        </motion.div>
                      ))}
                   </AnimatePresence>
                </div>

                <button className="w-full mt-16 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-7 rounded-[3rem] transition-all flex items-center justify-center gap-5 shadow-4xl dark:shadow-[0_30px_60px_rgba(255,255,255,0.1)] group active:scale-95 text-lg">
                   <span className="uppercase tracking-widest">Access Command Central</span>
                   <Cpu className="h-6 w-6 group-hover:rotate-90 transition-transform duration-700" />
                </button>
             </motion.div>

             {/* Personal Brand Aura */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-12 rounded-[4.5rem] bg-gradient-to-tr from-emerald-600 via-teal-700 to-blue-800 dark:from-emerald-600 dark:via-teal-700 dark:to-blue-800 text-white shadow-4xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-12 opacity-[0.08] pointer-events-none">
                   <Zap className="h-64 w-64" />
                </div>
                <div className="relative z-10">
                   <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-3xl flex items-center justify-center mb-10 shadow-inner border border-white/20">
                      <Star className="h-10 w-10 fill-white" />
                   </div>
                   <h3 className="text-4xl font-black mb-6 tracking-tight leading-[0.9] text-white">Global Tier:<br/>Impact Platinum</h3>
                   <p className="text-emerald-50/70 text-xl font-medium mb-12 leading-relaxed">
                      You are in the <span className="text-white font-black">top 2%</span> of contributors in the South-East Asia node cluster. Your precision is setting a new benchmark for urban relief logistics.
                   </p>
                   <div className="flex items-center gap-6">
                      <Link 
                        to="/profile"
                        onClick={() => addNotification('Node_Refinement', 'Profile refinement protocols initialized. Bio-data synchronization in progress.', '/profile')}
                        className="flex-1 bg-white text-slate-950 font-black py-6 rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all shadow-3xl text-lg flex items-center justify-center"
                      >
                         Refine Node Profile
                      </Link>
                      <div className="w-20 h-20 rounded-[2.5rem] bg-slate-950 flex items-center justify-center shadow-3xl border border-white/5">
                         <Globe className="h-8 w-8 text-emerald-400 animate-spin-slow" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* System Health & Environmental Metrics */}
        <div className="max-w-7xl mx-auto px-4 mt-32 relative z-20">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group"
              >
                 <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-slate-950 dark:text-white tracking-tight">System Integrity</h4>
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                       <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                 </div>
                 <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter">99.9</span>
                    <span className="text-xl font-bold text-slate-400 mb-1">%</span>
                 </div>
                 <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-6">Optimal Performance</p>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                       <span>Database Sync</span>
                       <span className="text-emerald-600 dark:text-emerald-400">Stable</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[98%] rounded-full"></div>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group"
              >
                 <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-slate-950 dark:text-white tracking-tight">Active API Relays</h4>
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                       <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                 </div>
                 <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter">1,204</span>
                    <span className="text-xl font-bold text-slate-400 mb-1">req/s</span>
                 </div>
                 <p className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-6">Traffic Routing</p>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                       <span>Node Latency</span>
                       <span className="text-blue-600 dark:text-blue-400">12ms</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-[3rem] bg-slate-950 dark:bg-slate-900 border border-slate-800 backdrop-blur-3xl shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group text-white"
              >
                 <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                       <h4 className="text-xl font-black tracking-tight text-white">Security Posture</h4>
                       <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                          <Lock className="h-5 w-5 text-amber-500" />
                       </div>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                       <span className="text-5xl font-black text-white tracking-tighter">AES</span>
                       <span className="text-xl font-bold text-slate-400 mb-1">-256</span>
                    </div>
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-6">End-to-End Encrypted</p>
                    <div className="flex items-center justify-between mt-auto">
                       <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center"><ShieldCheck className="h-3 w-3 text-emerald-400" /></div>
                          <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center"><Cpu className="h-3 w-3 text-blue-400" /></div>
                          <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center"><Activity className="h-3 w-3 text-purple-400" /></div>
                       </div>
                       <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                          View Audit <ChevronRight className="h-3 w-3" />
                       </button>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Advanced Logistics & Operations Table */}
        <div className="max-w-7xl mx-auto px-4 mt-32 relative z-20">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-12 md:p-16 rounded-[5rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl dark:shadow-[0_50px_150px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all"
           >
             <div className="absolute top-0 right-0 p-16 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                 <Globe className="h-80 w-80 text-slate-950 dark:text-white" />
             </div>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 relative z-10">
                <div>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="h-px w-12 bg-blue-500"></div>
                      <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.5em]">Live Network</span>
                   </div>
                   <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tight">Active Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 italic">Routing</span></h3>
                   <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg font-medium max-w-2xl">Real-time tracking of food rescue payloads across the primary node network. Monitoring cold-chain integrity and transit vectors.</p>
                </div>
                <div className="flex gap-4">
                   <button className="px-8 py-4 rounded-[2rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm flex items-center gap-3">
                      <Search className="h-4 w-4" /> Filter Active
                   </button>
                   <button className="px-8 py-4 rounded-[2rem] bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xl flex items-center gap-3 group">
                      <Activity className="h-4 w-4 group-hover:animate-pulse" /> View Full Matrix
                   </button>
                </div>
             </div>

             <div className="overflow-x-auto relative z-10">
                <table className="w-full text-left border-collapse min-w-[800px]">
                   <thead>
                      <tr className="border-b border-black/5 dark:border-white/5">
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] pl-4">Payload ID</th>
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Origin Node</th>
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Destination Node</th>
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Volume</th>
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Transit Status</th>
                         <th className="pb-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] text-right pr-4">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      {[
                        { id: 'PL-8492', origin: 'Royal Heritage Hotel', dest: 'Hope Foundation', vol: '120 kg', status: 'In Transit', progress: 65, color: 'blue' },
                        { id: 'PL-8493', origin: 'Fresh Bake Bakery', dest: 'Community Kitchen 4', vol: '45 kg', status: 'Pending Pickup', progress: 10, color: 'amber' },
                        { id: 'PL-8494', origin: 'Green Valley Farms', dest: 'City Orphanage', vol: '250 kg', status: 'Verified', progress: 100, color: 'emerald' },
                        { id: 'PL-8495', origin: 'Global Catering Inc.', dest: 'Shelter Home North', vol: '180 kg', status: 'In Transit', progress: 80, color: 'blue' },
                        { id: 'PL-8496', origin: 'TechPark Cafeteria', dest: 'Downtown Relief', vol: '95 kg', status: 'Quality Check', progress: 40, color: 'purple' }
                      ].map((row, i) => (
                        <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors border-b border-black/5 dark:border-white/5 last:border-0">
                           <td className="py-6 pl-4">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-black/5 dark:border-white/10 text-xs font-black shadow-inner">
                                    {row.id.split('-')[1].substring(0, 2)}
                                 </div>
                                 <span className="font-black text-slate-950 dark:text-white text-base tracking-tight">{row.id}</span>
                              </div>
                           </td>
                           <td className="py-6 text-slate-600 dark:text-slate-300 font-bold">{row.origin}</td>
                           <td className="py-6 text-slate-600 dark:text-slate-300 font-bold">{row.dest}</td>
                           <td className="py-6">
                              <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-xs font-black tracking-wider border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-200 shadow-sm">{row.vol}</span>
                           </td>
                           <td className="py-6">
                              <div className="flex flex-col gap-2">
                                 <div className="flex items-center justify-between w-32">
                                    <span className={`text-[9px] font-black uppercase tracking-widest text-${row.color}-600 dark:text-${row.color}-400 flex items-center gap-2`}>
                                       {row.status === 'In Transit' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>}
                                       {row.status}
                                    </span>
                                    <span className="text-[9px] font-bold text-slate-400">{row.progress}%</span>
                                 </div>
                                 <div className="w-32 h-1.5 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden shadow-inner">
                                    <div className={`h-full bg-${row.color}-500 rounded-full transition-all duration-1000`} style={{ width: `${row.progress}%` }}></div>
                                 </div>
                              </div>
                           </td>
                           <td className="py-6 text-right pr-4">
                              <button className="p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-slate-950 hover:text-white dark:hover:bg-white/20 text-slate-400 transition-all shadow-sm active:scale-95 group-hover:border-slate-300 dark:group-hover:border-white/20">
                                 <ArrowUpRight className="h-4 w-4" />
                              </button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
           </motion.div>
        </div>

        {/* Global Impact Network - Visual Cards */}
        <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-12 rounded-[4rem] bg-gradient-to-br from-slate-900 to-black dark:from-slate-900 dark:to-black text-white shadow-4xl relative overflow-hidden group border border-slate-800"
            >
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-colors duration-1000"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                     <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                        <ShieldCheck className="h-8 w-8 text-emerald-400" />
                     </div>
                     <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Verified
                     </span>
                  </div>
                  <h3 className="text-4xl font-black mb-4 tracking-tight">Quality Assurance</h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">
                     All payload batches pass through a 5-point safety inspection before transit.
                  </p>
                  <div className="space-y-4">
                     {['Temperature Control', 'Expiry Validation', 'Allergen Tagging'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-300">
                           <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <ShieldCheck className="h-3 w-3 text-emerald-400" />
                           </div>
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-12 rounded-[4rem] bg-gradient-to-br from-indigo-900 to-blue-950 dark:from-indigo-900 dark:to-blue-950 text-white shadow-4xl relative overflow-hidden group border border-indigo-800"
            >
               <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-colors duration-1000"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                     <div className="w-16 h-16 rounded-[2rem] bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-inner">
                        <Users className="h-8 w-8 text-blue-400" />
                     </div>
                     <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20">
                        Community
                     </span>
                  </div>
                  <h3 className="text-4xl font-black mb-4 tracking-tight">Volunteer Fleet</h3>
                  <p className="text-blue-200/70 text-lg font-medium leading-relaxed mb-8 max-w-sm">
                     Join the global network of active dispatch riders maintaining the cold chain.
                  </p>
                  <div className="flex -space-x-4 mb-8">
                     {[1,2,3,4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-indigo-900 bg-slate-800 flex items-center justify-center relative overflow-hidden z-10" style={{ zIndex: 10 - i }}>
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Vol${i}&backgroundColor=transparent`} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-2 border-indigo-900 bg-blue-600 flex items-center justify-center text-xs font-black text-white relative z-0">
                        +1.2k
                     </div>
                  </div>
                  <button className="px-8 py-4 rounded-[2rem] bg-white text-indigo-950 text-sm font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl w-full flex justify-center">
                     Deploy Now
                  </button>
               </div>
            </motion.div>
        </div>

        {/* Tactical Footer Matrix */}
        <div className="max-w-7xl mx-auto px-4 mt-32 text-center relative z-20">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex flex-wrap justify-center items-center gap-10 text-slate-400 dark:text-slate-500 text-[11px] font-black bg-slate-50 dark:bg-white/[0.02] px-16 py-8 rounded-[4rem] border border-black/5 dark:border-white/5 shadow-4xl backdrop-blur-3xl uppercase tracking-[0.4em]"
           >
              <div className="flex items-center gap-4"><ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-500" /> SSL_SECURE_PROTOCOLS</div>
              <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-4"><Lock className="h-5 w-5 text-blue-600 dark:text-blue-500" /> AES_256_TELEMETRY_ENCRYPTION</div>
              <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-4"><Satellite className="h-5 w-5 text-amber-600 dark:text-amber-500" /> NODE_SYNC_v9.4_ACTIVE</div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
