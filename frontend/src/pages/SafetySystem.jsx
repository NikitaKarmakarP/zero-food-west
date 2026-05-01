import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Thermometer, Clock, ShieldCheck, CheckCircle2, AlertTriangle, Activity, Utensils, Globe, Cpu, FileText, Zap, Camera, MapPin, Truck, QrCode, Lock, Target, ChevronDown, ArrowRight, ShieldAlert, Radar, Search, Microscope, Database, BarChart3, ArrowUpRight, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SafetySystem() {
  const navigate = useNavigate();
  const [auditStatus, setAuditStatus] = useState('Standby');
  const [scanProgress, setScanProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [activeFaq, setActiveFaq] = useState(0); // Show first FAQ by default

  const toggleItem = (item) => {
    setCheckedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

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
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
      features: ['AI-Powered Spoilage Detection', 'Mandatory Timestamping', 'High-Res Photo Verification'],
      content: 'Our system uses computer vision to analyze donor photos for signs of spoilage or improper packaging before the post goes live. AI models are trained on thousands of food-safety datasets.'
    },
    {
      title: 'NGO Verification',
      icon: MapPin,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
      features: ['Proximity-Based Routing', 'Manual Admin Review', 'Donor History Check'],
      content: 'Local NGOs review every posting to ensure it meets their specific handling capabilities and is within a safe rescue radius. Verification nodes confirm NGO status.'
    },
    {
      title: 'Safe Transport',
      icon: Truck,
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-500/10',
      features: ['Cold-Chain Maintenance', 'Real-time GPS Tracking', 'Volunteer Temp-Logs'],
      content: 'Volunteers are equipped with thermal bags and must log temperature readings at three points during the transport phase. IoT sensors track drift in real-time.'
    },
    {
      title: 'Secure Handover',
      icon: QrCode,
      color: 'text-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      features: ['Double QR Confirmation', 'Recipient Rating System', 'Instant Safety Sign-off'],
      content: 'The rescue is only complete once both parties scan a unique QR code, confirming the food arrived in excellent condition. Digital handshakes seal the safety log.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 transition-colors duration-500">
      {/* Immersive Tech Hero */}
      <div className="relative min-h-[850px] w-full flex items-center overflow-hidden bg-slate-50 dark:bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576085898323-2183ba9b220b?auto=format&fit=crop&w=1920&q=80" 
            alt="Safety Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-[#020617]/80 dark:via-[#020617]/60 dark:to-[#020617]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-black mb-10 text-[10px] uppercase tracking-[0.4em]">
              <Lock className="h-4 w-4" /> Forensic Safety Protocol v9.2
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-[0.85]">
              Full Content <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600">Disclosure.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-200 text-2xl font-medium max-w-2xl leading-relaxed mb-14 opacity-90">
              Complete transparency of our multi-layer safety ecosystem. Below is the full technical breakdown of our <span className="text-emerald-500 font-black">ISO-aligned</span> protocols and <span className="text-emerald-500 font-black">AI verification</span> nodes.
            </p>
            <div className="flex flex-wrap gap-6">
               <button 
                onClick={() => navigate('/policy')}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-3xl transition-all shadow-2xl shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center gap-3"
               >
                  <FileText className="h-5 w-5" /> Safety Whitepaper
               </button>
               <button 
                onClick={() => document.getElementById('lifecycle').scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-950 dark:text-white font-black px-12 py-6 rounded-3xl backdrop-blur-xl border border-black/5 dark:border-white/10 transition-all flex items-center gap-3"
               >
                  <Activity className="h-5 w-5" /> Full Protocol List
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
             <div className="glass-panel p-12 rounded-[5rem] bg-white/70 dark:bg-slate-900/50 border border-black/5 dark:border-white/10 backdrop-blur-3xl shadow-4xl relative z-10 overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.8)]"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                   </div>
                   <div className="flex items-center gap-3">
                      <Radar className="h-4 w-4 text-emerald-500 animate-spin-slow" />
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.3em]">Live Node Monitoring</span>
                   </div>
                </div>
                
                <div className="space-y-8">
                   {[
                     { label: 'Thermal Shield Integrity', val: '99.8%', color: 'from-emerald-500 to-teal-500', icon: Thermometer, progress: 99.8 },
                     { label: 'AI Spoilage Scanner', val: 'Active', color: 'from-blue-500 to-indigo-500', icon: Cpu, progress: 100 },
                     { label: 'Network Latency', val: '1.4ms', color: 'from-amber-500 to-orange-500', icon: Zap, progress: 95 },
                   ].map((item, i) => (
                     <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 group">
                        <div className="flex justify-between items-center mb-5">
                           <div className="flex items-center gap-4">
                              <item.icon className="h-5 w-5 text-slate-400 dark:text-slate-400" />
                              <span className="text-slate-950 dark:text-white text-base font-black tracking-tight">{item.label}</span>
                           </div>
                           <span className="text-slate-950 dark:text-white text-sm font-black tabular-nums">{item.val}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                           <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${item.progress}%` }}
                                transition={{ duration: 2.5, delay: i * 0.2 }}
                                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Forensic Intelligence Ticker */}
      <div className="bg-slate-100 dark:bg-[#0B1121] border-y border-black/5 dark:border-white/5 py-10 overflow-hidden relative z-20">
         <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-16 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">
                 <span className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="h-4 w-4" /> SYSTEM STATUS: NOMINAL</span>
                 <span className="flex items-center gap-3 text-blue-600 dark:text-blue-400"><Globe className="h-4 w-4" /> GLOBAL CLUSTER: SYNCHRONIZED</span>
                 <span className="flex items-center gap-3 text-purple-600 dark:text-purple-400"><Microscope className="h-4 w-4" /> SPOILAGE-AI: READY</span>
                 <span className="flex items-center gap-3 text-amber-600 dark:text-amber-400"><Lock className="h-4 w-4" /> ENCRYPTION: 256-BIT</span>
              </div>
            ))}
         </div>
      </div>

      {/* Pro-Grade Safety Lifecycle Timeline */}
      <section className="py-60 bg-white dark:bg-[#0B1121] relative overflow-hidden" id="lifecycle">
        {/* Cinematic Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
           <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px]"></div>
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="max-w-4xl mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] mb-12"
              >
                 <Radar className="h-4 w-4 animate-pulse" /> Operational Transparency
              </motion.div>
              <h2 className="text-7xl md:text-9xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.85] mb-12">
                The Complete <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 italic">Safety Lifecycle.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl">
                No hidden steps. Every part of our verification process is documented and public. We maintain a <span className="text-slate-950 dark:text-white font-bold underline decoration-emerald-500/50">Zero-Compromise</span> standard.
              </p>
           </div>

           <div className="relative">
              {/* Vertical Connector Line */}
              <div className="absolute left-[40px] md:left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-slate-200 dark:via-slate-800 to-transparent z-0"></div>

              <div className="space-y-40">
                 {lifecycleSteps.map((step, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
                   >
                      {/* Technical Number Indicator */}
                      <div className="lg:col-span-1 relative z-10">
                         <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-black/5 dark:border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter relative z-10">
                               0{i+1}
                            </span>
                            {/* Scanning line effect */}
                            <motion.div 
                               animate={{ top: ['-100%', '200%'] }}
                               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-x-0 h-px bg-emerald-500/30 blur-sm"
                            />
                         </div>
                      </div>

                      {/* Content Card */}
                      <div className="lg:col-span-11 group">
                         <div className="glass-panel p-10 md:p-16 rounded-[4rem] bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden">
                            {/* Card Accent Glow */}
                            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-${step.color.split('-')[1]}-500/10 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                            
                            <div className="flex flex-col xl:flex-row gap-16 relative z-10">
                               <div className="xl:w-1/3">
                                  <div className={`w-24 h-24 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center mb-10 shadow-inner border border-black/5 dark:border-white/5`}>
                                     <step.icon className="h-12 w-12" />
                                  </div>
                                  <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tight uppercase mb-8 group-hover:text-emerald-500 transition-colors duration-500">
                                     {step.title}
                                  </h3>
                                  <div className="flex items-center gap-3">
                                     <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                                     <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Protocol Node Verified</span>
                                  </div>
                                </div>

                                <div className="xl:w-2/3">
                                   <p className="text-slate-600 dark:text-slate-300 text-2xl font-medium leading-relaxed mb-12 opacity-80">
                                      {step.content}
                                   </p>
                                   
                                   {/* Bento Grid Features */}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {step.features.map((feature, idx) => (
                                         <div 
                                           key={idx} 
                                           className="flex items-center gap-5 p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-emerald-50 dark:hover:bg-white/10 transition-all group/feat shadow-sm"
                                         >
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/feat:bg-emerald-500 transition-colors">
                                               <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 group-hover/feat:text-white transition-colors" />
                                            </div>
                                            <span className="text-base font-black text-slate-950 dark:text-slate-200 tracking-tight">{feature}</span>
                                         </div>
                                      ))}
                                   </div>
                                </div>
                            </div>
                         </div>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Forensic Audit Simulator */}
      <section className="py-40 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white overflow-hidden transition-colors duration-500" id="protocols">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12 text-slate-950 dark:text-white">
                Live Audit <br/> <span className="text-emerald-500">Node Cluster.</span>
              </h2>
              <div className="space-y-12 mb-16">
                 {[
                   { icon: Camera, title: "Optical Inspection", desc: "Computer vision nodes scan for molecular spoilage." },
                   { icon: Database, title: "Ledger Verification", desc: "Donation history cross-referenced against NGO data." },
                   { icon: Thermometer, title: "IOT Telemetry", desc: "Real-time thermal monitoring during transit." }
                 ].map((node, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                         <node.icon className="h-8 w-8 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                         <h4 className="text-2xl font-black mb-2 text-slate-950 dark:text-white">{node.title}</h4>
                         <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{node.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <button 
                onClick={runAudit}
                disabled={auditStatus === 'Analyzing...'}
                className="bg-emerald-500 text-slate-950 font-black px-16 py-8 rounded-[2.5rem] text-2xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30"
              >
                 {auditStatus === 'Verified Safe' ? 'SCAN COMPLETE' : 'INITIALIZE SYSTEM AUDIT'}
              </button>
           </div>
           
           <div className="lg:w-1/2 w-full">
              <div className="bg-white dark:bg-white/5 backdrop-blur-3xl p-16 rounded-[5rem] border border-black/5 dark:border-white/10 relative overflow-hidden shadow-4xl">
                 {auditStatus === 'Analyzing...' && (
                   <motion.div 
                     animate={{ top: ['0%', '100%'] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-x-0 h-1 bg-emerald-500 shadow-[0_0_20px_rgba(52,211,153,0.8)] z-20"
                   />
                 )}
                 <div className="relative z-10 text-center">
                    <div className="w-32 h-32 rounded-[3rem] bg-slate-50 dark:bg-white/10 flex items-center justify-center mx-auto mb-10 shadow-inner">
                       {auditStatus === 'Verified Safe' ? <ShieldCheck className="h-16 w-16 text-emerald-500" /> : <Activity className="h-16 w-16 text-emerald-500 animate-pulse" />}
                    </div>
                    <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.5em] mb-4">Verification Node #BW-9402</div>
                    <h3 className="text-4xl font-black mb-12 text-slate-950 dark:text-white">Cluster Response: {auditStatus}</h3>
                    <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full mb-12 overflow-hidden">
                       <motion.div animate={{ width: `${scanProgress}%` }} className="h-full bg-emerald-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-left border-t border-black/5 dark:border-white/10 pt-12">
                       <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Purity Matrix</div>
                          <div className="text-2xl font-black text-slate-950 dark:text-white">99.4%</div>
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Node Latency</div>
                          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">0.8ms</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Forensic Checklist - Adaptive Theme */}
      <div className="bg-white dark:bg-[#0B1121] py-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-24">
              <h2 className="text-6xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-none mb-8">The Safety <span className="text-emerald-500 italic">Mandate.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-2xl font-medium max-w-2xl mx-auto">Every donor must acknowledge these critical points before every donation mission.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Food is untainted and fresh',
                'Separated by Veg / Non-Veg',
                'Packaged in food-grade containers',
                'No room-temperature exposure > 2h',
                'Properly labeled with cooking time',
                'Free from common allergens'
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-6 p-10 bg-slate-50 dark:bg-white/[0.02] rounded-[3rem] border border-black/5 dark:border-white/5 shadow-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <span className="font-black text-xl text-slate-950 dark:text-white uppercase tracking-wider leading-tight">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Global Certification Matrix - All Info Visible */}
      <div className="max-w-7xl mx-auto px-4 mt-48 pb-20">
         <div className="bg-slate-50 dark:bg-slate-950 p-16 md:p-32 rounded-[6rem] text-center relative overflow-hidden border border-black/5 dark:border-white/5 shadow-4xl">
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b98110,transparent_70%)]"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
            </div>
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] mb-16 backdrop-blur-xl shadow-sm">
                  <ShieldCheck className="h-4 w-4" /> Global Compliance Ledger
               </div>

               <h2 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white mb-24 tracking-tighter leading-none">
                 Global <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600">Certification Ledger.</span>
               </h2>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {[
                    { label: 'ISO 22000', sub: 'READY NODE', desc: 'Food Safety Management', icon: ShieldCheck, color: 'emerald' },
                    { label: 'HACCP', sub: 'LOGISTICS', desc: 'Hazard Analysis Protocol', icon: Activity, color: 'blue' },
                    { label: 'FDA', sub: 'COMPLIANT', desc: 'Regulatory Alignment', icon: Lock, color: 'teal' },
                    { label: 'WHO', sub: 'PROTOCOLS', desc: 'Global Health Standards', icon: Globe, color: 'sky' }
                  ].map((cert, i) => (
                    <div key={i} className="bg-white dark:bg-white/5 backdrop-blur-3xl p-12 rounded-[3rem] border border-black/5 dark:border-white/10 flex flex-col items-center shadow-sm">
                        <div className={`w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8`}>
                           <cert.icon className="h-8 w-8" />
                        </div>
                        <span className="text-4xl font-black text-slate-950 dark:text-white mb-2 tracking-tighter">{cert.label}</span>
                        <div className="h-px w-8 bg-slate-200 dark:bg-slate-800 mb-4"></div>
                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">{cert.sub}</span>
                        <span className="text-[11px] font-bold text-emerald-500/60 uppercase tracking-widest">{cert.desc}</span>
                    </div>
                  ))}
               </div>

               <div className="mt-32 pt-16 border-t border-black/5 dark:border-white/5 flex flex-col items-center gap-6">
                  <div className="flex items-center gap-8 opacity-20 dark:opacity-40">
                     <Database className="h-6 w-6 text-slate-950 dark:text-white" />
                     <Fingerprint className="h-6 w-6 text-slate-950 dark:text-white" />
                     <Target className="h-6 w-6 text-slate-950 dark:text-white" />
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.6em] max-w-2xl leading-relaxed">
                    Network integrity verified by <span className="text-slate-950 dark:text-slate-400">ZeroWaste Security Node Cluster</span> • Audit Trail: #BW-94022
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Safety FAQ - Adaptive Theme */}
      <div className="bg-white dark:bg-[#0B1121] py-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-24">
             <h2 className="text-6xl font-black text-slate-950 dark:text-white tracking-tight mb-6">Safety <span className="text-emerald-500">FAQ.</span></h2>
             <p className="text-slate-500 dark:text-slate-400 text-xl font-medium opacity-80">Full disclosure of our handling and liability protocols.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: 'How is cooking time verified?', a: 'Every donor is required to log the cooking time. Our system automatically rejects postings for food cooked more than 4 hours ago if it hasn\'t been refrigerated.' },
              { q: 'Legal protection for donors?', a: 'We leverage the Good Samaritan Act to ensure donors are legally protected when donating in good faith. Our platform documents every safety step for added security.' },
              { q: 'Thermal transport standards?', a: 'Volunteers must use food-grade, leak-proof containers. For longer distances, our thermal bags maintain safe temperatures for up to 3 hours.' },
              { q: 'What happens if issues occur?', a: 'We maintain 100% digital traceability. Every batch is linked to unique IDs. If an issue is reported, we can immediately identify and pause all related nodes.' }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] overflow-hidden transition-all shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-10 flex items-center justify-between text-left group"
                >
                  <span className={`text-2xl font-black tracking-tight ${activeFaq === i ? 'text-emerald-500' : 'text-slate-950 dark:text-white'}`}>{faq.q}</span>
                  <ChevronDown className={`h-6 w-6 transition-transform ${activeFaq === i ? 'rotate-180 text-emerald-500' : 'text-slate-400 dark:text-slate-500'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-10 pb-10"
                    >
                      <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed pt-8 border-t border-black/5 dark:border-white/5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-[#020617] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-950 dark:bg-slate-900 rounded-[5rem] p-20 md:p-32 text-center text-white relative overflow-hidden shadow-4xl">
             <div className="relative z-10">
                <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
                  Ready to <span className="text-emerald-500 italic">Donate?</span>
                </h2>
                <p className="text-slate-400 text-2xl font-medium mb-16 max-w-3xl mx-auto">
                  Now that you've seen the rigor behind our safety systems, join the mission.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                   <Link 
                     to="/donate" 
                     className="bg-emerald-500 text-slate-950 font-black px-16 py-8 rounded-[3rem] text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-500/20"
                   >
                      Start Mission
                   </Link>
                   <Link 
                     to="/dashboard" 
                     className="bg-white/5 text-white font-black px-16 py-8 rounded-[3rem] text-2xl border border-white/10 hover:bg-white/10 transition-all"
                   >
                      Dashboard
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
