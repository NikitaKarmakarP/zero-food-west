import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area, PieChart, Pie } from 'recharts';
import { Leaf, Users, Utensils, TrendingUp, Zap, Globe, MapPin, Award, Activity, Search, Download, ChevronRight, ShieldCheck, Radar, Cpu, Star, ArrowUpRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';

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
  const { getAcceptedDonations } = useAppContext();
  const [chartType, setChartType] = useState('weekly');
  const [activeMetric, setActiveMetric] = useState('meals');
  const [liveTelemetry, setLiveTelemetry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTelemetry(prev => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const accepted = getAcceptedDonations();
  const totalMeals = 12450 + accepted.reduce((acc, curr) => acc + Number(curr.quantity || 0), 0);
  const peopleAssisted = 45302 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 1.5), 0);
  const co2Avoided = 4200 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 0.8), 0);
  
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 selection:bg-emerald-500/30">
      {/* Cinematic Dashboard Header */}
      <div className="relative pt-20 pb-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30" 
            alt="Data Viz" 
          />
          {/* Global Node Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 text-emerald-400 font-black mb-8 text-[10px] uppercase tracking-[0.3em]">
                   <Radar className="h-4 w-4 animate-pulse" /> Mission Command Hub v8.1
                </div>
                <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
                  Strategic <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">Intelligence.</span>
                </h1>
                <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed opacity-80 max-w-2xl">
                  A high-fidelity operational view of your personal impact nodes and global rescue telemetry.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-6">
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="glass-panel p-8 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-3xl shadow-2xl min-w-[200px]"
                 >
                    <div className="flex items-center gap-4 mb-4">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                       <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Core Sync</span>
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight tabular-nums">99.9<span className="text-slate-500 text-lg ml-1">%</span></div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Uptime SLA</div>
                 </motion.div>
                 
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="glass-panel p-8 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-3xl shadow-2xl min-w-[200px]"
                 >
                    <div className="flex items-center gap-4 mb-4">
                       <Globe className="h-4 w-4 text-blue-400" />
                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Network Radius</span>
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight tabular-nums">12<span className="text-slate-500 text-lg ml-1">KM</span></div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Active Rescue Zone</div>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        {/* Core Impact Cards - Refined Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: "Meals Rescued", value: totalMeals, icon: Utensils, color: "emerald", growth: "+14%", desc: "Diverted from urban landfills" },
            { label: "People Assisted", value: Math.floor(peopleAssisted), icon: Users, color: "blue", growth: "+22%", desc: "Direct node-to-node impact" },
            { label: "CO₂ Avoided (kg)", value: Math.floor(co2Avoided), icon: Leaf, color: "orange", growth: "+9%", desc: "Environmental footprint credit" }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-panel p-12 rounded-[4rem] bg-white shadow-4xl group relative overflow-hidden hover:border-emerald-200 transition-all duration-700"
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-${card.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className={`w-16 h-16 rounded-[2rem] bg-${card.color}-50 text-${card.color}-600 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <card.icon className="h-8 w-8" />
                 </div>
                 <div className={`flex items-center gap-1.5 text-[10px] font-black text-${card.color}-600 bg-${card.color}-50 px-4 py-1.5 rounded-full border border-${card.color}-100`}>
                    <ArrowUpRight className="h-3 w-3" /> {card.growth}
                 </div>
              </div>

              <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3">{card.label}</h3>
              <div className="text-7xl font-black text-slate-900 tracking-tighter tabular-nums mb-6 leading-none">{card.value.toLocaleString()}</div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Visualization Area */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="glass-panel p-12 rounded-[5rem] bg-white shadow-3xl relative border-slate-50 overflow-hidden"
            >
              {/* Background Chart Accent */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                 <Activity className="h-64 w-64" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                     <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Strategic Analysis</span>
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Rescue Momentum</h2>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="flex p-1.5 bg-slate-50 rounded-3xl border border-slate-100 gap-1">
                      {['meals', 'co2'].map(metric => (
                        <button 
                          key={metric}
                          onClick={() => setActiveMetric(metric)}
                          className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMetric === metric ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                          {metric.toUpperCase()}
                        </button>
                      ))}
                   </div>
                   <div className="w-px h-8 bg-slate-100"></div>
                   <select 
                     className="bg-transparent border-none focus:ring-0 text-[10px] font-black text-slate-500 uppercase tracking-widest cursor-pointer"
                     onChange={(e) => setChartType(e.target.value)}
                   >
                      <option value="weekly">Last 7 Days</option>
                      <option value="monthly">Last 30 Days</option>
                   </select>
                </div>
              </div>

              <div className="h-[450px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeMetric === 'meals' ? '#10b981' : '#3b82f6'} stopOpacity={0.2}/>
                        <stop offset="95%" stopColor={activeMetric === 'meals' ? '#10b981' : '#3b82f6'} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em'}} 
                      dy={25}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} 
                      dx={-20}
                    />
                    <Tooltip 
                      cursor={{stroke: '#e2e8f0', strokeWidth: 2}} 
                      contentStyle={{
                        borderRadius: '32px', 
                        border: 'none', 
                        background: 'rgba(15, 23, 42, 0.95)', 
                        backdropFilter: 'blur(16px)', 
                        boxShadow: '0 40px 100px -12px rgba(0, 0, 0, 0.3)', 
                        padding: '24px 32px'
                      }}
                      itemStyle={{color: activeMetric === 'meals' ? '#10b981' : '#3b82f6', fontSize: '28px', fontWeight: '900', letterSpacing: '-0.02em'}}
                      labelStyle={{color: '#94a3b8', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey={activeMetric} 
                      stroke={activeMetric === 'meals' ? '#10b981' : '#3b82f6'} 
                      strokeWidth={5} 
                      fillOpacity={1} 
                      fill="url(#colorMetric)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                 <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                          <Activity className="h-6 w-6" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg daily</div>
                          <div className="text-xl font-black text-slate-900">245 Units</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                          <Zap className="h-6 w-6" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Peak Load</div>
                          <div className="text-xl font-black text-slate-900">420 Units</div>
                       </div>
                    </div>
                 </div>
                 <button className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-2xl text-[10px] uppercase tracking-widest border border-slate-100 transition-all flex items-center gap-3">
                    <Download className="h-4 w-4" /> Comprehensive Impact Report
                 </button>
              </div>
            </motion.div>

            {/* Achievement Vault & Global Network Hub */}
            <div className="grid md:grid-cols-2 gap-10">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass-panel p-12 rounded-[4rem] bg-white shadow-3xl relative overflow-hidden"
               >
                  <div className="flex items-center justify-between mb-12">
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Achievement Vault</h3>
                     <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  </div>
                  
                  <div className="space-y-8">
                     {achievements.map((item, i) => (
                       <div key={item.id} className="group cursor-pointer">
                          <div className="flex justify-between items-center mb-4">
                             <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                   <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                   <h4 className="font-black text-slate-900 text-sm tracking-tight">{item.title}</h4>
                                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.level} RANK</span>
                                </div>
                             </div>
                             <span className="text-slate-900 font-black text-xs">{item.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${item.progress}%` }}
                               transition={{ duration: 1.5, delay: i * 0.2 }}
                               className={`h-full bg-${item.color}-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                  
                  <button className="w-full mt-12 py-5 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] hover:border-emerald-500 hover:text-emerald-600 transition-all">
                     View All 12 Unlocked Badges
                  </button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass-panel p-12 rounded-[4rem] bg-slate-900 text-white shadow-4xl relative overflow-hidden"
               >
                  {/* Radar Pulse Animation */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-12">
                        <h3 className="text-2xl font-black tracking-tight">Active Node Telemetry</h3>
                        <div className="flex gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                        </div>
                     </div>

                     <div className="flex-grow flex items-center justify-center py-8">
                        <div className="relative w-48 h-48">
                           <motion.div 
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                             transition={{ duration: 3, repeat: Infinity }}
                             className="absolute inset-0 border-2 border-blue-500 rounded-full"
                           />
                           <motion.div 
                             animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                             transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                             className="absolute inset-0 border border-blue-400 rounded-full"
                           />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <Globe className="h-16 w-16 text-white opacity-40" />
                           </div>
                        </div>
                     </div>

                     <div className="mt-12 space-y-6">
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Impact Radius</div>
                              <div className="text-5xl font-black">2.4k<span className="text-sm font-bold text-slate-500 ml-1">KM²</span></div>
                           </div>
                           <div className="text-right">
                              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Nodes Active</div>
                              <div className="text-2xl font-black text-white">482</div>
                           </div>
                        </div>
                        <div className="h-px w-full bg-white/10"></div>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
                          "Your contributions have stabilized 3 high-urgency nodes in the Kolkata North sector this week."
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Sidebar - Mission Logs & Live Feed */}
          <div className="lg:col-span-4 space-y-10">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               className="glass-panel p-10 rounded-[5rem] bg-white shadow-3xl border-slate-50 flex flex-col"
               style={{ minHeight: '850px' }}
             >
                <div className="flex items-center justify-between mb-12">
                   <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">Mission Log</h3>
                      <div className="flex items-center gap-2 mt-1">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Streaming Live</span>
                      </div>
                   </div>
                   <button className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                      <Search className="h-5 w-5 text-slate-400" />
                   </button>
                </div>

                <div className="flex-1 space-y-6">
                   <AnimatePresence mode="popLayout">
                      {missionLogs.map((log, idx) => (
                        <motion.div 
                          key={log.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group p-8 rounded-[3rem] border border-slate-50 hover:border-emerald-100 hover:bg-emerald-50/20 transition-all cursor-pointer relative"
                        >
                           <div className="flex justify-between items-start mb-4">
                              <div className="flex gap-2">
                                 <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                                   log.type === 'Rescue' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                                   log.type === 'Impact' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                                 }`}>
                                    {log.type}
                                 </span>
                                 {log.urgency === 'Critical' && (
                                   <span className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 animate-pulse">
                                      Critical
                                   </span>
                                 )}
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
                                 <Clock className="h-3 w-3" /> {log.time}
                              </span>
                           </div>
                           
                           <h4 className="font-black text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">{log.title}</h4>
                           
                           <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
                              <MapPin className="h-3.5 w-3.5 text-slate-400" /> {log.location}
                           </div>

                           <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                              <div className="flex items-center gap-2">
                                 <div className={`h-2 w-2 rounded-full ${log.status === 'Completed' ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`}></div>
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{log.status}</span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                           </div>
                        </motion.div>
                      ))}
                   </AnimatePresence>
                </div>

                <button className="w-full mt-12 bg-slate-950 hover:bg-slate-800 text-white font-black py-6 rounded-[2.5rem] transition-all flex items-center justify-center gap-4 shadow-2xl group active:scale-95">
                   <span className="text-sm uppercase tracking-widest">Access Command Central</span>
                   <Cpu className="h-5 w-5 group-hover:rotate-90 transition-transform duration-500" />
                </button>
             </motion.div>

             {/* Personal Brand Aura */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="glass-panel p-12 rounded-[4rem] bg-gradient-to-tr from-emerald-600 via-teal-600 to-blue-600 text-white shadow-4xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-10 opacity-10">
                   <Zap className="h-48 w-48" />
                </div>
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-2xl border border-white/20">
                      <Star className="h-8 w-8 fill-white" />
                   </div>
                   <h3 className="text-3xl font-black mb-6 tracking-tight leading-none">Global Tier:<br/>Impact Platinum</h3>
                   <p className="text-emerald-50/80 text-lg font-medium mb-10 leading-relaxed opacity-90">
                      You are in the top 2% of contributors in the South-East Asia node cluster. Your precision is setting a new benchmark.
                   </p>
                   <div className="flex items-center gap-4">
                      <button className="flex-1 bg-white text-slate-900 font-black py-5 rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl">
                         Refine Node Profile
                      </button>
                      <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center shadow-2xl">
                         <Globe className="h-6 w-6 text-emerald-400" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
