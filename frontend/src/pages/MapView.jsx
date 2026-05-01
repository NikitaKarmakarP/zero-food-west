import { MapPin, Navigation, Clock, Search, Filter, Utensils, Zap, Target, Layers, Crosshair, ChevronRight, Info, Heart, ShieldCheck, X, Activity, Radar, Cpu, Globe, ArrowUpRight, Compass, Package } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

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
    <div className="h-screen bg-white dark:bg-[#020617] relative flex overflow-hidden font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Dynamic Tactical Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Sidebar: Tactical Radar */}
      <aside className="w-[450px] bg-white dark:bg-[#020617] border-r border-black/5 dark:border-white/5 relative z-20 flex flex-col shadow-3xl dark:shadow-6xl overflow-hidden backdrop-blur-3xl transition-all duration-500">
        <div className="p-12 border-b border-black/5 dark:border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 dark:opacity-100"></div>
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                 <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[9px] uppercase tracking-[0.4em] shadow-sm">
                    <Radar className="h-3 w-3 animate-spin-slow" /> Sector_Alpha_9
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                 </div>
              </div>
              <h1 className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-4">Tactical <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Situational.</span></h1>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">Live Network Node Propagation</p>
           </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-white/[0.02] border-b border-black/5 dark:border-white/5 flex gap-2">
           {['all', 'urgent', 'veg'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`flex-1 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === tab ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-2xl scale-105' : 'text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white'}`}
             >
               {tab}
             </button>
           ))}
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar transition-all">
           {filteredDonations.length === 0 ? (
             <div className="py-24 text-center space-y-6 opacity-40">
               <Globe className="h-16 w-16 mx-auto text-slate-300 dark:text-slate-400" />
               <p className="font-black text-sm uppercase tracking-widest text-slate-400">No active nodes detected</p>
             </div>
           ) : (
             filteredDonations.map((loc, idx) => (
               <motion.div 
                 key={loc.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 whileHover={{ scale: 1.02, x: 5 }}
                 onClick={() => setSelectedDonation(loc)}
                 className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer relative overflow-hidden group ${selectedDonation?.id === loc.id ? 'bg-white dark:bg-white/10 border-emerald-500/30 shadow-3xl dark:shadow-4xl' : 'bg-slate-50 dark:bg-white/[0.02] border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05]'}`}
               >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${loc.type === 'veg' ? 'emerald' : 'rose'}-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                     <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${selectedDonation?.id === loc.id ? 'bg-emerald-500 text-white dark:text-slate-950 border-emerald-500 shadow-xl' : 'bg-white dark:bg-white/5 text-slate-400 dark:text-slate-500 border-black/5 dark:border-white/10 group-hover:text-slate-950 dark:group-hover:text-white shadow-sm'}`}>
                           <MapPin className="h-7 w-7" />
                        </div>
                        <div>
                           <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{loc.foodName}</h3>
                           <div className="flex items-center gap-3 mt-1">
                              <span className={`text-[9px] font-black uppercase tracking-widest ${loc.type === 'veg' ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>{loc.quantity} Units</span>
                              <div className="h-1 w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">{loc.distance}</span>
                           </div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="p-3 rounded-xl bg-white dark:bg-white/5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors shadow-sm">
                           <ChevronRight className="h-5 w-5" />
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))
           )}
        </div>

        <div className="p-10 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#020617] transition-colors">
           <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-950 border border-black/5 dark:border-white/10 shadow-inner">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Activity className="h-5 w-5" />
                 </div>
                 <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Node Saturation</div>
              </div>
              <div className="h-3 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden p-0.5 shadow-inner">
                 <motion.div initial={{ width: 0 }} animate={{ width: '74%' }} className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-500 dark:to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              </div>
              <div className="flex justify-between mt-4">
                 <span className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">Minimal</span>
                 <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">74% Nominal</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Map Visualization */}
      <main className="flex-1 relative bg-slate-100 dark:bg-slate-900 group transition-colors duration-500">
        {/* Mock Map Background */}
        <div className="absolute inset-0 grayscale contrast-75 dark:contrast-125 opacity-20 dark:opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=14&size=1200x800&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x334155&style=feature:landscape|element:geometry|color:0x0f172a&style=feature:water|element:geometry|color:0x1e293b&sensor=false')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
        
        {/* Radar Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.5)] z-10 animate-scan"></div>
        
        {/* Map UI Elements */}
        <div className="absolute top-12 right-12 z-20 flex flex-col gap-4">
           <button className="w-16 h-16 bg-white dark:bg-white text-slate-950 rounded-2xl flex items-center justify-center shadow-3xl dark:shadow-6xl hover:bg-emerald-500 hover:text-white transition-all active:scale-90 border border-black/5">
              <Navigation className="h-7 w-7" />
           </button>
           <button className="w-16 h-16 bg-slate-950/90 dark:bg-slate-950/80 backdrop-blur-xl text-white border border-white/10 rounded-2xl flex items-center justify-center shadow-3xl dark:shadow-6xl hover:bg-white hover:text-slate-950 transition-all active:scale-90">
              <Compass className="h-7 w-7" />
           </button>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-20 pointer-events-none">
           <AnimatePresence>
              {selectedDonation && (
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.95 }}
                  className="max-w-xl bg-white/90 dark:bg-slate-950/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[3.5rem] p-10 shadow-4xl dark:shadow-6xl pointer-events-auto mx-auto relative overflow-hidden group/detail transition-all"
                >
                   <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-[3.5rem]"></div>
                   <button 
                     onClick={() => setSelectedDonation(null)}
                     className="absolute top-8 right-8 text-slate-400 dark:text-slate-600 hover:text-slate-950 dark:hover:text-white transition-colors"
                   >
                     <X className="h-6 w-6" />
                   </button>

                   <div className="flex items-center gap-8 mb-8">
                      <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center border border-black/5 dark:border-white/10 shadow-inner group-hover/detail:scale-110 transition-transform ${selectedDonation.type === 'veg' ? 'bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/10 dark:border-emerald-500/20 shadow-sm' : 'bg-rose-500/5 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/10 dark:border-rose-500/20 shadow-sm'}`}>
                         <Package className="h-10 w-10" />
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] mb-2">Selected Node Trace</div>
                         <h2 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter leading-none">{selectedDonation.foodName}</h2>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-inner">
                         <div className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-2">Current Load</div>
                         <div className="text-2xl font-black text-slate-950 dark:text-white">{selectedDonation.quantity} Units</div>
                      </div>
                      <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-inner">
                         <div className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-2">Node Stability</div>
                         <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">NOMINAL</div>
                      </div>
                   </div>

                   <button 
                     onClick={() => acceptDonation(selectedDonation.id)}
                     className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-6 rounded-[2.5rem] hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all shadow-4xl text-sm uppercase tracking-widest flex items-center justify-center gap-4 active:scale-95 group"
                   >
                      Initiate Direct Intercept <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        {/* Map Markers Overlay */}
        <div className="absolute inset-0 pointer-events-none">
           {filteredDonations.map((node, idx) => (
             <motion.div 
               key={node.id}
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="absolute cursor-pointer pointer-events-auto"
               style={{ top: `${(idx * 15) + 20}%`, left: `${(idx * 20) + 25}%` }}
               onClick={() => setSelectedDonation(node)}
             >
                <div className="relative group">
                   <div className={`absolute -inset-8 rounded-full animate-ping opacity-20 ${node.type === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white dark:text-slate-950 shadow-6xl border-[4px] border-white dark:border-slate-950 group-hover:scale-125 transition-transform ${node.type === 'veg' ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-rose-600 dark:bg-rose-500'}`}>
                      <MapPin className="h-7 w-7" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </main>
    </div>
  );
}
