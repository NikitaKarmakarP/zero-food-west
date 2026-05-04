import { useState, useEffect } from 'react';
import { 
  UploadCloud, MapPin, Send, CheckCircle2, Navigation, ShieldCheck, 
  Camera, Utensils, Sparkles, Clock, Globe, Zap, AlertTriangle, 
  Activity, Target, Search, Cpu, ChevronRight, ChevronDown, 
  ArrowRight, ArrowUpRight, Terminal, Radar, Satellite, Lock, X, Info,
  Box, Truck, Droplets, Thermometer, Database, History, TrendingUp, Filter
} from 'lucide-react';
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
    priority: 'Normal',
    temp: 'Ambient'
  });
  
  const [activeTab, setActiveTab] = useState('mission');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [readiness, setReadiness] = useState(0);
  const [protocolId, setProtocolId] = useState('');
  const navigate = useNavigate();

  const { addDonation } = useAppContext();

  useEffect(() => {
    // Generate a tactical protocol ID
    setProtocolId(`RW-${Math.random().toString(36).substr(2, 6).toUpperCase()}-2026`);
  }, []);

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
    }, 2500);
  };

  const simulateScan = () => {
    setScanning('Analyzing...');
    setTimeout(() => setScanning('Verified'), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 pb-32 font-sans selection:bg-emerald-500/10 overflow-hidden relative">
      
      {/* --- Advanced Tactical Background (Light Mode) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#10b9810d_0%,transparent:70%)]"></div>
        
        {/* Floating Data Nodes */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-10 text-[8px] font-mono text-emerald-600/40 uppercase tracking-[0.5em] hidden lg:block"
        >
          {["Uplink: Connected", "Nodes: Active", "Latency: 24ms", "Protocol: v8.4.2"].map((s, i) => (
            <div key={i} className="mb-2">/// {s}</div>
          ))}
        </motion.div>

        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-slate-900/[0.03] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-900/[0.02] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Header: Mission Control --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="px-4 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md">
                  Broadcast_Console
               </div>
               <div className="h-px w-12 bg-slate-900/10"></div>
               <span className="text-slate-400 font-mono text-[10px] tracking-widest">{protocolId}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase italic text-slate-950">
              Initiate <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                Rescue_Mission.
              </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed border-l-2 border-emerald-500/20 pl-8">
               Deploy high-integrity surplus food to the regional node grid. Bridge the gap between surplus and community nourishment with forensic precision.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex flex-col items-end gap-4"
          >
             <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 backdrop-blur-3xl shadow-xl text-right group hover:border-emerald-500/30 transition-all duration-700">
                <div className="text-5xl font-black text-slate-950 tracking-tighter tabular-nums italic mb-2">99.2<span className="text-emerald-600 text-xl ml-1">%</span></div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Network_Reliability_Index</div>
                <div className="mt-4 h-[2px] w-full bg-slate-200 overflow-hidden rounded-full">
                   <motion.div 
                     animate={{ x: ['-100%', '100%'] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="h-full w-1/2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                   />
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- Main Interface --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mission Configuration (Left Panel) */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-[4rem] shadow-2xl shadow-slate-200/50 overflow-hidden relative"
            >
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
                    animate={{ opacity: 1, backdropFilter: 'blur(20px)' }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-40 h-40 bg-emerald-600 text-white rounded-[3rem] flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(16,185,129,0.3)]"
                    >
                      <CheckCircle2 className="h-20 w-20" />
                    </motion.div>
                    <h3 className="text-5xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Mission_Broadcasted.</h3>
                    <p className="text-slate-500 text-xl font-medium mb-12 max-w-sm mx-auto">Your node is now live. Standby for regional NGO intercept coordinates.</p>
                    <button 
                      onClick={() => navigate('/track')}
                      className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] hover:bg-emerald-600 transition-all shadow-xl text-[10px] uppercase tracking-[0.4em] italic active:scale-95"
                    >
                      Enter_Tracking_Room
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interface Navigation */}
              <div className="flex border-b border-slate-100">
                 {['mission', 'logistics'].map(tab => (
                   <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`flex-1 py-8 text-[10px] font-black uppercase tracking-[0.5em] transition-all relative ${
                       activeTab === tab ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
                     }`}
                   >
                      {tab}_Parameters
                      {activeTab === tab && (
                        <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-500" />
                      )}
                   </button>
                 ))}
              </div>

              <div className="p-12 md:p-16">
                 {activeTab === 'mission' ? (
                   <form onSubmit={handleSubmit} className="space-y-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-2 italic">
                              <Target className="h-3 w-3 text-emerald-600" /> Food_Designation
                           </label>
                           <div className="relative group">
                              <input 
                                required 
                                type="text" 
                                placeholder="E.G. FRESH_PRODUCE_BUNDLE" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-6 text-lg font-black text-slate-900 placeholder-slate-300 focus:border-emerald-500/50 focus:bg-white transition-all outline-none italic"
                                value={formData.foodName}
                                onChange={e => setFormData({...formData, foodName: e.target.value})}
                              />
                           </div>
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-2 italic">
                              <Database className="h-3 w-3 text-emerald-600" /> Quantity_Metrics
                           </label>
                           <div className="relative group">
                              <input 
                                required 
                                type="number" 
                                placeholder="PORTIONS" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-6 text-lg font-black text-slate-900 placeholder-slate-300 focus:border-emerald-500/50 focus:bg-white transition-all outline-none tabular-nums italic"
                                value={formData.quantity}
                                onChange={e => setFormData({...formData, quantity: e.target.value})}
                              />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 italic">Dietary_Signature</label>
                        <div className="grid grid-cols-2 gap-6 p-3 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                           {[
                             { id: 'veg', label: 'Vegetarian', icon: Sparkles },
                             { id: 'non-veg', label: 'Non-Vegetarian', icon: Zap }
                           ].map(type => (
                             <button 
                               key={type.id}
                               type="button"
                               onClick={() => setFormData({...formData, type: type.id})}
                               className={`py-6 rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] transition-all flex items-center justify-center gap-4 italic ${
                                 formData.type === type.id ? 'bg-white text-slate-950 shadow-xl scale-[1.02] border border-slate-100' : 'text-slate-400 hover:bg-white/50'
                               }`}
                             >
                               <type.icon className="h-4 w-4" /> {type.label}
                             </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-2 italic">
                           <MapPin className="h-3 w-3 text-emerald-600" /> Geolocation_Uplink
                        </label>
                        <div className="relative group">
                           <input 
                             required 
                             type="text" 
                             placeholder="NODE_PHYSICAL_ADDRESS" 
                             className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-6 text-lg font-black text-slate-900 placeholder-slate-300 focus:border-emerald-500/50 transition-all outline-none italic"
                             value={formData.address}
                             onChange={e => setFormData({...formData, address: e.target.value})}
                           />
                           <div className="absolute right-8 top-1/2 -translate-y-1/2">
                              <Navigation className="h-5 w-5 text-emerald-600 animate-pulse" />
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-2 italic">
                              <Clock className="h-3 w-3 text-emerald-600" /> Bio_Safety_Deadline
                           </label>
                           <input 
                             required 
                             type="datetime-local" 
                             className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-6 text-lg font-black text-slate-900 focus:border-emerald-500/50 transition-all outline-none italic"
                             value={formData.expiryTime}
                             onChange={e => setFormData({...formData, expiryTime: e.target.value})}
                           />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2 flex items-center gap-2 italic">
                              <Thermometer className="h-3 w-3 text-emerald-600" /> Storage_Temperature
                           </label>
                           <select 
                             className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-6 text-lg font-black text-slate-900 focus:border-emerald-500/50 transition-all outline-none italic appearance-none"
                             value={formData.temp}
                             onChange={e => setFormData({...formData, temp: e.target.value})}
                           >
                              <option>AMBIENT_STABLE</option>
                              <option>COLD_CHAIN</option>
                              <option>FROZEN_SECURE</option>
                           </select>
                        </div>
                     </div>

                     <div className="pt-10 flex flex-col md:flex-row items-center gap-8">
                        <button 
                          type="submit" 
                          disabled={isSubmitting || readiness < 100}
                          className={`flex-1 w-full font-black py-7 rounded-[2rem] transition-all shadow-xl text-[10px] uppercase tracking-[0.5em] flex items-center justify-center gap-6 group italic overflow-hidden relative ${
                            readiness === 100 
                            ? 'bg-slate-950 text-white hover:bg-emerald-600' 
                            : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                          }`}
                        >
                          <div className="relative z-10 flex items-center gap-6">
                            {isSubmitting ? 'INITIALIZING_RESCUE...' : 'ACTIVATE_PROTOCOL'} 
                            <Send className={`h-5 w-5 ${readiness === 100 ? 'group-hover:translate-x-2 group-hover:-translate-y-2' : ''} transition-transform`} />
                          </div>
                          {readiness === 100 && (
                            <motion.div 
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                            />
                          )}
                        </button>
                        
                        <div className="flex-1 text-center md:text-left">
                           <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Mission_Status</div>
                           <div className={`text-xs font-bold uppercase tracking-widest ${readiness === 100 ? 'text-emerald-600' : 'text-slate-300'}`}>
                              {readiness === 100 ? 'READY_FOR_UPLINK' : 'AWAITING_PARAMETERS'}
                           </div>
                        </div>
                     </div>
                   </form>
                 ) : (
                   <div className="space-y-12">
                      <div className="p-12 rounded-[3.5rem] bg-emerald-50 border border-emerald-100 text-center">
                         <Truck className="h-16 w-16 text-emerald-600 mx-auto mb-8 animate-bounce" />
                         <h3 className="text-3xl font-black text-slate-950 mb-4 uppercase italic">Advanced_Logistics</h3>
                         <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">Our AI engine automatically routes the nearest cold-chain asset to your location upon activation.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {[
                           { label: "Transit Window", val: "90 Mins", icon: Clock },
                           { label: "Security Level", val: "Forensic", icon: Lock },
                           { label: "Chain Check", val: "Thermal", icon: Thermometer },
                           { label: "Uplink Type", val: "Satellite", icon: Satellite }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-6">
                              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 shadow-sm">
                                 <item.icon className="h-6 w-6" />
                              </div>
                              <div>
                                 <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">{item.label}</div>
                                 <div className="text-xl font-black text-slate-950 tracking-tighter uppercase italic">{item.val}</div>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                 )}
              </div>
            </motion.div>
          </div>

          {/* Tactical HUD (Right Panel) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Visual_Biometry_Audit */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[4rem] bg-white border border-slate-200 shadow-xl relative group overflow-hidden"
            >
               <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-4">
                     <div className={`w-3 h-3 rounded-full animate-pulse ${scanning === 'Verified' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                     <h4 className="text-lg font-black text-slate-950 uppercase italic tracking-tighter">Bio_Scan</h4>
                  </div>
                  <Cpu className="h-5 w-5 text-slate-400 group-hover:rotate-180 transition-transform duration-1000" />
               </div>
               
               <div 
                 onClick={simulateScan}
                 className={`aspect-square rounded-[3.5rem] border-2 border-dashed transition-all duration-1000 flex flex-col items-center justify-center text-center p-12 cursor-pointer relative overflow-hidden ${
                   scanning === 'Verified' ? 'bg-emerald-50 border-emerald-200 shadow-inner' : 'bg-slate-50 border-slate-200 hover:border-emerald-500/30'
                 }`}
               >
                 {scanning === 'Analyzing...' && (
                    <motion.div 
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-[2px] bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)] z-20"
                    />
                 )}

                 <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center transition-all duration-1000 relative z-10 mb-8 ${
                   scanning === 'Verified' ? 'bg-emerald-600 text-white shadow-xl rotate-12' : 'bg-white border border-slate-100 text-slate-300'
                 }`}>
                    {scanning === 'Verified' ? <CheckCircle2 className="h-12 w-12" /> : <Camera className="h-12 w-12" />}
                 </div>

                 <p className="text-xl font-black text-slate-950 uppercase tracking-[0.2em] relative z-10 italic">
                    {scanning === 'Verified' ? 'VERIFIED' : scanning === 'Analyzing...' ? 'AUDITING...' : 'UPLOAD_BIO_SCAN'}
                 </p>
                 <div className="mt-4 flex gap-1 relative z-10">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`w-4 h-1 rounded-full ${scanning === 'Verified' ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                    ))}
                 </div>
               </div>
               <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Protocol_Validation</span>
                     <span className="text-[10px] font-black text-emerald-600 italic">SUCCESS</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                     <motion.div 
                       animate={{ width: scanning === 'Verified' ? '100%' : '0%' }}
                       className="h-full bg-emerald-500"
                     />
                  </div>
               </div>
            </motion.div>

            {/* Tactical_Safety_Vault */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[4rem] bg-emerald-600 text-white shadow-xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-10 opacity-10">
                  <ShieldCheck className="h-56 w-56 -rotate-12" />
               </div>
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-white text-emerald-600 flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform">
                     <Lock className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic leading-none">Forensic_Safety.</h3>
                  <p className="text-white/80 text-lg font-medium mb-12 leading-relaxed">Your mission is digitally fingerprinted. 100% liability coverage active upon broadcast.</p>
                  
                  <div className="space-y-4">
                     {[
                       'Thermal Integrity Locked',
                       'Chain of Custody Active',
                       'Legal Node Protection'
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/70 italic">
                          <CheckCircle2 className="h-4 w-4" /> {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* Live_Radar_Feed */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[4rem] bg-white border border-slate-200 shadow-lg"
            >
               <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-blue-100 rounded-2xl animate-ping"></div>
                     <Radar className="h-7 w-7 animate-spin-slow" />
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter">Regional_Radar</h3>
                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Active_NGO_Nodes_Detected</p>
                  </div>
               </div>
               
               <div className="space-y-4 relative">
                  {[
                    { name: 'Kolkata Central Node', dist: '1.2km', status: 'ACTIVE' },
                    { name: 'Hope Relief Sector', dist: '4.8km', status: 'STANDBY' }
                  ].map((ngo, i) => (
                    <div key={i} className="flex justify-between items-center p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-blue-500/30 transition-all cursor-pointer">
                       <div className="space-y-2">
                          <span className="text-sm font-black text-slate-900 tracking-tight uppercase italic">{ngo.name}</span>
                          <div className="flex items-center gap-3">
                             <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{ngo.dist} OFFSET</span>
                             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                             <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest">{ngo.status}</span>
                          </div>
                       </div>
                       <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  ))}
               </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Persistent Decorative Tickers (Light) */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-white border-t border-slate-100 flex items-center overflow-hidden z-50">
         <div className="flex gap-20 animate-marquee whitespace-nowrap px-10">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] italic">MISSION_CONTROL_UPLINK_STABLE // SECTOR_{i*10}_CLEAR // PROTOCOL_V8.4.2</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
