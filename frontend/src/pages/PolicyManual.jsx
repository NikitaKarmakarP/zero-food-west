import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FileText, ArrowLeft, ShieldCheck, Scale, AlertCircle, CheckCircle2, Info, ChevronRight, BookOpen, Award, Zap, ShieldAlert, Target, Activity, Lock, Globe, Microscope, Database, BarChart3, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PolicyManual() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [activeSection, setActiveSection] = useState('quality');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    {
      id: 'quality',
      title: 'Food Quality Standards',
      icon: ShieldCheck,
      color: 'emerald',
      content: 'All donated food must be "fit for human consumption" as per local health codes. This includes being free from spoilage, contamination, or any foreign objects. Prepared foods must have been cooked to the appropriate internal temperatures (min 75°C for non-veg).',
      points: ['No cross-contamination', 'Fresh ingredients only', 'Proper thermal processing'],
      tag: 'ISO 22000'
    },
    {
      id: 'packaging',
      title: 'Packaging & Labeling',
      icon: FileText,
      color: 'blue',
      content: 'Donors must use food-grade, leak-proof containers. Labels must clearly state the food type (Veg/Non-Veg), major allergens, and the exact time of preparation. Batches without cooking timestamps will be auto-rejected.',
      points: ['Allergen warnings', 'Tamper-evident seals', 'Precise timestamps'],
      tag: 'HACCP Standard'
    },
    {
      id: 'window',
      title: 'The 2-Hour Window',
      icon: Info,
      color: 'amber',
      content: 'Non-refrigerated prepared food must be rescued and distributed within 2 hours of preparation. If refrigeration is used, the window extends to 24 hours, provided a consistent temperature of < 5°C is maintained during the entire cycle.',
      points: ['Cold chain integrity', 'Real-time monitoring', 'Instant logging'],
      tag: 'Thermal Protocol'
    },
    {
      id: 'legal',
      title: 'Legal Liability & Protection',
      icon: Scale,
      color: 'purple',
      content: 'Under the Good Samaritan Food Donation Act, donors are protected from civil and criminal liability when donating to non-profit organizations in good faith. Our platform logs act as forensic proof of your adherence to safety standards.',
      points: ['Civil immunity', 'Good faith protection', 'Digital traceability'],
      tag: 'Legal Shield'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 400;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pb-24 selection:bg-emerald-500/30 font-sans text-slate-950 dark:text-white transition-colors duration-500">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-left z-[100] shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        style={{ scaleX }}
      />

      {/* Immersive Hero Header */}
      <div className="relative pt-40 pb-64 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4 opacity-50 dark:opacity-100"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4 opacity-50 dark:opacity-100"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-[#020617]/50 to-white dark:to-[#020617]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-slate-950 dark:bg-white/5 border border-white/10 text-white dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] hover:bg-emerald-500 transition-all group backdrop-blur-3xl shadow-4xl active:scale-95"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Safety Core
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-32 h-32 bg-emerald-500/10 rounded-[2.8rem] flex items-center justify-center mx-auto mb-16 border border-emerald-500/20 backdrop-blur-3xl shadow-6xl relative group">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Fingerprint className="h-16 w-16 text-emerald-600 dark:text-emerald-400 relative z-10 group-hover:rotate-12 transition-transform" />
            </div>
            <h1 className="text-8xl md:text-[10rem] font-black text-slate-950 dark:text-white mb-12 tracking-tighter leading-[0.8] uppercase">
              The Safety <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-500 italic">Constitution.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-2xl md:text-3xl max-w-4xl mx-auto font-medium leading-relaxed border-l-2 border-emerald-500/30 pl-10 opacity-90 dark:opacity-80">
              The definitive forensic framework for food rescue safety, <span className="text-slate-950 dark:text-white font-black">legal compliance</span>, and digital transparency in the ZeroWaste ecosystem.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-96 shrink-0 h-fit sticky top-32">
            <div className="bg-white/80 dark:bg-white/[0.02] backdrop-blur-3xl p-12 rounded-[4rem] border border-black/5 dark:border-white/10 shadow-6xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-12 px-6">Protocol Registry</h4>
              <nav className="space-y-4 relative z-10">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-6 px-8 py-6 rounded-[2.5rem] font-black text-xs transition-all group ${
                      activeSection === s.id 
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-6xl scale-105' 
                        : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                      activeSection === s.id ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/30' : 'bg-slate-100 dark:bg-white/5 text-slate-700 group-hover:text-emerald-500'
                    }`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="uppercase tracking-widest">{s.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/5">
                 <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6 bg-slate-50 dark:bg-emerald-500/5 p-8 rounded-[2.5rem] border border-black/5 dark:border-emerald-500/10 backdrop-blur-3xl group/iso">
                      <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-4xl group-hover/iso:rotate-12 transition-transform">
                        <Award className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase leading-relaxed tracking-[0.2em]">ISO 22000 Ready <br/>Certified 2026</span>
                    </div>
                    <div className="p-8 bg-slate-950 dark:bg-slate-950 rounded-[2.5rem] border border-white/10 shadow-inner group/stats">
                       <div className="flex items-center gap-3 mb-6">
                          <Activity className="h-4 w-4 text-blue-400 animate-pulse" />
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">Network Health</span>
                       </div>
                       <div className="text-4xl font-black mb-1 tracking-tighter text-white tabular-nums group-hover:text-emerald-400 transition-colors">99.98%</div>
                       <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Compliance Uptime</div>
                    </div>
                 </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-20">
            {sections.map((section, i) => (
              <motion.section 
                id={section.id}
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/70 dark:bg-white/[0.02] rounded-[5rem] border border-black/5 dark:border-white/5 shadow-4xl relative overflow-hidden group hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-700"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-${section.color}-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-1000`}></div>
                
                <div className="p-16 md:p-24 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
                    <div className="flex items-center gap-10">
                      <div className={`w-24 h-24 bg-${section.color}-500/10 text-${section.color}-600 dark:text-${section.color}-400 rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-inner border border-black/5 dark:border-white/5 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700`}>
                        <section.icon className="h-12 w-12" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                           <span className={`px-4 py-1 rounded-full bg-${section.color}-500/10 text-${section.color}-600 dark:text-${section.color}-400 text-[10px] font-black uppercase tracking-[0.3em] border border-${section.color}-500/20`}>Section 0{i+1}</span>
                           <span className="h-px w-12 bg-black/10 dark:bg-white/10"></span>
                           <span className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">{section.tag}</span>
                        </div>
                        <h3 className="text-5xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter uppercase">{section.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-3xl font-medium leading-relaxed mb-20 max-w-5xl opacity-90 italic border-l-4 border-black/5 dark:border-white/5 pl-12">
                    "{section.content}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.points.map((point, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="flex flex-col gap-8 bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-12 rounded-[3.5rem] group/point transition-all hover:bg-white dark:hover:bg-white/[0.05] hover:border-black/10 dark:hover:border-white/10 shadow-inner"
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-white/10 dark:bg-white/5 flex items-center justify-center shadow-2xl group-hover/point:bg-${section.color}-500 group-hover/point:text-white dark:group-hover/point:text-slate-950 transition-all duration-500`}>
                           <CheckCircle2 className={`h-8 w-8 text-${section.color}-600 dark:text-${section.color}-500 group-hover/point:text-white dark:group-hover/point:text-slate-950 transition-colors`} />
                        </div>
                        <span className="text-xl font-black text-slate-950 dark:text-white tracking-tight leading-tight uppercase tracking-widest">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Critical Warning Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-20 md:p-32 rounded-[6rem] bg-rose-500/5 text-slate-950 dark:text-white border border-rose-500/20 shadow-6xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-[2000ms]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-20">
                <div className="w-40 h-40 bg-rose-500 rounded-[3.5rem] flex items-center justify-center shrink-0 shadow-6xl relative overflow-hidden group-hover:rotate-12 transition-transform duration-700 border-[8px] border-white dark:border-slate-950">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <ShieldAlert className="h-20 w-20 text-white relative z-10" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10 backdrop-blur-3xl border border-rose-500/20">
                     <Lock className="h-4 w-4" /> Enforcement Protocol
                  </div>
                  <h4 className="text-6xl md:text-7xl font-black mb-10 text-slate-950 dark:text-white tracking-tighter uppercase leading-[0.85]">Zero-Tolerance <br/> for <span className="text-rose-600 dark:text-rose-500 italic">Negligence.</span></h4>
                  <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium leading-relaxed max-w-3xl opacity-80 italic">
                    Account suspension is immediate for intentionally providing spoiled food. We maintain <span className="text-slate-950 dark:text-white font-black">100% digital traceability</span> to protect the health of our global community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Acknowledgment Section */}
            <div className="mt-40 bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 p-20 md:p-32 rounded-[7rem] text-center relative overflow-hidden shadow-6xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[200px] -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-7xl md:text-8xl font-black text-slate-950 dark:text-white mb-10 tracking-tighter uppercase italic">Authorize <br/> Sync.</h2>
                <p className="text-slate-600 dark:text-slate-400 text-2xl font-medium mb-20 max-w-4xl mx-auto leading-relaxed opacity-80">
                  By participating in the ZeroWaste ecosystem, you acknowledge that you have read, understood, and will adhere to these forensic protocols.
                </p>
                
                <button 
                  onClick={() => setAgreed(!agreed)}
                  className={`group relative flex items-center gap-10 mx-auto px-20 py-10 rounded-[4rem] font-black text-3xl transition-all duration-700 shadow-6xl overflow-hidden active:scale-95 ${
                    agreed 
                      ? 'bg-emerald-500 text-white dark:text-slate-950 shadow-emerald-500/40 scale-105' 
                      : 'bg-slate-950 dark:bg-white/5 border-2 border-white/10 text-white dark:text-slate-500 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  {agreed && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5 }}
                      className="absolute inset-0 bg-emerald-400 group-hover:scale-[2] transition-transform"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-10">
                    {agreed ? <CheckCircle2 className="h-10 w-10" /> : <div className="w-10 h-10 rounded-full border-4 border-slate-700 dark:border-slate-800"></div>}
                    <span className="uppercase tracking-[0.2em]">Digitally Sign Constitution</span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {agreed && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-16 flex items-center justify-center gap-6 text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-[0.5em] text-sm"
                    >
                      <Zap className="h-6 w-6 fill-current animate-pulse" /> 
                      <span>Digital Identity Verified • Node_X_942_SECURE</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimalist Footer */}
      <footer className="mt-48 text-center border-t border-black/5 dark:border-white/5 pt-24 pb-12">
        <div className="flex justify-center gap-20 mb-16 opacity-20 dark:opacity-10 grayscale hover:grayscale-0 transition-all duration-1000">
           <Database className="h-10 w-10" />
           <Globe className="h-10 w-10" />
           <Lock className="h-10 w-10" />
           <ShieldCheck className="h-10 w-10" />
        </div>
        <p className="text-[11px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.6em]">ZeroWaste Global Safety Framework &copy; 2026 • Encrypted Node Protocol • Sector_01</p>
      </footer>
    </div>
  );
}
