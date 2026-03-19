import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Plus, MoreHorizontal } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-white/80">Unemply 1.0 is now live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient leading-[1.1]"
          >
            Semua lamaran kerja kamu, <br className="hidden md:block" />
            dalam satu tempat.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Lacak status lamaran dari Glints, Kalibrr, JobStreet, dan LinkedIn tanpa ribet. 
            Fokus interview, bukan spreadsheet.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href="#daftar" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:-translate-y-0.5">
              Mulai Gratis <ArrowRight size={18} />
            </a>
            <a href="#demo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface hover:bg-surface-hover border border-border text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-0.5">
              <PlayCircle size={18} className="text-white/70" /> Lihat Demo
            </a>
          </motion.div>
        </div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-border/50 to-transparent rounded-[24px] blur-sm" />
          <div className="relative rounded-[20px] border border-border bg-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
            {/* Browser/App Header */}
            <div className="h-12 border-b border-border flex items-center px-4 gap-2 bg-background/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-white/40 font-mono">
                unemply.com/board
              </div>
            </div>
            
            {/* App Content - Kanban Board */}
            <div className="p-6 md:p-8 flex gap-6 overflow-x-auto hide-scrollbar min-h-[400px]">
              <KanbanColumn title="Wishlist" count={2} color="bg-white/10">
                <KanbanCard title="Frontend Developer" company="Tokopedia" platform="LinkedIn" date="2 hari lalu" />
                <KanbanCard title="UI Designer" company="Gojek" platform="Glints" date="Hari ini" />
              </KanbanColumn>
              
              <KanbanColumn title="Applied" count={3} color="bg-blue-500/20 text-blue-400">
                <KanbanCard title="Product Designer" company="Traveloka" platform="Kalibrr" date="12 Mar" />
                <KanbanCard title="React Developer" company="Ajaib" platform="JobStreet" date="10 Mar" />
                <KanbanCard title="UX Researcher" company="Halodoc" platform="Website" date="8 Mar" />
              </KanbanColumn>
              
              <KanbanColumn title="Interview" count={1} color="bg-amber-500/20 text-amber-400">
                <KanbanCard title="Senior Frontend" company="Bibit" platform="LinkedIn" date="Besok, 14:00" active />
              </KanbanColumn>
              
              <KanbanColumn title="Offer" count={0} color="bg-teal-500/20 text-teal-400">
                <div className="h-24 rounded-xl border border-dashed border-border flex items-center justify-center text-white/30 text-sm">
                  Belum ada offer
                </div>
              </KanbanColumn>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function KanbanColumn({ title, count, color, children }: { title: string, count: number, color: string, children: React.ReactNode }) {
  return (
    <div className="flex-1 min-w-[260px] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-white/90">{title}</span>
          <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", color)}>{count}</span>
        </div>
        <button className="text-white/40 hover:text-white/80 transition-colors">
          <Plus size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}

function KanbanCard({ title, company, platform, date, active }: { title: string, company: string, platform: string, date: string, active?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -2, scale: 1.01 }}
      className={cn(
        "p-4 rounded-xl border bg-background/50 backdrop-blur-sm cursor-grab active:cursor-grabbing transition-shadow",
        active ? "border-accent/50 shadow-[0_0_15px_rgba(20,184,166,0.15)]" : "border-border hover:border-white/20"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-medium text-sm text-white/90 mb-1">{title}</h4>
          <p className="text-xs text-white/50">{company}</p>
        </div>
        <button className="text-white/30 hover:text-white/70">
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
          {platform}
        </span>
        <span className={cn("text-[10px] font-medium", active ? "text-accent" : "text-white/40")}>
          {date}
        </span>
      </div>
    </motion.div>
  );
}
