import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, MapPin, CheckCircle2, TrendingUp, Sparkles, Clock, Truck, History, Heart, ShieldCheck, ChevronRight, Zap, X, Terminal, Activity, ArrowUpRight, Tag, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function EventDonations() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState('Strategic Pre-booking');
  const [showWorkflow, setShowWorkflow] = useState(false);
  const { addDonation } = useAppContext();

  const workflowSteps = [
    { title: 'Digital Hash Generation', desc: 'Every batch is assigned a unique SHA-256 hash for forensic traceability.', icon: ShieldCheck },
    { title: 'IoT Cold-Chain Sync', desc: 'Vans transmit real-time telemetry to our central safety dashboard.', icon: Zap },
    { title: 'Smart-Contract Handover', desc: 'QR codes verify quality status before legal liability shifts to the recipient.', icon: CheckCircle2 }
  ];

  const stepDetails = {
    'Strategic Pre-booking': {
      content: 'Our AI logistics engine analyzes historical traffic patterns and venue proximity to allocate the most efficient rescue route. By pre-booking, you ensure that a dedicated cold-chain van is on standby exactly when your buffet service ends.',
      features: ['Predictive route optimization', 'Standby van allocation', 'Auto-NGO matching'],
      icon: Calendar,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500/10'
    },
    'Rapid Cold-Chain Pickup': {
      content: 'Time is the enemy of food safety. Our teams arrive with industrial-grade thermal bags and dry-ice cooling systems to ensure that the internal temperature of the food never leaves the safe zone (above 60°C or below 5°C).',
      features: ['Digital temp-logging', 'Thermal-shield packaging', 'Sanitized handling gear'],
      icon: Truck,
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-500/10'
    },
    'Hyper-Local Distribution': {
      content: 'Bulk rescues are too large for a single NGO. Our system splits the haul among 5-10 nearby verified shelters, distributing the impact across the community and ensuring every meal is consumed within the 4-hour safety window.',
      features: ['Multi-point drop-offs', 'Instant safety notifications', 'Digital receipt generation'],
      icon: Users,
      color: 'text-fuchsia-600 dark:text-fuchsia-400',
      bg: 'bg-fuchsia-500/10'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDonation({ foodName: 'Large Event Buffet Recovery', quantity: 200, type: 'mixed', expiryTime: new Date(Date.now() + 4 * 3600000).toISOString() });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-violet-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Tactical Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf605_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Cinematic Hero Section */}
      <div className="relative pt-24 pb-48 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/10 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 font-black mb-12 text-[9px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-sm">
                 <Zap className="h-4 w-4 animate-pulse" /> Bulk Rescue Protocol v1.4.2
              </div>
              <h1 className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-12 tracking-tighter leading-[0.8]">
                Large Scale <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-700 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-500 italic">Interception.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl border-l-2 border-violet-500/30 pl-8 opacity-90 dark:opacity-80">
                Coordinating high-volume food recovery for weddings, festivals, and corporate summits. <span className="text-violet-600 dark:text-violet-400 font-black">Logistics node active.</span>
              </p>
            </motion.div>

            <div className="flex gap-8">
               <div className="p-10 rounded-[3.5rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-4xl text-center min-w-[240px] group hover:border-violet-500/30 transition-all duration-700">
                  <div className="text-6xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 tabular-nums">90<span className="text-violet-600 dark:text-violet-400 text-2xl ml-1">MIN</span></div>
                  <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Rescue Window</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Form Area */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 md:p-20 rounded-[5rem] bg-white/80 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl shadow-4xl dark:shadow-6xl relative overflow-hidden transition-all"
            >
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-xl border border-emerald-500/20">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="text-5xl font-black text-slate-950 dark:text-white mb-6 tracking-tight uppercase">Mission Initialized!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xl font-medium mb-12 max-w-md">Our bulk logistics team is now on high alert. You will receive a tactical intercept link shortly.</p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black px-12 py-6 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all shadow-4xl text-sm uppercase tracking-widest"
                    >
                      Return to Dashboard
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-violet-500/20 rounded-tl-[5rem]"></div>
              
              <div className="mb-16">
                 <h2 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter uppercase mb-2">Protocol Registration</h2>
                 <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Input Event Telemetry</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Node Identifier (Name)</label>
                      <div className="relative group">
                         <input type="text" placeholder="e.g. Grand Wedding Summit" className="w-full pl-10 pr-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 focus:bg-white dark:focus:bg-white/10 outline-none font-black text-slate-950 dark:text-white transition-all text-sm shadow-inner" />
                         <Tag className="absolute right-8 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 dark:text-slate-700 group-focus-within:text-violet-500 transition-colors" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Rescue Target (Event Type)</label>
                      <select className="w-full px-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 focus:bg-white dark:focus:bg-white/10 outline-none font-black text-slate-950 dark:text-white transition-all text-sm shadow-inner appearance-none">
                         <option>Wedding Ceremony</option>
                         <option>Corporate Summit</option>
                         <option>Religious Festival</option>
                         <option>Other Massive Node</option>
                      </select>
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Logistics Coordinates (Location)</label>
                   <div className="relative group">
                      <input type="text" placeholder="Complete address for rapid response..." className="w-full pl-10 pr-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 focus:bg-white dark:focus:bg-white/10 outline-none font-black text-slate-950 dark:text-white transition-all text-sm shadow-inner" />
                      <MapPin className="absolute right-8 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 dark:text-slate-700 group-focus-within:text-violet-500 transition-colors" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Intercept Date</label>
                      <input type="date" className="w-full px-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 outline-none font-black text-slate-950 dark:text-white text-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Surplus Time</label>
                      <input type="time" className="w-full px-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 outline-none font-black text-slate-950 dark:text-white text-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.4em] ml-6">Est. Portions</label>
                      <input type="number" placeholder="500+" className="w-full px-10 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/50 outline-none font-black text-slate-950 dark:text-white text-sm" />
                   </div>
                </div>

                <div className="pt-8">
                   <button type="submit" className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-8 rounded-[2.5rem] hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white transition-all shadow-4xl flex items-center justify-center gap-6 text-xl uppercase tracking-widest active:scale-95 group">
                      Broadcast Rescue Request <ArrowUpRight className="h-8 w-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar: Tactical Intel */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-12 rounded-[5rem] bg-slate-950 dark:bg-slate-950 text-white shadow-4xl relative overflow-hidden group transition-all"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <ShieldCheck className="h-64 w-64" />
              </div>
              <div className="relative z-10">
                 <div className="w-20 h-20 rounded-[2.2rem] bg-violet-600 dark:bg-violet-500 text-white flex items-center justify-center mb-12 shadow-6xl group-hover:rotate-12 transition-transform">
                    <ShieldCheck className="h-10 w-10" />
                 </div>
                 <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase leading-[0.8] text-white">The Rescue <br/> <span className="text-violet-400">Lifecycle.</span></h3>
                 
                 <div className="space-y-10">
                    {[
                      { icon: Clock, title: "90-Min Lockdown", text: "Once preparation ends, the safety clock begins. Distribution must conclude within 90 minutes." },
                      { icon: Thermometer, title: "Thermal Integrity", text: "All bulk nodes are monitored for consistent temperature holding during transit." },
                      { icon: Users, title: "Rapid Deploy Team", text: "Event rescues trigger a specialized logistics squad for high-volume handling." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-violet-500 transition-colors">
                            <item.icon className="h-6 w-6 text-violet-400 group-hover/item:text-white" />
                         </div>
                         <div>
                            <h4 className="text-xl font-black mb-1 group-hover/item:text-violet-400 transition-colors text-white">{item.title}</h4>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-80">{item.text}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 rounded-[5rem] bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-3xl dark:shadow-4xl transition-all"
            >
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/5 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center shadow-inner">
                    <Activity className="h-7 w-7" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight uppercase">Network Pulse</h3>
                    <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Real-time Bulk Intercepts</p>
                 </div>
              </div>
              
              <div className="space-y-6">
                 {[
                   { label: 'Event Clusters', val: '42' },
                   { label: 'Volunteer Nodes', val: '124' },
                   { label: 'Rescued Portions', val: '8.4k' }
                 ].map((s, i) => (
                   <div key={i} className="flex justify-between items-center p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-inner">
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{s.label}</span>
                      <span className="text-2xl font-black text-slate-950 dark:text-white tabular-nums">{s.val}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-48 mb-20 relative">
          <div className="text-center mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/10 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 font-black text-[9px] uppercase tracking-[0.5em] mb-8 backdrop-blur-3xl shadow-sm"
            >
              The 90-Minute Lifecycle
            </motion.div>
            <h2 className="text-7xl md:text-[8rem] font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-[0.8] uppercase">
              Mission <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-700 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-500 italic">Trajectory.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-2xl font-medium max-w-2xl mx-auto opacity-90 dark:opacity-80">From ballroom to bowl in under 90 minutes. Forensic precision at scale.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {[
              { 
                step: '01', 
                title: 'Strategic Pre-booking', 
                desc: 'Schedule your rescue event. Our AI-driven logistics engine pre-allocates standby vans based on your guest count.', 
                icon: Calendar,
                color: 'blue'
              },
              { 
                step: '02', 
                title: 'Rapid Cold-Chain Pickup', 
                desc: 'As soon as the buffet ends, our specialized team arrives with thermal-insulated bags and industrial-grade packing.', 
                icon: Truck,
                color: 'violet'
              },
              { 
                step: '03', 
                title: 'Hyper-Local Distribution', 
                desc: 'Food is immediately routed to multiple vetted NGOs simultaneously, ensuring zero transit time and maximum freshness.', 
                icon: Users,
                color: 'fuchsia'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                onClick={() => setActiveStep(item.title)}
                className="group relative cursor-pointer"
              >
                <div className={`p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.03] border transition-all duration-700 hover:-translate-y-4 h-full flex flex-col items-center text-center ${
                  activeStep === item.title ? 'bg-white/90 dark:bg-white/[0.08] border-black/10 dark:border-white/20 shadow-4xl dark:shadow-6xl' : 'border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] shadow-3xl dark:shadow-4xl'
                }`}>
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-${item.color}-500/5 dark:bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase text-slate-950 dark:text-white">{item.title}</h4>
                  <p className="text-slate-400 dark:text-slate-500 font-medium leading-relaxed mb-8 flex-1 italic">"{item.desc}"</p>
                  <div className={`w-16 h-1 rounded-full bg-${item.color}-500/30 group-hover:w-32 transition-all duration-700`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-20 overflow-hidden"
              >
                <div className="p-16 rounded-[5rem] bg-white/80 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 backdrop-blur-3xl relative transition-all">
                  <button onClick={() => setActiveStep(null)} className="absolute top-10 right-10 p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white transition-all">
                    <X className="h-8 w-8" />
                  </button>

                  <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className={`w-32 h-32 rounded-[2.8rem] bg-slate-50 dark:bg-white/5 ${stepDetails[activeStep].color} flex items-center justify-center shrink-0 shadow-4xl border border-black/5 dark:border-white/10`}>
                      {(() => {
                        const StepIcon = stepDetails[activeStep].icon;
                        return <StepIcon className="h-16 w-16" />;
                      })()}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-8 uppercase italic">{activeStep}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-2xl font-medium mb-12 leading-relaxed italic opacity-90 dark:opacity-80">
                        {stepDetails[activeStep].content}
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        {stepDetails[activeStep].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 px-8 py-4 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
