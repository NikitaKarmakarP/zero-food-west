import { useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { MapPin, Utensils, Award, Leaf, ChevronRight, Heart, Bell, Globe, Users, Activity, Zap, Star, MessageSquare, ShieldCheck, Mail, ArrowRight, Trophy, Calculator, Radar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import PostFood from './pages/PostFood'
import MapView from './pages/MapView'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NGOPanel from './pages/NGOPanel'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import EventDonations from './pages/EventDonations'
import SafetySystem from './pages/SafetySystem'
import PickupTracking from './pages/PickupTracking'
import PolicyManual from './pages/PolicyManual'
import Leaderboard from './pages/Leaderboard'
import { useAppContext } from './context/AppContext'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, t, language, setLanguage, notifications, markAllAsRead, clearNotifications } = useAppContext()
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => n.unread).length;
  
  const navItems = [
    { name: t('donate'), path: '/donate' },
    { name: t('events'), path: '/events' },
    { name: t('map'), path: '/map' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: t('safety'), path: '/safety' },
  ]
  
  if (user) {
    navItems.push({ name: t('track'), path: '/track' })
    navItems.push({ name: t('dashboard'), path: '/dashboard' })
  }
  
  if (user?.role === 'ngo') {
    navItems.push({ name: t('ngoPanel'), path: '/ngo' })
  }

  if (user?.role === 'admin' || user?.email?.includes('admin')) {
    navItems.push({ name: t('adminPanel'), path: '/admin' })
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 mx-4 sm:mx-6 lg:mx-8 mb-8"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-2xl bg-white/70 border border-white/50 shadow-glass rounded-3xl px-6 py-4">
        <div className="flex justify-between items-center h-10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-100 p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-inner">
              <Leaf className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-2xl font-black tracking-tight text-gradient">
              ZeroWaste.
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${location.pathname === item.path ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            
            <div className="relative group mx-2">
               <button className="flex items-center gap-1 text-slate-600 hover:text-emerald-600 font-medium">
                 <Globe className="h-4 w-4" /> {language.toUpperCase()}
               </button>
               <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                 <button onClick={() => setLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-t-xl">English</button>
                 <button onClick={() => setLanguage('hi')} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50">हिंदी</button>
                 <button onClick={() => setLanguage('bn')} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-b-xl">বাংলা</button>
               </div>
            </div>
            
            {user ? (
               <div className="flex items-center gap-2">
                 <div className="relative">
                   <button 
                     onClick={() => {
                        setShowNotifications(!showNotifications);
                        if (!showNotifications) markAllAsRead();
                     }}
                     className="relative ml-1 mr-3 text-slate-600 hover:text-emerald-600 transition-colors group p-2 rounded-xl"
                   >
                     <Bell className={`h-6 w-6 group-hover:scale-110 transition-transform ${showNotifications ? 'text-emerald-600' : ''}`} />
                     {unreadCount > 0 && (
                       <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm animate-pulse">{unreadCount}</span>
                     )}
                   </button>
                   
                   <AnimatePresence>
                     {showNotifications && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         exit={{ opacity: 0, y: 10, scale: 0.95 }}
                         className="absolute right-0 mt-4 w-80 max-h-[450px] overflow-hidden glass-panel rounded-[2rem] shadow-2xl border-white/60 z-50 flex flex-col"
                       >
                         <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-md">
                           <h3 className="font-black text-slate-900 tracking-tight">Notifications</h3>
                           {notifications.length > 0 && (
                             <button onClick={clearNotifications} className="text-[10px] uppercase tracking-widest font-black text-slate-400 hover:text-red-500 transition-colors">Clear All</button>
                           )}
                         </div>
                         <div className="overflow-y-auto no-scrollbar py-2">
                           {notifications.length === 0 ? (
                             <div className="p-10 text-center text-slate-400 font-bold text-sm">No new notifications</div>
                           ) : (
                             notifications.map(notif => (
                               <div key={notif.id} className={`px-5 py-4 hover:bg-slate-50/80 transition-colors relative group ${notif.unread ? 'bg-emerald-50/30' : ''}`}>
                                 {notif.unread && <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                                 <div className="font-black text-slate-900 text-sm">{notif.title}</div>
                                 <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{notif.message}</div>
                                 <div className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">{notif.time}</div>
                               </div>
                             ))
                           )}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>

                  <Link to="/profile" className="text-slate-600 hover:text-emerald-600 font-medium px-4 border-l border-slate-200">{t('profile')}</Link>
                  <button onClick={logout} className="bg-red-50 hover:bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold transition-all duration-300">
                    {t('signOut')}
                  </button>
                </div>
            ) : (
               <Link to="/login" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300">
                 {t('signIn')}
               </Link>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              <Activity className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 mx-4 glass-panel rounded-[2rem] overflow-hidden bg-white/90 backdrop-blur-2xl border-white/50 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map(item => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 rounded-2xl font-black text-slate-900 hover:bg-emerald-50 transition-all flex justify-between items-center group"
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              {user ? (
                <button onClick={logout} className="w-full py-4 text-rose-600 font-black text-left px-6">Sign Out</button>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-emerald-600 font-black text-left px-6">Sign In</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Home() {
  const { getActiveDonations, acceptDonation, t } = useAppContext();
  const navigate = useNavigate();
  const activeDonations = getActiveDonations();
  const [calculatorInput, setCalculatorInput] = useState('');
  const [calculatorResult, setCalculatorResult] = useState({ meals: '--', co2: '--' });

  const calculateImpact = () => {
    const kg = parseFloat(calculatorInput);
    if (!isNaN(kg) && kg > 0) {
      setCalculatorResult({
        meals: Math.round(kg * 2.5),
        co2: Math.round(kg * 2.1 * 10) / 10
      });
    } else {
      setCalculatorResult({ meals: '--', co2: '--' });
    }
  };

  return (
    <div className="selection:bg-emerald-500/30">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900 z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-60" 
            alt="Hero Background" 
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 text-emerald-400 font-black mb-10 text-xs uppercase tracking-[0.3em]"
          >
             <Users className="h-4 w-4" /> Join 850+ active volunteers today
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85]"
          >
            Rescue <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Food.</span> <br/>
            Nourish <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Life.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-14 opacity-80"
          >
            The intelligent platform connecting surplus food from restaurants and events with NGOs to make zero food waste a reality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/donate" className="group bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-12 py-6 rounded-[2.5rem] font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/30 flex items-center gap-3">
              Share Surplus Food <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/map" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-[2.5rem] font-black text-lg backdrop-blur-xl border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Find Food Nearby <MapPin className="h-6 w-6 text-emerald-400" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-emerald-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats - Editorial Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Utensils, 
                label: "Meals Rescued", 
                value: "12,450", 
                color: "emerald", 
                desc: "Nutritious servings diverted from landfills",
                gradient: "from-emerald-500/20 to-teal-500/20",
                glow: "group-hover:shadow-emerald-500/20"
              },
              { 
                icon: Users, 
                label: "Active Volunteers", 
                value: "850+", 
                color: "blue", 
                desc: "People dedicated to ending urban hunger",
                gradient: "from-blue-500/20 to-indigo-500/20",
                glow: "group-hover:shadow-blue-500/20"
              },
              { 
                icon: Leaf, 
                label: "CO₂ Offset (KG)", 
                value: "4,200", 
                color: "amber", 
                desc: "Environmental impact equivalent to 180 trees",
                gradient: "from-amber-500/20 to-orange-500/20",
                glow: "group-hover:shadow-amber-500/20"
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className={`group relative p-12 rounded-[4rem] bg-white border border-slate-100 transition-all duration-700 ${stat.glow} hover:border-transparent`}
              >
                {/* Background Glow Metaphor */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[4rem]`}></div>
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                   <div className={`w-20 h-20 rounded-[2rem] bg-${stat.color}-500 text-white flex items-center justify-center mb-10 shadow-2xl shadow-${stat.color}-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <stat.icon className="h-10 w-10" />
                   </div>
                   
                   <div className="space-y-2 mb-8">
                      <div className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
                      <div className="text-7xl font-black text-slate-900 tracking-tighter leading-none">
                         {stat.value}
                      </div>
                   </div>
                   
                   <div className="h-px w-12 bg-slate-200 mb-8 group-hover:w-24 transition-all duration-500"></div>
                   
                   <p className="text-slate-500 text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {stat.desc}
                   </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-8 right-12 opacity-5 group-hover:opacity-20 transition-all duration-700">
                   <stat.icon className="h-24 w-24" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Rescues - Tactical Intelligence Feed */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Subtle Pro Grid Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                 <div className="relative h-3 w-3">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
                 </div>
                 <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.5em]">Live Mission Intelligence v9.0</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.85]">
                Active Rescues <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Detected Nearby.
                </span>
              </h2>
              
              <p className="text-slate-500 text-2xl font-medium leading-relaxed opacity-80 max-w-2xl">
                Real-time telemetry for <span className="text-slate-900">high-integrity</span> logistics requiring immediate intervention within the urban node.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group"
            >
               <Link to="/map" className="relative px-12 py-6 bg-slate-900 text-white rounded-3xl font-black text-sm tracking-widest flex items-center gap-4 transition-all shadow-2xl hover:bg-emerald-600 group">
                  EXPLORE MISSION RADAR <MapPin className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-2xl flex items-center justify-center text-[10px] shadow-xl border-4 border-white animate-bounce">
                     {activeDonations.length}
                  </div>
               </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activeDonations.slice(0, 3).map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative bg-white rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-4xl transition-all duration-700 overflow-hidden"
              >
                {/* Immersive Image Header */}
                <div className="h-80 relative overflow-hidden">
                   <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 2 }}
                    src={item.image || "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"} 
                    alt={item.foodName}
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                   
                   {/* Urgent Status Overlay */}
                   <div className="absolute top-8 right-8">
                      <div className="px-6 py-2.5 bg-rose-500/90 backdrop-blur-xl text-white text-[10px] font-black rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
                         <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                         URGENT: {item.expiryTime.substring(11, 16)}
                      </div>
                   </div>

                   {/* Mission Distance */}
                   <div className="absolute bottom-8 left-8">
                      <div className="flex items-center gap-3 px-5 py-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                         <MapPin className="h-4 w-4 text-emerald-500" />
                         <span className="text-xs font-black text-slate-900">{item.distance} <span className="text-slate-400">OFFSET</span></span>
                      </div>
                   </div>
                </div>

                <div className="p-12">
                   <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol: Active Recovery</span>
                      </div>
                      <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-emerald-600 transition-colors">
                        {item.foodName}
                      </h3>
                      <div className="flex items-end gap-2 text-slate-400">
                         <span className="text-4xl font-black text-slate-900 leading-none tracking-tighter">{item.quantity}</span>
                         <span className="text-xs font-bold uppercase tracking-widest mb-1">Servings Detected</span>
                      </div>
                   </div>

                   <button 
                    onClick={() => acceptDonation(item.id)}
                    className="w-full relative overflow-hidden bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white font-black py-6 rounded-[2.5rem] transition-all duration-500 flex items-center justify-center gap-4 group/btn border border-slate-100 shadow-inner active:scale-95"
                   >
                      <span className="relative z-10 uppercase tracking-widest text-xs">Deploy To Rescue</span>
                      <Zap className="h-5 w-5 fill-emerald-500 group-hover/btn:fill-emerald-400 transition-colors" />
                   </button>
                </div>

                {/* Decorative Data Nodes */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                   <Radar className="h-32 w-32 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Lifecycle - The Mission Flow */}
      <section className="py-48 bg-white relative overflow-hidden">
        {/* Background Engineering Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-32 gap-12">
            <div className="max-w-2xl">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 text-white font-black text-[9px] uppercase tracking-[0.5em] mb-10 shadow-2xl"
               >
                  <Activity className="h-3 w-3 text-emerald-400" /> System Orchestration
               </motion.div>
               <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                 From Ballroom to Bowl <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                   in under 90 minutes.
                 </span>
               </h2>
            </div>
            
            <div className="flex items-center gap-8 p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-inner">
               <div className="text-right">
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">90<span className="text-emerald-500">min</span></div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Average Response</div>
               </div>
               <div className="w-px h-12 bg-slate-200"></div>
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">100<span className="text-emerald-500">%</span></div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Success Rate</div>
               </div>
            </div>
          </div>

          <div className="relative">
             {/* Dynamic Animated Timeline Link */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 overflow-hidden rounded-full">
                <motion.div 
                  animate={{ left: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                {[
                  { 
                    step: "01", 
                    title: "Pre-book Logistics", 
                    desc: "Inform our dispatch system of your event capacity 48h in advance for standby priority.",
                    icon: Globe,
                    color: "emerald",
                    glow: "shadow-emerald-500/20"
                  },
                  { 
                    step: "02", 
                    title: "Dynamic Pickup", 
                    desc: "Our GPS-optimized cold-chain fleet arrives within 20 minutes of your 'Rescue Call'.",
                    icon: MapPin,
                    color: "blue",
                    glow: "shadow-blue-500/20"
                  },
                  { 
                    step: "03", 
                    title: "Node Distribution", 
                    desc: "Food is instantly logged and split across verified NGO nodes for immediate consumption.",
                    icon: Heart,
                    color: "rose",
                    glow: "shadow-rose-500/20"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="group"
                  >
                     <div className="relative p-12 rounded-[4rem] bg-white border border-slate-100 hover:border-transparent hover:shadow-4xl transition-all duration-700 group-hover:-translate-y-4">
                        {/* Background Floating Number */}
                        <div className="absolute top-8 right-12 text-9xl font-black text-slate-50 group-hover:text-emerald-50 transition-colors duration-700 select-none">
                           {item.step}
                        </div>

                        <div className="relative z-10">
                           <div className={`w-24 h-24 rounded-[2.5rem] bg-${item.color}-500 text-white flex items-center justify-center mb-12 shadow-2xl ${item.glow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                              <item.icon className="h-10 w-10" />
                           </div>
                           
                           <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                           <p className="text-slate-500 font-medium leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                              {item.desc}
                           </p>
                        </div>
                        
                        {/* Interactive Step Pulse */}
                        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl border border-slate-50 opacity-0 group-hover:opacity-100 transition-all">
                           <div className={`w-3 h-3 rounded-full bg-${item.color}-500 animate-pulse`}></div>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Partner Showcase - Global Trust Gallery */}
      <section className="py-40 bg-white overflow-hidden relative">
        {/* Subtle Pro Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mb-32 text-center relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
           >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-10">
                 <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-150"></div>
                 </div>
                 <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.4em]">Network Infrastructure v4.2</span>
                 <div className="w-px h-3 bg-emerald-200 mx-2"></div>
                 <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Status: Synchronized</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Trusted by Global <br/>
                <span className="text-emerald-600">Industry Leaders.</span>
              </h2>
              
              <p className="text-slate-500 font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                Our high-integrity protocol is the gold standard for <span className="text-slate-900">enterprise-grade</span> food rescue operations worldwide.
              </p>
           </motion.div>
        </div>

        <div className="relative z-10 space-y-10">
          {/* Top Marquee - Professional Styled */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-10 py-6 animate-marquee whitespace-nowrap min-w-full">
              {[
                'Grand Hyatt', 'Marriott Intl', 'Feeding India', 'Global Food Lab', 
                'NGO Connect', 'Kolkata Caterers', 'Green Earth', 'Aman Resorts'
              ].concat(['Grand Hyatt', 'Marriott Intl', 'Feeding India', 'Global Food Lab', 'NGO Connect', 'Kolkata Caterers', 'Green Earth', 'Aman Resorts']).map((brand, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="inline-flex items-center gap-6 px-10 py-7 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-100 transition-all duration-500 group/badge"
                >
                   <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover/badge:bg-emerald-500 group-hover/badge:text-white transition-all shadow-inner">
                      <Globe className="h-7 w-7 text-emerald-600 group-hover/badge:text-white transition-colors" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{brand}</span>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">Verified Partner</span>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee - Opposite Direction */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-10 py-6 animate-marquee-reverse whitespace-nowrap min-w-full">
              {[
                'Four Seasons', 'Compass Group', 'Hilton Worldwide', 'World Central Kitchen',
                'Taj Hotels', 'Red Cross', 'United Nations', 'Sodexo'
              ].concat(['Four Seasons', 'Compass Group', 'Hilton Worldwide', 'World Central Kitchen', 'Taj Hotels', 'Red Cross', 'United Nations', 'Sodexo']).map((brand, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: 8, scale: 1.02 }}
                  className="inline-flex items-center gap-6 px-10 py-7 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-500 group/badge"
                >
                   <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover/badge:bg-blue-500 group-hover/badge:text-white transition-all shadow-inner">
                      <Zap className="h-7 w-7 text-blue-600 group-hover/badge:text-white transition-colors" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{brand}</span>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">Network Node</span>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS for Professional Marquee */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 55s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 65s linear infinite;
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* Impact Stories - Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Ghost Background Text */}
        <div className="absolute top-0 right-0 text-[20rem] font-black text-slate-50 opacity-[0.03] select-none pointer-events-none -translate-y-1/2 translate-x-1/4">
           VOICES
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">Community Validation</span>
               </div>
               <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
                 Voices of the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Movement.</span>
               </h2>
               <p className="text-slate-500 text-xl font-medium leading-relaxed">Hear from the pioneers bridging the gap between food surplus and social impact across the urban landscape.</p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-8 rounded-[3rem] bg-white shadow-2xl flex items-center gap-6 border-slate-100"
            >
               <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/20">
                  <Star className="h-8 w-8 fill-current" />
               </div>
               <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">4.9/5</div>
                  <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Global Community Rating</div>
               </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "ZeroWaste has completely transformed how we handle surplus. We went from throwing away 20kg a day to feeding 50 children daily.",
                author: "Ananya Sharma",
                role: "Manager, Royal Caterers",
                img: "https://i.pravatar.cc/150?u=ananya",
                color: "emerald"
              },
              {
                quote: "The real-time tracking and safety protocols give us the confidence to accept large donations even late at night. A game changer.",
                author: "Vikram Chatterjee",
                role: "Director, Kolkata NGO Hub",
                img: "https://i.pravatar.cc/150?u=vikram",
                color: "blue"
              },
              {
                quote: "Being part of this movement has lowered our waste disposal costs and boosted our team morale significantly. It's win-win.",
                author: "Sarah Jenkins",
                role: "Executive Chef, Grand Hyatt",
                img: "https://i.pravatar.cc/150?u=sarah",
                color: "indigo"
              }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative p-12 rounded-[4rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl transition-all duration-700 overflow-hidden"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-${story.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <MessageSquare className="h-20 w-20 text-slate-200 opacity-20 absolute -bottom-4 -right-4 group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10">
                   <div className="flex gap-1 mb-10">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-emerald-500 text-emerald-500" />)}
                   </div>
                   
                   <p className="text-slate-700 font-bold italic text-2xl leading-relaxed mb-12 tracking-tight group-hover:text-slate-900 transition-colors">
                     "{story.quote}"
                   </p>
                   
                   <div className="flex items-center gap-5 mt-auto">
                      <div className="relative">
                         <img src={story.img} className="w-16 h-16 rounded-[2rem] object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500" alt={story.author} />
                         <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-${story.color}-500 border-4 border-white flex items-center justify-center`}>
                            <Heart className="h-2.5 w-2.5 text-white fill-current" />
                         </div>
                      </div>
                      <div>
                         <div className="font-black text-slate-900 text-lg tracking-tight">{story.author}</div>
                         <div className={`text-[10px] font-black text-${story.color}-600 uppercase tracking-widest mt-1`}>{story.role}</div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
          >
             <button className="inline-flex items-center gap-2 text-slate-400 font-black text-xs uppercase tracking-[0.3em] hover:text-emerald-600 transition-colors group">
                <Activity className="h-4 w-4 group-hover:animate-pulse" /> Read more success stories from our network
             </button>
          </motion.div>
        </div>
      </section>

      {/* Safety & Verification - The Operational Vault */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        {/* Subtle Engineering Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
           <div className="absolute inset-0 bg-[linear-gradient(30deg,#f8fafc_12%,transparent_12.5%,transparent_87%,#f8fafc_87.5%,#f8fafc),linear-gradient(150deg,#f8fafc_12%,transparent_12.5%,transparent_87%,#f8fafc_87.5%,#f8fafc),linear-gradient(30deg,#f8fafc_12%,transparent_12.5%,transparent_87%,#f8fafc_87.5%,#f8fafc),linear-gradient(150deg,#f8fafc_12%,transparent_12.5%,transparent_87%,#f8fafc_87.5%,#f8fafc),linear-gradient(60deg,#f1f5f9_25%,transparent_25.5%,transparent_75%,#f1f5f9_75%,#f1f5f9),linear-gradient(60deg,#f1f5f9_25%,transparent_25.5%,transparent_75%,#f1f5f9_75%,#f1f5f9)] bg-[size:80px_140px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                 <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-16 bg-emerald-500"></div>
                    <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.5em]">Safe-Ops Protocol v2.0</span>
                 </div>
                 
                 <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.85]">
                   Every batch <br/> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                     Forensically Verified.
                   </span>
                 </h2>
                 
                 <p className="text-slate-500 text-2xl font-medium leading-relaxed mb-12 opacity-80">
                   Our multi-layer safety system ensures every rescued meal meets international gold standards for <span className="text-slate-900">hygiene</span> and <span className="text-slate-900">thermal integrity</span>.
                 </p>

                 <div className="grid gap-6">
                    {[
                      { icon: ShieldCheck, title: "Thermal Integrity Tracking", desc: "Real-time cold-chain monitoring from venue to NGO.", status: "Active" },
                      { icon: Activity, title: "AI Spoilage Detection", desc: "Computer vision analysis of food quality during pickup.", status: "Scanning" },
                      { icon: Award, title: "HACCP Certified Logistics", desc: "Compliant with global food safety management systems.", status: "Verified" }
                    ].map((item, i) => (
                      <motion.div 
                        key={item.id || i}
                        whileHover={{ x: 15 }}
                        className="flex gap-8 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all group"
                      >
                         <div className="w-16 h-16 rounded-2xl bg-slate-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
                            <item.icon className="h-8 w-8" />
                         </div>
                         <div className="flex-grow">
                            <div className="flex justify-between items-start mb-1">
                               <h4 className="font-black text-slate-900 text-lg">{item.title}</h4>
                               <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">{item.status}</span>
                            </div>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 <motion.div className="mt-16">
                    <Link to="/safety" className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-emerald-600 transition-all shadow-2xl group">
                       EXPLORE TECHNICAL DOCS <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                 </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                 {/* High-Tech Safety Radar Visual */}
                 <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                    {/* Pulsing Outer Rings */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-[1px] border-dashed border-emerald-200 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 border-[1px] border-emerald-100 rounded-full"
                    />
                    
                    {/* Main Vault Panel */}
                    <div className="absolute inset-16 bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(16,185,129,0.15)] border border-slate-100 flex flex-col items-center justify-center p-12 overflow-hidden">
                       {/* Animated Scan Line */}
                       <motion.div 
                         animate={{ top: ['-20%', '120%'] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-10"
                       />
                       
                       <div className="relative z-20 text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/40"
                          >
                             <ShieldCheck className="h-12 w-12" />
                          </motion.div>
                          
                          <div className="space-y-1">
                             <motion.div 
                               initial={{ opacity: 0 }}
                               whileInView={{ opacity: 1 }}
                               className="text-8xl font-black text-slate-900 tracking-tighter"
                             >
                                99.9<span className="text-emerald-500">%</span>
                             </motion.div>
                             <div className="text-slate-400 font-black text-xs uppercase tracking-[0.4em]">Safety Compliance Rate</div>
                          </div>

                          <div className="grid grid-cols-2 gap-10 mt-16 pt-10 border-t border-slate-50">
                             <div className="text-left">
                                <div className="text-2xl font-black text-slate-900 tracking-tight">HACCP</div>
                                <div className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mt-1">Verified Logistics</div>
                             </div>
                             <div className="text-left border-l border-slate-100 pl-10">
                                <div className="text-2xl font-black text-slate-900 tracking-tight">ISO 22000</div>
                                <div className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mt-1">Quality Standards</div>
                             </div>
                          </div>
                       </div>

                       {/* Decorative Hexagon Grid */}
                       <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
                    </div>
                    
                    {/* Floating Status Nodes */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -20, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3 + i, 
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        className={`absolute w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]`}
                        style={{ 
                          top: i === 0 ? '10%' : i === 1 ? '85%' : i === 2 ? '45%' : '45%',
                          left: i === 0 ? '45%' : i === 1 ? '45%' : i === 2 ? '5%' : '90%'
                        }}
                      />
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Sustainability Analytics - Interactive Impact Dashboard */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        {/* Holographic Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#10b98115_0%,transparent_50%)]"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#3b82f615_0%,transparent_50%)]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="flex items-center gap-4 mb-8"
                 >
                    <div className="h-px w-12 bg-emerald-500"></div>
                    <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em]">Environmental Analytics v2.4</span>
                 </motion.div>
                 
                 <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85]">
                   Quantifying <br/> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                     Global Impact.
                   </span>
                 </h2>
                 
                 <p className="text-slate-400 text-2xl font-medium leading-relaxed mb-16 opacity-80">
                   Our proprietary algorithms calculate the <span className="text-white">carbon-offset</span> and <span className="text-white">social utility</span> of every rescue mission in real-time.
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { label: "Methane Diverted", value: "850k", unit: "m³", icon: Leaf },
                      { label: "Water Conserved", value: "12M", unit: "Liters", icon: Globe }
                    ].map((metric, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl"
                      >
                         <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-8">
                            <metric.icon className="h-6 w-6" />
                         </div>
                         <div className="text-5xl font-black text-white tracking-tighter mb-2">{metric.value}<span className="text-emerald-500 text-2xl ml-1">{metric.unit}</span></div>
                         <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{metric.label}</div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 w-full">
                 <div className="relative group p-1 rounded-[4rem] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 overflow-hidden">
                    <div className="bg-slate-900/50 backdrop-blur-3xl p-12 rounded-[3.8rem] relative z-10">
                       <div className="flex justify-between items-center mb-12">
                          <h3 className="text-2xl font-black text-white tracking-tight">Mission Impact Simulator</h3>
                          <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">Live Calc</div>
                       </div>

                       <div className="space-y-10">
                          <div>
                             <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Rescue Volume (KG)</label>
                             <div className="relative">
                                <input 
                                  type="number" 
                                  value={calculatorInput}
                                  onChange={(e) => setCalculatorInput(e.target.value)}
                                  placeholder="Enter weight..."
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-2xl font-black text-white placeholder-slate-700 focus:border-emerald-500/50 transition-all outline-none"
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-black">KG</div>
                             </div>
                          </div>

                          <button 
                            onClick={calculateImpact}
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-6 rounded-2xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95"
                          >
                             GENERATE TELEMETRY
                          </button>

                          <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                             <div className="space-y-1">
                                <div className="text-4xl font-black text-white tracking-tighter">{calculatorResult.meals}</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nourishment Units</div>
                             </div>
                             <div className="space-y-1 border-l border-white/5 pl-8">
                                <div className="text-4xl font-black text-emerald-500 tracking-tighter">{calculatorResult.co2}</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">KG CO2 OFFSET</div>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    {/* Animated Data Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                       {[...Array(6)].map((_, i) => (
                         <motion.div
                           key={i}
                           animate={{ 
                             y: [-20, 20],
                             x: [-10, 10],
                             opacity: [0, 1, 0]
                           }}
                           transition={{ duration: 3 + i, repeat: Infinity }}
                           className="absolute w-1 h-1 bg-emerald-500 rounded-full"
                           style={{ 
                             top: `${Math.random() * 100}%`,
                             left: `${Math.random() * 100}%`
                           }}
                         />
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Operational Command Hubs - Network Visualization */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10"
              >
                 <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                 </div>
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Global Node Expansion</span>
              </motion.div>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10">
                Operational <span className="text-blue-600">Command Hubs.</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { city: "Kolkata", role: "Primary Node", status: "Operational", color: "emerald" },
                   { city: "Mumbai", role: "Logistics Hub", status: "Active", color: "blue" },
                   { city: "Delhi", role: "Relief Center", status: "Active", color: "indigo" },
                   { city: "Bangalore", role: "Tech Command", status: "Scaling", color: "amber" }
                 ].map((hub, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ scale: 1.05 }}
                     className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-4xl transition-all duration-500"
                   >
                      <div className={`w-3 h-3 rounded-full bg-${hub.color}-500 mb-6 shadow-2xl shadow-${hub.color}-500/40`}></div>
                      <h4 className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{hub.city}</h4>
                      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-6">{hub.role}</p>
                      <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{hub.status}</span>
                         <ArrowRight className="h-4 w-4 text-slate-300" />
                      </div>
                   </motion.div>
                 ))}
              </div>

              <div className="relative">
                 {/* Hub Network Abstract Visualization */}
                 <div className="aspect-square relative rounded-[5rem] overflow-hidden bg-slate-900 p-1">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-emerald-600/20"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
                    
                    {/* Animated Connections */}
                    <svg className="absolute inset-0 w-full h-full p-20 z-10" viewBox="0 0 100 100">
                       <circle cx="20" cy="30" r="2" fill="#10b981" />
                       <circle cx="80" cy="40" r="2" fill="#3b82f6" />
                       <circle cx="50" cy="80" r="2" fill="#6366f1" />
                       <circle cx="30" cy="70" r="2" fill="#f59e0b" />
                       
                       <motion.line 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 2, repeat: Infinity }}
                         x1="20" y1="30" x2="80" y2="40" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" 
                       />
                       <motion.line 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                         x1="80" y1="40" x2="50" y2="80" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" 
                       />
                       <motion.line 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                         x1="50" y1="80" x2="20" y2="30" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" 
                       />
                    </svg>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center space-y-4">
                          <Trophy className="h-20 w-20 text-white mx-auto opacity-20" />
                          <div className="text-white font-black text-xs uppercase tracking-[0.5em] opacity-40">Network Matrix Active</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Digest - The Community Gravity Well */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="relative group p-1 md:p-2 rounded-[5rem] bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 shadow-[0_50px_100px_rgba(16,185,129,0.2)]">
              <div className="bg-slate-950 p-16 md:p-28 rounded-[4.5rem] text-center relative overflow-hidden">
                 {/* Animated Liquid Aura */}
                 <div className="absolute inset-0 z-0">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] bg-emerald-500 rounded-full blur-[120px]"
                    />
                    <motion.div 
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-[50%] -right-[20%] w-[100%] h-[100%] bg-blue-500 rounded-full blur-[120px]"
                    />
                 </div>

                 {/* Floating Parallax Icons */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[Mail, Bell, Zap, Star].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -40, 0],
                          x: [0, 20, 0],
                          rotate: [0, 15, 0]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, delay: i }}
                        className="absolute opacity-[0.05] text-white"
                        style={{ 
                          top: i === 0 ? '15%' : i === 1 ? '70%' : i === 2 ? '20%' : '75%',
                          left: i === 0 ? '10%' : i === 1 ? '15%' : i === 2 ? '85%' : '80%'
                        }}
                      >
                         <Icon className="h-32 w-32" />
                      </motion.div>
                    ))}
                 </div>

                 <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/40 rotate-12"
                    >
                       <Mail className="h-10 w-10 stroke-[2.5]" />
                    </motion.div>
                    
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85]">
                      Stay in the <br/> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                        Global Loop.
                      </span>
                    </h2>
                    
                    <p className="text-slate-400 text-2xl font-medium mb-16 leading-relaxed opacity-90">
                      Join <span className="text-white font-black">12,000+ change-makers</span> receiving weekly impact digests, rescue alerts, and sustainability deep-dives.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5 p-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] max-w-xl mx-auto group/input hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                       <input 
                         type="email" 
                         placeholder="Enter your professional email"
                         className="bg-transparent border-none focus:ring-0 px-8 py-5 text-white placeholder-slate-500 flex-grow font-black text-lg tracking-tight"
                       />
                       <button className="relative overflow-hidden bg-white text-slate-950 font-black px-12 py-5 rounded-[2.5rem] transition-all hover:scale-105 active:scale-95 shadow-xl group/btn whitespace-nowrap text-lg">
                          <span className="relative z-10">Sign Me Up</span>
                          <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                       </button>
                    </div>
                    
                    {/* Social Proof Avatars */}
                    <div className="mt-16 flex flex-col items-center gap-6">
                       <div className="flex -space-x-4">
                          {[1,2,3,4].map(i => (
                            <img 
                              key={i} 
                              src={`https://i.pravatar.cc/100?img=${i+40}`} 
                              className="w-12 h-12 rounded-full border-4 border-slate-950 shadow-2xl transition-transform hover:scale-125 hover:z-50" 
                              alt="Joiner" 
                            />
                          ))}
                          <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs border-4 border-slate-950 shadow-2xl">
                             +8k
                          </div>
                       </div>
                       <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
                          No spam. Just Impact. Unsubscribe anytime.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Leaderboard - Gamification */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
               <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-600 font-black text-xs uppercase tracking-[0.3em]">Community Champions</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                 Impact <span className="text-amber-500">Leaderboard.</span>
               </h2>
               <p className="text-slate-500 text-xl font-medium">Recognizing the heroes who turn surplus into hope every single week.</p>
            </div>
            <div className="flex -space-x-4">
               {[1,2,3,4,5].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-16 h-16 rounded-full border-4 border-white shadow-xl" alt="Top User" />
               ))}
               <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm border-4 border-white shadow-xl">+800</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", points: "12,400", rescues: "45", rank: "1", color: "amber" },
              { name: "Priya K.", points: "10,850", rescues: "38", rank: "2", color: "slate" },
              { name: "Amit B.", points: "9,200", rescues: "32", rank: "3", color: "orange" }
            ].map((user, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-10 rounded-[3.5rem] bg-white border-slate-50 shadow-xl relative overflow-hidden group"
              >
                 <div className={`absolute top-0 right-0 w-32 h-32 bg-${user.color}-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
                 <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-20 h-20 rounded-[2rem] object-cover shadow-lg" alt={user.name} />
                       <div className={`absolute -top-2 -left-2 w-10 h-10 rounded-full bg-${user.color}-500 text-white flex items-center justify-center font-black shadow-xl border-4 border-white`}>
                          #{user.rank}
                       </div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900">{user.name}</h3>
                       <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Rescuer Elite</p>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact Points</div>
                       <div className="text-xl font-black text-slate-900">{user.points}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Rescues</div>
                       <div className="text-xl font-black text-slate-900">{user.rescues}</div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Call to Action */}
      <section className="py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="bg-emerald-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(16,185,129,0.3)]">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
               <div className="relative z-10">
                  <h2 className="text-6xl font-black mb-8 tracking-tighter">Ready to join the <br/> <span className="text-slate-900 italic">ZeroWaste</span> movement?</h2>
                  <p className="text-emerald-50 text-xl font-medium mb-12 max-w-2xl mx-auto opacity-90">Start donating surplus food or join as a logistics partner to help us bridge the gap between waste and hunger.</p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <button 
                       onClick={() => navigate('/login')}
                       className="bg-white text-emerald-600 font-black px-12 py-6 rounded-[2.5rem] text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl"
                     >
                        Register as Partner
                     </button>
                     <button 
                       onClick={() => navigate('/policy')}
                       className="bg-emerald-700 text-white font-black px-12 py-6 rounded-[2.5rem] text-lg hover:bg-emerald-800 transition-all"
                     >
                        Learn More
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Home />
              </motion.div>
            } />
            <Route path="/donate" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <PostFood />
              </motion.div>
            } />
            <Route path="/map" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <MapView />
              </motion.div>
            } />
            <Route path="/dashboard" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Dashboard />
              </motion.div>
            } />
            <Route path="/profile" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Profile />
              </motion.div>
            } />
            <Route path="/ngo" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <NGOPanel />
              </motion.div>
            } />
            <Route path="/admin" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <AdminPanel />
              </motion.div>
            } />
            <Route path="/events" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <EventDonations />
              </motion.div>
            } />
            <Route path="/safety" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <SafetySystem />
              </motion.div>
            } />
            <Route path="/track" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <PickupTracking />
              </motion.div>
            } />
            <Route path="/login" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                 <Login />
              </motion.div>
            } />
            <Route path="/policy" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                 <PolicyManual />
              </motion.div>
            } />
            <Route path="/leaderboard" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                 <Leaderboard />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="glass-panel rounded-full px-8 py-3 inline-block shadow-sm">
            <p className="text-slate-500 text-sm font-bold tracking-wide">&copy; 2026 ZeroWaste. Building a sustainable future.</p>
          </div>
        </div>
      </footer>

      {/* Persistent Mission FAB (Floating Action Button) */}
      <motion.div 
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-[100]"
      >
         <Link 
           to="/donate" 
           className="group relative flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95"
         >
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-900 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
               <Zap className="h-6 w-6" />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.3em]">Initiate Rescue</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
               <ChevronRight className="h-4 w-4" />
            </div>
         </Link>
      </motion.div>
    </div>
  )
}

export default App
