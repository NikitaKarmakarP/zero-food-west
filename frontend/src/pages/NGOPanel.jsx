import { CheckCircle, XCircle, Clock, MapPin, Search, Filter, ShieldCheck, TrendingUp, Users, Package, Navigation, ArrowUpRight, Activity, Zap, Globe, Cpu, Radar, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import InteractiveMap from '../components/InteractiveMap';

export default function NGOPanel() {
  const { getActiveDonations, acceptDonation, rejectDonation, getAcceptedDonations } = useAppContext();
  const activeDonations = getActiveDonations();
  const acceptedDonations = getAcceptedDonations();

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Cinematic Operation Header */}
      <div className="relative pt-24 pb-48 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black mb-12 text-[9px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-sm">
                   <Radar className="h-4 w-4 animate-spin-slow" /> NGO Operation Command v12.1.4
                </div>
                <h1 className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-12 tracking-tighter leading-[0.8]">
                  Rescue <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Tactics.</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl border-l-2 border-emerald-500/30 pl-8 opacity-90 dark:opacity-80">
                  Coordinating rapid-response food rescue missions across urban nodes with forensic precision. <span className="text-emerald-600 dark:text-emerald-400 font-black">Tactical intercept active.</span>
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-8">
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl min-w-[280px]"
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                       <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em]">Network Link</span>
                    </div>
                    <div className="text-6xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums">98.4<span className="text-slate-300 dark:text-slate-500 text-2xl ml-1">%</span></div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-2 tracking-widest">Operational Sync</div>
                 </motion.div>
                 
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl min-w-[280px]"
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                       <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em]">Active Hubs</span>
                    </div>
                    <div className="text-6xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums">142<span className="text-slate-300 dark:text-slate-500 text-2xl ml-1">Nodes</span></div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-2 tracking-widest">Live Interception</div>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        {/* Tactical Stats Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
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
              className={`p-10 rounded-[3.5rem] group relative overflow-hidden backdrop-blur-3xl border transition-all duration-500 ${stat.isDark ? 'bg-slate-950 text-white border-white/20 shadow-4xl' : 'bg-white/70 dark:bg-white/[0.03] border-black/5 dark:border-white/5 shadow-3xl'}`}
            >
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
               <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-${stat.color}-600 dark:text-${stat.color}-400 shadow-inner group-hover:rotate-6 transition-transform border border-black/5 dark:border-white/5`}>
                     <stat.icon className="h-6 w-6" />
                  </div>
                  {stat.trend && (
                    <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border bg-white dark:bg-white/5 text-${stat.color}-600 dark:text-${stat.color}-400 border-${stat.color}-500/20 backdrop-blur-md shadow-sm`}>
                       {stat.trend}
                    </span>
                  )}
               </div>
               <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-2 ${stat.isDark ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>{stat.title}</p>
               <div className={`text-6xl font-black tabular-nums tracking-tighter leading-none ${stat.isDark ? 'text-white' : 'text-slate-950 dark:text-white'}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Rescue Stream */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div>
                <h2 className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter uppercase">Intercept Streams</h2>
                <div className="flex items-center gap-4 mt-4">
                   <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Real-time Node Propagation Active</p>
                </div>
             </div>
             <div className="flex gap-4 p-2 bg-slate-50 dark:bg-white/[0.02] rounded-[2.5rem] border border-black/5 dark:border-white/5 backdrop-blur-xl shadow-inner">
                <button className="px-8 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl">All Regions</button>
                <button className="px-8 py-3 text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white text-[10px] font-black uppercase tracking-widest transition-all">Priority Only</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode='popLayout'>
              {activeDonations.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="col-span-full p-32 text-center rounded-[5rem] bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 border-dashed border-4 flex flex-col items-center gap-8 shadow-inner"
                >
                  <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10">
                    <Package className="h-10 w-10 text-slate-200 dark:text-slate-700" />
                  </div>
                  <p className="text-3xl font-black text-slate-200 dark:text-slate-700 uppercase tracking-[0.2em] italic">Awaiting Next Surplus Node</p>
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
                    className="overflow-hidden rounded-[4rem] border border-black/5 dark:border-white/10 shadow-3xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] group flex flex-col bg-white dark:bg-white/[0.04] backdrop-blur-3xl hover:bg-slate-50 dark:hover:bg-white/[0.08] transition-all duration-700"
                  >
                    {/* Header: Tactical Map Simulation */}
                    <div className="h-72 relative bg-slate-100 dark:bg-slate-950 overflow-hidden group/map">
                      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none transition-transform duration-[4000ms] group-hover/map:scale-110">
                         <InteractiveMap 
                            center={{ lat: req.lat || 22.5726, lng: req.lng || 88.3639 }}
                            zoom={15}
                         />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#020617] via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Active Pulse Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                           <div className="absolute -inset-10 bg-emerald-500/20 rounded-full animate-ping"></div>
                           <div className="w-16 h-16 rounded-[1.8rem] bg-slate-950 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 border-[6px] border-white dark:border-slate-950 shadow-6xl group-hover:rotate-12 transition-transform">
                              <MapPin className="h-8 w-8" />
                           </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-10 flex flex-wrap gap-4 pr-10">
                        <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border shadow-2xl backdrop-blur-3xl ${req.type === 'veg' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'}`}>
                          {req.type === 'veg' ? 'Node: Organic' : 'Node: Protein'}
                        </span>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-white/90 text-[10px] font-black backdrop-blur-3xl bg-white/50 dark:bg-white/5 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 uppercase tracking-[0.3em] shadow-2xl">
                          <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Exp: {req.expiryTime?.substring(11, 16) || 'Soon'}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-12 flex-1 flex flex-col relative">
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-[4rem]"></div>
                      
                      <div className="flex justify-between items-start mb-10 relative z-10">
                        <div>
                           <div className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.5em] mb-2">Batch: #{req.id.toString().slice(-4)}</div>
                           <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-500 leading-none">{req.foodName}</h3>
                        </div>
                        <div className="text-right">
                           <p className="text-5xl font-black text-slate-950 dark:text-white tabular-nums tracking-tighter leading-none">{req.quantity}</p>
                           <p className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.4em] mt-2">Units</p>
                        </div>
                      </div>

                      <div className="p-8 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-12 flex items-center gap-8 shadow-inner group/nav hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                         <div className="w-16 h-16 rounded-[1.8rem] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner group-hover/nav:scale-110 transition-transform">
                            <Navigation className="h-8 w-8" />
                         </div>
                         <div>
                           <p className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">{req.distance} Distance</p>
                           <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-1">Kolkata Regional Sector</p>
                         </div>
                      </div>

                      <div className="flex gap-6 mt-auto">
                        <button 
                          onClick={() => acceptDonation(req.id)}
                          className="flex-1 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-7 rounded-[2.5rem] hover:bg-emerald-500 hover:text-white transition-all shadow-4xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 text-sm uppercase tracking-[0.4em] group/btn"
                        >
                          Intercept <ArrowUpRight className="h-6 w-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                        <button 
                          onClick={() => rejectDonation(req.id)}
                          className="px-8 bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-600 hover:text-rose-600 dark:hover:text-rose-500 hover:bg-rose-500/5 transition-all rounded-[2.2rem] border border-black/5 dark:border-white/5 active:scale-95 shadow-sm"
                        >
                          <XCircle className="h-7 w-7" />
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
        <div className="mt-48 pt-20 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex gap-16">
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
                    <ShieldAlert className="h-7 w-7" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">System Health</div>
                    <div className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">Optimal</div>
                 </div>
              </div>
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner">
                    <Cpu className="h-7 w-7" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">AI Audit Cache</div>
                    <div className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">92% Ready</div>
                 </div>
              </div>
           </div>
           
           <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-emerald-500 hover:text-white font-black px-16 py-7 rounded-[3rem] transition-all shadow-4xl flex items-center gap-6 group text-sm uppercase tracking-[0.4em]">
              Comprehensive Audit Logs
              <Activity className="h-6 w-6 group-hover:rotate-90 transition-transform duration-700" />
           </button>
        </div>
      </div>
    </div>
  );
}
