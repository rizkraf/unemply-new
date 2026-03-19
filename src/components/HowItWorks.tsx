import { motion } from 'motion/react';
import { UserPlus, PlusSquare, LineChart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={28} className="text-indigo-400" />,
      title: "Daftar gratis dalam 30 detik",
      desc: "Buat akun tanpa kartu kredit. Langsung masuk ke dashboard yang bersih dan siap pakai."
    },
    {
      icon: <PlusSquare size={28} className="text-amber-400" />,
      title: "Tambah lamaran dari platform manapun",
      desc: "Copy-paste link lowongan dari LinkedIn, Glints, JobStreet, atau Kalibrr. Kami bantu catat detailnya."
    },
    {
      icon: <LineChart size={28} className="text-teal-400" />,
      title: "Lacak, analisis, dan follow-up",
      desc: "Pindahkan kartu lamaran sesuai progres. Dapatkan insight kapan harus kirim email follow-up ke HRD."
    }
  ];

  return (
    <section className="py-24 md:py-32" id="cara-kerja">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
            Cara kerjanya simpel
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Nggak perlu setup yang ribet. Mulai tracking lamaranmu dalam hitungan menit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center mb-8 relative z-10 shadow-xl">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-background font-bold flex items-center justify-center text-sm border-2 border-background">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
