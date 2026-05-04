import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Thermometer, Clock, ShieldCheck, CheckCircle2, AlertTriangle, Activity, Utensils, Globe, Cpu, FileText, Zap, Camera, MapPin, Truck, QrCode, Lock, Target, ChevronDown, ArrowRight, ShieldAlert, Radar, Search, Microscope, Database, BarChart3, ArrowUpRight, Fingerprint, X, Info, Sparkles, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SafetySystem() {
  const navigate = useNavigate();
  const [auditStatus, setAuditStatus] = useState('Standby');
  const [scanProgress, setScanProgress] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [showWhitepaper, setShowWhitepaper] = useState(false);

  const runAudit = () => {
    setAuditStatus('Analyzing...');
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAuditStatus('Verified Safe');
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const lifecycleSteps = [
    {
      title: 'Digital Posting',
      icon: Camera,
      color: 'blue',
      features: ['AI Spoilage Detection', 'Mandatory Timestamping', 'Visual Verification'],
      content: 'Our system uses computer vision to analyze donor photos for signs of spoilage or improper packaging before the post goes live.'
    },
    {
      title: 'NGO Verification',
      icon: MapPin,
      color: 'emerald',
      features: ['Proximity Routing', 'Admin Review', 'Donor History Check'],
      content: 'Local NGOs review every posting to ensure it meets their specific handling capabilities and is within a safe rescue radius.'
    },
    {
      title: 'Safe Transport',
      icon: Truck,
      color: 'amber',
      features: ['Cold-Chain Maintenance', 'GPS Tracking', 'Volunteer Temp-Logs'],
      content: 'Volunteers are equipped with thermal bags and must log temperature readings at multiple points during transport.'
    },
    {
      title: 'Secure Handover',
      icon: QrCode,
      color: 'purple',
      features: ['Double QR Confirmation', 'Recipient Rating', 'Instant Sign-off'],
      content: 'The rescue is only complete once both parties scan a unique QR code, confirming the food arrived in excellent condition.'
    }
  ];

  const scrollToLifecycle = () => {
    const element = document.getElementById('lifecycle-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 font-sans selection:bg-emerald-500/10 transition-colors duration-500 relative overflow-hidden">
      
      {/* Whitepaper Modal */}
      <AnimatePresence>
        {showWhitepaper && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
             <div 
               className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
               onClick={() => setShowWhitepaper(false)}
             ></div>
             
             <motion.div 
               initial={{ scale: 0.9, y: 50, opacity: 0 }}
               animate={{ scale: 1, y: 0, opacity: 1 }}
               exit={{ scale: 0.9, y: 50, opacity: 0 }}
               className="relative w-full max-w-5xl max-h-[85vh] bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
             >
                <div className="p-8 md:p-12 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                   <div>
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">ZeroWaste_Protocol_v9.2</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic">Mission_Whitepaper</h2>
                   </div>
                   <button 
                     onClick={() => setShowWhitepaper(false)}
                     className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-all hover:scale-110"
                   >
                      <X className="h-6 w-6" />
                   </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-16 custom-scrollbar">
                   <div className="grid md:grid-cols-2 gap-12">
                      <div>
                         <h4 className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 italic">/// 01_EXECUTIVE_SUMMARY</h4>
                         <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            The ZeroWaste Network operates as a decentralized, forensic-grade infrastructure for the rapid recovery and redistribution of urban surplus food. By bridging the gap between surplus nodes (restaurants, events) and deficit nodes (NGOs), we eliminate waste with 99.8% safety assurance.
                         </p>
                      </div>
                      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                         <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-6 italic">/// 02_CORE_ARCHITECTURE</h4>
                         <div className="space-y-4">
                            {[
                              { label: 'Network Latency', val: '1.4ms' },
                              { label: 'Node Verification', val: 'Biometric' },
                              { label: 'Liability Protection', val: 'Forensic' },
                              { label: 'Impact Factor', val: '2.5x Multiplier' }
                            ].map((stat, i) => (
                              <div key={i} className="flex justify-between items-center">
                                 <span className="text-xs font-bold text-slate-500">{stat.label}</span>
                                 <span className="text-sm font-black text-slate-950 font-mono">{stat.val}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <div className="space-y-10">
                      <h4 className="text-xs font-black text-amber-600 uppercase tracking-[0.3em] italic">/// 03_OPERATIONAL_PROTOCOLS</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                         {[
                           { title: 'Thermal Windowing', desc: '4-hour maximum threshold for prepared meals.' },
                           { title: 'Chain of Custody', desc: 'Digital fingerprinting at every node transition.' },
                           { title: 'Forensic Audit', desc: 'Real-time spoilage detection via AI computer vision.' },
                           { title: 'NGO Intercept', desc: 'GPS-optimized routing for cold-chain integrity.' },
                           { title: 'Node Integrity', desc: 'Continuous rating system for all network participants.' },
                           { title: 'Matrix Shield', desc: 'Automated liability coverage for good-faith donors.' }
                         ].map((item, i) => (
                           <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-emerald-500/30 transition-colors group">
                              <h5 className="text-sm font-black text-slate-950 mb-2 uppercase italic tracking-tight group-hover:text-emerald-600 transition-colors">{item.title}</h5>
                              <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-10 rounded-[3rem] bg-emerald-600 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                         <Globe className="h-40 w-40" />
                      </div>
                      <div className="relative z-10">
                         <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-white/70">/// GLOBAL_IMPACT_PROJECTION</h4>
                         <p className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-8 italic uppercase">Targeting 100% surplus recovery in urban centers by 2028.</p>
                         <button className="bg-white text-slate-950 font-black px-8 py-4 rounded-xl text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all">Download_Full_PDF</button>
                      </div>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Ambient Backgrounds (Light Mode) */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/5 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-teal-500/5 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Cinematic Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm italic">
               <ShieldCheck className="h-3 w-3" /> Safety Protocol v9.2
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 mb-8 tracking-tight leading-tight uppercase italic">
              Safety First. <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700">
                Guaranteed.
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed mb-12">
              Complete transparency of our multi-layer safety ecosystem. Every rescue mission is backed by ISO-aligned protocols and real-time AI verification.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
               <button 
                 onClick={() => setShowWhitepaper(true)}
                 className="bg-slate-950 text-white font-black px-10 py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl text-sm uppercase tracking-widest active:scale-95 italic"
               >
                  View Whitepaper
               </button>
               <button 
                 onClick={scrollToLifecycle}
                 className="bg-white border border-slate-200 text-slate-700 font-black px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all text-sm uppercase tracking-widest active:scale-95 italic"
               >
                  Explore Protocols
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-[450px]"
          >
             <div className="p-10 rounded-[3.5rem] bg-white border border-slate-100 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                   </div>
                   <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                      <Radar className="h-4 w-4 animate-spin-slow" /> Live Status
                   </div>
                </div>
                
                <div className="space-y-8">
                   {[
                     { label: 'Thermal Shield', val: '99.8%', color: 'emerald', icon: Thermometer },
                     { label: 'AI Spoilage Audit', val: 'Active', color: 'blue', icon: Cpu },
                     { label: 'Latency', val: '1.4ms', color: 'amber', icon: Zap },
                   ].map((item, i) => (
                     <div key={i} className="group">
                        <div className="flex justify-between items-center mb-4">
                           <div className="flex items-center gap-3 text-slate-950 font-bold">
                              <item.icon className="h-4 w-4 text-slate-400" />
                              <span className="text-sm">{item.label}</span>
                           </div>
                           <span className="text-xs font-black tabular-nums">{item.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '90%' }}
                                transition={{ duration: 2, delay: i * 0.2 }}
                                className={`h-full bg-${item.color === 'emerald' ? 'emerald-500' : item.color === 'blue' ? 'blue-500' : 'amber-500'} rounded-full`}
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Lifecycle Section */}
      <section id="lifecycle-section" className="py-24 relative z-10 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight uppercase italic">The Safety <span className="text-emerald-600">Lifecycle.</span></h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">No hidden steps. Every part of our verification process is documented and public.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lifecycleSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                   <div className={`w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                      <step.icon className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight uppercase italic">{step.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">{step.content}</p>
                   
                   <div className="space-y-3">
                      {step.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest italic">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {feature}
                         </div>
                      ))}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Audit System Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="p-10 md:p-16 rounded-[4rem] bg-slate-950 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <ShieldCheck className="h-64 w-64" />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-none uppercase italic">Live System <br/> Audit.</h2>
                    <p className="text-slate-400 text-xl font-medium mb-12 leading-relaxed opacity-80">Initialize a forensic audit of our node cluster to verify real-time safety metrics.</p>
                    
                    <button 
                      onClick={runAudit}
                      disabled={auditStatus === 'Analyzing...'}
                      className="bg-emerald-500 text-slate-950 font-black px-12 py-5 rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 text-sm uppercase tracking-widest active:scale-95 italic"
                    >
                       {auditStatus === 'Verified Safe' ? 'Audit Complete' : 'Run Live Audit'}
                    </button>
                 </div>

                 <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-inner relative">
                    {auditStatus === 'Analyzing...' && (
                       <motion.div 
                         animate={{ top: ['0%', '100%'] }}
                         transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                         className="absolute inset-x-0 h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)] z-20"
                       />
                    )}
                    <div className="text-center">
                       <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
                          {auditStatus === 'Verified Safe' ? <ShieldCheck className="h-10 w-10 text-emerald-500" /> : <Activity className="h-10 w-10 text-emerald-500 animate-pulse" />}
                       </div>
                       <h3 className="text-2xl font-black mb-10 tracking-tight uppercase italic">Status: <span className="text-emerald-500">{auditStatus}</span></h3>
                       
                       <div className="w-full h-2 bg-white/5 rounded-full mb-10 overflow-hidden">
                          <motion.div animate={{ width: `${scanProgress}%` }} className="h-full bg-emerald-500" />
                       </div>

                       <div className="grid grid-cols-2 gap-6 text-left">
                          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                             <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Purity Matrix</div>
                             <div className="text-xl font-black tabular-nums">99.4%</div>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                             <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Latency</div>
                             <div className="text-xl font-black tabular-nums text-emerald-400">0.8ms</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Safety Intelligence Hub (FAQ) */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-emerald-600"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Intelligence_Repository</span>
                 </div>
                 <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight uppercase italic leading-none">Safety_FAQ.</h2>
                 <p className="text-slate-500 text-xl font-medium mt-6 leading-relaxed">
                    Clear answers to your handling and liability questions, backed by international standards.
                 </p>
              </div>
              <div className="hidden lg:block text-right">
                 <div className="text-5xl font-black text-slate-100 tracking-tighter uppercase italic leading-none select-none">
                    QUERY_TERMINAL
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                q: 'How is cooking time verified?', 
                a: 'Every donor is required to log the cooking time. Our system automatically rejects postings for food cooked more than 4 hours ago, ensuring maximum bio-integrity.',
                icon: Clock,
                color: 'emerald',
                tag: 'TEMPORAL_VALIDATION'
              },
              { 
                q: 'Legal protection for donors?', 
                a: 'We leverage the Good Samaritan Act to ensure donors are legally protected when donating in good faith. Our platform fingerprints every transaction for forensic liability coverage.',
                icon: ShieldCheck,
                color: 'blue',
                tag: 'LEGAL_SHIELD'
              },
              { 
                q: 'Thermal transport standards?', 
                a: 'Volunteers must use food-grade, leak-proof containers and thermal bags. Cold-chain integrity is monitored via digital log-entry at each transit node.',
                icon: Thermometer,
                color: 'amber',
                tag: 'THERMAL_INTEGRITY'
              },
              { 
                q: 'NGO Intercept Protocols?', 
                a: 'NGOs are geofenced to rescue within a 5km radius to ensure minimal exposure time. Emergency overrides are available for high-volume cold-chain assets.',
                icon: Radar,
                color: 'rose',
                tag: 'NODE_ROUTING'
              },
              { 
                q: 'System Spoilage Audit?', 
                a: 'Our AI engine analyzes visual telemetry (photos) for texture and color anomalies, flagging potential spoilage before human eyes even see the post.',
                icon: Microscope,
                color: 'purple',
                tag: 'AI_VERIFICATION'
              },
              { 
                q: 'Chain of Custody?', 
                a: 'Every handover requires a dual-QR handshake, creating an immutable digital trail from donor to recipient node.',
                icon: Fingerprint,
                color: 'teal',
                tag: 'DATA_IMMUTABILITY'
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className={`group relative p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer ${
                  activeFaq === i 
                  ? 'bg-white border-emerald-500 shadow-2xl scale-[1.02]' 
                  : 'bg-slate-50 border-slate-100 hover:border-emerald-500/30 shadow-sm'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ${
                  activeFaq === i ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-100 text-slate-400'
                }`}>
                  <faq.icon className="h-7 w-7" />
                </div>

                <div className="flex justify-between items-start gap-4 mb-4">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">{faq.tag}</span>
                   {activeFaq === i && (
                     <motion.div layoutId="glow" className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,1)]"></motion.div>
                   )}
                </div>

                <h3 className={`text-xl font-black tracking-tight mb-6 transition-colors ${
                  activeFaq === i ? 'text-slate-950' : 'text-slate-800'
                } uppercase italic`}>
                   {faq.q}
                </h3>

                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="text-slate-600 font-medium leading-relaxed pb-4 border-t border-slate-100 pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {activeFaq !== i && (
                  <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Plus className="h-5 w-5 text-emerald-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-block p-1 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-xl">
                <Link 
                  to="/donate" 
                  className="inline-flex items-center gap-4 bg-slate-950 text-white font-black px-12 py-6 rounded-[2.2rem] hover:bg-emerald-600 transition-all shadow-xl uppercase tracking-widest text-xs group italic"
                >
                   Initiate_Protocol <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
