import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChefHat, Sparkles, Plus, X, Search, Clock, Flame, Leaf, Utensils, 
  CheckCircle2, AlertCircle, ArrowRight, Zap, Target, Activity, 
  UploadCloud, Scan, SlidersHorizontal, Share2, BookmarkPlus, 
  BarChart3, Camera, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const commonIngredients = [
  { id: 'rice', name: 'Leftover Rice', category: 'grains', icon: '🍚' },
  { id: 'bread', name: 'Stale Bread', category: 'bakery', icon: '🍞' },
  { id: 'tomato', name: 'Overripe Tomatoes', category: 'veg', icon: '🍅' },
  { id: 'banana', name: 'Brown Bananas', category: 'fruit', icon: '🍌' },
  { id: 'potato', name: 'Potatoes', category: 'veg', icon: '🥔' },
  { id: 'carrot', name: 'Wilted Carrots', category: 'veg', icon: '🥕' },
  { id: 'chicken', name: 'Cooked Chicken', category: 'meat', icon: '🍗' },
  { id: 'pasta', name: 'Cooked Pasta', category: 'grains', icon: '🍝' },
];

const mockRecipes = [
  {
    id: 1,
    title: 'Quantum Fried Rice',
    ingredients: ['Leftover Rice', 'Wilted Carrots', 'Overripe Tomatoes'],
    time: '15 mins',
    difficulty: 'Easy',
    impact: '0.5 kg CO₂ saved',
    matchScore: 98,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    macros: { pro: '12g', carb: '45g', fat: '8g', cal: '320' },
    steps: [
      'Initialize protocol: Chop wilted carrots and overripe tomatoes finely.',
      'Thermal phase: Heat oil in a pan, sauté vegetables until structure softens.',
      'Integration: Add leftover rice and soy sauce, toss to distribute evenly.',
      'Deployment: Serve hot. Optimal method to revive day-old carbohydrates.'
    ]
  },
  {
    id: 2,
    title: 'Savory Bread Matrix',
    ingredients: ['Stale Bread', 'Overripe Tomatoes'],
    time: '45 mins',
    difficulty: 'Medium',
    impact: '0.8 kg CO₂ saved',
    matchScore: 85,
    image: 'https://images.unsplash.com/photo-1525442266858-a5a40bbaf0ce?auto=format&fit=crop&w=800&q=80',
    macros: { pro: '18g', carb: '52g', fat: '14g', cal: '410' },
    steps: [
      'Deconstruct stale bread into chunks; place in thermal-resistant dish.',
      'Synthesis: Blend tomatoes with garlic and herbs for base matrix.',
      'Fusion: Pour matrix over bread, top with any residual cheese reserves.',
      'Execution: Bake at 180°C for 30 minutes until structural integrity is golden.'
    ]
  }
];

export default function SmartRecipe() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  
  const navigate = useNavigate();

  const toggleIngredient = (ing) => {
    if (selectedIngredients.find(i => i.id === ing.id)) {
      setSelectedIngredients(selectedIngredients.filter(i => i.id !== ing.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  const addCustomIngredient = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const newIng = {
      id: `custom-\${Date.now()}`,
      name: customInput.trim(),
      category: 'custom',
      icon: '✨'
    };
    setSelectedIngredients([...selectedIngredients, newIng]);
    setCustomInput('');
  };

  const removeIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter(i => i.id !== id));
  };

  const handleSimulatedScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Auto-add some ingredients to simulate AI vision
      if (!selectedIngredients.find(i => i.id === 'potato')) toggleIngredient(commonIngredients.find(i => i.id === 'potato'));
      if (!selectedIngredients.find(i => i.id === 'chicken')) toggleIngredient(commonIngredients.find(i => i.id === 'chicken'));
    }, 3000);
  };

  const generateRecipes = () => {
    if (selectedIngredients.length === 0) return;
    setIsGenerating(true);
    setRecipes(null);
    // Simulate AI synthesis delay
    setTimeout(() => {
      setRecipes(mockRecipes);
      setIsGenerating(false);
    }, 3500);
  };

  const toggleSave = (id) => {
    if (savedRecipes.includes(id)) {
      setSavedRecipes(savedRecipes.filter(r => r !== id));
    } else {
      setSavedRecipes([...savedRecipes, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-32 selection:bg-emerald-500/30 transition-colors duration-500 font-sans relative overflow-hidden">
      {/* Immersive Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* High-Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98108_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-[10%] w-[900px] h-[900px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[250px]"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-[10%] w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[200px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/80 dark:from-[#020617]/50 dark:to-[#020617]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 relative">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-black mb-10 text-[10px] uppercase tracking-[0.5em] backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </span>
               Protocol_V4.2 Active
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[7rem] font-black text-slate-950 dark:text-white tracking-tighter mb-8 leading-[0.85] uppercase italic"
            >
              Zero Waste <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 dark:from-emerald-400 dark:via-teal-300">
                 Synthesis.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-emerald-500/50 pl-8"
            >
              Feed the matrix your surplus ingredients. We deploy neural-gastronomic models to output high-impact, gourmet rescue vectors. <span className="text-slate-900 dark:text-white font-bold">Stop the waste.</span>
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 p-8 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none backdrop-blur-xl min-w-[300px]"
          >
             <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Sync Status</span>
                <Activity className="h-4 w-4 text-emerald-500" />
             </div>
             <div className="flex items-end gap-3">
                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums italic">14.2<span className="text-emerald-500 text-2xl">k</span></span>
             </div>
             <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-500/70 uppercase tracking-[0.4em]">Recipes Synthesized Today</span>
             
             <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[78%]"></div>
             </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
           
           {/* Left Panel: Inputs & Scanners */}
           <div className="lg:col-span-5 space-y-8 sticky top-32">
              
              {/* AI Vision Scanner Module */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-[3rem] bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-500/10 dark:to-teal-500/5 border border-emerald-500/20 backdrop-blur-3xl relative overflow-hidden group shadow-md"
              >
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-black text-emerald-600 dark:text-emerald-400 tracking-tight uppercase flex items-center gap-3">
                       <Scan className="h-5 w-5" /> Vision Scan [BETA]
                    </h3>
                    <div className="px-3 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase tracking-widest">Experimental</div>
                 </div>
                 
                 <button 
                   onClick={handleSimulatedScan}
                   disabled={isScanning}
                   className="w-full h-32 rounded-3xl border-2 border-dashed border-emerald-500/30 bg-white/50 dark:bg-emerald-500/5 hover:bg-white dark:hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center gap-3 group/scan relative overflow-hidden shadow-sm"
                 >
                    {isScanning ? (
                       <>
                         <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(16,185,129,0.1)_50%,transparent_100%)] dark:bg-[linear-gradient(transparent_0%,rgba(16,185,129,0.2)_50%,transparent_100%)] bg-[length:100%_10px] animate-scan pointer-events-none"></div>
                         <Activity className="h-8 w-8 text-emerald-500 dark:text-emerald-400 animate-pulse" />
                         <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest animate-pulse">Scanning Visual Data...</span>
                       </>
                    ) : (
                       <>
                         <Camera className="h-8 w-8 text-emerald-500/50 group-hover/scan:text-emerald-500 dark:group-hover/scan:text-emerald-400 group-hover/scan:scale-110 transition-all" />
                         <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500/70 uppercase tracking-widest">Upload Fridge Photo</span>
                       </>
                    )}
                 </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-10 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 backdrop-blur-3xl shadow-xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                       <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-4 uppercase italic">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-inner">
                             <DatabaseIcon />
                          </div>
                          Inventory Matrix
                       </h3>
                    </div>
                    
                    <form onSubmit={addCustomIngredient} className="relative mb-10 group/form">
                       <input 
                         type="text"
                         value={customInput}
                         onChange={(e) => setCustomInput(e.target.value)}
                         placeholder="Enter custom variable..."
                         className="relative w-full bg-slate-50 dark:bg-[#020617]/80 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all shadow-inner uppercase tracking-wider"
                       />
                       <button type="submit" className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-200 dark:bg-white/10 hover:bg-emerald-500 dark:hover:bg-emerald-500 text-slate-600 hover:text-white dark:text-white rounded-xl flex items-center justify-center transition-all shadow-md">
                          <Plus className="h-6 w-6" />
                       </button>
                    </form>

                    <div className="mb-8 min-h-[60px]">
                       <AnimatePresence mode="popLayout">
                          <div className="flex flex-wrap gap-3">
                             {selectedIngredients.map(ing => (
                                <motion.div 
                                  layout
                                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                  key={ing.id}
                                  className="px-4 py-2.5 bg-emerald-500 text-white dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 shadow-md dark:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                >
                                   <span className="text-base">{ing.icon}</span> {ing.name}
                                   <button onClick={() => removeIngredient(ing.id)} className="w-5 h-5 rounded-full bg-black/10 dark:bg-slate-950/20 hover:bg-black/30 dark:hover:bg-slate-950 hover:text-white flex items-center justify-center transition-colors">
                                      <X className="h-3 w-3" />
                                   </button>
                                </motion.div>
                             ))}
                          </div>
                       </AnimatePresence>
                       {selectedIngredients.length === 0 && (
                          <div className="h-full flex items-center justify-center text-xs font-bold text-slate-400 dark:text-slate-600 italic px-2 py-6 gap-3 bg-slate-50 dark:bg-[#020617]/50 rounded-2xl border border-dashed border-slate-200 dark:border-white/5">
                             <AlertCircle className="h-4 w-4" /> Awaiting inventory parameters...
                          </div>
                       )}
                    </div>

                    <div className="flex items-center justify-between mb-6 pt-6 border-t border-slate-200 dark:border-white/5">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Quick Acquisition</h4>
                       <Target className="h-4 w-4 text-slate-400" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                       {commonIngredients.map(ing => {
                          const isSelected = selectedIngredients.find(i => i.id === ing.id);
                          return (
                             <button 
                               key={ing.id}
                               onClick={() => toggleIngredient(ing)}
                               className={`px-4 py-3 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden group/btn \${
                                  isSelected 
                                  ? 'bg-slate-900 dark:bg-white/10 text-white border-slate-900 dark:border-white/20 shadow-md' 
                                  : 'bg-white dark:bg-transparent border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400'
                               }`}
                             >
                                <span className="text-[10px] font-black uppercase tracking-wider flex items-center gap-2 truncate"><span className="text-lg">{ing.icon}</span> {ing.name}</span>
                                {isSelected && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />}
                             </button>
                          );
                       })}
                    </div>
                 </div>
              </motion.div>

              {/* Advanced Filters */}
              <div className="p-8 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 backdrop-blur-xl shadow-xl dark:shadow-none">
                 <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Optimization Parameters</h4>
                    <SlidersHorizontal className="h-4 w-4 text-slate-400" />
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {['All', 'Under 15m', 'High Protein', 'Max Impact'].map(filter => (
                       <button 
                         key={filter}
                         onClick={() => setActiveFilter(filter)}
                         className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all \${
                            activeFilter === filter 
                            ? 'bg-blue-50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/50 text-blue-600 dark:text-blue-400 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                            : 'bg-white dark:bg-transparent border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300 dark:hover:border-white/30'
                         }`}
                       >
                          {filter}
                       </button>
                    ))}
                 </div>
              </div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={generateRecipes}
                disabled={selectedIngredients.length === 0 || isGenerating}
                className={`w-full py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.5em] transition-all duration-500 flex items-center justify-center gap-4 relative overflow-hidden group \${
                   selectedIngredients.length === 0 
                   ? 'bg-slate-100 dark:bg-slate-800/30 text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-white/5 cursor-not-allowed' 
                   : 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-emerald-500 dark:hover:bg-emerald-400 shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-2xl dark:hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1'
                }`}
              >
                 {isGenerating ? (
                    <>
                       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 opacity-50 dark:opacity-50"></div>
                       <div className="absolute top-0 bottom-0 w-32 bg-white/40 blur-2xl skew-x-12 animate-shimmer"></div>
                       <span className="relative z-10 flex items-center gap-4 text-white">
                          <Activity className="h-6 w-6 animate-pulse" /> PROCESSING...
                       </span>
                    </>
                 ) : (
                    <>
                       <span className="relative z-10">Initiate Protocol</span>
                       <Zap className={`h-6 w-6 relative z-10 \${selectedIngredients.length > 0 ? 'fill-current animate-bounce' : ''}`} />
                    </>
                 )}
              </motion.button>
           </div>

           {/* Right Panel: Results */}
           <div className="lg:col-span-7">
              {isGenerating ? (
                <div className="h-[700px] rounded-[3rem] bg-white dark:bg-[#020617] border border-emerald-500/20 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl dark:shadow-[inset_0_0_100px_rgba(16,185,129,0.1)]">
                   <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan"></div>
                   
                   <div className="relative w-80 h-80 flex items-center justify-center">
                      {/* Complex Radar Rings */}
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full"></motion.div>
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-8 border border-teal-500/20 rounded-full"></motion.div>
                      <div className="absolute inset-16 border border-emerald-500/10 rounded-full"></div>
                      
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                         <div 
                           className="w-full h-full bg-gradient-to-tr from-emerald-500/40 via-transparent to-transparent origin-bottom-right"
                           style={{ animation: 'spin 1.5s linear infinite' }}
                         ></div>
                      </div>
                      <ChefHat className="h-20 w-20 text-emerald-500 dark:text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                   </div>
                   
                   <div className="absolute bottom-24 text-center w-full px-12">
                      <div className="text-emerald-600 dark:text-emerald-400 font-black text-2xl uppercase tracking-[0.5em] mb-4 animate-pulse">Running Neural Models</div>
                      <div className="h-1 w-64 mx-auto bg-slate-200 dark:bg-emerald-950 rounded-full overflow-hidden mb-4">
                         <motion.div 
                           initial={{ width: "0%" }} 
                           animate={{ width: "100%" }} 
                           transition={{ duration: 3.5, ease: "easeInOut" }}
                           className="h-full bg-emerald-500"
                         />
                      </div>
                      <div className="text-emerald-600/70 dark:text-emerald-500/50 text-[10px] font-mono uppercase tracking-widest flex flex-col gap-1">
                         <span>> Analyzing flavor profiles...</span>
                         <span>> Cross-referencing {selectedIngredients.length} variables...</span>
                         <span>> Optimizing for zero waste...</span>
                      </div>
                   </div>
                </div>
              ) : recipes ? (
                 <div className="space-y-12">
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-4 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-md dark:shadow-none p-8 rounded-[3rem] backdrop-blur-md"
                    >
                       <div className="flex items-center gap-6">
                          <div className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-[#020617]"></span>
                          </div>
                          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Mission Proposals</h3>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="px-6 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-widest font-black shadow-inner">
                             {recipes.length} Outcomes
                          </div>
                          <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                             <Share2 className="h-4 w-4" />
                          </button>
                       </div>
                    </motion.div>
                    
                    {recipes.map((recipe, idx) => (
                       <motion.div 
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: idx * 0.2, type: 'spring', damping: 20 }}
                         key={recipe.id}
                         className="rounded-[3rem] bg-white dark:bg-[#020617]/50 border border-slate-200 dark:border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-700 shadow-2xl"
                       >
                          {/* Top Action Bar */}
                          <div className="absolute top-6 right-6 z-20 flex gap-3">
                             <button 
                               onClick={() => toggleSave(recipe.id)}
                               className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl border transition-all \${
                                 savedRecipes.includes(recipe.id) 
                                 ? 'bg-blue-500 text-white border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                                 : 'bg-white/80 dark:bg-black/40 text-slate-900 dark:text-white border-white/20 hover:bg-white dark:hover:bg-white/20'
                               }`}
                             >
                                <BookmarkPlus className={`h-5 w-5 \${savedRecipes.includes(recipe.id) ? 'fill-current' : ''}`} />
                             </button>
                          </div>

                          {/* Recipe Header with Immersive Image */}
                          <div className="h-[400px] relative overflow-hidden">
                             <img 
                               src={recipe.image} 
                               alt={recipe.title}
                               className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-[#020617] dark:via-[#020617]/60 to-transparent"></div>
                             
                             {/* Match Score Overlay */}
                             <div className="absolute top-6 left-6 z-20">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-emerald-500/30 rounded-xl shadow-md dark:shadow-none">
                                   <Target className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                   <span className="text-slate-900 dark:text-white font-black text-sm">{recipe.matchScore}% <span className="text-slate-500 dark:text-slate-400 text-[9px] uppercase tracking-widest ml-1">Match</span></span>
                                </div>
                             </div>
                             
                             <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-6 z-20">
                                <h4 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic drop-shadow-md dark:drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">{recipe.title}</h4>
                                
                                <div className="flex flex-wrap gap-4">
                                   <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white shadow-sm dark:shadow-none">
                                      <Clock className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                                      <span className="text-xs font-black uppercase tracking-wider">{recipe.time}</span>
                                   </div>
                                   <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white shadow-sm dark:shadow-none">
                                      <Flame className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                                      <span className="text-xs font-black uppercase tracking-wider">{recipe.difficulty}</span>
                                   </div>
                                   <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/20 backdrop-blur-xl border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 shadow-sm dark:shadow-none">
                                      <Leaf className="h-5 w-5" />
                                      <span className="text-xs font-black uppercase tracking-wider">{recipe.impact}</span>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="p-10 md:p-14 bg-white dark:bg-transparent">
                             {/* Bio-Metrics / Telemetry Section */}
                             <div className="mb-14 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-inner">
                                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                                   <BarChart3 className="h-4 w-4 text-blue-500" /> Bio-Metrics Telemetry
                                </h5>
                                <div className="grid grid-cols-4 gap-4">
                                   {[
                                     { label: 'PROTEIN', val: recipe.macros.pro, color: 'blue' },
                                     { label: 'CARBS', val: recipe.macros.carb, color: 'emerald' },
                                     { label: 'FATS', val: recipe.macros.fat, color: 'amber' },
                                     { label: 'KCAL', val: recipe.macros.cal, color: 'rose' },
                                   ].map((m, i) => (
                                     <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                                        <div className={`text-2xl font-black text-\${m.color}-500 dark:text-\${m.color}-400 mb-1`}>{m.val}</div>
                                        <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{m.label}</div>
                                     </div>
                                   ))}
                                </div>
                             </div>

                             <div className="grid md:grid-cols-2 gap-16">
                                {/* Left Column: Ingredients */}
                                <div>
                                   <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                                      <div className="w-8 h-px bg-slate-300 dark:bg-slate-700"></div> Target Utilization
                                   </h5>
                                   <div className="flex flex-col gap-4">
                                      {recipe.ingredients.map((ing, i) => (
                                         <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 group/ing hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{ing}</span>
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-0 group-hover/ing:opacity-100 transition-opacity" />
                                         </div>
                                      ))}
                                   </div>
                                </div>

                                {/* Right Column: Steps */}
                                <div>
                                   <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                                      <div className="w-8 h-px bg-slate-300 dark:bg-slate-700"></div> Execution Protocol
                                   </h5>
                                   <div className="relative">
                                      <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent"></div>
                                      
                                      <ul className="space-y-10 relative z-10">
                                         {recipe.steps.map((step, i) => (
                                            <li key={i} className="flex gap-8 items-start group/step">
                                               <div className="relative shrink-0">
                                                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-md opacity-0 group-hover/step:opacity-50 transition-opacity"></div>
                                                  <span className="relative w-12 h-12 rounded-xl bg-white dark:bg-[#020617] border-2 border-emerald-500/30 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-black tabular-nums shadow-md dark:shadow-xl group-hover/step:border-emerald-500 group-hover/step:text-white group-hover/step:bg-emerald-500 dark:group-hover/step:bg-[#020617] transition-all">
                                                     0{i+1}
                                                  </span>
                                               </div>
                                               <span className="text-slate-700 dark:text-slate-300 text-base font-medium pt-3 leading-relaxed group-hover/step:text-slate-900 dark:group-hover/step:text-white transition-colors">
                                                  {step}
                                               </span>
                                            </li>
                                         ))}
                                      </ul>
                                   </div>
                                </div>
                             </div>
                             
                             <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                   <FileText className="h-4 w-4" /> Verified Zero-Waste Protocol
                                </div>
                                <button className="w-full sm:w-auto group/btn flex items-center justify-center gap-4 bg-emerald-500 text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 dark:hover:bg-white transition-all shadow-xl dark:shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95">
                                   Commence Execution <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              ) : (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="h-[700px] rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.01] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group shadow-xl dark:shadow-none"
                 >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="relative">
                       <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
                       <div className="w-40 h-40 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-600 mb-12 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 relative z-10">
                          <Utensils className="h-16 w-16" />
                       </div>
                    </div>
                    
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 italic">Awaiting Parameters</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-lg leading-relaxed">
                       Initialize the matrix. Select ingredients from your inventory to synthesize high-impact, zero-waste recipes.
                    </p>
                 </motion.div>
              )}
           </div>
        </div>

        {/* --- NEW MASSIVE CONTENT SECTION: Community Protocols --- */}
        <div className="mt-40 border-t border-slate-200 dark:border-white/10 pt-32 pb-10 relative z-10">
           <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
              <div className="max-w-2xl">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]"
                 >
                    <Activity className="h-4 w-4" /> Global Node Network
                 </motion.div>
                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-[0.85] mb-6">
                    Trending <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Protocols.</span>
                 </h2>
                 <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed border-l-4 border-blue-500/30 pl-6">
                    Discover high-impact zero-waste vectors synthesized by verified community nodes across the globe.
                 </p>
              </div>
              <button className="flex items-center gap-4 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-md dark:shadow-none">
                 View Full Matrix <ArrowRight className="h-4 w-4" />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: 'Citrus Peel Extract', author: 'Node Alpha', impact: '2.4 kg CO₂', img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=800&q=80', color: 'amber' },
                { title: 'Broccoli Stalk Slaw', author: 'Sector 7', impact: '1.8 kg CO₂', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', color: 'emerald' },
                { title: 'Root Veggie Broth', author: 'Kolkata Hub', impact: '3.1 kg CO₂', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80', color: 'rose' }
              ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group relative rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-700 shadow-xl"
                 >
                    <div className="h-64 relative overflow-hidden">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale-[10%] dark:grayscale-[30%] group-hover:grayscale-0" />
                       <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#020617] to-transparent"></div>
                       <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-sm dark:shadow-none">
                          <Activity className={`w-3 h-3 text-\${item.color}-500 dark:text-\${item.color}-400`} /> Syncing
                       </div>
                    </div>
                    <div className="p-8 relative z-10 -mt-10 bg-white dark:bg-transparent">
                       <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#020617] border-2 border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-xl dark:shadow-2xl group-hover:border-emerald-500/50 transition-colors">
                          <ChefHat className="w-6 h-6 text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                       </div>
                       <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-2">{item.title}</h4>
                       <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">Synthesized by {item.author}</div>
                       
                       <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5">
                          <div className={`text-\${item.color}-600 dark:text-\${item.color}-400 text-xs font-black uppercase tracking-widest flex items-center gap-2`}><Leaf className="w-4 h-4"/> {item.impact}</div>
                          <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white hover:text-slate-900 dark:hover:text-slate-950 transition-colors">
                             <BookmarkPlus className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

// Minimal mock icon component for Database
function DatabaseIcon(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  );
}
