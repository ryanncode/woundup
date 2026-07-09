export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <div className="mb-12 border-b-2 border-slate-800 pb-8">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          Wound Up <span className="text-teal-500">Platform</span>
        </h1>
        <p className="text-slate-400 font-mono text-lg">
          The upcoming algorithmic broadcasting system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            01
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Continuous Mix Generation</h3>
          <p className="text-slate-400 text-sm">
            Dynamically generated playlists that transition seamlessly using beat-matched crossfading, maintaining energy and flow indefinitely.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Vici DSP Engine</h3>
          <p className="text-slate-400 text-sm">
            High-performance WebAssembly digital signal processing for real-time EQs, filters, and track manipulation right in the browser.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-teal-900/50 border border-teal-500 rounded flex items-center justify-center mb-4 text-teal-400 font-bold">
            03
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-2 uppercase tracking-wide">Algorithmic Curation</h3>
          <p className="text-slate-400 text-sm">
            Advanced track selection algorithms that read the room's requested vibe and dynamically adjust the queue to match the desired mood.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-6 rounded shadow-lg">
          <div className="w-10 h-10 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-4 text-slate-500 font-bold">
            04
          </div>
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase tracking-wide">Collaborative Queues <span className="text-[10px] text-teal-500 bg-teal-900/30 px-2 py-0.5 rounded ml-2 border border-teal-500/50">COMING SOON</span></h3>
          <p className="text-slate-500 text-sm">
            Allow your audience to vote on upcoming tracks, with the engine automatically integrating top requests into the active mix.
          </p>
        </div>
      </div>
    </div>
  );
}
