import { MapPin, Navigation, Clock, Search, Filter, Utensils, Zap, Target, Layers, Crosshair, ChevronRight, Info, Heart, ShieldCheck, X, Activity, Radar, Cpu, Globe, ArrowUpRight, Compass, Package } from 'lucide-react';
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
    <div className="h-screen bg-slate-50 dark:bg-[#020617] relative flex overflow-hidden font-sans text-slate-950 dark:text-white transition-colors duration-500">
      
      {/* Sidebar: Premium Glassmorphic Navigation */}
      <aside className="w-[450px] bg-white/70 dark:bg-white/[0.02] backdrop-blur-3xl border-r border-slate-200 dark:border-white/5 relative z-20 flex flex-col shadow-2xl transition-all duration-500 overflow-hidden">
        
        {/* Header */}
        <div className="p-10 pb-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                 <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest shadow-sm">
                    <Radar className="h-4 w-4 animate-spin-slow" /> Active Nodes
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                 </div>
              </div>
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Rescues.</span></h1>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Real-time rescue node detection</p>
           </div>
        </div>

        {/* Tab Filters */}
        <div className="px-10 pb-6">
           <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/5">
              {['all', 'urgent', 'veg'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-md scale-[1.02]' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
           </div>
        </div>

        {/* Donation List */}
        <div className="flex-1 overflow-y-auto px-10 py-6 space-y-6 no-scrollbar">
           {filteredDonations.length === 0 ? (
             <div className="py-24 text-center space-y-6 opacity-40">
               <Globe className="h-16 w-16 mx-auto text-slate-300 dark:text-slate-400" />
               <p className="font-bold text-sm uppercase tracking-widest text-slate-400">No active nodes detected</p>
             </div>
           ) : (
             filteredDonations.map((loc, idx) => (
               <motion.div 
                 key={loc.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.05 }}
                 whileHover={{ y: -4 }}
                 onClick={() => setSelectedDonation(loc)}
                 className={`p-6 rounded-[2rem] border transition-all cursor-pointer relative overflow-hidden group ${selectedDonation?.id === loc.id ? 'bg-white dark:bg-white/[0.08] border-emerald-500/50 shadow-xl' : 'bg-white/40 dark:bg-white/[0.02] border-white dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] shadow-sm hover:shadow-md'}`}
               >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${loc.type === 'veg' ? 'emerald' : 'rose'}-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex justify-between items-center relative z-10">
                     <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${selectedDonation?.id === loc.id ? 'bg-emerald-500 text-white border-transparent shadow-lg scale-110' : 'bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-white/10 group-hover:text-emerald-500'}`}>
                           <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                           <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{loc.foodName}</h3>
                           <div className="flex items-center gap-3 mt-1">
                              <span className={`text-[10px] font-black uppercase tracking-widest ${loc.type === 'veg' ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>{loc.quantity} Units</span>
                              <div className="h-1 w-1 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
                              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{loc.distance}</span>
                           </div>
                        </div>
                     </div>
                     <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors">
                        <ChevronRight className="h-5 w-5" />
                     </div>
                  </div>
               </motion.div>
             ))
           )}
        </div>

        {/* Footer Statistics */}
        <div className="p-10 pt-6 border-t border-slate-200 dark:border-white/5">
           <div className="p-8 rounded-3xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 shadow-inner">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                    <Activity className="h-5 w-5" />
                 </div>
                 <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Network Saturation</div>
              </div>
              <div className="h-2.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 shadow-inner">
                 <motion.div initial={{ width: 0 }} animate={{ width: '74%' }} className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
              </div>
              <div className="flex justify-between mt-4">
                 <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">Minimal</span>
                 <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">74% Nominal</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Map Visualization */}
      <main className="flex-1 relative bg-slate-100 dark:bg-slate-900 group transition-colors duration-500">
        
        {/* Interactive Google Map Component */}
        <div className="absolute inset-0 z-0">
          <InteractiveMap 
            center={selectedDonation ? { lat: selectedDonation.lat, lng: selectedDonation.lng } : { lat: 22.5726, lng: 88.3639 }}
            markers={filteredDonations}
            onMarkerClick={(marker) => setSelectedDonation(marker)}
          />
        </div>
        
        {/* Cinematic Radar Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_30px_rgba(16,185,129,0.8)] z-10 animate-scan"></div>
        
        {/* Map UI Controls */}
        <div className="absolute top-10 right-10 z-20 flex flex-col gap-4">
           <button className="w-14 h-14 bg-white/90 dark:bg-white backdrop-blur-md text-slate-900 rounded-2xl flex items-center justify-center shadow-xl hover:bg-emerald-500 hover:text-white transition-all active:scale-90 border border-white/50">
              <Navigation className="h-6 w-6" />
           </button>
           <button className="w-14 h-14 bg-slate-900/80 dark:bg-slate-900/60 backdrop-blur-md text-white border border-white/10 rounded-2xl flex items-center justify-center shadow-xl hover:bg-white hover:text-slate-900 transition-all active:scale-90">
              <Compass className="h-6 w-6" />
           </button>
        </div>

        {/* Selected Donation Detail Panel */}
        <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
           <AnimatePresence>
              {selectedDonation && (
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="max-w-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-3xl border border-white dark:border-white/10 rounded-[3rem] p-10 shadow-2xl pointer-events-auto mx-auto relative overflow-hidden group/detail transition-all"
                >
                   <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-500/10 rounded-tl-[3rem] blur-xl"></div>
                   <button 
                     onClick={() => setSelectedDonation(null)}
                     className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 dark:text-slate-500 transition-all z-20"
                   >
                     <X className="h-6 w-6" />
                   </button>

                   <div className="flex items-center gap-8 mb-8">
                      <div className={`w-24 h-24 rounded-3xl flex items-center justify-center border border-white dark:border-white/10 shadow-lg group-hover/detail:scale-105 transition-transform duration-500 ${selectedDonation.type === 'veg' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
                         <Package className="h-12 w-12" />
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Selected Rescue Node</div>
                         <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{selectedDonation.foodName}</h2>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="p-6 rounded-[2rem] bg-white/50 dark:bg-black/20 border border-white dark:border-white/5 shadow-sm">
                         <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 text-center">Payload Size</div>
                         <div className="text-2xl font-black text-slate-900 dark:text-white text-center">{selectedDonation.quantity} Units</div>
                      </div>
                      <div className="p-6 rounded-[2rem] bg-white/50 dark:bg-black/20 border border-white dark:border-white/5 shadow-sm">
                         <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 text-center">Status</div>
                         <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 text-center">NOMINAL</div>
                      </div>
                   </div>

                   <button 
                     onClick={() => acceptDonation(selectedDonation.id)}
                     className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-6 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-4 active:scale-95 group uppercase tracking-widest text-sm"
                   >
                      Confirm Intercept Intercept <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </main>
    </div>
  );
}
