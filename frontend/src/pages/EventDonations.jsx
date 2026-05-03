import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Users, MapPin, CheckCircle2, Truck, 
  Sparkles, Clock, ShieldCheck, Zap, X, Activity, ArrowRight, Tag, Thermometer, ChevronDown, Globe, FileText, History
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function EventDonations() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState('Pre-booking');
  const { addDonation } = useAppContext();

  const stepDetails = {
    'Pre-booking': {
      content: 'Our smart logistics engine analyzes traffic patterns and venue proximity to allocate the most efficient rescue route. By pre-booking, you ensure a dedicated cold-chain van is on standby exactly when your event ends.',
      features: [
        { name: 'Predictive route optimization', icon: Activity },
        { name: 'Standby van allocation', icon: Truck },
        { name: 'Auto-NGO matching', icon: Globe }
      ],
      icon: Calendar,
      color: 'blue'
    },
    'Cold-Chain Pickup': {
      content: 'Time is the enemy of food safety. Our teams arrive with industrial-grade thermal bags and dry-ice cooling systems to ensure that the internal temperature of the food never leaves the safe zone.',
      features: [
        { name: 'Digital temp-logging', icon: Thermometer },
        { name: 'Thermal-shield packaging', icon: ShieldCheck },
        { name: 'Sanitized handling gear', icon: Zap }
      ],
      icon: Truck,
      color: 'violet'
    },
    'Local Distribution': {
      content: 'Bulk rescues are too large for a single NGO. Our system splits the haul among 5-10 nearby verified shelters, distributing the impact across the community within the 4-hour safety window.',
      features: [
        { name: 'Multi-point drop-offs', icon: MapPin },
        { name: 'Instant safety notifications', icon: Sparkles },
        { name: 'Digital receipt generation', icon: FileText }
      ],
      icon: Users,
      color: 'fuchsia'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDonation({ foodName: 'Large Event Buffet Recovery', quantity: 200, type: 'mixed', expiryTime: new Date(Date.now() + 4 * 3600000).toISOString() });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-violet-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-fuchsia-500/10 dark:bg-fuchsia-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      {/* Cinematic Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400 font-bold mb-6 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm">
               <Zap className="h-3 w-3" /> Event Recovery Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Large Scale <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
                Interception.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Coordinating high-volume food recovery for weddings, festivals, and corporate summits. Ensure your surplus feeds the community, not the landfill.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-8"
          >
             <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none text-center min-w-[200px]">
                <div className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-1 tabular-nums">90<span className="text-violet-600 dark:text-violet-400 text-xl ml-1">MIN</span></div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Safe Rescue Window</div>
             </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-12 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] border border-white dark:border-white/10 backdrop-blur-xl shadow-2xl dark:shadow-none relative overflow-hidden"
            >
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
                    animate={{ opacity: 1, backdropFilter: 'blur(12px)' }} 
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 z-30 flex flex-col items-center justify-center p-10 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Rescue Initialized!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-10 max-w-sm">Our bulk logistics team is now on standby. You will receive a tracking link shortly.</p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 transition-all shadow-md text-sm uppercase tracking-wider"
                    >
                      Return to Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mb-10">
                 <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">Schedule a Pickup</h2>
                 <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Provide Event Details</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Event Name</label>
                      <div className="relative group">
                         <input required type="text" placeholder="e.g. Grand Wedding Summit" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm" />
                         <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Event Type</label>
                      <div className="relative group">
                         <select required className="w-full pl-6 pr-12 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm appearance-none">
                            <option>Wedding Ceremony</option>
                            <option>Corporate Summit</option>
                            <option>Religious Festival</option>
                            <option>Private Party</option>
                            <option>Other Event</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors pointer-events-none" />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Location Address</label>
                   <div className="relative group">
                      <input required type="text" placeholder="Complete address for rapid response..." className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm" />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Pickup Date</label>
                      <input required type="date" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 outline-none font-semibold text-slate-900 dark:text-white text-sm shadow-sm" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Pickup Time</label>
                      <input required type="time" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 outline-none font-semibold text-slate-900 dark:text-white text-sm shadow-sm" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2">Est. Guests</label>
                      <input required type="number" placeholder="500" min="50" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-violet-500 outline-none font-semibold text-slate-900 dark:text-white text-sm shadow-sm" />
                   </div>
                </div>

                <div className="pt-6">
                   <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-black py-5 rounded-2xl transition-all shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-3 text-sm uppercase tracking-widest hover:-translate-y-1">
                      Request Rescue Team <ArrowRight className="h-5 w-5" />
                   </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar: Intel */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] bg-slate-900 dark:bg-white/[0.03] text-white shadow-2xl dark:shadow-none border border-transparent dark:border-white/10 relative overflow-hidden group backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <ShieldCheck className="h-48 w-48" />
              </div>
              <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-violet-500 text-white flex items-center justify-center mb-8 shadow-lg">
                    <ShieldCheck className="h-8 w-8" />
                 </div>
                 <h3 className="text-3xl font-extrabold mb-8 tracking-tight text-white">The Rescue <br/> Lifecycle</h3>
                 
                 <div className="space-y-8">
                    {[
                      { icon: Clock, title: "90-Min Lockdown", text: "Once preparation ends, the safety clock begins. Distribution concludes within 90 mins." },
                      { icon: Thermometer, title: "Thermal Integrity", text: "All bulk nodes are monitored for consistent temperature holding during transit." },
                      { icon: Users, title: "Rapid Deploy Team", text: "Event rescues trigger a specialized logistics squad for high-volume handling." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group/item">
                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-violet-500 transition-colors">
                            <item.icon className="h-5 w-5 text-violet-300 group-hover/item:text-white" />
                         </div>
                         <div>
                            <h4 className="text-lg font-bold mb-1 text-white group-hover/item:text-violet-300 transition-colors">{item.title}</h4>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.text}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.03] border border-white dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-none"
            >
              <div className="flex items-center gap-5 mb-8">
                 <div className="w-12 h-12 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center shadow-sm">
                    <Activity className="h-6 w-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Network Pulse</h3>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Real-time Stats</p>
                 </div>
              </div>
              
              <div className="space-y-4">
                 {[
                   { label: 'Active Events', val: '42' },
                   { label: 'Volunteers Ready', val: '124' },
                   { label: 'Meals Rescued', val: '8.4k' }
                 ].map((s, i) => (
                   <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5 shadow-sm">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{s.label}</span>
                      <span className="text-xl font-black text-slate-900 dark:text-white tabular-nums">{s.val}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-48 mb-32 relative">
          {/* Section Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] -z-10 pointer-events-none overflow-hidden">
             <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
          </div>

          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-500 dark:text-slate-400 font-black mb-8 text-[10px] uppercase tracking-[0.3em] backdrop-blur-md"
            >
               <Activity className="h-3 w-3" /> Operational Intelligence
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase">
              The Rescue <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Protocol.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed border-l-2 border-violet-500/30 pl-10 md:pl-0 md:border-l-0">
               From the ballroom to the shelter in under <span className="text-slate-900 dark:text-white font-black italic">90 minutes.</span> <br className="hidden md:block" />
               A seamless, professional mission-critical process.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 dark:bg-white/5 -translate-y-1/2 z-0 overflow-hidden rounded-full">
               <motion.div 
                 animate={{ left: ['-100%', '100%'] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
               />
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {[
              { 
                step: '01', 
                title: 'Pre-booking', 
                desc: 'Initialize the mission. We pre-allocate standby rescue assets based on real-time guest telemetry.', 
                icon: Calendar,
                color: 'blue'
              },
              { 
                step: '02', 
                title: 'Cold-Chain Pickup', 
                desc: 'Tactical intercept teams arrive with industrial thermal-insulated systems and digital tracking.', 
                icon: Truck,
                color: 'violet'
              },
              { 
                step: '03', 
                title: 'Local Distribution', 
                desc: 'Haul is immediately fragmented and routed to multiple vetted NGO nodes for maximum impact.', 
                icon: Users,
                color: 'fuchsia'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveStep(item.title)}
                className="group relative cursor-pointer"
              >
                <div className={`h-full p-12 rounded-[4rem] bg-white/70 dark:bg-white/[0.02] border backdrop-blur-3xl transition-all duration-700 flex flex-col items-center text-center ${
                  activeStep === item.title 
                  ? 'border-violet-500/50 shadow-[0_40px_100px_rgba(139,92,246,0.15)] scale-[1.02] bg-white dark:bg-white/[0.06]' 
                  : 'border-white dark:border-white/5 hover:border-violet-500/30 hover:shadow-4xl hover:-translate-y-4'
                }`}>
                  <div className={`w-28 h-28 rounded-[2.5rem] bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative`}>
                    <div className={`absolute inset-0 bg-${item.color}-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <item.icon className="h-12 w-12 relative z-10" />
                  </div>
                  <span className={`text-[10px] font-black text-${item.color}-500 uppercase tracking-[0.5em] mb-6 italic`}>Phase_{item.step}</span>
                  <h4 className="text-3xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white italic uppercase">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 text-lg">{item.desc}</p>
                  
                  <div className={`mt-auto px-10 py-4 rounded-[2rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 shadow-2xl active:scale-95 italic`}>
                    PROTOCOL_SYNC
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="mt-16 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 blur-[100px] -z-10 rounded-full opacity-50"></div>
                <div className="p-12 md:p-16 rounded-[4rem] bg-white/90 dark:bg-white/[0.03] border border-white dark:border-white/10 backdrop-blur-2xl shadow-3xl relative overflow-hidden">
                  
                  <button 
                    onClick={() => setActiveStep(null)} 
                    className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 transition-all z-20 group"
                  >
                    <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="relative shrink-0">
                      <div className={`w-40 h-40 rounded-[2.5rem] bg-${stepDetails[activeStep].color}-500/10 text-${stepDetails[activeStep].color}-600 dark:text-${stepDetails[activeStep].color}-400 flex items-center justify-center shadow-2xl border border-${stepDetails[activeStep].color}-500/20 relative z-10`}>
                        {(() => {
                          const StepIcon = stepDetails[activeStep].icon;
                          return <StepIcon className="h-16 w-16" />;
                        })()}
                      </div>
                      <div className={`absolute -inset-4 bg-${stepDetails[activeStep].color}-500/20 blur-3xl rounded-full animate-pulse -z-0`}></div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">{activeStep}</h3>
                        <div className={`h-1 w-20 bg-${stepDetails[activeStep].color}-500 rounded-full hidden lg:block`}></div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-xl md:text-2xl font-medium mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                        {stepDetails[activeStep].content}
                      </p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {stepDetails[activeStep].features.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4 bg-white/50 dark:bg-white/5 px-8 py-5 rounded-[2rem] border border-white dark:border-white/10 shadow-sm group hover:border-violet-500/50 transition-all hover:-translate-y-1"
                          >
                            <div className={`w-10 h-10 rounded-xl bg-${stepDetails[activeStep].color}-500/10 flex items-center justify-center text-${stepDetails[activeStep].color}-500 group-hover:scale-110 transition-transform`}>
                               <feature.icon size={18} />
                            </div>
                            <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">{feature.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* --- Recent Rescues / Impact Section --- */}
        <div className="pt-24 border-t border-slate-200 dark:border-white/10 relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-center md:text-left">
              <div>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 flex items-center justify-center md:justify-start gap-4">
                    <History className="h-10 w-10 text-emerald-500" /> Recent Rescues
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                    See the massive impact our community is making across the city.
                 </p>
              </div>
              <button className="px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-all shadow-md">
                 View Global Impact
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { 
                  title: 'Grand Royal Wedding', 
                  location: 'Metropolitan Hotel', 
                  meals: '1,240', 
                  saved: '420kg CO₂', 
                  img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' 
                },
                { 
                  title: 'Tech Summit 2024', 
                  location: 'Convention Center', 
                  meals: '850', 
                  saved: '280kg CO₂', 
                  img: 'https://images.unsplash.com/photo-1540575861501-7ad05823c951?auto=format&fit=crop&w=800&q=80' 
                },
                { 
                  title: 'Heritage Food Fest', 
                  location: 'Old City Plaza', 
                  meals: '2,100', 
                  saved: '680kg CO₂', 
                  img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80' 
                }
              ].map((rescue, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group rounded-[3rem] bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/5 overflow-hidden shadow-xl hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500"
                >
                  <div className="h-60 relative overflow-hidden">
                    <img 
                      src={rescue.img} 
                      alt={rescue.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-emerald-500/90 backdrop-blur-md rounded-xl text-xs font-black text-white shadow-lg uppercase tracking-widest">
                       Verified Success
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                       <MapPin className="h-3 w-3" /> {rescue.location}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-emerald-500 transition-colors">{rescue.title}</h4>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
                       <div className="flex flex-col">
                          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{rescue.meals}</span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Meals Shared</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{rescue.saved}</span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Carbon Offset</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    );
}
