import { CheckCircle, XCircle, Clock, MapPin, Search, Filter, ShieldCheck, TrendingUp, Users, Package, Navigation, ArrowUpRight, Activity, Zap, Globe, Cpu, Radar, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function NGOPanel() {
  const { getActiveDonations, acceptDonation, rejectDonation, getAcceptedDonations } = useAppContext();
  const activeDonations = getActiveDonations();
  const acceptedDonations = getAcceptedDonations();

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 selection:bg-emerald-500/30">
      {/* Cinematic Operation Header */}
      <div className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/60 to-slate-900"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Data Analytics" 
          />
        </div>
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 text-emerald-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">
                   <Radar className="h-4 w-4 animate-spin-slow" /> NGO Operation Command v12.1
                </div>
                <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                  Rescue <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">Tactics.</span>
                </h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed opacity-80">
                  Coordinating rapid-response food rescue missions across 842 urban nodes with forensic precision.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-6">
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="glass-panel p-8 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-3xl shadow-2xl min-w-[200px]"
                 >
                    <div className="flex items-center gap-4 mb-4">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                       <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Network Link</span>
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight tabular-nums">98.4<span className="text-slate-500 text-lg ml-1">%</span></div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Operational Sync</div>
                 </motion.div>
                 
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="glass-panel p-8 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-3xl shadow-2xl min-w-[200px]"
                 >
                    <div className="flex items-center gap-4 mb-4">
                       <Globe className="h-4 w-4 text-blue-400" />
                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Hubs</span>
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight tabular-nums">142<span className="text-slate-500 text-lg ml-1">NODES</span></div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Live Interception</div>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        {/* Tactical Stats Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { title: "Pending Intercept", value: activeDonations.length, icon: Clock, color: "amber", trend: "NEEDS ACTION" },
            { title: "Active Missions", value: acceptedDonations.length, icon: Navigation, color: "emerald", trend: "IN TRANSIT" },
            { title: "Volunteer Nodes", value: "34", icon: Users, color: "blue", trend: "STANDBY" },
            { title: "Total Impact", value: "4.2k", icon: ShieldCheck, color: "slate", isDark: true }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`glass-panel p-10 rounded-[3.5rem] group relative overflow-hidden ${stat.isDark ? 'bg-slate-950 text-white border-white/10 shadow-4xl' : 'bg-white border-slate-50 shadow-3xl'}`}
            >
               {!stat.isDark && <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>}
               <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${stat.isDark ? 'bg-white/10 text-white' : `bg-${stat.color}-50 text-${stat.color}-600`} shadow-inner group-hover:rotate-6 transition-transform`}>
                     <stat.icon className="h-6 w-6" />
                  </div>
                  {stat.trend && (
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${stat.isDark ? 'border-white/20 text-slate-500' : `bg-${stat.color}-50 text-${stat.color}-600 border-${stat.color}-100`}`}>
                       {stat.trend}
                    </span>
                  )}
               </div>
               <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${stat.isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.title}</p>
               <div className="text-5xl font-black tabular-nums tracking-tighter">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Rescue Stream */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Intercept Streams</h2>
                <div className="flex items-center gap-3 mt-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Real-time Node Propagation Active</p>
                </div>
             </div>
             <div className="flex gap-3 p-1.5 bg-slate-100 rounded-[1.5rem] border border-slate-200">
                <button className="px-6 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">All Regions</button>
                <button className="px-6 py-2 text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest transition-all">Priority Only</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {activeDonations.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="col-span-full glass-panel p-24 text-center rounded-[4rem] bg-white border-slate-50 border-dashed border-4"
                >
                  <Package className="h-20 w-20 text-slate-200 mx-auto mb-6" />
                  <p className="text-2xl font-black text-slate-400 uppercase tracking-widest">Awaiting Next Surplus Node</p>
                </motion.div>
              ) : (
                activeDonations.map((req, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                    key={req.id} 
                    className="glass-panel overflow-hidden rounded-[3.5rem] border-white shadow-3xl hover:shadow-4xl transition-all duration-700 group flex flex-col bg-white"
                  >
                    {/* Header: Tactical Map Simulation */}
                    <div className="h-56 relative bg-slate-900 overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=15&size=600x400&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:all|element:labels.text.stroke|visibility:off&style=feature:water|element:geometry|color:0x0e1726&style=feature:landscape.man_made|element:geometry.fill|color:0x1e293b&style=feature:road|element:geometry|color:0x334155&sensor=false')] bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-125 opacity-60"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                      
                      {/* Active Pulse Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                           <div className="absolute -inset-8 bg-emerald-500/20 rounded-full animate-ping"></div>
                           <div className="w-12 h-12 rounded-[1.2rem] bg-emerald-500 flex items-center justify-center text-slate-950 border-4 border-slate-900 shadow-2xl group-hover:rotate-12 transition-transform">
                              <MapPin className="h-6 w-6" />
                           </div>
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-8 flex flex-wrap gap-2 pr-8">
                        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border shadow-xl ${req.type === 'veg' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-md' : 'bg-rose-500/20 text-rose-400 border-rose-500/30 backdrop-blur-md'}`}>
                          {req.type === 'veg' ? 'Node: Organic' : 'Node: Protein'}
                        </span>
                        <div className="flex items-center gap-2 text-white/90 text-[10px] font-black backdrop-blur-xl bg-white/5 px-4 py-1 rounded-full border border-white/10 uppercase tracking-widest shadow-xl">
                          <Clock className="h-3 w-3 text-emerald-400" /> Exp: {req.expiryTime?.substring(11, 16) || 'Soon'}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-10 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                           <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch: #{req.id.toString().slice(-4)}</div>
                           <h3 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-emerald-600 transition-colors duration-300 leading-none">{req.foodName}</h3>
                        </div>
                        <div className="text-right">
                           <p className="text-3xl font-black text-slate-900 tabular-nums leading-none">{req.quantity}</p>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Servings</p>
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 mb-10 flex items-center gap-6">
                         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                            <Navigation className="h-6 w-6" />
                         </div>
                         <div>
                           <p className="text-sm font-black text-slate-900">{req.distance} Distance</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Kolkata Regional Sector</p>
                         </div>
                      </div>

                      <div className="flex gap-4 mt-auto">
                        <button 
                          onClick={() => acceptDonation(req.id)}
                          className="flex-1 bg-slate-900 text-white font-black py-5 rounded-[2rem] hover:bg-emerald-600 transition-all shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 text-sm uppercase tracking-widest group/btn"
                        >
                          Intercept <ArrowUpRight className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                        <button 
                          onClick={() => rejectDonation(req.id)}
                          className="px-6 bg-slate-100 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all rounded-[1.8rem] border border-slate-200"
                        >
                          <XCircle className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Analytical Intelligence Footer */}
        <div className="mt-24 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex gap-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldAlert className="h-6 w-6" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health</div>
                    <div className="text-lg font-black text-slate-900">Optimal</div>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Cpu className="h-6 w-6" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Audit Cache</div>
                    <div className="text-lg font-black text-slate-900">92% Ready</div>
                 </div>
              </div>
           </div>
           
           <button className="bg-slate-900 hover:bg-emerald-600 text-white font-black px-12 py-5 rounded-[2.5rem] transition-all shadow-2xl flex items-center gap-4 group">
              <span className="text-sm uppercase tracking-widest">Comprehensive Audit Logs</span>
              <Activity className="h-5 w-5 group-hover:rotate-90 transition-transform duration-500" />
           </button>
        </div>
      </div>
    </div>
  );
}
