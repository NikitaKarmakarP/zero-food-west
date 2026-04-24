import { MapPin, Navigation, Clock, Search, Filter, Utensils, Zap, Target, Layers, Crosshair, ChevronRight, Info, Heart, ShieldCheck, X, Activity, Radar, Cpu, Globe, ArrowUpRight } from 'lucide-react';
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
    <div className="h-[calc(100vh-100px)] flex relative overflow-hidden bg-[#f8fafc] px-4 pb-4 selection:bg-emerald-500/30">
      {/* Immersive Map Container */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 bg-slate-900 overflow-hidden"
      >
        {/* Dark Mode Themed Map */}
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=14&size=1800x1400&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:all|element:labels.text.stroke|visibility:off&style=feature:water|element:geometry|color:0x0e1726&style=feature:landscape.man_made|element:geometry.fill|color:0x1e293b&style=feature:road|element:geometry|color:0x334155&sensor=false')] bg-cover bg-center transition-transform duration-[60s] animate-slow-zoom opacity-80"></div>
        
        {/* Radar Sweep Animation Overlay */}
        <AnimatePresence>
           {radarActive && (
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 0.3, scale: 2 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[100px] border-emerald-500/10 rounded-full pointer-events-none z-10"
             />
           )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>
        
        {/* Animated Map Markers - Tactical Pins */}
        {filteredDonations.map((loc, idx) => (
           <motion.div 
             initial={{ scale: 0, y: 20 }} 
             animate={{ scale: 1, y: 0 }} 
             whileHover={{ scale: 1.1, zIndex: 50 }}
             transition={{ delay: 0.2 + (idx * 0.1), type: 'spring', stiffness: 260, damping: 20 }}
             key={`pin-${loc.id}`}
             className="absolute z-20 flex flex-col items-center cursor-pointer group/pin"
             style={{ 
               top: `${25 + (idx * 15)}%`, 
               left: `${45 + (idx * 18)}%` 
             }}
             onClick={() => setSelectedDonation(loc)}
           >
              {/* Tactical Label */}
              <div className="bg-slate-950/90 text-white text-[10px] font-black px-4 py-2 rounded-2xl mb-3 opacity-0 group-hover/pin:opacity-100 transition-all shadow-3xl translate-y-2 group-hover/pin:translate-y-0 duration-300 border border-white/10 backdrop-blur-xl flex items-center gap-3 whitespace-nowrap">
                <span className="text-emerald-500">{loc.distance}</span>
                <div className="w-px h-3 bg-white/20"></div>
                {loc.foodName.toUpperCase()}
              </div>
              
              <div className="relative">
                 {/* High Urgency Ping */}
                 {loc.status === 'pending' && (
                   <motion.div 
                     animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute -inset-8 rounded-full bg-rose-500/20"
                   />
                 )}
                 <div className={`w-14 h-14 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover/pin:rotate-12 border-2 ${
                   loc.status === 'pending' ? 'bg-rose-500 border-rose-400' : 'bg-emerald-500 border-emerald-400'
                 }`}>
                    <Utensils className="h-7 w-7" />
                 </div>
                 {/* ID Badge */}
                 <div className="absolute -bottom-2 -right-2 bg-slate-950 text-[8px] font-black px-2 py-0.5 rounded-lg border border-white/20 shadow-xl">
                    RES-{loc.id.toString().slice(-4)}
                 </div>
              </div>
           </motion.div>
        ))}
      </motion.div>

      {/* Tactical Sidebar Dashboard */}
      <motion.div 
        initial={{ opacity: 0, x: -60 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[480px] flex flex-col z-30 relative h-full py-6 pr-6"
      >
        <div className="glass-panel flex flex-col h-full rounded-[4.5rem] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden bg-slate-900/80 backdrop-blur-3xl text-white">
          <div className="p-12 border-b border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-emerald-500 rounded-[2rem] text-slate-900 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                     <Target className="h-8 w-8" />
                  </div>
                  <div>
                     <h2 className="text-4xl font-black tracking-tighter">Tactical <span className="text-emerald-500">Radar.</span></h2>
                     <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.4em] mt-1">Live Operation Matrix</p>
                  </div>
               </div>
               <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
               </div>
            </div>
            
            <div className="relative mb-8 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search node clusters..."
                className="w-full pl-16 pr-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:bg-white/10 outline-none font-black text-white placeholder:text-slate-500 transition-all text-sm tracking-tight shadow-inner"
              />
            </div>

            <div className="flex gap-3 p-2 bg-slate-950 rounded-[2.5rem] border border-white/5">
              {['all', 'urgent', 'veg'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                    activeTab === tab ? 'bg-emerald-600 text-white shadow-2xl' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto no-scrollbar p-8 space-y-6">
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Active Missions ({filteredDonations.length})</h3>
               <Filter className="h-4 w-4 text-slate-500 cursor-pointer hover:text-white transition-colors" />
            </div>

            {filteredDonations.length === 0 ? (
              <div className="py-24 text-center space-y-6 opacity-20">
                <Globe className="h-16 w-16 mx-auto text-slate-400" />
                <p className="font-black text-sm uppercase tracking-widest">No active nodes detected</p>
              </div>
            ) : (
              filteredDonations.map((loc, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 * idx }}
                  key={loc.id} 
                  onClick={() => setSelectedDonation(loc)}
                  className={`p-8 rounded-[3.5rem] border transition-all cursor-pointer group relative overflow-hidden ${
                    selectedDonation?.id === loc.id 
                      ? 'bg-emerald-600 border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                      : 'bg-white/5 border-white/5 hover:border-emerald-500/50 hover:bg-white/[0.08]'
                  }`}
                >
                  {/* Visual Background Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                         <div className={`h-2 w-2 rounded-full ${loc.status === 'pending' ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                         <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Protocol: Active Recovery</span>
                      </div>
                      <h3 className={`text-2xl font-black mb-1 transition-colors ${
                        selectedDonation?.id === loc.id ? 'text-white' : 'text-white group-hover:text-emerald-400'
                      }`}>{loc.foodName}</h3>
                    </div>
                    <div className={`p-4 rounded-2xl ${selectedDonation?.id === loc.id ? 'bg-white/20' : 'bg-white/5'} transition-all`}>
                       <Utensils className={`h-6 w-6 ${selectedDonation?.id === loc.id ? 'text-white' : 'text-emerald-500'}`} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
                    {[
                      { icon: MapPin, val: loc.distance, label: 'Radius' },
                      { icon: Clock, val: loc.expiryTime?.substring(11, 16) || 'Soon', label: 'Safety' },
                      { icon: Zap, val: loc.quantity, label: 'Units' }
                    ].map((stat, i) => (
                      <div key={i} className={`p-4 rounded-3xl ${selectedDonation?.id === loc.id ? 'bg-white/10' : 'bg-slate-950/50'} text-center border border-white/5`}>
                        <stat.icon className="h-4 w-4 mx-auto mb-2 opacity-40" />
                        <p className="text-[11px] font-black tabular-nums">{stat.val}</p>
                        <p className="text-[7px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10">
                     <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          acceptDonation(loc.id);
                        }} 
                        className={`flex-1 text-[10px] font-black py-5 rounded-2xl transition-all shadow-2xl uppercase tracking-widest ${
                          selectedDonation?.id === loc.id 
                            ? 'bg-slate-900 text-white hover:bg-black' 
                            : 'bg-emerald-600 text-white hover:bg-emerald-500'
                        }`}
                     >
                      Accept Mission
                     </button>
                     <button className={`p-5 rounded-2xl transition-all border ${
                       selectedDonation?.id === loc.id 
                         ? 'bg-white/10 border-white/10 text-white' 
                         : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                     }`}>
                        <Navigation className="h-5 w-5" />
                     </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <div className="p-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                   <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
                   Telemetry Synchronized
                </div>
                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">v9.4 Node-Cluster</div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Map Tactical Controls */}
      <div className="absolute bottom-12 right-12 flex flex-col gap-4 z-30">
        {[Radar, Cpu, Layers, Info].map((Icon, i) => (
          <button key={i} className="w-16 h-16 rounded-[2rem] bg-slate-900/90 backdrop-blur-2xl shadow-4xl flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-all border border-white/10 hover:scale-110 active:scale-95 group relative">
            <Icon className="h-7 w-7" />
            <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none border border-white/10">
               {Icon.name} Matrix
            </div>
          </button>
        ))}
      </div>

      {/* Selected Node Detailed Tactical Overlay */}
      <AnimatePresence>
        {selectedDonation && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="absolute bottom-12 left-1/2 -translate-x-[calc(50%-240px)] z-40 w-full max-w-2xl"
          >
            <div className="glass-panel p-12 rounded-[5rem] bg-slate-900 text-white border-white/10 shadow-6xl relative overflow-hidden">
               {/* Background Glow */}
               <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 ${selectedDonation.status === 'pending' ? 'bg-rose-500/20' : 'bg-emerald-500/20'}`}></div>

               <button 
                 onClick={() => setSelectedDonation(null)}
                 className="absolute top-10 right-10 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5"
               >
                 <X className="h-6 w-6" />
               </button>

               <div className="flex items-center gap-10 mb-12 relative z-10">
                  <div className={`w-28 h-28 rounded-[3.5rem] flex items-center justify-center text-white shadow-4xl border-4 border-white/10 ${selectedDonation.status === 'pending' ? 'bg-rose-500 shadow-rose-500/30' : 'bg-emerald-500 shadow-emerald-500/30'}`}>
                     <Utensils className="h-12 w-12" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${selectedDonation.status === 'pending' ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'}`}>
                          {selectedDonation.status === 'pending' ? 'Critical Action Required' : 'Operational Node'}
                       </span>
                    </div>
                    <h3 className="text-5xl font-black tracking-tighter mb-2">{selectedDonation.foodName}</h3>
                    <div className="flex items-center gap-4">
                       <span className="flex items-center gap-2 text-base font-bold text-slate-400"><MapPin className="h-5 w-5 text-emerald-500" /> {selectedDonation.distance} From Current Node</span>
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-6 mb-12 relative z-10">
                  <div className="bg-white/5 p-8 rounded-[3rem] border border-white/5 flex items-center gap-6 group hover:bg-white/[0.08] transition-all">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner">
                        <ShieldCheck className="h-7 w-7" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Integrity</p>
                        <p className="text-lg font-black text-white">Safety Verified</p>
                     </div>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[3rem] border border-white/5 flex items-center gap-6 group hover:bg-white/[0.08] transition-all">
                     <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center shadow-inner">
                        <Heart className="h-7 w-7" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Impact Potential</p>
                        <p className="text-lg font-black text-white">{selectedDonation.quantity} Portions</p>
                     </div>
                  </div>
               </div>

               <div className="flex gap-4 relative z-10">
                  <button 
                    onClick={() => acceptDonation(selectedDonation.id)}
                    className="flex-1 bg-emerald-600 text-white font-black py-7 rounded-3xl hover:bg-emerald-500 transition-all shadow-4xl shadow-emerald-500/20 flex items-center justify-center gap-4 group text-xl"
                  >
                    Confirm Interception Mission <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <button className="px-8 bg-white/5 border border-white/5 rounded-3xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                     <Navigation className="h-6 w-6" />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
