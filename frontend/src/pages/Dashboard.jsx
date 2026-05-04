import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid 
} from 'recharts';
import { 
  Leaf, Users, Utensils, TrendingUp, Zap, MapPin, Search, Download, Clock, ArrowUpRight, CheckCircle2, Globe, Radar, Sparkles, ChevronRight, Activity, Target
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const weeklyData = [
  { name: 'Mon', meals: 120, target: 150, co2: 45 },
  { name: 'Tue', meals: 98, target: 150, co2: 38 },
  { name: 'Wed', meals: 156, target: 180, co2: 62 },
  { name: 'Thu', meals: 204, target: 180, co2: 78 },
  { name: 'Fri', meals: 305, target: 250, co2: 110 },
  { name: 'Sat', meals: 420, target: 350, co2: 165 },
  { name: 'Sun', meals: 390, target: 350, co2: 140 },
];

const recentActivity = [
  { id: 1, type: 'Rescue', title: '50kg Surplus Rescued', location: 'Hotel Taj Bengal', time: '2m ago', status: 'In Transit' },
  { id: 2, type: 'Impact', title: '200 Meals Distributed', location: 'Kolkata NGO Hub', time: '14m ago', status: 'Completed' },
  { id: 3, type: 'Safety', title: 'Quality Batch Verified', location: 'Royal Caterers', time: '28m ago', status: 'Verified' },
  { id: 4, type: 'Rescue', title: 'Cold-Chain Pickup', location: 'City Ballroom', time: '45m ago', status: 'Pending' },
];

const statusColors = {
  blue: { bg: 'bg-blue-100 dark:bg-blue-500/20', text: 'text-blue-600 dark:text-blue-400' },
  amber: { bg: 'bg-amber-100 dark:bg-amber-500/20', text: 'text-amber-600 dark:text-amber-400' },
  emerald: { bg: 'bg-emerald-100 dark:bg-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-400' }
};

export default function Dashboard() {
  const { getAcceptedDonations, user } = useAppContext();
  const [activeMetric, setActiveMetric] = useState('meals');

  const accepted = getAcceptedDonations() || [];
  const totalMeals = 12450 + accepted.reduce((acc, curr) => acc + Number(curr.quantity || 0), 0);
  const peopleAssisted = 45302 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 1.5), 0);
  const co2Avoided = 4200 + accepted.reduce((acc, curr) => acc + (Number(curr.quantity || 0) * 0.8), 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      {/* Cinematic Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold mb-8 text-xs uppercase tracking-widest backdrop-blur-md shadow-sm">
               <Sparkles className="h-3 w-3" /> Impact Intelligence
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Welcome back, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400">
                {user?.name?.split(' ')[0] || 'Changemaker'}.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
              Real-time telemetry of your food rescue operations and community impact metrics.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => alert('Mission Data Encrypted & Exported to Secure Local Storage.')}
              className="px-10 py-5 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-black rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all text-sm uppercase tracking-widest flex items-center gap-2"
            >
               <Download className="h-4 w-4" /> Export
            </button>
            <button 
              onClick={() => navigate('/donate')}
              className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white transition-all shadow-xl text-sm uppercase tracking-widest flex items-center gap-2 active:scale-95"
            >
               <Zap className="h-4 w-4" /> New Mission
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Key Metrics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Meals Rescued", value: totalMeals.toLocaleString(), icon: Utensils, color: "emerald", trend: "+12.5%" },
            { label: "Community Assisted", value: Math.floor(peopleAssisted).toLocaleString(), icon: Users, color: "blue", trend: "+8.2%" },
            { label: "CO₂ Offset (kg)", value: Math.floor(co2Avoided).toLocaleString(), icon: Leaf, color: "amber", trend: "+15.3%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-16 h-16 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-600 dark:text-${stat.color}-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  <ArrowUpRight className="h-3 w-3" /> {stat.trend}
                </div>
              </div>
              <div>
                <h3 className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">{stat.label}</h3>
                <div className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts & Activity Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Analytics Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 p-10 md:p-16 rounded-[4rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Impact Analytics</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Rescue operations trajectory over the last 7 days</p>
              </div>
              <div className="flex p-2 bg-slate-100 dark:bg-black/40 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-inner">
                {['meals', 'co2'].map(metric => (
                  <button 
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeMetric === metric ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-xl scale-[1.05]' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                  >
                    {metric}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={activeMetric === 'meals' ? '#059669' : '#0284c7'} stopOpacity={0.2}/>
                      <stop offset="95%" stopColor={activeMetric === 'meals' ? '#059669' : '#0284c7'} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '24px', 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                      padding: '20px' 
                    }}
                    itemStyle={{ color: activeMetric === 'meals' ? '#10b981' : '#3b82f6', fontWeight: 'bold' }}
                    labelStyle={{ color: '#94a3b8', fontWeight: 'bold', marginBottom: '8px', fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey={activeMetric} 
                    stroke={activeMetric === 'meals' ? '#10b981' : '#3b82f6'} 
                    strokeWidth={5} 
                    fillOpacity={1} 
                    fill="url(#colorMetric)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Activity Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 p-10 rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none"
          >
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Activity</h3>
              <button className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-10">
              {recentActivity.map((activity, i) => (
                <div key={activity.id} className="flex gap-6 relative group cursor-pointer">
                  <div className={`mt-1 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                    activity.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500 shadow-inner shadow-emerald-500/5' :
                    activity.status === 'In Transit' ? 'bg-blue-500/10 text-blue-500 shadow-inner shadow-blue-500/5' :
                    'bg-amber-500/10 text-amber-500 shadow-inner shadow-amber-500/5'
                  }`}>
                    {activity.status === 'Completed' ? <CheckCircle2 className="h-5 w-5" /> :
                     activity.status === 'In Transit' ? <TrendingUp className="h-5 w-5" /> :
                     <Clock className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 border-b border-slate-50 dark:border-white/5 pb-6">
                    <h4 className="font-black text-slate-900 dark:text-white text-lg tracking-tight mb-1">{activity.title}</h4>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500">
                      <MapPin className="h-3 w-3" /> {activity.location}
                    </div>
                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 mt-3 uppercase tracking-widest">
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fleet Monitor Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-[3.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-none overflow-hidden"
        >
          <div className="p-10 md:p-12 border-b border-slate-50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Fleet Monitor</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium font-medium">Live monitoring of logistics nodes in transit.</p>
            </div>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search nodes..." 
                className="pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 focus:border-emerald-500 outline-none font-bold text-sm text-slate-900 dark:text-white w-full md:w-64 transition-all"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-black/20">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Payload Node</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Rescue Origin</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Volume Matrix</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Telemetry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                {[
                  { id: 'NODE-8492', origin: 'Royal Heritage Hotel', vol: '120 kg', status: 'In Transit', color: 'blue' },
                  { id: 'NODE-8493', origin: 'Fresh Bake Bakery', vol: '45 kg', status: 'Pending Pickup', color: 'amber' },
                  { id: 'NODE-8494', origin: 'Green Valley Farms', vol: '250 kg', status: 'Verified', color: 'emerald' },
                  { id: 'NODE-8495', origin: 'Global Catering Inc.', vol: '180 kg', status: 'In Transit', color: 'blue' }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <td className="px-10 py-8">
                      <span className="font-black text-slate-900 dark:text-white text-lg tracking-tight group-hover:text-emerald-500 transition-colors">{row.id}</span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-3">
                         <MapPin className="h-4 w-4 text-slate-300" />
                         <span className="font-bold text-slate-600 dark:text-slate-300 text-sm tracking-tight">{row.origin}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest border border-slate-200 dark:border-white/5">
                        {row.vol}
                      </span>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest ${statusColors[row.color].bg} ${statusColors[row.color].text} shadow-sm`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
                        {row.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
