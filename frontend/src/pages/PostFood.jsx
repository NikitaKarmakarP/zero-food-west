import { useState, useEffect } from 'react';
import { UploadCloud, MapPin, Send, CheckCircle2, Navigation, ShieldCheck, Camera, Utensils, Sparkles, Clock, Globe, Zap, AlertTriangle, Activity, Target, Search, Cpu, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight, Terminal, Radar, Satellite, Lock, X, Info } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      {/* Cinematic Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm"
        >
           <Sparkles className="h-3 w-3" /> Broadcast Rescue Mission
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight"
        >
          Share your <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400">
            Surplus.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Deploy your surplus to our high-speed rescue network. We connect your node to verified NGOs with real-time tracking and safety assurance.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-12 rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] border border-white dark:border-white/10 backdrop-blur-xl shadow-2xl dark:shadow-none relative overflow-hidden"
            >
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-32 h-32 bg-emerald-500 text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-emerald-500/30"
                    >
                      <CheckCircle2 className="h-16 w-16" />
                    </motion.div>
                    <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Mission Active!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xl font-medium mb-12 max-w-sm mx-auto">Your donation is now being propagated across our network for rapid pickup.</p>
                    <button 
                      onClick={() => navigate('/track')}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-12 py-5 rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 transition-all shadow-xl text-sm uppercase tracking-widest"
                    >
                      Track Progress
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Readiness Progress */}
              <div className="mb-16 p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-black/20 border border-slate-100 dark:border-white/5 shadow-inner">
                 <div className="flex justify-between items-end mb-6">
                    <div>
                       <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Rescue Readiness</h3>
                       <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Protocol Verification Score</p>
                    </div>
                    <span className={`text-4xl font-black tabular-nums tracking-tighter ${readiness === 100 ? 'text-emerald-500' : 'text-blue-500'}`}>{readiness}%</span>
                 </div>
                 <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <motion.div 
                      animate={{ width: `\${readiness}%` }}
                      className={`h-full rounded-full transition-all duration-1000 \${readiness === 100 ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-blue-500 shadow-lg shadow-blue-500/20'}`}
                    />
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-2">Food Description</label>
                      <div className="relative group">
                         <input 
                           required 
                           type="text" 
                           placeholder="e.g. Mixed Fruit Platter" 
                           className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm"
                           value={formData.foodName}
                           onChange={e => setFormData({...formData, foodName: e.target.value})}
                         />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-2">Portion Count</label>
                      <div className="relative group">
                         <input 
                           required 
                           type="number" 
                           placeholder="Number of meals" 
                           className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm"
                           value={formData.quantity}
                           onChange={e => setFormData({...formData, quantity: e.target.value})}
                         />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-2">Dietary Type</label>
                   <div className="flex gap-4 p-2 bg-slate-100 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/5 shadow-inner">
                      {['veg', 'non-veg'].map(type => (
                        <button 
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, type})}
                          className={`flex-1 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all \${
                            formData.type === type ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-lg scale-[1.02]' : 'text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white'
                          }`}
                        >
                          {type === 'veg' ? '🌿 Vegetarian' : '🍗 Non-Vegetarian'}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-2">Pickup Address</label>
                   <div className="relative group">
                      <input 
                        required 
                        type="text" 
                        placeholder="Detailed address for the rescue team..." 
                        className="w-full pl-12 pr-6 py-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm"
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-2">Safety Deadline</label>
                   <div className="relative group">
                      <input 
                        required 
                        type="datetime-local" 
                        className="w-full pl-12 pr-6 py-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:bg-white dark:focus:bg-white/5 outline-none font-semibold text-slate-900 dark:text-white transition-all text-sm shadow-sm"
                        value={formData.expiryTime}
                        onChange={e => setFormData({...formData, expiryTime: e.target.value})}
                      />
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                   </div>
                </div>

                <div className="pt-10">
                   <button 
                     type="submit" 
                     disabled={isSubmitting || readiness < 100}
                     className={`w-full font-black py-6 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest flex items-center justify-center gap-4 group \${readiness === 100 ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25' : 'bg-slate-200 dark:bg-white/5 text-slate-400 cursor-not-allowed border border-slate-300 dark:border-white/10 shadow-none'}`}
                   >
                     {isSubmitting ? (
                        <div className="flex items-center gap-4">
                           <div className="h-5 w-5 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                           <span>Initiating...</span>
                        </div>
                     ) : (
                        <>
                           Broadcast Rescue <Send className={`h-5 w-5 \${readiness === 100 ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''} transition-transform`} />
                        </>
                     )}
                   </button>
                   {readiness < 100 && (
                     <p className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-6 flex items-center justify-center gap-3">
                        <AlertTriangle className="h-3 w-3" /> Complete all steps to enable broadcast
                     </p>
                   )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Visual AI Audit */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl"
            >
               <div className="flex items-center justify-between mb-10">
                  <div>
                     <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">AI Audit</h4>
                     <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                        {scanning === 'Verified' ? 'Node Verified' : 'Visual Scan Pending'}
                     </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center \${scanning === 'Verified' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                     <Camera className="h-6 w-6" />
                  </div>
               </div>
               
               <div 
                 onClick={simulateScan}
                 className={`aspect-square rounded-[2.5rem] border-2 border-dashed transition-all duration-700 flex flex-col items-center justify-center text-center p-8 cursor-pointer group relative overflow-hidden \${
                   scanning === 'Verified' ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 hover:border-emerald-500/30'
                 }`}
               >
                 {scanning === 'Analyzing...' && (
                    <motion.div 
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)] z-20"
                    />
                 )}

                 <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-700 relative z-10 mb-8 \${
                   scanning === 'Verified' ? 'bg-emerald-500 text-white shadow-lg rotate-6' : 'bg-white dark:bg-white/5 text-slate-300 dark:text-slate-500 shadow-sm'
                 }`}>
                    {scanning === 'Verified' ? <CheckCircle2 className="h-10 w-10" /> : <UploadCloud className="h-10 w-10 group-hover:scale-110 transition-transform" />}
                 </div>

                 <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest relative z-10">
                   {scanning === 'Verified' ? 'VERIFIED' : scanning === 'Analyzing...' ? 'SCANNING...' : 'UPLOAD PHOTO'}
                 </p>
                 <p className="text-[9px] text-slate-400 dark:text-slate-600 font-bold mt-3 tracking-widest uppercase relative z-10">Visual Safety Protocol</p>
               </div>
            </motion.div>

            {/* Safety Assurance Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] bg-slate-900 dark:bg-emerald-600 text-white shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck className="h-40 w-40" />
               </div>
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-10 shadow-lg backdrop-blur-md">
                     <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight leading-none uppercase italic">Safety <br/> First.</h3>
                  <p className="text-slate-400 dark:text-emerald-50 text-lg font-medium mb-10 leading-relaxed opacity-90">Every rescue mission is digitally fingerprinted for <span className="text-white font-black">100% liability protection</span>.</p>
                  
                  <div className="space-y-4">
                     {[
                       'Thermal Window Locked',
                       'Node Integrity Checked',
                       'Verified Logistics Only'
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-sm font-bold opacity-80">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* Network Insight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-[3rem] bg-white/70 dark:bg-white/[0.02] border border-white dark:border-white/10 backdrop-blur-xl shadow-xl"
            >
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                     <Radar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Rescue Radar</h3>
               </div>
               
               <div className="space-y-4">
                  {[
                    { name: 'Kolkata Central NGO', dist: '1.2km' },
                    { name: 'Hope Foundation', dist: '4.8km' }
                  ].map((ngo, i) => (
                    <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5 group hover:border-blue-500/30 transition-all cursor-pointer">
                       <div className="space-y-1">
                          <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{ngo.name}</span>
                          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{ngo.dist} away</div>
                       </div>
                       <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                  ))}
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
