import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-accent/20 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white"
        >
          Sudah siap kendalikan <br className="hidden md:block" /> pencarian kerjamu?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Berhenti menebak-nebak status lamaranmu. Bergabung dengan ribuan job seeker Indonesia lainnya yang sudah beralih ke Unemply.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="#daftar" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1">
            Mulai Gratis Sekarang <ArrowRight size={20} />
          </a>
          <p className="mt-6 text-sm text-white/40">Tidak perlu kartu kredit. Setup dalam 30 detik.</p>
        </motion.div>
      </div>
    </section>
  );
}
