import { Truck, MapPin, CheckCircle, Package, Star, Navigation, Phone, ShieldCheck, Clock, ArrowRight, Activity, Terminal, Zap, ShieldAlert, ChevronRight, MessageSquare, Globe, Radar, Wind, Thermometer, Satellite, Lock, X, Info, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import InteractiveMap from '../components/InteractiveMap';

const ProgressNode = ({ label, icon: Icon, active = false, completed = false, current = false }) => {
  return (
    <div className="flex flex-col items-center relative">
      <motion.div 
        initial={false}
        animate={{ 
          scale: current ? [1, 1.1, 1] : 1,
          backgroundColor: active ? (current ? '#10b981' : '#020617') : 'rgba(255,255,255,0.05)',
          color: active ? '#ffffff' : '#94a3b8',
          borderColor: current ? '#10b981' : (active ? '#10b98130' : 'rgba(255,255,255,0.1)')
        }}
        transition={{ scale: { repeat: current ? Infinity : 0, duration: 2.5 } }}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 shadow-xl relative z-20 transition-all duration-500`}
      >
         {completed ? <CheckCircle className="h-6 w-6 md:h-7 md:h-7" /> : <Icon className="h-6 w-6 md:h-7 md:h-7" />}
         {current && (
           <span className="absolute -inset-2 rounded-2xl border-2 border-emerald-400 animate-pulse opacity-40"></span>
         )}
      </motion.div>
      <span className={`text-[9px] font-bold uppercase tracking-widest mt-4 transition-colors duration-500 ${active ? 'text-emerald-500' : 'text-slate-400 opacity-60'}`}>
        {label}
      </span>
    </div>
  );
};

export default function PickupTracking() {
  const context = useAppContext();
  const navigate = useNavigate();
  
  const demoMission = [{
    id: 'RESCUE_883921',
    foodName: 'Bulk Buffet Recovery',
    quantity: '45+',
    type: 'veg',
    donorName: 'Grand Hyatt Plaza',
    ngoName: 'Mission Hope Cluster',
    lat: 22.5726,
    lng: 88.3639
  }];

  const donations = context?.getAcceptedDonations() || [];
  const activePickups = donations.length > 0 ? donations : demoMission;
  const [activeLog, setActiveLog] = useState(0);
  
  const dummyLogs = [
    { time: '10:45 AM', event: 'Mission initialized by NGO', status: 'verified' },
    { time: '10:52 AM', event: 'Volunteer assigned: Rajesh M.', status: 'active' },
    { time: '11:05 AM', event: 'Thermal bag temp: 4.2°C', status: 'secure' },
    { time: '11:15 AM', event: 'Courier arriving at donor venue', status: 'transit' },
    { time: '11:22 AM', event: 'Safety scan: PASSED', status: 'verified' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog(prev => (prev + 1) % dummyLogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm"
            >
               <Radar className="h-3 w-3 animate-pulse" /> Mission Command
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
            >
              Active <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400">
                Rescue.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
            >
              Real-time telemetry of high-integrity food rescue operations. Your contribution is bridging urban hunger gaps.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-6"
          >
             <div className="p-8 rounded-[2.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                   <Activity className="h-8 w-8" />
                </div>
                <div className="text-left">
                   <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{activePickups.length}</div>
                   <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Active Assets</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {activePickups.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-20 md:p-32 rounded-[4rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-3xl border border-white dark:border-white/10 text-center shadow-2xl"
          >
             <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                <Radar className="h-10 w-10 text-slate-300 dark:text-slate-500 animate-pulse" />
             </div>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">All Systems Standby</h3>
             <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-sm mx-auto">No active missions detected. Start a new donation mission to see real-time tracking.</p>
             <button 
               onClick={() => navigate('/donate')}
               className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl text-sm uppercase tracking-widest active:scale-95 flex items-center gap-3 mx-auto"
             >
                Start Mission <ArrowRight className="h-5 w-5" />
             </button>
          </motion.div>
        ) : (
          <div className="space-y-16">
            {activePickups.map((pickup, idx) => (
              <motion.div 
                key={pickup.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none overflow-hidden flex flex-col lg:flex-row"
              >
                {/* Information Panel */}
                <div className="flex-1 p-10 md:p-16 border-r border-slate-100 dark:border-white/5 relative">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${pickup.type === 'veg' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'}`}>
                          {pickup.type} Recovery
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-lg">
                          ID: {pickup.id}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">{pickup.foodName}</h2>
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 px-5 py-3 rounded-2xl border border-slate-100 dark:border-white/5">
                           <Package className="h-5 w-5 text-emerald-500" />
                           <span className="text-2xl font-black text-slate-900 dark:text-white">{pickup.quantity} <span className="text-xs text-slate-400 font-bold uppercase ml-1">Meals</span></span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 px-5 py-3 rounded-2xl border border-slate-100 dark:border-white/5">
                           <Globe className="h-5 w-5 text-blue-500" />
                           <span className="text-sm font-bold text-slate-700 dark:text-slate-300">NGO: {pickup.ngoName || 'Global Relief'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center gap-3 animate-pulse">
                       <div className="w-2 h-2 bg-white rounded-full"></div>
                       <span className="text-xs font-black uppercase tracking-widest">Active Transit</span>
                    </div>
                  </div>

                  {/* Tracking Progress */}
                  <div className="mb-16 relative">
                    <div className="absolute top-[30px] left-10 right-10 h-1 bg-slate-100 dark:bg-white/5 rounded-full z-0 overflow-hidden">
                       <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: '68%' }}
                        transition={{ duration: 2 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                       />
                    </div>
                    <div className="relative z-10 flex justify-between">
                      <ProgressNode label="Verified" icon={ShieldCheck} active completed />
                      <ProgressNode label="In Transit" icon={Truck} active current />
                      <ProgressNode label="Arrival" icon={MapPin} />
                    </div>
                  </div>

                  {/* Telemetry Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-16">
                     {[
                       { label: 'Thermal', value: '4.2°C', icon: Thermometer, color: 'emerald' },
                       { label: 'ETA', value: '12m', icon: Clock, color: 'blue' },
                       { label: 'Air Speed', value: '12km/h', icon: Wind, color: 'slate' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-slate-50/50 dark:bg-black/20 p-5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-inner">
                          <div className="flex items-center gap-2 mb-2">
                             <stat.icon className={`h-3.5 w-3.5 text-${stat.color}-500`} />
                             <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="text-xl font-black text-slate-900 dark:text-white tabular-nums">{stat.value}</div>
                       </div>
                     ))}
                  </div>

                  {/* Personnel & Log */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div className="bg-slate-900 text-white p-6 rounded-[2.5rem] flex items-center gap-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                           <ShieldCheck className="h-16 w-16" />
                        </div>
                        <img src="https://i.pravatar.cc/150?u=rajesh" className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 group-hover:scale-105 transition-transform" alt="Volunteer" />
                        <div className="relative z-10">
                           <p className="text-xl font-black mb-1">Rajesh M.</p>
                           <div className="flex flex-col">
                              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Master Rescuer</span>
                              <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">850+ Missions</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-slate-50 dark:bg-black/40 p-6 rounded-[2.5rem] border border-slate-100 dark:border-white/5 flex flex-col justify-center shadow-inner relative">
                        <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                           <span>Mission Log</span>
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                        <AnimatePresence mode="wait">
                          <motion.div 
                            key={activeLog}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                          >
                              <span className="text-emerald-500 font-bold text-[10px] tracking-widest">{dummyLogs[activeLog].time}</span>
                              <p className="text-slate-900 dark:text-white font-black text-base tracking-tight leading-tight mt-1">{dummyLogs[activeLog].event}</p>
                          </motion.div>
                        </AnimatePresence>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-5 rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 text-sm uppercase tracking-widest active:scale-95">
                        Operational Comms <MessageSquare className="h-5 w-5" />
                     </button>
                     <button className="px-8 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md active:scale-95">
                        <Phone className="h-5 w-5" />
                     </button>
                  </div>
                </div>

                {/* Map Display */}
                <div className="lg:w-[45%] h-[500px] lg:h-auto min-h-[700px] relative bg-slate-100 dark:bg-[#01040a]">
                  <div className="absolute inset-0 z-0 opacity-80 dark:opacity-40">
                    <InteractiveMap 
                      center={{ lat: pickup.lat || 22.5726, lng: pickup.lng || 88.3639 }}
                      markers={[{ lat: pickup.lat || 22.5726, lng: pickup.lng || 88.3639, type: pickup.type }]}
                    />
                  </div>
                  
                  {/* Radar Overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#00000010_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#00000040_100%)]"></div>
                    <motion.div 
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-px bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    />
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-8 right-8 flex flex-col gap-4 z-20">
                    {[Radar, Satellite, ShieldAlert].map((Icon, i) => (
                      <button key={i} className="w-14 h-14 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-lg flex items-center justify-center text-slate-900 dark:text-white border border-white dark:border-white/10 hover:bg-emerald-500 hover:text-white transition-all active:scale-95">
                        <Icon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>

                  {/* Floating Status */}
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                     <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white dark:border-white/10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                           <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Projected Arrival</p>
                           <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">12</span>
                              <span className="text-sm font-black text-emerald-500 uppercase">Mins</span>
                           </div>
                        </div>
                        <div className="text-center md:text-right">
                           <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Distance Remaining</p>
                           <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">2.4 <span className="text-xs text-slate-400 ml-1">KM</span></p>
                        </div>
                        <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-lg active:scale-95">
                           Tactical View <Navigation className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
