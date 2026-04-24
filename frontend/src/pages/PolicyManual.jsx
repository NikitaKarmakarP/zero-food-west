import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FileText, ArrowLeft, ShieldCheck, Scale, AlertCircle, CheckCircle2, Info, ChevronRight, BookOpen, Award, Zap, ShieldAlert, Target, Activity, Lock, Globe, Microscope, Database, BarChart3, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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
    <div className="min-h-screen bg-[#fcfdfe] pb-20 selection:bg-emerald-500/30 font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-left z-[100] shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        style={{ scaleX }}
      />

      {/* Immersive Hero Header */}
      <div className="bg-slate-950 text-white pt-40 pb-60 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-[#fcfdfe]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all group backdrop-blur-xl"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Safety Core
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-24 h-24 bg-emerald-500/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl relative group">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Fingerprint className="h-12 w-12 text-emerald-400 relative z-10" />
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
              The Safety <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">Constitution.</span>
            </h1>
            <p className="text-slate-400 text-2xl md:text-3xl max-w-4xl mx-auto font-medium leading-relaxed opacity-90">
              The definitive forensic framework for food rescue safety, <span className="text-white">legal compliance</span>, and digital transparency in the ZeroWaste ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Wave Decor */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden leading-[0]">
          <svg className="relative block w-full h-full fill-[#fcfdfe]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-80 shrink-0 h-fit sticky top-32">
            <div className="bg-white/80 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.05)]">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 px-4">Protocol Registry</h4>
              <nav className="space-y-3">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-4 px-6 py-5 rounded-3xl font-black text-sm transition-all group ${
                      activeSection === s.id 
                        ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      activeSection === s.id ? 'bg-emerald-500' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <s.icon className={`h-4 w-4 ${activeSection === s.id ? 'text-white' : 'opacity-50'}`} />
                    </div>
                    <span>{s.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-12 pt-10 border-t border-slate-100">
                 <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-[10px] font-black text-emerald-900 uppercase leading-relaxed tracking-widest">ISO 22000 Ready <br/>Certified 2026</span>
                    </div>
                    <div className="p-6 bg-slate-950 rounded-3xl text-white">
                       <div className="flex items-center gap-2 mb-4">
                          <Activity className="h-4 w-4 text-blue-400" />
                          <span className="text-[8px] font-black uppercase tracking-[0.3em]">Network Health</span>
                       </div>
                       <div className="text-xl font-black mb-1 tracking-tight">99.98%</div>
                       <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Compliance Uptime</div>
                    </div>
                 </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-16">
            {sections.map((section, i) => (
              <motion.section 
                id={section.id}
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[4rem] border border-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-${section.color}-500/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-1000`}></div>
                
                <div className="p-12 md:p-20 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="flex items-center gap-8">
                      <div className={`w-20 h-20 bg-${section.color}-50 text-${section.color}-600 rounded-[2rem] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                        <section.icon className="h-10 w-10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className={`px-3 py-1 rounded-full bg-${section.color}-500/10 text-${section.color}-600 text-[9px] font-black uppercase tracking-widest`}>Section 0{i+1}</span>
                           <span className="h-px w-8 bg-slate-100"></span>
                           <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{section.tag}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{section.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 text-2xl font-medium leading-relaxed mb-16 max-w-4xl opacity-90">
                    {section.content}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {section.points.map((point, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -5 }}
                        className="flex flex-col gap-6 bg-slate-50/50 border border-slate-100 p-10 rounded-[2.5rem] group/point transition-all hover:bg-white hover:shadow-2xl"
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover/point:bg-${section.color}-500 transition-colors`}>
                           <CheckCircle2 className={`h-6 w-6 text-${section.color}-500 group-hover/point:text-white transition-colors`} />
                        </div>
                        <span className="text-lg font-black text-slate-900 tracking-tight leading-tight">{point}</span>
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
              className="p-16 md:p-24 rounded-[5rem] bg-slate-900 text-white shadow-4xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="w-32 h-32 bg-rose-500 rounded-[3rem] flex items-center justify-center shrink-0 shadow-2xl relative overflow-hidden group-hover:rotate-12 transition-transform duration-700">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <ShieldAlert className="h-16 w-16 text-white relative z-10" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                     <Lock className="h-3 w-3" /> Enforcement Protocol
                  </div>
                  <h4 className="text-5xl font-black mb-8 tracking-tighter">Zero-Tolerance for <span className="text-rose-500">Negligence.</span></h4>
                  <p className="text-slate-400 text-2xl font-medium leading-relaxed max-w-2xl opacity-90">
                    Account suspension is immediate for intentionally providing spoiled food. We maintain <span className="text-white">100% digital traceability</span> to protect the health of our global community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Acknowledgment Section */}
            <div className="mt-32 bg-slate-50 border border-slate-100 p-16 md:p-24 rounded-[6rem] text-center relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Ready to Verify?</h2>
                <p className="text-slate-500 text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed opacity-80">
                  By participating in the ZeroWaste ecosystem, you acknowledge that you have read, understood, and will adhere to these forensic protocols.
                </p>
                
                <button 
                  onClick={() => setAgreed(!agreed)}
                  className={`group relative flex items-center gap-6 mx-auto px-16 py-8 rounded-[3rem] font-black text-2xl transition-all duration-700 shadow-2xl overflow-hidden ${
                    agreed 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/30 scale-105' 
                      : 'bg-white border-2 border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-600'
                  }`}
                >
                  {agreed && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-emerald-400 group-hover:scale-110 transition-transform"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-6">
                    {agreed ? <CheckCircle2 className="h-8 w-8" /> : <div className="w-8 h-8 rounded-full border-4 border-slate-100"></div>}
                    <span>Authorize Digital Signature</span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {agreed && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-12 flex items-center justify-center gap-4 text-emerald-600 font-black uppercase tracking-[0.4em] text-sm"
                    >
                      <Zap className="h-5 w-5 fill-current animate-pulse" /> 
                      <span>Digital Identity Verified • 2026-X-942</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimalist Footer */}
      <footer className="mt-40 text-center border-t border-slate-100 pt-20">
        <div className="flex justify-center gap-12 mb-10 opacity-30 grayscale grayscale-100">
           <Database className="h-6 w-6" />
           <Globe className="h-6 w-6" />
           <Lock className="h-6 w-6" />
           <ShieldCheck className="h-6 w-6" />
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">ZeroWaste Global Safety Framework &copy; 2026 • Encrypted Node Protocol</p>
      </footer>
    </div>
  );
}

