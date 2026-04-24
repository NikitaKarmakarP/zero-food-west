import { useState, useEffect } from 'react';
import { UploadCloud, MapPin, Send, CheckCircle2, Navigation, ShieldCheck, Camera, Utensils, Sparkles, Clock, Globe, Zap, AlertTriangle, Activity, Target, Search, Cpu, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
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
    if (scanning) score += 20;
    setReadiness(score);
  }, [formData, scanning]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addDonation(formData);
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      setFormData({ foodName: '', quantity: '', type: 'veg', expiryTime: '', address: '' });
      setScanning(false);
    }, 2000);
  };

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => setScanning('Verified'), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fdfdff] pb-24 selection:bg-emerald-500/30">
      {/* Editorial Hero Header */}
      <div className="relative bg-slate-900 text-white pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1920&q=80" 
            alt="Cooking" 
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900"></div>
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-10 border border-emerald-500/30 backdrop-blur-xl"
              >
                <Sparkles className="h-4 w-4" /> Broadcast Rescue Mission v2.0
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]"
                >
                  {headlines[headlineIndex].split(' ').map((word, i) => (
                    <span key={i} className={i === headlines[headlineIndex].split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl opacity-80 mb-12"
              >
                Deploy your surplus to our high-speed rescue network. We connect your node to verified NGOs with real-time cold-chain tracking.
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('mission-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 text-slate-950 font-black px-10 py-5 rounded-[2rem] shadow-2xl flex items-center gap-3 text-sm uppercase tracking-widest"
              >
                Start Mission Protocol <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Tactical Dashboard Stats */}
            <div className="hidden lg:grid grid-cols-1 gap-6">
              {[
                { label: 'NGO Node Availability', value: '14 Active', icon: Globe, status: 'NOMINAL' },
                { label: 'Network Response', value: '18 Mins', icon: Clock, status: 'HIGH SPEED' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 min-w-[300px] shadow-2xl"
                >
                   <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-inner">
                         <stat.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest">{stat.status}</span>
                   </div>
                   <p className="text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</p>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Mission Controller */}
          <div className="lg:col-span-8" id="mission-form">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-12 md:p-16 rounded-[4rem] border-white shadow-6xl relative overflow-hidden bg-white border-2 border-slate-100"
            >
              {/* Mission Readiness Header */}
              <div className="mb-20 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
                 <div className="flex justify-between items-end mb-6">
                    <div>
                       <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-1">Pre-Mission Readiness</h2>
                       <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Complete all protocols to initiate deployment</p>
                    </div>
                    <span className="text-3xl font-black text-emerald-500 tabular-nums">{readiness}%</span>
                 </div>
                 <div className="w-full h-3 bg-white rounded-full overflow-hidden p-1 shadow-sm">
                    <motion.div 
                      animate={{ width: `${readiness}%` }}
                      className={`h-full rounded-full transition-all duration-700 ${readiness === 100 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-blue-500'}`}
                    />
                 </div>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-[3rem] flex items-center justify-center mb-10 shadow-2xl">
                      <CheckCircle2 className="h-16 w-16" />
                    </div>
                    <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Mission Live.</h3>
                    <p className="text-slate-500 text-2xl font-medium mb-12 max-w-md mx-auto">Your rescue data has been propagated across the cluster. NGOs are now intercepting.</p>
                    <div className="flex gap-6">
                      <button onClick={() => navigate('/map')} className="bg-slate-900 text-white font-black px-12 py-6 rounded-3xl hover:bg-emerald-600 transition-all shadow-xl text-lg">View Mission Map</button>
                      <button onClick={() => setSuccess(false)} className="bg-slate-100 text-slate-900 font-black px-12 py-6 rounded-3xl hover:bg-slate-200 transition-all text-lg">New Mission</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-16">
                {/* Protocol 01: Resource Identification */}
                <section>
                   <div className="flex items-center gap-6 mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-xl font-black shadow-2xl">01</div>
                      <div>
                         <h2 className="text-3xl font-black text-slate-900 tracking-tight">Resource Details</h2>
                         <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">Identification & Type Verification</p>
                      </div>
                   </div>

                   <div className="space-y-12">
                     <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 group-focus-within:text-emerald-600 transition-colors">Mission Description</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-12 py-7 mt-4 rounded-[3rem] bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-black text-slate-900 text-2xl shadow-inner placeholder:text-slate-200"
                          placeholder="e.g. Continental Dinner Surplus"
                          value={formData.foodName}
                          onChange={e => setFormData({...formData, foodName: e.target.value})}
                        />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 group-focus-within:text-emerald-600 transition-colors">Portion Matrix</label>
                           <div className="relative">
                              <Utensils className="absolute left-10 top-1/2 -translate-y-1/2 h-7 w-7 text-slate-300" />
                              <input 
                                required
                                type="number"
                                className="w-full pl-22 pr-10 py-7 mt-4 rounded-[3rem] bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-black text-slate-900 text-2xl shadow-inner"
                                placeholder="80"
                                value={formData.quantity}
                                onChange={e => setFormData({...formData, quantity: e.target.value})}
                              />
                           </div>
                        </div>

                        <div>
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 mb-4 block">Molecular Signature</label>
                           <div className="flex gap-4 p-2.5 bg-slate-50 rounded-[3rem] border border-slate-100 mt-1 shadow-inner">
                              {['veg', 'non-veg'].map(type => (
                                <button 
                                  key={type}
                                  type="button"
                                  onClick={() => setFormData({...formData, type})}
                                  className={`flex-1 py-5 rounded-[2.5rem] font-black uppercase text-xs tracking-widest transition-all ${
                                    formData.type === type ? 'bg-white text-slate-950 shadow-xl border border-slate-100' : 'text-slate-400 hover:text-slate-600'
                                  }`}
                                >
                                  {type === 'veg' ? '🌿 Organic Veg' : '🍗 Protein Non-Veg'}
                                </button>
                              ))}
                           </div>
                        </div>
                     </div>
                   </div>
                </section>

                {/* Protocol 02: Logistical Telemetry */}
                <section>
                   <div className="flex items-center gap-6 mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-xl font-black shadow-2xl">02</div>
                      <div>
                         <h2 className="text-3xl font-black text-slate-900 tracking-tight">Logistics Sync</h2>
                         <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-1">Geographic & Thermal Integrity Hub</p>
                      </div>
                   </div>

                   <div className="space-y-12">
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 group-focus-within:text-blue-500 transition-colors">Hub Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-10 top-1/2 -translate-y-1/2 h-7 w-7 text-blue-500" />
                          <input 
                            required
                            type="text" 
                            className="w-full pl-22 pr-10 py-7 mt-4 rounded-[3rem] bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-black text-slate-900 text-2xl shadow-inner placeholder:text-slate-200"
                            placeholder="Venue Name or Coordinate Address"
                            value={formData.address}
                            onChange={e => setFormData({...formData, address: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 group-focus-within:text-amber-500 transition-colors">Thermal Window (Expiry)</label>
                        <div className="relative">
                           <Clock className="absolute left-10 top-1/2 -translate-y-1/2 h-7 w-7 text-amber-500" />
                           <input 
                             required
                             type="datetime-local" 
                             className="w-full pl-22 pr-10 py-7 mt-4 rounded-[3rem] bg-slate-50 border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all outline-none font-black text-slate-900 text-2xl shadow-inner"
                             value={formData.expiryTime}
                             onChange={e => setFormData({...formData, expiryTime: e.target.value})}
                           />
                        </div>
                      </div>
                   </div>
                </section>

                <div className="pt-12 border-t border-slate-100">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full font-black py-10 rounded-[3rem] transition-all shadow-4xl text-2xl tracking-tight flex items-center justify-center gap-6 group ${readiness === 100 ? 'bg-slate-900 hover:bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-4">
                         <div className="h-8 w-8 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
                         <span>PROPAGATING DATA...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-8 w-8 group-hover:rotate-12 transition-transform" /> 
                        INITIATE RESCUE MISSION
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Tactical Intelligence Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-600 p-12 rounded-[4rem] text-white shadow-4xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:scale-125 transition-transform duration-[2000ms]"></div>
              <ShieldCheck className="h-16 w-16 text-emerald-200 mb-10 shadow-2xl" />
              <h3 className="text-4xl font-black mb-8 leading-none tracking-tight">The Forensic <br/> Safety Seal.</h3>
              <p className="text-emerald-50 text-lg font-medium mb-12 leading-relaxed opacity-90">Every mission node is digitally fingerprinted to ensure 100% cold-chain traceability and liability protection.</p>
              
              <div className="space-y-6">
                {[
                  { label: 'Thermal Shield Verified', icon: ShieldCheck },
                  { label: 'NGO Node Background Check', icon: Globe },
                  { label: 'AI Spoilage Analysis', icon: Cpu }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl">
                    <item.icon className="h-5 w-5 text-emerald-300" />
                    <span className="text-sm font-black tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-12 rounded-[4rem] border-white shadow-2xl bg-white/80 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                 <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">AI Image Audit</h4>
                    <span className="text-sm font-black text-emerald-500">Protocol: Scanning</span>
                 </div>
                 <Camera className="h-6 w-6 text-slate-300" />
              </div>
              
              <div 
                onClick={simulateScan}
                className={`aspect-square rounded-[3.5rem] border-4 border-dashed transition-all duration-700 flex flex-col items-center justify-center text-center p-10 cursor-pointer group relative overflow-hidden ${
                  scanning === 'Verified' ? 'bg-emerald-50 border-emerald-500' : 'bg-slate-50 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
                }`}
              >
                {scanning === 'Analyzing...' && (
                   <motion.div 
                     animate={{ top: ['0%', '100%'] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                     className="absolute left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-20"
                   />
                )}

                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl mb-8 transition-all duration-500 ${
                  scanning === 'Verified' ? 'bg-emerald-500 text-white' : 'bg-white text-emerald-500'
                }`}>
                   {scanning === 'Verified' ? <CheckCircle2 className="h-10 w-10" /> : <UploadCloud className="h-10 w-10 group-hover:scale-110 transition-transform" />}
                </div>

                <p className="text-lg font-black text-slate-900 uppercase tracking-widest leading-none">
                  {scanning === 'Verified' ? 'DATA VERIFIED' : scanning === 'Analyzing...' ? 'ANALYZING...' : 'PHOTO PROOF'}
                </p>
                <p className="text-[10px] text-slate-400 font-bold mt-4 tracking-[0.2em] uppercase">MANDATORY FORENSIC STEP</p>
              </div>
            </motion.div>

            {/* Simulated Live NGO Map Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-10 rounded-[4rem] bg-slate-950 text-white relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                     <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active NGO Nodes</span>
                  </div>
                  <div className="flex flex-col gap-4">
                     {[
                       { name: 'Kolkata Central NGO', dist: '1.2km' },
                       { name: 'Hope Foundation', dist: '4.8km' }
                     ].map((ngo, i) => (
                       <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                          <span className="text-xs font-black tracking-tight">{ngo.name}</span>
                          <span className="text-[9px] font-black text-blue-400">{ngo.dist}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
