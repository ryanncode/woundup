export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          Project <span className="text-teal-500">Origin</span>
        </h1>
        <div className="h-1 w-20 bg-teal-500 mb-8 rounded"></div>
      </div>

      <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg space-y-6 text-slate-300 leading-relaxed">
        <p>
          <strong className="text-white">Wound Up</strong> was born from a desire to solve the "empty room" problem in digital broadcasting. While live DJs provide unmatched energy, maintaining a 24/7 stream requires either a massive roster of talent or resorting to unmixed, disjointed playlists.
        </p>
        <p>
          We set out to build an autonomous engine capable of matching the energy, flow, and technical precision of a human operator. The core of this system is the <strong className="text-white">Vici Engine</strong>—a high-performance, WebAssembly-powered DSP architecture running entirely in the browser.
        </p>
        <p>
          Currently, the Vici Engine is available as a standalone tool for DJs to mix manually. Meanwhile, our team is constructing the algorithmic curation layer that will soon power Wound Up's fully autonomous broadcasting platform.
        </p>
        <div className="pt-6 border-t border-slate-800 mt-8">
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
            System Status: <span className="text-teal-500">Phase 1 (Engine Active)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
