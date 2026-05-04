import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChefHat, Sparkles, Plus, X, Search, Clock, Flame, Leaf, Utensils, 
  CheckCircle2, Camera, FileText, BookmarkPlus, Heart, Users, PlayCircle,
  ShieldCheck, Zap, Info
} from 'lucide-react';

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

const dietaryOptions = [
  { name: 'Vegetarian', icon: <Leaf className="h-4 w-4 text-emerald-500" /> },
  { name: 'Vegan', icon: <Sparkles className="h-4 w-4 text-emerald-400" /> },
  { name: 'Gluten-Free', icon: <ShieldCheck className="h-4 w-4 text-amber-500" /> },
  { name: 'Nut-Free', icon: <Zap className="h-4 w-4 text-blue-500" /> },
  { name: 'Dairy-Free', icon: <Info className="h-4 w-4 text-purple-500" /> }
];

const mockRecipes = [
  {
    id: 1,
    title: 'Zero-Waste Fried Rice',
    ingredients: ['Leftover Rice', 'Wilted Carrots', 'Overripe Tomatoes'],
    time: '15 mins',
    difficulty: 'Easy',
    impact: '0.5 kg CO₂ saved',
    matchScore: 98,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    macros: { pro: '12g', carb: '45g', fat: '8g', cal: '320' },
    steps: [
      'Chop wilted carrots and overripe tomatoes finely.',
      'Heat a dash of oil in a pan, and sauté the vegetables until soft.',
      'Add the leftover rice and a splash of soy sauce, tossing to distribute evenly.',
      'Serve hot. A simple and delicious way to give day-old rice new life.'
    ]
  },
  {
    id: 2,
    title: 'Rustic Bread & Tomato Bake',
    ingredients: ['Stale Bread', 'Overripe Tomatoes'],
    time: '45 mins',
    difficulty: 'Medium',
    impact: '0.8 kg CO₂ saved',
    matchScore: 85,
    image: 'https://images.unsplash.com/photo-1525442266858-a5a40bbaf0ce?auto=format&fit=crop&w=800&q=80',
    macros: { pro: '18g', carb: '52g', fat: '14g', cal: '410' },
    steps: [
      'Tear the stale bread into bite-sized chunks and place them in a baking dish.',
      'Blend the overripe tomatoes with garlic and herbs to create a rich sauce.',
      'Pour the tomato sauce over the bread, allowing it to soak slightly.',
      'Bake at 180°C for 30 minutes until the top is golden and bubbly.'
    ]
  }
];

const communityRecipes = [
  { id: 101, title: 'Citrus Peel Extract', author: 'Sarah Cooks', impact: '2.4 kg CO₂', likes: 1245, img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=800&q=80' },
  { id: 102, title: 'Broccoli Stalk Slaw', author: 'GreenKitchen', impact: '1.8 kg CO₂', likes: 890, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80' },
  { id: 103, title: 'Root Veggie Broth', author: 'EcoChef', impact: '3.1 kg CO₂', likes: 2104, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80' }
];

export default function SmartRecipe() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  const toggleIngredient = (ing) => {
    if (selectedIngredients.find(i => i.id === ing.id)) {
      setSelectedIngredients(selectedIngredients.filter(i => i.id !== ing.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  const toggleDiet = (dietName) => {
    if (selectedDiets.includes(dietName)) {
      setSelectedDiets(selectedDiets.filter(d => d !== dietName));
    } else {
      setSelectedDiets([...selectedDiets, dietName]);
    }
  };

  const addCustomIngredient = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const newIng = {
      id: `custom-${Date.now()}`,
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
      if (!selectedIngredients.find(i => i.id === 'potato')) toggleIngredient(commonIngredients.find(i => i.id === 'potato'));
      if (!selectedIngredients.find(i => i.id === 'chicken')) toggleIngredient(commonIngredients.find(i => i.id === 'chicken'));
    }, 2500);
  };

  const generateRecipes = () => {
    if (selectedIngredients.length === 0) return;
    setIsGenerating(true);
    setRecipes(null);
    setTimeout(() => {
      setRecipes(mockRecipes);
      setIsGenerating(false);
    }, 2500);
  };

  const toggleSave = (id) => {
    if (savedRecipes.includes(id)) {
      setSavedRecipes(savedRecipes.filter(r => r !== id));
    } else {
      setSavedRecipes([...savedRecipes, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 font-sans selection:bg-emerald-500/30 transition-colors duration-500 relative overflow-hidden">
      
      {/* Immersive Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[70%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-white/60 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3 w-3" /> Zero Waste AI Chef
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-tight">
              Create magic from <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-teal-300">
                leftovers.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Select the ingredients you have on hand, choose your dietary preferences, and we will generate delicious, high-impact zero-waste recipes instantly.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
           
           {/* Left Panel: Inputs & Scanners */}
           <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              
              {/* Photo Scanner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none"
              >
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Smart Scanner</h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-widest font-bold">Beta</span>
                 </div>
                 
                 <button 
                   onClick={handleSimulatedScan}
                   disabled={isScanning}
                   className="w-full h-36 rounded-3xl border-2 border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-black/20 hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 group"
                 >
                    {isScanning ? (
                       <>
                         <Search className="h-8 w-8 animate-pulse text-emerald-500" />
                         <span className="text-sm font-semibold animate-pulse text-emerald-500">Scanning fridge contents...</span>
                       </>
                    ) : (
                       <>
                         <div className="p-3 rounded-full bg-slate-100 dark:bg-white/5 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors">
                            <Camera className="h-6 w-6" />
                         </div>
                         <span className="text-sm font-bold">Take a photo of your fridge</span>
                       </>
                    )}
                 </button>
              </motion.div>

              {/* Dietary Preferences */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none"
              >
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Dietary Preferences</h3>
                 <div className="flex flex-wrap gap-3">
                    {dietaryOptions.map(diet => {
                       const isSelected = selectedDiets.includes(diet.name);
                       return (
                          <button 
                            key={diet.name}
                            onClick={() => toggleDiet(diet.name)}
                            className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-black transition-all border shadow-sm ${
                               isSelected 
                               ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-transparent shadow-[0_10px_20px_rgba(0,0,0,0.1)] scale-[1.02]' 
                               : 'bg-white/50 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-emerald-400/50 dark:hover:border-emerald-500/30'
                            }`}
                          >
                             <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-emerald-500/20' : 'bg-slate-100 dark:bg-white/5'}`}>
                                {diet.icon}
                             </div>
                             <span className="uppercase tracking-widest">{diet.name}</span>
                             {isSelected && (
                                <motion.div 
                                   layoutId="diet-check"
                                   className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center border-2 border-white dark:border-[#020617] shadow-lg"
                                >
                                   <CheckCircle2 className="h-3 w-3" />
                                </motion.div>
                             )}
                          </button>
                       );
                    })}
                 </div>
              </motion.div>

              {/* Inventory Management */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2.5rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 shadow-xl dark:shadow-none"
              >
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Your Inventory</h3>
                 
                 <form onSubmit={addCustomIngredient} className="relative mb-8">
                    <input 
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Type an ingredient..."
                      className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                    />
                    <button type="submit" className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-100 dark:bg-white/10 hover:bg-emerald-500 hover:text-white text-slate-600 dark:text-white rounded-xl flex items-center justify-center transition-all">
                       <Plus className="h-5 w-5" />
                    </button>
                 </form>

                 <div className="mb-8 min-h-[60px]">
                    <AnimatePresence mode="popLayout">
                       <div className="flex flex-wrap gap-3">
                          {selectedIngredients.map(ing => (
                             <motion.div 
                               layout
                               initial={{ opacity: 0, scale: 0.9 }}
                               animate={{ opacity: 1, scale: 1 }}
                               exit={{ opacity: 0, scale: 0.9 }}
                               key={ing.id}
                               className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-bold flex items-center gap-3 shadow-md"
                             >
                                <span>{ing.icon}</span> {ing.name}
                                <button onClick={() => removeIngredient(ing.id)} className="hover:bg-black/20 p-1 rounded-full transition-colors">
                                   <X className="h-3.5 w-3.5" />
                                </button>
                             </motion.div>
                          ))}
                       </div>
                    </AnimatePresence>
                    {selectedIngredients.length === 0 && (
                       <div className="text-sm font-medium text-slate-400 dark:text-slate-500 italic py-6 text-center border-2 border-dashed border-slate-200 dark:border-white/5 rounded-2xl">
                          No ingredients added yet.
                       </div>
                    )}
                 </div>

                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Quick Add Suggestions</h4>
                 <div className="grid grid-cols-2 gap-3">
                    {commonIngredients.map(ing => {
                       const isSelected = selectedIngredients.find(i => i.id === ing.id);
                       return (
                          <button 
                            key={ing.id}
                            onClick={() => toggleIngredient(ing)}
                            className={`px-4 py-3 rounded-2xl border text-left flex items-center justify-between transition-all text-sm font-bold ${
                               isSelected 
                               ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-md' 
                               : 'bg-white/50 dark:bg-black/20 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-emerald-400/50 dark:hover:border-emerald-500/30'
                            }`}
                          >
                             <span className="truncate flex items-center gap-2"><span className="text-lg">{ing.icon}</span> {ing.name}</span>
                             {isSelected && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />}
                          </button>
                       );
                    })}
                 </div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={generateRecipes}
                disabled={selectedIngredients.length === 0 || isGenerating}
                className={`w-full py-5 rounded-2xl font-black text-white uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${
                   selectedIngredients.length === 0 
                   ? 'bg-slate-300 dark:bg-slate-800 cursor-not-allowed text-slate-400 dark:text-slate-500 shadow-none' 
                   : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 hover:shadow-emerald-500/25 hover:-translate-y-1'
                }`}
              >
                 {isGenerating ? (
                    <>
                       <Search className="h-5 w-5 animate-pulse" /> GENERATING...
                    </>
                 ) : (
                    <>
                       <ChefHat className="h-5 w-5" /> GENERATE RECIPES
                    </>
                 )}
              </motion.button>
           </div>

           {/* Right Panel: Results */}
           <div className="lg:col-span-8">
              {isGenerating ? (
                <div className="h-[800px] rounded-[3rem] bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/5 flex flex-col items-center justify-center p-8 shadow-2xl dark:shadow-none relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent animate-scan pointer-events-none"></div>
                   
                   <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="w-24 h-24 border-4 border-slate-100 dark:border-white/10 border-t-emerald-500 rounded-full mb-8 relative z-10"
                   ></motion.div>
                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 relative z-10">Cooking up ideas...</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-center max-w-md text-lg relative z-10">
                     Analyzing {selectedIngredients.length} ingredients and applying {selectedDiets.length || 'no specific'} dietary preferences.
                   </p>
                </div>
              ) : recipes ? (
                 <div className="space-y-10">
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 p-8 rounded-[2.5rem] shadow-xl dark:shadow-none"
                    >
                       <div>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Found {recipes.length} matches</h3>
                          <p className="text-slate-500 dark:text-slate-400 font-medium">Sorted by highest match score</p>
                       </div>
                       <div className="flex gap-3 bg-white/50 dark:bg-black/20 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5">
                          {['All', 'Under 30m', 'High Protein'].map(filter => (
                            <button 
                              key={filter}
                              onClick={() => setActiveFilter(filter)}
                              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                activeFilter === filter 
                                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                              }`}
                            >
                               {filter}
                            </button>
                          ))}
                       </div>
                    </motion.div>
                    
                    {recipes.map((recipe, idx) => (
                       <motion.div 
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: idx * 0.15, type: 'spring', damping: 25 }}
                         key={recipe.id}
                         className="rounded-[3rem] bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/10 overflow-hidden shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-all duration-500 group"
                       >
                          <div className="md:flex">
                             {/* Image Section */}
                             <div className="md:w-[45%] h-72 md:h-auto relative overflow-hidden">
                                <img 
                                  src={recipe.image} 
                                  alt={recipe.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:hidden"></div>
                                
                                <div className="absolute top-6 left-6">
                                   <div className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl text-sm font-black text-slate-900 dark:text-white shadow-lg flex items-center gap-2">
                                      <Sparkles className="h-4 w-4 text-emerald-500" /> {recipe.matchScore}% Match
                                   </div>
                                </div>
                                <div className="absolute top-6 right-6">
                                   <button 
                                     onClick={() => toggleSave(recipe.id)}
                                     className={`p-3 rounded-2xl backdrop-blur-xl shadow-lg transition-all ${
                                       savedRecipes.includes(recipe.id) 
                                       ? 'bg-emerald-500 text-white' 
                                       : 'bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-emerald-500 hover:scale-110'
                                     }`}
                                   >
                                      <BookmarkPlus className={`h-6 w-6 ${savedRecipes.includes(recipe.id) ? 'fill-current' : ''}`} />
                                   </button>
                                </div>
                             </div>

                             {/* Content Section */}
                             <div className="md:w-[55%] p-10 md:p-12 relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-emerald-50/50 to-transparent dark:from-emerald-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight relative z-10">{recipe.title}</h4>
                                
                                <div className="flex flex-wrap gap-4 mb-8 relative z-10">
                                   <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-white/5 backdrop-blur-sm text-sm font-bold text-slate-700 dark:text-slate-300">
                                      <Clock className="h-4 w-4 text-orange-500" /> {recipe.time}
                                   </div>
                                   <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-white/5 backdrop-blur-sm text-sm font-bold text-slate-700 dark:text-slate-300">
                                      <Flame className="h-4 w-4 text-rose-500" /> {recipe.difficulty}
                                   </div>
                                   <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-sm font-bold text-emerald-700 dark:text-emerald-400 shadow-sm">
                                      <Leaf className="h-4 w-4" /> {recipe.impact}
                                   </div>
                                </div>

                                {/* Macros Section */}
                                <div className="grid grid-cols-4 gap-3 mb-8 relative z-10">
                                   {[
                                     { label: 'Protein', val: recipe.macros.pro, color: 'blue' },
                                     { label: 'Carbs', val: recipe.macros.carb, color: 'emerald' },
                                     { label: 'Fats', val: recipe.macros.fat, color: 'amber' },
                                     { label: 'Cals', val: recipe.macros.cal, color: 'rose' }
                                   ].map((m, i) => (
                                     <div key={i} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/60 dark:bg-black/20 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm shadow-sm">
                                        <span className={`text-xl font-black text-${m.color}-600 dark:text-${m.color}-400 mb-1`}>{m.val}</span>
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{m.label}</span>
                                     </div>
                                   ))}
                                </div>

                                <div className="mb-8 relative z-10">
                                   <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                      <Utensils className="h-3 w-3" /> Key Ingredients
                                   </h5>
                                   <div className="flex flex-wrap gap-2">
                                      {recipe.ingredients.map((ing, i) => (
                                         <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                                            {ing}
                                         </span>
                                      ))}
                                   </div>
                                </div>

                                <div className="relative z-10">
                                   <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                      <FileText className="h-3 w-3" /> Instructions
                                   </h5>
                                   <ul className="space-y-6">
                                      {recipe.steps.map((step, i) => (
                                         <li key={i} className="flex gap-5 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-black text-sm shadow-sm">
                                               {i+1}
                                            </span>
                                            <span className="pt-1.5 leading-relaxed font-medium">{step}</span>
                                         </li>
                                      ))}
                                   </ul>
                                </div>
                                
                                <button className="w-full mt-10 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 relative z-10 shadow-xl">
                                  <PlayCircle className="h-4 w-4" /> Start Cooking
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
                   className="h-[800px] rounded-[3rem] border-2 border-dashed border-slate-300 dark:border-white/10 bg-white/40 dark:bg-white/[0.01] backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center shadow-sm"
                 >
                    <div className="w-32 h-32 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-300 dark:text-slate-600 mb-8 shadow-xl">
                       <ChefHat className="h-14 w-14" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Awaiting Ingredients</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg font-medium leading-relaxed">
                       Add leftover ingredients from your inventory to generate delicious, personalized zero-waste recipes.
                    </p>
                 </motion.div>
              )}
           </div>
        </div>

        {/* --- Trending Community Recipes --- */}
        <div className="pt-24 border-t border-slate-200 dark:border-white/10 relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-4">
                    <Users className="h-10 w-10 text-blue-500" /> Trending Protocols
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                    Discover popular zero-waste meals created by members of our community.
                 </p>
              </div>
              <button className="px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-all shadow-md">
                 Browse All
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {communityRecipes.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15 }}
                   className="group rounded-[2.5rem] bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/5 overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-500"
                 >
                    <div className="h-64 relative overflow-hidden">
                       <img 
                         src={item.img} 
                         alt={item.title} 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-xl text-sm font-black text-slate-900 dark:text-white shadow-lg flex items-center gap-2">
                          <Heart className="h-4 w-4 text-rose-500 fill-rose-500" /> {item.likes}
                       </div>
                    </div>
                    <div className="p-8 relative">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">By {item.author}</div>
                       <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-blue-500 transition-colors">{item.title}</h4>
                       
                       <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/10">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-bold shadow-sm">
                             <Leaf className="w-4 h-4"/> {item.impact} saved
                          </div>
                          <button className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all shadow-sm">
                             <BookmarkPlus className="w-5 h-5" />
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
