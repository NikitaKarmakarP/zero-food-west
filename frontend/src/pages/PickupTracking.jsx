import { Truck, MapPin, CheckCircle, Package, Star, Navigation, Phone, ShieldCheck, Clock, ArrowRight, Activity, Terminal, Zap, ShieldAlert, ChevronRight, MessageSquare, Globe, Radar, Wind, Thermometer, Satellite, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const ProgressNode = ({ label, icon: Icon, active = false, completed = false, current = false }) => {
  return (
    <div className="flex flex-col items-center relative">
      <motion.div 
        initial={false}
        animate={{ 
          scale: current ? [1, 1.15, 1] : 1,
          backgroundColor: active ? (current ? '#10b981' : '#1e293b') : 'rgba(255,255,255,0.05)',
          color: active ? '#ffffff' : '#94a3b8',
          borderColor: current ? '#10b981' : (active ? '#10b98130' : 'rgba(255,255,255,0.1)')
        }}
        transition={{ scale: { repeat: current ? Infinity : 0, duration: 2.5 } }}
        className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center border-4 shadow-2xl relative z-20 transition-all duration-500`}
      >
         {completed ? <CheckCircle className="h-7 w-7" /> : <Icon className="h-7 w-7" />}
         {current && (
           <span className="absolute -inset-3 rounded-[1.7rem] border-2 border-emerald-400 animate-pulse opacity-40"></span>
         )}
      </motion.div>
      <span className={`text-[10px] font-black uppercase tracking-[0.3em] mt-6 transition-colors duration-500 ${active ? 'text-emerald-400' : 'text-slate-400 opacity-60'}`}>
        {label}
      </span>
    </div>
  );
};

export default function PickupTracking() {
  const context = useAppContext();
  const navigate = useNavigate();
  
  // High-Performance Fallback Data
  const demoMission = [{
    id: 'MISSION_883921',
    foodName: 'High-Integrity Meal Rescue',
    quantity: '45+',
    type: 'veg',
    donorName: 'Skyline Plaza',
    ngoName: 'Global Relief Cluster'
  }];

  const donations = context?.getAcceptedDonations() || [];
  const activePickups = donations.length > 0 ? donations : demoMission;
  const [activeLog, setActiveLog] = useState(0);
  
  const dummyLogs = [
    { time: '10:45 AM', event: 'Mission initialized by NGO', status: 'verified' },
    { time: '10:52 AM', event: 'Volunteer Rajesh M. assigned', status: 'active' },
    { time: '11:05 AM', event: 'Thermal bag temp: 4.2°C', status: 'secure' },
    { time: '11:15 AM', event: 'Driver arriving at donor venue', status: 'transit' },
    { time: '11:22 AM', event: 'Food quality scan: PASSED', status: 'verified' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog(prev => (prev + 1) % dummyLogs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Logistics Intelligence Ticker */}
      <div className="bg-slate-50 dark:bg-emerald-500/5 border-b border-black/5 dark:border-white/5 py-4 overflow-hidden relative z-50">
         <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
            {[1,2,3,4,5].map(i => (
               <div key={i} className="flex items-center gap-16 text-[9px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.4em]">
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><Activity className="h-3 w-3" /> TRACKING_NODE: ACTIVE</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Globe className="h-3 w-3" /> NETWORK: SYNCHRONIZED</span>
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Zap className="h-3 w-3" /> POWER_STATUS: OPTIMAL</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Radar className="h-3 w-3" /> SATELLITE_LINK: LOCKED</span>
              </div>
            ))}
         </div>
      </div>

      {/* Cinematic Command Header */}
      <section className="bg-slate-50 dark:bg-[#020617] text-slate-950 dark:text-white pt-24 pb-48 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[9px] uppercase tracking-[0.5em] mb-12 backdrop-blur-3xl shadow-sm"
              >
                <div className="relative">
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute inset-0"></div>
                </div>
                Logistics Command Center v4.0.2
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-8xl md:text-[10rem] font-black mb-10 tracking-tighter leading-[0.8] text-slate-950 dark:text-white"
              >
                Mission <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Tracking.</span>
              </motion.h1>
              
              <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed opacity-90 dark:opacity-80 max-w-2xl border-l-2 border-emerald-500/30 pl-8">
                Forensic monitoring of high-integrity food rescue operations across urban nodes. <span className="text-emerald-600 dark:text-emerald-400 font-black">Real-time telemetry active.</span>
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-10"
            >
              <div className="bg-white/70 dark:bg-white/[0.02] p-12 rounded-[4rem] border border-black/5 dark:border-white/5 backdrop-blur-3xl flex items-center gap-10 shadow-3xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all">
                 <div className="w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center shadow-inner border border-emerald-500/20">
                    <Radar className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Live Assets</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-7xl font-black text-slate-950 dark:text-white tracking-tighter">{activePickups.length}</p>
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        {activePickups.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-3xl p-24 text-center rounded-[5rem] border border-black/5 dark:border-white/5 shadow-4xl max-w-4xl mx-auto relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b98105_0%,transparent_70%)]"></div>
             <div className="w-40 h-40 bg-slate-50 dark:bg-white/5 rounded-[4rem] flex items-center justify-center mx-auto mb-16 border border-black/5 dark:border-white/10 shadow-inner group overflow-hidden relative z-10">
                <Radar className="h-16 w-16 text-slate-300 dark:text-slate-500 animate-pulse" />
             </div>
             <h3 className="text-6xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter relative z-10 uppercase">System Standby.</h3>
             <p className="text-slate-400 dark:text-slate-400 font-medium text-2xl mb-16 max-w-xl mx-auto leading-relaxed italic opacity-60 relative z-10">
               "Awaiting tactical signal to bridge urban waste gaps. All logistics nodes currently in scanning mode."
             </p>
             <button 
               onClick={() => navigate('/donate')}
               className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-16 py-8 rounded-[2.5rem] font-black hover:bg-emerald-500 hover:text-white transition-all shadow-4xl flex items-center gap-6 mx-auto text-xl group active:scale-95 relative z-10 uppercase tracking-widest"
             >
               Initialize Mission <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" />
             </button>
          </motion.div>
        ) : (
          <div className="space-y-24">
            {activePickups.map((pickup, idx) => (
              <motion.div 
                key={pickup.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-4xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-white/70 dark:bg-white/[0.05] backdrop-blur-3xl flex flex-col lg:flex-row group transition-all"
              >
                {/* Left Side: Telemetry Monitor */}
                <div className="flex-1 p-12 md:p-20 border-r border-black/5 dark:border-white/5 relative">
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-emerald-500/10 dark:border-emerald-500/20 rounded-tl-[4rem]"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 relative z-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border shadow-sm ${pickup.type === 'veg' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'}`}>
                          {pickup.type} RECOVERY_PROTOCOL
                        </span>
                        <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 font-black text-[9px] uppercase tracking-[0.3em] bg-slate-50 dark:bg-white/[0.02] px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
                          <Terminal className="h-3.5 w-3.5" /> ID: MISSION_CORE_{pickup.id.toString().slice(-4)}
                        </div>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter leading-none">{pickup.foodName}</h2>
                      <div className="flex flex-wrap items-center gap-8 text-slate-400 font-bold">
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-white/[0.02] px-6 py-4 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-inner">
                           <Package className="h-6 w-6 text-emerald-600 dark:text-emerald-500" /> 
                           <span className="text-3xl font-black text-slate-950 dark:text-white">{pickup.quantity} <span className="text-slate-400 dark:text-slate-500 text-sm uppercase tracking-widest ml-2">Units</span></span>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-white/[0.02] px-6 py-4 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-inner">
                           <Globe className="h-6 w-6 text-blue-600 dark:text-blue-500" /> 
                           <span className="text-slate-950 dark:text-white text-lg tracking-tight">NGO: Global Relief Cluster</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                       <div className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-[2.5rem] shadow-4xl flex items-center gap-4 border border-white/10 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-700 hover:scale-105">
                         <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-white dark:bg-slate-950 animate-ping absolute inset-0"></div>
                            <div className="w-3 h-3 rounded-full bg-white dark:bg-slate-950 relative"></div>
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-[0.4em]">Operational</span>
                       </div>
                       <p className="text-slate-300 dark:text-slate-600 font-black text-[9px] uppercase tracking-[0.5em]">Sync_Status: NOMINAL</p>
                    </div>
                  </div>

                  <div className="mb-20 relative px-4">
                    <div className="absolute top-[32px] left-12 right-12 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full z-0 overflow-hidden shadow-inner">
                       <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: '68%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-500 dark:via-teal-400 dark:to-blue-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                       />
                    </div>
                    <div className="relative z-10 flex justify-between">
                      <ProgressNode label="Verified" icon={ShieldCheck} active completed />
                      <ProgressNode label="Pickup" icon={Truck} active current />
                      <ProgressNode label="Delivery" icon={MapPin} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                     {[
                       { label: 'Temp Control', value: '4.2°C', icon: Thermometer, color: 'emerald' },
                       { label: 'ETA Variance', value: '±2m', icon: Clock, color: 'blue' },
                       { label: 'Wind Speed', value: '12km/h', icon: Wind, color: 'slate' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                             <stat.icon className={`h-4 w-4 text-${stat.color}-600 dark:text-${stat.color}-500`} />
                             <span className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="text-2xl font-black text-slate-950 dark:text-white">{stat.value}</div>
                       </div>
                     ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                     <div className="bg-slate-950 dark:bg-slate-950 p-8 rounded-[3rem] border border-white/10 flex items-center gap-8 group/driver hover:scale-[1.02] transition-all duration-500 shadow-4xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                           <ShieldCheck className="h-20 w-20 text-white" />
                        </div>
                        <div className="relative shrink-0">
                          <img src="https://i.pravatar.cc/150?u=rajesh" className="w-24 h-24 rounded-[2rem] object-cover shadow-2xl border-2 border-white/10 group-hover/driver:scale-110 transition-transform duration-700" alt="Volunteer" />
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center border-4 border-slate-950 shadow-xl">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                        <div className="relative z-10">
                          <p className="text-2xl font-black text-white mb-2">Rajesh M.</p>
                          <div className="flex flex-col gap-1">
                             <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">Elite Rescuer</span>
                             <span className="text-slate-400 text-[10px] font-bold">850+ SUCCESSFUL MISSIONS</span>
                          </div>
                        </div>
                     </div>

                     <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-xl flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                           <div className="flex justify-between items-center text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.3em] mb-6">
                              <span>Mission Log</span>
                              <div className="flex gap-1">
                                 <div className="w-1 h-3 bg-emerald-600 dark:bg-emerald-500 rounded-full animate-pulse"></div>
                                 <div className="w-1 h-3 bg-emerald-600 dark:bg-emerald-500 rounded-full animate-pulse delay-75"></div>
                                 <div className="w-1 h-3 bg-emerald-600 dark:bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                              </div>
                           </div>
                           <AnimatePresence mode="wait">
                             <motion.div 
                               key={activeLog}
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               className="flex flex-col gap-2"
                             >
                                 <span className="text-emerald-600 dark:text-emerald-400 font-black text-xs tracking-widest">{dummyLogs[activeLog].time}</span>
                                 <span className="text-slate-950 dark:text-white font-black text-lg tracking-tight leading-tight">{dummyLogs[activeLog].event}</span>
                             </motion.div>
                           </AnimatePresence>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <button className="flex-1 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-7 rounded-[2.5rem] hover:bg-emerald-500 hover:text-white transition-all shadow-4xl flex items-center justify-center gap-4 group active:scale-95 text-lg">
                        Operational Comms <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                     </button>
                     <button className="px-12 bg-slate-50 dark:bg-white/5 text-slate-950 dark:text-white border border-black/5 dark:border-white/10 font-black py-7 rounded-[2.5rem] hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95">
                        <Phone className="h-6 w-6" />
                     </button>
                  </div>
                </div>
                {/* Right Side: Tactical Navigation Interface */}
                <div className="lg:w-[48%] h-[600px] lg:h-auto min-h-[850px] relative bg-slate-100 dark:bg-[#01040a] overflow-hidden transition-colors duration-500">
                  <div className="absolute inset-0 grayscale contrast-125 opacity-20 dark:opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=15&size=1200x1200&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x334155&style=feature:landscape|element:geometry|color:0x0f172a&style=feature:water|element:geometry|color:0x1e293b&sensor=false')] bg-cover bg-center"></div>
                  
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b98105_0%,transparent_70%)]"></div>
                  
                  <motion.div 
                    animate={{ top: ['-20%', '120%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-emerald-500/40 z-10 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  />

                  <motion.div 
                    animate={{ 
                      y: [0, -40, 0],
                      x: [0, 30, 0],
                      rotate: [0, 8, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <div className="relative">
                       <div className="w-48 h-48 rounded-full border border-emerald-500/10 animate-[ping_4s_infinite] absolute -inset-12"></div>
                       <div className="w-32 h-32 rounded-full border-2 border-emerald-500/20 animate-[ping_3s_infinite] absolute -inset-4"></div>
                       
                       <div className="w-24 h-24 bg-slate-950 dark:bg-white rounded-[2rem] flex items-center justify-center text-white dark:text-slate-950 border-[8px] border-white dark:border-[#01040a] shadow-4xl relative z-10">
                          <Truck className="h-12 w-12" />
                       </div>
                       
                       <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                          <div className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-6 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl">
                             ASSET_ACTIVE_NODE_01
                          </div>
                          <div className="text-emerald-600 dark:text-emerald-500 font-black text-[8px] uppercase tracking-widest opacity-60">
                             LAT: 22.5726 | LON: 88.3639
                          </div>
                       </div>
                    </div>
                  </motion.div>

                  <div className="absolute top-10 left-10 z-40 space-y-4">
                     <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 rounded-3xl shadow-xl">
                        <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                           <Activity className="h-4 w-4" /> Live_Telemetry
                        </div>
                        <div className="mt-4 space-y-2">
                           <div className="h-1 w-32 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <motion.div animate={{ width: ['20%', '80%', '20%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-emerald-600 dark:bg-emerald-500" />
                           </div>
                           <div className="h-1 w-24 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <motion.div animate={{ width: ['60%', '30%', '60%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-blue-600 dark:bg-blue-500" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 z-40">
                     <div className="bg-white/90 dark:bg-[#020617]/90 backdrop-blur-3xl p-12 rounded-[4rem] border border-black/5 dark:border-white/10 shadow-4xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-500 dark:via-teal-400 dark:to-blue-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                        
                        <div className="flex justify-between items-end relative z-10">
                           <div className="space-y-4">
                              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">LOGISTICS_ETA_PROJECTION</p>
                              <div className="flex items-baseline gap-4">
                                 <span className="text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-none">12</span>
                                 <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em]">Mins</span>
                              </div>
                              <p className="text-xs font-black text-emerald-600 dark:text-emerald-500 flex items-center gap-3">
                                 <Satellite className="h-5 w-5 animate-pulse" /> NETWORK_OPTIMIZATION_IN_PROGRESS
                              </p>
                           </div>
                           
                           <div className="text-right space-y-6">
                              <div className="space-y-2">
                                 <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">TOTAL_REMAINING_RADIUS</p>
                                 <p className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter">2.4 <span className="text-lg text-slate-400 dark:text-slate-600 ml-2">KM</span></p>
                              </div>
                              <button className="bg-slate-950 dark:bg-emerald-500 text-white dark:text-slate-950 px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-emerald-600 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all shadow-4xl active:scale-95 group">
                                 LAUNCH_TACTICAL_MAP <Navigation className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
 
                   <div className="absolute top-10 right-10 flex flex-col gap-6 z-40">
                     {[Radar, Satellite, ShieldAlert].map((Icon, i) => (
                       <button key={i} className="w-16 h-16 rounded-[1.5rem] bg-white/80 dark:bg-white/5 backdrop-blur-3xl shadow-4xl flex items-center justify-center text-slate-950 dark:text-white border border-black/5 dark:border-white/10 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 transition-all hover:scale-110 active:scale-95 group relative">
                         <Icon className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                         <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse"></div>
                       </button>
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 mt-48 text-center">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex flex-wrap justify-center items-center gap-8 text-slate-400 dark:text-slate-500 text-[10px] font-black bg-slate-50 dark:bg-white/[0.02] px-12 py-6 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-3xl backdrop-blur-xl uppercase tracking-[0.3em]"
           >
              <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-500" /> SSL_SECURE_PROTOCOLS</div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-3"><Lock className="h-4 w-4 text-blue-600 dark:text-blue-500" /> AES_256_TELEMETRY_ENCRYPTION</div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-3"><Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" /> NODE_SYNC_v9.4</div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
