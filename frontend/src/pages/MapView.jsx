import { MapPin, Navigation, Clock, Search, Filter, Utensils, Zap, Target, Layers, Crosshair, ChevronRight, Info, Heart, ShieldCheck, X, Activity, Radar, Cpu, Globe, ArrowUpRight, Compass, Package, Terminal, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import InteractiveMap from '../components/InteractiveMap';

export default function MapView() {
  const { getActiveDonations, acceptDonation } = useAppContext();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [radarActive, setRadarActive] = useState(false);
  const activeDonations = getActiveDonations();

  useEffect(() => {
    // Simulated Radar Sweep
    const interval = setInterval(() => {
      setRadarActive(true);
      setTimeout(() => setRadarActive(false), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredDonations = activeDonations.filter(d => {
    if (activeTab === 'all') return true;
    if (activeTab === 'urgent') return d.status === 'pending';
    if (activeTab === 'veg') return d.type === 'veg';
    return true;
  });

  return (
    <>
    <div className="h-screen bg-slate-50 dark:bg-[#020617] relative flex overflow-hidden font-sans text-slate-950 dark:text-white transition-colors duration-500">
      
      {/* Immersive HUD Overlay for Map (Corner Brackets) */}
      <div className="absolute inset-0 pointer-events-none z-30">
         {/* Holographic Corner Accents */}
         <div className="absolute top-10 left-[480px] w-12 h-12 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-xl"></div>
         <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-xl"></div>
         <div className="absolute bottom-10 left-[480px] w-12 h-12 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-xl"></div>
         <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-emerald-500/40 rounded-br-xl"></div>

         {/* Floating Coordinate Readout */}
         <div className="absolute top-32 right-12 flex flex-col items-end gap-2">
            <div className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
               <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">Lat: 22.5726° N</span>
            </div>
            <div className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
               <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">Lon: 88.3639° E</span>
            </div>
         </div>
      </div>

      {/* Sidebar: Premium Glassmorphic Tactical Console */}
      <aside className="w-[450px] bg-white/70 dark:bg-[#020617]/90 backdrop-blur-3xl border-r border-slate-200 dark:border-white/5 relative z-40 flex flex-col shadow-2xl transition-all duration-500 overflow-hidden">
        
        {/* Animated Scanlines Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-0"></div>

        {/* Header */}
        <div className="p-10 pb-8 relative overflow-hidden">
           {/* Radar Background Glow */}
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 right-0 w-64 h-64 border border-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 flex items-center justify-center"
           >
              <div className="w-48 h-48 border border-emerald-500/5 rounded-full"></div>
              <div className="w-32 h-32 border border-emerald-500/5 rounded-full"></div>
           </motion.div>

           <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[9px] uppercase tracking-[0.3em] shadow-sm backdrop-blur-md"
                 >
                    <Radar className="h-3 w-3 animate-spin-slow" /> Network_Core_Active
                 </motion.div>
                 <div className="flex gap-2 p-2 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                 </div>
              </div>
              <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-3 leading-none italic uppercase">Mission <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600">Radar.</span></h1>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] flex items-center gap-3">
                 <Terminal className="h-3 w-3" /> Live_Tactical_Feed
              </p>
           </div>
        </div>

        {/* Tactical Tab Filters */}
        <div className="px-10 pb-8">
           <div className="flex gap-3 p-2 bg-slate-100/50 dark:bg-black/40 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-inner">
              {['all', 'urgent', 'veg'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 rounded-3xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden group ${activeTab === tab ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-xl scale-[1.02]' : 'text-slate-500 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <motion.div layoutId="tab-active" className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10" />
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* Immersive Donation List */}
        <div className="flex-1 overflow-y-auto px-10 py-6 space-y-6 no-scrollbar relative">
           {filteredDonations.length === 0 ? (
             <div className="py-32 text-center space-y-8 opacity-40">
               <div className="relative inline-block">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <Globe className="h-20 w-20 mx-auto text-slate-300 dark:text-slate-500 relative z-10" />
               </div>
               <p className="font-black text-xs uppercase tracking-[0.4em] text-slate-400">Zero_Nodes_Synchronized</p>
             </div>
           ) : (
             filteredDonations.map((loc, idx) => (
               <motion.div 
                 key={loc.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.05, duration: 0.8 }}
                 whileHover={{ x: 10, scale: 1.02 }}
                 onClick={() => setSelectedDonation(loc)}
                 className={`group p-8 rounded-[3rem] border transition-all duration-700 cursor-pointer relative overflow-hidden ${selectedDonation?.id === loc.id ? 'bg-white dark:bg-white/[0.08] border-emerald-500/50 shadow-2xl' : 'bg-white/30 dark:bg-white/[0.02] border-white dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/[0.05] shadow-sm hover:shadow-xl'}`}
               >
                  {/* Forensic ID Overlay */}
                  <div className="absolute top-4 right-8 text-[7px] font-black text-slate-300 dark:text-slate-700 font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     NODE_REF: {loc.id.substring(0, 8).toUpperCase()}
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                     <div className="flex items-center gap-8">
                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center border transition-all duration-700 ${selectedDonation?.id === loc.id ? 'bg-emerald-500 text-white border-transparent shadow-[0_0_30px_rgba(16,185,129,0.4)] rotate-12 scale-110' : 'bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-white/10 group-hover:rotate-6'}`}>
                           <MapPin className="h-7 w-7" />
                        </div>
                        <div>
                           <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase italic">{loc.foodName}</h3>
                           <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                 <div className={`w-1.5 h-1.5 rounded-full ${loc.type === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'} animate-pulse`}></div>
                                 <span className={`text-[10px] font-black uppercase tracking-widest ${loc.type === 'veg' ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>{loc.quantity} Units</span>
                              </div>
                              <div className="h-1 w-1 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
                              <span className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest font-mono">{loc.distance}</span>
                           </div>
                        </div>
                     </div>
                     <div className={`p-3 rounded-2xl transition-all duration-500 ${selectedDonation?.id === loc.id ? 'bg-emerald-500/10 text-emerald-500 rotate-90 scale-125' : 'bg-slate-50 dark:bg-white/5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500'}`}>
                        <ChevronRight className="h-6 w-6" />
                     </div>
                  </div>
                  
                  {/* Subtle Scan Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.03] to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
               </motion.div>
             ))
           )}
        </div>

        {/* Global Logistics Status */}
        <div className="p-10 pt-6 border-t border-slate-200 dark:border-white/5 relative z-10">
           <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                 <Activity className="h-20 w-20" />
              </div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-lg border border-blue-500/10">
                       <Cpu className="h-6 w-6" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Network_Saturation</div>
                       <div className="text-xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">74.8% NOMINAL</div>
                    </div>
                 </div>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 shadow-inner">
                 <motion.div initial={{ width: 0 }} animate={{ width: '74%' }} className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] relative">
                    <div className="absolute top-0 left-0 right-0 h-full bg-white/20 animate-pulse"></div>
                 </motion.div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Map Visualization Surface */}
      <main className="flex-1 relative bg-slate-100 dark:bg-slate-950 group transition-colors duration-500">
        
        {/* Interactive Tactical Map */}
        <div className="absolute inset-0 z-0">
          <InteractiveMap 
            center={selectedDonation ? { lat: selectedDonation.lat, lng: selectedDonation.lng } : { lat: 22.5726, lng: 88.3639 }}
            markers={filteredDonations}
            onMarkerClick={(marker) => setSelectedDonation(marker)}
          />
        </div>
        
        {/* Forensic Scanline Animation */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_40px_rgba(16,185,129,1)] z-40 animate-scan pointer-events-none"></div>
        
        {/* Tactical UI Orbitals */}
        <div className="absolute top-12 right-12 z-50 flex flex-col gap-6">
           <motion.button 
             whileHover={{ scale: 1.1, rotate: 10 }}
             whileTap={{ scale: 0.9 }}
             onClick={() => setSelectedDonation(activeDonations[0])}
             className="w-16 h-16 bg-white dark:bg-white text-slate-950 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all border border-white/50"
           >
              <Navigation className="h-7 w-7" />
           </motion.button>
           <motion.button 
             whileHover={{ scale: 1.1, rotate: -10 }}
             whileTap={{ scale: 0.9 }}
             onClick={() => setSelectedDonation(null)}
             className="w-16 h-16 bg-slate-950 dark:bg-slate-900 text-white border border-white/10 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all"
           >
              <Compass className="h-7 w-7" />
           </motion.button>
        </div>

        {/* Advanced Target Acquisition Panel */}
        <div className="absolute bottom-12 left-12 right-12 z-50 pointer-events-none">
           <AnimatePresence mode="wait">
              {selectedDonation && (
                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 100, scale: 0.9, rotateX: 20 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                  className="max-w-4xl w-full bg-white/90 dark:bg-[#020617]/80 backdrop-blur-3xl border border-white dark:border-emerald-500/20 rounded-[4rem] p-12 shadow-[0_60px_120px_rgba(0,0,0,0.5)] pointer-events-auto mx-auto relative overflow-hidden group/detail"
                >
                   {/* Tactical HUD Overlays */}
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover/detail:opacity-[0.07] transition-opacity duration-1000">
                      <Target className="h-64 w-64" />
                   </div>
                   
                   <button 
                     onClick={() => setSelectedDonation(null)}
                     className="absolute top-10 right-10 p-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-rose-500 hover:text-white text-slate-400 transition-all z-20 group"
                   >
                     <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
                   </button>

                   <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                      <div className="relative group/hex">
                         <div className={`absolute -inset-8 bg-${selectedDonation.type === 'veg' ? 'emerald' : 'rose'}-500/20 blur-[60px] rounded-full animate-pulse`}></div>
                         <div className={`w-48 h-48 rounded-[3rem] flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 transition-transform duration-700 group-hover/hex:rotate-12 ${selectedDonation.type === 'veg' ? 'bg-gradient-to-br from-emerald-400 to-teal-600 text-white' : 'bg-gradient-to-br from-rose-400 to-rose-600 text-white'}`}>
                            <Package className="h-20 w-20 drop-shadow-2xl" />
                         </div>
                      </div>

                      <div className="flex-1 text-center lg:text-left">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-6 italic">
                            <Sparkles className="h-3 w-3 text-emerald-500" /> Target_Acquired_v4.0
                         </div>
                         <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-8 uppercase italic">{selectedDonation.foodName}</h2>
                         
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                               { label: 'Payload', val: `${selectedDonation.quantity} Units`, icon: Package, color: 'blue' },
                               { label: 'Distance', val: selectedDonation.distance, icon: MapPin, color: 'emerald' },
                               { label: 'Integrity', val: '98.4%', icon: ShieldCheck, color: 'amber' },
                               { label: 'Exp_Time', val: '124m', icon: Clock, color: 'rose' }
                            ].map((stat, i) => (
                               <div key={i} className="p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover/detail:bg-white dark:group-hover/detail:bg-white/5 transition-all">
                                  <div className="flex items-center gap-2 mb-2">
                                     <stat.icon className={`h-3 w-3 text-${stat.color}-500`} />
                                     <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                  </div>
                                  <div className="text-xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.val}</div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
                      <button 
                        onClick={() => acceptDonation(selectedDonation.id)}
                        className="flex-1 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-7 rounded-[2rem] transition-all shadow-6xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-950 flex items-center justify-center gap-6 active:scale-95 group uppercase tracking-[0.4em] text-xs italic"
                      >
                         <span className="relative z-10">INITIALIZE_INTERCEPT</span>
                         <ArrowUpRight className="h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </button>
                      <button className="px-10 py-7 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-500 font-black text-[10px] uppercase tracking-[0.4em] hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center gap-4 italic">
                         <Info className="h-5 w-5" /> NODE_INTEL
                      </button>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </main>
    </div>
    </>
  );
}
