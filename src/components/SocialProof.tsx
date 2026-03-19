export function SocialProof() {
  return (
    <section className="py-10 border-y border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-foreground/50 mb-8">
          Dipercaya lebih dari 10,000+ pencari kerja di Indonesia 🇮🇩
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for logos, using text for now to keep it clean without external assets */}
          <div className="text-xl font-bold tracking-tighter">glints</div>
          <div className="text-xl font-bold tracking-tight text-blue-500">kalibrr</div>
          <div className="text-xl font-bold tracking-tight">JobStreet</div>
          <div className="text-xl font-bold tracking-tight text-blue-600">LinkedIn</div>
          <div className="text-xl font-bold tracking-tight text-red-500">Loker.id</div>
        </div>
      </div>
    </section>
  );
}
