import { Link2, Disc3 } from "lucide-react";

export default function Vici() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12 border-b-2 border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-2 uppercase">
            Vici <span className="text-teal-500">Engine</span>
          </h1>
          <p className="text-slate-400 text-lg uppercase tracking-widest font-bold">
            WebAssembly DSP Core
          </p>
        </div>
        <a 
          href="https://github.com/ryanncode/vici" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors bg-slate-900 border-2 border-slate-700 rounded hover:bg-slate-800 hover:text-white shadow-sm"
        >
          <Link2 size={16} />
          View Source
        </a>
      </div>

      <div className="space-y-8">
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <div className="w-8 h-8 rounded bg-teal-900/50 flex items-center justify-center border border-teal-500">
              <Disc3 className="text-teal-400" size={16} />
            </div>
            <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">Architecture</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            The Vici Engine is a high-performance WebAudio application designed to process low-latency, complex signal chains directly within the browser. It leverages <strong className="text-white">Faust (Functional Audio Stream)</strong> compiled to WebAssembly to generate real-time filters, EQs, and spatial effects with near-native performance.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Unlike traditional web audio applications that suffer from garbage collection stutters, Vici utilizes isolated `AudioWorklets` operating on entirely separate threads. This guarantees sample-accurate playback and pristine phase-aligned crossfading.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg">
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide mb-6 border-b border-slate-800 pb-4">Open Source Integration</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            While Wound Up focuses on intelligent mix discovery and routing, the Vici Engine is built and maintained as a standalone, open-source tool for live in-browser mixing. You can integrate the core Vici player into your own web projects today.
          </p>
          
          <div className="bg-slate-950 p-4 rounded border-2 border-slate-800 overflow-x-auto text-xs font-mono text-teal-400 shadow-inner">
            <pre><code>
{`import { AudioEngine } from './vici';

// Initialize the DSP core
const engine = new AudioEngine();

// Load stems and route through the Faust filter bank
engine.loadTrack('deck-a', 'url/to/audio.flac');
engine.start();`}
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
