import { Briefcase, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background">
                <Briefcase size={18} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Unemply</span>
            </div>
            <p className="text-foreground/50 text-sm max-w-xs text-center md:text-left">
              Lacak lamaranmu, raih kariermu. Job application tracker khusus untuk job seeker Indonesia.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-center md:text-left">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Produk</h4>
              <a href="#fitur" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Fitur</a>
              <a href="#cara-kerja" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Cara Kerja</a>
              <a href="#harga" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Harga</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Perusahaan</h4>
              <a href="#tentang" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Tentang Kami</a>
              <a href="#kontak" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Kontak</a>
              <a href="#blog" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Blog Karier</a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/40">
            © 2026 Unemply. Dibuat dengan ❤️ di Indonesia.
          </p>
          <div className="flex gap-6">
            <a href="#privasi" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Kebijakan Privasi</a>
            <a href="#syarat" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
