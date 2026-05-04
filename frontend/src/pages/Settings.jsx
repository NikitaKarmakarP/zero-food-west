import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, User, Bell, Shield, Globe, Zap, Moon, Sun, 
  ChevronRight, Save, Trash2, Sliders, Smartphone, 
  Mail, Lock, Eye, EyeOff, Activity, Radar, Database,
  Terminal, Cpu, Fingerprint, Target, ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const SettingToggle = ({ icon: Icon, title, desc, enabled, onToggle }) => (
  <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none group hover:border-emerald-500/30 transition-all duration-500">
    <div className="flex items-center gap-6">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${enabled ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/10'}`}>
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{desc}</p>
      </div>
    </div>
    <button 
      onClick={onToggle}
      className={`relative w-16 h-8 rounded-full transition-colors duration-500 ${enabled ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-800'}`}
    >
      <motion.div 
        animate={{ x: enabled ? 34 : 4 }}
        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
      />
    </button>
  </div>
);

const SettingSlider = ({ icon: Icon, title, desc, value, onChange, min = 0, max = 100, unit = "km" }) => (
  <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none group hover:border-emerald-500/30 transition-all duration-500">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-all duration-500">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">{title}</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{desc}</p>
        </div>
      </div>
      <div className="text-3xl font-black text-slate-900 dark:text-white italic tabular-nums">
        {value}<span className="text-emerald-500 text-base ml-1 lowercase font-bold">{unit}</span>
      </div>
    </div>
    <input 
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-3 bg-slate-200 dark:bg-white/5 rounded-full appearance-none cursor-pointer accent-emerald-500"
    />
  </div>
);

export default function SettingsPage() {
  const { user, theme, toggleTheme, fontSizeScale, increaseFontSize, decreaseFontSize } = useAppContext();
  const [activeSection, setActiveSection] = useState('general');
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    mission: true,
    network: true
  });
  const [radius, setRadius] = useState(25);
  const [privacy, setPrivacy] = useState({
    public: true,
    shareStats: true,
    anonymous: false
  });

  const sections = [
    { id: 'general', label: 'Operational Control', icon: Sliders },
    { id: 'notifications', label: 'Telemetry Alerts', icon: Bell },
    { id: 'security', label: 'Neural Security', icon: Shield },
    { id: 'account', label: 'Node Identity', icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-32 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Settings className="h-6 w-6 animate-spin-slow" />
               </div>
               <span className="text-[10px] font-black text-slate-500 dark:text-emerald-400 uppercase tracking-[0.5em] italic">System_Configuration_v10.4.2</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none uppercase italic">Control <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">Center.</span></h1>
          </motion.div>

          <div className="flex gap-4 p-2 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white dark:border-white/10 shadow-xl shadow-black/5">
             {sections.map(section => (
                <button 
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-3xl text-sm font-black transition-all duration-500 relative overflow-hidden group ${activeSection === section.id ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-2xl scale-[1.02]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}
                >
                   <section.icon className={`h-4 w-4 ${activeSection === section.id ? 'animate-pulse' : ''}`} />
                   <span className="relative z-10 hidden md:inline uppercase tracking-widest">{section.label}</span>
                   {activeSection === section.id && (
                     <motion.div layoutId="section-active" className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20" />
                   )}
                </button>
             ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
           
           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[4rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Database className="h-48 w-48 text-emerald-500" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                          <Activity className="h-8 w-8 text-emerald-400" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">System Health</div>
                          <div className="text-xl font-black italic uppercase">Nominal_v104</div>
                       </div>
                    </div>
                    <div className="space-y-6 mb-10">
                       <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                          <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">Neural Link Status</div>
                          <div className="flex items-center justify-between">
                             <span className="text-sm font-black uppercase italic text-emerald-400">Synchronized</span>
                             <div className="flex gap-1">
                                {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                             </div>
                          </div>
                       </div>
                       <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                          <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">Node Latency</div>
                          <div className="flex items-center justify-between">
                             <span className="text-sm font-black uppercase italic text-blue-400">14ms Optimal</span>
                             <Radar className="h-4 w-4 text-blue-500 animate-spin-slow" />
                          </div>
                       </div>
                    </div>
                    <button className="w-full bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all shadow-xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 group/save">
                       <Save className="h-4 w-4 group-hover:scale-110 transition-transform" /> Commit All Changes
                    </button>
                 </div>
              </motion.div>

              <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 px-4 italic">Quick Diagnostics</h4>
                 <div className="space-y-2">
                    {['Network_Sync', 'Encryption_Layer', 'Node_Registry', 'Impact_Oracle'].map(sys => (
                       <div key={sys} className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group cursor-default">
                          <span className="text-xs font-black text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 transition-colors uppercase tracking-widest">{sys}</span>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">OK</span>
                             <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Main Settings Form */}
           <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeSection}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                   className="space-y-8"
                 >
                    {activeSection === 'general' && (
                       <>
                          <SettingSlider 
                            icon={Target} 
                            title="Rescue Intercept Radius" 
                            desc="Define the maximum distance for real-time mission notifications."
                            value={radius}
                            onChange={setRadius}
                            max={100}
                          />
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl group hover:border-emerald-500/30 transition-all duration-500">
                                <div className="flex items-center gap-6 mb-8">
                                   <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 flex items-center justify-center">
                                      {theme === 'dark' ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7 text-amber-500" />}
                                   </div>
                                   <div>
                                      <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">Interface Mode</h4>
                                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Switch between Light and Dark HUD.</p>
                                   </div>
                                </div>
                                <button 
                                  onClick={toggleTheme}
                                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95"
                                >
                                   Set to {theme === 'dark' ? 'Spectral Light' : 'Deep Space Dark'}
                                </button>
                             </div>
                             <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl group hover:border-emerald-500/30 transition-all duration-500">
                                <div className="flex items-center gap-6 mb-8">
                                   <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 flex items-center justify-center">
                                      <Terminal className="h-7 w-7" />
                                   </div>
                                   <div>
                                      <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">Text Resolution</h4>
                                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Scale the font size of the command console.</p>
                                   </div>
                                </div>
                                <div className="flex gap-4">
                                   <button onClick={decreaseFontSize} className="flex-1 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-black rounded-2xl text-xl shadow-inner border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-all">A-</button>
                                   <button onClick={increaseFontSize} className="flex-1 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-black rounded-2xl text-xl shadow-inner border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-all">A+</button>
                                </div>
                             </div>
                          </div>
                          <SettingToggle 
                             icon={Globe} 
                             title="Regional Sector Routing" 
                             desc="Automatically prioritize food rescue missions within your current administrative sector."
                             enabled={true}
                             onToggle={() => {}}
                          />
                       </>
                    )}

                    {activeSection === 'notifications' && (
                       <>
                          <SettingToggle 
                             icon={Smartphone} 
                             title="Neural Push Alerts" 
                             desc="Receive high-priority mission notifications directly on your primary interface."
                             enabled={notifications.push}
                             onToggle={() => setNotifications({...notifications, push: !notifications.push})}
                          />
                          <SettingToggle 
                             icon={Mail} 
                             title="Daily Impact Reports" 
                             desc="Get a detailed summary of your node's contribution to the global zero-waste index."
                             enabled={notifications.email}
                             onToggle={() => setNotifications({...notifications, email: !notifications.email})}
                          />
                          <SettingToggle 
                             icon={Zap} 
                             title="Real-time Node Status" 
                             desc="Immediate alerts when rescue nodes in your radius go active or expire."
                             enabled={notifications.mission}
                             onToggle={() => setNotifications({...notifications, mission: !notifications.mission})}
                          />
                          <SettingToggle 
                             icon={Cpu} 
                             title="System Health Alerts" 
                             desc="Critical updates regarding platform upgrades and neural link stability."
                             enabled={notifications.network}
                             onToggle={() => setNotifications({...notifications, network: !notifications.network})}
                          />
                       </>
                    )}

                    {activeSection === 'security' && (
                       <div className="space-y-8">
                          <div className="p-10 rounded-[3rem] bg-emerald-500/10 border border-emerald-500/20 shadow-2xl relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                                <Lock className="h-24 w-24" />
                             </div>
                             <div className="relative z-10">
                                <h4 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 uppercase italic mb-4">Master Encryption Key</h4>
                                <p className="text-emerald-600 dark:text-emerald-500/80 font-medium mb-8 max-w-xl leading-relaxed">Your data is secured using military-grade AES-256 neural encryption. Your private keys never leave your local node.</p>
                                <button className="px-8 py-4 bg-emerald-500 text-slate-950 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl hover:bg-emerald-400 transition-all active:scale-95">
                                   Regenerate Access Protocol
                                </button>
                             </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl group hover:border-blue-500/30 transition-all duration-500">
                                <div className="flex items-center gap-6 mb-8">
                                   <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                      <Fingerprint className="h-7 w-7" />
                                   </div>
                                   <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">Biometric Override</h4>
                                </div>
                                <button className="w-full py-4 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-bold rounded-2xl text-[10px] uppercase tracking-widest border border-slate-200 dark:border-white/5">
                                   Enable Fingerprint Link
                                </button>
                             </div>
                             <div className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl group hover:border-amber-500/30 transition-all duration-500">
                                <div className="flex items-center gap-6 mb-8">
                                   <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                                      <Shield className="h-7 w-7" />
                                   </div>
                                   <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">2FA Multi-Factor</h4>
                                </div>
                                <button className="w-full py-4 bg-amber-500 text-slate-950 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg">
                                   Configure 2FA Link
                                </button>
                             </div>
                          </div>
                       </div>
                    )}

                    {activeSection === 'account' && (
                       <div className="p-10 rounded-[4rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl relative">
                          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                             <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="w-32 h-32 rounded-[2.5rem] border-8 border-white dark:border-slate-800 bg-slate-900 overflow-hidden relative z-10 shadow-2xl">
                                   <img 
                                     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}&backgroundColor=020617`} 
                                     alt="Profile" 
                                     className="w-full h-full object-cover"
                                   />
                                </div>
                                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800 z-20 hover:scale-110 transition-transform">
                                   <Smartphone className="h-4 w-4" />
                                </button>
                             </div>
                             <div className="text-center md:text-left flex-1">
                                <h4 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-2">{user?.name}</h4>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Primary Operational Identity</div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                   <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest italic">{user?.role} Role</div>
                                   <div className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest italic">{user?.email}</div>
                                </div>
                             </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 mb-16">
                             <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Codename / Display Name</label>
                                <input 
                                  type="text" 
                                  defaultValue={user?.name}
                                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                             </div>
                             <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Primary Neural Link (Email)</label>
                                <input 
                                  type="email" 
                                  defaultValue={user?.email}
                                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                             </div>
                          </div>

                          <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                             <div className="flex items-center gap-4 text-slate-400">
                                <Info className="h-5 w-5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Global impact data is synced to IPFS protocol.</span>
                             </div>
                             <button className="flex items-center gap-3 px-8 py-4 bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300">
                                <Trash2 className="h-4 w-4" /> Terminate Node Identity
                             </button>
                          </div>
                       </div>
                    )}
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
}
