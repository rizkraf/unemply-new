import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    {
      pain: "Pernah lupa sudah apply ke mana aja?",
      solution: "Semua lamaran tercatat rapi di satu dashboard. Nggak ada lagi cerita 'Hah, ini perusahaan apa ya?' pas ditelepon HRD."
    },
    {
      pain: "Bingung kapan harus follow-up HRD?",
      solution: "Set reminder otomatis. Unemply akan ingetin kamu buat kirim email follow-up setelah 7 hari tanpa kabar."
    },
    {
      pain: "Spreadsheet Excel yang berantakan?",
      solution: "Tinggalkan cara lama. Pindahkan lamaranmu dengan drag-and-drop di Kanban board yang intuitif dan modern."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
            Berhenti pakai spreadsheet. <br /> Mulai pakai sistem.
          </h2>
          <p className="text-lg text-foreground/60">
            Mencari kerja itu sudah susah, jangan ditambah pusing dengan cara tracking yang manual dan berantakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left: Problems */}
          <div className="flex flex-col gap-8">
            {problems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <XCircle className="text-red-400/70" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground/90 mb-2">{item.pain}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Solution Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-[32px] blur-2xl" />
            <div className="glass-card p-6 md:p-8 relative z-10">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-bold text-xl text-indigo-400">G</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Gojek</h4>
                    <p className="text-sm text-foreground/50">Product Designer</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/20">
                  Interview
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground/90">Applied via LinkedIn</p>
                    <p className="text-xs text-foreground/40 mt-1">12 Mar 2026, 09:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground/90">HR Screening Call</p>
                    <p className="text-xs text-foreground/40 mt-1">15 Mar 2026, 14:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 relative">
                  <div className="absolute left-2 top-6 bottom-[-24px] w-px bg-border" />
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-accent bg-background z-10 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground/90">User Interview</p>
                    <p className="text-xs text-accent mt-1">Besok, 10:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <button className="w-full py-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground/80 text-sm font-medium transition-colors border border-foreground/5">
                  Set Follow-up Reminder
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
