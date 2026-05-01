import { CheckCircle, XCircle, Shield, Users, AlertTriangle, FileText, Activity, Zap, Globe, Radar, ShieldAlert, Cpu, Lock, Terminal, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DUMMY_USERS = [
  { id: 1, name: "City Hope NGO", email: "contact@cityhope.org", type: "NGO", status: "pending_verification", docs: "Pending Review" },
  { id: 2, name: "Grace Foundation", email: "hello@grace.org", type: "NGO", status: "verified", docs: "Approved" },
  { id: 3, name: "Arun Kumar", email: "arun@demo.com", type: "Donor", status: "active", docs: "N/A" },
];

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Tactical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98105_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Forensic Intelligence Ticker */}
      <div className="bg-slate-50 dark:bg-emerald-500/5 border-b border-black/5 dark:border-white/5 py-4 overflow-hidden relative z-50">
         <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-16 text-[9px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.4em]">
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><Activity className="h-3 w-3" /> SYSTEM_ADMIN: ACTIVE</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Lock className="h-3 w-3" /> SECURITY_SHIELD: NOMINAL</span>
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Zap className="h-3 w-3" /> UPTIME: 99.99%</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Terminal className="h-3 w-3" /> LOGS: SYNCHRONIZED</span>
              </div>
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black mb-12 text-[9px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-sm">
               <Shield className="h-4 w-4" /> System Control Hub v8.4.2
            </div>
            <h1 className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-[0.8]">
              Control <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Matrix.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl border-l-2 border-emerald-500/30 pl-8 opacity-90 dark:opacity-80">
              High-level administrative monitoring and NGO verification protocols. <span className="text-emerald-600 dark:text-emerald-400 font-black">Forensic audit active.</span>
            </p>
          </div>

          <div className="flex gap-4">
             <div className="p-8 rounded-[3rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-4xl flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-[1.8rem] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-inner group-hover:scale-110 transition-transform">
                   <Activity className="h-8 w-8" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">System Health</p>
                   <p className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter">100<span className="text-emerald-600 dark:text-emerald-500 text-xl">%</span></p>
                </div>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Total Node Assets', value: '1,240', color: 'blue', icon: Users, trend: 'NOMINAL' },
            { label: 'Pending Verification', value: '8', color: 'amber', icon: ShieldAlert, trend: 'ACTION_REQ' },
            { label: 'Safety Incidents', value: '2', color: 'rose', icon: AlertTriangle, trend: 'MONITORING' },
            { label: 'Network Uptime', value: '99.9%', color: 'emerald', icon: Zap, trend: 'OPTIMAL' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="p-10 rounded-[3.5rem] bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl group relative overflow-hidden"
            >
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
               <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-${stat.color}-600 dark:text-${stat.color}-400 border border-black/5 dark:border-white/5 shadow-inner`}>
                     <stat.icon className="h-6 w-6" />
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border bg-white dark:bg-white/5 text-${stat.color}-600 dark:text-${stat.color}-400 border-${stat.color}-500/20 backdrop-blur-md shadow-sm`}>
                     {stat.trend}
                  </span>
               </div>
               <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-2">{stat.label}</p>
               <div className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums leading-none">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.6)] bg-white/80 dark:bg-white/[0.02] backdrop-blur-3xl"
        >
          <div className="p-12 border-b border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-black/5 dark:border-white/10">
                <Terminal className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-950 dark:text-white tracking-tight uppercase">User Registry & Verification</h2>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mt-1">Forensic Entity Tracking Hub</p>
              </div>
            </div>
            
            <div className="relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500 transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search matrix entities..."
                 className="pl-16 pr-8 py-5 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 outline-none font-black text-slate-950 dark:text-white text-sm placeholder:text-slate-300 dark:placeholder:text-slate-700 transition-all min-w-[320px] shadow-inner"
               />
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 border-b border-black/5 dark:border-white/5">
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Entity_Identification</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Node_Type</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Evidence_Locker</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Sync_Status</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] text-right">Protocol_Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5">
                {DUMMY_USERS.map((user, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }}
                    key={user.id} 
                    className="hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all group"
                  >
                    <td className="px-12 py-10">
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform">
                            <img src={`https://i.pravatar.cc/150?u=${user.id}`} className="w-full h-full rounded-2xl object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                         </div>
                         <div>
                            <div className="font-black text-slate-950 dark:text-white text-2xl tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{user.name}</div>
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest opacity-60">{user.email}</div>
                         </div>
                      </div>
                    </td>
                    <td className="px-12 py-10">
                       <span className="text-sm font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5">{user.type}</span>
                    </td>
                    <td className="px-12 py-10">
                      {user.docs !== 'N/A' ? (
                        <button className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest hover:text-slate-950 dark:hover:text-white transition-colors group/docs">
                           <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover/docs:bg-blue-500/20 transition-colors">
                              <FileText className="h-4 w-4"/> 
                           </div>
                           View_Locker_Docs
                        </button>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-700 font-black text-xs uppercase tracking-widest">NONE_REQUIRED</span>
                      )}
                    </td>
                    <td className="px-12 py-10">
                      <span className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border backdrop-blur-3xl shadow-sm dark:shadow-2xl ${user.status === 'pending_verification' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${user.status === 'pending_verification' ? 'bg-amber-600 dark:bg-amber-400' : 'bg-emerald-600 dark:bg-emerald-400'}`}></div>
                        {user.status === 'pending_verification' ? 'PENDING_REVIEW' : 'SYNCHRONIZED'}
                      </span>
                    </td>
                    <td className="px-12 py-10 text-right">
                      {user.status === 'pending_verification' ? (
                        <div className="flex justify-end gap-4">
                          <button className="w-14 h-14 bg-slate-50 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 rounded-2xl transition-all shadow-md border border-black/5 dark:border-white/5 flex items-center justify-center active:scale-90 group/act" title="Authorize">
                            <CheckCircle className="h-6 w-6 group-hover/act:scale-110 transition-transform" />
                          </button>
                          <button className="w-14 h-14 bg-slate-50 dark:bg-white/5 text-rose-500 hover:bg-rose-500 hover:text-white rounded-2xl transition-all shadow-md border border-black/5 dark:border-white/5 flex items-center justify-center active:scale-90 group/act" title="Terminate">
                            <XCircle className="h-6 w-6 group-hover/act:scale-110 transition-transform" />
                          </button>
                        </div>
                      ) : (
                        <button className="w-14 h-14 bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white rounded-2xl transition-all border border-black/5 dark:border-white/5 flex items-center justify-center group/act shadow-sm">
                           <ChevronRight className="h-6 w-6 group-hover/act:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Global Network Health Monitoring */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-4xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tight uppercase">Network Telemetry</h3>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mt-1">Live Global Node Activity</p>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                 </div>
              </div>
              <div className="h-64 flex items-end gap-3 px-4">
                 {[40, 65, 30, 85, 45, 90, 60, 100, 75, 40, 80, 55, 95, 70, 85].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ delay: 0.5 + (i * 0.05), duration: 1 }}
                     className="flex-1 bg-gradient-to-t from-emerald-500/40 via-blue-500/20 to-transparent rounded-t-lg relative group"
                   >
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-950 text-white dark:bg-white dark:text-slate-950 px-3 py-1 rounded-lg text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">
                         {h}%
                      </div>
                   </motion.div>
                 ))}
              </div>
              <div className="mt-12 flex justify-between items-center text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">
                 <span>00:00 ISO_UTC</span>
                 <span>GLOBAL_REALTIME_SYNC_ACTIVE</span>
                 <span>23:59 ISO_UTC</span>
              </div>
           </div>

           <div className="p-12 rounded-[4rem] bg-slate-950 dark:bg-slate-950 border border-white/10 shadow-4xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <ShieldAlert className="h-48 w-48 text-white" />
              </div>
              <div className="relative z-10">
                 <div className="w-16 h-16 rounded-[1.8rem] bg-rose-500/10 text-rose-500 flex items-center justify-center mb-10 shadow-inner">
                    <ShieldAlert className="h-8 w-8" />
                 </div>
                 <h3 className="text-4xl font-black text-white tracking-tighter mb-6 leading-none">Security <br/> Protocols.</h3>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed italic">"System-wide forensic lock engaged. All nodes are currently operating under AES-256 telemetry encryption."</p>
              </div>
              <button className="w-full mt-12 bg-white text-slate-950 font-black py-7 rounded-[2.5rem] hover:bg-emerald-500 hover:text-white transition-all shadow-4xl text-sm uppercase tracking-widest active:scale-95">
                 Audit Security Core
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
