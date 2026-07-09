import { Activity } from "lucide-react";

export default function Platform() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono flex-1 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-slate-900 border-2 border-slate-700 mb-6 shadow-lg">
          <Activity className="text-teal-500" size={32} />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          Streaming <span className="text-teal-500">Platform</span>
        </h1>
        <p className="text-slate-400 text-lg uppercase tracking-widest font-bold">
          System Initialization Pending
        </p>
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border-2 border-slate-700 rounded p-1 shadow-xl">
        <div className="border border-slate-800 bg-slate-950 rounded p-8 text-center flex flex-col items-center">
          <div className="w-full max-w-md bg-slate-900 h-4 rounded mb-2 overflow-hidden border border-slate-800">
            <div className="h-full bg-teal-600 w-1/4 animate-pulse"></div>
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-widest mt-4">Building algorithmic curation layers...</p>
        </div>
      </div>
    </div>
  );
}
