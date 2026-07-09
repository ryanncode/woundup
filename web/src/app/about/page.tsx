export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12 border-b-2 border-slate-800 pb-8">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          Project <span className="text-teal-500">Origin</span>
        </h1>
        <p className="text-slate-400 font-mono text-lg uppercase tracking-widest font-bold">
          Solving the Empty Room Problem
        </p>
      </div>

      <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg space-y-6 text-slate-300 leading-relaxed">
        <p>
          <strong className="text-white">Wound Up</strong> was born from a fundamental frustration in digital broadcasting: what happens when the set ends?
        </p>
        <p>
          While live DJs provide unmatched energy and curation, keeping a stream flowing seamlessly 24/7 is impossible without falling back on disjointed, algorithmically generated single-track playlists. These standard algorithms rely on basic metadata (BPM, genre, popularity) and entirely fail to understand the true <strong className="text-teal-400">vibe</strong> and trajectory of a meticulously crafted hour-long mix.
        </p>
        <p>
          We set out to build a platform that could intelligently discover and route listeners to the perfect next recorded mix. By leveraging semantic AI embeddings and high-performance vector search, Wound Up mathematically maps the mood of DJ sets, allowing it to autonomously shuffle between mixes and keep the energy alive endlessly.
        </p>
        
        <div className="pt-6 border-t border-slate-800 mt-8">
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
            System Status: <span className="text-teal-500">Discovery Engine In Development</span>
          </p>
        </div>
      </div>
    </div>
  );
}
