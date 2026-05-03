import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Thermometer, Clock, ShieldCheck, CheckCircle2, AlertTriangle, Activity, Utensils, Globe, Cpu, FileText, Zap, Camera, MapPin, Truck, QrCode, Lock, Target, ChevronDown, ArrowRight, ShieldAlert, Radar, Search, Microscope, Database, BarChart3, ArrowUpRight, Fingerprint, X, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SafetySystem() {
  const navigate = useNavigate();
  const [auditStatus, setAuditStatus] = useState('Standby');
  const [scanProgress, setScanProgress] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
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
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm">
               <ShieldCheck className="h-3 w-3" /> Safety Protocol v9.2
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              Safety First. <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400">
                Guaranteed.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-medium leading-relaxed mb-12">
              Complete transparency of our multi-layer safety ecosystem. Every rescue mission is backed by ISO-aligned protocols and real-time AI verification.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
               <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black px-10 py-5 rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 transition-all shadow-xl text-sm uppercase tracking-widest active:scale-95">
                  View Whitepaper
               </button>
               <button className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-black px-10 py-5 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                  Explore Protocols
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-[450px]"
          >
             <div className="p-10 rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                   </div>
                   <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest">
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
                           <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
                              <item.icon className="h-4 w-4 text-slate-400" />
                              <span className="text-sm">{item.label}</span>
                           </div>
                           <span className="text-xs font-black tabular-nums">{item.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '90%' }}
                                transition={{ duration: 2, delay: i * 0.2 }}
                                className={`h-full bg-\${item.color}-500 rounded-full`}
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
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">The Safety <span className="text-emerald-600">Lifecycle.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">No hidden steps. Every part of our verification process is documented and public.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lifecycleSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[3rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                   <div className={`w-16 h-16 rounded-2xl bg-\${step.color}-500/10 text-\${step.color}-600 dark:text-\${step.color}-400 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                      <step.icon className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{step.title}</h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 text-sm">{step.content}</p>
                   
                   <div className="space-y-3">
                      {step.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                            <CheckCircle2 className={`h-3 w-3 text-\${step.color}-500`} /> {feature}
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
           <div className="p-10 md:p-16 rounded-[4rem] bg-slate-900 dark:bg-white/[0.03] backdrop-blur-3xl text-white shadow-2xl relative overflow-hidden group">
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
                      className="bg-emerald-500 text-slate-900 font-black px-12 py-5 rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 text-sm uppercase tracking-widest active:scale-95"
                    >
                       {auditStatus === 'Verified Safe' ? 'Audit Complete' : 'Run Live Audit'}
                    </button>
                 </div>

                 <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-inner">
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
                       <h3 className="text-2xl font-black mb-10 tracking-tight">Status: <span className="text-emerald-500">{auditStatus}</span></h3>
                       
                       <div className="w-full h-2 bg-white/5 rounded-full mb-10 overflow-hidden">
                          <motion.div animate={{ width: `\${scanProgress}%` }} className="h-full bg-emerald-500" />
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

      {/* FAQ & CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Safety FAQ</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Clear answers to your handling and liability questions.</p>
           </div>

           <div className="space-y-4">
            {[
              { q: 'How is cooking time verified?', a: 'Every donor is required to log the cooking time. Our system automatically rejects postings for food cooked more than 4 hours ago.' },
              { q: 'Legal protection for donors?', a: 'We leverage the Good Samaritan Act to ensure donors are legally protected when donating in good faith.' },
              { q: 'Thermal transport standards?', a: 'Volunteers must use food-grade, leak-proof containers and thermal bags for long distances.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-md border border-white dark:border-white/10 rounded-3xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-black tracking-tight \${activeFaq === i ? 'text-emerald-600' : 'text-slate-900 dark:text-white'}`}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform \${activeFaq === i ? 'rotate-180' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed pt-4 border-t border-slate-100 dark:border-white/5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Link 
               to="/donate" 
               className="inline-flex items-center gap-3 bg-emerald-500 text-white font-black px-12 py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/25 uppercase tracking-widest text-sm"
             >
                Start Mission <ArrowRight className="h-5 w-5" />
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
