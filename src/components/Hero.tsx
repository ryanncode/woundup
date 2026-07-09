import { AudioWaveform } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-16">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 border-2 border-slate-700 p-8 md:p-12 rounded shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-900/30 border border-teal-700/50 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 uppercase mt-0.5">Vici Engine Active</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight mb-6 uppercase">
          Autonomous <br className="hidden md:block" />
          <span className="text-teal-500">Streaming</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-base text-slate-400 mx-auto mb-10 font-mono">
          Wound Up is building the next generation of algorithmic DJ streaming. 
          While we construct the core systems, our standalone mixing engine is available for direct testing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://dj.woundup.org" 
            className="inline-flex items-center justify-center gap-3 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors bg-teal-600 border-2 border-teal-500 rounded hover:bg-teal-500 shadow-sm"
          >
            <AudioWaveform size={16} />
            Launch Vici DJ Tool
          </a>
          <a 
            href="#learn-more" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors bg-slate-800 border-2 border-slate-700 rounded hover:bg-slate-700 hover:text-slate-200"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
