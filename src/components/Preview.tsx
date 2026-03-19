import { motion } from 'motion/react';

export function Preview() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
          Satu dashboard untuk semua
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Tampilan yang bersih, cepat, dan fokus pada apa yang penting: progres kariermu.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[24px] border border-border bg-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Mockup Header */}
          <div className="h-14 border-b border-border flex items-center px-6 gap-4 bg-background/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-8 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-xs text-white/40 font-mono">
                unemply.com/dashboard
              </div>
            </div>
          </div>
          
          {/* Mockup Body - Dashboard View */}
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-border p-4 hidden md:flex flex-col gap-2 bg-background/30">
              <div className="px-3 py-2 text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Menu</div>
              <div className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm font-medium flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-indigo-500" /> Board
              </div>
              <div className="px-3 py-2 rounded-lg hover:bg-white/5 text-white/60 text-sm font-medium flex items-center gap-3 transition-colors">
                <div className="w-4 h-4 rounded-sm bg-teal-500" /> Analytics
              </div>
              <div className="px-3 py-2 rounded-lg hover:bg-white/5 text-white/60 text-sm font-medium flex items-center gap-3 transition-colors">
                <div className="w-4 h-4 rounded-sm bg-amber-500" /> Reminders
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-8 bg-background/10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Overview</h3>
                  <p className="text-white/50 text-sm">Update terakhir: Hari ini, 09:41 WIB</p>
                </div>
                <button className="bg-accent text-background px-4 py-2 rounded-lg text-sm font-medium">
                  + Tambah Lamaran
                </button>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl border border-border bg-surface/50">
                  <p className="text-white/50 text-sm mb-2">Total Lamaran</p>
                  <p className="text-3xl font-bold text-white">24</p>
                </div>
                <div className="p-6 rounded-2xl border border-border bg-surface/50">
                  <p className="text-white/50 text-sm mb-2">Interview Rate</p>
                  <p className="text-3xl font-bold text-accent">12.5%</p>
                </div>
                <div className="p-6 rounded-2xl border border-border bg-surface/50">
                  <p className="text-white/50 text-sm mb-2">Active Follow-ups</p>
                  <p className="text-3xl font-bold text-amber-400">3</p>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="p-6 rounded-2xl border border-border bg-surface/50 h-64">
                <h4 className="font-medium text-white mb-4">Aktivitas Terakhir</h4>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/90">Status berubah ke <span className="text-accent">Interview</span></p>
                        <p className="text-xs text-white/40">Product Designer di Gojek • 2 jam lalu</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
