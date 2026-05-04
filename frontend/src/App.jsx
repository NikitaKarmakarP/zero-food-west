import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { MapPin, Utensils, Award, Leaf, ChevronRight, Heart, Bell, Globe, Users, Activity, Zap, Star, MessageSquare, ShieldCheck, Mail, ArrowRight, Trophy, Calculator, Radar, Sun, Moon, User, Settings, LogOut, LayoutDashboard, Plus, Minus } from 'lucide-react'
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
import SmartRecipe from './pages/SmartRecipe'
import SettingsPage from './pages/Settings'
import { useAppContext } from './context/AppContext'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, t, language, setLanguage, notifications, markAllAsRead, clearNotifications, theme, toggleTheme, increaseFontSize, decreaseFontSize, fontSizeScale } = useAppContext()
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const unreadCount = notifications.filter(n => n.unread).length;
  
  const navItems = [
    { name: t('donate'), path: '/donate' },
    { name: t('events'), path: '/events' },
    { name: t('map'), path: '/map' },
    { name: 'Recipes', path: '/recipes' },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 px-4 md:px-8' : 'py-6 px-4 md:px-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative group mx-auto">
          {/* Subtle Outer Glow */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl transition-all duration-700 ${scrolled ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
          
          <div className="relative backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80 border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-[2.5rem] px-6 py-3.5 flex justify-between items-center transition-all duration-500 ring-1 ring-black/5 dark:ring-white/5">
              
              {/* Brand Logo */}
              <Link to="/" className="flex items-center gap-3 group/logo relative z-10">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/30 group-hover/logo:shadow-emerald-500/50 group-hover/logo:scale-105 transition-all duration-300">
                  <Leaf className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  Zero<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Waste</span><span className="text-emerald-500">.</span>
                </span>
              </Link>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-2 relative z-10">
                {navItems.map(item => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className="relative px-4 py-2 rounded-xl group/nav overflow-hidden transition-all"
                  >
                    <span className={`relative z-10 font-semibold text-sm transition-colors duration-300 ${
                      location.pathname === item.path ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300 group-hover/nav:text-slate-900 dark:group-hover/nav:text-white'
                    }`}>
                      {item.name}
                    </span>
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 scale-95 group-hover/nav:scale-100" />
                  </Link>
                ))}
              </div>

              {/* Action Tools */}
              <div className="flex items-center gap-3 relative z-10">
                {/* Font Size Toggle */}
                <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-white/5 rounded-xl p-1 gap-1 border border-slate-200 dark:border-white/10">
                  <button 
                    onClick={decreaseFontSize}
                    disabled={fontSizeScale <= 0.8}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all disabled:opacity-30"
                    aria-label="Decrease Font Size"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-[10px] font-black text-slate-400 px-1 w-8 text-center">{Math.round(fontSizeScale * 100)}%</span>
                  <button 
                    onClick={increaseFontSize}
                    disabled={fontSizeScale >= 1.5}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all disabled:opacity-30"
                    aria-label="Increase Font Size"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl bg-slate-100/50 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>

                {/* Notifications */}
                {user && (
                  <div className="relative">
                    <button 
                      onClick={() => {
                        setShowNotifications(!showNotifications);
                        if (!showNotifications) markAllAsRead();
                      }}
                      className={`relative p-2.5 rounded-xl transition-all ${
                        showNotifications 
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-slate-100/50 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <Bell className="h-4 w-4" />
                      {unreadCount > 0 && (
                        <span className="absolute top-1 right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500 border-2 border-white dark:border-slate-900"></span>
                        </span>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {showNotifications && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-4 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl z-50 overflow-hidden"
                        >
                          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                            <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                            {notifications.length > 0 && (
                              <button onClick={clearNotifications} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">Clear all</button>
                            )}
                          </div>
                          <div className="max-h-80 overflow-y-auto no-scrollbar py-2">
                            {notifications.length === 0 ? (
                              <div className="py-12 text-center flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-3">
                                  <Bell className="h-5 w-5 text-slate-400" />
                                </div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">You're all caught up</p>
                              </div>
                            ) : (
                              notifications.map(notif => (
                                <div 
                                  key={notif.id} 
                                  onClick={() => {
                                    setShowNotifications(false);
                                    if (notif.path) navigate(notif.path);
                                  }}
                                  className="px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group/msg border-b border-slate-50 dark:border-slate-800/50 last:border-0"
                                >
                                  <div className="flex justify-between items-start mb-1">
                                    <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover/msg:text-emerald-600 dark:group-hover/msg:text-emerald-400 transition-colors">{notif.title}</span>
                                    {notif.unread && <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />}
                                  </div>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2 line-clamp-2">{notif.message}</p>
                                  <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{notif.time}</span>
                                </div>
                              ))
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Profile/Auth Dropdown */}
                <div className="relative">
                  {user ? (
                    <div className="flex items-center">
                      <button 
                        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all group shadow-sm hover:shadow-md"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                          {user.name?.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="hidden sm:flex flex-col items-start mr-1">
                          <span className="font-semibold text-xs text-slate-900 dark:text-white">{user.name}</span>
                          <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 capitalize">{user.role}</span>
                        </div>
                        <ChevronRight className={`h-3 w-3 text-slate-400 transition-transform duration-300 hidden sm:block ${showProfileDropdown ? 'rotate-90' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {showProfileDropdown && (
                          <>
                            {/* Backdrop to close */}
                            <div 
                              className="fixed inset-0 z-[-1]" 
                              onClick={() => setShowProfileDropdown(false)}
                            />
                            
                            <motion.div 
                              initial={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(10px)' }}
                              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                              exit={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(5px)' }}
                              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                              className="absolute right-0 mt-6 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-2 border-white dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] z-[110] overflow-hidden ring-1 ring-black/5 dark:ring-white/5"
                            >
                              {/* Dropdown Header - Tactical Profile Summary */}
                              <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                                <div className="flex items-center gap-5 mb-8">
                                  <div className="relative group/avatar">
                                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-2xl blur opacity-30 group-hover/avatar:opacity-50 transition-opacity"></div>
                                    <div className="relative w-14 h-14 rounded-2xl bg-slate-900 dark:bg-black border border-white/20 flex items-center justify-center text-white font-black text-xl shadow-inner overflow-hidden">
                                      <img 
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}&backgroundColor=020617`} 
                                        alt="Avatar" 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight leading-none mb-1">{user.name}</span>
                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate w-40">{user.email}</span>
                                  </div>
                                </div>
                                
                                {/* Impact Points - High Visibility Module */}
                                <div className="relative group/impact cursor-default">
                                   <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-sm opacity-20 group-hover/impact:opacity-40 transition-opacity"></div>
                                   <div className="relative flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                                      <div className="flex items-center gap-3">
                                         <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                            <Zap className="h-5 w-5 fill-emerald-500" />
                                         </div>
                                         <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Impact_Points</span>
                                      </div>
                                      <span className="text-xl font-black text-slate-900 dark:text-white tabular-nums italic">{user.points || 0}</span>
                                   </div>
                                </div>
                              </div>

                              {/* Dropdown Menu - Functional Nodes */}
                              <div className="p-3 space-y-1">
                                <Link 
                                  to="/profile" 
                                  onClick={() => setShowProfileDropdown(false)}
                                  className="flex items-center justify-between group/link px-5 py-4 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all font-bold text-sm"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 group-hover/link:bg-emerald-500/20 transition-colors text-slate-400 group-hover/link:text-emerald-500">
                                      <User className="h-4 w-4" />
                                    </div>
                                    <span className="uppercase tracking-widest text-[11px]">My Profile</span>
                                  </div>
                                  <ChevronRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                </Link>
                                
                                <Link 
                                  to="/dashboard" 
                                  onClick={() => setShowProfileDropdown(false)}
                                  className="flex items-center justify-between group/link px-5 py-4 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all font-bold text-sm"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 group-hover/link:bg-blue-500/20 transition-colors text-slate-400 group-hover/link:text-blue-500">
                                      <LayoutDashboard className="h-4 w-4" />
                                    </div>
                                    <span className="uppercase tracking-widest text-[11px]">Dashboard</span>
                                  </div>
                                  <ChevronRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                </Link>

                                <Link 
                                  to="/settings"
                                  onClick={() => setShowProfileDropdown(false)}
                                  className="flex items-center justify-between group/link px-5 py-4 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all font-bold text-sm"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 group-hover/link:bg-slate-200 dark:group-hover/link:bg-white/20 transition-colors text-slate-400 group-hover/link:text-slate-900 dark:group-hover/link:text-white">
                                      <Settings className="h-4 w-4" />
                                    </div>
                                    <span className="uppercase tracking-widest text-[11px]">Settings</span>
                                  </div>
                                  <ChevronRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                </Link>
                                
                                <div className="h-px bg-slate-100 dark:bg-white/5 my-3 mx-4" />
                                
                                <button 
                                  onClick={() => {
                                    setShowProfileDropdown(false);
                                    logout();
                                  }}
                                  className="w-full flex items-center justify-between group/logout px-5 py-4 rounded-2xl text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all font-bold text-sm"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-500/10 group-hover/logout:bg-rose-500 group-hover/logout:text-white transition-all text-rose-500">
                                      <LogOut className="h-4 w-4" />
                                    </div>
                                    <span className="uppercase tracking-widest text-[11px]">Sign Out</span>
                                  </div>
                                  <div className="text-[10px] font-black uppercase tracking-widest opacity-30 group-hover/logout:opacity-100 transition-opacity">Exit</div>
                                </button>
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to="/login" 
                      className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      Sign In <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                >
                  <Activity className={`h-5 w-5 transition-transform ${isMobileMenuOpen ? 'rotate-90 text-emerald-500' : ''}`} />
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="md:hidden mx-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map(item => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex justify-between items-center text-base"
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
              {user ? (
                <div className="flex flex-col gap-2">
                  <div className="px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                      {user.name?.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white text-base">{user.name}</span>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 capitalize">{user.role}</span>
                    </div>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex items-center gap-3"
                  >
                    <User className="h-5 w-5" /> View Profile
                  </Link>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      logout();
                    }} 
                    className="px-6 py-4 rounded-xl font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all flex items-center gap-3 w-full text-left"
                  >
                    <LogOut className="h-5 w-5" /> Sign Out
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-full py-4 text-center font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl mt-2"
                >
                  Sign In
                </Link>
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-950 z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-50" 
            alt="Hero Background" 
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 text-emerald-400 font-black mb-10 text-xs uppercase tracking-[0.3em]"
          >
             <Users className="h-4 w-4" /> Join 850+ active volunteers today
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase italic"
          >
            Rescue <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Food.</span> <br/>
            Nourish <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Life.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-12 opacity-80"
          >
            The intelligent platform connecting surplus food from restaurants and events with NGOs to make zero food waste a reality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/donate" className="group bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/30 flex items-center gap-3">
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-400 dark:text-white/30"
        >
          <div className="w-6 h-10 border-2 border-slate-200 dark:border-white/20 rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-emerald-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats - Editorial Grid */}
      <section className="py-64 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
        {/* Cinematic Background Engineering */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Utensils, 
                label: "Meals Rescued", 
                value: "14,250", 
                color: "emerald", 
                delta: "+12.4%",
                desc: "High-integrity servings diverted from urban landfills with forensic precision.",
                glow: "group-hover:shadow-emerald-500/20"
              },
              { 
                icon: Users, 
                label: "Active Nodes", 
                value: "920+", 
                color: "blue", 
                delta: "+8.2%",
                desc: "Verified volunteer nodes dedicated to secure rapid-response distribution.",
                glow: "group-hover:shadow-blue-500/20"
              },
              { 
                icon: Leaf, 
                label: "Carbon Offset", 
                value: "5.8t", 
                color: "amber", 
                delta: "+15.1%",
                desc: "Environmental impact mitigation equivalent to 240 mature urban trees.",
                glow: "group-hover:shadow-amber-500/20"
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-12 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-3xl transition-all duration-1000 ${stat.glow} hover:border-emerald-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.03)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.4)]`}
              >
                {/* Dynamic Laser Scan */}
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  className="absolute left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent z-20 pointer-events-none"
                />

                {/* Background Dynamic Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${stat.color === 'amber' ? 'orange' : stat.color}-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>

                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-10">
                      <div className={`w-20 h-20 rounded-[2rem] bg-slate-50 dark:bg-white/5 text-${stat.color === 'amber' ? 'orange' : stat.color}-600 dark:text-${stat.color === 'amber' ? 'orange' : stat.color}-400 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
                         <stat.icon className="h-10 w-10" />
                      </div>
                      <div className="text-right">
                         <div className={`text-[10px] font-black text-${stat.color === 'amber' ? 'orange' : stat.color}-500 uppercase tracking-[0.4em] mb-1 italic`}>{stat.delta}</div>
                         <div className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Weekly Delta</div>
                      </div>
                   </div>
                   
                   <div className="space-y-4 mb-10">
                      <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.6em]">{stat.label}</div>
                      <div className="text-6xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-none tabular-nums italic">
                         {stat.value}
                      </div>
                   </div>
                   
                   <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {stat.desc}
                   </p>

                   <div className="flex items-center justify-between pt-10 border-t border-black/5 dark:border-white/5">
                      <div className="flex -space-x-4">
                         {[1,2,3,4].map(idx => (
                           <img key={idx} src={`https://i.pravatar.cc/100?img=${idx + i*10}`} className="w-10 h-10 rounded-xl border-4 border-white dark:border-[#020617] shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Node" />
                         ))}
                      </div>
                      <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-black text-[9px] uppercase tracking-widest italic">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                         LIVE_AUDIT
                      </div>
                   </div>
                </div>

                {/* Tactical HUD Overlay */}
                <div className="absolute bottom-8 right-12 opacity-[0.02] group-hover:opacity-10 transition-all duration-1000">
                   <stat.icon className="h-32 w-32" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Rescues - Tactical Intelligence Feed */}
      <section className="py-56 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
        {/* Tactical Command Overlays */}
        <div className="absolute inset-0 z-0">
           {/* High-Resolution Coordinate Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] opacity-60"></div>
           
           {/* Animated Data Tickers */}
           <div className="absolute top-20 left-10 opacity-10 flex flex-col gap-2 font-mono text-[8px] dark:text-emerald-500">
              {["SEC_UPLINK: ACTIVE", "NODES_SYNC: 94%", "DATA_STREAM: NOMINAL", "COORD: 22.5726° N"].map((t, i) => (
                <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>{t}</motion.div>
              ))}
           </div>
           
           <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-20">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-5 mb-8"
              >
                 <div className="relative h-4 w-4">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                 </div>
                 <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] italic">Mission_Intelligence_v10.4_PRO</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-10 leading-none uppercase italic">
                Active Missions <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">
                  Detected_Now.
                </span>
              </h2>
              
              <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-emerald-500/30 pl-10">
                High-fidelity telemetry for <span className="text-slate-950 dark:text-white font-black italic">verified relief nodes</span> requiring immediate logistics intervention in your regional sector.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group"
            >
               <Link to="/map" className="relative px-14 py-7 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-[2.5rem] font-black text-xs tracking-[0.3em] flex items-center gap-6 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-emerald-600 dark:hover:bg-emerald-500 group active:scale-95 uppercase italic">
                  RADAR_INTERFACE <Radar className="h-6 w-6 text-emerald-400 dark:text-emerald-600 group-hover:text-white dark:group-hover:text-slate-950 transition-colors animate-spin-slow" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-xs font-black shadow-4xl border-8 border-white dark:border-[#020617] animate-bounce text-slate-950">
                     {activeDonations.length}
                  </div>
               </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {activeDonations.slice(0, 3).map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group relative bg-white/[0.03] rounded-[5rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] hover:border-emerald-500/30 transition-all duration-1000 overflow-hidden backdrop-blur-3xl"
              >
                {/* Immersive Image Header */}
                <div className="h-96 relative overflow-hidden">
                   <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 3 }}
                    src={item.image || "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"} 
                    alt={item.foodName}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                   
                   {/* Urgent Status Overlay */}
                   <div className="absolute top-10 right-10">
                      <div className="px-8 py-3 bg-rose-500 text-white text-[10px] font-black rounded-2xl shadow-4xl flex items-center gap-4 border border-white/20 uppercase tracking-widest">
                         <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                         URGENT: {item.expiryTime.substring(11, 16)}
                      </div>
                   </div>

                   {/* Mission Distance */}
                   <div className="absolute bottom-10 left-10">
                      <div className="flex items-center gap-4 px-6 py-3 bg-black/60 backdrop-blur-3xl rounded-2xl border border-white/5 shadow-2xl">
                         <MapPin className="h-5 w-5 text-emerald-400" />
                         <span className="text-xs font-black text-white">{item.distance} <span className="text-slate-500 tracking-widest uppercase ml-1">OFFSET</span></span>
                      </div>
                   </div>
                </div>

                <div className="p-12">
                   <div className="mb-12">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="h-px w-10 bg-emerald-500"></div>
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Protocol: Active Recovery</span>
                      </div>
                      <h3 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-emerald-400 transition-colors leading-none uppercase italic">
                        {item.foodName}
                      </h3>
                      <div className="flex items-end gap-3 text-slate-600">
                         <span className="text-3xl font-black text-white leading-none tracking-tighter tabular-nums italic">{item.quantity}</span>
                         <span className="text-[9px] font-black uppercase tracking-[0.3em] mb-1">Units detected</span>
                      </div>
                   </div>

                   <button 
                    onClick={() => acceptDonation(item.id)}
                    className="w-full relative overflow-hidden bg-white/5 hover:bg-white text-slate-400 hover:text-slate-950 font-black py-6 rounded-[2.5rem] transition-all duration-700 flex items-center justify-center gap-5 group/btn border border-white/10 active:scale-95 text-[10px] uppercase tracking-[0.4em] italic"
                   >
                      <span className="relative z-10">DEPLOY TO MISSION</span>
                      <Zap className="h-4 w-4 fill-emerald-500 group-hover/btn:fill-slate-950 transition-colors" />
                   </button>
                </div>

                {/* Decorative Data Nodes */}
                <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none duration-1000">
                   <Radar className="h-48 w-48 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Lifecycle - The Mission Flow */}
      <section className="py-56 bg-slate-950 relative overflow-hidden transition-colors duration-500">
        {/* Background Engineering Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] -skew-x-12 translate-x-40 z-0 border-l border-white/5"></div>
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px] -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-40 gap-24">
            <div className="max-w-3xl">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.5em] mb-12 shadow-2xl backdrop-blur-3xl italic"
               >
                  <Activity className="h-4 w-4 text-emerald-400" /> Protocol Orchestration_v10.4
               </motion.div>
               <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">
                 Ballroom to Bowl <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">
                   under 90 minutes.
                 </span>
               </h2>
               <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-emerald-500/30 pl-10">
                 Hyper-optimized logistics node bridging the gap between urban surplus and community nourishment.
               </p>
            </div>
            
            <div className="flex flex-col gap-8 p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 shadow-inner backdrop-blur-3xl min-w-[320px]">
               <div className="flex items-center justify-between">
                  <div>
                    <div className="text-6xl font-black text-white tracking-tighter tabular-nums italic">90<span className="text-emerald-500 text-2xl ml-1">m</span></div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">AVG_RESPONSE</div>
                  </div>
                  <div className="w-px h-12 bg-white/10 mx-8"></div>
                  <div>
                    <div className="text-6xl font-black text-white tracking-tighter tabular-nums italic">100<span className="text-emerald-500 text-2xl ml-1">%</span></div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">INTEGRITY</div>
                  </div>
               </div>
               <div className="h-[1px] bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent rounded-full"></div>
               <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[8px] font-black text-emerald-500/60 uppercase tracking-[0.4em]">Real-time node optimization active</span>
               </div>
            </div>
          </div>

          <div className="relative">
             {/* Dynamic Animated Timeline Link */}
             <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[2px] bg-white/5 z-0 overflow-hidden rounded-full">
                <motion.div 
                   animate={{ left: ['-100%', '100%'] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
                />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                {[
                  { 
                    step: "01", 
                    title: "Node Registration", 
                    desc: "Broadcast your capacity to initialize standby priority across the regional rescue network.",
                    icon: Globe,
                    color: "emerald"
                  },
                  { 
                    step: "02", 
                    title: "Dynamic Pickup", 
                    desc: "GPS-optimized cold-chain assets intercept the node within minutes of local deployment.",
                    icon: MapPin,
                    color: "blue"
                  },
                  { 
                    step: "03", 
                    title: "Relief Sync", 
                    desc: "Resources are instantly logged and split across verified NGO nodes for forensic distribution.",
                    icon: Heart,
                    color: "rose"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                     <div className="relative p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-1000 group-hover:-translate-y-6 backdrop-blur-3xl shadow-6xl overflow-hidden">
                        {/* Background Floating Number */}
                        <div className="absolute top-8 right-12 text-[10rem] font-black text-white/[0.01] group-hover:text-emerald-500/[0.05] transition-colors duration-1000 select-none italic">
                           {item.step}
                        </div>

                        <div className="relative z-10">
                           <div className={`w-24 h-24 rounded-[2.5rem] bg-white/5 text-white flex items-center justify-center mb-12 shadow-inner border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
                              <item.icon className="h-10 w-10 text-emerald-400" />
                           </div>
                           
                           <h3 className="text-3xl font-black text-white mb-8 tracking-tighter group-hover:text-emerald-400 transition-colors uppercase italic leading-none">{item.title}</h3>
                           <p className="text-slate-400 font-medium leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                              {item.desc}
                           </p>
                        </div>
                        
                        {/* Interactive Step Pulse */}
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-6xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700">
                           <div className={`w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse`}></div>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Partner Showcase - Global Trust Gallery */}
      <section className="py-56 bg-white dark:bg-[#020617] overflow-hidden relative transition-colors duration-500">
        {/* Subtle Pro Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-40 dark:opacity-20"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-[#020617] via-transparent to-white dark:to-[#020617]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mb-40 text-center relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
           >
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10 backdrop-blur-3xl">
                 <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
                 </div>
                 <span className="text-[10px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.5em] italic">Infrastructure Sync v4.2</span>
                 <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-3"></div>
                 <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">STATUS: NOMINAL</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-none mb-8 uppercase italic">
                Trusted by Global <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">Industry Leaders.</span>
              </h2>
              
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-xl leading-relaxed border-t border-black/5 dark:border-white/5 pt-8">
                Our high-integrity protocol is the gold standard for <span className="text-slate-950 dark:text-white font-black italic">enterprise-grade</span> food rescue operations across the global node.
              </p>
           </motion.div>
        </div>

        <div className="relative z-10 space-y-16">
          {/* Top Marquee - Professional Styled */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-12 py-8 animate-marquee whitespace-nowrap min-w-full">
              {[
                'Grand Hyatt', 'Marriott Intl', 'Feeding India', 'Global Food Lab', 
                'NGO Connect', 'Kolkata Caterers', 'Green Earth', 'Aman Resorts'
              ].concat(['Grand Hyatt', 'Marriott Intl', 'Feeding India', 'Global Food Lab', 'NGO Connect', 'Kolkata Caterers', 'Green Earth', 'Aman Resorts']).map((brand, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="inline-flex items-center gap-8 px-12 py-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 shadow-4xl hover:border-emerald-500/30 transition-all duration-700 group/badge backdrop-blur-3xl"
                >
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover/badge:bg-emerald-500 group-hover/badge:text-slate-950 transition-all shadow-inner border border-black/5 dark:border-white/10">
                      <Globe className="h-8 w-8 text-slate-950 dark:text-white group-hover/badge:text-slate-950" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">{brand}</span>
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mt-1">Verified Partner</span>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee - Opposite Direction */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-12 py-8 animate-marquee-reverse whitespace-nowrap min-w-full">
              {[
                'Four Seasons', 'Compass Group', 'Hilton Worldwide', 'World Central Kitchen',
                'Taj Hotels', 'Red Cross', 'United Nations', 'Sodexo'
              ].concat(['Four Seasons', 'Compass Group', 'Hilton Worldwide', 'World Central Kitchen', 'Taj Hotels', 'Red Cross', 'United Nations', 'Sodexo']).map((brand, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: 10, scale: 1.05 }}
                  className="inline-flex items-center gap-8 px-12 py-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 shadow-4xl hover:border-blue-500/30 transition-all duration-700 group/badge backdrop-blur-3xl"
                >
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover/badge:bg-blue-500 group-hover/badge:text-white transition-all shadow-inner border border-black/5 dark:border-white/10">
                      <Zap className="h-8 w-8 text-slate-950 dark:text-white group-hover/badge:text-white" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">{brand}</span>
                      <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mt-1">Network Node</span>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Impact Stories - Testimonials */}
      <section className="py-56 bg-white dark:bg-[#020617] relative overflow-hidden">
        {/* Ghost Background Text */}
        <div className="absolute top-0 right-0 text-[30rem] font-black text-black/[0.01] dark:text-white/[0.01] select-none pointer-events-none -translate-y-1/2 translate-x-1/4 italic">
           VOICES
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
            <div className="max-w-3xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="h-[2px] w-16 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em]">Community Validation Hub</span>
               </div>
               <h2 className="text-7xl md:text-[9xl] font-black text-slate-950 dark:text-white tracking-tighter mb-12 leading-[0.85]">
                 Voices of the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 italic">Movement.</span>
               </h2>
               <p className="text-slate-500 text-3xl font-medium leading-relaxed max-w-2xl">Bridging the gap between <span className="text-slate-950 dark:text-white">urban surplus</span> and social impact through high-integrity logistics.</p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-12 rounded-[4rem] bg-white dark:bg-white/[0.03] shadow-4xl flex items-center gap-8 border border-black/5 dark:border-white/5 backdrop-blur-3xl"
            >
               <div className="w-20 h-20 rounded-[2.5rem] bg-emerald-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] dark:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  <Star className="h-10 w-10 fill-current" />
               </div>
               <div>
                  <div className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums">4.9/5</div>
                  <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-2">GLOBAL_COMMUNITY_RATING</div>
               </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="group relative p-16 rounded-[5rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-1000 overflow-hidden backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.05)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                <MessageSquare className="h-32 w-32 text-slate-950 dark:text-white opacity-[0.02] absolute -bottom-8 -right-8 group-hover:scale-110 transition-transform duration-1000" />

                <div className="relative z-10">
                   <div className="flex gap-1.5 mb-12">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-emerald-500 text-emerald-500" />)}
                   </div>
                   
                   <p className="text-slate-500 dark:text-slate-400 font-bold italic text-3xl leading-relaxed mb-16 tracking-tight group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-700">
                     "{story.quote}"
                   </p>
                   
                   <div className="flex items-center gap-6 mt-auto">
                      <div className="relative">
                         <img src={story.img} className="w-20 h-20 rounded-[2.5rem] object-cover shadow-4xl group-hover:scale-110 transition-transform duration-700 border border-black/5 dark:border-white/10" alt={story.author} />
                         <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-[#020617] flex items-center justify-center shadow-2xl`}>
                            <Heart className="h-3 w-3 text-white dark:text-slate-950 fill-current" />
                         </div>
                      </div>
                      <div>
                         <div className="font-black text-slate-950 dark:text-white text-2xl tracking-tighter uppercase italic">{story.author}</div>
                         <div className={`text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mt-1`}>{story.role}</div>
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
      <section className="py-56 bg-slate-50 dark:bg-[#0a0f1e] relative overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
        {/* Forensic Engineering Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>
           <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-white/[0.01] -skew-x-12 translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                 <div className="flex items-center gap-6 mb-10">
                    <div className="h-[2px] w-16 bg-emerald-500"></div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] italic">Safe-Ops Protocol v3.0_UPLINK</span>
                 </div>
                 
                 <h2 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-10 leading-none uppercase italic">
                   Forensic <br/> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500">
                     Verification.
                   </span>
                 </h2>
                 
                 <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12 border-l-2 border-emerald-500/30 pl-10">
                   Our multi-layer safety architecture ensures every rescued node meets <span className="text-slate-950 dark:text-white font-black italic">international gold standards</span> for thermal integrity and bio-security.
                 </p>

                 <div className="grid gap-8">
                    {[
                      { icon: ShieldCheck, title: "Thermal Node Tracking", desc: "Real-time cold-chain monitoring from venue to NGO sector.", status: "SECURE_SYNC" },
                      { icon: Activity, title: "AI Spoilage Audit", desc: "Neural vision analysis of food quality during pickup.", status: "ANALYZING" },
                      { icon: Award, title: "HACCP Gold Standard", desc: "Compliant with global food safety management systems.", status: "VERIFIED" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 20 }}
                        className="flex gap-8 p-10 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-emerald-500/40 transition-all duration-700 group backdrop-blur-3xl shadow-6xl hover:bg-white dark:hover:bg-white/[0.05]"
                      >
                         <div className="w-20 h-20 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner border border-black/5 dark:border-white/10">
                            <item.icon className="h-10 w-10" />
                         </div>
                         <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                               <h4 className="font-black text-slate-950 dark:text-white text-2xl tracking-tighter uppercase italic leading-none">{item.title}</h4>
                               <span className="text-[8px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">{item.status}</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 <motion.div className="mt-16">
                    <Link to="/safety" className="relative px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-[2.5rem] font-black text-[10px] tracking-[0.4em] flex items-center gap-6 transition-all shadow-6xl hover:bg-emerald-600 dark:hover:bg-emerald-500 group uppercase active:scale-95 italic">
                       ACCESS TECHNICAL VAULT <ArrowRight className="h-6 w-6 text-emerald-400 dark:text-emerald-600 group-hover:text-white dark:group-hover:text-slate-950 transition-colors" />
                    </Link>
                 </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                 {/* High-Tech Safety Radar Visual */}
                 <div className="relative aspect-square w-full max-w-[650px] mx-auto">
                    {/* Pulsing Outer Rings */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-[2px] border-dashed border-black/5 dark:border-white/5 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-12 border-[1px] border-emerald-500/20 rounded-full"
                    />
                    
                    {/* Main Vault Panel */}
                    <div className="absolute inset-24 bg-white dark:bg-white/[0.03] rounded-[6rem] shadow-[0_60px_120px_rgba(0,0,0,0.1)] dark:shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center p-20 overflow-hidden backdrop-blur-3xl">
                       {/* Animated Scan Line */}
                       <motion.div 
                         animate={{ top: ['-20%', '120%'] }}
                         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                         className="absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-10"
                       />
                       
                       <div className="relative z-20 text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-28 h-28 rounded-[2.5rem] bg-emerald-500 text-white flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                          >
                             <ShieldCheck className="h-14 w-14" />
                          </motion.div>
                          
                          <div className="space-y-4">
                             <motion.div 
                               initial={{ opacity: 0 }}
                               whileInView={{ opacity: 1 }}
                               className="text-7xl font-black text-slate-950 dark:text-white tracking-tighter tabular-nums leading-none"
                             >
                                99.9<span className="text-emerald-500">%</span>
                             </motion.div>
                             <div className="text-slate-400 dark:text-slate-600 font-black text-[10px] uppercase tracking-[0.5em]">SYSTEM_STABILITY_INDEX</div>
                          </div>

                          <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-black/5 dark:border-white/10">
                             <div className="text-left">
                                <div className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter italic uppercase leading-none">HACCP</div>
                                <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-2">Verified_Protocol</div>
                             </div>
                             <div className="text-left border-l border-black/5 dark:border-white/10 pl-12">
                                <div className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter italic uppercase leading-none">ISO_22K</div>
                                <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-2">Data_Ethics</div>
                             </div>
                          </div>
                       </div>

                       {/* Decorative Hexagon Grid Overlay */}
                       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] mix-blend-overlay"></div>
                    </div>
                    
                    {/* Floating Status Nodes */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -50, 0],
                          opacity: [0.2, 0.9, 0.2],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{ 
                          duration: 5 + i, 
                          repeat: Infinity,
                          delay: i * 0.8
                        }}
                        className={`absolute w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)]`}
                        style={{ 
                          top: i === 0 ? '5%' : i === 1 ? '90%' : i === 2 ? '45%' : i === 3 ? '15%' : i === 4 ? '75%' : i === 5 ? '50%' : i === 6 ? '25%' : '80%',
                          left: i === 0 ? '45%' : i === 1 ? '45%' : i === 2 ? '5%' : i === 3 ? '85%' : i === 4 ? '15%' : i === 5 ? '95%' : i === 6 ? '10%' : '85%'
                        }}
                      />
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Sustainability Analytics - Interactive Impact Dashboard */}
      <section className="py-56 bg-[#020617] relative overflow-hidden border-t border-white/5 transition-colors duration-500">
        {/* Holographic Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#10b98110_0%,transparent_50%)]"></div>
           <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#3b82f610_0%,transparent_50%)]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-32">
              <div className="lg:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="flex items-center gap-5 mb-10"
                 >
                    <div className="h-[2px] w-12 bg-emerald-500"></div>
                    <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] italic">Eco-Analytics v2.8</span>
                 </motion.div>
                 
                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none uppercase italic">
                   Quantifying <br/> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">
                     Global Impact.
                   </span>
                 </h2>
                 
                 <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12 opacity-80 border-l-2 border-emerald-500/30 pl-10">
                   Our neural algorithms process the <span className="text-white">carbon-offset telemetry</span> and social utility of every rescue mission in real-time.
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { label: "Methane Diverted", value: "850k", unit: "m³", icon: Leaf, color: "emerald" },
                      { label: "H2O Conserved", value: "12M", unit: "L", icon: Globe, color: "blue" }
                    ].map((metric, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="p-10 rounded-[4rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-700 shadow-6xl group"
                      >
                         <div className={`w-14 h-14 rounded-[1.5rem] bg-white/5 text-${metric.color}-400 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-${metric.color}-500 group-hover:text-slate-950 transition-all`}>
                            <metric.icon className="h-7 w-7" />
                         </div>
                         <div className="text-5xl font-black text-white tracking-tighter mb-3 tabular-nums italic">{metric.value}<span className={`text-${metric.color}-500 text-xl ml-2`}>{metric.unit}</span></div>
                         <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">{metric.label}</div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 w-full">
                 <div className="relative group p-1 rounded-[4rem] bg-gradient-to-br from-emerald-500/20 via-white/5 to-blue-500/20 border border-white/10 overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.5)]">
                    <div className="bg-[#020617]/80 backdrop-blur-3xl p-12 rounded-[3.5rem] relative z-10">
                       <div className="flex justify-between items-center mb-12">
                          <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">Impact_Simulator</h3>
                          <div className="px-5 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20">LIVE_TELEMETRY</div>
                       </div>

                       <div className="space-y-10">
                          <div>
                             <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4 italic">RESCUE_VOLUME_INPUT (KG)</label>
                             <div className="relative">
                                <input 
                                  type="number" 
                                  value={calculatorInput}
                                  onChange={(e) => setCalculatorInput(e.target.value)}
                                  placeholder="00.00"
                                  className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-6 text-3xl font-black text-white placeholder-slate-800 focus:border-emerald-500/50 transition-all outline-none tabular-nums"
                                />
                                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-600 font-black text-lg italic">KG</div>
                             </div>
                          </div>

                          <button 
                            onClick={calculateImpact}
                            className="w-full bg-white hover:bg-emerald-500 text-slate-950 font-black py-6 rounded-[2rem] transition-all shadow-6xl active:scale-95 text-[10px] uppercase tracking-[0.4em] group italic"
                          >
                             GENERATE MISSION TELEMETRY
                             <Zap className="h-4 w-4 inline-block ml-3 fill-emerald-500 group-hover:fill-slate-950 transition-colors" />
                          </button>

                          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                             <div className="space-y-2">
                                <div className="text-4xl font-black text-white tracking-tighter tabular-nums italic">{calculatorResult.meals}</div>
                                <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">NOURISHMENT_NODES</div>
                             </div>
                             <div className="space-y-2 border-l border-white/10 pl-8">
                                <div className="text-4xl font-black text-emerald-500 tracking-tighter tabular-nums italic">{calculatorResult.co2}</div>
                                <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">KG_CO2_DIVERTIED</div>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    {/* Animated Data Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-30">
                       {[...Array(12)].map((_, i) => (
                         <motion.div
                           key={i}
                           animate={{ 
                             y: [-50, 50],
                             x: [-20, 20],
                             opacity: [0, 1, 0]
                           }}
                           transition={{ duration: 4 + i, repeat: Infinity }}
                           className="absolute w-1 h-1 bg-emerald-500 rounded-full blur-[1px]"
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
      <section className="py-56 bg-[#020617] relative overflow-hidden">
        {/* Cinematic Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="text-center mb-40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-3xl"
              >
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                 </div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Global_Node_Expansion_v3.0</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none uppercase italic">
                Operational <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Command Hubs.</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="grid grid-cols-2 gap-10">
                 {[
                   { city: "Kolkata", role: "Primary Node", status: "NOMINAL", color: "emerald" },
                   { city: "Mumbai", role: "Logistics Hub", status: "ACTIVE", color: "blue" },
                   { city: "Delhi", role: "Relief Center", status: "ACTIVE", color: "indigo" },
                   { city: "Bangalore", role: "Tech Command", status: "UPLINKING", color: "amber" }
                 ].map((hub, i) => (
                   <motion.div 
                     key={i}
                     onClick={() => navigate('/map')}
                     whileHover={{ scale: 1.05, y: -10 }}
                     className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-700 backdrop-blur-3xl shadow-4xl group cursor-pointer"
                   >
                      <div className={`w-4 h-4 rounded-full bg-${hub.color === 'amber' ? 'orange' : hub.color}-500 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse`}></div>
                      <h4 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase italic">{hub.city}</h4>
                      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">{hub.role}</p>
                      <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                         <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{hub.status}</span>
                         <ArrowRight className="h-5 w-5 text-slate-700 group-hover:text-blue-400 transition-colors" />
                      </div>
                   </motion.div>
                 ))}
              </div>

              <div className="relative group">
                 {/* Hub Network Abstract Visualization */}
                 <div className="aspect-square relative rounded-[6rem] overflow-hidden bg-[#020617] border border-white/5 p-1 shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-emerald-600/10 z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px:32px] opacity-20"></div>
                    
                    {/* Animated Connections */}
                    <svg className="absolute inset-0 w-full h-full p-24 z-10" viewBox="0 0 100 100">
                       <defs>
                          <filter id="glow">
                             <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                             <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                             </feMerge>
                          </filter>
                       </defs>
                       
                       <circle cx="20" cy="30" r="3" fill="#10b981" filter="url(#glow)" />
                       <circle cx="80" cy="40" r="3" fill="#3b82f6" filter="url(#glow)" />
                       <circle cx="50" cy="80" r="3" fill="#6366f1" filter="url(#glow)" />
                       <circle cx="30" cy="70" r="3" fill="#f59e0b" filter="url(#glow)" />
                       
                       <motion.line 
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 0.3 }}
                         transition={{ duration: 3, repeat: Infinity }}
                         x1="20" y1="30" x2="80" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"
                       />
                       <motion.line 
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 0.3 }}
                         transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                         x1="80" y1="40" x2="50" y2="80" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"
                       />
                       <motion.line 
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 0.3 }}
                         transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                         x1="50" y1="80" x2="30" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"
                       />
                    </svg>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center space-y-6">
                          <Trophy className="h-24 w-24 text-white mx-auto opacity-[0.05] group-hover:opacity-10 transition-opacity duration-1000" />
                          <div className="text-white font-black text-xs uppercase tracking-[0.6em] opacity-20">Matrix_Active_Node_Sync</div>
                       </div>
                    </div>

                    {/* Animated Scan Bar */}
                    <motion.div 
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-blue-500/10 blur-[2px] z-20"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Digest - The Community Gravity Well */}
      <section className="py-56 bg-[#020617] relative overflow-hidden border-t border-white/5">
        {/* Cinematic Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="relative group p-2 rounded-[6rem] bg-gradient-to-tr from-emerald-500/20 via-white/5 to-blue-500/20 shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/5 overflow-hidden">
              <div className="bg-[#020617]/80 backdrop-blur-3xl p-24 md:p-40 rounded-[5.5rem] text-center relative overflow-hidden">
                 {/* Animated Liquid Aura */}
                 <div className="absolute inset-0 z-0">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 0],
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-[50%] -left-[20%] w-[120%] h-[120%] bg-emerald-500 rounded-full blur-[160px]"
                    />
                    <motion.div 
                      animate={{ 
                        scale: [1.3, 1, 1.3],
                        rotate: [0, -180, 0],
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-[50%] -right-[20%] w-[120%] h-[120%] bg-blue-500 rounded-full blur-[160px]"
                    />
                 </div>

                 {/* Floating Parallax Icons */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[Mail, Bell, Zap, Star].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -60, 0],
                          x: [0, 30, 0],
                          rotate: [0, 25, 0],
                          opacity: [0.02, 0.05, 0.02]
                        }}
                        transition={{ duration: 6 + i, repeat: Infinity, delay: i }}
                        className="absolute text-white"
                        style={{ 
                          top: i === 0 ? '10%' : i === 1 ? '75%' : i === 2 ? '15%' : '80%',
                          left: i === 0 ? '5%' : i === 1 ? '10%' : i === 2 ? '90%' : '85%'
                        }}
                      >
                         <Icon className="h-48 w-48" />
                      </motion.div>
                    ))}
                 </div>

                 <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="w-28 h-28 rounded-[3rem] bg-white text-slate-950 flex items-center justify-center mx-auto mb-16 shadow-4xl rotate-12 group-hover:rotate-0 transition-transform duration-700"
                    >
                       <Mail className="h-12 w-12 stroke-[2.5]" />
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none uppercase italic">
                      Stay in the <br/> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">
                        Global_Loop.
                      </span>
                    </h2>
                    
                    <p className="text-slate-500 text-xl font-medium mb-16 leading-relaxed max-w-2xl mx-auto border-t border-white/5 pt-10 opacity-80">
                      Join <span className="text-white">12,000+ nodes</span> receiving weekly impact telemetry, rescue alerts, and sustainability audits.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 p-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] max-w-2xl mx-auto group/input hover:border-emerald-500/50 transition-all duration-700 shadow-6xl relative z-20">
                       <input 
                         type="email" 
                         placeholder="UPLINK@EMAIL.COM"
                         className="bg-transparent border-none focus:ring-0 px-8 py-6 text-white placeholder-slate-700 flex-grow font-black text-lg tracking-[0.2em] uppercase outline-none"
                       />
                       <button className="relative overflow-hidden bg-white text-slate-950 font-black px-12 py-6 rounded-[2.5rem] transition-all hover:scale-105 active:scale-95 shadow-6xl group/btn whitespace-nowrap text-[10px] uppercase tracking-[0.4em] italic">
                          <span className="relative z-10">INITIALIZE SYNC</span>
                          <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                       </button>
                    </div>
                    
                    {/* Social Proof Avatars */}
                    <div className="mt-16 flex flex-col items-center gap-8">
                       <div className="flex -space-x-5">
                          {[1,2,3,4,5].map(i => (
                            <img 
                              key={i} 
                              src={`https://i.pravatar.cc/100?img=${i+40}`} 
                              className="w-14 h-14 rounded-[1.5rem] border-4 border-[#020617] shadow-4xl transition-all hover:scale-125 hover:z-50 grayscale hover:grayscale-0" 
                              alt="Node" 
                            />
                          ))}
                          <div className="w-14 h-14 rounded-[1.5rem] bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs border-4 border-[#020617] shadow-4xl">
                             +8k
                          </div>
                       </div>
                       <p className="text-slate-600 text-[8px] font-black uppercase tracking-[0.5em] italic">
                          SECURE_TRANSMISSION // ENCRYPTED_DATA // NO_SPAM
                       </p>
                    </div>
                 </div>

                 {/* Decorative Border Glow */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Leaderboard - Gamification */}
      <section className="py-56 bg-[#020617] relative overflow-hidden">
        {/* Subtle Background Node Visualization */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:64px_64px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-32 gap-16">
            <div className="max-w-3xl text-center lg:text-left">
               <div className="flex items-center justify-center lg:justify-start gap-5 mb-8">
                  <div className="h-[2px] w-16 bg-amber-500"></div>
                  <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.5em]">Community_Champion_Sync</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none uppercase italic">
                 Impact <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">Leaderboard.</span>
               </h2>
               <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-amber-500/30 pl-10 opacity-80">
                 Recognizing the tactical heroes turning <span className="text-white">urban surplus</span> into social stability every week.
               </p>
            </div>
            <div className="flex -space-x-8 group">
               {[1,2,3,4,5].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-24 h-24 rounded-[3rem] border-4 border-[#020617] shadow-4xl grayscale hover:grayscale-0 transition-all hover:scale-110" alt="Top Rescuer" />
               ))}
               <div className="w-24 h-24 rounded-[3rem] bg-white text-slate-950 flex items-center justify-center font-black text-xs border-4 border-[#020617] shadow-4xl group-hover:bg-amber-500 transition-colors uppercase tracking-widest">+800</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Rahul S.", points: "12,400", rescues: "45", rank: "1", color: "amber" },
              { name: "Priya K.", points: "10,850", rescues: "38", rank: "2", color: "slate" },
              { name: "Amit B.", points: "9,200", rescues: "32", rank: "3", color: "orange" }
            ].map((user, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="group relative p-16 rounded-[5rem] bg-white/[0.03] border border-white/5 shadow-4xl backdrop-blur-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-700"
              >
                 <div className={`absolute top-0 right-0 w-48 h-48 bg-${user.color === 'amber' ? 'orange' : user.color}-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                 
                 <div className="flex items-center gap-8 mb-12">
                    <div className="relative">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-24 h-24 rounded-[3rem] object-cover shadow-4xl border border-white/5" alt={user.name} />
                       <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-4xl border-4 border-[#020617] text-xs`}>
                          #{user.rank}
                       </div>
                    </div>
                    <div>
                       <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">{user.name}</h3>
                       <p className="text-amber-500 font-black text-[9px] uppercase tracking-[0.4em] mt-1">RESCUER_ELITE_NODE</p>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-inner">
                       <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">IMPACT_SCORE</div>
                       <div className="text-3xl font-black text-white tracking-tighter tabular-nums">{user.points}</div>
                    </div>
                    <div className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-inner">
                       <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">TOTAL_RESCUES</div>
                       <div className="text-3xl font-black text-white tracking-tighter tabular-nums">{user.rescues}</div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Call to Action */}
      <section className="py-56 bg-[#020617] relative overflow-hidden border-t border-white/5 transition-colors duration-500">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="bg-white rounded-[5rem] p-16 md:p-32 text-center text-slate-950 relative overflow-hidden shadow-[0_60px_120px_rgba(255,255,255,0.05)]">
               {/* Orbital Engineering Accents */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
               
               <div className="relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-950/5 border border-slate-950/10 mb-10 italic"
                  >
                     <Zap className="h-4 w-4 text-emerald-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.5em]">System_Invitation_v4.0</span>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase italic">
                    Join the <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">ZeroWaste_Protocol.</span>
                  </h2>
                  
                  <p className="text-slate-500 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed border-t border-slate-100 pt-10">
                    Initialize your node in the global relief matrix. Bridge the gap between <span className="text-slate-950 font-black italic">urban surplus</span> and community stability.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-8">
                     <button 
                       onClick={() => navigate('/login')}
                       className="relative overflow-hidden bg-slate-950 text-white font-black px-12 py-6 rounded-[2.5rem] text-[10px] uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-6xl group/btn italic"
                     >
                        <span className="relative z-10">UPLINK AS PARTNER</span>
                        <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                     </button>
                     <button 
                       onClick={() => navigate('/safety')}
                       className="bg-white border-4 border-slate-950 text-slate-950 font-black px-12 py-6 rounded-[2.5rem] text-[10px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all active:scale-95 italic"
                     >
                        EXPLORE_PROTOCOLS
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
            <Route path="/recipes" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                 <SmartRecipe />
              </motion.div>
            } />
            <Route path="/settings" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                 <SettingsPage />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="relative bg-[#020617] pt-32 pb-10 overflow-hidden border-t border-emerald-500/20 shadow-[inset_0_40px_100px_rgba(16,185,129,0.02)]">
        {/* Advanced Tactical Grid & Scanlines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Primary Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           {/* Deep Core Glow */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
           
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
             className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] border border-white/5 rounded-full"
           />
           <motion.div 
             animate={{ rotate: -360 }} 
             transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] border border-emerald-500/10 rounded-full border-dashed"
           />
           
           {/* Holographic Watermark */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.02)] leading-none select-none tracking-tighter italic z-0 opacity-50">
              ZERO
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-0 mb-32 relative">
             
             {/* Left Column: Brand Core (Spans 5 cols) */}
             <div className="md:col-span-5 flex flex-col items-start pr-12 lg:border-r border-white/5 relative">
                {/* Glowing Node Line */}
                <div className="absolute right-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent hidden lg:block"></div>

                <Link to="/" className="flex items-center gap-6 mb-10 group/logo relative">
                   <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500 rounded-3xl blur-2xl opacity-40 group-hover/logo:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                      <div className="w-20 h-20 rounded-3xl bg-[#020617] border-2 border-emerald-500/50 text-emerald-400 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.3)] group-hover/logo:border-emerald-400 transition-all duration-500 relative z-10">
                         <Zap className="h-10 w-10 fill-emerald-500/20" />
                      </div>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-6xl font-black text-white tracking-tighter italic uppercase leading-[0.85] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">ZeroWaste</span>
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.5em] mt-3">Network_Core <span className="animate-pulse">_</span></span>
                   </div>
                </Link>

                <p className="text-slate-300 text-lg font-bold leading-relaxed max-w-sm mb-12 relative pl-6 border-l-4 border-emerald-500/30 drop-shadow-md">
                   High-integrity urban food rescue network. Utilizing forensic telemetry to bridge the gap between waste and community stability.
                </p>

                {/* Tactical Status Module */}
                <div className="w-full max-w-sm p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-lg">
                   <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] group-hover:translate-x-full transition-transform duration-1000"></div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="relative flex h-4 w-4">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] border border-emerald-300"></span>
                         </div>
                         <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Global Matrix</span>
                      </div>
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">Online</span>
                   </div>
                </div>
             </div>
             
             {/* Middle Column: Operational Routes (Spans 3 cols) */}
             <div className="md:col-span-3 lg:px-12 flex flex-col justify-start">
                <h4 className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-[0.4em] mb-10 opacity-90 drop-shadow-md">
                   <Activity className="h-5 w-5 text-emerald-500" /> Ops_Routes
                </h4>
                <ul className="space-y-8">
                   {[
                     { name: 'Command Dashboard', path: '/dashboard' },
                     { name: 'Mission Radar', path: '/map' },
                     { name: 'Post Rescue Data', path: '/donate' },
                     { name: 'Operator Profile', path: '/profile' }
                   ].map((link, i) => (
                     <motion.li key={link.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <Link to={link.path} className="text-slate-400 hover:text-white font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-4 group/link">
                           <div className="w-8 h-[2px] bg-white/20 group-hover/link:w-12 group-hover/link:bg-emerald-500 group-hover/link:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300"></div> 
                           <span className="group-hover/link:translate-x-1 transition-transform duration-300 drop-shadow-md">{link.name}</span>
                        </Link>
                     </motion.li>
                   ))}
                </ul>
             </div>

             {/* Right Column: Policies & Comm-Link (Spans 4 cols) */}
             <div className="md:col-span-4 lg:pl-12 lg:border-l border-white/5 relative flex flex-col justify-between h-full">
                {/* Glowing Node Line */}
                <div className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent hidden lg:block"></div>

                <div className="mb-14">
                   <h4 className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-[0.4em] mb-10 opacity-90 drop-shadow-md">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" /> System_Vault
                   </h4>
                   <ul className="grid grid-cols-2 gap-y-8 gap-x-6">
                      {[
                        { name: 'Safety Protocol', path: '/safety' },
                        { name: 'Impact Metrics', path: '/leaderboard' },
                        { name: 'Privacy Log', path: '/policy' },
                        { name: 'Terms of Ops', path: '/policy' }
                      ].map(link => (
                        <li key={link.name}>
                           <Link to={link.path} className="text-slate-400 hover:text-white font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-3 group/vault">
                              <span className="text-emerald-500/0 group-hover/vault:text-emerald-500 transition-colors font-mono font-black text-base">&gt;</span> 
                              <span className="group-hover/vault:translate-x-1 transition-transform duration-300 drop-shadow-md">{link.name}</span>
                           </Link>
                        </li>
                      ))}
                   </ul>
                </div>
                
                {/* Comm-Link Terminal */}
                <div className="relative p-8 rounded-3xl bg-[#020617] border-2 border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] overflow-hidden">
                   {/* Terminal Header */}
                   <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                         <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                         <div className="w-3 h-3 rounded-full bg-emerald-500/60 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      </div>
                      <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest ml-3">Establish_Comm_Link.exe</h5>
                   </div>

                   <div className="relative group/mail">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-base font-black animate-pulse">&gt;</div>
                      <input 
                        type="email" 
                        placeholder="ENTER_EMAIL_VECTOR..." 
                        className="w-full bg-transparent border-none pl-10 pr-14 py-4 text-sm font-mono font-bold text-emerald-400 placeholder:text-slate-600 focus:outline-none transition-all"
                      />
                      <button 
                        onClick={() => alert('Comm-Link Established. Secure Vector Active.')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-emerald-500 text-white hover:text-[#020617] rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                      >
                         <Zap className="h-5 w-5" />
                      </button>
                   </div>
                </div>
             </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex items-center gap-5 px-8 py-4 bg-[#020617] border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.6)]">
               <ShieldCheck className="h-5 w-5 text-emerald-500" />
               <p className="text-slate-400 text-xs font-mono font-bold uppercase tracking-[0.2em]">&copy; 2026 ZEROWASTE_NETWORK <span className="text-emerald-500 mx-3 font-black">//</span> ALL_NODES_SECURED <span className="text-emerald-500 mx-3 font-black">//</span> MADE BY NIKITA</p>
            </div>
            
            <div className="flex gap-4">
                {[
                  { icon: Globe, action: () => window.open('https://google.com', '_blank') },
                  { icon: Zap, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                  { icon: Activity, action: () => navigate('/dashboard') }
                ].map((item, i) => (
                  <motion.button 
                    key={i} 
                    onClick={item.action}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                     <item.icon className="h-5 w-5" />
                  </motion.button>
                ))}
             </div>
          </div>
        </div>
      </footer>

      {/* Persistent Mission FAB (Floating Action Button) - Forensic Orbital Trigger */}
      <motion.div 
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        className="fixed bottom-12 right-12 z-[100]"
      >
         <Link 
           to="/donate" 
           className="group relative flex items-center gap-6 bg-white text-slate-950 px-10 py-7 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 overflow-hidden"
         >
            {/* Animated Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-[1px] border-dashed border-slate-950/5 rounded-full group-hover:border-slate-950/20"
            />

            <div className="relative z-10 w-12 h-12 rounded-[1.5rem] bg-slate-950 text-white flex items-center justify-center shadow-4xl group-hover:rotate-12 transition-transform duration-500">
               <Zap className="h-6 w-6 fill-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col items-start pr-4">
               <span className="font-black text-[10px] uppercase tracking-[0.4em] leading-none mb-1">Initiate</span>
               <span className="font-black text-[10px] uppercase tracking-[0.4em] leading-none text-emerald-600 group-hover:text-slate-950 transition-colors">Rescue_Protocol</span>
            </div>
            <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/5 group-hover:bg-slate-950 group-hover:text-white transition-all">
               <ChevronRight className="h-5 w-5" />
            </div>
         </Link>
      </motion.div>
    </div>
  )
}

export default App
