import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initialTheme = saved === 'light' || saved === 'dark' 
      ? saved 
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background">
            <Briefcase size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">Unemply</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#fitur" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Fitur</a>
          <a href="#cara-kerja" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Cara Kerja</a>
          <a href="#harga" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Harga</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="text-foreground/70 hover:text-foreground transition-colors p-2 rounded-full hover:bg-foreground/5">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#masuk" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Masuk</a>
          <a href="#daftar" className="text-sm font-medium bg-accent hover:bg-accent/90 text-background px-4 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]">
            Mulai Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="text-foreground/70 hover:text-foreground transition-colors p-2 rounded-full hover:bg-foreground/5">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-foreground/70 hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-border p-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#fitur" className="text-sm font-medium text-foreground/70 hover:text-foreground py-2">Fitur</a>
          <a href="#cara-kerja" className="text-sm font-medium text-foreground/70 hover:text-foreground py-2">Cara Kerja</a>
          <a href="#harga" className="text-sm font-medium text-foreground/70 hover:text-foreground py-2">Harga</a>
          <div className="h-px bg-border my-2" />
          <a href="#masuk" className="text-sm font-medium text-foreground/70 hover:text-foreground py-2">Masuk</a>
          <a href="#daftar" className="text-sm font-medium bg-accent text-background px-4 py-3 rounded-xl text-center mt-2">
            Mulai Gratis
          </a>
        </motion.div>
      )}
    </header>
  );
}
