import React, { useState, useEffect } from 'react';
import { 
  Search, Moon, Sun, Menu, X, Bot, 
  ArrowRight, Github, Mail, ExternalLink,
  ChevronRight, Sparkles, Wrench, Zap, ChevronDown,
  FileText, Image as ImageIcon, RefreshCw, QrCode, 
  Activity, Ruler, Thermometer, Database, Minimize, 
  Code, Lock, Maximize, Scissors, Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { allTools, categories, Tool } from './toolsData';
import { cn } from './lib/utils';
import QRCode from 'qrcode';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

// --- Components ---

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2.5 group cursor-pointer", className)}>
    <div className="relative">
      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:rotate-5 transition-all duration-300">
        <Wrench size={22} strokeWidth={2.5} className="md:w-6 md:h-6" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-dark-body flex items-center justify-center shadow-sm">
        <Zap size={10} className="text-indigo-600 fill-indigo-600" />
      </div>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase ml-0.5">
        All
      </span>
      <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent uppercase">
        TOOL<span className="text-slate-900 dark:text-dark-text">HUB</span>
      </span>
    </div>
  </div>
);

const Tooltip = ({ children, text }: { children: React.ReactNode, text: string, key?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-dark-ai-bg text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap z-[60] pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-dark-ai-bg" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = ({ darkMode, setDarkMode, onAuthClick }: { darkMode: boolean, setDarkMode: (v: boolean) => void, onAuthClick: (mode: 'login' | 'signup') => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPdfDropdownOpen, setIsPdfDropdownOpen] = useState(false);

  const pdfTools = allTools.filter(t => t.name.toLowerCase().includes('pdf'));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-header backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
          
          {/* PDF Tools Dropdown */}
          <div className="relative" onMouseEnter={() => setIsPdfDropdownOpen(true)} onMouseLeave={() => setIsPdfDropdownOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer py-2">
              PDF Tools
              <ChevronDown size={14} className={cn("transition-transform duration-200", isPdfDropdownOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {isPdfDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-black/5 dark:border-white/5 p-2 overflow-hidden"
                >
                  <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {pdfTools.map(tool => (
                      <a 
                        key={tool.id}
                        href="#tools"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                        onClick={() => {
                          // We could trigger a filter here if we had access to setActiveCategory
                          // For now, it just scrolls to tools
                        }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          <FileText size={16} />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-dark-text truncate">{tool.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#tools" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tools</a>
          <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(79, 70, 229, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAuthClick('login')}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors cursor-pointer"
            >
              Log in
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAuthClick('signup')}
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
            >
              Sign up
            </motion.button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#0f172a] border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-4"
          >
            <a href="#" className="text-lg font-medium text-slate-600 dark:text-slate-300">Home</a>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">PDF Tools</span>
              <div className="grid grid-cols-2 gap-2">
                {pdfTools.slice(0, 6).map(tool => (
                  <a key={tool.id} href="#tools" onClick={() => setIsMenuOpen(false)} className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 truncate">
                    {tool.name.replace(' Tool', '')}
                  </a>
                ))}
              </div>
            </div>
            <a href="#tools" className="text-lg font-medium text-slate-600 dark:text-slate-300">Tools</a>
            <a href="#" className="text-lg font-medium text-slate-600 dark:text-slate-300">Contact</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <hr className="border-black/5 dark:border-white/5" />
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(79, 70, 229, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { onAuthClick('login'); setIsMenuOpen(false); }}
              className="w-full py-3 text-center font-medium text-slate-600 dark:text-dark-text bg-slate-50 dark:bg-dark-card rounded-xl transition-colors"
            >
              Log in
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { onAuthClick('signup'); setIsMenuOpen(false); }}
              className="w-full py-3 text-center font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/10 transition-all"
            >
              Sign up
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onSearch }: { onSearch: (v: string) => void }) => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-dark-body">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-slate-900 dark:text-dark-text mb-8 tracking-tighter leading-[1.1]"
        >
          All <span className="text-indigo-600">TOOLHUB</span>
          <span className="block text-2xl md:text-3xl font-medium text-slate-500 dark:text-dark-card-text mt-4 tracking-normal">
            Your Ultimate Online Utility Hub
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-dark-card-text mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Work effortlessly using our complete set of free tools. Merge, split, compress, convert, rotate, and more. Fast, simple, and 100% free.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-xl mx-auto"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <Search size={20} />
          </div>
          <input 
            type="text"
            placeholder="Search any tool (e.g. PDF, Image, Age)..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl shadow-indigo-500/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-dark-text"
          />
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#tools" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 group">
            Browse all tools
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ToolIcon = ({ toolId, icon: Icon, className }: { toolId: string, icon: any, className?: string }) => {
  // Helper to get color and letter for specific tool types
  const getToolTheme = (id: string) => {
    if (id.includes('word')) return { color: 'bg-blue-600', light: 'bg-blue-50', text: 'W', iconColor: 'text-blue-600', icon: FileText };
    if (id.includes('excel')) return { color: 'bg-emerald-600', light: 'bg-emerald-50', text: 'X', iconColor: 'text-emerald-600', icon: Database };
    if (id.includes('ppt') || id.includes('powerpoint')) return { color: 'bg-orange-500', light: 'bg-orange-50', text: 'P', iconColor: 'text-orange-600', icon: FileText };
    if (id.includes('jpg') || id.includes('png') || id.includes('img')) return { color: 'bg-yellow-400', light: 'bg-yellow-50', text: 'JPG', iconColor: 'text-yellow-600', icon: ImageIcon };
    if (id.includes('pdf')) return { color: 'bg-orange-500', light: 'bg-orange-50', text: 'PDF', iconColor: 'text-orange-600', icon: FileText };
    if (id.includes('html')) return { color: 'bg-amber-500', light: 'bg-amber-50', text: 'HTML', iconColor: 'text-amber-600', icon: Code };
    return { color: 'bg-indigo-600', light: 'bg-indigo-50', text: '', iconColor: 'text-indigo-600', icon: Icon };
  };

  const theme = getToolTheme(toolId);

  // PDF specific layouts (Merge, Split, Compress)
  if (toolId === 'pdf-merge') {
    return (
      <div className={cn("relative w-12 h-12", className)}>
        <div className="absolute top-0 left-0 w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center shadow-sm">
          <ArrowRight size={12} className="text-white rotate-45" />
        </div>
        <div className="absolute bottom-0 right-0 w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center shadow-sm">
          <ArrowRight size={12} className="text-white -rotate-[135deg]" />
        </div>
      </div>
    );
  }

  if (toolId === 'pdf-split') {
    return (
      <div className={cn("relative w-12 h-12", className)}>
        <div className="absolute top-0 left-0 w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center shadow-sm">
          <ArrowRight size={12} className="text-white -rotate-[135deg]" />
        </div>
        <div className="absolute bottom-0 right-0 w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center shadow-sm">
          <ArrowRight size={12} className="text-white rotate-45" />
        </div>
      </div>
    );
  }

  if (toolId === 'pdf-comp' || toolId === 'img-comp') {
    return (
      <div className={cn("grid grid-cols-2 gap-0.5 w-12 h-12 p-0.5", className)}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={cn("rounded-sm flex items-center justify-center", toolId.includes('pdf') ? "bg-emerald-500" : "bg-purple-500")}>
            <ArrowRight size={8} className={cn("text-white", 
              i === 1 ? "rotate-45" : 
              i === 2 ? "rotate-[135deg]" : 
              i === 3 ? "-rotate-45" : "-rotate-[135deg]"
            )} />
          </div>
        ))}
      </div>
    );
  }

  if (toolId === 'pdf-sign') {
    return (
      <div className={cn("w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20", className)}>
        <Sparkles size={24} className="text-white" />
      </div>
    );
  }

  if (toolId === 'pdf-lock' || toolId === 'pdf-unlock') {
    return (
      <div className={cn("w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20", className)}>
        <Lock size={24} className="text-white" />
      </div>
    );
  }

  if (toolId === 'pdf-rot') {
    return (
      <div className={cn("w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20", className)}>
        <RefreshCw size={24} className="text-white" />
      </div>
    );
  }

  // Conversion style (Small box top-left, Large box bottom-right)
  const parts = toolId.split('-');
  if (parts.length >= 2) {
    const sourceTheme = getToolTheme(parts[0]);
    const targetTheme = getToolTheme(parts[parts.length - 1]);
    
    return (
      <div className={cn("relative w-12 h-12", className)}>
        <div className={cn("absolute top-0 left-0 w-7 h-7 rounded-md flex items-center justify-center border", sourceTheme.light, sourceTheme.iconColor.replace('text-', 'border-'))}>
          {sourceTheme.text && sourceTheme.text.length === 1 ? (
            <span className={cn("font-bold text-[10px]", sourceTheme.iconColor)}>{sourceTheme.text}</span>
          ) : (
            <sourceTheme.icon size={12} className={sourceTheme.iconColor} />
          )}
        </div>
        <div className={cn("absolute bottom-0 right-0 w-8 h-8 rounded-md flex items-center justify-center shadow-md", targetTheme.color)}>
          {targetTheme.text && targetTheme.text.length === 1 ? (
            <span className="text-white font-bold text-xs">{targetTheme.text}</span>
          ) : (
            <targetTheme.icon size={14} className="text-white" />
          )}
        </div>
      </div>
    );
  }

  // Fallback for other tools using the same "box" aesthetic
  return (
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-lg", className, 
      toolId.includes('img') ? "bg-purple-500 shadow-purple-500/20" :
      toolId.includes('pdf') ? "bg-orange-500 shadow-orange-500/20" :
      toolId.includes('pass') ? "bg-slate-800 shadow-slate-800/20" :
      toolId.includes('calc') ? "bg-indigo-600 shadow-indigo-600/20" :
      toolId.includes('qr') ? "bg-black shadow-black/20" :
      toolId.includes('color') ? "bg-pink-500 shadow-pink-500/20" :
      toolId.includes('conv') ? "bg-blue-600 shadow-blue-600/20" :
      "bg-indigo-600 shadow-indigo-600/20"
    )}>
      <Icon size={24} className="text-white" />
    </div>
  );
};

const ToolCard = ({ tool, onClick }: { tool: Tool, key?: string, onClick: () => any }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all group cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4">
        <Tooltip text={tool.name}>
          <ToolIcon toolId={tool.id} icon={tool.icon} />
        </Tooltip>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-dark-text mb-2">{tool.name}</h3>
      <p className="text-sm text-slate-500 dark:text-dark-card-text mb-6 line-clamp-2">{tool.desc}</p>
      <button className="w-full py-2.5 bg-slate-50 dark:bg-dark-ai-bg text-slate-600 dark:text-dark-card-text rounded-xl text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-all">
        Use Tool
      </button>
    </motion.div>
  );
};

// --- Demos ---

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    setResult(`You are ${age} years old.`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Select Birth Date</label>
        <input 
          type="date" 
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button onClick={calculate} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Calculate Age</button>
      {result && <div className="p-4 bg-indigo-50 dark:bg-dark-ai-bg text-indigo-700 dark:text-indigo-300 rounded-xl text-center font-bold">{result}</div>}
    </div>
  );
};

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ bmi: string, cat: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      let cat = '';
      if (parseFloat(bmi) < 18.5) cat = 'Underweight';
      else if (parseFloat(bmi) < 25) cat = 'Normal weight';
      else if (parseFloat(bmi) < 30) cat = 'Overweight';
      else cat = 'Obese';
      setResult({ bmi, cat });
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Calculate BMI</button>
      {result && (
        <div className="p-4 bg-indigo-50 dark:bg-dark-ai-bg text-indigo-700 dark:text-indigo-300 rounded-xl text-center">
          <div className="text-2xl font-black">{result.bmi}</div>
          <div className="text-sm font-medium">{result.cat}</div>
        </div>
      )}
    </div>
  );
};

const CaseConverter = () => {
  const [text, setText] = useState('');
  const convert = (type: string) => {
    if (type === 'upper') setText(text.toUpperCase());
    else if (type === 'lower') setText(text.toLowerCase());
    else if (type === 'title') setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
  };
  return (
    <div className="space-y-4">
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type or paste your text here..."
        className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />
      <div className="grid grid-cols-3 gap-2">
        <button onClick={() => convert('upper')} className="py-2 bg-slate-100 dark:bg-dark-ai-bg rounded-lg text-xs font-bold dark:text-dark-text">UPPERCASE</button>
        <button onClick={() => convert('lower')} className="py-2 bg-slate-100 dark:bg-dark-ai-bg rounded-lg text-xs font-bold dark:text-dark-text">lowercase</button>
        <button onClick={() => convert('title')} className="py-2 bg-slate-100 dark:bg-dark-ai-bg rounded-lg text-xs font-bold dark:text-dark-text">Title Case</button>
      </div>
    </div>
  );
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let retVal = "";
    for (let i = 0; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(retVal);
  };
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Length: {length}</label>
        <input type="range" min="4" max="32" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full" />
      </div>
      <button onClick={generate} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Generate Password</button>
      {password && (
        <div className="p-4 bg-slate-100 dark:bg-dark-ai-bg rounded-xl text-center font-mono break-all dark:text-dark-text">
          {password}
        </div>
      )}
    </div>
  );
};

const QRGenerator = () => {
  const [text, setText] = useState('https://alltoolhub.com');
  const [qr, setQr] = useState('');
  const generate = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQr(url);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="space-y-4">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter URL or text..."
        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button onClick={generate} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Generate QR Code</button>
      {qr && <img src={qr} alt="QR Code" className="mx-auto w-48 h-48 rounded-lg shadow-lg" />}
    </div>
  );
};

const ColorPicker = () => {
  const [color, setColor] = useState('#4f46e5');
  return (
    <div className="space-y-4 text-center">
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        className="w-32 h-32 rounded-full cursor-pointer border-4 border-white dark:border-slate-700 shadow-xl"
      />
      <div className="text-2xl font-mono font-bold dark:text-dark-text uppercase">{color}</div>
    </div>
  );
};

const MockTool = ({ name }: { name: string }) => (
  <div className="text-center py-10 space-y-4">
    <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-3xl flex items-center justify-center mx-auto">
      <Sparkles size={40} />
    </div>
    <h3 className="text-xl font-bold dark:text-dark-text">{name}</h3>
    <p className="text-slate-500 dark:text-dark-card-text">This tool is coming soon! Our AI suggests using one of our existing tools in the meantime.</p>
    <div className="flex justify-center gap-2">
      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs rounded-full font-bold">Try Age Calculator</span>
      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs rounded-full font-bold">Try QR Gen</span>
    </div>
  </div>
);

const AuthModal = ({ mode, onClose, onSwitch }: { mode: 'login' | 'signup', onClose: () => void, onSwitch: (mode: 'login' | 'signup') => void }) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-white dark:bg-dark-modal rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold dark:text-dark-text">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform mt-4">
              {mode === 'login' ? 'Sign In' : 'Get Started'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => onSwitch(mode === 'login' ? 'signup' : 'login')}
                className="ml-2 text-indigo-600 font-bold hover:underline"
              >
                {mode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [authModal, setAuthModal] = useState<{ open: boolean, mode: 'login' | 'signup' }>({ open: false, mode: 'login' });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tool.cat === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAISuggest = async () => {
    if (!aiQuery) return;
    setAiResponse("Thinking...");
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = "gemini-3-flash-preview";
      
      // Group tools by category for better context
      const toolsByCategory = categories.reduce((acc, cat) => {
        const tools = allTools.filter(t => t.cat === cat.id);
        if (tools.length > 0) {
          acc[cat.name] = tools.map(t => `${t.name}: ${t.desc}`).join('\n');
        }
        return acc;
      }, {} as Record<string, string>);

      const toolsContext = Object.entries(toolsByCategory)
        .map(([cat, tools]) => `### ${cat} Tools:\n${tools}`)
        .join('\n\n');
      
      const prompt = `You are the "AI Tool Assistant" for a comprehensive utility website called "ToolHub".
      The user is asking for help or a tool recommendation: "${aiQuery}"
      
      Your goal is to analyze their intent and suggest the most relevant tool(s) from our collection.
      
      Available Tools by Category:
      ${toolsContext}
      
      Instructions:
      1. If a specific tool exactly matches their need, recommend it by name and explain briefly how it helps.
      2. If multiple tools are relevant, list the top 2-3.
      3. If no specific tool matches, suggest the closest category or provide a helpful general response about our capabilities.
      4. Keep the tone friendly, professional, and concise.
      5. Use Markdown for formatting (bold tool names, bullet points).
      
      Response:`;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 0.95,
        }
      });

      setAiResponse(response.text || "I'm sorry, I couldn't find a specific recommendation. Try browsing our categories!");
    } catch (error) {
      console.error("AI Assistant Error:", error);
      
      // Enhanced Fallback Logic
      const query = aiQuery.toLowerCase();
      let suggestion = "I couldn't find a specific tool. Try browsing our categories like Image, Document, or Developer tools!";
      
      const keywordMap = [
        { keys: ['pdf', 'merge', 'split', 'compress', 'word', 'ppt', 'excel', 'document'], msg: "I recommend our **Document Tools**! We have specific utilities for merging, splitting, and compressing PDFs, as well as converting them to Word or PowerPoint." },
        { keys: ['image', 'photo', 'picture', 'bg', 'background', 'resize', 'crop', 'convert'], msg: "Check out our **Image Tools**! You can remove backgrounds, resize images, and convert between formats like PNG, JPG, and WebP." },
        { keys: ['age', 'born', 'birthday', 'how old', 'calculate'], msg: "Our **Age Calculator** is perfect for finding out exactly how old you are in years, months, and days!" },
        { keys: ['password', 'secure', 'pass', 'generator', 'strength'], msg: "Use our **Password Generator** to create strong passwords, and check their security with our **Strength Checker**." },
        { keys: ['qr', 'code', 'scan', 'wifi', 'vcard'], msg: "Our **QR Code Tools** can help you generate custom codes for URLs, WiFi credentials, and contact cards!" },
        { keys: ['color', 'hex', 'rgb', 'palette', 'gradient'], msg: "Explore our **Color Tools**! We have a color picker, palette generator, and CSS gradient creator." },
        { keys: ['json', 'html', 'css', 'minify', 'format', 'dev', 'code'], msg: "Our **Developer Tools** are great for minifying and formatting JSON, HTML, and CSS code." },
        { keys: ['bmi', 'health', 'fitness', 'weight', 'body'], msg: "Our **BMI Calculator** in the Health category can help you track your body mass index and health status." },
        { keys: ['unit', 'convert', 'length', 'weight', 'temp', 'speed'], msg: "We have a wide range of **Unit Converters** for length, weight, temperature, speed, and more!" },
      ];

      for (const item of keywordMap) {
        if (item.keys.some(k => query.includes(k))) {
          suggestion = item.msg;
          break;
        }
      }
      
      setTimeout(() => setAiResponse(suggestion), 500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-body transition-colors font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onAuthClick={(mode) => setAuthModal({ open: true, mode })}
      />
      
      <main>
        <Hero onSearch={setSearchQuery} />

        {/* Category Filter */}
        <section id="tools" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 scrollbar-hide gap-4">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <Tooltip key={cat.id} text={cat.fullName || `${cat.name} Tools`}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border",
                      activeCategory === cat.id 
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20" 
                        : "bg-white dark:bg-dark-card text-slate-600 dark:text-dark-card-text border-slate-200 dark:border-slate-700 hover:border-indigo-400"
                    )}
                  >
                    <Icon size={16} />
                    {cat.name}
                  </button>
                </Tooltip>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTools.map(tool => (
                <ToolCard 
                  key={tool.id} 
                  tool={tool} 
                  onClick={() => setSelectedTool(tool)} 
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-400 mb-4 flex justify-center">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text">No tools found</h3>
              <p className="text-slate-500">Try searching for something else or browse categories.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-400 max-w-sm mb-8">
              The ultimate destination for free online tools. We provide over 120+ utilities to help you work faster and smarter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Image Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PDF Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dev Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} AllTOOLHUB. All rights reserved.
        </div>
      </footer>

      {/* Tool Modal */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-dark-card rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    {React.createElement(selectedTool.icon, { size: 20 })}
                  </div>
                  <h2 className="text-xl font-bold dark:text-dark-text">{selectedTool.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                {selectedTool.demo === 'age' && <AgeCalculator />}
                {selectedTool.demo === 'bmi' && <BMICalculator />}
                {selectedTool.demo === 'case' && <CaseConverter />}
                {selectedTool.demo === 'password' && <PasswordGenerator />}
                {selectedTool.demo === 'qr' && <QRGenerator />}
                {selectedTool.demo === 'color' && <ColorPicker />}
                {!selectedTool.demo && <MockTool name={selectedTool.name} />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AI Assistant Button */}
      <button 
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl shadow-indigo-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <Bot size={32} className="group-hover:rotate-12 transition-transform" />
      </button>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {isAIOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAIOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-dark-modal rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bot size={24} />
                  <h2 className="text-xl font-bold">AI Tool Assistant</h2>
                </div>
                <button onClick={() => setIsAIOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-dark-card-text">Describe what you need...</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAISuggest()}
                      placeholder="e.g. I need to edit a PDF..."
                      className="w-full p-4 pr-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-dark-text outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button 
                      onClick={handleAISuggest}
                      className="absolute right-2 top-2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

                {aiResponse && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-indigo-50 dark:bg-dark-ai-bg border border-indigo-100 dark:border-indigo-800 rounded-2xl"
                  >
                    <div className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed prose prose-indigo dark:prose-invert prose-sm max-w-none">
                      <Markdown>{aiResponse}</Markdown>
                    </div>
                  </motion.div>
                )}

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-400 text-center">
                    Our AI can help you find the right tool for any task.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AnimatePresence>
        {authModal.open && (
          <AuthModal 
            mode={authModal.mode} 
            onClose={() => setAuthModal({ ...authModal, open: false })} 
            onSwitch={(mode) => setAuthModal({ open: true, mode })}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
