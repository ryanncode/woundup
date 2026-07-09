export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          System <span className="text-teal-500">Access</span>
        </h1>
        <p className="text-slate-400 text-lg mb-4">
          Select your operational tier for the Wound Up streaming platform.
        </p>
        <div className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded">
          Pricing To Be Announced
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg flex flex-col opacity-75">
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase">Listener</h3>
          <div className="text-3xl font-black text-slate-100 mb-6">$0<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Listen to algorithmic stations</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Upvote sets and vibe tags</li>
            <li className="flex items-center gap-2 text-slate-600"><span className="font-bold">×</span> Submit own recorded sets</li>
            <li className="flex items-center gap-2 text-slate-600"><span className="font-bold">×</span> View embedding analytics</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-400 bg-slate-800 border-2 border-slate-700 rounded cursor-not-allowed">
            Free Default
          </button>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-900 border-2 border-teal-500 p-8 rounded shadow-[0_0_20px_rgba(20,184,166,0.15)] flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border border-teal-400">
            Recommended
          </div>
          <h3 className="text-xl font-bold text-teal-400 mb-2 uppercase">Curator</h3>
          <div className="text-3xl font-black text-white mb-6">$5<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Everything in Listener</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Submit your recorded mixes</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Detailed semantic vibe analytics</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-teal-600 border-2 border-teal-500 rounded hover:bg-teal-500 transition-colors">
            Initialize
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg flex flex-col">
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase">Label</h3>
          <div className="text-3xl font-black text-slate-100 mb-6">$10<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Everything in Curator</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Unlimited roster submissions</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Direct RSS feed integration</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> White-label embedded player</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-teal-400 bg-slate-900 border-2 border-teal-700 rounded hover:bg-slate-800 transition-colors">
            Contact Ops
          </button>
        </div>
      </div>
    </div>
  );
}
