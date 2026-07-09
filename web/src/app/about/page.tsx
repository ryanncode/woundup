export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12 border-b-2 border-slate-800 pb-8">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          Project <span className="text-teal-500">Origin</span>
        </h1>
        <p className="text-slate-400 font-mono text-lg uppercase tracking-widest font-bold">
          The Antidote to Engagement Algorithms
        </p>
      </div>

      <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg space-y-6 text-slate-300 leading-relaxed">
        <p>
          <strong className="text-white">Wound Up</strong> was born from a fundamental frustration with modern streaming platforms: the auto-play trap.
        </p>
        <p>
          When you finish listening to an incredible, meticulously crafted DJ set on mainstream platforms, their algorithms inevitably hijack your queue. Because they optimize strictly for engagement and popularity, they abandon the underground vibe you were exploring and aggressively route you toward mainstream tracks. They rely on superficial metadata and view counts, completely failing to understand the actual <strong className="text-teal-400">vibe</strong> and trajectory of the mix you just heard.
        </p>
        <p>
          We built Wound Up to solve this. It is a strictly <strong className="text-white">content-based</strong> discovery engine, not a popularity contest. By leveraging semantic AI embeddings and high-performance vector search, Wound Up maps the exact mood and sound of a recorded mix. When your set ends, it seamlessly queues up another mix that shares that exact same sonic profile, allowing you to listen to a curated string of similar sets without ever breaking the vibe or falling into an endless, dull stream of background noise.
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
