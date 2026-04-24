import { Truck, MapPin, CheckCircle, Package, Star, Navigation, Phone, ShieldCheck, Clock, ArrowRight, Activity, Terminal, Zap, ShieldAlert, ChevronRight, MessageSquare, Globe, Radar, Wind, Thermometer, Satellite } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function PickupTracking() {
  const { getAcceptedDonations } = useAppContext();
  const [rated, setRated] = useState({});
  const [activeLog, setActiveLog] = useState(0);
  const activePickups = getAcceptedDonations();
  
  const handleRating = (id, stars) => {
    setRated({ ...rated, [id]: stars });
  };

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
    <div className="min-h-screen bg-slate-50 pb-24 selection:bg-emerald-500/30 font-sans">
      {/* Cinematic Command Header */}
      <section className="bg-slate-950 text-white pt-40 pb-56 relative overflow-hidden">
        {/* Animated Grid & Radar Background */}
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Peripheral Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10 backdrop-blur-3xl"
              >
                <div className="relative">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                   <div className="w-2 h-2 rounded-full bg-emerald-500 absolute inset-0"></div>
                </div>
                Logistics Command Center v2.4
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]"
              >
                Mission <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">Tracking.</span>
              </motion.h1>
              
              <p className="text-slate-400 text-2xl font-medium leading-relaxed opacity-80 max-w-2xl">
                Real-time forensic monitoring of high-integrity food rescue operations across the urban infrastructure.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-8"
            >
              <div className="glass-panel-dark p-10 rounded-[3rem] bg-white/5 border-white/10 backdrop-blur-2xl flex items-center gap-8">
                 <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                    <Radar className="h-10 w-10 text-emerald-400" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Active Missions</p>
                    <p className="text-6xl font-black text-white tracking-tighter">{activePickups.length}</p>
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
            className="glass-panel p-24 text-center rounded-[4rem] border-white shadow-4xl bg-white/80 backdrop-blur-3xl max-w-3xl mx-auto"
          >
            <div className="w-32 h-32 bg-slate-50 rounded-[3rem] flex items-center justify-center mx-auto mb-12 border border-slate-100 shadow-inner group overflow-hidden">
               <Package className="h-12 w-12 text-slate-300 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
            </div>
            <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">System Standby</h3>
            <p className="text-slate-500 font-medium text-2xl mb-14 max-w-md mx-auto leading-relaxed italic opacity-60">
              "Awaiting the next signal to bridge the gap between waste and hunger."
            </p>
            <button 
              onClick={() => navigate('/donate')}
              className="bg-slate-900 text-white px-14 py-7 rounded-[2.5rem] font-black hover:bg-emerald-600 transition-all shadow-3xl shadow-slate-900/20 flex items-center gap-4 mx-auto text-xl group active:scale-95"
            >
              Initialize Donation <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <div className="space-y-24">
            {activePickups.map((pickup, idx) => (
              <motion.div 
                key={pickup.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-[4rem] overflow-hidden border-white/80 shadow-4xl bg-white/70 backdrop-blur-3xl flex flex-col lg:flex-row group"
              >
                {/* Left Side: Telemetry Monitor */}
                <div className="flex-1 p-12 md:p-16 border-r border-slate-100/50">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${pickup.type === 'veg' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {pickup.type} Recovery Protocol
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md">
                          <Terminal className="h-3 w-3" /> ID: MISSION_{pickup.id.toString().slice(-4)}
                        </div>
                      </div>
                      <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">{pickup.foodName}</h2>
                      <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold">
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl">
                           <Package className="h-5 w-5 text-emerald-500" /> 
                           <span className="text-xl text-slate-900">{pickup.quantity} <span className="text-slate-400 text-sm">Servings</span></span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl">
                           <Globe className="h-5 w-5 text-blue-500" /> 
                           <span className="text-slate-900">NGO: Global Relief</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                       <div className="bg-slate-900 text-white px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-white/10 group-hover:bg-emerald-600 transition-colors duration-500">
                         <div className="relative">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute inset-0"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative"></div>
                         </div>
                         <span className="text-xs font-black uppercase tracking-[0.3em]">Operational</span>
                       </div>
                       <p className="mt-4 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] tracking-tighter">Status: Synchronized with Satellite</p>
                    </div>
                  </div>

                  {/* High-Tech Progress Path */}
                  <div className="mb-20 relative px-4">
                    <div className="absolute top-[32px] left-12 right-12 h-1.5 bg-slate-100 rounded-full z-0 overflow-hidden shadow-inner">
                       <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: '68%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                       />
                    </div>
                    <div className="relative z-10 flex justify-between">
                      <ProgressNode label="Verified" icon={ShieldCheck} active completed />
                      <ProgressNode label="Pickup" icon={Truck} active current />
                      <ProgressNode label="Delivery" icon={MapPin} />
                    </div>
                  </div>

                  {/* Real-time Environmental Telemetry */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                     {[
                       { label: 'Temp Control', value: '4.2°C', icon: Thermometer, color: 'emerald' },
                       { label: 'ETA Variance', value: '±2m', icon: Clock, color: 'blue' },
                       { label: 'Wind Speed', value: '12km/h', icon: Wind, color: 'slate' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 hover:bg-white transition-all shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                             <stat.icon className={`h-4 w-4 text-${stat.color}-500`} />
                             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                       </div>
                     ))}
                  </div>

                  {/* Logistics Asset Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                     <div className="bg-slate-900 p-8 rounded-[3rem] border border-white/5 flex items-center gap-8 group/driver hover:scale-[1.02] transition-all duration-500 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                           <ShieldCheck className="h-20 w-20 text-white" />
                        </div>
                        <div className="relative shrink-0">
                          <img src="https://i.pravatar.cc/150?u=rajesh" className="w-24 h-24 rounded-[2rem] object-cover shadow-2xl border-2 border-white/10 group-hover/driver:scale-110 transition-transform duration-700" alt="Volunteer" />
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center border-4 border-slate-900 shadow-xl">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                        <div className="relative z-10">
                          <p className="text-2xl font-black text-white mb-2">Rajesh M.</p>
                          <div className="flex flex-col gap-1">
                             <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">Elite Rescuer</span>
                             <span className="text-slate-500 text-[10px] font-bold">850+ SUCCESSFUL MISSIONS</span>
                          </div>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none"></div>
                        <div className="relative z-10">
                           <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">
                              <span>Mission Log</span>
                              <div className="flex gap-1">
                                 <div className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                                 <div className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse delay-75"></div>
                                 <div className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
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
                                <span className="text-emerald-600 font-black text-xs tracking-widest">{dummyLogs[activeLog].time}</span>
                                <span className="text-slate-900 font-black text-lg tracking-tight leading-tight">{dummyLogs[activeLog].event}</span>
                             </motion.div>
                           </AnimatePresence>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <button className="flex-1 bg-slate-900 text-white font-black py-7 rounded-[2.5rem] hover:bg-emerald-600 transition-all shadow-3xl shadow-slate-900/20 flex items-center justify-center gap-4 group active:scale-95 text-lg">
                        Operational Comms <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                     </button>
                     <button className="px-12 bg-white text-slate-900 border-2 border-slate-100 font-black py-7 rounded-[2.5rem] hover:border-emerald-500 transition-all flex items-center justify-center gap-4 shadow-xl hover:shadow-emerald-500/10 active:scale-95">
                        <Phone className="h-6 w-6" />
                     </button>
                  </div>
                </div>

                {/* Right Side: Tactical Navigation Interface */}
                <div className="lg:w-[48%] h-[500px] lg:h-auto min-h-[700px] relative bg-slate-900 overflow-hidden">
                  {/* Digital Satellite Map Background */}
                  <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=15&size=1200x1200&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x334155&style=feature:landscape|element:geometry|color:0x0f172a&style=feature:water|element:geometry|color:0x1e293b&sensor=false')] bg-cover bg-center"></div>
                  
                  {/* Digital Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                  
                  {/* Tactical Scan Line */}
                  <motion.div 
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-emerald-500/20 z-10"
                  />

                  {/* Asset Indicator (The Vehicle) */}
                  <motion.div 
                    animate={{ 
                      y: [0, -20, 0],
                      x: [0, 15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <div className="relative">
                       <div className="w-32 h-32 rounded-full border-2 border-emerald-500/20 animate-[ping_3s_infinite] absolute -inset-8"></div>
                       <div className="w-24 h-24 rounded-full border border-emerald-500/30 animate-[ping_4s_infinite] absolute -inset-4"></div>
                       
                       <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-slate-900 border-[6px] border-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.4)] relative z-10">
                          <Truck className="h-8 w-8" />
                       </div>
                       
                       {/* Floating Label */}
                       <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-2xl">
                          ASSET_BRAVO_01
                       </div>
                    </div>
                  </motion.div>

                  {/* Tactical Navigation HUD */}
                  <div className="absolute bottom-10 left-10 right-10 z-40">
                     <div className="glass-panel-dark p-10 rounded-[3.5rem] border-white/10 shadow-4xl bg-slate-900/90 backdrop-blur-3xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                        
                        <div className="flex justify-between items-end relative z-10">
                           <div className="space-y-2">
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">ETA PROJECTION</p>
                              <div className="flex items-baseline gap-2">
                                 <span className="text-6xl font-black text-white tracking-tighter">12</span>
                                 <span className="text-xl font-black text-emerald-400 uppercase tracking-widest">Mins</span>
                              </div>
                              <p className="text-xs font-bold text-emerald-500/80 tracking-wide flex items-center gap-2">
                                 <Satellite className="h-4 w-4" /> Optimizing Signal Path...
                              </p>
                           </div>
                           
                           <div className="text-right space-y-3">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">DIST_REMAINING</p>
                                 <p className="text-3xl font-black text-white tracking-tighter">2.4 <span className="text-sm text-slate-500">KM</span></p>
                              </div>
                              <button className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                                 DEPLOY MAPS <Navigation className="h-4 w-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Tactical Control Buttons */}
                  <div className="absolute top-10 right-10 flex flex-col gap-4 z-40">
                    {[Radar, Satellite, ShieldAlert].map((Icon, i) => (
                      <button key={i} className="w-14 h-14 rounded-2xl bg-slate-900/80 backdrop-blur-xl shadow-2xl flex items-center justify-center text-white border border-white/10 hover:bg-emerald-600 hover:text-white transition-all hover:scale-110 active:scale-95 group">
                        <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Operational Compliance Footer */}
      <div className="max-w-7xl mx-auto px-4 mt-32 text-center">
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="inline-flex items-center gap-4 text-slate-400 text-sm font-black bg-white px-8 py-4 rounded-[2.5rem] border border-slate-200 shadow-xl"
         >
            <ShieldCheck className="h-5 w-5 text-emerald-500" /> 
            SSL SECURE OPS
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            AES-256 ENCRYPTED TELEMETRY
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <Zap className="h-5 w-5 text-amber-500" /> NODE_SYNCED
         </motion.div>
      </div>
    </div>
  );
}

function ProgressNode({ label, icon: Icon, active = false, completed = false, current = false }) {
  return (
    <div className="flex flex-col items-center relative">
      <motion.div 
        initial={false}
        animate={{ 
          scale: current ? [1, 1.15, 1] : 1,
          backgroundColor: active ? (current ? '#10b981' : '#0f172a') : '#ffffff',
          color: active ? '#ffffff' : '#94a3b8',
          borderColor: current ? '#10b981' : (active ? '#0f172a' : '#f1f5f9')
        }}
        transition={{ scale: { repeat: current ? Infinity : 0, duration: 2.5 } }}
        className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center border-4 shadow-2xl relative z-20 transition-all duration-500`}
      >
         {completed ? <CheckCircle className="h-7 w-7" /> : <Icon className="h-7 w-7" />}
         {current && (
           <span className="absolute -inset-3 rounded-[1.7rem] border-2 border-emerald-400 animate-pulse opacity-40"></span>
         )}
      </motion.div>
      <span className={`text-[10px] font-black uppercase tracking-[0.3em] mt-6 transition-colors duration-500 ${active ? 'text-slate-900' : 'text-slate-300'}`}>
        {label}
      </span>
    </div>
  );
}
