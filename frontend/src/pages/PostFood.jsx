import { useState, useEffect } from 'react';
import { UploadCloud, MapPin, Send, CheckCircle2, Navigation, ShieldCheck, Camera, Utensils, Sparkles, Clock, Globe, Zap, AlertTriangle, Activity, Target, Search, Cpu, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight, Terminal, Radar, Satellite, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function PostFood() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    type: 'veg',
    expiryTime: '',
    address: '',
    category: 'Cooked Meal',
    priority: 'Normal'
  });
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [
    "Zero Waste Initiative.",
    "Mission: Urban Nourishment.",
    "Protocol: Surplus Recovery."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex(prev => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [readiness, setReadiness] = useState(0);
  const navigate = useNavigate();

  const { addDonation } = useAppContext();

  useEffect(() => {
    let score = 0;
    if (formData.foodName) score += 20;
    if (formData.quantity) score += 20;
    if (formData.expiryTime) score += 20;
    if (formData.address) score += 20;
    if (scanning === 'Verified') score += 20;
    setReadiness(score);
  }, [formData, scanning]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (readiness < 100) return;
    setIsSubmitting(true);
    setTimeout(() => {
      addDonation(formData);
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate('/track');
      }, 3000);
    }, 2000);
  };

  const simulateScan = () => {
    setScanning('Analyzing...');
    setTimeout(() => setScanning('Verified'), 2500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white">
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
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><Activity className="h-3 w-3" /> BROADCAST_NODE: ACTIVE</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Globe className="h-3 w-3" /> NETWORK: SYNCHRONIZED</span>
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Zap className="h-3 w-3" /> POWER: OPTIMAL</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Satellite className="h-3 w-3" /> PROTOCOL: v9.4</span>
              </div>
            ))}
         </div>
      </div>

      {/* Cinematic Hero Header */}
      <section className="bg-white dark:bg-[#020617] text-slate-950 dark:text-white pt-24 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-slate-50 dark:bg-emerald-500/10 border border-black/5 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[9px] uppercase tracking-[0.5em] mb-12 backdrop-blur-3xl"
              >
                <Sparkles className="h-4 w-4" /> Broadcast Rescue Mission v9.0.2
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  className="text-8xl md:text-[10rem] font-black mb-10 tracking-tighter leading-[0.8]"
                >
                  {headlines[headlineIndex].split(' ').map((word, i) => (
                    <span key={i} className={i === headlines[headlineIndex].split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 dark:to-blue-500 italic" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-500 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl opacity-80 mb-16 border-l-2 border-emerald-500/30 pl-8"
              >
                Deploy your surplus to our high-speed rescue network. We connect your node to verified NGOs with <span className="text-slate-950 dark:text-white">real-time forensic tracking.</span>
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('mission-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black px-12 py-6 rounded-[2.5rem] shadow-2xl flex items-center gap-4 text-sm uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all active:scale-95 group"
              >
                Start Mission Protocol <ChevronRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-8">
              {[
                { label: 'NGO Node Availability', value: '14 Active', icon: Globe, status: 'NOMINAL', color: 'blue' },
                { label: 'Network Response', value: '18 Mins', icon: Clock, status: 'HIGH SPEED', color: 'emerald' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-white dark:bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3rem] border border-black/5 dark:border-white/5 min-w-[340px] shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] group relative overflow-hidden"
                >
                   <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
                   <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-white/40 border border-black/5 dark:border-white/10 shadow-inner group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                         <stat.icon className="h-7 w-7" />
                      </div>
                      <span className={`text-[9px] font-black text-${stat.color}-600 dark:text-${stat.color}-400 bg-${stat.color}-500/5 dark:bg-${stat.color}-500/10 px-4 py-1.5 rounded-full uppercase tracking-widest border border-black/5 dark:border-${stat.color}-500/20 shadow-sm`}>{stat.status}</span>
                   </div>
                   <p className="text-5xl font-black text-slate-950 dark:text-white mb-2 tracking-tighter relative z-10">{stat.value}</p>
                   <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20" id="mission-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Mission Controller */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 md:p-20 rounded-[5rem] bg-slate-50 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 backdrop-blur-3xl shadow-[0_50px_150px_rgba(0,0,0,0.05)] dark:shadow-[0_50px_150px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Mission Readiness Header */}
              <div className="mb-20 bg-white dark:bg-black/40 p-12 rounded-[4rem] border border-black/5 dark:border-white/5 shadow-2xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Target className="h-40 w-40 text-slate-950 dark:text-white" />
                 </div>
                 <div className="flex justify-between items-end mb-8 relative z-10">
                    <div>
                       <h2 className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-2">Pre-Mission Readiness Hub</h2>
                       <p className="text-slate-950 dark:text-white font-black text-xl tracking-tight">System Status: {readiness === 100 ? 'READY_FOR_DEPLOY' : 'SCANNING_REQUIRED'}</p>
                    </div>
                    <span className="text-5xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums tracking-tighter">{readiness}%</span>
                 </div>
                 <div className="w-full h-2.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-black/5 dark:border-white/10">
                    <motion.div 
                      animate={{ width: `${readiness}%` }}
                      className={`h-full rounded-full transition-all duration-1000 ${readiness === 100 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}
                    />
                 </div>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white dark:bg-[#020617]/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-40 h-40 bg-emerald-500 text-slate-950 rounded-[4rem] flex items-center justify-center mb-12 shadow-[0_0_60px_rgba(16,185,129,0.5)]"
                    >
                      <CheckCircle2 className="h-20 w-20" />
                    </motion.div>
                    <h3 className="text-7xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter uppercase">Mission Active.</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-2xl font-medium mb-16 max-w-xl mx-auto leading-relaxed">Your surplus node is now being propagated across the global relief network. <span className="text-emerald-600 dark:text-emerald-400 font-bold">Tactical tracking initialized.</span></p>
                    <div className="flex gap-8">
                      <button onClick={() => navigate('/track')} className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black px-16 py-7 rounded-[2.5rem] hover:bg-emerald-600 transition-all shadow-3xl text-lg uppercase tracking-widest active:scale-95">Intercept Mission</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-20 relative z-10">
                {/* Protocol 01: Resource Identification */}
                <section>
                   <div className="flex items-center gap-8 mb-16">
                      <div className="w-16 h-16 rounded-[2rem] bg-slate-950 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center text-2xl font-black shadow-2xl rotate-12">01</div>
                      <div>
                         <h2 className="text-4xl font-black text-slate-950 dark:text-white tracking-tight uppercase">Resource ID</h2>
                         <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mt-2">Molecular Type & Payload Verification</p>
                      </div>
                   </div>

                   <div className="space-y-12">
                     <div className="group/input">
                        <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-2 group-focus-within/input:text-emerald-600 dark:text-emerald-400 transition-colors">Tactical_Description</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-12 py-8 mt-5 rounded-[3rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-emerald-500/50 focus:bg-black/10 dark:focus:bg-white/10 transition-all outline-none font-black text-slate-950 dark:text-white text-3xl shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-700"
                          placeholder="e.g. CONTINENTAL_BUFFET_SURPLUS"
                          value={formData.foodName}
                          onChange={e => setFormData({...formData, foodName: e.target.value})}
                        />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group/input">
                           <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-2 group-focus-within/input:text-emerald-600 dark:text-emerald-400 transition-colors">Portion_Matrix</label>
                           <div className="relative">
                              <Utensils className="absolute left-10 top-1/2 -translate-y-1/2 h-8 w-8 text-slate-300 dark:text-slate-600 group-focus-within/input:text-emerald-600 dark:text-emerald-400 transition-colors" />
                              <input 
                                required
                                type="number"
                                className="w-full pl-24 pr-10 py-8 mt-5 rounded-[3rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-emerald-400/50 focus:bg-black/10 dark:focus:bg-white/10 transition-all outline-none font-black text-slate-950 dark:text-white text-3xl shadow-inner"
                                placeholder="0"
                                value={formData.quantity}
                                onChange={e => setFormData({...formData, quantity: e.target.value})}
                              />
                           </div>
                        </div>

                        <div>
                           <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-2 mb-5 block">Category_Sector</label>
                           <div className="flex gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-[3rem] border border-black/5 dark:border-white/5 mt-2 shadow-inner">
                              {['veg', 'non-veg'].map(type => (
                                <button 
                                  key={type}
                                  type="button"
                                  onClick={() => setFormData({...formData, type})}
                                  className={`flex-1 py-5 rounded-[2.5rem] font-black uppercase text-[10px] tracking-widest transition-all ${
                                    formData.type === type ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-2xl' : 'text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white'
                                  }`}
                                >
                                  {type === 'veg' ? '🌿 organic_veg' : '🍗 protein_base'}
                                </button>
                              ))}
                           </div>
                        </div>
                     </div>
                   </div>
                </section>

                {/* Protocol 02: Logistical Telemetry */}
                <section>
                   <div className="flex items-center gap-8 mb-16">
                      <div className="w-16 h-16 rounded-[2rem] bg-slate-950 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center text-2xl font-black shadow-2xl -rotate-6">02</div>
                      <div>
                         <h2 className="text-4xl font-black text-slate-950 dark:text-white tracking-tight uppercase">Logistics Hub</h2>
                         <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mt-2">Geospatial & Thermal Sync</p>
                      </div>
                   </div>

                   <div className="space-y-12">
                      <div className="group/input">
                        <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-2 group-focus-within/input:text-blue-600 dark:text-blue-400 transition-colors">Venue_Coordinates</label>
                        <div className="relative">
                          <MapPin className="absolute left-10 top-1/2 -translate-y-1/2 h-8 w-8 text-blue-600 dark:text-blue-500" />
                          <input 
                            required
                            type="text" 
                            className="w-full pl-24 pr-10 py-8 mt-5 rounded-[3rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-blue-500/50 focus:bg-black/10 dark:focus:bg-white/10 transition-all outline-none font-black text-slate-950 dark:text-white text-3xl shadow-inner placeholder:text-slate-300 dark:placeholder:text-slate-700"
                            placeholder="GEO_LOCATION_ADDRESS"
                            value={formData.address}
                            onChange={e => setFormData({...formData, address: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="group/input">
                        <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-2 group-focus-within/input:text-amber-600 dark:text-amber-500 transition-colors">Thermal_Window_End</label>
                        <div className="relative">
                           <Clock className="absolute left-10 top-1/2 -translate-y-1/2 h-8 w-8 text-amber-600 dark:text-amber-500" />
                           <input 
                             required
                             type="datetime-local" 
                             className="w-full pl-24 pr-10 py-8 mt-5 rounded-[3rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-amber-500/50 focus:bg-black/10 dark:focus:bg-white/10 transition-all outline-none font-black text-slate-950 dark:text-white text-3xl shadow-inner"
                             value={formData.expiryTime}
                             onChange={e => setFormData({...formData, expiryTime: e.target.value})}
                           />
                        </div>
                      </div>
                   </div>
                </section>

                <div className="pt-16">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting || readiness < 100}
                    className={`w-full font-black py-12 rounded-[3.5rem] transition-all shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] text-3xl tracking-tighter flex items-center justify-center gap-8 group ${readiness === 100 ? 'bg-slate-950 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-slate-950' : 'bg-black/5 dark:bg-white/5 text-slate-300 dark:text-slate-700 cursor-not-allowed border border-black/5 dark:border-white/5'}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-6">
                         <div className="h-10 w-10 rounded-full border-4 border-slate-400/20 dark:border-slate-950/20 border-t-slate-400 dark:border-t-slate-950 animate-spin"></div>
                         <span className="uppercase tracking-widest">DEPLOYING_NODE...</span>
                      </div>
                    ) : (
                      <>
                        <Send className={`h-10 w-10 transition-transform ${readiness === 100 ? 'group-hover:rotate-12 text-emerald-500' : ''}`} /> 
                        <span className="uppercase tracking-widest">Broadcast Mission</span>
                      </>
                    )}
                  </motion.button>
                  {readiness < 100 && (
                    <p className="text-center text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mt-8 flex items-center justify-center gap-3">
                       <AlertTriangle className="h-4 w-4" /> AWAITING_FULL_PROTOCOL_COMPLIANCE_TO_INITIATE
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Tactical Intelligence Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-12 rounded-[5rem] bg-emerald-600 text-white shadow-[0_40px_100px_rgba(16,185,129,0.3)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:scale-125 transition-transform duration-[2000ms]"></div>
              <ShieldCheck className="h-20 w-20 text-emerald-100 mb-12 shadow-2xl" />
              <h3 className="text-5xl font-black mb-10 leading-[0.8] tracking-tighter uppercase italic">Forensic <br/> Safety.</h3>
              <p className="text-emerald-50/80 text-2xl font-medium mb-12 leading-relaxed opacity-90">Every mission node is digitally fingerprinted for <span className="text-white font-black">100% liability protection</span> and chain-of-custody tracking.</p>
              
              <div className="space-y-6 relative z-10">
                {[
                  { label: 'Thermal Window Locked', icon: ShieldCheck },
                  { label: 'Node Background Check', icon: Globe },
                  { label: 'AI Quality Audit', icon: Cpu }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-2xl group/item hover:bg-white/20 transition-all">
                    <item.icon className="h-6 w-6 text-emerald-200" />
                    <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 rounded-[5rem] bg-slate-50 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.05)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-3xl"
            >
              <div className="flex items-center justify-between mb-12 relative z-10">
                 <div>
                    <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-1">AI Image Audit</h4>
                    <span className={`text-sm font-black uppercase tracking-widest transition-colors ${scanning === 'Verified' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                       {scanning === 'Verified' ? 'Node Verified' : 'Scanning Node...'}
                    </span>
                 </div>
                 <Camera className={`h-7 w-7 transition-colors ${scanning === 'Verified' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'}`} />
              </div>
              
              <div 
                onClick={simulateScan}
                className={`aspect-square rounded-[4rem] border-4 border-dashed transition-all duration-700 flex flex-col items-center justify-center text-center p-12 cursor-pointer group relative overflow-hidden ${
                  scanning === 'Verified' ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[inset_0_0_50px_rgba(16,185,129,0.1)]' : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5'
                }`}
              >
                {scanning === 'Analyzing...' && (
                   <motion.div 
                     animate={{ top: ['0%', '100%'] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                     className="absolute left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,1)] z-20"
                   />
                )}

                <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center shadow-3xl mb-10 transition-all duration-700 relative z-10 ${
                  scanning === 'Verified' ? 'bg-emerald-500 text-slate-950 scale-110 rotate-6' : 'bg-black/5 dark:bg-white/5 text-slate-300 dark:text-slate-400'
                }`}>
                   {scanning === 'Verified' ? <CheckCircle2 className="h-12 w-12" /> : <UploadCloud className="h-12 w-12 group-hover:scale-110 transition-transform" />}
                </div>

                <p className="text-xl font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] leading-none relative z-10">
                  {scanning === 'Verified' ? 'LINK_VERIFIED' : scanning === 'Analyzing...' ? 'ANALYZING...' : 'PHOTO_PROMPT'}
                </p>
                <p className="text-[9px] text-slate-400 dark:text-slate-600 font-black mt-4 tracking-[0.4em] uppercase relative z-10">MANDATORY_FORENSIC_STEP</p>
              </div>
            </motion.div>

            {/* Tactical Pro Network Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-12 rounded-[5rem] bg-slate-100 dark:bg-slate-950 shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-4xl relative overflow-hidden border border-black/5 dark:border-white/5"
            >
               <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">Active Intercept Nodes</span>
                  </div>
                  <div className="space-y-6">
                     {[
                       { name: 'Kolkata Central NGO', dist: '1.2km', load: 'LOW' },
                       { name: 'Hope Foundation', dist: '4.8km', load: 'NOMINAL' }
                     ].map((ngo, i) => (
                       <div key={i} className="flex justify-between items-center p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 group hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer shadow-sm">
                          <div className="space-y-1">
                             <span className="text-sm font-black text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">{ngo.name}</span>
                             <div className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{ngo.dist} DISTANCE</div>
                          </div>
                          <span className="text-[9px] font-black text-blue-600 dark:text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 px-3 py-1 rounded-lg">{ngo.load}</span>
                       </div>
                     ))}
                  </div>
                  <button className="w-full mt-10 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] hover:bg-black/10 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white transition-all">
                     SYNC FULL NETWORK RADAR
                  </button>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Persistent Mission FAB (Floating Action Button) - Overridden for Post Page */}
      <div className="max-w-7xl mx-auto px-4 mt-48 text-center">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex flex-wrap justify-center items-center gap-12 text-slate-400 dark:text-slate-500 text-[11px] font-black bg-slate-50 dark:bg-white/[0.02] px-16 py-8 rounded-[4rem] border border-black/5 dark:border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-4xl backdrop-blur-3xl uppercase tracking-[0.4em]"
           >
              <div className="flex items-center gap-4"><ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-500" /> MISSION_INTEGRITY_v9</div>
              <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-4"><Lock className="h-5 w-5 text-blue-600 dark:text-blue-500" /> P2P_ENCRYPTION</div>
              <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-4"><Satellite className="h-5 w-5 text-amber-600 dark:text-amber-500" /> SATELLITE_LINK_ACTIVE</div>
           </motion.div>
        </div>
    </div>
  );
}
