import { AudioWaveform } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center pt-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 border-2 border-slate-700 p-8 md:p-12 rounded shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-900/30 border border-teal-700/50 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></span>
          <span className="text-teal-400 font-bold uppercase tracking-widest text-[10px] mt-0.5">Vibe Discovery Engine Active</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase leading-tight">
          The perfect next mix,<br />
          <span className="text-teal-500">Mathematically queued.</span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-400 mb-10 max-w-2xl mx-auto font-mono leading-relaxed">
          Wound Up uses semantic embeddings and high-speed vector search to analyze the structural trajectory of DJ sets, autonomously queuing the ideal next stream to maintain seamless, continuous playback.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/features" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold uppercase tracking-wider text-xs rounded transition-all shadow-[0_0_15px_rgba(20,184,166,0.5)] border border-teal-400">
            Explore Features
          </Link>
          <a 
            href="https://dj.woundup.org" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors bg-slate-800 border-2 border-slate-700 rounded hover:bg-slate-700 hover:text-white shadow-sm"
          >
            <AudioWaveform size={16} />
            Launch Vici DJ Tool
          </a>
        </div>
      </div>
    </div>
  );
}
