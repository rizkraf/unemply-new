import { motion } from 'motion/react';
import { LayoutDashboard, BellRing, BarChart3, MapPin } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <LayoutDashboard size={24} className="text-indigo-400" />,
      title: "Kanban Pipeline",
      desc: "Visualisasi status lamaran dari Wishlist hingga Offer. Drag and drop semudah memindahkan sticky notes."
    },
    {
      icon: <BellRing size={24} className="text-amber-400" />,
      title: "Reminder Otomatis",
      desc: "Notifikasi follow-up sebelum kamu lupa. Jangan biarkan lamaranmu menggantung tanpa kejelasan."
    },
    {
      icon: <BarChart3 size={24} className="text-teal-400" />,
      title: "Statistik Lamaranmu",
      desc: "Pantau conversion rate, rata-rata waktu respons HRD, dan platform mana yang paling efektif buatmu."
    },
    {
      icon: <MapPin size={24} className="text-rose-400" />,
      title: "Khusus Indonesia",
      desc: "Terintegrasi dengan platform lokal seperti Glints dan JobStreet. Format gaji dalam IDR, bukan USD."
    }
  ];

  return (
    <section className="py-24 bg-surface/20" id="fitur">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
            Fitur yang ngerti kebutuhanmu
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Didesain khusus untuk job seeker Indonesia. Semua yang kamu butuhkan untuk mendarat di pekerjaan impian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 hover:bg-surface/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-foreground/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground/90 mb-3">{feature.title}</h3>
              <p className="text-foreground/50 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
