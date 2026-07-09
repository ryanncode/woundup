import { Link2 } from "lucide-react";

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <div className="mb-12 border-b-2 border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
            Wound Up <span className="text-teal-500">Platform</span>
          </h1>
          <p className="text-slate-400 font-mono text-lg">
            The autonomous mix discovery and streaming engine.
          </p>
        </div>
        <a 
          href="https://github.com/ryanncode/woundup" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors bg-slate-900 border-2 border-slate-700 rounded hover:bg-slate-800 hover:text-white shadow-sm"
        >
          <Link2 size={16} />
          View Source
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            01
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Semantic Vibe Matching</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Wound Up leverages the Gemini 2.0 embedding model to deeply understand the mood, energy, and genre descriptions of recorded DJ sets, mapping them into high-dimensional vectors.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Vector Search Engine</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Powered by Typesense, our platform performs sub-millisecond nearest-neighbor searches to instantly pull up the exact right next mix based on current room energy.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            03
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Endless Auto-Shuffle</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Stop worrying about the music stopping. As one recorded stream ends, Wound Up automatically routes you to the next semantically matched set, keeping the flow going endlessly.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-4 text-slate-500 font-bold">
            04
          </div>
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase tracking-wide">Curator Analytics <span className="text-[10px] text-teal-500 bg-teal-900/30 px-2 py-0.5 rounded ml-2 border border-teal-500/50">COMING SOON</span></h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Upload your own recorded sets and see exactly where they fall in the global embedding space to reach listeners seeking your specific sound.
          </p>
        </div>
      </div>
    </div>
  );
}
